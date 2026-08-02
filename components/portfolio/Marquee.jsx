'use client'

import { MARQUEE_TECH } from '@/lib/portfolio-data'

export default function Marquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH]
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="font-display text-xl font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
            {t}
            <span className="mx-8 text-white/10">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
