'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Cable, ChevronDown, Shield, Waves } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const verticals = [
  {
    id: 'electrical',
    icon: Cable,
    title: 'Electrical Contractors',
    subtitle: 'Transform standard electrical work into premium Smart Home experiences',
    headline: 'Professional Smart Lighting Solutions',
    summary: 'Move beyond commodity installs with GE Proseo presets, energy reporting, and retrofit-friendly controls that keep crews efficient while delivering premium value to homeowners.',
    keyBenefit: 'Commission rooms in minutes with pre-built lighting recipes',
    projectValue: '$5K-$15K avg',
    marketSize: '280K+ contractors nationwide',
    growthRate: '23% annual growth in smart installs',
    features: [
      'Retrofit-friendly switches and dimmers',
      'Energy monitoring and reporting dashboards',
      'Pre-configured lighting scenes for common rooms',
      'Voice control integration (Alexa, Google)',
      'Mobile app control for homeowner convenience',
      'Maintenance and monitoring add-on revenue streams'
    ],
    benefits: [
      'Increase project value by 40-60% over standard electrical work',
      'Differentiate from commodity electrical contractors',
      'Create recurring revenue through monitoring services',
      'Build long-term customer relationships',
      'Access to technical hotline and field support'
    ],
    cta: 'Blueprint your first Proseo upsell',
    href: '/signup?vertical=electrical'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Installers',
    subtitle: 'Layer intelligent lighting with your security systems for complete protection',
    headline: 'Smart Security + Lighting Integration',
    summary: 'Elevate surveillance projects with presence simulation, entry lighting, and Savant scenes that sync with your preferred security platforms for enhanced deterrence and client peace of mind.',
    keyBenefit: 'Motion alerts trigger coordinated lighting deterrence',
    projectValue: '$10K-$25K avg',
    marketSize: '95K+ security professionals',
    growthRate: '31% growth in integrated security solutions',
    features: [
      'Motion sensor integration with lighting responses',
      'Presence simulation for vacation security',
      'Entry and pathway lighting automation',
      'Integration with major security platforms',
      'Panic mode lighting for emergency situations',
      'Geofencing for automatic armed/disarmed lighting'
    ],
    benefits: [
      'Expand into higher-margin Smart Home services',
      'Offer comprehensive security + convenience packages',
      'Increase customer retention through lifestyle benefits',
      'Access to co-marketing safety campaigns',
      'Priority support for complex integrations'
    ],
    cta: 'Design a security + lighting package',
    href: '/signup?vertical=security'
  },
  {
    id: 'av',
    icon: Waves,
    title: 'A/V Integrators',
    subtitle: 'Own the complete entertainment experience with integrated lighting and control',
    headline: 'Complete Home Automation Mastery',
    summary: 'Bundle GE Lighting, multi-room audio, and Savant Pro control to deliver signature entertainment and wellness scenes that transform how clients experience their homes.',
    keyBenefit: 'Pre-configured Savant scenes for cinema, wellness, and hosting',
    projectValue: '$25K-$75K avg',
    marketSize: '12K+ custom integrators',
    growthRate: '45% growth in whole-home automation',
    features: [
      'Cinema lighting scenes synchronized with A/V systems',
      'Wellness lighting for circadian rhythm support',
      'Party and hosting modes with dynamic effects',
      'Multi-room audio coordination with lighting',
      'Savant Pro system integration and programming',
      'Custom scene creation and fine-tuning'
    ],
    benefits: [
      'Position as premium whole-home solution provider',
      'Command highest margins in Smart Home market',
      'Access to Savant University certification programs',
      'Design desk support for complex installations',
      'Launch-ready showroom demo equipment'
    ],
    cta: 'Curate your next flagship install',
    href: '/signup?vertical=av'
  }
]

export default function VerticalsSection() {
  const [activeVertical, setActiveVertical] = useState(0)

  return (
    <section id="verticals" className="relative bg-slate-50 py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.12),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-10">
          <SectionHeader
            align="left"
            eyebrow="Who we serve"
            title="Tailored partner tracks for every Smart Home discipline"
            description="Select the vertical that matches your core business. We layer on the playbooks, pricing, and enablement to help you lead in your market."
            className="md:pr-8"
          />

          <div className="space-y-4">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon
              const isActive = activeVertical === index
              return (
                <motion.button
                  key={vertical.id}
                  type="button"
                  onMouseEnter={() => setActiveVertical(index)}
                  onFocus={() => setActiveVertical(index)}
                  onClick={() => setActiveVertical(index)}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                  className={`group flex w-full items-center justify-between gap-6 rounded-3xl border px-5 py-5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                    isActive
                      ? 'border-blue-950/30 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]'
                      : 'border-blue-950/20 bg-blue-950/5 hover:border-blue-950/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isActive ? 'bg-blue-950 text-white' : 'bg-white text-blue-950 transition-colors group-hover:bg-blue-950 group-hover:text-white'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-slate-900">{vertical.title}</p>
                      <p className="mt-1 text-lg text-slate-600">{vertical.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isActive ? 'rotate-180 text-blue-950' : 'text-blue-950 group-hover:text-blue-950'
                    }`}
                  />
                </motion.button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={verticals[activeVertical].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-8 rounded-3xl border border-blue-950/15 bg-white p-10 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-white">
                {React.createElement(verticals[activeVertical].icon, { className: 'h-5 w-5' })}
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium uppercase tracking-[0.3em] text-blue-950/70">
                  {verticals[activeVertical].title}
                </p>
                <h3 className="text-3xl font-semibold text-slate-900">
                  {verticals[activeVertical].headline}
                </h3>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-slate-600">
              {verticals[activeVertical].summary}
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900">Key features</h4>
                <ul className="space-y-3 text-lg text-slate-600">
                  {verticals[activeVertical].features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-blue-950" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900">Business benefits</h4>
                <ul className="space-y-3 text-lg text-slate-600">
                  {verticals[activeVertical].benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-blue-950" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-950/15 bg-blue-950/5 p-6 text-slate-600">
              <span className="text-lg font-semibold uppercase tracking-[0.25em] text-blue-950/70">Primary advantage</span>
              <p className="mt-3 text-xl font-medium text-slate-900">
                {verticals[activeVertical].keyBenefit}
              </p>
            </div>

            <div className="grid gap-6 text-slate-600 md:grid-cols-3">
              <div>
                <p className="text-lg font-medium uppercase tracking-[0.25em] text-blue-950/70">Market size</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {verticals[activeVertical].marketSize}
                </p>
              </div>
              <div>
                <p className="text-lg font-medium uppercase tracking-[0.25em] text-blue-950/70">Growth rate</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {verticals[activeVertical].growthRate}
                </p>
              </div>
              <div>
                <p className="text-lg font-medium uppercase tracking-[0.25em] text-blue-950/70">Project value</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {verticals[activeVertical].projectValue}
                </p>
              </div>
            </div>

            <Link
              href={verticals[activeVertical].href}
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-blue-950 px-8 py-4 text-xl font-semibold text-blue-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-950/5"
            >
              {verticals[activeVertical].cta}
              <ArrowRight className="h-5 w-5" />
            </Link>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
