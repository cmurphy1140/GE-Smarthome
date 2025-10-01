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
    title: 'Design',
    description: 'We work hard to create eye-catching and intuitive interface designs that provide users with an enjoyable experience.',
    subsections: [
      {
        title: 'Websites and Platforms',
        content: 'We are ready to work on projects of any complexity and size. With our profound design experience, we can create both one-page sites and complex admin panels with several dashboards.'
      },
      {
        title: 'Mobile Apps',
        content: 'We create interfaces that are not only good-looking, but also simple and easy to use. We also follow platform guidelines to make sure the design runs on every screen.'
      }
    ]
  },
  {
    number: '02',
    title: 'Development',
    description: 'When working on a project, we not only establish scalable architecture design using the best industry practices but also provide a high level of data security.',
    subsections: [
      {
        title: 'Web Services',
        content: 'With our technical solutions, you can get digital products created specifically for your business aim. We develop landing pages, apps for automating business processes, and high-load platforms.'
      },
      {
        title: 'Native Mobile Development',
        content: 'We create custom mobile apps for iOS and Android using Swift and Kotlin. The developed apps can be quickly released to stores because we follow Apple and Google guidelines.'
      }
    ]
  },
  {
    number: '03',
    title: 'Maintenance',
    description: 'Constant updating, modifying, and re-assessing of software is one way to make them user-oriented and up-to-date. Through such a service, we give businesses the technological support they need.',
    subsections: [
      {
        title: 'Post-release support',
        content: 'We help to keep projects up-to-date – from technology updates to new functionality implementation.'
      },
      {
        title: 'System Administration',
        content: 'Keeping your project up and running 24/7/365 is important. We make this process easy and stress-free for you.'
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

