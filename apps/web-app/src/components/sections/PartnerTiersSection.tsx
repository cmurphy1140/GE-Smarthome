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
    <section className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          title="Partnership benefits designed for builders, integrators, and security pros"
          description="Choose the track that matches your focus today and grow into the full GE Lighting × Savant ecosystem with dedicated support."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-between rounded-3xl border border-blue-950/20 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 text-white">
                <Home className="h-6 w-6" />
              </div>
              <h4 className="mt-6 text-xl font-semibold text-slate-900">Authorized Partner</h4>
              <p className="mt-3 text-base text-slate-600">Entry-level track for businesses launching their smart home practice.</p>

              <ul className="mt-6 space-y-3 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Core GE Proseo catalog access with 15% discount.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Self-paced training and quarterly webinars.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Email/chat support and portal resources.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 inline-flex w-fit rounded-full bg-blue-950/10 px-4 py-2 text-sm font-semibold text-blue-950">
              $3,500 minimum annual commitment
            </div>
          </motion.article>

          <motion.article
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col justify-between rounded-3xl border border-blue-950/20 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
          >
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950 text-white">
                <Star className="h-6 w-6" />
              </div>
              <h4 className="mt-6 text-xl font-semibold text-slate-900">Premier Partner</h4>
              <p className="mt-3 text-base text-slate-600">Enhanced benefits for established teams ready to scale into Savant automation.</p>

              <ul className="mt-6 space-y-3 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Full GE Proseo + Savant portfolio with 25% discount.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Regional trainers and demo-unit programs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 text-blue-950" />
                  <span>Dedicated rep, priority support, and marketing fund (2%).</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 inline-flex w-fit rounded-full bg-blue-950/15 px-4 py-2 text-sm font-semibold text-blue-950">
              $10,000 minimum annual commitment
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export const PartnerTiersSection = memo(PartnerTiersSectionComponent)
