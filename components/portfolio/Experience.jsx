'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { EXPERIENCE } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

export default function Experience() {
  return (
    <section id="experience" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Experience"
        title="A short but focused journey"
        description="Real product work across fintech, enterprise and emerging tech."
      />

      <div className="relative">
        {/* Vertical rail */}
        <div className="pointer-events-none absolute left-4 top-2 h-full w-[1.5px] bg-gradient-to-b from-indigo-500/70 via-blue-500/40 to-sky-400/30 sm:left-6" />

        <div className="space-y-8">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot on rail */}
              <div className="absolute left-[7px] top-6 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 shadow-[0_0_0_4px_hsl(222_25%_6%)] sm:left-[15px]">
                <Briefcase className="h-2.5 w-2.5 text-white" />
              </div>

              {/* Full-width card */}
              <div className="glass gradient-border relative overflow-hidden rounded-2xl p-6 sm:p-7">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-start">
                  {/* Left: role + company + highlights */}
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="text-foreground/90">{item.company}</span>
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {item.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: tags & meta */}
                  <div className="md:min-w-[180px] md:pl-6 md:border-l md:border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Tech & Focus</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
