'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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
    transition: { duration: 0.6, ease: "easeOut" }
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
  const searchParams = useSearchParams()
  const vertical = searchParams.get('vertical')?.toLowerCase() ?? ''
  const defaults = focusPrefills[vertical] ?? null

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
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

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6, repeat: 1 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your interest!</h2>
          <p className="text-gray-600 mb-6">
            We have received your application and a member of our team will be in touch soon.
          </p>

          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-md border-b border-gray-200"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <Link
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mr-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">GE Smarthome Dealer Program</h1>
            <p className="text-sm text-gray-600">in partnership with Savant</p>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Form Header */}
          <motion.div
            variants={fadeInUp}
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(15, 23, 42, 0.75)), url(/signup-hero.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            className="rounded-t-2xl px-8 py-16 text-white"
          >
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Join an Elite Network of Smart Home Professionals
              </h1>
              <p className="text-xl opacity-90 mx-auto max-w-2xl">
                Please complete the inquiry form below to begin your application.
                A regional channel manager will review your information and contact you within 3-5 business days.
              </p>
              {defaults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-blue-50"
                >
                  Tailored for {defaults.label} — adjust any field to fit your business.
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div variants={fadeInUp} className="p-8">
            {defaults && (
              <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-blue-700">
                We pre-filled this application for {defaults.label}. Update any details so we can tailor onboarding.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Company Name */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your company name"
                  />
                  {errors.companyName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.companyName}
                    </motion.p>
                  )}
                </motion.div>

                {/* Contact Name */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Contact Name <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.contactName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.contactName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.contactName}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Business Focus */}
                <motion.div variants={fadeInUp} className="form-group md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Business Focus <span className="text-red-500">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="businessFocus"
                    value={formData.businessFocus}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
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
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.businessFocus}
                    </motion.p>
                  )}
                </motion.div>

                {/* Years in Business */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.yearsInBusiness ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="5"
                  />
                  {errors.yearsInBusiness && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.yearsInBusiness}
                    </motion.p>
                  )}
                </motion.div>

                {/* Annual Revenue */}
                <motion.div variants={fadeInUp} className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Revenue Range <span className="text-red-500">*</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
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
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.annualRevenue}
                    </motion.p>
                  )}
                </motion.div>

                {/* Target Tier */}
                <motion.div variants={fadeInUp} className="form-group md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Which program tier interests you most?
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="targetTier"
                    value={formData.targetTier}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Why are you interested in the GE Smarthome Dealer Program?
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="interestReason"
                    value={formData.interestReason}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell us about your interest in partnering with GE Lighting and Savant..."
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={fadeInUp}
                className="pt-6"
              >
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                    />
                  ) : (
                    'Submit Inquiry'
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
