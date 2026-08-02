'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    setEnabled(true)

    let rx = 0, ry = 0, dx = 0, dy = 0
    let raf
    const onMove = (e) => {
      dx = e.clientX
      dy = e.clientY
      if (dot.current) dot.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`
    }
    const tick = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    const onOver = (e) => {
      const el = e.target.closest('a,button,[data-cursor="hover"]')
      if (ring.current) ring.current.style.setProperty('--s', el ? '1.6' : '1')
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    tick()
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          width: 36,
          height: 36,
          borderRadius: 999,
          border: '1.5px solid rgba(129,140,248,0.9)',
          transform: 'translate3d(-100px,-100px,0)',
          transition: 'transform 60ms linear, scale 200ms ease',
          scale: 'var(--s, 1)',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: 'linear-gradient(135deg,#a78bfa,#22d3ee)',
          transform: 'translate3d(-100px,-100px,0)',
        }}
      />
    </>
  )
}
