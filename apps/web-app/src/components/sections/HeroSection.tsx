'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React, { useRef, memo } from 'react'

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
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  const heroBackgroundStyles = {
    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.82), rgba(8, 11, 24, 0.7)), url("/hero-bg.png")',
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
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/90"
          >
            Powered by Savant AI
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Leverage cutting-edge technology to build signature GE smart homes
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base text-blue-100 leading-relaxed md:text-lg"
          >
            Unlock GE Lighting innovation and Savant automation in a single, elevated platform—complete with strategist guidance, premium hardware, and always-on expertise.
          </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href="/signup"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-semibold text-blue-950 shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
          >
            <span>Start Partnership</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="text-3xl font-semibold text-white">280+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-100">Active partners</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="text-3xl font-semibold text-white">48 hr</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-100">Average onboarding</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <div className="text-3xl font-semibold text-white">24/7</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-100">Dedicated support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-900/25 to-blue-950/20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-950/25 to-blue-900/20 blur-3xl"
        />
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
