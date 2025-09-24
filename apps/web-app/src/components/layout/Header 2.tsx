'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'benefits', label: 'Benefits' }
]

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-lg font-medium text-blue-600">
            GE Lighting × Savant
          </span>
          <span className="text-xl font-bold text-slate-900">Smarthome Dealer Program</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/learning-guide"
            className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Learning Guide
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
          >
            Become a Dealer
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/learning-guide"
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-lg font-medium text-blue-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-900"
          >
            Guide
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700"
          >
            Apply
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}