'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#program', label: 'Program' },
  { href: '#benefits', label: 'Benefits' },
  { href: '/learning-guide', label: 'Learning Guide', isRoute: true }
]

const learningGuideNavLinks: { href: string; label: string; isRoute?: boolean }[] = [
  { href: '#journey', label: 'Partnership Journey' },
  { href: '#enablement', label: 'Enablement' },
  { href: '#support', label: 'Support' },
  { href: '#technology', label: 'Technology' }
]

const signupNavLinks: { href: string; label: string; isRoute?: boolean }[] = []

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isLearningGuide = pathname === '/learning-guide'
  const isSignup = pathname === '/signup'
  const currentNavLinks = isLearningGuide ? learningGuideNavLinks : isSignup ? signupNavLinks : navLinks

  useEffect(() => {
    if (!mobileOpen) return

    // Prevent body scroll when mobile menu is open
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
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
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 glass-nav border-b border-blue-400/20"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-4 py-4 text-white sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-left">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            GE
          </span>
          <span className="hidden flex-col font-medium text-blue-100 sm:flex">
            <span className="text-sm uppercase tracking-[0.2em] text-blue-200">Lighting × Savant</span>
            <span className="text-lg font-semibold text-white">Master the GE Smarthome</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-blue-100 md:flex flex-1">
          {currentNavLinks.map(link => {
            const Component = link.isRoute ? Link : 'a'
            const isHomeButton = link.label === 'Home' && isSignup
            const isLearnButton = link.label === 'Learn' && isSignup
            return (
              <Component
                key={link.href}
                href={link.href}
                className={
                  isHomeButton
                    ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-base font-semibold text-blue-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
                    : isLearnButton
                    ? "inline-flex items-center justify-center rounded-full bg-blue-800 border border-blue-700 px-5 py-2 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                    : "transition-colors hover:text-white"
                }
              >
                {link.label}
              </Component>
            )
          })}
        </nav>

        <div className="hidden items-center gap-6 md:flex ml-auto">
          {isLearningGuide && (
            <>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/30 px-5 py-2 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
              >
                Home
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-800 border border-blue-700 px-5 py-2 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
          {isSignup && (
            <>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/30 px-5 py-2 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
              >
                Home
              </Link>
              <Link
                href="/learning-guide"
                className="inline-flex items-center justify-center rounded-full bg-blue-800 border border-blue-700 px-5 py-2 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Resources
              </Link>
            </>
          )}
          {!isLearningGuide && !isSignup && (
            <>
              <Link
                href="/learning-guide"
                className="inline-flex items-center justify-center rounded-full border border-blue-800 px-5 py-2 text-base font-semibold text-blue-50 transition-colors hover:border-blue-600 hover:text-white"
              >
                Resources
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-base font-semibold text-blue-950 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-blue-800 p-3 text-blue-50 transition-all duration-200 hover:border-blue-600 hover:text-white active:scale-95 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
      >
        <div className="space-y-4 border-t border-blue-900/60 bg-gradient-to-r from-blue-950 via-blue-950/95 to-black/90 px-4 py-6 text-blue-50 sm:px-6">
          <nav className="flex flex-col gap-3 text-base font-semibold text-blue-100">
            {currentNavLinks.map(link => {
              const Component = link.isRoute ? Link : 'a'
              const isHomeButton = link.label === 'Home' && isSignup
              const isLearnButton = link.label === 'Learn' && isSignup
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  className={
                    isHomeButton
                      ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-base font-semibold text-blue-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
                      : isLearnButton
                      ? "inline-flex items-center justify-center rounded-full bg-blue-800 border border-blue-700 px-5 py-2 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                      : "rounded-lg px-4 py-3 transition-colors hover:bg-blue-900/60 active:scale-95"
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Component>
              )
            })}
          </nav>
          <div className="flex flex-col gap-2">
            {isLearningGuide && (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/30 px-5 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
                >
                  Home
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-800 border border-blue-700 px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            )}
            {isSignup && (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/30 px-5 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
                >
                  Home
                </Link>
                <Link
                  href="/learning-guide"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-blue-800 border border-blue-700 px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Resources
                </Link>
              </>
            )}
            {!isLearningGuide && !isSignup && (
              <>
                <Link
                  href="/learning-guide"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-blue-800 px-5 py-2.5 text-base font-semibold text-blue-50 transition-colors hover:border-blue-600 hover:text-white"
                >
                  Resources
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-blue-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
