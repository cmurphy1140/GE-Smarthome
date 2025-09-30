'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, Rocket } from 'lucide-react'

const roiCalculator = {
  inputs: [
    { label: 'Smart home installs/month', key: 'projects', min: 1, max: 30, default: 8 },
    { label: 'Avg GE products per install', key: 'products', min: 5, max: 50, default: 20 },
    { label: 'Average product price', key: 'price', min: 15, max: 80, default: 35 }
  ],
  dealerDiscount: 0.35, // 35% off MSRP
  competitorMargin: 0.25, // Typical competitor margin
  additionalServices: 0.15 // 15% markup on installation services
} as const

export default function RoiCalculatorSection() {
  const [roiInputs, setRoiInputs] = useState({ projects: 8, products: 20, price: 35 })

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
                  <label className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
                    {input.label}
                    <span className="text-slate-900">
                      {input.key === 'price' ? `$${roiInputs[input.key]}` : roiInputs[input.key]}
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
                  <div className="mt-2 flex justify-between text-sm text-slate-500">
                    <span>{input.key === 'price' ? `$${input.min}` : input.min}</span>
                    <span>{input.key === 'price' ? `$${input.max}` : input.max}</span>
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

              <div className="text-xs text-slate-500 mt-3">
                Based on ${Math.round(roi.totalProductVolume).toLocaleString()} monthly product volume
              </div>
            </div>
            <Link
              href="/signup"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-900"
            >
              Become a GE Dealer
              <Rocket className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
