'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
    icon: '💡',
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
    icon: '🏠',
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
    icon: '📊',
    title: 'Entry Level — GE Proseo',
    bullets: [
      'DIY-friendly installs with retrofit compatibility',
      'Competitive pricing with no-hub options',
      'Works with Alexa, Google, and leading ecosystems'
    ]
  },
  {
    icon: '⭐️',
    title: 'Premium — Savant Integration',
    bullets: [
      'Whole-home automation with concierge support',
      'Energy resilience, custom programming, and 24/7 monitoring',
      'Professional installation for high-end residences'
    ]
  },
  {
    icon: '🔗',
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
    icon: '🏛️',
    title: 'Legacy & Trust',
    bullets: [
      '140+ years of GE lighting innovation',
      'Premium automation pedigree from Savant',
      'Brand equity that reassures homeowners'
    ]
  },
  {
    icon: '🔋',
    title: 'Energy Resilience',
    bullets: [
      'Grid-independent backup and load management',
      'Energy dashboards for smarter consumption',
      'Future-proof solutions ready for electrification'
    ]
  },
  {
    icon: '📈',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}


export default function LearningGuidePage() {
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

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20">
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Learning Hub
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Master the GE Proseo to Savant growth journey
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Build confidence in the combined portfolio, align your services to the right tier, and equip your team with
              the training needed to deliver unforgettable smart home experiences.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 p-1"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Next-Generation Smart Home Control
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Experience the future of home automation with GE Smarthome's intuitive control systems.
                  From energy management to lighting scenes, everything is at your fingertips.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-400">78%</div>
                    <div className="text-blue-200">Energy Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-blue-200">Smart Monitoring</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl"></div>
                <img
                  src="/smart-home-control-panel.jpg"
                  alt="GE Smarthome Control Panel showing energy monitoring, security status, and home automation controls"
                  className="relative rounded-2xl shadow-2xl"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </motion.section>

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
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-500/30">
                      {family.icon}
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
                <div className="text-3xl">{card.icon}</div>
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
                <div className="text-3xl">{card.icon}</div>
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
