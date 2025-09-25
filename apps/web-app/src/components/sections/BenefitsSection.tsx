'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe2,
  Rocket,
  Users,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
  Headphones,
  BarChart3,
  Target,
  Sparkles,
  ChevronRight
} from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const benefitCategories = {
  financial: {
    title: 'Financial Benefits',
    icon: DollarSign,
    benefits: [
      {
        icon: TrendingUp,
        title: 'Higher profit margins',
        subtitle: 'Up to 35% margins on signature products',
        details: 'Premium pricing on GE Proseo and Savant products with exclusive dealer discounts and volume incentives.',
        metric: '35%',
        metricLabel: 'Average margin'
      },
      {
        icon: Award,
        title: 'Performance bonuses',
        subtitle: 'Quarterly rebates and annual rewards',
        details: 'Tiered reward structure with cash bonuses, exclusive product access, and recognition programs.',
        metric: '$15K',
        metricLabel: 'Annual bonus potential'
      },
      {
        icon: BarChart3,
        title: 'Revenue growth',
        subtitle: 'Average 40% increase in smart home revenue',
        details: 'Dealers report significant revenue growth through premium product mix and enhanced customer lifetime value.',
        metric: '40%',
        metricLabel: 'Revenue increase'
      }
    ]
  },
  support: {
    title: 'Sales & Support',
    icon: Headphones,
    benefits: [
      {
        icon: Clock,
        title: '24/7 technical support',
        subtitle: 'Round-the-clock expert assistance',
        details: 'Dedicated technical support team with average 2-minute response time for critical issues.',
        metric: '2min',
        metricLabel: 'Response time'
      },
      {
        icon: BookOpen,
        title: 'Comprehensive training',
        subtitle: 'Certification programs and ongoing education',
        details: 'Complete training curriculum with hands-on workshops, online modules, and field support.',
        metric: '40hrs',
        metricLabel: 'Training available'
      },
      {
        icon: Users,
        title: 'Dedicated account manager',
        subtitle: 'Personal relationship manager for your business',
        details: 'Assigned account manager providing strategic guidance, pipeline support, and co-selling assistance.',
        metric: '1:1',
        metricLabel: 'Personal support'
      }
    ]
  },
  marketing: {
    title: 'Marketing & Leads',
    icon: Target,
    benefits: [
      {
        icon: Sparkles,
        title: 'Co-branded marketing',
        subtitle: 'Professional marketing materials and campaigns',
        details: 'Custom marketing assets, digital campaigns, and showroom displays featuring your brand alongside GE.',
        metric: '50+',
        metricLabel: 'Marketing assets'
      },
      {
        icon: Users,
        title: 'Qualified lead generation',
        subtitle: 'Warm leads delivered monthly',
        details: 'Pre-qualified leads from national advertising campaigns and regional marketing initiatives.',
        metric: '25+',
        metricLabel: 'Monthly leads'
      },
      {
        icon: Globe2,
        title: 'Digital presence boost',
        subtitle: 'Enhanced online visibility and SEO',
        details: 'Listing on GE partner directory, SEO optimization support, and social media content.',
        metric: '300%',
        metricLabel: 'Visibility increase'
      }
    ]
  }
} as const

type BenefitCategoryKey = keyof typeof benefitCategories

const roiCalculator = {
  inputs: [
    { label: 'Monthly projects', key: 'projects', min: 1, max: 50, default: 5 },
    { label: 'Average project value', key: 'value', min: 5000, max: 100000, default: 25000 },
    { label: 'Current margin %', key: 'margin', min: 5, max: 40, default: 15 }
  ]
} as const

export default function BenefitsSection() {
  const [activeCategory, setActiveCategory] = useState<BenefitCategoryKey>('financial')
  const [roiInputs, setRoiInputs] = useState({ projects: 5, value: 25000, margin: 15 })

  const currentCategory = benefitCategories[activeCategory]

  const calculateROI = () => {
    const currentMonthlyRevenue = roiInputs.projects * roiInputs.value * (roiInputs.margin / 100)
    const improvedMargin = Math.min(roiInputs.margin + 15, 35)
    const newMonthlyRevenue = roiInputs.projects * roiInputs.value * (improvedMargin / 100)
    const monthlyIncrease = newMonthlyRevenue - currentMonthlyRevenue

    return {
      monthlyIncrease,
      annualIncrease: monthlyIncrease * 12,
      marginImprovement: improvedMargin - roiInputs.margin
    }
  }

  const roi = calculateROI()

  return (
    <section id="benefits" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why dealers partner with GE"
          title="Everything you need to grow your smart home business"
          description="From premium profit margins to 24/7 support, discover how our partnership program accelerates your success."
          variant="dark"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {(Object.entries(benefitCategories) as [BenefitCategoryKey, typeof currentCategory][]).map(([key, category]) => {
            const Icon = category.icon
            const isActive = activeCategory === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-slate-800 bg-slate-800 text-white'
                    : 'border-blue-700/40 bg-blue-800/30 text-blue-100 hover:border-blue-600 hover:bg-blue-600/50 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.title}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 space-y-12"
          >
            {currentCategory.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.1)] transition-all duration-500 hover:shadow-[0_32px_80px_rgba(15,23,42,0.15)] hover:-translate-y-2 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col`}
              >
                {/* Visual Section with Large Metrics */}
                <div className="relative flex-1 p-12 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                  <div className="flex items-center justify-center h-full">
                    <div className="relative text-center">
                      {/* Massive Metric Display */}
                      <div className="mb-8">
                        <div className="text-9xl font-black text-blue-600 mb-4 leading-none">
                          {benefit.metric}
                        </div>
                        <div className="text-2xl font-bold text-slate-700 uppercase tracking-wider">
                          {benefit.metricLabel}
                        </div>
                      </div>
                      
                      {/* Enhanced Icon with Animation */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 shadow-2xl">
                            <benefit.icon className="h-14 w-14 text-white" />
                          </div>
                          {/* Animated ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-4 border-blue-200"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background decorations */}
                  <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent" />
                  <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-50/50 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-12 flex flex-col justify-center">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-4">
                        {benefit.subtitle}
                      </p>
                      <p className="text-xl text-slate-600 leading-relaxed">
                        {benefit.details}
                      </p>
                    </div>
                    
                    <div className="pt-6">
                      <Link
                        href="/signup"
                        className="group inline-flex items-center gap-4 text-xl font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700 hover:gap-6"
                      >
                        Learn more
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/10 text-blue-950">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Calculate your ROI</h3>
                <p className="text-sm text-slate-600">See how much additional revenue you could generate with improved margins and incentives.</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {roiCalculator.inputs.map(input => (
                <div key={input.key}>
                  <label className="flex items-center justify-between text-md font-semibold uppercase tracking-[0.3em] text-slate-600">
                    {input.label}
                    <span className="text-slate-900">
                      {input.key === 'value' ? `$${roiInputs[input.key].toLocaleString()}` : `${roiInputs[input.key]}${input.key === 'margin' ? '%' : ''}`}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={input.min}
                    max={input.max}
                    value={roiInputs[input.key]}
                    onChange={event =>
                      setRoiInputs(prev => ({
                        ...prev,
                        [input.key]: parseInt(event.target.value, 10)
                      }))
                    }
                    className="mt-3 w-full cursor-pointer appearance-none rounded-full bg-slate-200"
                  />
                  <div className="mt-2 flex justify-between text-md text-slate-500">
                    <span>{input.key === 'value' ? `$${input.min.toLocaleString()}` : input.min}</span>
                    <span>{input.key === 'value' ? `$${input.max.toLocaleString()}` : input.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Monthly revenue increase</span>
                <span className="text-2xl font-semibold text-slate-900">+${roi.monthlyIncrease.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Annual revenue increase</span>
                <span className="text-2xl font-semibold text-slate-900">+${roi.annualIncrease.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Margin improvement</span>
                <span className="text-2xl font-semibold text-slate-900">+{roi.marginImprovement.toFixed(1)}%</span>
              </div>
            </div>
            <Link
              href="/signup"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-900"
            >
              Start earning more
              <Rocket className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
