'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import React, { memo, useRef } from 'react'

// Design.md Animation Principles
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Building sequence animation for house icon - removed due to TypeScript compatibility

function HeroSectionComponent() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms for depth
  const decorativeY1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const decorativeY2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const decorativeOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Design.md: "Transform your business" not "Sign up today"
  const headlineWords = ["Transform", "Your", "Business", "with", "GE", "Smart", "Home"]
  const subheadlineWords = ["Join", "1,247", "active", "dealer", "partners", "building", "the", "future"]

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Design.md: Generous whitespace, wide margins */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Design.md: Eyebrow text (small, uppercase, spaced) */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mb-8"
          >
            <span className="text-micro font-semibold text-gray-500 uppercase tracking-wider">
              Partnership Program
            </span>
          </motion.div>

          {/* Design.md: Super Display (72-96px) → Hero headlines only */}
          <motion.div
            variants={staggerContainer}
            className="mb-8"
          >
            <h1 className="text-super-display font-bold tracking-tight text-gray-900 leading-tight">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  variants={wordReveal}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Design.md: Subheadlines (12-20 words) - Expand on headline promise */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="text-body text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {subheadlineWords.map((word, index) => (
              <motion.span
                key={word}
                variants={wordReveal}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 1.0 + index * 0.05 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
            <span className="text-primary-600 font-semibold"> smart home solutions</span>
          </motion.p>

          {/* Design.md: Primary CTA (High Contrast) - Blue-600 background, White text, Large size */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/signup"
              className="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-floating transition-all duration-300 hover:bg-primary-700 hover:-translate-y-1 hover:shadow-modal"
            >
              Calculate Your ROI
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            {/* Design.md: Secondary CTA (Medium Contrast) - Outlined border */}
            <Link
              href="/smart-home-experience"
              className="group inline-flex items-center justify-center gap-3 rounded-lg border-2 border-primary-600 px-8 py-4 text-lg font-semibold text-primary-600 transition-all duration-300 hover:bg-primary-50 hover:border-primary-700"
            >
              <Play className="h-5 w-5" />
              Watch Experience
            </Link>
          </motion.div>

          {/* Design.md: Social Proof - Live counter: "1,247 active dealer partners" */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-small text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse"></div>
              <span>1,247 active dealer partners</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-600" />
              <span>24/7 technical support</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-500" />
              <span>Savant AI powered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Design.md: Depth Through Layers - Floating animated elements */}
      <motion.div
        className="absolute top-20 left-10 h-3 w-3 rounded-full bg-primary-500"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: decorativeY1, opacity: decorativeOpacity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 h-4 w-4 rounded-full bg-cyan-400"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ y: decorativeY2, opacity: decorativeOpacity }}
      />
      <motion.div
        className="absolute top-40 right-40 h-2 w-2 rounded-full bg-success-400"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ y: decorativeY1, opacity: decorativeOpacity }}
      />

      {/* Design.md: Glass Morphism decorative elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary-100/20 to-cyan-100/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ opacity: decorativeOpacity }}
      />
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
