'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import React, { memo } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

function HeroSectionComponent() {
  return (
    <section className="relative bg-white py-32 md:py-48 lg:py-56 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* House roof icon above heading */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <svg 
              width="200" 
              height="100" 
              viewBox="0 0 200 100" 
              className="text-blue-600"
              aria-label="Smart Home"
            >
              {/* Roof */}
              <path
                d="M 10 90 L 100 20 L 190 90 Z"
                fill="currentColor"
                className="opacity-90"
              />
              {/* Chimney */}
              <rect
                x="140"
                y="40"
                width="15"
                height="30"
                fill="currentColor"
                className="opacity-80"
              />
              {/* Door */}
              <rect
                x="85"
                y="70"
                width="30"
                height="30"
                fill="white"
                className="opacity-90"
              />
              {/* Window left */}
              <rect
                x="50"
                y="75"
                width="20"
                height="20"
                fill="white"
                className="opacity-90"
              />
              {/* Window right */}
              <rect
                x="130"
                y="75"
                width="20"
                height="20"
                fill="white"
                className="opacity-90"
              />
            </svg>
          </motion.div>

          {/* Main heading - Ronas IT style */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl leading-tight"
          >
            Innovate. Integrate. Support.
          </motion.h1>

          {/* Circular video player */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative">
              {/* Circular text animation */}
              <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                <svg className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }} viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="text-xs fill-gray-600 tracking-widest uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      Watch our showreel • Watch our showreel • 
                    </textPath>
                  </text>
                </svg>
                
                {/* Play button */}
                <Link 
                  href="/smart-home-experience"
                  className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-blue-500"></div>
      <div className="absolute bottom-40 right-20 h-2 w-2 rounded-full bg-blue-500"></div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
