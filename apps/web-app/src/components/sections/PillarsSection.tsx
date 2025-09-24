'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, LineChart } from 'lucide-react'
import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Dedicated strategist',
    description: '1:1 guidance from onboarding through expansion with regional expertise.'
  },
  {
    icon: LineChart,
    title: '24/7 support',
    description: 'Priority access to technical specialists and rapid-response troubleshooting.'
  },
  {
    icon: Sparkles,
    title: 'Premium portfolio',
    description: 'GE Lighting innovation backed by Savant automation to differentiate every install.'
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.6, 0.3, 1] }
  }
} as const

function PillarsSectionComponent() {
  return (
    <section id="about" className="relative bg-slate-50 py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Partner pillars"
          title="Core advantages delivered to every GE Smarthome dealer"
          description="A modern partnership system—strategists, support, and premium portfolio—designed to make every project feel turnkey and future-ready."
          align="left"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map(pillar => (
            <motion.article
              key={pillar.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="rounded-3xl border border-blue-950/10 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950/10 text-blue-950">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const PillarsSection = memo(PillarsSectionComponent)
