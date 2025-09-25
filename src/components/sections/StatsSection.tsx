'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { memo } from 'react'

import { AnimatedNumber } from '../ui/AnimatedNumber'

const stats = [
  { value: 280, suffix: '+', label: 'Active partners' },
  { value: 2.5, prefix: '$', suffix: 'M+', label: 'Incentives paid', decimals: 1 },
  { value: 48, suffix: ' hr', label: 'Average onboarding' }
] as const

function StatsSectionComponent() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            <span className="text-md font-semibold uppercase tracking-[0.35em] text-blue-300">
              Professional partnership
            </span>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Join the GE Smart Home network
            </h2>
            <p className="text-sm leading-relaxed text-blue-100 md:text-base lg:text-lg">
              Connect with a community of Smart Home professionals backed by GE Lighting&apos;s 140+ years of innovation and Savant&apos;s cutting-edge automation technology.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map(item => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/20 bg-white/10 p-6 text-center shadow-[0_14px_30px_rgba(8,11,24,0.35)] backdrop-blur min-h-[160px] flex flex-col justify-center transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-[0_20px_40px_rgba(8,11,24,0.45)]"
                >
                  <div className="flex-1 flex items-center justify-center">
                    <AnimatedNumber
                      value={item.value}
                      prefix={'prefix' in item ? item.prefix : undefined}
                      suffix={item.suffix}
                      decimals={'decimals' in item ? item.decimals : 0}
                      className="text-2xl font-bold text-white sm:text-3xl md:text-4xl drop-shadow-lg leading-none"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-blue-200 sm:text-sm font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/ge-smart-team.png"
                alt="GE Smart Home team collaboration"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const StatsSection = memo(StatsSectionComponent)