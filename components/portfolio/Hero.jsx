'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ROLES = [
  'React Native Apps',
  'Full Stack Platforms',
  'AI-powered Products',
  'Fintech Experiences',
  'Modern Web Interfaces',
]

function useTyping(words, speed = 60, pause = 1400) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [dir, setDir] = useState(1)
  useEffect(() => {
    const w = words[i % words.length]
    let t
    if (dir === 1) {
      if (text.length < w.length) {
        t = setTimeout(() => setText(w.slice(0, text.length + 1)), speed)
      } else {
        t = setTimeout(() => setDir(-1), pause)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(w.slice(0, text.length - 1)), speed / 2)
      } else {
        setDir(1)
        setI((v) => v + 1)
      }
    }
    return () => clearTimeout(t)
  }, [text, dir, i, words, speed, pause])
  return text
}

function TechCard({ title, subtitle, glyph, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: 0 }}
      className={`glass gradient-border relative overflow-hidden rounded-2xl p-3.5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-lg">{glyph}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-[11px] text-muted-foreground">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const typed = useTyping(ROLES)

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute -top-10 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[110px] animate-blob" />

      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-10 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </div>

          <p className="mt-6 font-mono text-sm text-muted-foreground">Hello, I'm</p>
          <h1 className="mt-1 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">Tapish Vais</span>
          </h1>
          <h2 className="mt-3 font-display text-xl font-semibold text-muted-foreground sm:text-2xl">
            React Native & Full Stack Developer
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-lg">
            <span className="text-muted-foreground">I build</span>
            <span className="caret font-display font-semibold text-gradient-brand">{typed || '\u00A0'}</span>
          </div>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Building high-performance mobile applications, modern web platforms and scalable backend solutions — with React Native, React, Next.js and AI-powered tooling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:from-indigo-400 hover:to-blue-400">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <a href="https://github.com/Tapishvais" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/tapish-vais-249570248/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="mailto:tapishvais2003@gmail.com" className="flex items-center gap-1.5 hover:text-foreground"><Mail className="h-4 w-4" /> Email</a>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Gurugram, IN</span>
          </div>
        </motion.div>

        {/* Right side: animated workspace card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-3xl glass-strong gradient-border p-4 shadow-2xl noise">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-2 py-1 text-[11px] text-muted-foreground">~/tapishvais/portfolio — zsh</div>
            </div>

            {/* Fake code block */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[12.5px] leading-6">
              <div><span className="text-indigo-300">const</span> <span className="text-cyan-300">developer</span> = {'{'}</div>
              <div className="pl-4"><span className="text-indigo-300">name</span>: <span className="text-emerald-300">'Tapish Vais'</span>,</div>
              <div className="pl-4"><span className="text-indigo-300">stack</span>: [<span className="text-emerald-300">'React Native'</span>, <span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'Node'</span>],</div>
              <div className="pl-4"><span className="text-indigo-300">focus</span>: <span className="text-emerald-300">'fintech + AI'</span>,</div>
              <div className="pl-4"><span className="text-indigo-300">shipping</span>: <span className="text-amber-300">true</span>,</div>
              <div>{'};'}</div>
              <div className="mt-2 text-muted-foreground">$ <span className="text-white">yarn build</span> <span className="animate-shimmer inline-block h-3 w-16 align-middle rounded" /></div>
            </div>

            {/* Floating tech cards */}
            <TechCard glyph="⚛" title="React Native" subtitle="0.74 · New Architecture" className="absolute -left-6 top-24 hidden animate-float sm:block" />
            <TechCard glyph="▲" title="Next.js 15" subtitle="App Router · RSC" className="absolute -right-6 top-8 hidden animate-float sm:block" />
            <TechCard glyph="💳" title="Stripe" subtitle="Payments" className="absolute -right-3 bottom-16 hidden animate-float sm:block" />
            <TechCard glyph="🏦" title="Plaid" subtitle="Bank Linking" className="absolute -left-6 -bottom-4 hidden animate-float sm:block" />

            {/* Stats footer */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/5 p-2 text-center">
                <div className="font-display text-lg font-bold text-gradient-brand">99</div>
                <div className="text-[10px] text-muted-foreground">Lighthouse</div>
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center">
                <div className="font-display text-lg font-bold text-gradient-brand">60fps</div>
                <div className="text-[10px] text-muted-foreground">Interactions</div>
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-center">
                <div className="font-display text-lg font-bold text-gradient-brand">A+</div>
                <div className="text-[10px] text-muted-foreground">Accessibility</div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-sky-400/20 blur-2xl" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none flex justify-center pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-[11px] text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span className="uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-8 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 20 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="h-4 w-full bg-gradient-to-b from-indigo-400 to-sky-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
