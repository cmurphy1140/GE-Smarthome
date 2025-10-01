'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Globe2,
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
import { useTouchGestures, useMobileOptimizations } from '../common/TouchGestures'

// Particle component for effects
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-400 rounded-full"
    initial={{ x: 0, y: 0, opacity: 0 }}
    animate={{
      x: [0, Math.random() * 40 - 20],
      y: [0, Math.random() * 40 - 20],
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
)

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
        subtitle: 'Average 40% increase in Smart Home revenue',
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

// Magnetic hover card component
const MagneticCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export default function BenefitsSection() {
  const [activeCategory, setActiveCategory] = useState<BenefitCategoryKey>('financial')
  const { isMobile, shouldAnimate } = useMobileOptimizations()
  const [progressValues, setProgressValues] = useState<Record<string, number>>({})

  const currentCategory = benefitCategories[activeCategory]
  const categoryKeys = Object.keys(benefitCategories) as BenefitCategoryKey[]

  // Animate progress values when category changes
  useEffect(() => {
    currentCategory.benefits.forEach((benefit, i) => {
      setTimeout(() => {
        setProgressValues(prev => ({ ...prev, [benefit.title]: 100 }))
      }, i * 200)
    })
  }, [activeCategory, currentCategory.benefits])

  // Touch gestures for mobile category switching
  const touchGestures = useTouchGestures({
    onSwipeLeft: () => {
      if (isMobile) {
        const currentIndex = categoryKeys.indexOf(activeCategory)
        const nextIndex = (currentIndex + 1) % categoryKeys.length
        setActiveCategory(categoryKeys[nextIndex])
      }
    },
    onSwipeRight: () => {
      if (isMobile) {
        const currentIndex = categoryKeys.indexOf(activeCategory)
        const prevIndex = currentIndex === 0 ? categoryKeys.length - 1 : currentIndex - 1
        setActiveCategory(categoryKeys[prevIndex])
      }
    }
  })

  return (
    <section id="benefits" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why dealers partner with GE"
          title="Everything you need to grow your Smart Home business"
          description="From premium profit margins to 24/7 support, discover how our partnership program accelerates your success."
          variant="dark"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(Object.entries(benefitCategories) as [BenefitCategoryKey, typeof currentCategory][]).map(([key, category]) => {
            const Icon = category.icon
            const isActive = activeCategory === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-950 ${
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
            transition={{ duration: shouldAnimate ? 0.3 : 0 }}
            className="mt-8 space-y-8"
            {...touchGestures}
          >
            {currentCategory.benefits.map((benefit, index) => (
              <MagneticCard key={benefit.title}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:-translate-y-1 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col`}
                >
                  {/* Visual Section with Large Metrics */}
                  <div className="relative flex-1 p-8 bg-gradient-to-br from-blue-50 via-white to-slate-50">
                    <div className="flex items-center justify-center h-full">
                      <div className="relative text-center">
                        {/* Particle effects around metrics */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <Particle key={i} delay={i * 0.3} />
                          ))}
                        </div>

                        {/* Massive Metric Display */}
                        <div className="mb-6">
                          <motion.div
                            className="text-4xl font-black text-blue-600 mb-3 leading-none"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                          >
                            {benefit.metric}
                          </motion.div>
                          <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {benefit.metricLabel}
                          </div>

                          {/* Progress bar reveal */}
                          <div className="mt-3 h-1 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                              initial={{ width: 0 }}
                              animate={{ width: `${progressValues[benefit.title] || 0}%` }}
                              transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>

                        {/* Enhanced Icon with Animation */}
                        <div className="flex justify-center">
                          <div className="relative">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-950 shadow-xl">
                              <benefit.icon className="h-10 w-10 text-white" />
                            </div>
                            {/* Animated ring */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-3 border-blue-400"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Pulsing outer ring */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-blue-300"
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent" />
                    <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-50/50 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-base text-blue-600 font-semibold mb-3">
                          {benefit.subtitle}
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed">
                          {benefit.details}
                        </p>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/signup"
                          className="group inline-flex items-center gap-3 text-base font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700 hover:gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                        >
                          Apply Now
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ChevronRight className="h-5 w-5" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </MagneticCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile swipe indicators */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-8">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  key === activeCategory ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Switch to ${benefitCategories[key].title}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
