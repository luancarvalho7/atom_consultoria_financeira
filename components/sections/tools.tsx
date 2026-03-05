'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Calculator, ShieldCheck } from 'lucide-react'

const tools = [
  {
    title: 'Atom Educação',
    description: 'Assista especialistas Atom responderem perguntas de pessoas reais sobre dinheiro, relacionamentos e mais.',
    cta: 'Assistir Agora',
    icon: BookOpen,
    gradient: 'from-[#272A75] to-[#6568D6]',
    bgAccent: 'bg-[#272A75]/5',
  },
  {
    title: 'AtomFinance',
    description: 'Obtenha o aplicativo de gestão financeira completa assistida por IA. Comece a fazer progresso real com seu dinheiro.',
    cta: 'Começar Grátis',
    icon: Calculator,
    gradient: 'from-[#6568D6] to-[#9092E8]',
    bgAccent: 'bg-[#6568D6]/5',
  },
  {
    title: 'Consultoria Financeira Especializada',
    description: 'Responda o diagnóstico e tenha apoio de um consultor financeiro profissional para suas decisões mais importantes.',
    cta: 'Solicitar Consultoria',
    icon: ShieldCheck,
    gradient: 'from-[#9092E8] to-[#BCBEF5]',
    bgAccent: 'bg-[#9092E8]/5',
  },
]

export function Tools() {
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
    <section id="tools-section" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Dramatic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#272A75]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9092E8]" />
            <span className="text-sm font-semibold text-foreground/70">Ferramentas Poderosas</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance mb-6">
            O que realmente{' '}
            <span className="bg-gradient-to-r from-[#6568D6] via-[#9092E8] to-[#BCBEF5] bg-clip-text text-transparent">
              oferecemos
            </span>
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            {"A chance de organizar de vez o seu dinheiro como todo profissional bem-sucedido faz. De educação a consultoria personalizada, temos as ferramentas certas para você."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group h-full bg-white/[0.03] rounded-2xl border border-white/[0.06] p-7 lg:p-8 hover:border-[#6568D6]/25 hover:shadow-2xl hover:shadow-[#272A75]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3 mb-8">
                    <h4 className="text-xl font-heading font-bold text-foreground">
                      {tool.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {tool.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full rounded-full h-12 font-semibold border-2 border-white/[0.1] hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent">
                    {tool.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
