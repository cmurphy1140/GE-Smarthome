'use client'

import { Smartphone, Mic, Lightbulb, Wifi, HelpCircle, ArrowRight } from 'lucide-react'

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
    icon: HelpCircle,
    title: "FAQ's",
    description: 'Tips & tricks to get the most from your Cync devices'
  }
]

export default function CyncFeaturesSection() {
  console.log('CyncFeaturesSection is rendering')
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Debug Test */}
        <div className="bg-red-500 text-white p-4 mb-4 text-center">
          DEBUG: CyncFeaturesSection is rendering!
        </div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">RESOURCES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to get started
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From app control to voice integrations, explore our comprehensive resources.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full border border-gray-200 bg-gray-50 p-4">
                    <IconComponent className="h-8 w-8 text-gray-900" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
