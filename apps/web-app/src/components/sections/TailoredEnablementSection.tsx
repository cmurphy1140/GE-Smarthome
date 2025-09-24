'use client'

import { motion } from 'framer-motion'
import { Rocket, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.6, 0.3, 1] }
  }
} as const

function TailoredEnablementSectionComponent() {
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
              <p className="mt-3 text-base leading-relaxed text-blue-100">
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

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/ge-team-photo.png"
              alt="GE Smarthome dealer enablement session"
              width={880}
              height={640}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-blue-900/40" />
            <div className="absolute bottom-6 left-6 rounded-full bg-blue-950/80 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Concierge onboarding
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const TailoredEnablementSection = memo(TailoredEnablementSectionComponent)
