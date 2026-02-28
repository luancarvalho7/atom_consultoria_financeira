'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search, FileText, Wrench } from 'lucide-react'
import { useCtaUrl } from '@/hooks/use-cta-url'

const steps = [
  {
    number: 1,
    title: 'Raio-X Financeiro (1:1)',
    subtitle: '1a Reunião',
    icon: Search,
    items: [
      'Renda efetiva (fixa e variável)',
      'Padrão real de despesas',
      'Endividamento visível e invisível',
      'Estrutura de investimentos',
      'Objetivos de curto, médio e longo prazo',
    ],
    footer: 'Aqui identificamos onde o dinheiro está sendo mal alocado e onde ele pode trabalhar melhor.',
  },
  {
    number: 2,
    title: 'Plano Personalizado',
    subtitle: '2a Reunião',
    icon: FileText,
    items: [
      'Organização do fluxo financeiro',
      'Redefinição de prioridades',
      'Direcionamento para investimentos',
      'Ajustes estruturais necessários',
    ],
    footer: 'Nada pronto. Nada copiado. Tudo sob medida para o seu cenário específico.',
  },
  {
    number: 3,
    title: 'Implementação e Ajustes',
    subtitle: '3a Reunião',
    icon: Wrench,
    items: [
      'Revisamos o que foi aplicado',
      'Corrigimos rotas e ajustamos decisões',
      'Estruturamos acompanhamento contínuo*',
    ],
    footer: 'Colocamos o seu dinheiro para trabalhar por você. *Contratação à parte.',
  },
]

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const Icon = step.icon
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-full bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 lg:p-8 hover:border-[#6568D6]/25 hover:shadow-xl hover:shadow-[#272A75]/10 transition-all duration-500 hover:-translate-y-1">
        {/* Number watermark */}
        <div className="absolute top-4 right-5 text-8xl font-heading font-bold text-white/[0.03] group-hover:text-[#6568D6]/8 transition-colors select-none">
          {step.number}
        </div>

        <div className="relative space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#272A75] to-[#6568D6] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#272A75]/25">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#BCBEF5] uppercase tracking-wider">
                {step.subtitle}
              </div>
              <h4 className="font-heading font-bold text-lg lg:text-xl text-foreground leading-snug">
                {step.title}
              </h4>
            </div>
          </div>

          <ul className="space-y-2.5">
            {step.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6568D6] mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-foreground/60 font-medium border-t border-white/[0.06] pt-4 leading-relaxed">
            {step.footer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function BabySteps() {
  const ctaUrl = useCtaUrl()
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#272A75]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#272A75]/15 border border-[#6568D6]/20 px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9092E8]" />
            <span className="text-sm font-semibold text-[#BCBEF5]">Como Funciona</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance mb-6">
            Como Funciona a Consultoria Financeira
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            {"Sem curso. Sem discurso motivacional. Sem planilha genérica. É um raio-x completo da sua vida financeira, plano de voo para decolar o patrimônio e acompanhamento personalizado."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <a href={ctaUrl}>
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#272A75] to-[#6568D6] hover:from-[#20235D] hover:to-[#5558C0] text-white h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#272A75]/30 hover:scale-[1.02] active:scale-[0.98] border border-white/10">
              Quero garantir a consultoria
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
