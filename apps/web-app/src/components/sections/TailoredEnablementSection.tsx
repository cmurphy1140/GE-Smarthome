'use client'

import { motion } from 'framer-motion'
import { Rocket, Play } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp } from '../common/OptimizedMotion'

// Professional SVG Illustration
const DealerEnablementIllustration = () => (
  <svg width="480" height="360" viewBox="0 0 480 360" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="480" height="360" rx="24" fill="url(#bgGradient)" />

    {/* Conference Table */}
    <motion.ellipse
      cx="240" cy="280" rx="160" ry="40"
      fill="rgba(255,255,255,0.1)"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    />

    {/* People silhouettes around table */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      {/* Person 1 - Left */}
      <rect x="120" y="200" width="24" height="60" rx="12" fill="rgba(255,255,255,0.8)" />
      <circle cx="132" cy="185" r="12" fill="rgba(255,255,255,0.8)" />

      {/* Person 2 - Center */}
      <rect x="228" y="180" width="24" height="80" rx="12" fill="rgba(255,255,255,0.9)" />
      <circle cx="240" cy="165" r="12" fill="rgba(255,255,255,0.9)" />

      {/* Person 3 - Right */}
      <rect x="336" y="200" width="24" height="60" rx="12" fill="rgba(255,255,255,0.8)" />
      <circle cx="348" cy="185" r="12" fill="rgba(255,255,255,0.8)" />
    </motion.g>

    {/* Presentation Screen */}
    <motion.rect
      x="180" y="60" width="120" height="80" rx="8"
      fill="rgba(255,255,255,0.95)"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    />

    {/* Screen Content - Chart */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <rect x="190" y="75" width="8" height="20" fill="url(#accentGradient)" />
      <rect x="202" y="85" width="8" height="10" fill="url(#accentGradient)" />
      <rect x="214" y="70" width="8" height="25" fill="url(#accentGradient)" />
      <rect x="226" y="80" width="8" height="15" fill="url(#accentGradient)" />
      <rect x="238" y="65" width="8" height="30" fill="url(#accentGradient)" />
      <rect x="250" y="75" width="8" height="20" fill="url(#accentGradient)" />
      <rect x="262" y="60" width="8" height="35" fill="url(#accentGradient)" />
      <rect x="274" y="70" width="8" height="25" fill="url(#accentGradient)" />
    </motion.g>

    {/* GE Logo placeholder */}
    <motion.circle
      cx="240" cy="115" r="8"
      fill="#3b82f6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
    />
    <motion.text
      x="240" y="119" textAnchor="middle"
      fill="white" fontSize="8" fontWeight="bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.3 }}
    >
      GE
    </motion.text>

    {/* Floating Icons - Training Elements */}
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, staggerChildren: 0.1 }}
    >
      {/* Certificate icon */}
      <motion.rect x="80" y="120" width="20" height="16" rx="2" fill="rgba(255,255,255,0.9)" />
      <motion.rect x="85" y="125" width="10" height="2" rx="1" fill="#3b82f6" />
      <motion.rect x="85" y="128" width="8" height="2" rx="1" fill="#3b82f6" />

      {/* Tools icon */}
      <motion.rect x="380" y="140" width="16" height="3" rx="1" fill="rgba(255,255,255,0.9)" />
      <motion.rect x="385" y="135" width="6" height="12" rx="3" fill="rgba(255,255,255,0.9)" />

      {/* Lightbulb icon */}
      <motion.circle cx="100" cy="80" r="8" fill="rgba(255,255,255,0.9)" />
      <motion.rect x="96" y="85" width="8" height="4" rx="2" fill="rgba(255,255,255,0.9)" />
    </motion.g>

    {/* Success indicators */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.0, duration: 0.6 }}
    >
      {/* Growth arrow */}
      <path d="M400 200 L420 180 L415 185 L430 170" stroke="rgba(255,255,255,0.8)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <polygon points="425,175 435,165 435,175 430,175" fill="rgba(255,255,255,0.8)" />

      {/* +280 dealers text */}
      <text x="350" y="220" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="bold">+280</text>
      <text x="350" y="235" fill="rgba(255,255,255,0.7)" fontSize="10">dealers</text>
    </motion.g>

    {/* Ambient particles */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1.0 }}
    >
      <circle cx="60" cy="60" r="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="420" cy="80" r="1.5" fill="rgba(255,255,255,0.5)" />
      <circle cx="400" cy="300" r="2.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="80" cy="320" r="1" fill="rgba(255,255,255,0.6)" />
    </motion.g>
  </svg>
)

export function TailoredEnablementSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-8 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_80px_rgba(8,11,24,0.45)] backdrop-blur md:grid-cols-[1fr_1.2fr]"
        >
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Tailored enablement
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Ready to transform your smart home business?
              </h3>
              <p className="mt-3 text-xl font-bold leading-relaxed text-blue-100">
                Join over 280+ successful dealers who have accelerated their growth with GE Smarthome. Get personalized support, premium products, and proven systems.
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
              <Link
                href="/learning-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Watch demo
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 to-blue-900">
            <DealerEnablementIllustration />
            <div className="absolute bottom-6 left-6 rounded-full bg-blue-950/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
              Concierge onboarding
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

