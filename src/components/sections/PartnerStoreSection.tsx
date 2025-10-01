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

const partnerStoreCards = [
  {
    icon: Users,
    title: 'Dedicated strategist',
    badge: 'Personal',
    description: 'Get personalized 1:1 guidance from onboarding through expansion with regional expertise. Your dedicated strategist will help you navigate the GE Smart Home ecosystem, identify growth opportunities, and develop custom solutions tailored to your market and customer base.'
  },
  {
    icon: Clock,
    title: '24/7 support',
    badge: 'Always On',
    description: 'Enjoy priority access to technical specialists and rapid-response troubleshooting around the clock. Our expert support team is always available to help resolve issues quickly, ensuring your installations run smoothly and your customers stay satisfied.'
  },
  {
    icon: Award,
    title: 'Premium portfolio',
    badge: 'Exclusive',
    description: 'Access GE Lighting innovation backed by Savant automation to differentiate every install. Our premium product portfolio includes cutting-edge smart lighting solutions, advanced automation systems, and exclusive technologies that set your business apart from competitors.'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden">
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
              Partner Store
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl">
              Unlock your dealer portal
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 leading-relaxed">
              Access exclusive dealer pricing, training resources, and business growth tools designed to accelerate your smart home practice.
            </p>
          </motion.div>

          {/* Partner cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {partnerStoreCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>

                  {/* Title and badge */}
                  <div className="mb-4 flex items-center gap-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      {card.title}
                    </h4>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {card.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
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

