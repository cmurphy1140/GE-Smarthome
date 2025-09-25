'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const faqs = [
  {
    question: 'Who is the ideal GE Smarthome partner?',
    answer: 'We work with custom integrators, security professionals, electricians, and builders who deliver premium connected experiences and want to add a marquee brand to their lineup.'
  },
  {
    question: 'How quickly can I start selling?',
    answer: 'Most partners complete onboarding inside 48 hours. You will receive pricing, portal access, and demo gear recommendations as soon as your application is approved.'
  },
  {
    question: 'Do you support marketing campaigns?',
    answer: 'Yes. We offer co-branded assets, geo-targeted digital spend, showroom event kits, and leads generated from national campaigns.'
  }
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="faqs" className="relative bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <SectionHeader
            align="left"
            eyebrow="FAQs"
            title="Everything you need before you apply"
            description="Still exploring the opportunity? Start with our most common partner questions or reach out directly."
          />

          <div className="mt-10 flex flex-col gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <motion.div
                  key={faq.question}
                  layout
                  className="overflow-hidden rounded-3xl border border-blue-950/15 bg-white text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(current => (current === index ? null : index))}
                    className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  >
                    <div>
                      <p className="text-lg font-medium text-blue-900/70">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900">{faq.question}</h3>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full border border-blue-950/20 p-2 text-blue-900"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="px-8 pb-8 text-base leading-relaxed text-slate-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-blue-950/20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-10 text-white shadow-[0_24px_60px_rgba(15,23,42,0.35)]"
        >
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10" />
          <div className="relative flex h-full flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Concierge access
              </span>
              <h3 className="text-3xl font-semibold md:text-4xl">Talk with a channel strategist</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                Share your portfolio and we will map the right incentives, demo gear, and integration path for your team.
              </p>
            </div>
            <Link
              href="/signup"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-100"
            >
              Schedule a call
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
