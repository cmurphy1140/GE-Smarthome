'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PillarsSection } from '@/components/sections/PillarsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { Suspense, lazy } from 'react'

// Lazy load only heavy components for better code splitting
const RoiCalculatorSection = lazy(() => import('@/components/sections/RoiCalculatorSection'))
const CyncFeaturesSection = lazy(() => import('@/components/sections/CyncFeaturesSection'))
const FaqSection = lazy(() => import('@/components/sections/FaqSection'))

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
        <section id="program">
          <PillarsSection />
        </section>
        <StatsSection />
        <section id="apply">
          <Suspense fallback={<SectionSkeleton />}>
            <RoiCalculatorSection />
          </Suspense>
        </section>
        <section id="faqs">
          <Suspense fallback={<SectionSkeleton />}>
            <FaqSection />
          </Suspense>
        </section>
        <Suspense fallback={<SectionSkeleton />}>
          <CyncFeaturesSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}