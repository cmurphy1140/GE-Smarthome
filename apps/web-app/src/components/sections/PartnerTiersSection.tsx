'use client'

import { motion } from 'framer-motion'
import { Home, Star, Check } from 'lucide-react'
import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.6, 0.3, 1] }
  }
} as const

function PartnerTiersSectionComponent() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(30,58,138,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(30,58,138,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Partnership benefits designed for builders, integrators, and security pros"
          variant="dark"
          titleSize="small"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50 p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-blue-300/40 hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.3)]"
          >
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/50">
                <Home className="h-8 w-8" />
              </div>
              <h4 className="mt-8 text-3xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">Authorized Partner</h4>
              <p className="mt-4 text-lg text-blue-200/80 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">Entry-level track for businesses launching their smart home practice.</p>

              <ul className="mt-8 space-y-4 text-lg text-blue-200/80">
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Core GE Proseo catalog access with 15% discount.</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Self-paced training and quarterly webinars.</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Email/chat support and portal resources.</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 inline-flex w-fit rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-400/30 px-6 py-3 text-base font-bold text-blue-100 backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:border-blue-300/50 group-hover:text-white">
              $3,500 minimum annual commitment
            </div>
          </motion.article>

          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-blue-300/30 bg-gradient-to-br from-blue-900/50 via-slate-800/30 to-blue-900/50 p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-blue-200/50 hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.4)] overflow-hidden"
          >
            {/* Premium badge */}
            <div className="absolute top-6 right-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
              PREMIER
            </div>

            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-yellow-500/50">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="mt-8 text-3xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">Premier Partner</h4>
              <p className="mt-4 text-lg text-blue-200/80 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">Enhanced benefits for established teams ready to scale into Savant automation.</p>

              <ul className="mt-8 space-y-4 text-lg text-blue-200/80">
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Full GE Proseo + Savant portfolio with 25% discount.</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Regional trainers and demo-unit programs.</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <Check className="mt-1.5 h-5 w-5 text-emerald-400 group-hover/item:scale-125 transition-transform duration-300" />
                  <span className="group-hover:text-blue-100 transition-colors duration-300">Dedicated rep, priority support, and marketing fund (2%).</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 inline-flex w-fit rounded-full bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 px-6 py-3 text-base font-bold text-yellow-100 backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-500/30 group-hover:to-orange-500/30 group-hover:border-yellow-300/50 group-hover:text-white">
              $10,000 minimum annual commitment
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export const PartnerTiersSection = memo(PartnerTiersSectionComponent)
