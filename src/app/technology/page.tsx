'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Home,
  BarChart3,
  Star,
  Link2,
  Building2,
  Battery
} from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'

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
    title: 'Savant Smart Home',
    summary: 'Premium automation platform for luxury residential and commercial installations.',
    items: [
      {
        heading: 'Lighting Control',
        copy: 'Professional-grade dimming and scene control.'
      },
      {
        heading: 'Climate Management',
        copy: 'HVAC integration with zoning and scheduling.'
      },
      {
        heading: 'Security & Access',
        copy: 'Video surveillance and smart locks.'
      },
      {
        heading: 'Audio/Video',
        copy: 'Whole-home entertainment distribution.'
      }
    ]
  },
  {
    icon: BarChart3,
    title: 'Integration Platform',
    summary: 'Unified control and monitoring across all connected devices.',
    items: [
      {
        heading: 'Savant App',
        copy: 'Single interface for all smart home functions.'
      },
      {
        heading: 'Voice Control',
        copy: 'Amazon Alexa and Google Assistant integration.'
      },
      {
        heading: 'Automation Rules',
        copy: 'Custom scenes and scheduling capabilities.'
      },
      {
        heading: 'Energy Monitoring',
        copy: 'Real-time usage tracking and optimization.'
      }
    ]
  }
] as const

const marketPosition = [
  {
    icon: Star,
    title: 'Premium Positioning',
    narrative:
      'Savant delivers luxury automation that commands premium pricing while GE Proseo captures the accessible retrofit market. This dual-tier approach maximizes your addressable market.'
  },
  {
    icon: Link2,
    title: 'Unified Ecosystem',
    narrative:
      'Both platforms share the same app and voice control, so customers can start with GE Proseo and seamlessly upgrade to Savant without changing their daily routines.'
  },
  {
    icon: Building2,
    title: 'Professional Grade',
    narrative:
      'Savant\'s commercial heritage means enterprise-grade reliability and scalability, while GE Proseo\'s consumer focus ensures easy installation and customer adoption.'
  },
  {
    icon: Battery,
    title: 'Future-Proof',
    narrative:
      'Regular firmware updates and expanding product lines keep your installations current and create ongoing service opportunities.'
  }
] as const

export default function TechnologyPage() {
  const [activeFamily, setActiveFamily] = useState(0)
  const currentProductFamily = productFamilies[activeFamily]
  const CurrentFamilyIcon = currentProductFamily.icon

  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.technology} />
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Smart Home Technology"
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
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h4 className="text-base font-semibold text-blue-950">{item.heading}</h4>
                  <p className="mt-2 text-sm text-neutral-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Market advantage"
            title={<span className="text-blue-950">Why this technology stack wins</span>}
            description="Understanding the competitive landscape helps you position solutions effectively and maximize margins."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {marketPosition.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-950">{advantage.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{advantage.narrative}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-950">Ready to explore the technology?</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Learn about our comprehensive training and support programs
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/enablement"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Training & Support
              </Link>
              <Link
                href="/program-tiers"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-50"
              >
                Program Tiers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
