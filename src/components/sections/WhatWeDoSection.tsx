'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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

const sections = [
  {
    number: '01',
    title: 'Innovate',
    description: 'Pioneer cutting-edge smart home solutions combining GE\'s 140+ years of innovation with Savant\'s advanced automation.',
    subsections: [
      {
        title: 'Smart Home Technology',
        content: 'Industry-leading products spanning lighting, climate control, security, and entertainment systems.'
      },
      {
        title: 'Product Development',
        content: 'Continuous firmware updates, new integrations, and expanded product lines tested for reliability.'
      }
    ]
  },
  {
    number: '02',
    title: 'Integrate',
    description: 'Complete integration support with training, technical resources, and dedicated channel strategists.',
    subsections: [
      {
        title: 'Dealer Enablement',
        content: 'Comprehensive training, live sessions, demo equipment, and certification programs from day one.'
      },
      {
        title: 'System Integration',
        content: 'Seamless third-party integration with professional APIs, documentation, and technical support.'
      }
    ]
  },
  {
    number: '03',
    title: 'Support',
    description: 'World-class support with dedicated assistance and proactive monitoring at every partnership stage.',
    subsections: [
      {
        title: '24/7 Technical Support',
        content: 'Round-the-clock assistance with priority response times and direct engineering access.'
      },
      {
        title: 'Business Growth Support',
        content: 'Marketing resources, co-branded materials, MDF funds, and quarterly business reviews.'
      }
    ]
  }
]

export const WhatWeDoSection = memo(function WhatWeDoSection() {
  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            What We Do
          </h2>
        </motion.div>

        {/* Content sections */}
        <div className="space-y-32">
          {sections.map((section) => (
            <motion.div
              key={section.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {/* Left column - Section info */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="text-gray-300 text-8xl font-bold">
                  {section.number}
                </div>
                <h3 className="text-5xl font-bold text-gray-900 lg:text-6xl xl:text-7xl">
                  {section.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {section.description}
                </p>
                <Link
                  href="/smart-home-experience"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100"
                >
                  View More
                </Link>
              </motion.div>

              {/* Right column - Subsections */}
              <motion.div variants={fadeInUp} className="space-y-8">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {subsection.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

