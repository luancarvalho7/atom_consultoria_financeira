'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#0D0F2E] via-[#191B4A] to-[#272A75] border border-white/[0.06]">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#6568D6]/8 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#272A75]/10 rounded-full blur-3xl" />
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative p-8 md:p-12 lg:p-20 text-center space-y-8">
              <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm px-4 py-2 rounded-full border border-white/[0.08]">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-sm font-medium">A Pergunta Final</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight text-balance">
                  {'Você vai continuar deixando dinheiro escapar em silêncio?'}
                </h3>
                <p className="text-lg text-white/60 text-pretty max-w-2xl mx-auto leading-relaxed">
                  {'Ou vai assumir o controle do seu dinheiro de uma vez por todas?'}
                </p>
              </div>

              <div className="w-full max-w-md mx-auto px-2 sm:px-0">
                <a href="#contato" className="block">
                  <Button className="w-full bg-white text-black hover:bg-white/90 min-h-14 h-auto py-3 px-5 sm:px-8 rounded-full font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 whitespace-normal text-center leading-snug">
                    Quero minha vaga na Consultoria
                    <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                  </Button>
                </a>
                <p className="text-xs text-white/40 mt-4 leading-relaxed">
                  {'Vagas limitadas por mês. Garantir a sua agora é o primeiro passo.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
