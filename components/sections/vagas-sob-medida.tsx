'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Clock, Calendar, Sparkles, Check, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slots = [
  { label: 'Diagnóstico', status: 'taken' },
  { label: 'Diagnóstico', status: 'taken' },
  { label: 'Diagnóstico', status: 'taken' },
  { label: 'Diagnóstico', status: 'available' },
  { label: 'Diagnóstico', status: 'available' },
  { label: 'Diagnóstico', status: 'available' },
]

const included = [
  'Raio-X completo da sua vida financeira',
  'Plano de ação personalizado em 3 reuniões',
  'Diagnóstico de investimentos e dívidas',
  'Suporte direto com consultor dedicado',
  'Acesso ao AtomFinance por 90 dias',
  'Revisão de patrimônio e objetivos futuros',
]

export function VagasSobMedida() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="valor-sob-medida"
      ref={ref}
      className="relative bg-black overflow-hidden"
    >
      {/* Full-bleed grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow orbs — dramatic Oxaley-inspired */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#272A75]/12 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#6568D6]/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6568D6]/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36 relative">

        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-white/70">Vagas Limitadas — Ciclo Atual</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight text-balance mb-6">
            Vagas Sob
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9092E8] via-[#BCBEF5] to-[#9092E8]">
              Medida.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/50 leading-relaxed text-pretty max-w-xl mx-auto">
            Cada consultor da Atom acompanha no máximo{' '}
            <span className="text-white/80 font-semibold">6 clientes por mês.</span>{' '}
            Isso garante qualidade real — não um template genérico.
          </p>
        </div>

        {/* Main content grid */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* LEFT — Slots visual */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 h-full backdrop-blur-sm">
              {/* Card inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Disponibilidade</p>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Próximo ciclo</span>
                  </div>
                </div>

                {/* Slot grid */}
                <div className="grid grid-cols-3 gap-3">
                  {slots.map((slot, i) => (
                    <div
                      key={i}
                      className={`relative rounded-2xl p-4 border transition-all duration-500 ${
                        slot.status === 'taken'
                          ? 'bg-white/[0.04] border-white/[0.06]'
                          : 'bg-[#272A75]/15 border-[#6568D6]/25'
                      }`}
                      style={{ transitionDelay: `${300 + i * 80}ms` }}
                    >
                      {slot.status === 'taken' ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Lock className="w-4 h-4 text-white/20" />
                            <span className="text-[10px] text-white/20 font-medium">OCUPADA</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full" />
                          <div className="h-2 bg-white/5 rounded-full w-3/4" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                            </span>
                            <span className="text-[10px] text-[#9092E8] font-semibold">LIVRE</span>
                          </div>
                          <div className="h-2 bg-blue-400/30 rounded-full" />
                          <div className="h-2 bg-blue-400/20 rounded-full w-2/3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Counter */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                  <div className="space-y-0.5">
                    <p className="text-3xl font-heading font-bold text-white">3 <span className="text-white/30 text-xl font-normal">/ 6</span></p>
                    <p className="text-white/40 text-sm">vagas disponíveis este mês</p>
                  </div>
                  <div className="text-right space-y-0.5">
                    <div className="flex items-center gap-1.5 text-amber-400 text-sm font-medium justify-end">
                      <Clock className="w-4 h-4" />
                      <span>Alta procura</span>
                    </div>
                    <p className="text-white/30 text-xs">Ciclo encerra em 12 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — What's included + CTA */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 h-full backdrop-blur-sm flex flex-col">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex-1 space-y-8">
                <div className="space-y-1">
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">O que está incluído</p>
                  <p className="text-white text-lg font-semibold">Consultoria Completa Atom</p>
                </div>

                <ul className="space-y-3.5">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#6568D6]/15 border border-[#6568D6]/25 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#BCBEF5]" />
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-white/[0.06]" />

                {/* Pricing row */}
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <p className="text-white/30 text-xs uppercase tracking-widest">Investimento</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-heading font-bold text-white">Sob consulta</span>
                    </div>
                    <p className="text-white/30 text-xs">Personalizado para o seu perfil</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-semibold">1:1 Exclusivo</span>
                  </div>
                </div>

                {/* CTA */}
                <a href="#contato" className="block">
                  <Button
                    size="lg"
                    className="w-full h-14 bg-white hover:bg-white/90 text-black font-heading font-bold text-base rounded-2xl transition-all hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    Quero garantir minha vaga
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <p className="text-center text-white/20 text-xs">
                  Sem compromisso. Diagnóstico gratuito na primeira conversa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
