'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string
          formId: string
          region: string
          target?: string
        }) => void
      }
    }
  }
}

export function HubSpotForm() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const existing = document.querySelector('script[src*="hsforms.net"]')
    if (existing) {
      window.hbspt?.forms.create({
        portalId: '48226823',
        formId: '160da112-dedf-4196-9c6f-8c4effffcd66',
        region: 'na1',
        target: '#hubspot-form-container',
      })
      return
    }

    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.onload = () => {
      window.hbspt?.forms.create({
        portalId: '48226823',
        formId: '160da112-dedf-4196-9c6f-8c4effffcd66',
        region: 'na1',
        target: '#hubspot-form-container',
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#0D0F2E] via-[#191B4A] to-[#272A75] border border-white/[0.06] p-8 md:p-12">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#6568D6]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#272A75]/15 rounded-full blur-3xl" />
            </div>

            <div className="relative space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm px-4 py-2 rounded-full border border-white/[0.08]">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-sm font-medium">Garanta sua vaga</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                  Preencha o formulário
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Nossa equipe entrará em contato para entender sua situação e dar os próximos passos.
                </p>
              </div>

              <div id="hubspot-form-container" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
