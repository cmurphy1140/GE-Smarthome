'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../common/SectionHeader'

// SVG Icons for different trades
const ElectricianIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-blue-400">
    <path d="M20 4L16 16H24L20 36L24 24H16L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
  </svg>
)

const HVACIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-green-400">
    <rect x="6" y="12" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M12 18h16M12 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 8v4M20 28v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="20" r="2" fill="currentColor"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
  </svg>
)

const PlumberIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-orange-400">
    <path d="M12 8v24M28 8v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="10" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <rect x="26" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M8 20h24" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
  </svg>
)

const SecurityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-purple-400">
    <path d="M20 4l-8 4v12c0 8 8 16 8 16s8-8 8-16V8l-8-4z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M16 18l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DealerIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-white">
    <rect x="10" y="15" width="30" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="25" cy="25" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M19 31h12M22 34h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
    <section id="journey" className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Partner Journey"
          title="Connect. Enable. Scale."
          description="Build a network of certified trade partners and grow together through seamless collaboration"
          align="center"
          className="mb-20"
        />

        {/* Journey Steps */}
        <motion.div
          className="grid gap-16 md:gap-24"
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
              <div className="mb-12 text-center">
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stepIndex + 1}
                </motion.div>
                <h3 className="mb-2 text-3xl font-bold text-slate-900">{step.title}</h3>
                <p className="text-lg text-slate-600 mb-1">{step.subtitle}</p>
                <p className="text-slate-500 max-w-md mx-auto">{step.description}</p>
              </div>

              {/* Visual Content */}
              {step.id === 'connect' && step.trades && (
                <div className="relative">
                  {/* Dealer at center */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      className="relative flex items-center justify-center rounded-2xl bg-blue-600 p-4 shadow-xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <DealerIcon />
                      <div className="absolute -bottom-8 text-center">
                        <span className="text-sm font-semibold text-slate-900">GE Dealer</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Connection lines and trade icons */}
                  <div className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 max-w-4xl mx-auto">
                      {step.trades.map((trade, tradeIndex) => {
                        const IconComponent = trade.icon
                        const positions = [
                          { x: -120, y: -120 }, // Top-left
                          { x: 120, y: -120 },  // Top-right
                          { x: -120, y: 120 },  // Bottom-left
                          { x: 120, y: 120 }    // Bottom-right
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
                            <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-white shadow-lg border border-slate-200 mb-4 relative">
                              <IconComponent />

                              {/* Animated connection line */}
                              <motion.div
                                className="absolute w-32 h-px bg-gradient-to-r from-blue-400 to-blue-600/20"
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
                                  left: position.x > 0 ? '-128px' : '80px',
                                  top: '50%'
                                }}
                              />

                              {/* Connection dot */}
                              <motion.div
                                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 1.4 + tradeIndex * 0.1,
                                  duration: 0.3
                                }}
                                style={{
                                  left: position.x > 0 ? '-132px' : '84px',
                                  top: '50%',
                                  transform: 'translateY(-50%)'
                                }}
                              />
                            </div>

                            <h4 className="font-semibold text-slate-900 mb-1">{trade.name}</h4>
                            <span className="text-sm text-blue-600 font-medium">{trade.count}</span>
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
                      <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg" />
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
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-3 text-blue-600 font-semibold">
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
