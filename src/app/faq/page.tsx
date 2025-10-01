'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'
import { StructuredData } from '@/components/common/StructuredData'

const faqs = [
  {
    question: 'Who is the ideal GE Smart Home partner?',
    answer: 'We work with custom integrators, security professionals, electricians, and builders who deliver premium connected experiences and want to add a marquee brand to their lineup.'
  },
  {
    question: 'How quickly can I start selling?',
    answer: 'Most partners complete onboarding inside 48 hours. You will receive pricing, portal access, and demo gear recommendations as soon as your application is approved.'
  },
  {
    question: 'Do you support marketing campaigns?',
    answer: 'Yes. We offer co-branded assets, geo-targeted digital spend, showroom event kits, and leads generated from national campaigns.'
  },
  {
    question: 'What kind of training and support do you provide?',
    answer: 'We provide comprehensive product training, technical documentation, installation guides, and 24/7 support. Our team includes dedicated account managers and technical specialists to help you succeed.'
  },
  {
    question: 'What are the dealer pricing and margin opportunities?',
    answer: 'Authorized dealers receive 35% off MSRP on all GE Smart Home products, plus additional volume incentives and exclusive promotional pricing on new product launches.'
  },
  {
    question: 'How does the GE Smart Home ecosystem integrate with other systems?',
    answer: 'Our products are built with Matter compatibility and work seamlessly with major platforms including Savant, Control4, Lutron, and others. We provide detailed integration guides and technical support.'
  }
]

const testimonials = [
  {
    name: 'Mike Rodriguez',
    company: 'Smart Solutions Inc.',
    location: 'Austin, TX',
    rating: 5,
    quote: 'The GE Smart Home partnership transformed our business. The 35% dealer discount and Savant AI integration helped us win three major projects this quarter alone.',
    projectValue: '$150K+'
  },
  {
    name: 'Sarah Chen',
    company: 'Elite Home Automation',
    location: 'San Francisco, CA',
    rating: 5,
    quote: 'Outstanding support team and product quality. Our customers love the GE brand recognition, and the technical training made installation seamless.',
    projectValue: '$85K+'
  },
  {
    name: 'David Thompson',
    company: 'Precision Electric',
    location: 'Denver, CO',
    rating: 5,
    quote: 'The fast 48-hour onboarding got us selling immediately. The marketing support and co-branded materials helped us look professional from day one.',
    projectValue: '$200K+'
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900">
      <StructuredData json={faqSchema} />
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.faq} />
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="sr-only">GE Smart Home Dealer Program FAQ</h1>
          <SectionHeader
            eyebrow="Support"
            title={<span className="text-blue-950">Frequently Asked Questions</span>}
            description="Everything you need to know about the GE Smart Home dealer program, from getting started to growing your business."
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
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
                      className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                      aria-expanded={isOpen}
                      aria-controls={`faq-content-${index}`}
                      id={`faq-button-${index}`}
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
                        aria-hidden="true"
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
                          id={`faq-content-${index}`}
                          role="region"
                          aria-labelledby={`faq-button-${index}`}
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(30,58,138,0.4)] p-10 text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-800/10 via-blue-900/5 to-transparent" />

              <div className="absolute top-4 right-4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-150" />
              <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500/15 to-blue-700/15 blur-lg opacity-40 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-125" />

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
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              </div>

              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Success Stories"
            title={<span className="text-blue-950">What Our Partners Say</span>}
            description="Real testimonials from GE Smart Home dealers who have transformed their businesses with our partnership program."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-blue-600" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-neutral-700 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <div className="font-semibold text-blue-950">{testimonial.name}</div>
                      <div className="text-sm text-neutral-600">{testimonial.company}</div>
                      <div className="text-xs text-neutral-500">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{testimonial.projectValue}</div>
                      <div className="text-xs text-neutral-500">Project Value</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-12 text-white">
            <h2 className="text-3xl font-semibold mb-6 lg:text-4xl">
              Ready to Join Our Partner Network?
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Apply now to access exclusive pricing, comprehensive training, and ongoing support from the GE Smart Home team.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-950 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/smart-home-experience"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/20"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
