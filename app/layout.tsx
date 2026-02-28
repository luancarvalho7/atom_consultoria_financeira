import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'

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
      <body className="font-sans antialiased noise-overlay">{children}</body>
    </html>
  )
}
