'use client'

import { Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Icons for floating elements
const ElectricianIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="text-blue-600/40">
    <path d="M20 4L16 16H24L20 36L24 24H16L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
  </svg>
)

const HVACIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="text-blue-600/40">
    <rect x="6" y="12" width="28" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M12 18h16M12 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 8v4M20 28v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="20" r="2" fill="currentColor"/>
    <circle cx="32" cy="20" r="2" fill="currentColor"/>
  </svg>
)

const PlumberIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="text-blue-600/40">
    <path d="M12 8v24M28 8v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="10" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.3"/>
    <rect x="26" y="14" width="4" height="12" rx="2" fill="currentColor" fillOpacity="0.3"/>
    <path d="M8 20h24" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
  </svg>
)

const SecurityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" className="text-blue-600/40">
    <path d="M20 4l-8 4v12c0 8 8 16 8 16s8-8 8-16V8l-8-4z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M16 18l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)


export function TailoredEnablementSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

        {/* Savant Logo (using text for now) */}
        <motion.div
          className="absolute top-10 right-16 opacity-25"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="text-5xl font-bold text-blue-600">SAVANT</div>
        </motion.div>

        {/* Floating Trade Icons */}
        <motion.div
          className="absolute top-40 left-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <ElectricianIcon />
        </motion.div>

        <motion.div
          className="absolute top-60 right-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <HVACIcon />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-16"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <PlumberIcon />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-12"
          animate={{
            y: [0, 18, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          <SecurityIcon />
        </motion.div>


      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-8 shadow-[0_30px_80px_rgba(8,11,24,0.45)] md:grid-cols-[1fr_1.2fr] text-white">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Tailored enablement
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Ready to transform your Smart Home business?
              </h3>
              <p className="mt-3 text-xl leading-relaxed text-blue-100">
                Join over 280+ successful dealers who have accelerated their growth with GE Smart Home. Get personalized support, premium products, and proven systems.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-blue-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Become a dealer
                <Rocket className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/ge-team-photo.png"
              alt="GE Smarthome team providing concierge onboarding and support"
              width={600}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 rounded-full bg-blue-950/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
              Concierge onboarding
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

