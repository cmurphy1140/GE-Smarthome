'use client'

import Link from 'next/link'
import { useRef } from 'react'
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
        copy: 'Direct Connect LED, Reveal® color accuracy, Dynamic Effects with music sync and presets.'
      },
      {
        heading: 'Smart Switches',
        copy: 'Toggle and paddle dimmers, no-neutral options for older homes, keypad controls for tailored scenes.'
      },
      {
        heading: 'Light Strips & Panels',
        copy: 'Indoor and outdoor strips, hexagon panels, and accent lighting ready for statement installs.'
      },
      {
        heading: 'Specialty Controls',
        copy: 'Ceiling fan switches, motion sensors, and accessories that round out whole-room experiences.'
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
        copy: 'Whole-home scenes spanning lighting, audio, video, and comfort with Savant Pro.'
      },
      {
        heading: 'Energy Management',
        copy: 'Grid-independent backup, intelligent load shedding, and energy dashboards.'
      },
      {
        heading: 'User Interfaces',
        copy: 'Touch panels, mobile app, and voice control that deliver a consistent branded experience.'
      },
      {
        heading: 'Integration Platform',
        copy: 'Professional-grade hardware and APIs that unify third-party devices across the property.'
      }
    ],
    footer:
      'The Savant-powered Proseo App keeps the homeowner journey seamless — from quick bulb upgrades to flagship automation projects.'
  }
] as const

const marketPosition = [
  {
    icon: BarChart3,
    title: 'Entry Level — GE Proseo',
    bullets: [
      'DIY-friendly installs with retrofit compatibility',
      'Competitive pricing with no-hub options',
      'Works with Alexa, Google, and leading ecosystems'
    ]
  },
  {
    icon: Star,
    title: 'Premium — Savant Integration',
    bullets: [
      'Whole-home automation with concierge support',
      'Energy resilience, custom programming, and 24/7 monitoring',
      'Professional installation for high-end residences'
    ]
  },
  {
    icon: Link2,
    title: 'Seamless Scalability',
    bullets: [
      'Start with smart bulbs and switches, expand to Savant scenes',
      'Protect investments with one app across the journey',
      'Unlock upsell opportunities as client needs evolve'
    ]
  }
] as const

const dealerTiers = [
  {
    name: 'Authorized Partner',
    description: 'Entry-level track for businesses launching their smart home practice.',
    highlights: [
      'Core GE Proseo catalog access and standard dealer pricing (15% discount)',
      'Self-paced training, quarterly webinars, and baseline marketing materials',
      'Email/chat support plus dealer-portal resources'
    ],
    requirement: '$3,500 minimum annual commitment'
  },
  {
    name: 'Premier Partner',
    description: 'Enhanced benefits for established teams ready to scale into Savant.',
    highlights: [
      'Full GE Proseo + Savant portfolio with advanced pricing (25% discount)',
      'Regional trainers, live demos, and demo-unit programs',
      'Dedicated rep, priority support, MDF (2%), and early product access'
    ],
    requirement: '$10,000 minimum annual commitment'
  }
] as const

const professionalSegments = [
  {
    title: 'Installers',
    subtitle: 'Custom integration & AV teams',
    bullets: [
      'Priority technical hotline and advanced documentation',
      'Deep-dive Savant certification tracks',
      'Best-practice libraries and dedicated technical account managers'
    ]
  },
  {
    title: 'Builders',
    subtitle: 'New-construction specialists',
    bullets: [
      'Pre-wire planning templates and construction timeline playbooks',
      'Bulk ordering programs for developments',
      'Model-home demo kits and jobsite support'
    ]
  },
  {
    title: 'Architects & Designers',
    subtitle: 'Specification and aesthetic experts',
    bullets: [
      'CAD assets, finish samples, and integration guides',
      'Design consultations and co-branded client collateral',
      'Support for lighting layered into architectural concepts'
    ]
  },
  {
    title: 'Remodelers',
    subtitle: 'Renovation and retrofit pros',
    bullets: [
      'Upgrade pathways for existing homes and retrofit wiring tips',
      'Before/after case studies for homeowner education',
      'Tools to scope packages around project milestones'
    ]
  }
] as const

const advantages = [
  {
    icon: Building2,
    title: 'Legacy & Trust',
    bullets: [
      '140+ years of GE lighting innovation',
      'Premium automation pedigree from Savant',
      'Brand equity that reassures homeowners'
    ]
  },
  {
    icon: Battery,
    title: 'Energy Resilience',
    bullets: [
      'Grid-independent backup and load management',
      'Energy dashboards for smarter consumption',
      'Future-proof solutions ready for electrification'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    bullets: [
      'Consistent app experience from bulb to whole-home',
      'Upsell-ready roadmap for growing accounts',
      'Investment protection with one unified stack'
    ]
  }
] as const

const journeyPhases = [
  {
    step: '01',
    phase: 'Discover phase',
    title: 'Meet your channel strategist',
    description:
      'Explore portfolio fit and map your launch goals during a curated strategy session tailored to your vertical and business objectives.',
    cards: [
      {
        heading: 'Initial assessment',
        copy: 'Review current smart home capabilities, target market, and growth objectives to pinpoint partnership opportunities.'
      },
      {
        heading: 'Market analysis',
        copy: 'Understand local dynamics, competitors, and customer demographics to localize go-to-market motions.'
      },
      {
        heading: 'Portfolio mapping',
        copy: 'Align GE Proseo and Savant solutions with existing services and your expansion roadmap.'
      },
      {
        heading: 'Success planning',
        copy: 'Build a 12-month plan with clear milestones, revenue targets, and enablement touchpoints.'
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
    cards: [
      {
        heading: 'Technical training',
        copy: 'Certification tracks covering installation, configuration, and troubleshooting for GE Proseo and Savant systems.'
      },
      {
        heading: 'Demo kit program',
        copy: 'Access showroom displays and field kits that help prospects experience signature scenes firsthand.'
      },
      {
        heading: 'Sales enablement',
        copy: 'Co-branded marketing assets, pricing guides, and proposal templates calibrated to your vertical.'
      },
      {
        heading: 'Support integration',
        copy: 'Direct access to technical support and streamlined escalation paths woven into your service workflows.'
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
    cards: [
      {
        heading: 'Performance analytics',
        copy: 'Access dashboards that surface sales performance, customer satisfaction, and market penetration trends.'
      },
      {
        heading: 'Co-marketing programs',
        copy: 'Targeted digital campaigns, local event sponsorships, and co-branded promotions to expand reach.'
      },
      {
        heading: 'Advanced training',
        copy: 'Ongoing education covering new product releases, advanced integrations, and emerging smart home tech.'
      },
      {
        heading: 'Strategic planning',
        copy: 'Quarterly business reviews outlining new market opportunities and revenue targets for the year ahead.'
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
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-28 text-white md:py-36"
    >
      <div className="absolute inset-0 bg-[url('/smarthome-diagram.png')] bg-cover bg-center opacity-20 mix-blend-soft-light" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
          >
            Learning guide
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight md:text-5xl"
          >
            Master the GE Proseo to Savant growth journey
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base leading-relaxed text-blue-100 md:text-lg"
          >
            Build confidence in the combined portfolio, align your services with the right partnership tier, and equip your team with the enablement needed to deliver signature smart home experiences.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
            >
              Start your application
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              Explore homepage
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid gap-4 rounded-3xl border border-white/20 bg-white/5 px-6 py-6 text-left backdrop-blur-sm sm:grid-cols-3"
          >
            {heroStats.map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-blue-100">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
        >
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Partner enablement snapshots</h2>
            <div className="space-y-4 text-sm text-blue-100">
              <p>• 48-hour welcome call with regional channel strategist.</p>
              <p>• Demo gear roadmap tailored to your first flagship project.</p>
              <p>• 30-day immersive onboarding and certification tracks.</p>
              <p>• Quarterly business reviews with shared performance dashboards.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-sm text-blue-100">
              <span className="font-semibold text-white">Tip:</span> Pair this guide with the homepage overview to align go-to-market messaging with technical training.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function LearningGuidePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <LearningGuideHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            align="left"
            eyebrow="Partner journey"
            title="From first conversation to flagship installation"
            description="Every phase is supported by channel strategists, enablement specialists, and performance data tuned to your business model."
          />
          <div className="mt-12 space-y-12">
            {journeyPhases.map(phase => (
              <motion.div
                key={phase.step}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/10 text-lg font-semibold text-blue-950">
                      {phase.step}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{phase.phase}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">{phase.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-base text-slate-600">{phase.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {phase.cards.map(card => (
                    <div
                      key={card.heading}
                      className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
                    >
                      <p className="font-semibold text-slate-900">{card.heading}</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{card.copy}</p>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-6 rounded-2xl border px-5 py-4 text-sm font-medium ${
                    phase.highlight.tone === 'green'
                      ? 'border-green-200 bg-green-50 text-green-800'
                      : phase.highlight.tone === 'purple'
                        ? 'border-purple-200 bg-purple-50 text-purple-800'
                        : 'border-blue-950/30 bg-blue-950/10 text-blue-950'
                  }`}
                >
                  {phase.highlight.text}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Product ecosystem"
            title="Lighting and automation portfolio"
            description="Guide clients from retrofit-ready upgrades to full Savant automation with a unified stack of hardware, software, and enablement."
          />

          <div className="mt-12 space-y-10">
            {productFamilies.map(family => {
              const Icon = family.icon
              return (
                <motion.div
                  key={family.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="rounded-3xl border border-blue-950/15 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/10 text-blue-950">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{family.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{family.summary}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {family.items.map(item => (
                      <div key={item.heading} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                        <p className="font-semibold text-slate-900">{item.heading}</p>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.copy}</p>
                      </div>
                    ))}
                  </div>

                  {'footer' in family && family.footer ? (
                    <div className="mt-6 rounded-2xl bg-blue-950/10 p-4 text-sm font-medium text-blue-950">
                      {family.footer}
                    </div>
                  ) : null}
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Market positioning"
            title="Frame the value across every stage"
            description="Anchor your proposals with a clear path from entry-level packages to premium Savant-led experiences."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {marketPosition.map(position => {
              const Icon = position.icon
              return (
                <motion.div
                  key={position.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/10 text-blue-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-slate-900">{position.title}</p>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {position.bullets.map(bullet => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-950" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Program tiers"
            title="Choose the partnership level that matches your momentum"
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
                className="flex h-full flex-col justify-between rounded-3xl border border-blue-950/20 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                  <p className="mt-3 text-sm text-slate-600">{tier.description}</p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {tier.highlights.map(highlight => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-950" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 inline-flex w-fit rounded-full bg-blue-950/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-950">
                  {tier.requirement}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Who we serve"
            title="Enablement tailored to every professional segment"
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
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">{segment.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{segment.subtitle}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {segment.bullets.map(bullet => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-950" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why GE × Savant"
            title="Hard-earned advantages you can bring to market"
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
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/10 text-blue-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-semibold text-slate-900">{advantage.title}</p>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {advantage.bullets.map(bullet => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-950" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-950/30 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)] md:flex md:items-center md:justify-between md:gap-10">
            <div className="space-y-4 md:max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Concierge enablement
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Ready to build your learning roadmap?</h3>
              <p className="text-sm leading-relaxed text-blue-100">
                Share your portfolio and we’ll align the right training path, demo strategy, and integration milestones to accelerate your first year of growth.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 md:mt-0">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
              >
                Apply for the dealer program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-white/10"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
