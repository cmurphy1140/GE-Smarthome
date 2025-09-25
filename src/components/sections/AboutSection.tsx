'use client'

import { useState } from 'react'
import { Lightbulb, Home, Zap, HelpCircle } from 'lucide-react'
import { SectionHeader } from '@/components/common/SectionHeader'
import FaqPopup from '@/components/ui/FaqPopup'

export function AboutSection() {
  const [isFaqOpen, setIsFaqOpen] = useState(false)

const timelineItems = [
  {
    year: '1878',
    icon: Lightbulb,
    title: 'Heritage',
    description: 'Founded by Edison, GE has illuminated the world for 140+ years. We now pioneer smart lighting that blends traditional craftsmanship with modern technology.'
  },
  {
    year: '2005',
    icon: Zap,
    title: 'Intelligence', 
    description: 'Savant created the world\'s most intuitive Smart Home platform. Their AI learns your routines to deliver personalized comfort automatically.'
  },
  {
    year: 'Today',
    icon: Home,
    title: 'Integration',
    description: 'GE lighting meets Savant automation in one powerful ecosystem. This platform connects all home systems through a single intelligent interface.'
  }
]

  return (
    <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-white py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div>
        <SectionHeader
          title="Smart. Simple. Seamless."
          variant="dark"
        />
        
        {/* Timeline */}
        <div className="mt-10 relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-300 transform -translate-x-1/2"></div>
          
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={item.title} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="inline-block rounded-xl bg-white/90 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white shadow-lg border border-slate-200 max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="text-base font-bold text-blue-600">{item.year}</span>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-slate-700">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 border-4 border-white shadow-xl">
                  <span className="text-base font-bold text-white">{index + 1}</span>
                </div>
                
                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <button
        onClick={() => setIsFaqOpen(true)}
        className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-200 hover:scale-110"
        aria-label="Open FAQ"
      >
        <HelpCircle className="h-6 w-6" />
      </button>
      <FaqPopup isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </section>
  )
}
