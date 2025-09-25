'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../common/SectionHeader'

// SVG Icons for different trades
const ElectricianIcon = () => (
  <svg width="56" height="56" viewBox="0 0 40 40" fill="none" className="text-blue-600">
    <path d="M20 4L16 16H24L20 36L24 24H16L20 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
  </svg>
)

const HVACIcon = () => (
  <svg width="56" height="56" viewBox="0 0 40 40" fill="none" className="text-blue-600">
    <rect x="6" y="12" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M12 18h16M12 22h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 8v4M20 28v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="8" cy="20" r="2.5" fill="currentColor"/>
    <circle cx="32" cy="20" r="2.5" fill="currentColor"/>
  </svg>
)

const PlumberIcon = () => (
  <svg width="56" height="56" viewBox="0 0 40 40" fill="none" className="text-blue-600">
    <path d="M12 8v24M28 8v24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="10" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <rect x="26" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M8 20h24" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
  </svg>
)

const SecurityIcon = () => (
  <svg width="56" height="56" viewBox="0 0 40 40" fill="none" className="text-blue-600">
    <path d="M20 4l-8 4v12c0 8 8 16 8 16s8-8 8-16V8l-8-4z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    <path d="M16 18l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DealerIcon = () => (
  <svg width="72" height="72" viewBox="0 0 50 50" fill="none" className="text-white">
    {/* Building structure */}
    <rect x="8" y="20" width="34" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
    {/* Roof */}
    <path d="M6 20L25 8L44 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    {/* Door */}
    <rect x="20" y="32" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    {/* Windows */}
    <rect x="12" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
    <rect x="32" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2"/>
  </svg>
)

const journey = [
  {
    id: 'connect',
    title: 'Connect',
    subtitle: 'Build your trade network',
    description: 'Partner with certified professionals across key trades',
    trades: [
      { icon: ElectricianIcon, name: 'Electricians', count: '500+' },
      { icon: HVACIcon, name: 'HVAC', count: '300+' },
      { icon: PlumberIcon, name: 'Plumbers', count: '200+' },
      { icon: SecurityIcon, name: 'Security', count: '150+' }
    ]
  },
  {
    id: 'enable',
    title: 'Enable',
    subtitle: 'Equip your partners',
    description: 'Provide training, tools, and certification for seamless installations',
    metric: '90% faster onboarding'
  },
  {
    id: 'scale',
    title: 'Scale',
    subtitle: 'Grow together',
    description: 'Expand your reach with data-driven insights and joint marketing',
    metric: '3x revenue growth'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 1.02, 0.73, 1] as const
    }
  }
}

const tradeIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1] as const
    }
  })
}

export default function JourneySection() {
  return (
    <section id="journey" className="relative bg-slate-50 py-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Partner Journey"
          title="Connect. Enable. Scale."
          description="Build a network of certified trade partners and grow together through seamless collaboration"
          align="center"
          className="mb-28"
        />

        {/* Journey Steps */}
        <motion.div
          className="grid gap-24 md:gap-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {journey.map((step, stepIndex) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative"
            >
              {/* Step Header */}
              <div className="mb-20 text-center">
                <motion.div
                  className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-4xl font-bold text-white shadow-xl border-4 border-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stepIndex + 1}
                </motion.div>
                <h3 className="mb-6 text-6xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
                <p className="text-2xl text-slate-700 mb-4 font-medium">{step.subtitle}</p>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{step.description}</p>
              </div>

              {/* Visual Content */}
              {step.id === 'connect' && step.trades && (
                <div className="relative">
                  {/* Dealer at center */}
                  <div className="flex justify-center mb-16">
                    <motion.div
                      className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 shadow-2xl border-4 border-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <DealerIcon />
                      <div className="absolute -bottom-16 text-center">
                        <div className="bg-white px-6 py-3 rounded-xl shadow-xl border border-slate-200">
                          <span className="text-xl font-bold text-slate-900">GE Dealer</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection lines and trade icons */}
                  <div className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24 max-w-5xl mx-auto">
                      {step.trades.map((trade, tradeIndex) => {
                        const IconComponent = trade.icon
                        const positions = [
                          { x: -140, y: -140 }, // Top-left
                          { x: 140, y: -140 },  // Top-right
                          { x: -140, y: 140 },  // Bottom-left
                          { x: 140, y: 140 }    // Bottom-right
                        ]
                        const position = positions[tradeIndex] || { x: 0, y: 0 }

                        return (
                          <motion.div
                            key={trade.name}
                            className="flex flex-col items-center text-center relative z-10"
                            custom={tradeIndex}
                            variants={tradeIconVariants}
                            whileHover={{
                              scale: 1.1,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className="flex items-center justify-center w-28 h-28 rounded-2xl bg-white shadow-xl border-2 border-slate-100 mb-8 relative hover:shadow-2xl transition-all duration-300">
                              <IconComponent />

                              {/* Animated connection line */}
                              <motion.div
                                className="absolute w-40 h-px bg-gradient-to-r from-blue-500 to-blue-600"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{
                                  delay: 0.8 + tradeIndex * 0.15,
                                  duration: 0.8,
                                  ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{
                                  transformOrigin: '0 50%',
                                  transform: `rotate(${Math.atan2(position.y, position.x) * (180 / Math.PI) + 180}deg)`,
                                  left: position.x > 0 ? '-160px' : '96px',
                                  top: '50%'
                                }}
                              />

                              {/* Connection dot */}
                              <motion.div
                                className="absolute w-4 h-4 bg-blue-600 rounded-full shadow-lg"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 1.4 + tradeIndex * 0.1,
                                  duration: 0.3
                                }}
                                style={{
                                  left: position.x > 0 ? '-168px' : '104px',
                                  top: '50%',
                                  transform: 'translateY(-50%)'
                                }}
                              />
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-3">{trade.name}</h4>
                            <span className="text-xl text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full">{trade.count}</span>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Central connection hub */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-xl border-2 border-white" />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Metric display for Enable and Scale steps */}
              {step.metric && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-8 py-4 text-xl text-blue-600 font-semibold">
                    {step.metric}
                  </div>
                </motion.div>
              )}

              {/* Step connector line */}
              {stepIndex < journey.length - 1 && (
                <motion.div
                  className="absolute left-1/2 -bottom-8 h-16 w-px bg-gradient-to-b from-blue-300 to-transparent transform -translate-x-1/2"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + stepIndex * 0.2, duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
