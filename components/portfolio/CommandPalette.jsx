'use client'

import { useEffect } from 'react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Github, Linkedin, Mail, Download, User, Code2, Briefcase, Layers, Send } from 'lucide-react'
import { RESUME_URL } from '@/lib/portfolio-data'

const SECTIONS = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Send },
]

export default function CommandPalette({ open, setOpen }) {
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const external = (url) => {
    setOpen(false)
    window.open(url, '_blank')
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {SECTIONS.map((s) => (
            <CommandItem key={s.id} onSelect={() => go(s.id)}>
              <s.icon className="mr-2 h-4 w-4" /> {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem onSelect={() => external('https://github.com/Tapishvais')}><Github className="mr-2 h-4 w-4" /> GitHub</CommandItem>
          <CommandItem onSelect={() => external('https://www.linkedin.com/in/tapish-vais-249570248/')}><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</CommandItem>
          <CommandItem onSelect={() => (window.location.href = 'mailto:tapishvais2003@gmail.com')}><Mail className="mr-2 h-4 w-4" /> Email me</CommandItem>
          <CommandItem onSelect={() => external(RESUME_URL)}><Download className="mr-2 h-4 w-4" /> Download Resume</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
