'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../common/SectionHeader'

const journey = [
  {
    id: 'connect',
    title: 'Connect',
    description: 'Partner with certified professionals across key trades',
    metric: '1,000+ certified partners'
  },
  {
    id: 'enable',
    title: 'Enable',
    description: 'Provide training, tools, and certification for seamless installations',
    metric: '90% faster onboarding'
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Expand your reach with data-driven insights and joint marketing',
    metric: '3x revenue growth'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.21, 1.02, 0.73, 1] as const
    }
  }
}

export default function JourneySection() {
  return (
    <section id="journey" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partner Journey"
          title="Connect. Enable. Scale."
          description="Build a network of certified trade partners and grow together through seamless collaboration"
          align="center"
          className="mb-16"
        />

        {/* Journey Steps */}
        <motion.div
          className="grid gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {journey.map((step, stepIndex) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative"
            >
              {/* Step Content */}
              <div className="text-center">
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {stepIndex + 1}
                </motion.div>
                <h3 className="mb-3 text-3xl font-bold text-slate-900">{step.title}</h3>
                <p className="mb-4 text-lg text-slate-600 max-w-xl mx-auto">{step.description}</p>
                
                {/* Metric */}
                <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-3 text-lg text-blue-600 font-semibold">
                  {step.metric}
                </div>
              </div>

              {/* Step connector line */}
              {stepIndex < journey.length - 1 && (
                <motion.div
                  className="absolute left-1/2 -bottom-6 h-12 w-px bg-gradient-to-b from-blue-300 to-transparent transform -translate-x-1/2"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3 + stepIndex * 0.1, duration: 0.4 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
