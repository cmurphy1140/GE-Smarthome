'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Key, Store, Award, TrendingUp } from 'lucide-react'
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

const storeFeatures = [
  {
    icon: Store,
    title: 'Dealer Portal Access',
    description: 'Complete product catalog with dealer pricing and instant ordering'
  },
  {
    icon: Award,
    title: 'Demo Equipment',
    description: 'Showroom kits and demo units to showcase flagship installations'
  },
  {
    icon: TrendingUp,
    title: 'Growth Resources',
    description: 'Marketing materials, co-branded assets, and MDF funding'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Big Savant Blue Door */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Door frame */}
              <svg 
                width="400" 
                height="600" 
                viewBox="0 0 400 600" 
                className="drop-shadow-2xl"
              >
                {/* Door background */}
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="500"
                  rx="8"
                  fill="#0ea5e9"
                  className="transition-all duration-300 hover:opacity-90"
                />
                
                {/* Door panels - top */}
                <rect
                  x="80"
                  y="80"
                  width="240"
                  height="200"
                  rx="4"
                  fill="#0284c7"
                  opacity="0.3"
                />
                
                {/* Door panels - bottom */}
                <rect
                  x="80"
                  y="300"
                  width="240"
                  height="200"
                  rx="4"
                  fill="#0284c7"
                  opacity="0.3"
                />
                
                {/* Door handle */}
                <circle
                  cx="320"
                  cy="350"
                  r="12"
                  fill="#fbbf24"
                  className="drop-shadow-md"
                />
                <circle
                  cx="320"
                  cy="350"
                  r="8"
                  fill="#f59e0b"
                />
                
                {/* Keyhole */}
                <circle
                  cx="320"
                  cy="370"
                  r="4"
                  fill="#1e293b"
                />
                
                {/* Door frame outline */}
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="500"
                  rx="8"
                  fill="none"
                  stroke="#075985"
                  strokeWidth="3"
                />
              </svg>
              
              {/* Key icon floating beside door */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-16 top-1/2 -translate-y-1/2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                  <Key className="h-8 w-8 text-yellow-900" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Partner Store info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Partner Store
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl">
                Unlock your dealer portal
              </h3>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Access exclusive dealer pricing, training resources, and business growth tools designed to accelerate your smart home practice.
            </motion.p>

            {/* Features */}
            <motion.div variants={staggerContainer} className="space-y-6">
              {storeFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="pt-4">
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
      </div>
    </section>
  )
})

