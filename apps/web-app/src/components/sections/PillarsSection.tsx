'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, LineChart, ShoppingBag, ExternalLink, ArrowRight, Users, Clock, Award } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { fadeInUp } from '../common/OptimizedMotion'

const pillars = [
  {
    icon: Users,
    title: 'Dedicated strategist',
    description: '1:1 guidance from onboarding through expansion with regional expertise.',
    accent: 'blue',
    badge: 'Personal'
  },
  {
    icon: Clock,
    title: '24/7 support',
    description: 'Priority access to technical specialists and rapid-response troubleshooting.',
    accent: 'green',
    badge: 'Always On'
  },
  {
    icon: Award,
    title: 'Premium portfolio',
    description: 'GE Lighting innovation backed by Savant automation to differentiate every install.',
    accent: 'purple',
    badge: 'Exclusive'
  },
  {
    icon: ShoppingBag,
    title: 'Partner Store',
    description: 'Access premium smart lighting with exclusive dealer pricing and priority fulfillment.',
    accent: 'orange',
    isShop: true,
    href: 'https://shop.gelighting.com/',
    features: [
      { icon: ShieldCheck, text: 'Up to 40% off MSRP', highlight: 'Dealer Pricing' },
      { icon: LineChart, text: 'Fast-track orders', highlight: 'Priority Support' },
      { icon: Sparkles, text: 'Latest innovations', highlight: 'Premium Products' }
    ]
  }
]

const accentStyles = {
  blue: 'border-blue-200 hover:border-blue-300',
  green: 'border-green-200 hover:border-green-300',
  purple: 'border-purple-200 hover:border-purple-300',
  orange: 'border-orange-200 hover:border-orange-300'
}

function PillarsSectionComponent() {
  return (
    <section id="about" className="relative bg-white py-24 text-slate-900">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Partner pillars"
          title="Everything you need to succeed"
          description="Support, portfolio, and exclusive access—unified in one partnership."
          align="center"
          className="max-w-2xl mx-auto"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Left Column - Stacked Pillars */}
          <div className="space-y-4">
            {pillars.filter(pillar => !pillar.isShop).map((pillar) => (
              <motion.article
                key={pillar.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -2 }}
                className={`
                  group relative rounded-2xl border p-6 transition-all duration-300 bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md ${accentStyles[pillar.accent as keyof typeof accentStyles]}
                `}
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 bg-current/10 group-hover:scale-110">
                    <pillar.icon className="h-6 w-6" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {pillar.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-100/80 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Column - Minimalist Partner Store Card */}
          {pillars.filter(pillar => pillar.isShop).map((pillar) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -2 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-slate-200">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {pillar.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-700">Up to 40% dealer pricing</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-slate-700">Priority fulfillment</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  <span className="text-slate-700">Latest innovations</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-slate-900">Visit Store</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-600" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Supporting info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Up to 40% dealer discounts • Priority fulfillment • 24/7 technical support
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export const PillarsSection = PillarsSectionComponent
