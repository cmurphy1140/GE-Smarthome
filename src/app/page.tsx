'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import RoiCalculatorSection from '@/components/sections/RoiCalculatorSection'
import CyncFeaturesSection from '@/components/sections/CyncFeaturesSection'
import FaqSection from '@/components/sections/FaqSection'


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <section id="program">
          <PillarsSection />
        </section>
        <StatsSection />
        <section id="apply">
          <RoiCalculatorSection />
        </section>
        <section id="faqs">
          <FaqSection />
        </section>
        <CyncFeaturesSection />
      </main>
      <Footer />
    </div>
  )
}