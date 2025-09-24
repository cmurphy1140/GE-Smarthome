'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, LineChart, ShoppingBag, ExternalLink, Star, ArrowRight, Users, Clock, Award } from 'lucide-react'
import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import { fadeInUp, staggerChildren } from '../common/OptimizedMotion'

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

          {/* Right Column - Large Partner Store Card */}
          {pillars.filter(pillar => pillar.isShop).map((pillar) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-2xl border p-8 transition-all duration-300 bg-gradient-to-br from-slate-900 to-blue-950 border-slate-700 text-white cursor-pointer min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 bg-white/10 backdrop-blur-sm text-white group-hover:scale-110 mb-6">
                  <pillar.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-300 mb-6">
                  {pillar.description}
                </p>

                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-medium text-emerald-300">
                    Partner Exclusive
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Dealer Pricing</p>
                      <p className="text-xs text-slate-300">Up to 40% off MSRP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20">
                      <LineChart className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Priority Support</p>
                      <p className="text-xs text-slate-300">Fast-track orders</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  <div>
                    <p className="text-white font-semibold text-lg mb-1 flex items-center gap-2">
                      Visit Partner Store
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </p>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      Start shopping with exclusive access
                    </p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Supporting info */}
        <motion.div
          variants={fadeIn}
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

export const PillarsSection = memo(PillarsSectionComponent)
