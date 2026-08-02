'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { PROJECTS } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

function ProjectVisual({ p }) {
  return (
    <div className={`relative h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}>
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="absolute inset-0 bg-black/25" />

      {/* Mocked device frame */}
      <div className="absolute left-1/2 top-1/2 h-40 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/30 bg-black/70 p-1.5 shadow-2xl">
        <div className="h-full w-full rounded-[16px] bg-gradient-to-b from-white/10 to-white/0 p-2">
          <div className="h-2 w-10 rounded-full bg-white/40" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-white/40" />
            <div className="h-1.5 w-1/2 rounded bg-white/30" />
            <div className="h-1.5 w-2/3 rounded bg-white/25" />
          </div>
          <div className="mt-3 h-8 rounded-md bg-white/20" />
          <div className="mt-2 h-8 rounded-md bg-white/15" />
          <div className="mt-2 h-8 rounded-md bg-white/10" />
        </div>
      </div>

      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[10px] text-white backdrop-blur">
        <Sparkles className="h-3 w-3" /> Featured
      </div>
      <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[11px] text-white backdrop-blur">
        {p.tagline}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="Projects" title="Selected work I've shipped" description="A snapshot of applications built for production — fintech, AI and cross-platform mobile." />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`glass gradient-border relative overflow-hidden rounded-3xl p-5 ${i === 0 ? 'md:col-span-2' : ''}`}
          >
            <ProjectVisual p={p} />

            <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{p.description}</p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-muted-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
              ))}
            </div>

            <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" /> {f}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
