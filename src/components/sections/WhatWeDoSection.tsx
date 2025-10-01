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
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Left column - Section info (appears first on mobile, conditionally ordered on desktop) */}
              <motion.div variants={fadeInUp} className={`space-y-8 ${sectionIndex === 0 ? 'lg:order-1' : ''}`}>
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

              {/* Right column - Illustration or Subsections */}
              {sectionIndex === 0 ? (
                /* Innovation Illustration for Section 01 */
                <motion.div 
                  variants={fadeInUp}
                  className="flex justify-center lg:justify-start lg:order-2"
                >
                  <svg 
                    width="400" 
                    height="400" 
                    viewBox="0 0 400 400" 
                    className="drop-shadow-2xl"
                  >
                    {/* Light bulb base */}
                    <circle
                      cx="200"
                      cy="200"
                      r="80"
                      fill="#0ea5e9"
                      opacity="0.2"
                    />
                    
                    {/* Light bulb */}
                    <path
                      d="M 200 100 
                         Q 240 120, 240 160
                         Q 240 200, 220 230
                         L 220 260
                         Q 220 270, 210 270
                         L 190 270
                         Q 180 270, 180 260
                         L 180 230
                         Q 160 200, 160 160
                         Q 160 120, 200 100 Z"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    
                    {/* Bulb base */}
                    <rect
                      x="185"
                      y="270"
                      width="30"
                      height="20"
                      rx="2"
                      fill="#0284c7"
                    />
                    
                    {/* Light rays */}
                    <g opacity="0.6">
                      <line x1="200" y1="80" x2="200" y2="50" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                      <line x1="260" y1="120" x2="280" y2="100" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                      <line x1="280" y1="180" x2="310" y2="180" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                      <line x1="140" y1="120" x2="120" y2="100" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                      <line x1="120" y1="180" x2="90" y2="180" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                    </g>
                    
                    {/* Gears inside bulb */}
                    <circle cx="200" cy="160" r="25" fill="none" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="200" cy="160" r="15" fill="none" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="200" cy="160" r="4" fill="#0284c7" />
                    
                    {/* Small gear teeth */}
                    <circle cx="200" cy="135" r="3" fill="#0284c7" />
                    <circle cx="225" cy="160" r="3" fill="#0284c7" />
                    <circle cx="200" cy="185" r="3" fill="#0284c7" />
                    <circle cx="175" cy="160" r="3" fill="#0284c7" />
                  </svg>
                </motion.div>
              ) : sectionIndex === 2 ? (
                /* Support Illustration for Section 03 */
                <motion.div 
                  variants={fadeInUp}
                  className="flex justify-center lg:justify-start"
                >
                  <svg 
                    width="400" 
                    height="400" 
                    viewBox="0 0 400 400" 
                    className="drop-shadow-2xl"
                  >
                    {/* Background circle */}
                    <circle
                      cx="200"
                      cy="200"
                      r="80"
                      fill="#0ea5e9"
                      opacity="0.2"
                    />
                    
                    {/* Headset headband */}
                    <path
                      d="M 120 180 Q 120 120, 200 120 Q 280 120, 280 180"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    
                    {/* Left ear cup */}
                    <rect
                      x="100"
                      y="170"
                      width="40"
                      height="60"
                      rx="20"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    
                    {/* Right ear cup */}
                    <rect
                      x="260"
                      y="170"
                      width="40"
                      height="60"
                      rx="20"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    
                    {/* Microphone boom */}
                    <path
                      d="M 140 200 Q 180 240, 200 260"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    
                    {/* Microphone */}
                    <circle
                      cx="200"
                      cy="265"
                      r="12"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />
                    
                    {/* Sound waves */}
                    <g opacity="0.5">
                      <path d="M 320 180 Q 330 200, 320 220" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 340 160 Q 355 200, 340 240" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 80 180 Q 70 200, 80 220" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 60 160 Q 45 200, 60 240" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
                    </g>
                    
                    {/* 24/7 Clock badge - positioned to the right */}
                    <g transform="translate(290, 120)">
                      {/* Clock circle background */}
                      <circle cx="0" cy="0" r="35" fill="#0284c7" />
                      
                      {/* Clock face */}
                      <circle cx="0" cy="0" r="28" fill="white" />
                      
                      {/* Clock hands */}
                      <line x1="0" y1="0" x2="0" y2="-15" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
                      <line x1="0" y1="0" x2="10" y2="5" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Center dot */}
                      <circle cx="0" cy="0" r="3" fill="#0284c7" />
                      
                      {/* Circular arrows around clock */}
                      <g opacity="0.7">
                        {/* Top arrow */}
                        <path 
                          d="M -5 -40 Q 0 -42, 5 -40" 
                          fill="none" 
                          stroke="#0ea5e9" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          markerEnd="url(#arrowhead)"
                        />
                        
                        {/* Right arrow */}
                        <path 
                          d="M 40 -5 Q 42 0, 40 5" 
                          fill="none" 
                          stroke="#0ea5e9" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                        
                        {/* Bottom arrow */}
                        <path 
                          d="M 5 40 Q 0 42, -5 40" 
                          fill="none" 
                          stroke="#0ea5e9" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                        
                        {/* Left arrow */}
                        <path 
                          d="M -40 5 Q -42 0, -40 -5" 
                          fill="none" 
                          stroke="#0ea5e9" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                      </g>
                      
                      {/* 24/7 text */}
                      <text x="0" y="-50" textAnchor="middle" fill="#0284c7" fontSize="14" fontWeight="bold">24/7</text>
                    </g>
                  </svg>
                </motion.div>
              ) : (
                /* Subsections for section 02 (Integrate) */
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
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

