'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { memo } from 'react'

import { AnimatedNumber } from '../ui/AnimatedNumber'

const stats = [
  { value: 280, suffix: '+', label: 'Active partners' },
  { value: 2.5, prefix: '$', suffix: 'M+', label: 'Incentives paid', decimals: 1 },
  { value: 48, suffix: ' hr', label: 'Average onboarding' }
] as const

function StatsSectionComponent() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            <span className="text-md font-semibold uppercase tracking-[0.35em] text-blue-300">
              Professional partnership
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Join the GE Smarthome network
            </h2>
            <p className="text-sm leading-relaxed text-blue-100 md:text-base lg:text-lg">
              Connect with a community of smart home professionals backed by GE Lighting&apos;s 140+ years of innovation and Savant&apos;s cutting-edge automation technology.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map(item => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center shadow-[0_14px_30px_rgba(8,11,24,0.35)] backdrop-blur"
                >
                  <AnimatedNumber
                    value={item.value}
                    prefix={'prefix' in item ? item.prefix : undefined}
                    suffix={item.suffix}
                    decimals={'decimals' in item ? item.decimals : 0}
                    className="text-3xl font-semibold text-white md:text-4xl"
                  />
                  <p className="mt-2 text-md uppercase tracking-[0.25em] text-blue-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-[0_30px_70px_rgba(8,11,24,0.45)]">
              <Image
                src="/ge-smart-team.png"
                alt="GE Smarthome professional team standing in smart home environment with circuit board house design showing GE and Savant technology integration"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
              <span className="absolute right-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-md font-semibold uppercase tracking-[0.3em] text-blue-900">
                GE × Savant
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const StatsSection = memo(StatsSectionComponent)
