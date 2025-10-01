'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Clock, Award } from 'lucide-react'
import React, { memo } from 'react'

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

const partnerBenefits = [
  {
    icon: Users,
    title: 'Dedicated strategist',
    badge: 'Personal',
    description: 'Get personalized 1:1 guidance from onboarding through expansion with regional expertise.'
  },
  {
    icon: Clock,
    title: '24/7 support',
    badge: 'Always On',
    description: 'Priority access to technical specialists and rapid-response troubleshooting around the clock.'
  },
  {
    icon: Award,
    title: 'Premium portfolio',
    badge: 'Exclusive',
    description: 'Access GE Lighting innovation backed by Savant automation to differentiate every install.'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  return (
    <section className="relative bg-gray-50 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Partner Benefits
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl">
              Everything you need to succeed
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 leading-relaxed">
              Support, portfolio, and exclusive access—unified in one partnership.
            </p>
          </motion.div>

          {/* Benefits list - no card containers */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                  </div>

                  {/* Title and badge */}
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <h4 className="text-2xl font-bold text-gray-900">
                      {benefit.title}
                    </h4>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Become a Dealer
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

