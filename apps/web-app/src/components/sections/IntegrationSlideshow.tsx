'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

// Minimalist SVG Icons for integration steps
const OnboardIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-blue-400">
    <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M16 52v-8a12 12 0 0 1 12-12h8a12 12 0 0 1 12 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 12l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TrainingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-green-400">
    <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05"/>
    <path d="M16 28h32M16 36h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="46" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <path d="M42 54l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LaunchIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-purple-400">
    <path d="M32 8l-4 16h8l-4 32l8-20h-8l4-28z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/>
  </svg>
)

const GrowIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-orange-400">
    <path d="M8 48l12-12 8 8 16-16 12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 32l8 8v-8h-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
    <circle cx="20" cy="36" r="3" fill="currentColor"/>
    <circle cx="28" cy="44" r="3" fill="currentColor"/>
    <circle cx="44" cy="28" r="3" fill="currentColor"/>
  </svg>
)

const integrationSteps = [
  {
    id: 1,
    icon: OnboardIcon,
    title: 'Onboard',
    subtitle: '48-hour setup',
    description: 'Complete application, background check, and initial product training through our streamlined digital platform.',
    duration: '2 days'
  },
  {
    id: 2,
    icon: TrainingIcon,
    title: 'Certify',
    subtitle: 'Product expertise',
    description: 'Master GE Lighting and Savant integration through hands-on workshops and online certification modules.',
    duration: '1 week'
  },
  {
    id: 3,
    icon: LaunchIcon,
    title: 'Launch',
    subtitle: 'First installation',
    description: 'Execute your first GE Smarthome project with dedicated support and guaranteed installation success.',
    duration: '2 weeks'
  },
  {
    id: 4,
    icon: GrowIcon,
    title: 'Scale',
    subtitle: 'Expand operations',
    description: 'Leverage marketing support, referral programs, and advanced product access to grow your business.',
    duration: 'Ongoing'
  }
]

export default function IntegrationSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % integrationSteps.length)
    }, 5000) // 5 seconds per slide

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrationSteps.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrationSteps.length) % integrationSteps.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentStep = integrationSteps[currentSlide]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl">
            Simple Integration Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get up and running with GE Smarthome in under 30 days
          </p>
        </div>

        {/* Slide Deck Container */}
        <div className="relative">

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 transition-all duration-200 hover:bg-slate-50 hover:scale-110"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 transition-all duration-200 hover:bg-slate-50 hover:scale-110"
              aria-label="Next step"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          {/* Main Slide Content */}
          <div className="glass-card p-12 md:p-16 text-center min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg border border-slate-200">
                    <currentStep.icon />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                    <span className="text-sm font-medium text-blue-700">Step {currentStep.id} of {integrationSteps.length}</span>
                  </div>

                  <h3 className="text-4xl font-bold text-slate-900">
                    {currentStep.title}
                  </h3>

                  <p className="text-xl text-blue-600 font-medium">
                    {currentStep.subtitle}
                  </p>

                  <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                    {currentStep.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    {currentStep.duration}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {integrationSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 shadow-lg shadow-blue-600/50 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / integrationSteps.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Start</span>
              <span>Launch Ready</span>
            </div>
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            {isAutoPlaying ? 'Pause' : 'Auto-play'} slideshow
          </button>
        </div>
      </div>
    </section>
  )
}