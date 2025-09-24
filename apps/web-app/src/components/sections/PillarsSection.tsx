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
    <section id="about" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Partner pillars"
          title="Everything you need to succeed"
          description="Support, portfolio, and exclusive access—unified in one partnership."
          align="center"
          className="max-w-2xl mx-auto text-white"
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
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 bg-white/10 group-hover:bg-white/20 group-hover:scale-110">
                    <pillar.icon className="h-6 w-6 text-blue-300 group-hover:text-white" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-100">
                      {pillar.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-200 border border-blue-400/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80 group-hover:text-white/90">
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
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 shadow-2xl transition-all duration-500 hover:border-blue-300/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-blue-300 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:text-white">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-blue-300 transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-blue-100/80 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {pillar.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Up to 40% dealer pricing</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Priority fulfillment</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50" />
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Latest innovations</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="relative overflow-hidden rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-blue-600/10 px-6 py-4 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-gradient-to-r group-hover:from-blue-400/30 group-hover:to-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-sm font-bold tracking-wide text-white">Visit Partner Store</span>
                    <ArrowRight className="h-5 w-5 text-blue-300 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white" />
                  </div>
                </div>
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
          <p className="text-sm text-blue-200/70 font-medium">
            Up to 40% dealer discounts • Priority fulfillment • 24/7 technical support
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export const PillarsSection = PillarsSectionComponent
