'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'Program' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#faqs', label: 'FAQs' },
  { href: '/learning-guide', label: 'Learning Guide', isRoute: true }
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-blue-900/60 bg-blue-950/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-white sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-left">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            GE
          </span>
          <span className="hidden flex-col text-sm font-medium text-blue-100 sm:flex">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-200">Lighting × Savant</span>
            <span className="text-base font-semibold text-white">Master the GE Smarthome</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-blue-100 md:flex">
          {navLinks.map(link => {
            const Component = link.isRoute ? Link : 'a'
            return (
              <Component
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Component>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/learning-guide"
            className="inline-flex items-center justify-center rounded-full border border-blue-800 px-5 py-2 text-sm font-semibold text-blue-50 transition-colors hover:border-blue-600 hover:text-white"
          >
            Resources
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-blue-800 p-2 text-blue-50 transition-colors hover:border-blue-600 hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
      >
        <div className="space-y-4 border-t border-blue-900/60 bg-blue-950 px-4 py-6 text-blue-50 sm:px-6">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-blue-100">
            {navLinks.map(link => {
              const Component = link.isRoute ? Link : 'a'
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-blue-900/60"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Component>
              )
            })}
          </nav>
          <div className="flex flex-col gap-2">
            <Link
              href="/learning-guide"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-blue-800 px-4 py-2 text-sm font-semibold text-blue-50 transition-colors hover:border-blue-600 hover:text-white"
            >
              Resources
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
