'use client'

import { Sparkles, ShieldCheck, LineChart, ShoppingBag, ArrowRight, Users, Clock, Award, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useState, useEffect } from 'react'
import Image from 'next/image'

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

const geProducts = [
  {
    id: 1,
    name: 'Cync Full Color Smart Bulbs',
    description: 'Full color spectrum smart bulbs with direct connect technology and voice control',
    image: '/cync-bulb.png',
    category: 'Smart Lighting',
    price: '$49.99',
    dealerPrice: '$29.99'
  },
  {
    id: 2,
    name: 'Cync Soft White Smart Bulbs',
    description: 'Soft white smart bulbs with simple setup and Alexa/Google compatibility',
    image: '/soft-white.png',
    category: 'Smart Lighting',
    price: '$39.99',
    dealerPrice: '$23.99'
  },
  {
    id: 3,
    name: 'GE LED+ Dimmable Smart Bulb',
    description: 'Bright dimmable smart LED with remote control and energy efficiency',
    image: '/led-light.png',
    category: 'Smart LED',
    price: '$34.99',
    dealerPrice: '$20.99'
  }
]


function PillarsSectionComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % geProducts.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const currentProduct = geProducts[currentSlide]

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
              <article
                key={pillar.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 bg-slate-100 group-hover:bg-blue-100 group-hover:scale-110">
                    <pillar.icon className="h-6 w-6 text-slate-500 group-hover:text-blue-500" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-900">
                      {pillar.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-md font-medium text-blue-800 border border-blue-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 group-hover:text-slate-800">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - Enhanced Partner Store Card with Product Carousel */}
          {pillars.filter(pillar => pillar.isShop).map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(30,58,138,0.4)]"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blue-800/10 via-blue-900/5 to-transparent" />

              {/* Floating orbs animation */}
              <div className="absolute top-4 right-4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-150" />
              <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500/15 to-blue-700/15 blur-lg opacity-40 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-125" />

              {/* Header Section */}
              <div className="relative p-10 pb-6">
                <div className="relative flex items-start justify-between mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm text-blue-300 transition-all duration-500 group-hover:bg-blue-400/30 group-hover:border-blue-300/50 group-hover:scale-110 group-hover:text-blue-200">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5 text-blue-300 hover:text-blue-200 transition-colors duration-300" />
                  </a>
                </div>

                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-100 transition-all duration-300 tracking-tight leading-tight">
                  {pillar.title}
                </h3>

                <p className="text-blue-200/80 mb-6 text-lg leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>

              {/* Product Carousel Section */}
              <div className="relative px-10 pb-4">
                <div className="relative bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/30">

                  {/* Product Slide */}
                  <div
                    key={currentProduct.id}
                    className="flex items-center gap-6"
                  >
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-48 h-48 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10" />
                        <div className="absolute inset-3 flex items-center justify-center">
                          <Image
                            src={currentProduct.image}
                            alt={currentProduct.name}
                            width={160}
                            height={160}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-400/20">
                            {currentProduct.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1 truncate">
                          {currentProduct.name}
                        </h4>
                        <p className="text-sm text-blue-200/70 mb-2 line-clamp-2">
                          {currentProduct.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-blue-300/60 line-through">
                            {currentProduct.price}
                          </span>
                          <span className="text-base font-bold text-emerald-400">
                            {currentProduct.dealerPrice}
                          </span>
                        </div>
                      </div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {geProducts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-blue-400 shadow-lg shadow-blue-400/50 scale-125'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="px-10 pb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm group/item">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-400/50 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-blue-100/80 group-hover:text-white transition-colors duration-300 font-medium">Up to 40% dealer pricing</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm group/item">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-400/50 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-blue-100/80 group-hover:text-white transition-colors duration-300 font-medium">Priority fulfillment</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm group/item">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-400/50 group-hover/item:scale-125 transition-transform duration-300" />
                    <span className="text-blue-100/80 group-hover:text-white transition-colors duration-300 font-medium">Latest innovations</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-10 pb-10">
                <a
                  href={pillar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5 backdrop-blur-sm transition-all duration-500 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group/cta">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover/cta:opacity-100 transition-all duration-500 animate-pulse" />
                    <div className="relative flex items-center justify-between">
                      <span className="text-lg font-bold tracking-wide text-white drop-shadow-sm">Visit Partner Store</span>
                      <ArrowRight className="h-6 w-6 text-blue-100 transition-all duration-500 group-hover/cta:translate-x-3 group-hover/cta:text-white group-hover/cta:scale-110" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Interactive glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        {/* Supporting info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Up to 40% dealer discounts • Priority fulfillment • 24/7 technical support
          </p>
        </div>
      </div>
    </section>
  )
}

export const PillarsSection = PillarsSectionComponent
