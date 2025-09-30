'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Building2, BookOpen, MapPin, Package, FileText, Home } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DropdownMenu } from '@/components/ui/DropdownMenu'

const experienceLinks = [
  {
    label: 'Program Tiers',
    description: 'Compare partnership levels',
    href: '/program-tiers',
    icon: Building2
  },
  {
    label: 'Learning Guide',
    description: 'Training & enablement paths',
    href: '/learning-guide',
    icon: BookOpen
  },
  {
    label: 'Smart Home Technology',
    description: 'Product ecosystem overview',
    href: '/technology',
    icon: Home
  }
]

const dealershipLinks = [
  {
    label: 'Partner Journey',
    description: 'From first conversation to flagship installation',
    href: '/partner-journey',
    icon: MapPin
  },
  {
    label: 'Product Ecosystem',
    description: 'Lighting and automation portfolio',
    href: '/product-ecosystem',
    icon: Package
  },
  {
    label: 'Program Details',
    description: 'GE Smart Home experience overview',
    href: '/program-details',
    icon: FileText
  }
]

const utilityLinks: { label: string; href: string }[] = [
]

const primaryLinks: { label: string; href: string }[] = [
  { href: '#program', label: 'Our News' }
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
              src="/GE-Logo.png"
              alt="GE Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain transform scale-[1.65] origin-left"
              priority
              unoptimized
            />
          </div>
          <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">GE Smart Home</span>
            <span className="text-xs text-gray-500 leading-tight">Powered by Savant AI</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6">
            {/* Smart Home Experience Dropdown */}
            <DropdownMenu 
              trigger="Smart Home Experience"
              items={experienceLinks}
            />
            
            {/* Smart Home Dealership Dropdown */}
            <DropdownMenu 
              trigger="Smart Home Dealership"
              items={dealershipLinks}
            />

            {/* Other navigation links */}
            {primaryLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="btn-primary"
            >
              Become a Dealer
              <ArrowRight className="h-4 w-4 ml-2" />
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
              Smart Home Experience
            </div>
            <div className="flex flex-col gap-3">
              {experienceLinks.map(link => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-700"
                    onClick={() => setOpenState(null)}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      <div>
                        <span className="block font-semibold">{link.label}</span>
                        <span className="block text-xs text-gray-500">{link.description}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Smart Home Dealership
            </div>
            <div className="flex flex-col gap-3">
              {dealershipLinks.map(link => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:border-blue-600 hover:text-blue-700"
                    onClick={() => setOpenState(null)}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      <div>
                        <span className="block font-semibold">{link.label}</span>
                        <span className="block text-xs text-gray-500">{link.description}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            onClick={() => setOpenState(null)}
          >
            Become a Dealer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}
