'use client'

import { Sparkles, ShieldCheck, LineChart, ShoppingBag, ArrowRight, Users, Clock, Award, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const pillars = [
  {
    icon: Users,
    title: 'Dedicated strategist',
    description: 'Get personalized 1:1 guidance from onboarding through expansion with regional expertise. Your dedicated strategist will help you navigate the GE Smart Home ecosystem, identify growth opportunities, and develop custom solutions tailored to your market and customer base.',
    accent: 'blue',
    badge: 'Personal'
  },
  {
    icon: Clock,
    title: '24/7 support',
    description: 'Enjoy priority access to technical specialists and rapid-response troubleshooting around the clock. Our expert support team is always available to help resolve issues quickly, ensuring your installations run smoothly and your customers stay satisfied.',
    accent: 'green',
    badge: 'Always On'
  },
  {
    icon: Award,
    title: 'Premium portfolio',
    description: 'Access GE Lighting innovation backed by Savant automation to differentiate every install. Our premium product portfolio includes cutting-edge smart lighting solutions, advanced automation systems, and exclusive technologies that set your business apart from competitors.',
    accent: 'purple',
    badge: 'Exclusive'
  },
  {
    icon: ShoppingBag,
    title: 'Partner Store',
    description: 'Access premium smart lighting with exclusive dealer pricing and priority fulfillment.',
    accent: 'orange',
    isShop: true,
    href: 'https://shop.gelighting.com/?gclsrc=aw.ds&gad_source=1&gad_campaignid=22976127503&gbraid=0AAAAACbsKFA1kPDpDd89zSdSxBhGBDbfu&gclid=Cj0KCQjw0NPGBhCDARIsAGAzpp3LOSatAdoZpwc2GjrIkxC8OAEJ-EtpNNxDw6LUODxhk-QwugUxAiUaArpBEALw_wcB',
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
  },
  {
    id: 4,
    name: 'Cync Smart Thermostat',
    description: 'Wi-Fi enabled smart thermostat with voice control and scheduling features',
    image: '/thermostat.png',
    category: 'Smart Climate',
    price: '$129.99',
    dealerPrice: '$77.99'
  },
  {
    id: 5,
    name: 'Cync Solar Panel Accessory',
    description: 'Sustainable solar panel accessory for outdoor battery cameras',
    image: '/solor-panal.png',
    category: 'Solar Accessories',
    price: '$89.99',
    dealerPrice: '$53.99'
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
          <div className="space-y-6">
            {pillars.filter(pillar => !pillar.isShop).map((pillar) => (
              <article
                key={pillar.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 bg-slate-100 group-hover:bg-blue-100 group-hover:scale-110">
                    <pillar.icon className="h-8 w-8 text-slate-500 group-hover:text-blue-500" />
                  </div>

                  <div className="mt-6 flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900">
                      {pillar.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-800 border border-blue-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-slate-600 group-hover:text-slate-800">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - Enhanced Partner Store Card with Product Carousel */}
          {pillars.filter(pillar => pillar.isShop).map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 shadow-2xl transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(30,58,138,0.4)] cursor-pointer block"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:scale-110">
                    <ExternalLink className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
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
                <div className="relative bg-black/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-800/30">

                  {/* Product Slide */}
                  <div
                    key={currentProduct.id}
                    className="flex flex-col items-center gap-6"
                  >
                    {/* Product Image */}
                    <div className="w-64 h-64 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10" />
                      <div className="absolute inset-2 flex items-center justify-center">
                <Image
                  src={currentProduct.image}
                  alt={`${currentProduct.name} - ${currentProduct.description}`}
                  width={240}
                  height={240}
                  className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 240px, 280px"
                  priority={currentProductIndex === 0}
                />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full text-center px-4">
                      <div className="flex justify-center mb-3">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-400/20">
                          {currentProduct.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3 leading-tight">
                        {currentProduct.name}
                      </h4>
                      <p className="text-base text-blue-200/70 mb-4 leading-relaxed">
                        {currentProduct.description}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-base text-blue-300/60 line-through">
                          {currentProduct.price}
                        </span>
                        <span className="text-lg font-bold text-emerald-400">
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
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 shadow-lg">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-400/50" />
                    <span className="text-blue-100 font-medium">Up to 30% off of MSRP pricing</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="px-10 pb-10">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5 backdrop-blur-sm transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-lg font-bold tracking-wide text-white drop-shadow-sm">Visit Partner Store</span>
                    <ArrowRight className="h-6 w-6 text-blue-100 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Interactive glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </a>
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
