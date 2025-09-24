'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, LineChart, ShoppingBag, ExternalLink, Star } from 'lucide-react'
import { memo } from 'react'
import { SectionHeader } from '../common/SectionHeader'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Dedicated strategist',
    description: '1:1 guidance from onboarding through expansion with regional expertise.',
    accent: 'blue'
  },
  {
    icon: LineChart,
    title: '24/7 support',
    description: 'Priority access to technical specialists and rapid-response troubleshooting.',
    accent: 'green'
  },
  {
    icon: Sparkles,
    title: 'Premium portfolio',
    description: 'GE Lighting innovation backed by Savant automation to differentiate every install.',
    accent: 'purple'
  },
  {
    icon: ShoppingBag,
    title: 'Partner store',
    description: 'Exclusive dealer pricing and priority fulfillment for premium smart lighting.',
    accent: 'orange',
    isShop: true,
    href: 'https://shop.gelighting.com/'
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.6, 0.3, 1] }
  }
} as const

const accentStyles = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100',
  orange: 'bg-orange-50 text-orange-600 border-orange-100'
} as const


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

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Component = pillar.isShop ? motion.a : motion.article

            return (
              <Component
                key={pillar.title}
                href={pillar.isShop ? pillar.href : undefined}
                target={pillar.isShop ? "_blank" : undefined}
                rel={pillar.isShop ? "noopener noreferrer" : undefined}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover={pillar.isShop ? { y: -4, scale: 1.02 } : { y: -2 }}
                className={`
                  group relative rounded-2xl border p-6 transition-all duration-300
                  ${pillar.isShop
                    ? 'bg-gradient-to-br from-slate-900 to-blue-950 border-slate-700 text-white cursor-pointer'
                    : `bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md ${accentStyles[pillar.accent as keyof typeof accentStyles]}`
                  }
                `}
              >
                {pillar.isShop && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
                )}

                <div className="relative">
                  <div className={`
                    flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300
                    ${pillar.isShop
                      ? 'bg-white/10 backdrop-blur-sm text-white group-hover:scale-110'
                      : 'bg-current/10 group-hover:scale-110'
                    }
                  `}>
                    <pillar.icon className="h-6 w-6" />
                  </div>

                  <h3 className={`mt-4 text-lg font-semibold ${pillar.isShop ? 'text-white' : 'text-slate-900'}`}>
                    {pillar.title}
                  </h3>

                  <p className={`mt-2 text-sm leading-relaxed ${pillar.isShop ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pillar.description}
                  </p>

                  {pillar.isShop && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-300">
                        Partner Exclusive
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  )}

                  {pillar.isShop && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                      <span>Visit store</span>
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  )}
                </div>
              </Component>
            )
          })}
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
