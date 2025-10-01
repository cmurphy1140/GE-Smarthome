'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection'
import { SocialSidebar } from '@/components/common/SocialSidebar'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import CyncFeaturesSection from '@/components/sections/CyncFeaturesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <SocialSidebar />
      <main className="space-y-0">
        {/* New Ronas IT-style sections */}
        <HeroSection />
        <WhatWeDoSection />
        
        {/* Original homepage sections */}
        <section id="program">
          <PillarsSection />
        </section>
        <StatsSection />
        <CyncFeaturesSection />
      </main>
      <Footer />
    </div>
  )
}