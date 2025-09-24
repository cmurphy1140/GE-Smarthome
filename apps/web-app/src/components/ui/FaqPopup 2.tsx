'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface FaqPopupProps {
  isOpen: boolean
  onClose: () => void
}

const faqs = [
  {
    question: 'What makes GE Smarthome different?',
    answer: 'GE Smarthome combines 140+ years of lighting expertise with Savant\'s award-winning smart home platform, delivering unmatched reliability and innovation.'
  },
  {
    question: 'How does the dealer program work?',
    answer: 'Our program offers exclusive dealer pricing, dedicated support, and premium product access to qualified integrators and electrical contractors.'
  },
  {
    question: 'What support do partners receive?',
    answer: 'Partners get 1:1 strategist guidance, 24/7 technical support, training resources, and priority product fulfillment.'
  }
]

export function FaqPopup({ isOpen, onClose }: FaqPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                  <h4 className="mb-2 font-semibold text-slate-900">
                    {faq.question}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}