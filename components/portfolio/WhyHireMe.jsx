'use client'

import { motion } from 'framer-motion'
import { WHY_HIRE_ME } from '@/lib/portfolio-data'
import { SectionHeader } from './About'
import { Braces, Layers, Smartphone, Zap, PenTool, Puzzle, Sparkles, Cable } from 'lucide-react'

const ICONS = {
  'Clean Code': Braces,
  'Scalable Architecture': Layers,
  'Responsive Design': Smartphone,
  'API Integration': Cable,
  'Cross Platform Apps': Smartphone,
  'Performance Optimization': Zap,
  'Problem Solving': Puzzle,
  'Modern UI Development': PenTool,
}

export default function WhyHireMe() {
  return (
    <section className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Why work with me"
        title="Craft that shows in every commit"
        description="I obsess over performance, clarity and details you won't need to explain twice."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_HIRE_ME.map((c, i) => {
          const Icon = ICONS[c.title] || Sparkles
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass gradient-border group relative overflow-hidden rounded-2xl p-5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-violet-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
