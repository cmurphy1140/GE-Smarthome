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

// Removed unused accentStyles as we now use glass morphism

function PillarsSectionComponent() {
  // Updated with glass morphism and dark blue background
  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 py-24 text-slate-900 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrowNode={(
            <span className="inline-flex rounded-full bg-white px-1.5 py-0.5 shadow-[0_12px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
              <span className="inline-flex items-center rounded-full border border-blue-900/20 px-5 py-1 text-sm font-semibold uppercase tracking-[0.45em] text-slate-800">
                Partner Pillars
              </span>
            </span>
          )}
          title="Everything you need to succeed"
          description="Support, portfolio, and exclusive access—unified in one partnership."
          align="center"
          className="max-w-2xl mx-auto"
        />

        {/* Dark blue background square - TEST */}
        <div className="absolute inset-0 top-[40%] bottom-[10%] left-[5%] right-[5%] bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-950/80 rounded-3xl backdrop-blur-sm shadow-2xl border border-blue-700/30 -z-10" />


        <div className="mt-16 grid gap-6 lg:grid-cols-2 relative z-10">
          {/* Left Column - Stacked Pillars */}
          <div className="space-y-4">
            {pillars.filter(pillar => !pillar.isShop).map((pillar) => (
              <motion.article
                key={pillar.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -3 }}
                className={`
                  group relative rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl backdrop-saturate-150 p-6 shadow-xl shadow-black/10 transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:bg-white/25
                `}
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/20 text-blue-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-950/30">
                    <pillar.icon className="h-6 w-6" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-blue-950">
                      {pillar.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-950/10 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-base leading-relaxed text-blue-900 font-medium">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Column - Partner Store Section (No Card Design) */}
          {pillars.filter(pillar => pillar.isShop).map((pillar) => (
            <div key={pillar.title} className="relative">
              {/* Header Section */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-blue-950 shadow-lg backdrop-blur-sm border border-white/50">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-sm">
                      {pillar.title}
                    </h3>
                    <p className="text-blue-50 text-sm font-semibold">Premium smart lighting access</p>
                  </div>
                </div>
                <p className="text-white text-base leading-relaxed font-medium drop-shadow-sm">
                  {pillar.description}
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="grid gap-4 mb-8"
              >
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/40 text-emerald-200 mt-1 border border-emerald-400/30">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 drop-shadow-sm">Dealer Pricing</h4>
                    <p className="text-blue-50 text-base font-semibold">Up to 40% off MSRP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/40 text-blue-200 mt-1 border border-blue-400/30">
                    <LineChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 drop-shadow-sm">Priority Support</h4>
                    <p className="text-blue-50 text-base font-semibold">Fast-track orders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/25 backdrop-blur-sm border border-white/40 shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/40 text-purple-200 mt-1 border border-purple-400/30">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 drop-shadow-sm">Premium Products</h4>
                    <p className="text-blue-50 text-base font-semibold">Latest innovations</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href={pillar.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-white to-blue-50 px-8 py-5 text-lg font-bold text-blue-950 shadow-2xl transition-all duration-300 hover:shadow-[0_24px_48px_rgba(255,255,255,0.4)] hover:from-blue-50 hover:to-white border-2 border-white/50"
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="text-xl">Visit Partner Store</span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                <ExternalLink className="h-5 w-5 opacity-80" />
              </motion.a>
            </div>
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
          <p className="text-base text-slate-600 font-medium">
            Up to 40% dealer discounts • Priority fulfillment • 24/7 technical support
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export const PillarsSection = PillarsSectionComponent
