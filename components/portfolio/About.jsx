'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/portfolio-data'
import { GraduationCap, Briefcase, Cpu, Code2 } from 'lucide-react'

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = (t0) => {
      const now = performance.now()
      const p = Math.min(1, (now - t0) / duration)
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(() => step(t0))
      else setN(value)
    }
    requestAnimationFrame((t) => step(t))
  }, [inView, value])
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  const chips = [
    { icon: <Briefcase className="h-3.5 w-3.5" />, label: 'Junior iOS Developer @ A3 Ideanix' },
    { icon: <GraduationCap className="h-3.5 w-3.5" />, label: 'B.Tech Computer Science' },
    { icon: <Cpu className="h-3.5 w-3.5" />, label: 'Fintech · AI · Mobile' },
    { icon: <Code2 className="h-3.5 w-3.5" />, label: 'Full Stack + REST APIs' },
  ]

  return (
    <section id="about" className="container relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeader eyebrow="About" title="Engineer who cares about the details" />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a <span className="text-foreground">Computer Science Engineer</span> currently working as a{' '}
            <span className="text-foreground">Junior iOS Developer at A3 Ideanix Technology</span>, where I ship a{' '}
            <span className="text-foreground">US-based fintech React Native application</span> with Stripe and Plaid at its core.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I love building products that <span className="text-foreground">feel fast</span> and{' '}
            <span className="text-foreground">look premium</span> — from{' '}
            <span className="text-foreground">AI applications</span> and{' '}
            <span className="text-foreground">payment integrations</span> to{' '}
            <span className="text-foreground">full-stack web platforms</span> and hardened{' '}
            <span className="text-foreground">REST APIs</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                {c.icon} {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <div key={s.label} className="glass gradient-border relative overflow-hidden rounded-2xl p-5">
                <div className="font-display text-4xl font-bold text-gradient-brand">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-violet-500/15 blur-2xl" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-violet-400" /> {eyebrow}
        </div>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
      </motion.div>
    </div>
  )
}
