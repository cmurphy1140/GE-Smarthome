'use client'

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React, { memo, useState, useEffect, useRef } from 'react'

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

// Design.md: Product Card Pattern with specific metrics and exclusivity
const geProducts = [
  {
    id: 1,
    name: 'Cync Full Color Smart Bulbs',
    description: 'Full color spectrum with voice control and Matter compatibility',
    image: '/cync-bulb.png',
    category: 'Smart Lighting',
    msrp: '$24.99',
    dealerPrice: '$14.99',
    margin: '40%',
    exclusive: true,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Cync Soft White Smart Bulbs',
    description: 'Simple setup with Alexa compatibility and energy efficiency',
    image: '/soft-white.png',
    category: 'Smart Lighting',
    msrp: '$19.99',
    dealerPrice: '$11.99',
    margin: '40%',
    exclusive: false,
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'GE LED+ Dimmable Smart Bulb',
    description: 'Energy efficient with remote control and scheduling',
    image: '/led-light.png',
    category: 'Smart LED',
    msrp: '$22.99',
    dealerPrice: '$13.79',
    margin: '40%',
    exclusive: true,
    badge: 'Exclusive'
  },
  {
    id: 4,
    name: 'Cync Smart Thermostat',
    description: 'Wi-Fi enabled with scheduling and geofencing',
    image: '/thermostat.png',
    category: 'Smart Climate',
    msrp: '$199.99',
    dealerPrice: '$119.99',
    margin: '40%',
    exclusive: true,
    badge: 'Premium'
  }
]

export const PartnerStoreSection = memo(function PartnerStoreSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const imageRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Mouse position for ambient glow
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // 3D tilt effect
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 })

  // Handle mouse move for 3D tilt and ambient glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !sectionRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Ripple effect handler
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples(prev => [...prev, { x, y, id }])

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id))
    }, 600)
  }

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
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Design.md: Ambient glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${50 + (x as number) * 20}% ${50 + (y as number) * 20}%, rgba(59, 130, 246, 0.15), transparent 40%)`
          )
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Design.md: Section Header Pattern - Premium membership club feel */}
          <motion.div variants={fadeInUp} className="mb-16">
            <span className="text-micro font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Exclusive Access
            </span>
            <h2 className="text-display font-bold text-gray-900 mb-6">
              Partner Store
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access exclusive dealer pricing, limited-edition products, and premium support. 
              Join the elite network of smart home professionals.
            </p>
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
                {/* Left arrow with ripple */}
                <button
                  onClick={(e) => {
                    createRipple(e)
                    paginate(-1)
                  }}
                  className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-110 hover:shadow-xl z-10"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-900 relative z-10" />
                  {/* Ripple effects */}
                  {ripples.map(ripple => (
                    <motion.span
                      key={ripple.id}
                      className="absolute rounded-full bg-blue-400"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        width: 100,
                        height: 100,
                        opacity: [0.5, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  ))}
                </button>

                {/* Product Image with 3D tilt */}
                <div
                  ref={imageRef}
                  className="relative h-96 w-96 flex items-center justify-center perspective-1000"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
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
                      style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
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
                        style={{ transform: "translateZ(50px)" }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right arrow with ripple */}
                <button
                  onClick={(e) => {
                    createRipple(e)
                    paginate(1)
                  }}
                  className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-blue-50 hover:scale-110 hover:shadow-xl z-10"
                  aria-label="Next product"
                >
                  <ChevronRight className="h-6 w-6 text-gray-900 relative z-10" />
                  {/* Ripple effects */}
                  {ripples.map(ripple => (
                    <motion.span
                      key={ripple.id}
                      className="absolute rounded-full bg-blue-400"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        width: 100,
                        height: 100,
                        opacity: [0.5, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  ))}
                </button>
              </div>

              {/* Design.md: Product Card Pattern - Image, title, price (MSRP struck, dealer price), margin percentage badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 space-y-6"
                >
                  {/* Design.md: Category badge + Exclusive badge */}
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-small font-medium text-primary-800">
                      {currentProduct.category}
                    </span>
                    {currentProduct.exclusive && (
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-primary-500 px-4 py-2 text-small font-semibold text-white shadow-glow">
                        Exclusive
                      </span>
                    )}
                    <span className="inline-flex items-center rounded-full bg-success-100 px-4 py-2 text-small font-semibold text-success-800">
                      {currentProduct.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-heading font-bold text-gray-900">
                    {currentProduct.name}
                  </h4>
                  <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {currentProduct.description}
                  </p>
                  
                  {/* Design.md: Price (MSRP struck, dealer price) + Margin percentage badge */}
                  <div className="flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="text-small text-gray-500 mb-1">MSRP</div>
                      <div className="text-lg text-gray-400 line-through">
                        {currentProduct.msrp}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-small text-gray-500 mb-1">Dealer Price</div>
                      <div className="text-2xl font-bold text-success-600">
                        {currentProduct.dealerPrice}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-small text-gray-500 mb-1">Your Margin</div>
                      <div className="text-xl font-bold text-primary-600">
                        {currentProduct.margin}
                      </div>
                    </div>
                  </div>
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

            {/* Design.md: Primary CTA - "See Exclusive Pricing" not "View Products" */}
            <motion.div variants={fadeInUp} className="mt-12">
              <a
                href="https://www.gelighting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-floating transition-all duration-300 hover:bg-primary-700 hover:-translate-y-1 hover:shadow-modal"
              >
                See Exclusive Pricing
                <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
            
            {/* Design.md: Social Proof - "Limited spots in Q1 training cohort" */}
            <motion.div variants={fadeInUp} className="mt-8">
              <div className="inline-flex items-center gap-2 text-small text-gray-500">
                <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse"></div>
                <span>Limited spots in Q1 training cohort</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

