'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Lightbulb,
  Home,
  BarChart3,
  Star,
  Link2,
  Building2,
  Battery,
  TrendingUp,
  LineChart,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    icon: Sparkles,
    title: 'Signature Portfolio',
    description: 'Deliver the most polished smart home experiences backed by GE Lighting innovation and Savant engineering.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Partnership',
    description: 'A true co-selling motion with marketing support, regional enablement, and concierge service for your clients.'
  },
  {
    icon: LineChart,
    title: 'Profitable Growth',
    description: 'Unlock better margins, tiered incentives, and rebate programs that scale with your business momentum.'
  }
]

const timeline = [
  {
    year: '1878',
    title: 'GE Smarthome Founded',
    description:
      'Thomas Edison establishes the Edison Electric Light Company, laying the groundwork for more than a century of lighting innovation.'
  },
  {
    year: '2005',
    title: 'Savant Systems Founded',
    description:
      'Savant launches as a premium home automation company focused on luxury control systems and energy management.'
  },
  {
    year: '2020',
    title: 'Strategic Acquisition',
    description:
      'Savant acquires GE Smarthome, creating a unified ecosystem that blends lighting expertise with automation leadership.'
  },
  {
    year: '2024',
    title: 'Unified Dealer Ecosystem',
    description:
      'The combined dealer program debuts, pairing GE Proseo smart lighting with Savant’s flagship automation platform.'
  }
]

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
]

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
]

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
]

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
]

const trainingTracks = [
  {
    title: 'Online Learning Platform',
    bullets: [
      'Self-paced certification modules',
      'Installation best practices and troubleshooting',
      'Sales technique refreshers for every tier'
    ]
  },
  {
    title: 'Regional Training',
    bullets: [
      'Hands-on workshops with demo kit access',
      'Live Q&A with product specialists',
      'Networking with peers across your market'
    ]
  },
  {
    title: 'Ongoing Support',
    bullets: [
      'Monthly webinars and roadmap previews',
      'Dealer community forums and escalation paths',
      'Video libraries for quick field refreshers'
    ]
  }
]

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
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
} as const

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}


export default function LearningGuidePage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  const heroBackgroundStyles = {
    backgroundImage:
      'linear-gradient(rgba(15, 23, 42, 0.65), rgba(37, 99, 235, 0.55)), url(/hero-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 text-slate-900">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
              GE Lighting × Savant
            </span>
            <span className="text-xl font-semibold text-slate-900">Dealer Learning Guide</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-blue-700">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-900"
            >
              Homepage
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </motion.header>

      <section
        ref={heroRef}
        className="relative overflow-hidden py-32 md:py-40 text-white"
        style={heroBackgroundStyles}
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Learning Hub
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Master the GE Proseo to Savant growth journey
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-xl text-blue-100 md:text-2xl leading-relaxed"
          >
            Build confidence in the combined portfolio, align your services to the right tier, and equip your team with the training needed to deliver unforgettable smart home experiences.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/signup"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/40 hover:bg-blue-50"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white"
            >
              <span>Homepage</span>
              <Star className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 text-center"
          >
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">140+</div>
              <div className="text-sm text-blue-100 mt-2">Years of Innovation</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">2K+</div>
              <div className="text-sm text-blue-100 mt-2">Products Available</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-100 mt-2">Training Support</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-400/20 to-blue-500/20 blur-3xl"
          />
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20">

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Partnership Timeline</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">How GE Lighting and Savant converged</h2>
          </div>
          <div className="mt-12 space-y-6">
            {timeline.map(item => (
              <motion.div
                key={item.year}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-blue-100 bg-white/90 px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:flex md:items-center md:gap-8"
              >
                <div className="flex flex-col items-start gap-2 md:w-1/4">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{item.year}</span>
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:mt-0 md:flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Program Pillars</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Everything you need to deliver a signature smart home experience
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map(pillar => (
              <motion.article
                key={pillar.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-8 transition-transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Product Ecosystem</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">From approachable lighting to flagship automation</h2>
          </div>
          <div className="mt-12 space-y-12">
            {productFamilies.map(family => (
              <motion.div
                key={family.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                      <family.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{family.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{family.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {family.items.map(item => (
                    <div key={item.heading} className="rounded-2xl border border-blue-50 bg-blue-50/40 p-5">
                      <p className="text-base font-semibold text-slate-900">{item.heading}</p>
                      <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
                    </div>
                  ))}
                </div>
                {family.footer ? (
                  <p className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/40 p-4 text-sm text-blue-700">
                    {family.footer}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Market Positioning</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Match every client to the right journey</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {marketPosition.map(card => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {card.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Dealer Program</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Choose the tier that matches your runway</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {dealerTiers.map(tier => (
              <motion.div
                key={tier.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="flex h-full flex-col gap-6 rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{tier.name}</h3>
                  <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {tier.highlights.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="rounded-2xl border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm font-semibold text-blue-700">
                  Requirements: {tier.requirement}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Partner Playbooks</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Toolkits tailored to your professional focus</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {professionalSegments.map(segment => (
              <motion.div
                key={segment.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{segment.title}</h3>
                  <p className="text-sm text-slate-500">{segment.subtitle}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {segment.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Training & Certification</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Education programs engineered for momentum</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {trainingTracks.map(track => (
              <motion.div
                key={track.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold text-slate-900">{track.title}</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  {track.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Competitive Edge</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Why dealers choose the GE × Savant alliance</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {advantages.map(card => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {card.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-10 py-12 text-white shadow-[0_24px_60px_rgba(37,99,235,0.35)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Next Step</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Ready to translate the playbook into revenue?</h3>
              <p className="mt-3 text-sm text-blue-100">
                Share your upcoming projects and we’ll map the right enablement, demo gear, and incentive structure to get you onboarding fast.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:text-blue-900"
              >
                Start Application
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
