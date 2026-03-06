'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedNumber({ target, suffix = '' }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <div ref={ref}>{count}{suffix}</div>
}

const stats = [
  { value: 10, suffix: '+', label: 'Anos de Experiência', sublabel: 'em consultoria financeira' },
  { value: 2, suffix: 'M+', label: 'Vidas Transformadas', sublabel: 'em todo o Brasil' },
  { value: 4, suffix: '', label: 'Reuniões Estruturadas', sublabel: 'diagnóstico, plano e ação' },
]

export function Stats() {
  return (
    <section className="relative py-0">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto -mt-8 lg:-mt-12 relative z-20">
          <div className="relative bg-gradient-to-br from-[#12133A] via-[#191B4A] to-[#272A75] rounded-2xl lg:rounded-3xl border border-white/[0.06] p-8 lg:p-12 shadow-2xl shadow-black/40 overflow-hidden mb-[30px] mt-0 lg:mt-[70px]">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#6568D6]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left group relative">
                  <div className="text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-white/70 text-base font-medium">{stat.label}</div>
                  <div className="mt-0.5 text-white/35 text-sm">{stat.sublabel}</div>
                </div>
              ))}
              {/* Vertical dividers */}
              <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
