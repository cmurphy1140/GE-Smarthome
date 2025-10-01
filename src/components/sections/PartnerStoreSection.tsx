'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React, { memo, useState, useEffect } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const geProducts = [
  {
    id: 1,
    name: 'Cync Full Color Smart Bulbs',
    description: 'Full color spectrum with voice control',
    image: '/cync-bulb.png',
    category: 'Smart Lighting'
  },
  {
    id: 2,
    name: 'Cync Soft White Smart Bulbs',
    description: 'Simple setup with Alexa compatibility',
    image: '/soft-white.png',
    category: 'Smart Lighting'
  },
  {
    id: 3,
    name: 'GE LED+ Dimmable Smart Bulb',
    description: 'Energy efficient with remote control',
    image: '/led-light.png',
    category: 'Smart LED'
  },
  {
    id: 4,
    name: 'Cync Smart Thermostat',
    description: 'Wi-Fi enabled with scheduling',
    image: '/thermostat.png',
    category: 'Smart Climate'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % geProducts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentProduct = geProducts[currentSlide]

  return (
    <section className="relative bg-gray-50 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Partner Benefits
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl">
              Partner Store
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 leading-relaxed">
              Access premium smart lighting with exclusive dealer pricing and priority fulfillment.
            </p>
          </motion.div>

          {/* Product Slideshow Card - 3D Effect */}
          <motion.div
            variants={fadeInUp}
            className="relative mx-auto max-w-4xl"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Card with shadows */}
            <div 
              className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 p-12 shadow-2xl transition-all duration-300 hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.5)]"
              style={{
                transform: 'rotateX(2deg) rotateY(-2deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 3D depth layers */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-800/20 to-blue-950/20 blur-xl" 
                   style={{ transform: 'translateZ(-10px)' }} />
              <div className="absolute inset-0 rounded-3xl bg-blue-600/10" 
                   style={{ transform: 'translateZ(-5px)' }} />
              
              {/* Main content */}
              <div className="relative" style={{ transform: 'translateZ(20px)' }}>
                <div key={currentProduct.id} className="flex flex-col items-center">
                  {/* Product Image - Larger */}
                  <div className="relative mb-8 h-80 w-80 md:h-96 md:w-96">
                    <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm shadow-inner" />
                    <div className="absolute inset-2 flex items-center justify-center">
                      <Image
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        width={360}
                        height={360}
                        className="object-contain transition-all duration-500 hover:scale-110"
                        priority={currentSlide === 0}
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 border border-blue-400/20 shadow-sm">
                      {currentProduct.category}
                    </span>
                  </div>
                  <h4 className="mb-3 text-2xl font-bold text-white drop-shadow-lg">
                    {currentProduct.name}
                  </h4>
                  <p className="mb-8 text-lg text-blue-200/80">
                    {currentProduct.description}
                  </p>

                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2">
                    {geProducts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-blue-400 shadow-lg shadow-blue-400/50 scale-125'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`View product ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Store CTA */}
                <div className="mt-8">
                  <a
                    href="https://www.gelighting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-950 shadow-lg transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    Visit Partner Store
                    <ExternalLink className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

