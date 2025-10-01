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
    description: 'We pioneer cutting-edge smart home solutions that transform how people live, combining GE\'s 140+ years of innovation with Savant\'s advanced automation technology.',
    subsections: [
      {
        title: 'Smart Home Technology',
        content: 'From GE Proseo smart lighting to Savant whole-home automation, we deliver products that set industry standards. Our portfolio spans lighting, climate control, security, and entertainment systems designed for modern living.'
      },
      {
        title: 'Product Development',
        content: 'We continuously advance our technology stack with firmware updates, new integrations, and expanded product lines. Every innovation is tested to ensure reliability, security, and seamless user experiences across all devices.'
      }
    ]
  },
  {
    number: '02',
    title: 'Integrate',
    description: 'When partnering with dealers, we provide complete integration support including training, technical resources, and dedicated channel strategists to ensure successful installations.',
    subsections: [
      {
        title: 'Dealer Enablement',
        content: 'From day one, partners receive comprehensive training on product installation, system design, and sales strategies. Our regional trainers conduct live sessions, provide demo equipment, and offer ongoing certification programs tailored to your business.'
      },
      {
        title: 'System Integration',
        content: 'Our smart home systems integrate seamlessly with third-party devices, networking equipment, and existing infrastructure. We provide professional-grade APIs, documentation, and technical support to ensure every installation exceeds expectations.'
      }
    ]
  },
  {
    number: '03',
    title: 'Support',
    description: 'Constant updating, dedicated assistance, and proactive monitoring ensure our dealers and their customers receive world-class support at every stage of the partnership.',
    subsections: [
      {
        title: '24/7 Technical Support',
        content: 'Our dedicated support team provides round-the-clock assistance for installation questions, troubleshooting, and system optimization. Dealers receive priority response times and direct access to engineering expertise when needed.'
      },
      {
        title: 'Business Growth Support',
        content: 'Beyond technical help, we provide marketing resources, co-branded materials, MDF funds, and strategic guidance to help dealers grow their smart home practice. Quarterly business reviews ensure you\'re maximizing your partnership potential.'
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
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="text-gray-400 text-sm font-semibold">
                  {section.number}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
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

