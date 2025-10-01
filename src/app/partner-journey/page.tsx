'use client'

import Link from 'next/link'
import { useRef, useState, lazy, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'
import BenefitsSection from '@/components/sections/BenefitsSection'
const RoiCalculatorSection = lazy(() => import('@/components/sections/RoiCalculatorSection'))

const heroStats = [
  { value: '140+', label: 'Years of innovation' },
  { value: '2K+', label: 'Products available' },
  { value: '24/7', label: 'Training support' }
] as const

const journeyPhases = [
  {
    step: '01',
    phase: 'Discover phase',
    title: 'Meet your channel strategist',
    description:
      'Explore portfolio fit and map your launch goals during a curated strategy session tailored to your vertical and business objectives.',
    story:
      'Your discovery sprint opens with a strategist-led workshop that surfaces your current Smart Home capabilities, the markets you serve, and the outcomes you want in the first year. Together we map the services that differentiate you locally while lining up the right Savant and GE Proseo tools.',
    touchpoints: [
      {
        title: 'Strategic intake',
        copy: 'We review active revenue streams, customer personas, and installation workflows to pinpoint partnership levers.'
      },
      {
        title: 'Localized research',
        copy: 'Channel intelligence outlines competitive players, pricing dynamics, and demand signals in your territory.'
      },
      {
        title: 'Success planning',
        copy: 'You leave with a 12-month revenue roadmap, sample bundles, and the enablement cadence to hit your targets.'
      }
    ],
    highlight: {
      tone: 'green',
      text: 'Timeline: 48-hour welcome call scheduled within the first week of partnership approval.'
    }
  },
  {
    step: '02',
    phase: 'Integration phase',
    title: 'Activate the GE × Savant toolkit',
    description:
      'Hands-on enablement, demo gear, and sales accelerators built around your team\'s highest-impact opportunities.',
    story:
      'In the integration phase, engineers, designers, and sellers rotate through immersive sessions that translate our platform into your existing workflow. We set up demo gear, align proposal templates, and embed escalation paths so every project feels supported from day one.',
    touchpoints: [
      {
        title: 'Technical mastery',
        copy: 'Certification tracks pair live labs with self-paced modules for GE Proseo and Savant systems.'
      },
      {
        title: 'Demo storytelling',
        copy: 'Showroom and field kits let you stage flagship scenes that make upgrades tangible for prospects.'
      },
      {
        title: 'Sales acceleration',
        copy: 'Co-branded decks, pricing prompts, and ROI framers help your reps qualify, scope, and close faster.'
      }
    ],
    highlight: {
      tone: 'blue',
      text: 'Duration: 30-day intensive onboarding with 1:1 enablement track and regional training sessions.'
    }
  },
  {
    step: '03',
    phase: 'Scale phase',
    title: 'Grow with data-backed insights',
    description:
      'Quarterly reviews, shared pipeline forecasting, and targeted co-marketing programs to accelerate close rates.',
    story:
      'Once your team is in market, we shift to growth rhythms—reviewing dashboards together, flagging new rebates, and co-authoring campaigns so your pipeline stays full. The framework is light, but every touchpoint keeps momentum pointed toward premium, repeatable installs.',
    touchpoints: [
      {
        title: 'Performance analytics',
        copy: 'Unified dashboards surface win rates, project profitability, and customer satisfaction trends.'
      },
      {
        title: 'Demand generation',
        copy: 'Co-marketing programs pair digital campaigns with local events to grow regional awareness.'
      },
      {
        title: 'Strategic planning',
        copy: 'Quarterly business reviews outline emerging opportunities and the enablement to capitalize on them.'
      }
    ],
    highlight: {
      tone: 'purple',
      text: 'Results: Partners average 3× project velocity and 40–60% profit uplift within the first year.'
    }
  }
] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.17, 0.67, 0.35, 1] } }
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
} as const

const highlightToneStyles = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  blue: 'border-blue-200 bg-neutral-50 text-blue-900',
  purple: 'border-purple-200 bg-purple-50 text-purple-700'
} as const

function PartnerJourneyHero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-neutral-200 via-white to-stone-100 py-28 text-slate-900 md:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-neutral-100 opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-md font-semibold uppercase tracking-[0.35em] text-blue-950"
          >
            Partner Journey
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl"
          >
            From first conversation to flagship installation
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-neutral-600 md:text-xl max-w-3xl mx-auto"
          >
            Every phase is supported by channel strategists, enablement specialists, and performance data tuned to your business model.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row justify-center"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learning-guide"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-base font-semibold text-neutral-700 transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-200"
            >
              Back to Learning Guide
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-6 text-left shadow-sm sm:grid-cols-3 max-w-4xl mx-auto"
          >
            {heroStats.map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-blue-950 sm:text-3xl">{stat.value}</span>
                <span className="text-md uppercase tracking-[0.3em] text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function PartnerJourneyPage() {
  const [activeJourneyPhase, setActiveJourneyPhase] = useState(0)
  const currentJourneyPhase = journeyPhases[activeJourneyPhase]

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.partnerJourney} />
        </div>
        <PartnerJourneyHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[0.42fr_0.58fr]">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Partner journey"
                title={<span className="text-blue-950">From first conversation to flagship installation</span>}
                description="Every phase is supported by channel strategists, enablement specialists, and performance data tuned to your business model."
              />

              {/* Animated progress bar */}
              <div className="relative mt-10 mb-6 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <motion.div
                  layout
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-700 to-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeJourneyPhase + 1) / journeyPhases.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </div>

              <div className="mt-2 space-y-3">
                {journeyPhases.map((phase, index) => {
                  const isActive = index === activeJourneyPhase
                  return (
                    <motion.button
                      key={phase.step}
                      type="button"
                      onClick={() => setActiveJourneyPhase(index)}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group w-full rounded-2xl border px-5 py-4 text-left transition-all duration-200 relative overflow-hidden ${
                        isActive
                          ? 'border-blue-950 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.12)]'
                          : 'border-neutral-200 bg-white/70 hover:border-blue-200 hover:bg-white'
                      }`}
                    >
                      {/* Animated dot indicator */}
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 ml-[-18px] h-3 w-3 rounded-full transition-all duration-300 ${isActive ? 'bg-blue-600 shadow-lg scale-125' : 'bg-blue-200 scale-100'}`}></span>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-md font-semibold uppercase tracking-[0.3em] text-blue-950">
                            {phase.phase}
                          </span>
                          <h3 className="mt-2 text-base font-semibold text-neutral-900 transition-colors group-hover:text-blue-950">
                            {phase.title}
                          </h3>
                        </div>
                        <span
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-base font-semibold ${
                            isActive
                              ? 'border-blue-950 bg-blue-950 text-white'
                              : 'border-neutral-300 bg-white text-blue-950'
                          }`}
                        >
                          {phase.step}
                        </span>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Animated details panel */}
            <motion.div
              key={currentJourneyPhase.step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-950 bg-white text-lg font-semibold text-blue-950">
                  {currentJourneyPhase.step}
                </div>
                <div>
                  <p className="text-md font-semibold uppercase tracking-[0.3em] text-blue-950">
                    {currentJourneyPhase.phase}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-blue-950">
                    {currentJourneyPhase.title}
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-lg text-neutral-600">
                {currentJourneyPhase.description}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                {currentJourneyPhase.story}
              </p>

              <div className="mt-8 space-y-4">
                {currentJourneyPhase.touchpoints.map(point => (
                  <div key={point.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-base font-semibold text-blue-950">{point.title}</p>
                    <p className="mt-2 text-base leading-relaxed text-neutral-600">{point.copy}</p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 rounded-2xl border px-5 py-4 text-base font-medium ${highlightToneStyles[currentJourneyPhase.highlight.tone]}`}
              >
                {currentJourneyPhase.highlight.text}
              </div>
            </motion.div>
          </div>
        </section>

        <BenefitsSection />

        <Suspense
          fallback={
            <div className="relative bg-white py-24">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)] animate-pulse">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-12 w-12 bg-slate-200 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-5 w-48 bg-slate-200 rounded"></div>
                        <div className="h-3 w-64 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-3">
                          <div className="h-4 w-32 bg-slate-200 rounded"></div>
                          <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)] animate-pulse">
                    <div className="space-y-4">
                      <div className="h-24 w-full bg-slate-200 rounded-lg"></div>
                      <div className="h-4 w-full bg-slate-200 rounded"></div>
                      <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <RoiCalculatorSection />
        </Suspense>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Ready to start your journey?
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Begin your partnership today</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Apply now to connect with our channel strategists and map your path from discovery to flagship installation.
              </p>
              <div className="mt-6">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
