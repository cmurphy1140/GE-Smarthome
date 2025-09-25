'use client'

import { Suspense, lazy } from 'react'

// Lazy load all components for better code splitting
const Header = lazy(() => import('@/components/layout/Header').then(mod => ({ default: mod.Header })))
const Footer = lazy(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })))
const HeroSection = lazy(() => import('@/components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })))
const PillarsSection = lazy(() => import('@/components/sections/PillarsSection').then(mod => ({ default: mod.PillarsSection })))
const StatsSection = lazy(() => import('@/components/sections/StatsSection').then(mod => ({ default: mod.StatsSection })))
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
      <Suspense fallback={<div className="h-16 bg-blue-950 animate-pulse" />}>
        <Header />
      </Suspense>
      <main className="space-y-0">
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
        </Suspense>
        <section id="program">
          <Suspense fallback={<SectionSkeleton />}>
            <PillarsSection />
          </Suspense>
        </section>
        <Suspense fallback={<SectionSkeleton />}>
          <StatsSection />
        </Suspense>
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
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  )
}