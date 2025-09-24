'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const journey = [
  {
    title: 'Discover',
    headline: 'Meet your channel strategist',
    metric: '48 hr welcome call'
  },
  {
    title: 'Integrate',
    headline: 'Activate the GE Smarthome toolkit',
    metric: '1:1 enablement track'
  },
  {
    title: 'Scale',
    headline: 'Grow with data-backed insights',
    metric: '3x project velocity'
  }
]

export default function JourneySection() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section id="journey" className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 py-24 text-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_70%)] md:block" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 md:flex-row">
        <div className="md:w-1/2">
          <SectionHeader
            align="left"
            eyebrow="Partner journey"
            title="From first conversation to flagship installation"
            description="Specialists guide every phase—strategy, integration, and scaling—so your team can deliver beautifully orchestrated GE Smarthome experiences."
            variant="dark"
            className="max-w-xl"
          />
        </div>
        <div className="flex-1 space-y-4">
          {journey.map((stage, index) => (
            <motion.button
              key={stage.title}
              type="button"
              onMouseEnter={() => setActiveStage(index)}
              onFocus={() => setActiveStage(index)}
              onClick={() => setActiveStage(index)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
              className={`flex w-full flex-col gap-4 rounded-3xl border px-6 py-6 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-950 ${
                activeStage === index
                  ? 'border-white/40 bg-white/10 shadow-[0_18px_45px_rgba(8,11,24,0.45)]'
                  : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-5">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-base font-semibold ${
                  activeStage === index ? 'bg-white text-blue-950' : 'bg-white/15 text-white'
                }`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                    {stage.title}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{stage.headline}</h3>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100">
                {stage.metric}
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
