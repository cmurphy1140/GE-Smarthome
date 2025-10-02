'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DropdownMenu } from '@/components/ui/DropdownMenu'

const dealershipLinks = [
  {
    label: 'Partner Journey',
    description: 'From first conversation to flagship installation',
    href: '/partner-journey'
  },
  {
    label: 'Program Tiers',
    description: 'Compare partnership levels',
    href: '/program-tiers'
  },
  {
    label: 'FAQ',
    description: 'Frequently asked questions and support',
    href: '/faq'
  }
]

const utilityLinks: { label: string; href: string }[] = [
]

const primaryLinks: { label: string; href: string }[] = [
  { label: 'Smart Home Experience', href: '/smart-home-experience' }
]

type OpenState = 'menu' | 'experience' | 'dealership' | null

export function Header() {
  const [openState, setOpenState] = useState<OpenState>(null)

  useEffect(() => {
    if (openState !== 'menu') return

    // Prevent body scroll when mobile menu is open
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenState(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      // Restore scroll position
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [openState])
  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-2 text-xs font-medium text-gray-600 lg:flex">
        <div className="flex items-center gap-6">
          {utilityLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase tracking-[0.2em] hover:text-blue-700 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
            <Link 
              href="/" 
              className="flex items-center gap-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              aria-label="GE Smart Home - Go to homepage"
            >
          <div className="inline-flex h-12 w-12 items-center justify-center overflow-visible">
            <Image
              src="/General_Electric_logo.png"
              alt="GE Smart Home logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">GE Smart Home</span>
          </div>
        </Link>

            <div className="hidden items-center gap-8 lg:flex">
              <div className="flex items-center gap-6">
                {/* Smart Home Experience Direct Link */}
                {primaryLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Smart Home Dealership Dropdown */}
                <DropdownMenu 
                  trigger="Smart Home Dealership"
                  items={dealershipLinks}
                />
              </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              Apply Now
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpenState(prev => (prev === 'menu' ? null : 'menu'))}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700 transition-all duration-200 hover:border-gray-400 hover:text-gray-900 active:scale-95 lg:hidden"
          style={{ minHeight: '44px', minWidth: '44px' }}
          aria-label="Toggle navigation"
          aria-expanded={openState === 'menu'}
        >
          {openState === 'menu' ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: openState === 'menu' ? 'auto' : 0, opacity: openState === 'menu' ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
      >
        <div className="px-4 py-6 text-gray-900 sm:px-6">
          <div className="space-y-4">
            <div className="space-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Utility
            </div>
            <div className="flex flex-col gap-3">
              {utilityLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-700"
                  onClick={() => setOpenState(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Main Navigation
            </div>
            <div className="flex flex-col gap-3">
              {primaryLinks.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-700"
                  onClick={() => setOpenState(null)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          <div className="mt-6 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Smart Home Dealership
            </div>
            <div className="flex flex-col gap-3">
              {dealershipLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-700"
                    onClick={() => setOpenState(null)}
                  >
                    <div>
                      <span className="block font-semibold">{link.label}</span>
                      <span className="block text-xs text-gray-500">{link.description}</span>
                    </div>
                  </Link>
              ))}
            </div>
          </div>

        <Link
          href="/signup"
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          onClick={() => setOpenState(null)}
        >
          Apply Now
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}
