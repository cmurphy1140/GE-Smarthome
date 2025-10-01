'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection'
import { SocialSidebar } from '@/components/common/SocialSidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <SocialSidebar />
      <main className="space-y-0">
        <HeroSection />
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  )
}