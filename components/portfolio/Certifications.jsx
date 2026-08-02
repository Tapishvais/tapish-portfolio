'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

export default function Certifications() {
  return (
    <section className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="Certifications" title="Continuous learning" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass gradient-border rounded-2xl p-5"
          >
            <Award className="h-5 w-5 text-cyan-300" />
            <div className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">{c.provider}</div>
            <div className="mt-1 font-display text-base font-semibold">{c.title}</div>
            {c.detail ? (
              <div className="mt-1.5 text-xs text-muted-foreground">{c.detail}</div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
