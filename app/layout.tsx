import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export const viewport: Viewport = {
  themeColor: '#0A0F1E',
}

export const metadata: Metadata = {
  title: 'Atom - Consultoria Financeira Personalizada',
  description: 'Voce evoluiu. O seu dinheiro precisa acompanhar. Consultoria financeira personalizada para quem ganha bem e quer organizar de vez o seu patrimonio.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9MTV7W7');`}
        </Script>
      </head>
      <body className="font-sans antialiased noise-overlay">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9MTV7W7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
