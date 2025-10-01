'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Rocket, HelpCircle, Save, CheckCircle, X } from 'lucide-react'

const roiCalculator = {
  inputs: [
    {
      label: 'Smart home installs/month',
      key: 'projects',
      min: 1,
      max: 30,
      default: 8,
      helpText: 'Based on industry averages for residential smart home professionals. Range includes part-time (1-5) to established contractors (20-30).'
    },
    {
      label: 'Avg GE products per install',
      key: 'products',
      min: 5,
      max: 50,
      default: 20,
      helpText: 'Typical smart home projects include 5-15 devices for basic setups, 20-35 for comprehensive installations, and 40+ for luxury homes.'
    },
    {
      label: 'Average product price',
      key: 'price',
      min: 15,
      max: 80,
      default: 35,
      helpText: 'Based on GE Smart Home product mix. Basic switches ($15-25), smart bulbs ($25-40), advanced controls and sensors ($40-80).'
    }
  ],
  dealerDiscount: 0.35, // 35% off MSRP
  competitorMargin: 0.25, // Typical competitor margin
  additionalServices: 0.15 // 15% markup on installation services
} as const

export default function RoiCalculatorSection() {
  const [roiInputs, setRoiInputs] = useState({ projects: 8, products: 20, price: 35 })
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [saveEmail, setSaveEmail] = useState('')
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // Load saved inputs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('roi-calculator-inputs')
    if (saved) {
      try {
        const parsedInputs = JSON.parse(saved)
        setRoiInputs(parsedInputs)
      } catch (error) {
        console.warn('Failed to load saved ROI inputs:', error)
      }
    }
  }, [])

  // Save inputs to localStorage when they change
  useEffect(() => {
    localStorage.setItem('roi-calculator-inputs', JSON.stringify(roiInputs))
  }, [roiInputs])

  // Validation function
  const validateInput = (key: string, value: number) => {
    const input = roiCalculator.inputs.find(inp => inp.key === key)
    if (!input) return null

    if (value < input.min || value > input.max) {
      return `Value must be between ${input.min} and ${input.max}`
    }
    return null
  }

  // Handle input change with validation
  const handleInputChange = (key: string, value: number) => {
    const error = validateInput(key, value)
    setErrors(prev => ({ ...prev, [key]: error || '' }))
    setRoiInputs(prev => ({ ...prev, [key]: value }))
  }

  // Handle save configuration
  const handleSaveConfig = async () => {
    if (!saveEmail.trim()) {
      setSaveStatus('error')
      return
    }

    setSaveStatus('saving')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSaveStatus('saved')
      setTimeout(() => {
        setShowSaveModal(false)
        setSaveStatus('idle')
        setSaveEmail('')
      }, 2000)
    } catch {
      setSaveStatus('error')
    }
  }

  const calculateROI = () => {
    // Calculate monthly product sales volume
    const monthlyProductSales = roiInputs.projects * roiInputs.products * roiInputs.price

    // Dealer pricing: 35% off MSRP means 65% of retail price
    const dealerCost = monthlyProductSales * (1 - roiCalculator.dealerDiscount)

    // Competitor margin (what they'd make with other brands)
    const competitorRevenue = monthlyProductSales * roiCalculator.competitorMargin

    // GE dealer advantage: sell at retail, buy at 35% discount
    const geAdvantage = monthlyProductSales - dealerCost

    // Additional service markup opportunity
    const serviceRevenue = monthlyProductSales * roiCalculator.additionalServices

    // Total monthly advantage over competitors
    const monthlyIncrease = geAdvantage - competitorRevenue + serviceRevenue

    return {
      monthlyIncrease,
      annualIncrease: monthlyIncrease * 12,
      dealerSavings: roiCalculator.dealerDiscount * 100,
      totalProductVolume: monthlyProductSales
    }
  }

  const roi = calculateROI()

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950/10 text-blue-950">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">GE Dealer Advantage Calculator</h3>
                <p className="text-sm text-slate-600">Calculate your monthly advantage with 35% off MSRP on GE Smart Home products.</p>
              </div>
            </div>

            <div className="space-y-6">
              {roiCalculator.inputs.map(input => (
                <div key={input.key}>
                  <div className="flex items-center gap-2 mb-2">
                    <label
                      htmlFor={`roi-${input.key}`}
                      className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 flex-1"
                    >
                      {input.label}
                      <span className="text-slate-900" aria-live="polite">
                        {input.key === 'price' ? `$${roiInputs[input.key]}` : roiInputs[input.key]}
                      </span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveTooltip(input.key)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        onClick={() => setActiveTooltip(activeTooltip === input.key ? null : input.key)}
                        className="p-1 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
                        aria-label={`Help for ${input.label}`}
                      >
                        <HelpCircle className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {activeTooltip === input.key && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 top-8 z-10 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl"
                          >
                            <div className="absolute -top-1 right-3 w-2 h-2 bg-slate-900 transform rotate-45"></div>
                            {input.helpText}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <input
                    id={`roi-${input.key}`}
                    type="range"
                    min={input.min}
                    max={input.max}
                    value={roiInputs[input.key]}
                    onChange={event =>
                      handleInputChange(input.key, parseInt(event.target.value, 10))
                    }
                    className={`mt-3 w-full cursor-pointer appearance-none rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      errors[input.key] ? 'border-2 border-red-400' : ''
                    }`}
                    aria-label={`${input.label}: ${input.key === 'price' ? `$${roiInputs[input.key]}` : roiInputs[input.key]}`}
                    aria-valuemin={input.min}
                    aria-valuemax={input.max}
                    aria-valuenow={roiInputs[input.key]}
                    aria-valuetext={input.key === 'price' ? `$${roiInputs[input.key]}` : `${roiInputs[input.key]}`}
                    aria-invalid={!!errors[input.key]}
                  />
                  <div className="mt-2 flex justify-between text-sm text-slate-600">
                    <span>{input.key === 'price' ? `$${input.min}` : input.min}</span>
                    <span>{input.key === 'price' ? `$${input.max}` : input.max}</span>
                  </div>
                  {errors[input.key] && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-600"
                    >
                      {errors[input.key]}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
          >
            <div className="space-y-4">
              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <div className="text-sm font-semibold text-green-800 mb-1">Monthly Dealer Advantage</div>
                <div className="text-3xl font-bold text-green-900">+${Math.round(roi.monthlyIncrease).toLocaleString()}</div>
                <div className="text-xs text-green-700">vs. competitor products</div>
              </div>

              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Annual advantage</span>
                <span className="text-xl font-semibold text-slate-900">+${Math.round(roi.annualIncrease).toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Dealer discount</span>
                <span className="text-xl font-semibold text-blue-900">{roi.dealerSavings}% off MSRP</span>
              </div>

              <div className="text-xs text-slate-600 mt-3">
                Based on ${Math.round(roi.totalProductVolume).toLocaleString()} monthly product volume
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowSaveModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Save className="h-4 w-4" />
                Save Configuration
              </button>

              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Apply Now
                <Rocket className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Save Configuration Modal */}
        <AnimatePresence>
          {showSaveModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setShowSaveModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                    <Save className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Save Your Configuration</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Get your customized ROI calculation emailed to you, along with next steps to join the GE Smart Home dealer program.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="save-email" className="sr-only">Email address</label>
                      <input
                        id="save-email"
                        type="email"
                        value={saveEmail}
                        onChange={e => setSaveEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        disabled={saveStatus === 'saving'}
                      />
                    </div>

                    <div className="text-xs text-slate-500">
                      Your configuration: {roiInputs.projects} installs/month, {roiInputs.products} products per install, ${roiInputs.price} avg price
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSaveConfig}
                      disabled={saveStatus === 'saving' || saveStatus === 'saved'}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {saveStatus === 'saving' && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      )}
                      {saveStatus === 'saved' && <CheckCircle className="h-4 w-4" />}
                      {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Save & Email Results'}
                    </motion.button>

                    {saveStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-600 text-center"
                      >
                        Please enter a valid email address
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
