'use client'

import { Smartphone, Mic, Lightbulb, Wifi, Laptop } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'App Control',
    description: 'Get started with the free Cync App for iOS & Android'
  },
  {
    icon: Mic,
    title: 'Voice Integrations',
    description: 'Connect to Amazon Alexa, Google Home & other smart assistants'
  },
  {
    icon: Lightbulb,
    title: 'Our Products',
    description: 'See what Cync smart products can do'
  },
  {
    icon: Wifi,
    title: 'Compatibility',
    description: 'Requires 2.4 GHz Wi-Fi & smart phone'
  },
  {
    icon: Laptop,
    title: "FAQ's",
    description: 'Tips & tricks to get the most from your Cync devices'
  }
]

export default function CyncFeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <IconComponent className="h-8 w-8 text-slate-900" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
