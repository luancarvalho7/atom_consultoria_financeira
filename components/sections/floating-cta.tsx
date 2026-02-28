'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useCtaUrl } from '@/hooks/use-cta-url'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const ctaUrl = useCtaUrl()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={ctaUrl}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-[#272A75] to-[#6568D6] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-2xl shadow-[#272A75]/30 transition-all duration-500 hover:scale-105 active:scale-95 hover:shadow-[#272A75]/40 border border-white/10 ${
        visible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <span className="hidden sm:inline">Quero minha consultoria</span>
      <span className="sm:hidden">Começar</span>
      <ArrowRight className="w-4 h-4" />
    </a>
  )
}
