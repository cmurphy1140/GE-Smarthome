'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { memo } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const trustSignals = [
  { value: '140+', label: 'Years of innovation' },
  { value: '500+', label: 'Active dealers' },
  { value: '35-45%', label: 'Average margins' }
]

function HeroSectionComponent() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-36">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-savant-gray"
        >
          GE Smart Home Dealer Program
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          className="mt-8 text-4xl font-bold tracking-tight text-savant-gray sm:text-5xl lg:text-6xl"
        >
          Build profitable Smart Home practices backed by GE and Savant
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.16 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600"
        >
          Join a nationwide network of contractors, builders, and integrators earning 35-45% margins with dedicated channel strategists, training, and go-to-market support.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-ge-blue px-8 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-ge-blue/90"
          >
            Apply Now
          </Link>
          <Link
            href="/partner-journey#roi-calculator"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-base font-semibold text-savant-gray transition-transform duration-200 hover:-translate-y-1 hover:bg-neutral-100"
          >
            Calculate Earnings
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.32 }}
          className="mt-16 grid w-full gap-6 rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm sm:grid-cols-3"
        >
          {trustSignals.map(signal => (
            <div key={signal.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-3xl font-semibold text-savant-gray sm:text-4xl">{signal.value}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {signal.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
