'use client'

const words = [
  'Raio-X Financeiro',
  'Plano Personalizado',
  'Consultoria 1:1',
  'Maturidade Financeira',
  'Patrimônio Organizado',
  'Decisões com Segurança',
]

export function Marquee() {
  return (
    <section className="py-10 lg:py-14 bg-background overflow-hidden border-y border-white/[0.05]">
      <div className="relative">
        <div className="marquee-track">
          {[...words, ...words, ...words].map((word, index) => (
            <div key={index} className="flex items-center gap-8 mx-8 flex-shrink-0">
              <span className="text-2xl lg:text-3xl font-heading font-bold text-foreground/[0.06] tracking-tight">
                {word}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#6568D6]/15 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
