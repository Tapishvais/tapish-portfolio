'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Command, Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/lib/portfolio-data'

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all sm:px-5 ${
        scrolled ? 'glass-strong shadow-[0_0_60px_-20px_rgba(79,70,229,0.55)]' : 'bg-transparent'
      }`}
    >
      <a href="#home" className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-bold text-white shadow-md">
          TV
        </span>
        <span className="font-display text-sm font-semibold tracking-tight">Tapish Vais</span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenPalette}
          className="hidden items-center gap-2 rounded-lg border border-border/70 bg-secondary/40 px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
          data-cursor="hover"
        >
          <Command className="h-3.5 w-3.5" />
          <span>Search</span>
          <kbd className="ml-2 rounded bg-white/5 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
        </button>

        <Button asChild size="sm" className="hidden bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-[0_0_30px_-10px_rgba(59,130,246,0.55)] hover:from-indigo-400 hover:to-blue-400 sm:inline-flex">
          <a href="https://drive.google.com/uc?export=download&id=1kiUdo3PFD3hjrljNSPVy3IMfilcwk5Wm" target="_blank" rel="noreferrer">
            <Download className="mr-1.5 h-3.5 w-3.5" /> Resume
          </a>
        </Button>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-2 top-full mt-2 rounded-2xl glass-strong p-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}
