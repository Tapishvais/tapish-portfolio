'use client'

import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '@/lib/portfolio-data'
import { SectionHeader } from './About'

export default function Skills() {
  return (
    <section id="skills" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Skills"
        title="Tools I reach for every day"
        description="A pragmatic toolkit built around React Native, modern web and reliable backend integrations."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: gi * 0.05 }}
            className="glass gradient-border group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <span className={`rounded-full bg-gradient-to-r ${group.accent} px-2 py-0.5 text-[10px] font-medium text-white`}>{group.items.length}</span>
            </div>
            <ul className="mt-5 space-y-4">
              {group.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:opacity-80" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
