'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { useCtaUrl } from '@/hooks/use-cta-url'

const painPoints = [
  'Não sabe exatamente quanto sobra no final do mês',
  'Investe sem uma linha clara de decisão',
  'Mistura cartão, parcela, financiamento e aplicação',
  'Trabalha muito, mas não tem clareza patrimonial',
]

const benefits = [
  'Você passa a saber exatamente quanto ganha, gasta e acumula',
  'Elimina desperdícios invisíveis',
  'Organiza investimentos com critério',
  'Define prioridades reais (imóvel, filhos, aposentadoria)',
  'Toma decisões com segurança',
]

export function Assessment() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const ctaUrl = useCtaUrl()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Dramatic centered glow inspired by Oxaley */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#272A75]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Top headline */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#272A75]/15 border border-[#6568D6]/20 px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9092E8]" />
              <span className="text-sm font-semibold text-[#BCBEF5]">Diagnóstico</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance mb-6 leading-tight">
              {'Renda de CEO com organização de estagiário '}
              <span className="bg-gradient-to-r from-[#9092E8] to-[#BCBEF5] bg-clip-text text-transparent">
                {'não combina.'}
              </span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              {"Se você ganha bem, mas ainda sente que algo não está certo, você precisa de maturidade financeira. E nós te guiamos por esse caminho."}
            </p>
          </div>

          {/* Two columns: Problems vs Solutions */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Problems */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] p-7 lg:p-9 h-full hover:border-white/[0.1] transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/10">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">Se você se identifica...</h4>
                </div>
                <div className="space-y-4">
                  {painPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full border-2 border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div
              className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="bg-[#272A75]/10 rounded-2xl border border-[#6568D6]/15 p-7 lg:p-9 h-full hover:border-[#6568D6]/25 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#6568D6]/10 flex items-center justify-center border border-[#6568D6]/15">
                    <CheckCircle2 className="w-5 h-5 text-[#9092E8]" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-foreground">Com a Consultoria da Atom</h4>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#6568D6] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              {'Seu dinheiro começa a trabalhar no nível da sua carreira.'}
            </p>
            <a href={ctaUrl}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#272A75] to-[#6568D6] hover:from-[#20235D] hover:to-[#5558C0] text-white h-14 px-6 sm:px-10 text-sm sm:text-base font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-[#272A75]/30 hover:scale-[1.02] active:scale-[0.98] border border-white/10 whitespace-normal leading-tight">
                Quero conquistar maturidade financeira
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
