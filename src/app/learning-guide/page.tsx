'use client'

import Link from 'next/link'
import Image from 'next/image'
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

const dealerTiers = [
  {
    name: 'Authorized Partner',
    description: 'Entry-level track for businesses launching Smart Home practice.',
    narrative: [
      'Access GE Proseo catalog with 15% dealer pricing to prove demand without heavy inventory.',
      'Online training and deployment platform with 10-minute setup and $3,500 comprehensive training investment.',
      'Self-paced learning, quarterly webinars, and content library for team development.',
      'Responsive email and chat support for fast answers on retrofit and integration questions.'
    ],
    requirement: '$3,500 minimum annual commitment'
  },
  {
    name: 'Premier Partner',
    description: 'Enhanced benefits for established teams ready to scale into Savant.',
    narrative: [
      'Complete GE Proseo and Savant lineup with 25% discounting and demo-unit programs.',
      'Full ecosystem access including thermostats, SIPAs, cameras, door stations, door locks, networking, and BT speakers.',
      'Regional trainers for live design sessions, showroom activations, and launch events.',
      'Dedicated representation, priority support, MDF funds, and early product access.'
    ],
    requirement: '$10,000 minimum annual commitment'
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
    title: 'Shade Installers',
    subtitle: 'Automated window treatments',
    narrative:
      'GE Proseo lighting and shading integration for complete room control. Smart switches and sensors work seamlessly with automated blinds and shades.'
  },
  {
    title: 'AV Guys',
    subtitle: 'Audio-visual & networking experts',
    narrative:
      'Integrate BT speakers, networking equipment, and control systems. Savant automation platform provides professional-grade AV control and distribution.'
  }
] as const

const advantages = [
  {
    icon: Building2,
    title: 'Legacy & Trust',
    narrative:
      'GE’s 140-year lighting pedigree and Savant’s automation leadership give homeowners confidence that your recommendations will endure. The badge on your proposal immediately signals quality, service, and reliability.'
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

const highlightToneStyles = {
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  blue: 'border-blue-200 bg-neutral-50 text-blue-900',
  purple: 'border-purple-200 bg-purple-50 text-purple-700'
} as const

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
      'Hands-on enablement, demo gear, and sales accelerators built around your team’s highest-impact opportunities.',
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
} as const

function LearningGuideHero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-neutral-200 via-white to-stone-100 py-28 text-slate-900 md:py-36"
    >
      <div className="absolute inset-0 bg-[url('/smarthome-diagram.png')] bg-cover bg-center opacity-10 mix-blend-multiply" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-md font-semibold uppercase tracking-[0.35em] text-blue-950"
          >
            Learning guide
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-neutral-900 md:text-5xl"
          >
            Master the GE Proseo to Savant growth journey
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-neutral-600 md:text-xl"
          >
            Build confidence in the combined portfolio, align your services with the right partnership tier, and equip your team with the enablement needed to deliver signature Smart Home experiences.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Start your application
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-base font-semibold text-neutral-700 transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-200"
            >
              Explore homepage
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 rounded-3xl border border-neutral-200 bg-white px-6 py-6 text-left shadow-sm sm:grid-cols-3"
          >
            {heroStats.map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-blue-950 sm:text-3xl">{stat.value}</span>
                <span className="text-md uppercase tracking-[0.3em] text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 shadow-xl"
        >
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-900/30 px-4 py-2 text-md font-semibold uppercase tracking-[0.35em] text-blue-200 backdrop-blur-sm mb-6">
                 Smart Technology Showcase
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-blue-950/50 to-blue-900/50 p-8 rounded-2xl backdrop-blur-sm">
                  <Image
                    src="/bulb.png"
                    alt="GE Smart Bulb Technology - Revolutionary smart lighting with spiral filament design and intelligent controls"
                    width={400}
                    height={288}
                    className="h-72 w-auto object-contain drop-shadow-2xl mx-auto transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-white">GE Smart Bulb Technology</h2>
              <p className="text-md text-base text-white leading-relaxed max-w-2xl mx-auto">
                Discover the revolutionary GE smart bulb featuring spiral filament technology and intelligent controls.
                Our premium smart lighting combines classic Edison aesthetics with modern connectivity for the perfect blend of style and functionality.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50%</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">Smart Control</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wider">Smart Features</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function LearningGuidePage() {
  const [activeJourneyPhase, setActiveJourneyPhase] = useState(0)
  const [activeFamily, setActiveFamily] = useState(0)

  const currentJourneyPhase = journeyPhases[activeJourneyPhase]
  const currentProductFamily = productFamilies[activeFamily]
  const CurrentFamilyIcon = currentProductFamily.icon

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.learningGuide} />
        </div>
        <LearningGuideHero />

        <section id="journey" className="mx-auto max-w-6xl px-4 sm:px-6">
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
                          <h3 className="mt-2 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-blue-950">
                            {phase.title}
                          </h3>
                        </div>
                        <span
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold ${
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

              <p className="mt-6 text-base text-neutral-600">
                {currentJourneyPhase.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {currentJourneyPhase.story}
              </p>

              <div className="mt-8 space-y-4">
                {currentJourneyPhase.touchpoints.map(point => (
                  <div key={point.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-sm font-semibold text-blue-950">{point.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{point.copy}</p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 rounded-2xl border px-5 py-4 text-sm font-medium ${highlightToneStyles[currentJourneyPhase.highlight.tone]}`}
              >
                {currentJourneyPhase.highlight.text}
              </div>
            </motion.div>
          </div>
        </section>


        <section id="technology" className="mx-auto max-w-6xl px-4 sm:px-6">
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
                  <p className="mt-2 text-sm text-neutral-600">{currentProductFamily.summary}</p>
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
            eyebrow="Program tiers"
            title={<span className="text-blue-950">Choose the partnership level that matches your momentum</span>}
            description="Scale from foundational lighting packages to full Savant automation with incentives that grow alongside your pipeline."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {dealerTiers.map(tier => (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-950">{tier.name}</h3>
                  <p className="mt-3 text-base text-neutral-600">{tier.description}</p>

                  <div className="mt-6 space-y-3">
                    {tier.narrative.map(paragraph => (
                      <p key={paragraph} className="text-base leading-relaxed text-neutral-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-8 inline-flex w-fit rounded-full bg-blue-950/10 px-4 py-2 text-md font-semibold uppercase tracking-[0.3em] text-blue-950">
                  {tier.requirement}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="enablement" className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <section id="deployment" className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Deployment Environment"
            title={<span className="text-blue-950">New App & Training Platform</span>}
            description="Streamlined online purchasing, training, and deployment with comprehensive support for third-party integrations."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-950 bg-blue-950 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950">Online Training & Deployment</h3>
                  <p className="text-sm text-neutral-500">Quick setup, comprehensive training</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-emerald-700">10 min</div>
                    <div className="text-sm font-medium text-emerald-700">Quick Setup Time</div>
                  </div>
                  <p className="mt-2 text-sm text-emerald-600">Streamlined online purchasing and deployment process</p>
                </div>
                
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-blue-700">$3,500</div>
                    <div className="text-sm font-medium text-blue-700">Training Investment</div>
                  </div>
                  <p className="mt-2 text-sm text-blue-600">Comprehensive training program with ongoing support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-950 bg-blue-950 text-white">
                  <Link2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950">Third-Party Integration</h3>
                  <p className="text-sm text-neutral-500">Expand your ecosystem</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-neutral-700">Networking Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-neutral-700">Security Cameras</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-neutral-700">Door Lock Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-neutral-700">Audio/Video Distribution</span>
                </div>
              </div>
              
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p className="text-sm font-medium text-blue-950 mb-2">Growth Strategy</p>
                <p className="text-sm text-neutral-600">Add more purchasing customers and leverage expansive hardware and software product portfolio for comprehensive Smart Home solutions.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="support" className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Concierge enablement
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Ready to build your learning roadmap?</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Share your portfolio and we&apos;ll align the right training path, demo strategy, and integration milestones to accelerate your first year of growth.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
