'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Battery,
  TrendingUp,
  Link2
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


function ProgramTiersHero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden py-28 text-white md:py-36 bg-slate-800"
    >
      <Image
        src="/ge-team-photo.png"
        alt="GE Smart Home team photo"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-blue-950/65 to-slate-900/75" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-8 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-md font-semibold uppercase tracking-[0.35em] text-white/90"
          >
            Program Tiers
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Choose the partnership level that matches your momentum
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-blue-100 md:text-xl max-w-3xl mx-auto"
          >
            Scale from foundational lighting packages to full Savant automation with incentives that grow alongside your pipeline.
          </motion.p>


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

export default function ProgramTiersPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.programTiers} />
        </div>
        <ProgramTiersHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">

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

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Ready to join our program?
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Start your partnership today</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Choose the tier that matches your business goals and begin building your smart home practice.
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
