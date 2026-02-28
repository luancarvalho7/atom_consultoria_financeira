'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Target, TrendingUp, Shield, Heart, Sparkles, Check, ArrowRight } from 'lucide-react'

const audiences = [
  { text: 'Ganha bem e quer parar de errar caro', icon: Target, color: 'blue' },
  { text: 'Mudou de renda ou regime de trabalho', icon: TrendingUp, color: 'indigo' },
  { text: 'Já investe, mas sente que falta direção', icon: Shield, color: 'violet' },
  { text: 'Está formando família e precisa de estrutura', icon: Heart, color: 'rose' },
  { text: 'Prefere pagar para resolver do que improvisar', icon: Sparkles, color: 'amber' },
]

const colorMap: Record<string, { bg: string; icon: string; border: string; glow: string }> = {
  blue: { bg: 'bg-blue-500/10', icon: 'text-blue-500', border: 'border-blue-500/20', glow: 'group-hover:shadow-blue-500/10' },
  indigo: { bg: 'bg-indigo-500/10', icon: 'text-indigo-500', border: 'border-indigo-500/20', glow: 'group-hover:shadow-indigo-500/10' },
  violet: { bg: 'bg-violet-500/10', icon: 'text-violet-500', border: 'border-violet-500/20', glow: 'group-hover:shadow-violet-500/10' },
  rose: { bg: 'bg-rose-500/10', icon: 'text-rose-500', border: 'border-rose-500/20', glow: 'group-hover:shadow-rose-500/10' },
  amber: { bg: 'bg-amber-500/10', icon: 'text-amber-500', border: 'border-amber-500/20', glow: 'group-hover:shadow-amber-500/10' },
}

export function TrustedPros() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background relative overflow-hidden" ref={ref}>
      {/* Dramatic centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#272A75]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className={`inline-flex items-center gap-2 bg-[#272A75]/15 border border-[#6568D6]/20 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Users className="w-4 h-4 text-[#9092E8]" />
              <span className="text-sm font-semibold text-[#BCBEF5]">Para Quem É</span>
            </div>
            <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance leading-[1.15] mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {'Essa consultoria é para quem quer '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#9092E8] to-[#BCBEF5] bg-clip-text text-transparent">resultados reais.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 80 2 100 4C120 6 160 6 199 3" stroke="url(#underline-grad)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9092E8" />
                      <stop offset="1" stopColor="#BCBEF5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h3>
            <p className={`text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {'Se você se encaixa em pelo menos um dos perfis abaixo, a consultoria foi feita para você.'}
            </p>
          </div>

          {/* Audience Cards - Bento-like layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {audiences.map((item, index) => {
              const Icon = item.icon
              const colors = colorMap[item.color]
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index === 3 ? 'sm:col-span-1 lg:col-span-1' : ''}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`relative h-full bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 lg:p-7 hover:border-[#6568D6]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${colors.glow}`}>
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] ${colors.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="text-foreground font-medium leading-relaxed block">{item.text}</span>
                      </div>
                    </div>

                    {/* Hover check */}
                    <div className="absolute top-5 right-5 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </section>
  )
}
