'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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

  return (
    <section
      ref={heroRef}
      className="relative bg-gradient-to-br from-slate-50 to-white py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Smart Home Solutions
            <span className="block text-blue-600">That Scale</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-600"
          >
            Partner with GE Smart Home to deliver cutting-edge automation and smart home technology that transforms how people live, work, and connect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Partnership
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/smart-home-experience"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 sm:text-4xl">140+</div>
                <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Years of Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 sm:text-4xl">2K+</div>
                <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Products Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 sm:text-4xl">24/7</div>
                <div className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
