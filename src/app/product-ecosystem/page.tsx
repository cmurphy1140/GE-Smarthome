'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Lightbulb,
  Home,
  BarChart3,
  Star,
  Link2,
  Building2,
  Battery,
  TrendingUp
} from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'

const heroStats = [
  { value: '140+', label: 'Years of innovation' },
  { value: '2K+', label: 'Products available' },
  { value: '24/7', label: 'Training support' }
] as const

const productFamilies = [
  {
    icon: Lightbulb,
    title: 'GE Proseo Smart Lighting',
    summary: 'Accessible, retrofit-friendly smart lighting solutions for every budget.',
    items: [
      {
        heading: 'Smart Bulbs',
        copy: 'Direct Connect LED with color accuracy and music sync.'
      },
      {
        heading: 'Smart Switches',
        copy: 'Toggle and paddle dimmers with no-neutral options.'
      },
      {
        heading: 'Light Strips & Panels',
        copy: 'Indoor and outdoor strips with hexagon panels.'
      },
      {
        heading: 'Specialty Controls',
        copy: 'Ceiling fan switches and motion sensors.'
      }
    ]
  },
  {
    icon: Home,
    title: 'Savant Home Automation',
    summary: 'Premium control, energy resilience, and orchestration for luxury environments.',
    items: [
      {
        heading: 'Control Systems',
        copy: 'Whole-home scenes with lighting, audio, video, and comfort.'
      },
      {
        heading: 'Energy Management',
        copy: 'Grid-independent backup with intelligent load shedding.'
      },
      {
        heading: 'User Interfaces',
        copy: 'Touch panels, mobile app, and voice control.'
      },
      {
        heading: 'Integration Platform',
        copy: 'Professional-grade hardware and APIs for third-party devices.'
      }
    ],
    footer:
      'The Savant-powered Proseo App keeps the homeowner journey seamless — from quick bulb upgrades to flagship automation projects.'
  },
  {
    icon: Building2,
    title: 'Complete Smart Home Ecosystem',
    summary: 'Comprehensive product portfolio covering lighting, climate, security, and automation.',
    items: [
      {
        heading: 'GE Proseo Flex Strips',
        copy: 'Flexible LED strips for accent lighting, under-cabinet, and architectural applications.'
      },
      {
        heading: 'Smart Thermostats',
        copy: 'Wi-Fi enabled climate control with scheduling, energy monitoring, and voice integration.'
      },
      {
        heading: 'Security & Access',
        copy: 'SIPAs, cameras, door stations, door locks, and comprehensive security monitoring.'
      },
      {
        heading: 'Networking & Audio',
        copy: 'Professional networking equipment and BT speakers for whole-home audio distribution.'
      }
    ],
    footer:
      'Complete ecosystem integration with third-party devices and networking solutions for professional installations.'
  }
] as const

const marketPosition = [
  {
    icon: BarChart3,
    title: 'Entry Level — GE Proseo',
    story:
      'Retrofit-friendly upgrades with intuitive controls and approachable pricing. Perfect for teams adding smart services to electrical or remodeling business.',
    callout: 'Retrofit specialists.'
  },
  {
    icon: Star,
    title: 'Premium — Savant Integration',
    story:
      'Savant Pro control with energy resilience and concierge support. Delivers whole-home experiences for luxury clients expecting orchestration across all systems.',
    callout: 'Flagship integrators.'
  },
  {
    icon: Link2,
    title: 'Seamless Scalability',
    story:
      'Both stacks live in one app. Ladder clients from smart bulbs to full automation without platform changes. Every upgrade opens new revenue streams.',
    callout: 'Upsell roadmap.'
  }
] as const

const advantages = [
  {
    icon: Building2,
    title: 'Legacy & Trust',
    narrative:
      'GE\'s 140-year lighting pedigree and Savant\'s automation leadership give homeowners confidence that your recommendations will endure. The badge on your proposal immediately signals quality, service, and reliability.'
  },
  {
    icon: Battery,
    title: 'Energy Resilience',
    narrative:
      'Load management, intelligent backup, and rich energy dashboards help clients stay resilient while monitoring consumption. You can tell a sustainability story that bridges everyday comfort with long-term electrification goals.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    narrative:
      'One unified app stretches from a single bulb to a flagship estate, so every install lays groundwork for the next upsell. Customers enjoy consistent experiences while you unlock recurring service and monitoring revenue.'
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
} as const

function ProductEcosystemHero() {
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
            Product Ecosystem
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl"
          >
            Lighting and automation portfolio
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-neutral-600 md:text-xl max-w-3xl mx-auto"
          >
            Guide clients from retrofit-ready upgrades to full Savant automation with a unified stack of hardware, software, and enablement.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row justify-center"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Start your application
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

export default function ProductEcosystemPage() {
  const [activeFamily, setActiveFamily] = useState(0)
  const currentProductFamily = productFamilies[activeFamily]
  const CurrentFamilyIcon = currentProductFamily.icon

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.productEcosystem} />
        </div>
        <ProductEcosystemHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Product ecosystem"
            title={<span className="text-blue-950">Lighting and automation portfolio</span>}
            description="Guide clients from retrofit-ready upgrades to full Savant automation with a unified stack of hardware, software, and enablement."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {productFamilies.map((family, index) => {
              const isActive = index === activeFamily
              return (
                <button
                  key={family.title}
                  type="button"
                  onClick={() => setActiveFamily(index)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-blue-950 bg-blue-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.35)]'
                      : 'border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {family.title}
                </button>
              )
            })}
          </div>

          <motion.div
            key={currentProductFamily.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-950 bg-white text-blue-950">
                  <CurrentFamilyIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-950">{currentProductFamily.title}</h3>
                  <p className="mt-2 text-lg text-neutral-600">{currentProductFamily.summary}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {currentProductFamily.items.map(item => (
                <div
                  key={item.heading}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <h4 className="text-base font-semibold text-blue-950">{item.heading}</h4>
                  <p className="mt-2 text-base leading-relaxed text-neutral-600">{item.copy}</p>
                </div>
              ))}
            </div>

            {'footer' in currentProductFamily && currentProductFamily.footer ? (
              <div className="mt-6 rounded-2xl border border-neutral-300 bg-neutral-100 p-4 text-sm font-medium text-neutral-700">
                {currentProductFamily.footer}
              </div>
            ) : null}
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Market positioning"
            title={<span className="text-blue-950">Frame the value across every stage</span>}
            description="Anchor your proposals with a clear path from entry-level packages to premium Savant-led experiences."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {marketPosition.map(position => {
              const Icon = position.icon
              return (
                <motion.article
                  key={position.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-950 bg-white text-blue-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-blue-950">{position.title}</p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">{position.story}</p>
                  <div className="mt-4 inline-flex rounded-xl border border-blue-950/15 bg-blue-950/5 px-4 py-2 text-sm font-black uppercase tracking-[0.35em] text-blue-950">
                    {position.callout}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why GE × Savant"
            title={<span className="text-blue-950">Hard-earned advantages you can bring to market</span>}
            description="Leverage the credibility, resilience, and scalability of two category-leading brands in every proposal."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {advantages.map(advantage => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-950 bg-white text-blue-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-blue-950">{advantage.title}</p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">{advantage.narrative}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Ready to explore our products?
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Start your partnership today</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Access our complete product portfolio and begin building signature smart home experiences.
              </p>
              <div className="mt-6">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Start Partnership Application
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
