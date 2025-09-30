'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Large format background image */}
      <div className="absolute inset-0">
        <Image
          src="/ge-team-photo.png"
          alt="GE Smart Home professional team"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Curved container overlay in top-left */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="absolute top-0 left-0 z-10"
      >
        <div className="relative">
          {/* Curved shape using SVG path */}
          <svg
            className="h-[500px] w-[600px] text-blue-950"
            viewBox="0 0 600 500"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L600,0 Q600,200 500,300 L300,400 Q200,450 100,400 L0,300 Z"
              fill="currentColor"
            />
          </svg>
          
          {/* Content inside curved container */}
          <div className="absolute top-8 left-8 right-8">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-visible">
                  <Image
                    src="/GE-Logo.png"
                    alt="GE Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain transform scale-[1.65] origin-left"
                    priority
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white leading-tight">GE Smart Home</span>
                  <span className="text-xs text-blue-200 leading-tight">Powered by Savant AI</span>
                </div>
              </div>

              {/* Main heading */}
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md"
              >
                We Make Smart Homes, For Life
              </motion.h1>

              {/* Description */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="flex h-6 w-6 items-center justify-center text-white mt-1">
                  <ArrowRight className="h-4 w-4 rotate-45" />
                </div>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-sm">
                  We&apos;re a leading provider of smart home solutions and automation systems. Partner with us to deliver cutting-edge technology that transforms how people live.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Start Partnership
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
