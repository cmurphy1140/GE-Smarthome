'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Lightbulb,
  Home,
  Smartphone,
  Wifi,
  Shield,
  Zap,
  Speaker,
  Thermometer,
  Camera,
  Lock,
  PlayCircle,
  CheckCircle
} from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'

const heroStats = [
  { value: '2K+', label: 'Smart Products' },
  { value: '50M+', label: 'Homes Connected' },
  { value: '99.9%', label: 'Uptime Reliability' }
] as const

const productCategories = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Intelligent bulbs, switches, and controls',
    products: ['LED Smart Bulbs', 'Dimmer Switches', 'Light Strips', 'Outdoor Fixtures'],
    highlight: 'Voice & App Control',
    mockImage: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Smart+Lighting'
  },
  {
    icon: Home,
    title: 'Home Automation',
    description: 'Whole-home orchestration and scenes',
    products: ['Hub Controllers', 'Scene Programming', 'Automation Rules', 'Smart Schedules'],
    highlight: 'Savant Integration',
    mockImage: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Home+Automation'
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Smart thermostats and HVAC integration',
    products: ['Smart Thermostats', 'Zone Control', 'Energy Monitoring', 'HVAC Integration'],
    highlight: 'Energy Savings',
    mockImage: 'https://via.placeholder.com/300x200/F97316/FFFFFF?text=Climate+Control'
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description: 'Cameras, locks, and monitoring systems',
    products: ['Security Cameras', 'Smart Door Locks', 'Motion Sensors', 'Door Stations'],
    highlight: 'Professional Grade',
    mockImage: 'https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Security+Access'
  },
  {
    icon: Speaker,
    title: 'Audio & Entertainment',
    description: 'Whole-home audio and media distribution',
    products: ['Bluetooth Speakers', 'Multi-Room Audio', 'Media Streaming', 'Voice Control'],
    highlight: 'Premium Sound',
    mockImage: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Audio+Entertainment'
  },
  {
    icon: Wifi,
    title: 'Networking & Connectivity',
    description: 'Robust mesh networks and IoT connectivity',
    products: ['Mesh Routers', 'Network Switches', 'IoT Gateways', 'Cloud Services'],
    highlight: 'Enterprise Grade',
    mockImage: 'https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Networking'
  }
] as const

const capabilities = [
  {
    icon: Smartphone,
    title: 'Mobile Control',
    description: 'Control everything from your smartphone with our intuitive mobile app'
  },
  {
    icon: Zap,
    title: 'Energy Management',
    description: 'Monitor and optimize energy usage with intelligent load management'
  },
  {
    icon: PlayCircle,
    title: 'Scene Automation',
    description: 'Create custom scenes and automation rules for any situation'
  },
  {
    icon: CheckCircle,
    title: 'Professional Installation',
    description: 'Expert installation and ongoing support from certified professionals'
  }
] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.17, 0.67, 0.35, 1] } }
} as const

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
} as const

function SmartHomeShowcaseHero() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 })

  const heroBackgroundStyles = {
    backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(8, 11, 24, 0.65)), url(/smarthome-hero.png), linear-gradient(135deg, #1e293b, #0f172a)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#1e293b'
  }

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden py-28 text-white md:py-36"
      style={heroBackgroundStyles}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div className="space-y-8">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/90"
            >
              Smart Home Experience
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              The Future of Smart Living
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-blue-100 md:text-xl"
            >
              Experience the complete GE Smart Home ecosystem. From intelligent lighting to whole-home automation, discover how our products transform everyday living.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/program-tiers"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1 hover:bg-white/20"
              >
                View Program Tiers
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-4 sm:grid-cols-3"
            >
              {heroStats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white lg:text-3xl">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wide text-blue-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <Image
                src="https://via.placeholder.com/400x600/3B82F6/FFFFFF?text=Smart+Bulb"
                alt="GE Smart Bulb"
                width={400}
                height={600}
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function SmartHomeExperiencePage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const currentCategory = productCategories[activeCategory]
  const CurrentIcon = currentCategory.icon

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.smartHomeExperience} />
        </div>
        <SmartHomeShowcaseHero />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Product Categories"
            title={<span className="text-blue-950">Complete Smart Home Portfolio</span>}
            description="Explore our comprehensive range of smart home products designed to work seamlessly together."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  onClick={() => setActiveCategory(index)}
                >
                  <div className="relative mb-4">
                    <Image
                      src={category.mockImage}
                      alt={`${category.title} Image`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-950">{category.title}</h3>
                      <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        <CheckCircle className="h-3 w-3" />
                        {category.highlight}
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-4">{category.description}</p>

                  <div className="space-y-2">
                    {category.products.map(product => (
                      <div key={product} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-neutral-700">{product}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-right">
                    <ArrowRight className="h-4 w-4 text-blue-600 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 text-white lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4 lg:text-4xl">
                  Smart Home Capabilities That Matter
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Our smart home ecosystem goes beyond individual products to deliver integrated experiences that enhance daily life.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {capabilities.map(capability => {
                    const IconComponent = capability.icon
                    return (
                      <div key={capability.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{capability.title}</h4>
                          <p className="text-sm text-blue-100">{capability.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://via.placeholder.com/600x400/1E293B/FFFFFF?text=Smart+Home+Setup"
                  alt="Smart Home Setup"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-blue-950 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join our partner network and start offering cutting-edge smart home solutions to your customers.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/learn-about-ge-smart-home"
                className="inline-flex items-center gap-3 rounded-full border border-blue-600 px-8 py-4 text-base font-semibold text-blue-600 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}