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
  TrendingUp
} from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'


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
      'linear-gradient(rgba(15, 23, 42, 0.75), rgba(37, 99, 235, 0.65)), url(/smarthome-diagram.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
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

      <main className="mx-auto flex max-w-5xl flex-col gap-32 px-6 py-24">

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Partner Journey</span>
            <h2 className="mt-3 text-2xl font-light text-slate-900">From first conversation to flagship installation</h2>
            <p className="mt-4 text-base text-slate-600">Every step is guided by your channel strategist with resources tailored to your business model and growth targets.</p>
          </div>

          <div className="mt-16 space-y-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="border-b border-slate-200/60 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-lg font-bold text-blue-700">01</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Discover Phase</p>
                    <h3 className="text-xl font-medium text-slate-900">Meet your channel strategist</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600 leading-relaxed mb-6">Explore portfolio fit and map your launch goals during a curated strategy session tailored to your vertical and business objectives.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Initial Assessment</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Comprehensive review of your current smart home capabilities, target market, and growth objectives to identify optimal partnership opportunities.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Market Analysis</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Deep dive into your local market dynamics, competitive landscape, and customer demographics to tailor our approach to your region.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Portfolio Mapping</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Strategic alignment of GE Proseo and Savant solutions with your existing services and future expansion plans.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Success Planning</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Development of a customized roadmap with clear milestones, revenue targets, and growth metrics for your first 12 months.</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-green-200/60 bg-green-50/50 p-4">
                <p className="text-sm font-medium text-green-800">Timeline: 48-hour welcome call scheduled within first week of partnership approval</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="border-b border-slate-200/60 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-lg font-bold text-blue-700">02</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Integration Phase</p>
                    <h3 className="text-xl font-medium text-slate-900">Activate the GE × Savant toolkit</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600 leading-relaxed mb-6">Hands-on enablement, demo gear, and sales accelerators built around your team's most valuable opportunities and existing workflows.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Technical Training</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Comprehensive certification programs covering installation, configuration, and troubleshooting for both GE Proseo and Savant systems.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Demo Kit Program</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Access to demonstration equipment and showroom displays to showcase capabilities and close more high-value projects.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Sales Enablement</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Co-branded marketing materials, pricing guides, and proposal templates designed to accelerate your sales cycle.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Support Integration</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Direct access to technical support teams and integration with your existing service workflows for seamless operations.</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-blue-200/60 bg-blue-50/50 p-4">
                <p className="text-sm font-medium text-blue-800">Duration: 30-day intensive onboarding with 1:1 enablement track and regional training sessions</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="border-b border-slate-200/60 pb-12 last:border-b-0 last:pb-0"
            >
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <span className="text-lg font-bold text-blue-700">03</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Scale Phase</p>
                    <h3 className="text-xl font-medium text-slate-900">Grow with data-backed insights</h3>
                  </div>
                </div>
                <p className="text-base text-slate-600 leading-relaxed mb-6">Quarterly reviews, shared pipeline forecasting, and targeted co-marketing programs designed to accelerate close rates and expand market presence.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Performance Analytics</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Detailed reporting on sales performance, customer satisfaction, and market penetration with actionable insights for growth.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Co-Marketing Programs</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Targeted digital campaigns, local event sponsorships, and co-branded marketing initiatives to expand your reach.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Advanced Training</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Ongoing education on new products, advanced integration techniques, and emerging smart home technologies.</p>
                </div>
                <div className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                  <p className="font-medium text-slate-900">Strategic Planning</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">Quarterly business reviews and strategic planning sessions to optimize growth and identify new market opportunities.</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-purple-200/60 bg-purple-50/50 p-4">
                <p className="text-sm font-medium text-purple-800">Results: Average 3× increase in project velocity and 40-60% improvement in profit margins within first year</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Product Ecosystem</span>
            <h2 className="mt-3 text-2xl font-light text-slate-900">Technology portfolio</h2>
          </div>
          <div className="mt-16 space-y-16">
            {productFamilies.map(family => (
              <motion.div
                key={family.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="border-b border-slate-200/60 pb-12 last:border-b-0 last:pb-0"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                      <family.icon className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-slate-900">{family.title}</h3>
                      <p className="text-sm text-slate-500">{family.summary}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {family.items.map(item => (
                    <div key={item.heading} className="rounded-lg border border-slate-200/60 bg-white/60 p-4">
                      <p className="font-medium text-slate-900">{item.heading}</p>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.copy}</p>
                    </div>
                  ))}
                </div>
                
                {family.footer ? (
                  <div className="mt-6 rounded-lg border border-slate-200/60 bg-slate-50/50 p-4">
                    <p className="text-sm text-slate-600">{family.footer}</p>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Market Positioning</span>
            <h2 className="mt-3 text-2xl font-light text-slate-900">Portfolio range</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {marketPosition.map(card => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-lg border border-slate-200/60 bg-white/80 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <card.icon className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {card.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-slate-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-lg font-medium text-blue-600">Dealer Program</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl leading-tight">Partnership program structure</h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-700 md:text-2xl font-medium">Two distinct partnership levels designed to match your business stage and growth objectives.</p>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {dealerTiers.map(tier => (
              <motion.div
                key={tier.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-2xl border border-blue-100 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-3 text-lg text-slate-600 leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-3 text-base text-slate-700 mb-6">
                  {tier.highlights.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                  <p className="text-sm font-semibold text-green-800 uppercase tracking-wider">
                    {tier.requirement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Partner Playbooks</span>
            <h2 className="mt-3 text-2xl font-light text-slate-900">Specialized resources for your focus</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {professionalSegments.map((segment, index) => (
              <motion.div
                key={segment.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="rounded-lg border border-slate-200/60 bg-white/80 p-6 transition-all duration-200 hover:border-slate-300/80 hover:bg-white">
                  <div className="mb-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-200">
                      <span className="text-sm font-medium text-slate-700">{segment.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">{segment.title}</h3>
                    <p className="text-sm text-slate-500">{segment.subtitle}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {segment.bullets.map((point, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="mt-2 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-lg font-medium text-blue-600">Training & Certification</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl leading-tight">Guided learning pathways</h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-700 md:text-2xl font-medium">Comprehensive training programs designed to accelerate your expertise and maximize your success with GE and Savant solutions.</p>
          </div>

          <div className="mt-20 space-y-16">
            {trainingTracks.map((track, index) => (
              <motion.div
                key={track.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-8 md:gap-12">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 text-xl font-bold transition-all group-hover:scale-105">
                    {index + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{track.title}</h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {track.bullets.map((point, bulletIndex) => (
                        <div
                          key={bulletIndex}
                          className="rounded-2xl border border-blue-100 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
                        >
                          <p className="text-xl text-slate-700 leading-relaxed font-medium md:text-2xl">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < trainingTracks.length - 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-6 py-4 text-lg font-semibold text-green-800">
              <div className="h-3 w-3 rounded-full bg-green-600" />
              Professional certification available upon completion
            </div>
          </motion.div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Competitive Edge</span>
            <h2 className="mt-3 text-2xl font-light text-slate-900">Partnership advantages</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {advantages.map(card => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-lg border border-slate-200/60 bg-white/80 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <card.icon className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {card.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-slate-400" />
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
