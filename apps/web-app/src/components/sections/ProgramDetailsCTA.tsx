'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

export function ProgramDetailsCTA() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-12 py-12 text-center shadow-2xl max-w-2xl"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-blue-200" />
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to dive deeper?
          </h2>

          <p className="mb-8 text-lg text-blue-100 leading-relaxed">
            Explore detailed enablement programs, partnership tiers, industry verticals,
            and comprehensive benefits that make GE Smarthome the premier dealer program.
          </p>

          <Link
            href="/program-details"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-950 shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 hover:shadow-xl"
          >
            View Program Details
            <ArrowRight className="h-5 w-5" />
          </Link>

          {/* Card background effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 via-transparent to-blue-800/10" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        </motion.div>
      </div>
    </section>
  )
}
