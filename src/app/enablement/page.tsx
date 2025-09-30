'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Star,
  Link2,
  Building2
} from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'

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
    title: 'Audio/Video Integrators',
    subtitle: 'Entertainment & automation systems',
    narrative:
      'Full Savant ecosystem including lighting, climate, security, and A/V distribution. Professional-grade automation for luxury residential and commercial installations.'
  },
  {
    title: 'General Contractors',
    subtitle: 'Complete smart home solutions',
    narrative:
      'End-to-end smart home packages combining GE Proseo accessibility with Savant luxury. Coordinate all trades for seamless installation and customer satisfaction.'
  }
] as const

const advantages = [
  {
    icon: Star,
    title: 'Brand Credibility',
    narrative:
      'GE\'s 140+ year heritage and Savant\'s luxury positioning create instant trust with high-value customers, enabling premium pricing and faster sales cycles.'
  },
  {
    icon: Link2,
    title: 'Unified Ecosystem',
    narrative:
      'One app controls everything from GE Proseo bulbs to Savant automation, reducing customer confusion and support calls while increasing satisfaction.'
  },
  {
    icon: Building2,
    title: 'Scalable Solutions',
    narrative:
      'One unified app stretches from a single bulb to a flagship estate, so every install lays groundwork for the next upsell. Customers enjoy consistent experiences while you unlock recurring service and monitoring revenue.'
  }
] as const

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function EnablementPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.enablement} />
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Training & Support"
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
                    <h3 className="text-lg font-semibold text-blue-950">{advantage.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{advantage.narrative}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-950">Ready to get started?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Explore our comprehensive training programs and support resources
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/technology"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Smart Home Technology
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-50"
              >
                24/7 Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
