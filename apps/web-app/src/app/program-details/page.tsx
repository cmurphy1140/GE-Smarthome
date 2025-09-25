'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TailoredEnablementSection } from '@/components/sections/TailoredEnablementSection'
import { PartnerTiersSection } from '@/components/sections/PartnerTiersSection'
import { Suspense, lazy } from 'react'
const JourneySection = lazy(() => import('@/components/sections/JourneySection').then(mod => ({ default: mod.default })))
const VerticalsSection = lazy(() => import('@/components/sections/VerticalsSection').then(mod => ({ default: mod.default })))
const BenefitsSection = lazy(() => import('@/components/sections/BenefitsSection').then(mod => ({ default: mod.default })))

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

export default function ProgramDetails() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="space-y-0">
        <section id="enablement">
          <TailoredEnablementSection />
        </section>
        <section id="journey">
          <Suspense fallback={<SectionSkeleton />}>
            <JourneySection />
          </Suspense>
        </section>
        <section id="tiers">
          <PartnerTiersSection />
        </section>
        <section id="verticals">
          <Suspense fallback={<SectionSkeleton />}>
            <VerticalsSection />
          </Suspense>
        </section>
        <section id="benefits">
          <Suspense fallback={<SectionSkeleton />}>
            <BenefitsSection />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  )
}
