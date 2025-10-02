'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React, { useRef, memo } from 'react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

const heroStats = [
  { value: 'Brand marketing to Millions of homes', suffix: '', label: 'Media Reach' },
  { value: 48, suffix: ' hr', label: 'Average onboarding' },
  { value: 24, suffix: '/7', label: 'Dedicated support' }
] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

function HeroSectionComponent() {
  const heroRef = useRef(null)

  const heroBackgroundStyles = {
    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.82), rgba(8, 11, 24, 0.7)), url("/home_hero.png")',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1e293b'
  }

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden py-32 md:py-48 lg:py-56 text-white"
      style={heroBackgroundStyles}
    >
      <motion.div
        initial="visible"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-button rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/90"
          >
            Powered by Savant AI
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Leverage cutting-edge technology to build your signature GE Smart Homes
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-blue-100 leading-relaxed md:text-lg"
          >
            Unlock the power of the GE Smart Home with quality products powered by savant AI—complete with strategist guidance and always-on expertise.
          </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href="/signup"
            className="group inline-flex items-center justify-center gap-3 rounded-full px-16 py-4 text-lg font-semibold text-blue-950 bg-white shadow-lg hover:bg-blue-50 hover:shadow-xl hover:shadow-glow transition-all duration-300 border border-blue-200 hover:border-blue-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span>Start Partnership</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-3"
        >
          {heroStats.map(stat => (
            <div
              key={stat.label}
              className="glass-card p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {typeof stat.value === 'string' ? (
                <div className="text-lg font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
                  {stat.value}
                </div>
              ) : (
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300"
                />
              )}
              <div className="mt-1 text-md uppercase tracking-[0.3em] text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Static background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-900/25 to-blue-950/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-950/25 to-blue-900/20 blur-3xl" />
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
