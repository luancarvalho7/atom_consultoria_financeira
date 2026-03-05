export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#6568D6]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Brand & Tagline */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-2.5">
            <img
              src="/atom_logo.webp"
              alt="Atom Logo"
              className="h-8 w-auto"
            />
            <span className="font-heading font-bold text-lg tracking-tight">Atom Consultoria</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Transformando vidas através da educação financeira
          </p>
        </div>

        {/* Contact */}
        <div className="mb-10">
          <h5 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">ATOM CONSULTORIA FINANCEIRA</h5>
          <p className="text-sm text-white/50">
            Telefone: (15) 3031-6100 | E-mail: contato@atomconsultoriafinanceira.com.br
          </p>
        </div>

        {/* Description */}
        <div className="space-y-5 mb-10">
          <p className="text-sm text-white/40 leading-relaxed">
            A Atom Consultoria oferece serviços de planejamento financeiro pessoal e educação financeira com foco em organização de finanças, quitação de dívidas e construção de patrimônio. Nossos consultores são especializados em auxiliar pessoas físicas a alcançarem seus objetivos financeiros através de planos personalizados e acompanhamento contínuo.
          </p>
          <p className="text-sm text-white/40 leading-relaxed">
            Nossa metodologia é baseada em diagnóstico financeiro completo, permitindo que nossos clientes tenham uma visão clara de sua situação atual e possam tomar decisões conscientes sobre seu futuro financeiro. Realizamos consultorias individualizadas com recursos educacionais, ferramentas de controle e suporte especializado de acordo com a necessidade de cada cliente.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/[0.05]">
          <p className="text-xs text-white/30 leading-relaxed">
            Aviso Legal: As informações apresentadas constituem orientações educacionais sobre planejamento financeiro pessoal. Não oferecemos recomendações específicas de investimentos em valores mobiliários. Para investimentos em ações, fundos e outros instrumentos financeiros, recomendamos consultar instituições devidamente autorizadas pela CVM (Comissão de Valores Mobiliários). Os resultados apresentados são exemplos reais de clientes, mas não garantem resultados futuros, pois cada situação financeira é única. Rentabilidade passada não é garantia de rentabilidade futura.
          </p>
        </div>
      </div>
    </footer>
  )
}
