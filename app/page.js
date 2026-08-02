'use client'

import { useState } from 'react'
import Navbar from '@/components/portfolio/Navbar'
import Hero from '@/components/portfolio/Hero'
import Marquee from '@/components/portfolio/Marquee'
import About from '@/components/portfolio/About'
import Skills from '@/components/portfolio/Skills'
import Experience from '@/components/portfolio/Experience'
import Projects from '@/components/portfolio/Projects'
import WhyHireMe from '@/components/portfolio/WhyHireMe'
import Testimonials from '@/components/portfolio/Testimonials'
import Certifications from '@/components/portfolio/Certifications'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'
import ScrollProgress from '@/components/portfolio/ScrollProgress'
import BackToTop from '@/components/portfolio/BackToTop'
import CustomCursor from '@/components/portfolio/CustomCursor'
import CommandPalette from '@/components/portfolio/CommandPalette'
import LoadingScreen from '@/components/portfolio/LoadingScreen'

function App() {
  const [palette, setPalette] = useState(false)

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar onOpenPalette={() => setPalette(true)} />
      <CommandPalette open={palette} setOpen={setPalette} />

      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <WhyHireMe />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}

export default App
