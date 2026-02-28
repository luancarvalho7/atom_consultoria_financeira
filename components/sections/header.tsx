'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          <a href="/" className="group">
            <img 
              src="/atom_logo.webp" 
              alt="Atom Logo"
              className="h-9 lg:h-10 w-auto group-hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
