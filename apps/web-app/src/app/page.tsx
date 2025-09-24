'use client'

import Link from 'next/link'
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useTransform,
  useMotionValueEvent
} from 'framer-motion'
import {
  ArrowRight,
  Award,
  Cable,
  CalendarCheck,
  CheckCircle2,
  Diamond,
  Globe2,
  Lightbulb,
  LineChart,
  Rocket,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Waves
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const hoverCard = {
  rest: { y: 0, scale: 1, boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.08)' },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: '0px 24px 55px rgba(15, 23, 42, 0.14)',
    transition: { type: 'spring', stiffness: 280, damping: 24 }
  }
}

const tiers = [
  {
    icon: Lightbulb,
    label: 'Phase 01',
    title: 'GE Proseo Certified Installer',
    summary:
      'Launch with connected lighting experiences that strengthen your brand while keeping installs fast and repeatable.',
    revenue: 'Avg. project value $5K–$15K',
    benefits: [
      'Exclusive pricing on GE Proseo fixtures',
      'Quick-start scenes and commissioning playbooks',
      'Marketing starter kit with co-branded assets'
    ]
  },
  {
    icon: Award,
    label: 'Phase 02',
    title: 'Connected Home Specialist',
    summary:
      'Introduce layered controls, sensors, and voice integrations to deliver seamless lighting-led smart homes.',
    revenue: 'Avg. project value $15K–$45K',
    benefits: [
      'Advanced controls & energy management training',
      'Dedicated design desk for specification reviews',
      'Bundle incentives on accessories and sensors'
    ]
  },
  {
    icon: Diamond,
    label: 'Phase 03',
    title: 'Savant Systems Integrator',
    summary:
      'Expand into high-margin automation with whole-home orchestration and premium client experiences.',
    revenue: 'Avg. project value $45K–$120K',
    benefits: [
      'Savant University accreditation pathways',
      'Shared pipeline forecasting with channel strategist',
      'Access to demo gear grants and showroom support'
    ]
  },
  {
    icon: Trophy,
    label: 'Phase 04',
    title: 'Savant Ambassador',
    summary:
      'Lead flagship installs with concierge project services, co-marketing, and priority launch access.',
    revenue: 'Avg. project value $120K+',
    benefits: [
      'Invite-only innovation previews & beta programs',
      'Joint PR + event activation budget',
      'Executive escalation channel and roadmap input'
    ]
  }
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'benefits', label: 'Benefits' }
]

const stats = [
  {
    value: 280,
    suffix: '+',
    label: 'Certified Dealers',
    description: 'Active partners across North America'
  },
  {
    value: 12,
    suffix: '',
    label: 'Channel Strategists',
    description: 'Dedicated experts for regional growth'
  },
  {
    value: 48,
    suffix: ' hrs',
    label: 'Fast Onboarding',
    description: 'Average time from application to kickoff call'
  }
]

const pillars = [
  {
    icon: Sparkles,
    title: 'Signature Portfolio',
    description: 'Deliver the most polished smart home experiences backed by GE Lighting innovation and Savant engineering.',
    bullets: ['Curated Cync lighting & controls', 'Whole-home scenes with Savant Pro', 'Premium brand cachet in every proposal']
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Partnership',
    description: 'A true co-selling motion with marketing support, regional enablement, and concierge service for your clients.',
    bullets: ['Co-branded campaign toolkits', 'Geo-targeted lead distribution', 'Dedicated success playbooks']
  },
  {
    icon: LineChart,
    title: 'Profitable Growth',
    description: 'Unlock better margins, tiered incentives, and rebate programs that scale with your business momentum.',
    bullets: ['Volume-based rebates', 'Quarterly business reviews', 'Priority access to new product launches']
  }
]

const journey = [
  {
    title: 'Discover',
    headline: 'Meet your channel strategist',
    detail: 'Explore portfolio fit and map your launch goals during a curated strategy session.',
    metric: '48 hr welcome call'
  },
  {
    title: 'Integrate',
    headline: 'Activate the GE x Savant toolkit',
    detail: 'Hands-on enablement, demo gear, and sales accelerators tailored to your vertical.',
    metric: '1:1 enablement track'
  },
  {
    title: 'Scale',
    headline: 'Grow with data-backed insights',
    detail: 'Quarterly reviews, shared pipeline forecasting, and targeted co-marketing programs.',
    metric: '3x project velocity'
  }
]

const verticals = [
  {
    id: 'electrical',
    icon: Cable,
    title: 'Electrical Contractors',
    headline: 'Energize lighting packages with programmable scenes',
    summary:
      'Move beyond commodity installs with GE Proseo presets, energy reporting, and retrofit-friendly controls that keep crews efficient.',
    highlights: [
      'Commission rooms in minutes with pre-built lighting recipes',
      'Capture recurring revenue with maintenance & monitoring add-ons',
      'Dedicated concierge to bundle permitting documentation and cut sheets'
    ],
    cta: 'Blueprint your first Proseo upsell',
    href: '/signup?vertical=electrical'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Installers',
    headline: 'Layer lighting with adaptive security automations',
    summary:
      'Elevate surveillance projects with presence simulation, entry lighting, and Savant scenes that sync with your preferred platforms.',
    highlights: [
      'Integrate motion and access alerts with lighting-based deterrence',
      'Deliver premium monitoring tiers leveraging the Savant ecosystem',
      'Co-market safety campaigns with geo-targeted homeowner offers'
    ],
    cta: 'Design a security + lighting package',
    href: '/signup?vertical=security'
  },
  {
    id: 'av',
    icon: Waves,
    title: 'A/V Integrators',
    headline: 'Own the whole-room experience with Savant orchestration',
    summary:
      'Bundle GE Lighting, multi-room audio, and Savant Pro control to launch signature entertainment and wellness scenes.',
    highlights: [
      'Pre-configured Savant scenes for cinema, wellness, and hosting',
      'High-touch design desk for complex audio, shading, and control stacks',
      'Launch-ready showroom demos with co-op marketing dollars'
    ],
    cta: 'Curate your next flagship install',
    href: '/signup?vertical=av'
  }
]

const resources = [
  {
    icon: Users,
    title: 'Lead Intelligence',
    copy: 'Intent data, regional programs, and curated introductions to high-value projects.',
    tag: 'Pipeline'
  },
  {
    icon: Globe2,
    title: 'Showroom Amplification',
    copy: 'Interactive demo scripts, virtual walkthroughs, and digital signage assets ready to deploy.',
    tag: 'Experience'
  },
  {
    icon: CalendarCheck,
    title: 'White-Glove Support',
    copy: '24/7 escalation paths, design consultation, and field engineering for complex installs.',
    tag: 'Support'
  }
]

const faqs = [
  {
    question: 'Who is the ideal GE Smarthome partner?',
    answer:
      'We work with custom integrators, security professionals, electricians, and builders who deliver premium connected experiences and want to add a marquee brand to their lineup.'
  },
  {
    question: 'How quickly can I start selling?',
    answer:
      'Most partners complete onboarding inside 48 hours. You will receive pricing, portal access, and demo gear recommendations as soon as your application is approved.'
  },
  {
    question: 'Do you support marketing campaigns?',
    answer:
      'Yes. We offer co-branded assets, geo-targeted digital spend, showroom event kits, and leads generated from national campaigns.'
  }
]

function AnimatedNumber({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.floor(latest))
  const [display, setDisplay] = useState('0')
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useMotionValueEvent(rounded, 'change', latest => {
    setDisplay(`${latest}${suffix ?? ''}`)
  })

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.4, ease: 'easeOut' })
    }
  }, [count, value, isInView])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
      {display}
    </span>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })
  const [activeStage, setActiveStage] = useState(0)
  const [activeTier, setActiveTier] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const ActiveTierIcon = tiers[activeTier].icon

  const backgroundGrid = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        delay: index * 0.08 + 0.6,
        left: `${(index % 4) * 25}%`,
        top: `${Math.floor(index / 4) * 33}%`
      })),
    []
  )

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
            <span className="text-xl font-semibold text-slate-900">Smarthome Dealer Program</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/learning-guide"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Learning Guide
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              Become a Dealer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="/learning-guide"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-900"
            >
              Guide
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              Apply
            </Link>
          </div>
        </nav>
      </motion.header>

      <section
        ref={heroRef}
        className="relative overflow-hidden py-28 md:py-32 text-white"
        style={heroBackgroundStyles}
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="relative mx-auto max-w-5xl px-6 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            A Modern Dealer Experience
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            Build immersive smart homes with a partner engineered for growth
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl"
          >
            Join a curated network of professionals elevating every install with GE Lighting innovation and Savant control.
            Access concierge support, tailored enablement, and co-marketing that amplifies your brand.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-1 hover:bg-blue-100"
            >
              Begin the Application
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 text-base font-semibold text-blue-100 transition-colors hover:text-white"
            >
              Explore the Program
              <Star className="h-4 w-4" />
            </a>
            <Link
              href="/learning-guide"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              View Learning Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0">
          {backgroundGrid.map((cell, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.18, scale: 1 }}
              transition={{ duration: 1.2, delay: cell.delay }}
              style={{ left: cell.left, top: cell.top }}
              className="absolute h-36 w-36 rounded-3xl border border-blue-100/60 bg-white/40"
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-2xl border border-blue-100 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                {stat.label}
              </p>
              <p className="mt-4 text-sm text-slate-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pillars" className="relative py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Program Pillars</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Everything you need to deliver a signature smart home experience
              </h2>
            </motion.div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map(pillar => (
              <motion.article
                key={pillar.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={hoverCard}
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {pillar.bullets.map(point => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="relative border-y border-slate-200 bg-white/80 py-24 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:flex-row md:items-center">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Partner Journey</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                From first conversation to flagship installation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Every step is guided by your channel strategist with resources tailored to your business model.
              </p>
            </motion.div>
          </div>
          <div className="grid flex-1 gap-6">
            {journey.map((stage, index) => (
              <motion.button
                key={stage.title}
                type="button"
                onMouseEnter={() => setActiveStage(index)}
                onFocus={() => setActiveStage(index)}
                onClick={() => setActiveStage(index)}
                className={`rounded-3xl border p-6 text-left transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeStage === index
                    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]'
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                    activeStage === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                      {stage.title}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900">{stage.headline}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{stage.detail}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  {stage.metric}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="verticals" className="relative border-y border-slate-200 bg-white/80 py-24 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Who We Serve</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Tailored playbooks for every smart home professional
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Electrical contractors, security specialists, and A/V integrators each get a runway that matches their workflow, margins, and client expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon
              return (
                <motion.article
                  key={vertical.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                  className="group relative flex h-full flex-col gap-6 rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                        {vertical.title}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">{vertical.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{vertical.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {vertical.highlights.map(point => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={vertical.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                  >
                    {vertical.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-8 py-10 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:flex-row md:justify-between md:text-left"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Next Step</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Start with a discovery session tailored to your trade</h3>
              <p className="mt-3 text-sm text-slate-600">Share upcoming projects and we will map training, demo gear, and margin models around your pipeline.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              {verticals.map(vertical => (
                <Link
                  key={`cta-${vertical.id}`}
                  href={vertical.href}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-900"
                >
                  {vertical.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="path" className="relative border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 py-24 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Path to Savant Ambassador
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Start with smart lighting, scale into full Savant ecosystems
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Each tier unlocks higher-margin experiences, deeper enablement, and co-branded marketing muscle so you can move from quick installs to flagship smart homes without losing momentum.
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={tiers[activeTier].title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-5 rounded-3xl border border-blue-200 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <ActiveTierIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                      {tiers[activeTier].label}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-900">{tiers[activeTier].title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{tiers[activeTier].summary}</p>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-2 text-sm font-semibold text-blue-700">
                  {tiers[activeTier].revenue}
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {tiers[activeTier].benefits.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="space-y-4">
            {tiers.map((tier, index) => {
              const isActive = activeTier === index
              return (
                <motion.button
                  key={tier.title}
                  type="button"
                  onMouseEnter={() => setActiveTier(index)}
                  onFocus={() => setActiveTier(index)}
                  onClick={() => setActiveTier(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                  className={`group flex w-full items-center justify-between gap-4 rounded-3xl border px-6 py-5 text-left transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isActive
                      ? 'border-blue-300 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.08)]'
                      : 'border-white/40 bg-white/50 hover:border-blue-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-semibold transition-colors ${
                      isActive ? 'border-blue-500 bg-blue-600 text-white' : 'border-blue-100 bg-blue-50 text-blue-700'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                        {tier.label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-slate-900">{tier.title}</p>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${
                    isActive ? 'translate-x-1 text-blue-600' : 'text-blue-400 group-hover:translate-x-1 group-hover:text-blue-600'
                  }`} />
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <section id="resources" className="relative py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Dealer Benefits</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Tools and support that keep your pipeline moving
              </h2>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {resources.map(resource => (
              <motion.article
                key={resource.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="rounded-3xl border border-blue-100 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100/80">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{resource.copy}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-10 py-12 text-white shadow-[0_24px_60px_rgba(37,99,235,0.35)]"
          >
            <div className="absolute inset-y-0 right-10 hidden w-40 rotate-6 rounded-3xl border border-white/30 bg-white/10 md:block" />
            <div className="relative max-w-2xl">
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                Need a tailored enablement path?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                Work directly with our enablement studio to co-create demo spaces, digital walkthroughs, and proposal templates that reflect your brand.
              </p>
              <Link
                href="/signup"
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Connect with our team
                <Rocket className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faqs" className="relative border-t border-slate-200 bg-white/80 py-24 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">FAQs</span>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Everything you need before you apply
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Still exploring the opportunity? Start with our most common partner questions or reach out directly.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-6">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <motion.div key={faq.question} layout className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(current => (current === index ? null : index))}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">{faq.question}</h3>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-full border border-slate-200 p-2"
                      >
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="px-6 pb-6 text-sm leading-relaxed text-slate-600"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-600/10" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Concierge Access
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Talk with a channel strategist</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Share your portfolio and we will map the right incentives, demo gear, and integration path for your team.
              </p>
              <Link
                href="/signup"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
              >
                Schedule a call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">GE Lighting × Savant</p>
            <p className="mt-2 text-sm text-slate-500">
              © {new Date().getFullYear()} GE Lighting, a Savant company. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#pillars" className="transition-colors hover:text-slate-900">
              Program Pillars
            </a>
            <a href="#journey" className="transition-colors hover:text-slate-900">
              Partner Journey
            </a>
            <Link href="/learning-guide" className="transition-colors hover:text-slate-900">
              Learning Guide
            </Link>
            <Link href="/signup" className="transition-colors hover:text-slate-900">
              Apply Now
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
