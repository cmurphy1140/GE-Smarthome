'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Mic, Lightbulb, Wifi, HelpCircle } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const faqSections = [
  {
    icon: Smartphone,
    title: 'App Control',
    description: 'Get started with\nthe free Cync App\nfor iOS & Android'
  },
  {
    icon: Mic,
    title: 'Voice\nIntegrations',
    description: 'Connect to\nAmazon Alexa,\nGoogle Home &\nother smart\nassistants'
  },
  {
    icon: Lightbulb,
    title: 'Our Products',
    description: 'See what Cync\nsmart products\ncan do'
  },
  {
    icon: Wifi,
    title: 'Compatibility',
    description: 'Requires 2.4 GHz\nWi-Fi & smart\nphone'
  },
  {
    icon: HelpCircle,
    title: 'FAQ\'s',
    description: 'Tips & tricks to get\nthe most from\nyour Cync devices'
  }
]

export default function FaqSection() {
  return (
    <section id="faqs" className="relative bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Resources"
          title="Everything you need to get started"
          description="From app control to voice integrations, explore our comprehensive resources."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {faqSections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 p-6"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200">
                  <IconComponent className="h-8 w-8 text-slate-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 whitespace-pre-line">
                  {section.title}
                </h3>
                <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-700">
            <span className="text-base font-semibold">Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
