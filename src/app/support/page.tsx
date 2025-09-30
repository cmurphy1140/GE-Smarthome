'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Headphones,
  MessageCircle,
  Users,
  BookOpen,
  Award,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/common/SectionHeader'
import { Breadcrumb, breadcrumbConfigs } from '@/components/ui/Breadcrumb'

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Direct access to technical experts',
    availability: '24/7 Emergency Support',
    details: 'Priority phone support for critical issues and technical troubleshooting'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant help when you need it',
    availability: 'Business Hours',
    details: 'Real-time chat support for quick questions and guidance'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed technical assistance',
    availability: '24/7',
    details: 'Comprehensive email support with detailed technical documentation'
  },
  {
    icon: Calendar,
    title: 'Scheduled Consultations',
    description: 'One-on-one expert sessions',
    availability: 'By Appointment',
    details: 'Dedicated time with specialists for complex projects and training'
  }
] as const

const supportFeatures = [
  {
    icon: Headphones,
    title: 'Technical Troubleshooting',
    description: 'Expert assistance with installation, configuration, and integration challenges'
  },
  {
    icon: BookOpen,
    title: 'Training Resources',
    description: 'Comprehensive guides, videos, and documentation for all skill levels'
  },
  {
    icon: Users,
    title: 'Community Forums',
    description: 'Connect with other professionals and share best practices'
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Official training programs to validate your expertise'
  }
] as const

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main className="space-y-24 pb-24">
        <div className="container-padding pt-6">
          <Breadcrumb items={breadcrumbConfigs.support} />
        </div>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="24/7 Support"
            title={<span className="text-blue-950">Always-on expertise when you need it</span>}
            description="Comprehensive support channels ensure you have the help you need, when you need it, to deliver exceptional customer experiences."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <motion.div
                  key={channel.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-950">{channel.title}</h3>
                      <p className="mt-1 text-sm text-blue-600 font-medium">{channel.availability}</p>
                      <p className="mt-2 text-sm text-neutral-600">{channel.description}</p>
                      <p className="mt-3 text-xs text-neutral-500">{channel.details}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Support Features"
            title={<span className="text-blue-950">Comprehensive assistance across all areas</span>}
            description="From technical troubleshooting to training resources, we provide the support you need to succeed."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {supportFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-950 bg-white text-blue-950">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-950">{feature.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-10 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-md font-semibold uppercase tracking-[0.35em] text-white/80">
                Concierge enablement
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">Ready to build your learning roadmap?</h3>
              <p className="text-base leading-relaxed text-neutral-200">
                Share your portfolio and we&apos;ll align the right training path, demo strategy, and integration milestones to accelerate your first year of growth.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition-all duration-200 hover:bg-neutral-100 hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
                <Link
                  href="/enablement"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
                >
                  Training Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
