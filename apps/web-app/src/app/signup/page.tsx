'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
}

const focusPrefills: Record<string, {
  businessFocus: string
  targetTier: string
  interestReason: string
  label: string
}> = {
  electrical: {
    businessFocus: 'licensed-electrician',
    targetTier: 'authorized-dealer',
    interestReason:
      'We lead electrical projects and want to layer in profitable GE Proseo lighting packages with a migration path to Savant.',
    label: 'Electrical Contractors'
  },
  security: {
    businessFocus: 'security-installer',
    targetTier: 'authorized-dealer',
    interestReason:
      'We deliver security and monitoring solutions and need coordinated lighting scenes and Savant automations for premium packages.',
    label: 'Security Installers'
  },
  av: {
    businessFocus: 'custom-integrator',
    targetTier: 'premier-partner',
    interestReason:
      'We design whole-room entertainment experiences and want to bundle Savant control with GE Proseo lighting and controls.',
    label: 'Custom Integrators & AV Teams'
  }
}

export default function SignupPage() {
  const [vertical, setVertical] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setVertical(params.get('vertical')?.toLowerCase() ?? '')
  }, [])

  const defaults = useMemo(() => focusPrefills[vertical] ?? null, [vertical])

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState(() => ({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    businessFocus: defaults?.businessFocus ?? '',
    yearsInBusiness: '',
    annualRevenue: '',
    teamSize: '',
    targetTier: defaults?.targetTier ?? '',
    currentBrands: '',
    certifications: '',
    interestReason: defaults?.interestReason ?? ''
  }))
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!defaults) return
    setFormData(prev => ({
      ...prev,
      businessFocus: defaults.businessFocus,
      targetTier: defaults.targetTier,
      interestReason: defaults.interestReason
    }))
  }, [defaults])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.businessFocus) newErrors.businessFocus = 'Please select your business focus'
    if (!formData.yearsInBusiness) newErrors.yearsInBusiness = 'Years in business is required'
    if (!formData.annualRevenue) newErrors.annualRevenue = 'Please select your revenue range'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <main className="flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-4 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-[0_24px_60px_rgba(15,23,42,0.25)]"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 0.6, repeat: 1 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-slate-900">Thank you for your interest!</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We have received your application and a member of our team will be in touch shortly to schedule your welcome call.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-900"
              >
                Return to homepage
              </Link>
              <Link
                href="/learning-guide"
                className="inline-flex items-center justify-center rounded-full border border-blue-950/40 px-6 py-3 text-sm font-semibold text-blue-950 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
              >
                Explore the learning guide
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="space-y-16 pb-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
          <div className="absolute inset-0 bg-[url('/signup-hero.png')] bg-cover bg-center opacity-20 mix-blend-soft-light" />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Dealer program
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Kick off your GE Smarthome partnership
              </h1>
              <p className="text-base leading-relaxed text-blue-100 md:text-lg">
                Complete the inquiry form so our channel strategists can map the ideal onboarding plan, demo strategy, and Savant integration milestones for your team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to homepage
                </Link>
                <Link
                  href="/learning-guide"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-white/10"
                >
                  View learning guide
                </Link>
              </div>
              {defaults && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Prefilled for {defaults.label}
                </div>
              )}
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-relaxed text-blue-100 backdrop-blur">
              <p className="font-semibold text-white">What to expect</p>
              <ul className="mt-4 space-y-3">
                <li>• 48-hour welcome call with your regional channel strategist.</li>
                <li>• Personalized demo gear roadmap for your first flagship project.</li>
                <li>• 30-day enablement plan spanning sales, technical, and marketing tracks.</li>
                <li>• Quarterly reviews with shared performance dashboards and co-marketing support.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative z-10 -mt-16 md:-mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <SectionHeader
                align="left"
                eyebrow="Application"
                title="Tell us about your business"
                description="Answer a few questions so we can tailor onboarding, demo equipment, and incentives to your core services."
                className="mb-10"
              />

              {defaults && (
                <div className="mb-6 rounded-2xl border border-blue-950/20 bg-blue-950/16 px-4 py-3 text-sm text-blue-950">
                  We pre-filled this application for {defaults.label}. Update any details so we can tailor onboarding.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 md:grid-cols-2"
                >
                  {/* Company Name */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.companyName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.companyName}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Contact Name */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Primary Contact Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.contactName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.contactName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.contactName}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Business Focus */}
                  <motion.div variants={fadeInUp} className="form-group md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Primary Business Focus <span className="text-red-500">*</span>
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="businessFocus"
                      value={formData.businessFocus}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.businessFocus ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your primary business focus</option>
                      <option value="custom-integrator">Custom Integrator / AV Professional</option>
                      <option value="security-installer">Security Installer</option>
                      <option value="licensed-electrician">Licensed Electrician</option>
                      <option value="home-builder">Home Builder</option>
                      <option value="remodeler-contractor">Remodeler / Contractor</option>
                      <option value="retailer">Retailer</option>
                    </motion.select>
                    {errors.businessFocus && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.businessFocus}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Years in Business */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Years in Business <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="number"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.yearsInBusiness ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="5"
                    />
                    {errors.yearsInBusiness && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.yearsInBusiness}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Annual Revenue */}
                  <motion.div variants={fadeInUp} className="form-group">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Annual Revenue Range <span className="text-red-500">*</span>
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                        errors.annualRevenue ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select revenue range</option>
                      <option value="under-100k">Under $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m-5m">$1,000,000 - $5,000,000</option>
                      <option value="over-5m">Over $5,000,000</option>
                    </motion.select>
                    {errors.annualRevenue && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.annualRevenue}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Target Tier */}
                  <motion.div variants={fadeInUp} className="form-group md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Which program tier interests you most?
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="targetTier"
                      value={formData.targetTier}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                    >
                      <option value="">Select program tier</option>
                      <option value="authorized-dealer">Authorized Dealer (Entry Level)</option>
                      <option value="premier-partner">Premier Partner ($50K+ commitment)</option>
                      <option value="elite-integrator">Elite Integrator ($150K+ commitment)</option>
                      <option value="unsure">I need more information to decide</option>
                    </motion.select>
                  </motion.div>

                  {/* Interest Reason */}
                  <motion.div variants={fadeInUp} className="form-group md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Why are you interested in the GE Smarthome Dealer Program?
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="interestReason"
                      value={formData.interestReason}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
                      placeholder="Tell us about your interest in partnering with GE Lighting and Savant..."
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className="pt-6">
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-xl bg-gradient-to-r from-blue-950 to-blue-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
                      isLoading ? 'cursor-not-allowed opacity-75' : ''
                    }`}
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="mx-auto h-6 w-6 rounded-full border-2 border-white border-t-transparent"
                      />
                    ) : (
                      'Submit inquiry'
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
