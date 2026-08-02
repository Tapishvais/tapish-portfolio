'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

export default function Experience() {
  return (
    <section id="experience" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="Experience" title="A short but focused journey" description="Real product work across fintech, enterprise and emerging tech." />

      <div className="relative">
        <div className="absolute left-4 top-2 h-full w-[1.5px] bg-gradient-to-b from-violet-500/60 via-fuchsia-500/40 to-cyan-400/40 md:left-1/2" />

        <div className="space-y-10">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'}`}
            >
              <div className={`relative pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <div className="absolute left-[7px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_0_4px_hsl(240_10%_5%)] md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-2.5 w-2.5 text-white" />
                </div>
                <div className="glass gradient-border rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.company} · {item.location}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{item.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" /> <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
