'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Lightbulb, Home, Zap, HelpCircle } from 'lucide-react'
import { SectionHeader } from '@/components/common/SectionHeader'
import FaqPopup from '@/components/ui/FaqPopup'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isFaqOpen, setIsFaqOpen] = useState(false)

const features = [
  {
    icon: Lightbulb,
    title: 'Heritage',
    description: 'Founded by Edison in 1878, GE has illuminated the world for 140+ years. We now pioneer smart lighting that blends traditional craftsmanship with modern technology.'
  },
  {
    icon: Zap,
    title: 'Intelligence', 
    description: 'Savant created the world\'s most intuitive smart home platform since 2005. Their AI learns your routines to deliver personalized comfort automatically.'
  },
  {
    icon: Home,
    title: 'Integration',
    description: 'GE lighting meets Savant automation in one powerful ecosystem. This platform connects all home systems through a single intelligent interface.'
  }
]

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
        <SectionHeader
          title="Smart. Simple. Seamless."
          variant="dark"
        />          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group rounded-xl bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-bold text-white">
                  {feature.title}
                </h4>
                <p className="text-base text-blue-50 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Floating FAQ Bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsFaqOpen(true)}
          className="group flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-blue-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-800 hover:to-blue-900 hover:shadow-3xl"
        >
          <HelpCircle className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
          <div className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-xl">
            FAQ
            <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-slate-900"></div>
          </div>
        </div>
      </div>

      <FaqPopup isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </section>
  )
}
