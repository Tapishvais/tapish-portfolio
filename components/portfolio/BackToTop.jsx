'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-[0_0_30px_-8px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
