'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

export default function Testimonials() {
  return (
    <section className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="Testimonials" title="What people say" />

      <div className="columns-1 gap-5 md:columns-2 lg:columns-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="glass gradient-border mb-5 break-inside-avoid rounded-2xl p-6"
          >
            <Quote className="h-6 w-6 text-violet-400" />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t.quote}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-semibold text-white">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
