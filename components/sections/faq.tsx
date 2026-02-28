'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'É curso ou mentoria?',
    answer: 'É consultoria financeira individual. Analisamos sua situação, entregamos um plano sob medida e acompanhamos a aplicação -- sem aulas gravadas ou encontros genéricos.',
  },
  {
    question: 'Vocês indicam investimentos específicos?',
    answer: 'Indicamos direcionamento alinhado ao seu perfil e objetivos, sempre de forma personalizada para o seu cenário.',
  },
  {
    question: 'Quantas reuniões estão incluídas?',
    answer: 'Três etapas estruturadas: Raio-X financeiro, Plano personalizado e Implementação. Com possibilidade de continuidade (contratado à parte).',
  },
  {
    question: 'Posso parcelar?',
    answer: 'Sim, avaliamos condições de pagamento após definição do escopo da consultoria.',
  },
  {
    question: 'Quanto tempo leva?',
    answer: 'Depende da complexidade, mas o diagnóstico começa já na primeira reunião. O processo completo das 3 etapas é conduzido de forma ágil e objetiva.',
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-heading font-bold text-base lg:text-lg text-foreground pr-8 group-hover:text-[#9092E8] transition-colors">
          {faq.question}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#272A75]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-4 py-2 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9092E8]" />
              <span className="text-sm font-semibold text-foreground/70">Dúvidas</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight text-balance">
              Perguntas Frequentes
            </h3>
          </div>

          <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] px-6 lg:px-10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
