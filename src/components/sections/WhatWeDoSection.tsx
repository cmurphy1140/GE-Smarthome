'use client'

import { motion, useInView } from 'framer-motion'
import React, { memo, useRef, useState } from 'react'
import Image from 'next/image'

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

// SVG path drawing animation - simplified for TypeScript compatibility

// Number counting animation
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once: true })

  React.useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return { count, nodeRef }
}

// Design.md: Progressive Disclosure Strategy - Level 2: Category Pages → 5-7 key points + visuals
const sections = [
  {
    number: '01',
    title: 'Innovate',
    description: 'Pioneer cutting-edge smart home solutions combining GE\'s 140+ years of innovation with Savant\'s advanced automation.',
    // Design.md: Cialdini's Authority Principle - GE's 140-year innovation heritage
    authority: '140+ years of GE innovation heritage',
    subsections: [
      {
        title: 'Smart Home Technology',
        content: 'Industry-leading products spanning lighting, climate control, security, and entertainment systems.',
        icon: 'bulb',
        benefit: '35% higher margins than standard products'
      },
      {
        title: 'Product Development',
        content: 'Continuous firmware updates, new integrations, and expanded product lines tested for reliability.',
        icon: 'gear',
        benefit: 'Quarterly product launches'
      }
    ]
  },
  {
    number: '02',
    title: 'Integrate',
    description: 'Complete integration support with training, technical resources, and dedicated channel strategists.',
    // Design.md: Reciprocity Principle - Free training and resources
    reciprocity: 'Free comprehensive training program',
    subsections: [
      {
        title: 'Dealer Enablement',
        content: 'Comprehensive training, live sessions, demo equipment, and certification programs from day one.',
        icon: 'graduation',
        benefit: 'Certified installer status'
      },
      {
        title: 'System Integration',
        content: 'Seamless third-party integration with professional APIs, documentation, and technical support.',
        icon: 'link',
        benefit: 'Pre-built integrations with 50+ platforms'
      }
    ]
  },
  {
    number: '03',
    title: 'Support',
    description: 'World-class support with dedicated assistance and proactive monitoring at every partnership stage.',
    // Design.md: Social Proof - 24/7 support as competitive advantage
    socialProof: '24/7 support beats industry average by 3x',
    subsections: [
      {
        title: '24/7 Technical Support',
        content: 'Round-the-clock assistance with priority response times and direct engineering access.',
        icon: 'headphones',
        benefit: 'Average 2-minute response time'
      },
      {
        title: 'Business Growth Support',
        content: 'Marketing resources, co-branded materials, MDF funds, and quarterly business reviews.',
        icon: 'trending-up',
        benefit: 'Up to $10K annual MDF funds'
      }
    ]
  }
]

export const WhatWeDoSection = memo(function WhatWeDoSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-32 relative overflow-hidden">
      {/* Design.md: Depth Through Layers - Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-primary-300 to-transparent"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-cyan-300 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Design.md: Section Header Pattern - Eyebrow text + Main headline + Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-micro font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h2 className="text-display font-bold text-gray-900 mb-6">
            Partnership That Powers Success
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t sell products to dealers—we invest in their success. Every partnership is built on three pillars that drive measurable business growth.
          </p>
        </motion.div>

        {/* Analytics showcase image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-20 overflow-hidden rounded-2xl"
        >
          <Image
            src="/smart-home-analytics.png"
            alt="Advanced smart home analytics and data insights"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
        </motion.div>

        {/* Design.md: Content sections with psychological design strategies */}
        <div className="space-y-24">
          {sections.map((section, sectionIndex) => {
            const SectionNumber = () => {
              const { count, nodeRef } = useCounter(parseInt(section.number), 1)
              return (
                <div ref={nodeRef} className="text-gray-300 text-8xl font-bold">
                  {String(count).padStart(2, '0')}
                </div>
              )
            }

            return (
              <motion.div
                key={section.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Left column - Section info with psychological principles */}
                <motion.div variants={fadeInUp} className={`space-y-8 ${sectionIndex === 0 ? 'lg:order-1' : ''}`}>
                  <SectionNumber />
                  <h3 className="text-heading font-bold text-gray-900 lg:text-5xl xl:text-6xl">
                    {section.title}
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                  
                  {/* Design.md: Authority/Social Proof badges */}
                  <div className="flex flex-wrap gap-3">
                    {section.authority && (
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-small font-medium text-primary-800">
                        {section.authority}
                      </span>
                    )}
                    {section.reciprocity && (
                      <span className="inline-flex items-center rounded-full bg-success-100 px-4 py-2 text-small font-medium text-success-800">
                        {section.reciprocity}
                      </span>
                    )}
                    {section.socialProof && (
                      <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-small font-medium text-cyan-800">
                        {section.socialProof}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Right column - Design.md: Feature Grid Pattern with benefits */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                <motion.div
                      key={subIndex} 
                      className="group relative bg-white rounded-xl p-6 shadow-raised hover:shadow-floating transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Design.md: Glass morphism on interactive elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          {/* Icon placeholder - would use actual icons */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                            <div className="w-6 h-6 bg-primary-600 rounded" />
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="text-subheading font-semibold text-gray-900 mb-2">
                        {subsection.title}
                      </h4>
                            <p className="text-body text-gray-600 leading-relaxed mb-3">
                        {subsection.content}
                      </p>
                            
                            {/* Design.md: Specific metrics - "35% margins" not "higher margins" */}
                            <div className="inline-flex items-center rounded-full bg-success-100 px-3 py-1 text-small font-medium text-success-800">
                              {subsection.benefit}
                            </div>
                          </div>
                        </div>
                    </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

