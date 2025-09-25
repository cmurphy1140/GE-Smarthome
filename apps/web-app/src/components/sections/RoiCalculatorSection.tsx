'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, Rocket } from 'lucide-react'

const roiCalculator = {
  inputs: [
    { label: 'Monthly projects', key: 'projects', min: 1, max: 50, default: 5 },
    { label: 'Average project value', key: 'value', min: 5000, max: 100000, default: 25000 },
    { label: 'Current margin %', key: 'margin', min: 5, max: 40, default: 15 }
  ]
} as const

export default function RoiCalculatorSection() {
  const [roiInputs, setRoiInputs] = useState({ projects: 5, value: 25000, margin: 15 })

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
                <h3 className="text-xl font-semibold text-slate-900">Calculate your ROI</h3>
                <p className="text-sm text-slate-600">See how much additional revenue you could generate with improved margins and incentives.</p>
              </div>
            </div>

            <div className="space-y-6">
              {roiCalculator.inputs.map(input => (
                <div key={input.key}>
                  <label className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
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
                  <div className="mt-2 flex justify-between text-sm text-slate-500">
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
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
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
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-900"
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
