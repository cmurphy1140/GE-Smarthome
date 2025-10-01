'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Battery,
  TrendingUp,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  Headphones,
  BookOpen,
  Users,
  Award
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

const journeyPhases = [
  {
    step: '01',
    phase: 'Discover phase',
    title: 'Meet your channel strategist',
    description:
      'Explore portfolio fit and map your launch goals during a curated strategy session tailored to your vertical and business objectives.',
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
    highlight: {
      tone: 'purple',
      text: 'Results: Partners average 3× project velocity and 40–60% profit uplift within the first year.'
    }
  }
] as const

const professionalSegments = [
  {
    title: 'Electrical Contractors',
    subtitle: 'Smart lighting & power specialists',
    narrative:
      'Access GE Proseo smart switches, outlets, and lighting controls with comprehensive electrical installation guides. Perfect for retrofit projects and new construction electrical work.'
  },
  {
    title: 'HVAC Contractors',
    subtitle: 'Climate control & energy management',
    narrative:
      'Integrate smart thermostats and energy monitoring systems with existing HVAC infrastructure. Leverage GE Proseo Flex strips for zone control and energy efficiency optimization.'
  },
  {
    title: 'Security Contractors',
    subtitle: 'Smart security & access control',
    narrative:
      'Deploy SIPAs (Smart Integrated Power Accessories), cameras, door stations, and door locks. Complete security ecosystem with networking and monitoring capabilities.'
  },
  {
    title: 'Audio/Video Integrators',
    subtitle: 'Entertainment & automation systems',
    narrative:
      'Full Savant ecosystem including lighting, climate, security, and A/V distribution. Professional-grade automation for luxury residential and commercial installations.'
  }
] as const

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Direct access to technical experts',
    availability: '24/7 Emergency Support'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant help when you need it',
    availability: 'Business Hours'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed technical assistance',
    availability: '24/7'
  },
  {
    icon: Calendar,
    title: 'Scheduled Consultations',
    description: 'One-on-one expert sessions',
    availability: 'By Appointment'
  }
] as const

const supportFeatures = [
  {
    icon: Headphones,
    title: 'Technical Troubleshooting',
    description: 'Expert assistance with installation, configuration, and integration challenges'
  },
  {
    icon: BookOpen,
    title: 'Training Resources',
    description: 'Comprehensive guides, videos, and documentation for all skill levels'
  },
  {
    icon: Users,
    title: 'Community Forums',
    description: 'Connect with other professionals and share best practices'
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Official training programs to validate your expertise'
  }
] as const

const advantages = [
  {
    icon: Building2,
    title: 'Legacy & Trust',
    narrative:
      'GE\'s 140-year lighting pedigree and Savant\'s automation leadership give homeowners confidence that your recommendations will endure.'
  },
  {
    icon: Battery,
    title: 'Energy Resilience',
    narrative:
      'Load management, intelligent backup, and rich energy dashboards help clients stay resilient while monitoring consumption.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    narrative:
      'One unified app stretches from a single bulb to a flagship estate, so every install lays groundwork for the next upsell.'
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

const highlightToneStyles = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  blue: 'border-blue-200 bg-neutral-50 text-blue-900',
  purple: 'border-purple-200 bg-purple-50 text-purple-700'
} as const

function LearnAboutGEHero() {
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
            About the GE Smart Home Dealer Program
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl"
          >
            About the GE Smart Home Dealer Program
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-neutral-600 md:text-xl max-w-3xl mx-auto"
          >
            Everything you need to master the GE Proseo to Savant growth journey. From partner onboarding to ongoing support, we provide comprehensive enablement for every trade.
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
              href="/smart-home-experience"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-base font-semibold text-neutral-700 transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-200"
            >
              Explore products
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

export default function LearnAboutGEPage() {
  const [activeJourneyPhase, setActiveJourneyPhase] = useState(0)
  const currentJourneyPhase = journeyPhases[activeJourneyPhase]

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.learnAboutGE} />
        </div>
        <LearnAboutGEHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Who we serve"
            title={<span className="text-blue-950">Enablement tailored to every professional segment</span>}
            description="Specialized playbooks and resources ensure each trade can launch, scale, and differentiate with the GE Lighting × Savant stack."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {professionalSegments.map(segment => (
              <motion.div
                key={segment.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-950">{segment.title}</h3>
                  <p className="mt-2 text-base text-neutral-500">{segment.subtitle}</p>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">{segment.narrative}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[0.42fr_0.58fr]">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Partner journey"
                title={<span className="text-blue-950">Your path to success</span>}
                description="Every phase is supported by channel strategists, enablement specialists, and performance data tuned to your business model."
              />

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

              <div
                className={`mt-6 rounded-2xl border px-5 py-4 text-base font-medium ${highlightToneStyles[currentJourneyPhase.highlight.tone]}`}
              >
                {currentJourneyPhase.highlight.text}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="24/7 Support"
            title={<span className="text-blue-950">Always-on expertise when you need it</span>}
            description="Comprehensive support channels ensure you have the help you need, when you need it, to deliver exceptional customer experiences."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <motion.div
                  key={channel.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-950">{channel.title}</h3>
                      <p className="mt-1 text-sm text-blue-600 font-medium">{channel.availability}</p>
                      <p className="mt-2 text-sm text-neutral-600">{channel.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Support Features"
            title={<span className="text-blue-950">Comprehensive assistance across all areas</span>}
            description="From technical troubleshooting to training resources, we provide the support you need to succeed."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {supportFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-950 bg-white text-blue-950">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-950">{feature.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why GE × Savant"
            title={<span className="text-blue-950">Competitive advantages you can bring to market</span>}
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
                Ready to get started?
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Begin your partnership journey</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Apply now and connect with our channel strategists to build your customized enablement roadmap.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/program-tiers"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-white/20"
                >
                  View program tiers
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
