'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { TailoredEnablementSection } from '@/components/sections/TailoredEnablementSection'
import { PartnerTiersSection } from '@/components/sections/PartnerTiersSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { Suspense, lazy } from 'react'

const VerticalsSection = lazy(() => import('@/components/sections/VerticalsSection').then(mod => ({ default: mod.default })))
const BenefitsSection = lazy(() => import('@/components/sections/BenefitsSection').then(mod => ({ default: mod.default })))
const FaqSection = lazy(() => import('@/components/sections/FaqSection').then(mod => ({ default: mod.default })))

function SectionSkeleton() {
  return (
    <div className="py-24 bg-blue-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 h-8 w-2/3 animate-pulse rounded bg-blue-800/40" />
        <div className="mb-12 h-4 w-1/2 animate-pulse rounded bg-blue-800/40" />
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map(item => (
            <div key={item} className="h-48 animate-pulse rounded-3xl bg-blue-800/40" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="program">
          <PillarsSection />
        </section>
        <TailoredEnablementSection />
        <PartnerTiersSection />
        <StatsSection />
        <Suspense fallback={<SectionSkeleton />}>
          <VerticalsSection />
        </Suspense>
        <section id="benefits">
          <Suspense fallback={<SectionSkeleton />}>
            <BenefitsSection />
          </Suspense>
        </section>
        <section id="faqs">
          <Suspense fallback={<SectionSkeleton />}>
            <FaqSection />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  )
}
