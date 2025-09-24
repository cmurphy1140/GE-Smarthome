'use client'

import { memo } from 'react'
import { ShieldCheck, Headphones, Sparkles } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Dedicated strategist',
    description: '1:1 guidance from onboarding through expansion with regional expertise.'
  },
  {
    icon: Headphones,
    title: '24/7 support',
    description: 'Priority access to technical specialists and rapid-response troubleshooting.'
  },
  {
    icon: Sparkles,
    title: 'Premium portfolio',
    description: 'GE Lighting innovation backed by Savant automation to differentiate every install.'
  }
] as const

function DealerProgramSectionComponent() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Dealer program"
          title="What partners unlock from day one"
          description="Concierge guidance, around-the-clock support, and a unified GE Lighting × Savant portfolio ready for your next install."
          align="left"
          variant="dark"
          className="max-w-xl"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map(highlight => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-[0_18px_45px_rgba(8,11,24,0.35)] backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                <highlight.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-base font-semibold text-white">{highlight.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const DealerProgramSection = memo(DealerProgramSectionComponent)
