'use client'

import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Marquee } from '@/components/sections/marquee'
import { BabySteps } from '@/components/sections/baby-steps'
import { Assessment } from '@/components/sections/assessment'
import { Tools } from '@/components/sections/tools'
import { TrustedPros } from '@/components/sections/trusted-pros'
import { VagasSobMedida } from '@/components/sections/vagas-sob-medida'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { FloatingCTA } from '@/components/sections/floating-cta'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Assessment />
        <BabySteps />
        <Tools />
        <TrustedPros />
        {/* Fade: dark background → pure black */}
        <div className="h-32 bg-gradient-to-b from-background to-black" />
        <VagasSobMedida />
        {/* Fade: pure black → dark background */}
        <div className="h-32 bg-gradient-to-b from-black to-background" />
        <Testimonials />
        <FAQ />
        <CTA />
        {/* Fade: dark background → pure black */}
        <div className="h-24 bg-gradient-to-b from-background to-black" />
      </main>
      <Footer />
    </div>
  )
}
