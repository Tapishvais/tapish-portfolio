'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { SectionHeader } from './About'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send')
      toast.success("Message sent — I'll reply within 24 hours.")
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="Contact" title="Let's build something exceptional" description="Have a role, project or idea? Drop me a message — I read every one." />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="glass gradient-border rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold">Get in touch</h3>
            <p className="mt-1 text-sm text-muted-foreground">Based in Gurugram, working with teams worldwide.</p>

            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:tapish.vais@example.com" className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300"><Mail className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">tapish.vais@example.com</div>
                </div>
              </a>
              <a href="https://github.com/tapishvais" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300"><Github className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="font-medium">github.com/tapishvais</div>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300"><Linkedin className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/tapishvais</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300"><MapPin className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium">Gurugram, Haryana</div>
                </div>
              </div>
            </div>

            <Button asChild className="mt-6 w-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white hover:from-violet-400 hover:to-fuchsia-400">
              <a href="/resume.pdf" download><Download className="mr-2 h-4 w-4" /> Download Resume</a>
            </Button>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass gradient-border rounded-2xl p-6 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-2 bg-white/5 border-white/10" />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="mt-2 bg-white/5 border-white/10" />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</Label>
            <Textarea id="message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project, timeline and goals..." className="mt-2 bg-white/5 border-white/10" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">Typical response time: under 24 hours.</p>
            <Button type="submit" disabled={loading} className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white hover:from-violet-400 hover:to-fuchsia-400">
              <Send className="mr-1.5 h-4 w-4" /> {loading ? 'Sending…' : 'Send message'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
