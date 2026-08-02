'use client'

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-40 bg-gradient-to-b from-transparent via-indigo-500/5 to-blue-500/10 blur-2xl" />
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-sky-500 text-[11px] font-bold text-white">TV</span>
          <span>Made with <span className="text-indigo-300">♥</span> by Tapish Vais</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Tapishvais" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/tapish-vais-249570248/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:tapishvais2003@gmail.com" className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-white/10"><Mail className="h-4 w-4" /></a>
          <a href="#home" className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white"><ArrowUp className="h-4 w-4" /></a>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Tapish Vais · All rights reserved.</div>
      </div>
    </footer>
  )
}
