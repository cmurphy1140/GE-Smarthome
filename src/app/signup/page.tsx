'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { trackEvent, FormEvents, CTAEvents } from '@/lib/analytics'

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

// Validation utilities
const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email.trim()) {
    return { isValid: false, error: 'Email address is required' }
  }

  // Enhanced email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g., name@company.com)' }
  }

  // Check for common disposable email domains
  const disposableDomains = ['tempmail.org', '10minutemail.com', 'guerrillamail.com', 'mailinator.com']
  const domain = email.split('@')[1]?.toLowerCase()

  if (disposableDomains.includes(domain)) {
    return { isValid: false, error: 'Please use a business email address' }
  }

  return { isValid: true }
}

const formatPhoneNumber = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, '')

  // Format as (XXX) XXX-XXXX
  if (digits.length >= 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  } else if (digits.length >= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  } else if (digits.length >= 3) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  }
  return digits
}

const validatePhone = (phone: string): { isValid: boolean; error?: string } => {
  const digits = phone.replace(/\D/g, '')

  if (!digits) {
    return { isValid: false, error: 'Phone number is required' }
  }

  if (digits.length < 10) {
    return { isValid: false, error: 'Please enter a complete 10-digit phone number' }
  }

  if (digits.length > 10) {
    return { isValid: false, error: 'Phone number should be 10 digits (US format)' }
  }

  // Check for invalid patterns
  if (/^(\d)\1{9}$/.test(digits)) {
    return { isValid: false, error: 'Please enter a valid phone number' }
  }

  return { isValid: true }
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
  const [validationStatus, setValidationStatus] = useState<Record<string, 'valid' | 'invalid' | 'pending'>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
    let processedValue = value

    // Handle phone number formatting
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value)

      // Real-time phone validation
      const phoneValidation = validatePhone(processedValue)
      setErrors(prev => ({ ...prev, [name]: phoneValidation.error || '' }))
      setValidationStatus(prev => ({
        ...prev,
        [name]: phoneValidation.isValid ? 'valid' : 'invalid'
      }))
    }

    // Handle email validation
    if (name === 'email') {
      const emailValidation = validateEmail(value)
      setErrors(prev => ({ ...prev, [name]: emailValidation.error || '' }))
      setValidationStatus(prev => ({
        ...prev,
        [name]: emailValidation.isValid ? 'valid' : 'invalid'
      }))
    }

    // Handle required field validation
    if (['companyName', 'contactName', 'businessFocus', 'yearsInBusiness', 'annualRevenue'].includes(name)) {
      const isEmpty = !value.trim()
      if (errors[name] && !isEmpty) {
        setErrors(prev => ({ ...prev, [name]: '' }))
        setValidationStatus(prev => ({ ...prev, [name]: 'valid' }))
      } else if (isEmpty && errors[name]) {
        setValidationStatus(prev => ({ ...prev, [name]: 'invalid' }))
      }
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const newValidationStatus: Record<string, 'valid' | 'invalid' | 'pending'> = {}

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
      newValidationStatus.companyName = 'invalid'
    } else {
      newValidationStatus.companyName = 'valid'
    }

    // Contact Name
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required'
      newValidationStatus.contactName = 'invalid'
    } else {
      newValidationStatus.contactName = 'valid'
    }

    // Email validation
    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error!
      newValidationStatus.email = 'invalid'
    } else {
      newValidationStatus.email = 'valid'
    }

    // Phone validation
    const phoneValidation = validatePhone(formData.phone)
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error!
      newValidationStatus.phone = 'invalid'
    } else {
      newValidationStatus.phone = 'valid'
    }

    // Business Focus
    if (!formData.businessFocus) {
      newErrors.businessFocus = 'Please select your primary business focus'
      newValidationStatus.businessFocus = 'invalid'
    } else {
      newValidationStatus.businessFocus = 'valid'
    }

    // Years in Business
    if (!formData.yearsInBusiness) {
      newErrors.yearsInBusiness = 'Please enter years in business'
      newValidationStatus.yearsInBusiness = 'invalid'
    } else if (parseInt(formData.yearsInBusiness) < 0 || parseInt(formData.yearsInBusiness) > 100) {
      newErrors.yearsInBusiness = 'Please enter a realistic number of years (0-100)'
      newValidationStatus.yearsInBusiness = 'invalid'
    } else {
      newValidationStatus.yearsInBusiness = 'valid'
    }

    // Annual Revenue
    if (!formData.annualRevenue) {
      newErrors.annualRevenue = 'Please select your annual revenue range'
      newValidationStatus.annualRevenue = 'invalid'
    } else {
      newValidationStatus.annualRevenue = 'valid'
    }

    setErrors(newErrors)
    setValidationStatus(newValidationStatus)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Track form submission attempt
    trackEvent(FormEvents.FORM_SUBMIT_ATTEMPT, {
      form_type: 'dealer_application',
      form_data: {
        company_name: formData.companyName ? 'provided' : 'empty',
        contact_name: formData.contactName ? 'provided' : 'empty',
        email: formData.email ? 'provided' : 'empty',
        phone: formData.phone ? 'provided' : 'empty',
        business_focus: formData.businessFocus ? 'provided' : 'empty',
        years_in_business: formData.yearsInBusiness ? 'provided' : 'empty',
        annual_revenue: formData.annualRevenue ? 'provided' : 'empty',
      },
    })

    if (!validateForm()) {
      setSubmitStatus('error')

      // Track form validation errors
      trackEvent(FormEvents.FORM_VALIDATION_ERROR, {
        form_type: 'dealer_application',
        errors: Object.keys(errors),
        error_count: Object.keys(errors).length,
      })

      return
    }

    setSubmitStatus('loading')
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      setIsLoading(false)
      setIsSubmitted(true)

      // Track successful form submission
      trackEvent(FormEvents.FORM_SUBMIT_SUCCESS, {
        form_type: 'dealer_application',
        company_name: formData.companyName,
        business_focus: formData.businessFocus,
        annual_revenue: formData.annualRevenue,
        years_in_business: formData.yearsInBusiness,
      })

    } catch (_error) {
      setSubmitStatus('error')
      setIsLoading(false)
      setErrors(prev => ({ ...prev, submit: 'There was an error submitting your application. Please try again.' }))

      // Track form submission error
      trackEvent(FormEvents.FORM_SUBMIT_ERROR, {
        form_type: 'dealer_application',
        error_type: 'api_error',
      })
    }
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
            <h2 className="text-2xl font-semibold text-slate-900">Application Submitted Successfully!</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Thank you for applying to the GE Smart Home Dealer Program. Your application has been received and is being reviewed.
            </p>

            <div className="mt-6 rounded-lg bg-blue-50 p-4 text-left">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">What happens next:</h3>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• <strong>Within 48 hours:</strong> A channel strategist will contact you to schedule your welcome call</li>
                <li>• <strong>Welcome call:</strong> Discuss your business goals and create a customized onboarding plan</li>
                <li>• <strong>Demo roadmap:</strong> Receive personalized equipment recommendations for your first project</li>
                <li>• <strong>30-day enablement:</strong> Access training materials, marketing assets, and technical support</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={process.env.NEXT_PUBLIC_CALENDAR_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent(CTAEvents.SCHEDULE_CALL_CLICK, {
                    source: 'post_submit_confirmation',
                    form_type: 'dealer_application',
                  })
                }}
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-green-700 disabled:opacity-50"
              >
                Schedule Your Welcome Call
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-900"
              >
                Return to Homepage
              </Link>
              <Link
                href="/program-tiers"
                className="inline-flex items-center justify-center rounded-full border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-50"
              >
                Learn About Program Tiers
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
          <Image
            src="/signup-hero.png"
            alt="GE Smart Home dealer program background"
            fill
            priority
            className="object-cover opacity-20 mix-blend-soft-light"
            sizes="100vw"
          />
          <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Dealer program
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Kick off your GE Smart Home partnership
              </h1>
              <p className="text-base leading-relaxed text-blue-100 md:text-lg">
                Complete the inquiry form so our channel strategists can map the ideal onboarding plan, demo strategy, and Savant integration milestones for your team.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:bg-blue-950/10"
                >
                  Home
                </Link>
              </div>
              {defaults && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-md font-semibold uppercase tracking-[0.25em] text-blue-100">
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

        <section id="application" className="relative z-10 -mt-16 md:-mt-20">
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
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-10 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                          errors.companyName
                            ? 'border-red-500'
                            : validationStatus.companyName === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                        placeholder="Your company name"
                      />
                      {validationStatus.companyName === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.companyName === 'invalid' && formData.companyName && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-10 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                          errors.contactName
                            ? 'border-red-500'
                            : validationStatus.contactName === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {validationStatus.contactName === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.contactName === 'invalid' && formData.contactName && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-10 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                          errors.email
                            ? 'border-red-500'
                            : validationStatus.email === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {validationStatus.email === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.email === 'invalid' && formData.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-neutral-600">
                      By submitting, you agree to our{' '}
                      <Link href="/privacy" className="text-ge-blue underline">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="/terms" className="text-ge-blue underline">
                        Terms
                      </Link>
                      .
                    </p>
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
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-10 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                          errors.phone
                            ? 'border-red-500'
                            : validationStatus.phone === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {validationStatus.phone === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.phone === 'invalid' && formData.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                    <div className="relative">
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        name="businessFocus"
                        value={formData.businessFocus}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-12 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 appearance-none ${
                          errors.businessFocus
                            ? 'border-red-500'
                            : validationStatus.businessFocus === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
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
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {validationStatus.businessFocus === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.businessFocus === 'invalid' && formData.businessFocus && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="number"
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        min="0"
                        max="100"
                        className={`w-full rounded-lg border px-4 py-3 pr-10 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 ${
                          errors.yearsInBusiness
                            ? 'border-red-500'
                            : validationStatus.yearsInBusiness === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                        placeholder="5"
                      />
                      {validationStatus.yearsInBusiness === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.yearsInBusiness === 'invalid' && formData.yearsInBusiness && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                    <div className="relative">
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        name="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border px-4 py-3 pr-12 transition-all focus:border-blue-900 focus:ring-2 focus:ring-blue-900 appearance-none ${
                          errors.annualRevenue
                            ? 'border-red-500'
                            : validationStatus.annualRevenue === 'valid'
                              ? 'border-green-500'
                              : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select revenue range</option>
                        <option value="under-100k">Under $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="over-5m">Over $5,000,000</option>
                      </motion.select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {validationStatus.annualRevenue === 'valid' && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      )}
                      {validationStatus.annualRevenue === 'invalid' && formData.annualRevenue && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
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
                      Why are you interested in the GE Smart Home Dealer Program?
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
                      'Apply Now'
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
