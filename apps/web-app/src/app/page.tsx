'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, GraduationCap, Monitor, Star } from 'lucide-react'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleOnHover = {
  hover: {
    scale: 1.05,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export default function Home() {
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const tiersRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.2 })
  const tiersInView = useInView(tiersRef, { once: true, threshold: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">GE Smarthome Dealer Program</h1>
            <p className="text-sm text-gray-600">in partnership with Savant</p>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Why Partner With Us
            </a>
            <a href="#tiers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Program Tiers
            </a>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Dealer
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              The Future is{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Bright
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Partner with GE Lighting and Savant. An exclusive opportunity for smart home professionals
              to amplify their business with two industry-leading brands.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/signup"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <motion.span
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Apply to Join Now
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-indigo-200 rounded-full opacity-20"
        />
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} id="benefits" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              A Partnership Engineered for Your Growth
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Lightbulb,
                title: "Premium Product Portfolio + Demo Program",
                description: "Exclusive access to GE Cync and Savant ecosystems with free demo units, model home programs, and early access to new product launches."
              },
              {
                icon: Star,
                title: "Tiered Rewards & Regional Support",
                description: "Progressive benefits based on performance with dedicated regional account managers. Free shipping on orders over $3,000."
              },
              {
                icon: GraduationCap,
                title: "Comprehensive Training Academy",
                description: "Multi-tier certification program with regional trainers, monthly webinars, and specialized courses for Savant whole-home integration."
              },
              {
                icon: Monitor,
                title: "Complete Marketing Resource Library",
                description: "Professional dealer portal with product images, videos, digital ads, spec sheets, and co-branded marketing materials."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Tiers Section */}
      <section ref={tiersRef} id="tiers" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={tiersInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Choose Your Partnership Level
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Flexible program tiers designed to match your business growth and expertise level
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={tiersInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Authorized Dealer",
                badge: "Start Here",
                badgeColor: "bg-gray-500",
                features: [
                  "Access to core GE Cync product line",
                  "Online training and certification",
                  "Basic marketing materials",
                  "Standard dealer pricing",
                  "Email support"
                ],
                requirement: "Active smart home business",
                featured: false
              },
              {
                name: "Premier Partner",
                badge: "Most Popular",
                badgeColor: "bg-blue-600",
                features: [
                  "Full GE Cync + Savant product access",
                  "Regional trainer support",
                  "Demo unit program",
                  "Enhanced pricing tiers",
                  "Priority phone support",
                  "Marketing co-op funds"
                ],
                requirement: "$50K+ annual sales commitment",
                featured: true
              },
              {
                name: "Elite Integrator",
                badge: "Premium",
                badgeColor: "bg-indigo-600",
                features: [
                  "Early access to new products",
                  "Dedicated account manager",
                  "Custom training programs",
                  "Dealer Advisory Board access",
                  "White-glove support",
                  "Exclusive events & incentives"
                ],
                requirement: "$150K+ annual sales + certification",
                featured: false
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.featured ? 'border-2 border-blue-600 scale-105' : 'border border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <span className={`inline-block ${tier.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide`}>
                    {tier.badge}
                  </span>
                </div>

                <motion.ul
                  className="space-y-3 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={fadeInUp}
                      className="flex items-start"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Requirements:</strong> {tier.requirement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400">
              © GE Lighting, a Savant company. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
