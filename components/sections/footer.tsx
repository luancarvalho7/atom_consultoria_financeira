const footerSections = [
  {
    title: 'Empresa',
    links: ['Sobre', 'Carreiras', 'Contato', 'Sala de Imprensa'],
  },
  {
    title: 'Legal',
    links: ['Política de Privacidade', 'Termos de Uso', 'Acessibilidade'],
  },
]

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#6568D6]/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <img 
                src="/atom_logo.webp" 
                alt="Atom Logo"
                className="h-8 w-auto"
              />
              <span className="font-heading font-bold text-lg tracking-tight">Atom Educacional</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Consultoria financeira personalizada para quem ganha bem e quer fazer o dinheiro trabalhar no nível da sua carreira.
            </p>
            <div className="flex items-center gap-2">
              {['f', 'X', 'in', 'yt'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors border border-white/[0.06] hover:border-white/[0.1]"
                >
                  <span className="text-xs font-bold text-white/60 hover:text-white/90 transition-colors">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h5 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-white/80 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            {'© 2026 Atom Educacional. Todos os direitos reservados.'}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Termos</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
