'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useCtaUrl } from '@/hooks/use-cta-url'

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(101,104,214,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(101,104,214,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
      }} />
      {/* Main glow orbs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#272A75]/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-[#6568D6]/8 rounded-full blur-[100px] animate-glow-pulse animation-delay-1000" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#272A75]/6 rounded-full blur-[160px]" />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(240_12%_2.5%)_75%)]" />
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-fade-up animation-delay-400">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#272A75]/20 via-[#6568D6]/10 to-transparent rounded-[2rem] blur-2xl opacity-60" />
      
      {/* Main Dashboard Card */}
      <div className="relative bg-gradient-to-br from-[#0D0F2E] via-[#0F1235] to-[#121540] rounded-2xl lg:rounded-3xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6568D6]/5 via-transparent to-[#272A75]/5" />
        
        <div className="relative p-5 lg:p-8 space-y-5 lg:space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/atom_logo.webp" alt="Atom" className="h-6 w-auto" />
              <span className="text-white/60 text-sm font-medium tracking-wide">Consultoria Financeira</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Ativo</span>
            </div>
          </div>

          {/* Balance */}
          <div className="space-y-1.5">
            <div className="text-white/40 text-xs uppercase tracking-[0.15em] font-medium">{'Patrimônio Total'}</div>
            <div className="text-white text-3xl lg:text-4xl font-heading font-bold tracking-tight">R$ 247.829</div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M6 2L10 7H2L6 2Z" fill="currentColor"/></svg>
                <span>12.4%</span>
              </div>
              <span className="text-white/30 text-xs">{'vs. mês anterior'}</span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative h-28 lg:h-32">
            <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6568D6" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#6568D6" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#272A75"/>
                  <stop offset="50%" stopColor="#6568D6"/>
                  <stop offset="100%" stopColor="#9092E8"/>
                </linearGradient>
              </defs>
              <path
                d="M 0 100 C 50 85 80 90 120 70 C 160 50 190 65 230 45 C 270 25 310 35 350 20 C 370 12 390 15 400 10 L 400 120 L 0 120 Z"
                fill="url(#heroGrad)"
              />
              <path
                d="M 0 100 C 50 85 80 90 120 70 C 160 50 190 65 230 45 C 270 25 310 35 350 20 C 370 12 390 15 400 10"
                fill="none"
                stroke="url(#heroLine)"
                strokeWidth="2.5"
              />
              <circle cx="400" cy="10" r="4" fill="#9092E8" />
              <circle cx="400" cy="10" r="8" fill="#9092E8" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Consultoria Progress */}
          <div className="space-y-3">
            {[
              { label: 'Raio-X Financeiro', done: true },
              { label: 'Plano Personalizado', done: true },
              { label: 'Implementação', done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.done ? 'bg-gradient-to-br from-[#272A75] to-[#6568D6] text-white shadow-lg shadow-[#272A75]/30' : 'bg-white/5 text-white/30 border border-white/10'}`}>
                  {i + 1}
                </div>
                <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${item.done ? 'bg-gradient-to-r from-[#272A75] to-[#6568D6] w-full' : 'bg-[#6568D6]/20 w-1/3'}`} />
                </div>
                <span className={`text-xs font-medium ${item.done ? 'text-white/60' : 'text-white/25'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Card Top Right */}
      <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-6 bg-gradient-to-br from-[#1A1D52] to-[#191B4A] rounded-xl lg:rounded-2xl shadow-2xl shadow-black/30 p-3 lg:p-4 animate-float border border-white/[0.1]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/20">
            <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Raio-X Completo</div>
            <div className="text-[10px] text-white/40">{'Diagnóstico pronto'}</div>
          </div>
        </div>
      </div>

      {/* Floating Card Bottom Left */}
      <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-6 bg-gradient-to-br from-[#1A1D52] to-[#191B4A] rounded-xl lg:rounded-2xl shadow-2xl shadow-black/30 p-3 lg:p-4 animate-float animation-delay-800 border border-white/[0.1]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#6568D6]/15 flex items-center justify-center border border-[#6568D6]/20">
            <svg className="w-4 h-4 text-[#9092E8]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-white">+R$ 2.194</div>
            <div className="text-[10px] text-white/40">{'Economizado/mês'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const ctaUrl = useCtaUrl()
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
      <GridPattern />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto pt-28 pb-20 lg:pt-32 lg:pb-0">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-[#272A75]/15 border border-[#6568D6]/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#9092E8]" />
                <span className="text-sm font-medium text-[#BCBEF5]">Consultoria Financeira Personalizada</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-tight animate-fade-up animation-delay-200">
              {'Você '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#6568D6] via-[#9092E8] to-[#BCBEF5] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                  evoluiu.
                </span>
              </span>
              {' O seu dinheiro precisa acompanhar.'}
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty animate-fade-up animation-delay-400">
              {'Pare de desperdiçar dinheiro gastando tudo o que ganha. Contrate a Consultoria Financeira da Atom.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
              <a href={ctaUrl}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#272A75] to-[#6568D6] hover:from-[#20235D] hover:to-[#5558C0] text-white h-14 px-8 text-sm sm:text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#272A75]/30 hover:scale-[1.02] active:scale-[0.98] border border-white/10">
                  {'Quero meu raio-x financeiro'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2 animate-fade-up animation-delay-800">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-[#272A75] to-[#6568D6] flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
                    {['M','J','A','P'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2M+</span> vidas transformadas
              </div>
            </div>
          </div>

          {/* Right - Dashboard */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
