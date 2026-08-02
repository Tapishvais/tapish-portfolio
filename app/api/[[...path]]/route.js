import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let cachedClient = null
async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URL)
    await cachedClient.connect()
  }
  const dbName = process.env.DB_NAME || 'portfolio'
  return cachedClient.db(dbName)
}

function json(data, status = 200) {
  return NextResponse.json(data, { status })
}

async function handle(req, { params }) {
  const resolved = (await params) || {}
  const parts = resolved.path || []
  const route = parts.join('/')
  const method = req.method

  try {
    if (!route || route === '') {
      return json({ ok: true, name: 'Tapish Vais Portfolio API', time: new Date().toISOString() })
    }

    if (route === 'health') {
      return json({ status: 'ok' })
    }

    if (route === 'contact') {
      const db = await getDb()
      if (method === 'POST') {
        const body = await req.json().catch(() => ({}))
        const { name, email, message } = body || {}
        if (!name || !email || !message) {
          return json({ error: 'name, email and message are required' }, 400)
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return json({ error: 'Invalid email address' }, 400)
        }
        const doc = {
          id: uuidv4(),
          name: String(name).slice(0, 200),
          email: String(email).slice(0, 200),
          message: String(message).slice(0, 5000),
          createdAt: new Date().toISOString(),
        }
        await db.collection('contacts').insertOne(doc)
        return json({ ok: true, id: doc.id }, 201)
      }
      if (method === 'GET') {
        const items = await db.collection('contacts').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
        return json({ items })
      }
    }

    return json({ error: 'Not found', route, method }, 404)
  } catch (err) {
    console.error('API error', err)
    return json({ error: 'Internal server error', detail: String(err?.message || err) }, 500)
  }
}

export async function GET(req, ctx) { return handle(req, ctx) }
export async function POST(req, ctx) { return handle(req, ctx) }
export async function PUT(req, ctx) { return handle(req, ctx) }
export async function DELETE(req, ctx) { return handle(req, ctx) }
export async function PATCH(req, ctx) { return handle(req, ctx) }
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
