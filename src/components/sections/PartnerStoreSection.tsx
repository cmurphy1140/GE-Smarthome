'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react'
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8
  })
}

const geProducts = [
  {
    id: 1,
    name: 'Cync Full Color Smart Bulbs',
    description: 'Full color spectrum with voice control',
    image: '/cync-bulb.png',
    category: 'Smart Lighting',
    dealerPrice: 'Up to 40% off'
  },
  {
    id: 2,
    name: 'Cync Soft White Smart Bulbs',
    description: 'Simple setup with Alexa compatibility',
    image: '/soft-white.png',
    category: 'Smart Lighting',
    dealerPrice: 'Up to 40% off'
  },
  {
    id: 3,
    name: 'GE LED+ Dimmable Smart Bulb',
    description: 'Energy efficient with remote control',
    image: '/led-light.png',
    category: 'Smart LED',
    dealerPrice: 'Up to 40% off'
  },
  {
    id: 4,
    name: 'Cync Smart Thermostat',
    description: 'Wi-Fi enabled with scheduling',
    image: '/thermostat.png',
    category: 'Smart Climate',
    dealerPrice: 'Up to 40% off'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % geProducts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => {
      const next = prev + newDirection
      if (next >= geProducts.length) return 0
      if (next < 0) return geProducts.length - 1
      return next
    })
  }

  const currentProduct = geProducts[currentSlide]

  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          </motion.div>

          {/* Dynamic Product Showcase */}
          <div 
            className="relative mx-auto max-w-5xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background animated gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl"
              />
            </div>

            {/* Product Display Area */}
            <div className="relative py-16">
              {/* Animated floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-10 opacity-20"
              >
                <Sparkles className="h-12 w-12 text-blue-600" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-10 right-10 opacity-20"
              >
                <ShieldCheck className="h-12 w-12 text-blue-600" />
              </motion.div>

              {/* Product Carousel */}
              <div className="relative flex items-center justify-center gap-8">
                {/* Left arrow */}
                <button
                  onClick={() => paginate(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-110 hover:shadow-xl z-10"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-900" />
                </button>

                {/* Product Image with AnimatePresence */}
                <div className="relative h-96 w-96 flex items-center justify-center">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentProduct.id}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 }
                      }}
                      className="absolute"
                    >
                      <Image
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        width={360}
                        height={360}
                        className="object-contain drop-shadow-2xl"
                        priority={currentSlide === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right arrow */}
                <button
                  onClick={() => paginate(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-110 hover:shadow-xl z-10"
                  aria-label="Next product"
                >
                  <ChevronRight className="h-6 w-6 text-gray-900" />
                </button>
              </div>

              {/* Product Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 space-y-4"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
                      {currentProduct.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-800">
                      {currentProduct.dealerPrice}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900">
                    {currentProduct.name}
                  </h4>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {currentProduct.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="mt-12 flex justify-center gap-3">
                {geProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1)
                      setCurrentSlide(index)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'h-3 w-12 bg-blue-600 shadow-lg shadow-blue-600/50'
                        : 'h-3 w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View product ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Store CTA */}
            <motion.div variants={fadeInUp} className="mt-12">
              <a
                href="https://www.gelighting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Visit Partner Store
                <ExternalLink className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

