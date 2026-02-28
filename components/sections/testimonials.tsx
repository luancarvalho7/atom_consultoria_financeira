'use client'

import { useRef } from 'react'

const testimonials = [
  {
    quote: "Pela primeira vez na vida eu sei exatamente para onde meu dinheiro vai. A consultoria mudou completamente minha relação com minhas finanças.",
    author: 'Mariana S.',
    role: 'Empresária',
  },
  {
    quote: "Eu ganhava bem mas não sobrava nada. Depois da consultoria, em 3 meses consegui montar minha reserva de emergência e comecei a investir com critério.",
    author: 'Rafael T.',
    role: 'Médico',
  },
  {
    quote: "O plano personalizado foi um divisor de águas. Não é planilha genérica, é um mapa real do que fazer com o meu dinheiro.",
    author: 'Camila R.',
    role: 'Advogada',
  },
  {
    quote: 'Eliminei R$ 47.000 em dívidas invisíveis que eu nem sabia que existiam. O raio-x financeiro abriu meus olhos.',
    author: 'Eduardo L.',
    role: 'Engenheiro',
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#272A75]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-4 py-2 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-foreground/70">Depoimentos Reais</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance">
            Quem contratou, transformou.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 lg:p-8 hover:border-[#6568D6]/20 hover:shadow-xl hover:shadow-[#272A75]/10 transition-all duration-500 hover:-translate-y-0.5"
            >
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <svg className="absolute -top-2 -left-1 w-8 h-8 text-[#6568D6]/15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z"/>
                  </svg>
                  <p className="text-foreground leading-relaxed text-base lg:text-lg pl-6">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#272A75] to-[#6568D6] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#272A75]/20">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#BCBEF5] bg-[#272A75]/15 px-3 py-1.5 rounded-full border border-[#6568D6]/15">
                    Cliente Verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
