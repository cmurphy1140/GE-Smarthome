'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  CalendarCheck, 
  Globe2, 
  Rocket, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Clock, 
  Shield, 
  Zap,
  BookOpen,
  Headphones,
  BarChart3,
  Target,
  Sparkles,
  ChevronRight,
  Star,
  Play,
  CheckCircle
} from 'lucide-react'

const benefitCategories = {
  financial: {
    title: 'Financial Benefits',
    icon: DollarSign,
    color: 'green',
    benefits: [
      {
        icon: TrendingUp,
        title: 'Higher Profit Margins',
        subtitle: 'Up to 35% margins on signature products',
        details: 'Premium pricing on GE Proseo and Savant products with exclusive dealer discounts and volume incentives.',
        metric: '35%',
        metricLabel: 'Average Margin'
      },
      {
        icon: Award,
        title: 'Performance Bonuses',
        subtitle: 'Quarterly rebates and annual rewards',
        details: 'Tiered reward structure with cash bonuses, exclusive product access, and recognition programs.',
        metric: '$15K',
        metricLabel: 'Annual Bonus Potential'
      },
      {
        icon: BarChart3,
        title: 'Revenue Growth',
        subtitle: 'Average 40% increase in smart home revenue',
        details: 'Dealers report significant revenue growth through premium product mix and enhanced customer lifetime value.',
        metric: '40%',
        metricLabel: 'Revenue Increase'
      }
    ]
  },
  support: {
    title: 'Sales & Support',
    icon: Headphones,
    color: 'blue',
    benefits: [
      {
        icon: Clock,
        title: '24/7 Technical Support',
        subtitle: 'Round-the-clock expert assistance',
        details: 'Dedicated technical support team with average 2-minute response time for critical issues.',
        metric: '2min',
        metricLabel: 'Response Time'
      },
      {
        icon: BookOpen,
        title: 'Comprehensive Training',
        subtitle: 'Certification programs and ongoing education',
        details: 'Complete training curriculum with hands-on workshops, online modules, and field support.',
        metric: '40hrs',
        metricLabel: 'Training Available'
      },
      {
        icon: Users,
        title: 'Dedicated Account Manager',
        subtitle: 'Personal relationship manager for your business',
        details: 'Assigned account manager providing strategic guidance, pipeline support, and co-selling assistance.',
        metric: '1:1',
        metricLabel: 'Personal Support'
      }
    ]
  },
  marketing: {
    title: 'Marketing & Leads',
    icon: Target,
    color: 'purple',
    benefits: [
      {
        icon: Sparkles,
        title: 'Co-Branded Marketing',
        subtitle: 'Professional marketing materials and campaigns',
        details: 'Custom marketing assets, digital campaigns, and showroom displays featuring your brand alongside GE.',
        metric: '50+',
        metricLabel: 'Marketing Assets'
      },
      {
        icon: Users,
        title: 'Qualified Lead Generation',
        subtitle: 'Warm leads delivered monthly',
        details: 'Pre-qualified leads from national advertising campaigns and regional marketing initiatives.',
        metric: '25+',
        metricLabel: 'Monthly Leads'
      },
      {
        icon: Globe2,
        title: 'Digital Presence Boost',
        subtitle: 'Enhanced online visibility and SEO',
        details: 'Listing on GE partner directory, SEO optimization support, and social media content.',
        metric: '300%',
        metricLabel: 'Visibility Increase'
      }
    ]
  }
}

const testimonials = [
  {
    quote: "Partnering with GE Smarthome transformed our business. We've seen a 45% increase in project value and our customers love the premium experience.",
    author: "Sarah Chen",
    title: "Premier Partner",
    company: "Smart Spaces Integration",
    rating: 5
  },
  {
    quote: "The technical support is unmatched. Having 24/7 access to experts has saved us countless hours and kept our installations running smoothly.",
    author: "Mike Rodriguez",
    title: "Authorized Dealer",
    company: "Home Tech Solutions",
    rating: 5
  },
  {
    quote: "The marketing support and lead generation program has been a game-changer. We're booking more high-value projects than ever before.",
    author: "David Thompson",
    title: "Premier Partner", 
    company: "Elite Home Systems",
    rating: 5
  }
]

const roiCalculator = {
  inputs: [
    { label: 'Monthly Projects', key: 'projects', min: 1, max: 50, default: 5 },
    { label: 'Average Project Value', key: 'value', min: 5000, max: 100000, default: 25000 },
    { label: 'Current Margin %', key: 'margin', min: 5, max: 40, default: 15 }
  ]
}

export default function BenefitsSection() {
  const [activeCategory, setActiveCategory] = useState('financial')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [roiInputs, setRoiInputs] = useState({
    projects: 5,
    value: 25000,
    margin: 15
  })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Calculate ROI
  const calculateROI = () => {
    const currentMonthlyRevenue = roiInputs.projects * roiInputs.value * (roiInputs.margin / 100)
    const improvedMargin = Math.min(roiInputs.margin + 15, 35) // Up to 35% margin
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
    <section id="benefits" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-lg font-medium text-blue-600">Dealer Benefits</span>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl leading-tight">
              Everything you need to grow your smart home business
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              From premium profit margins to 24/7 support, discover how our partnership program accelerates your success.
            </p>
          </motion.div>
        </div>

        {/* Interactive Benefit Categories */}
        <div className="mb-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(benefitCategories).map(([key, category]) => {
              const IconComponent = category.icon
              const isActive = activeCategory === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  {category.title}
                </button>
              )
            })}
          </div>

          {/* Active Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {benefitCategories[activeCategory].benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                        <benefit.icon className="h-7 w-7" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
                        <div className="text-sm text-slate-500">{benefit.metricLabel}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{benefit.subtitle}</p>
                    <p className="text-slate-600 leading-relaxed">{benefit.details}</p>
                    
                    <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-8 text-white shadow-2xl"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="h-7 w-7" />
                Calculate Your ROI
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                See how much additional revenue you could generate as a GE Smarthome dealer with improved margins and exclusive benefits.
              </p>
              
              <div className="space-y-6">
                {roiCalculator.inputs.map((input) => (
                  <div key={input.key}>
                    <label className="block text-sm font-medium text-blue-100 mb-2">
                      {input.label}
                    </label>
                    <input
                      type="range"
                      min={input.min}
                      max={input.max}
                      value={roiInputs[input.key]}
                      onChange={(e) => setRoiInputs(prev => ({
                        ...prev,
                        [input.key]: parseInt(e.target.value)
                      }))}
                      className="w-full h-2 bg-blue-400/30 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-blue-200 mt-1">
                      <span>{input.key === 'value' ? `$${input.min.toLocaleString()}` : input.min}</span>
                      <span className="font-semibold">
                        {input.key === 'value' ? `$${roiInputs[input.key].toLocaleString()}` : roiInputs[input.key]}
                        {input.key === 'margin' && '%'}
                      </span>
                      <span>{input.key === 'value' ? `$${input.max.toLocaleString()}` : input.max}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-6">Your Potential Earnings</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100">Additional Monthly Revenue</span>
                  <span className="text-2xl font-bold text-green-300">
                    +${roi.monthlyIncrease.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-blue-100">Additional Annual Revenue</span>
                  <span className="text-2xl font-bold text-green-300">
                    +${roi.annualIncrease.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-blue-100">Margin Improvement</span>
                  <span className="text-xl font-bold text-yellow-300">
                    +{roi.marginImprovement.toFixed(1)}%
                  </span>
                </div>
              </div>
              
              <Link
                href="/signup"
                className="mt-6 w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-lg font-bold text-blue-600 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Start Earning More
                <Rocket className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">What Our Dealers Say</h3>
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-4xl mx-auto"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-600 italic mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-slate-900">{testimonials[activeTestimonial].author}</div>
                  <div className="text-blue-600">{testimonials[activeTestimonial].title}</div>
                  <div className="text-slate-500">{testimonials[activeTestimonial].company}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-8 py-12 text-white shadow-[0_24px_60px_rgba(37,99,235,0.35)] md:flex md:items-stretch md:gap-12"
        >
          <div className="relative mb-8 flex-1 overflow-hidden rounded-2xl border border-white/20 bg-white/10 md:mb-0">
            <Image
              src="/ge-team-photo.png"
              alt="GE Smarthome professional team in smart home environment with circuit board house design"
              width={800}
              height={800}
              className="h-80 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="relative flex-1 self-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-6">
              <CheckCircle className="h-4 w-4" />
              Tailored Enablement Available
            </div>
            <h3 className="text-xl font-bold leading-tight md:text-2xl lg:text-3xl mb-4">
              Ready to transform your smart home business?
            </h3>
            <p className="text-lg leading-relaxed text-blue-100 md:text-xl mb-8">
              Join over 280+ successful dealers who have accelerated their growth with GE Smarthome. Get personalized support, premium products, and proven systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Become a Dealer
                <Rocket className="h-5 w-5" />
              </Link>
              <Link
                href="/learning-guide"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/60 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}