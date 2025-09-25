'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, ExternalLink, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Consistent navigation buttons for all pages
const getHeaderButtons = (currentPath: string) => {
  const buttons = []
  
  // Don't show Home button on home page
  if (currentPath !== '/') {
    buttons.push({ href: '/', label: 'Home', isRoute: true })
  }
  
  if (currentPath !== '/learning-guide') {
    buttons.push({ href: '/learning-guide', label: 'Learn', isRoute: true })
  }
  
  if (currentPath !== '/program-details') {
    buttons.push({ href: '/program-details', label: 'Program Details', isRoute: true })
  }
  
  if (currentPath !== '/signup') {
    buttons.push({ href: '/signup', label: 'Apply Now', isRoute: true })
  }
  
  return buttons
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#program', label: 'Program' },
  { href: '/program-details', label: 'Program Details', isRoute: true, isExternal: true },
  { href: '/learning-guide', label: 'Learning Guide', isRoute: true, isExternal: true }
]

const learningGuideNavLinks: { href: string; label: string; isRoute?: boolean; isExternal?: boolean }[] = [
  { href: '#journey', label: 'Partnership Journey' },
  { href: '#enablement', label: 'Enablement' },
  { href: '#support', label: 'Support' },
  { href: '#technology', label: 'Technology' }
]

const signupNavLinks: { href: string; label: string; isRoute?: boolean; isExternal?: boolean }[] = []

const programDetailsNavLinks: { href: string; label: string; isRoute?: boolean; isExternal?: boolean }[] = [
  { href: '#journey', label: 'Journey' }
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isLearningGuide = pathname === '/learning-guide'
  const isSignup = pathname === '/signup'
  const isProgramDetails = pathname === '/program-details'
  const currentNavLinks = isLearningGuide ? learningGuideNavLinks : isSignup ? signupNavLinks : isProgramDetails ? programDetailsNavLinks : navLinks
  const headerButtons = getHeaderButtons(pathname)

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownOpen) {
        const target = event.target as Element
        if (!target.closest('[data-dropdown]')) {
          setDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-blue-900/60 bg-gradient-to-r from-blue-950 via-blue-950/95 to-black/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-5 text-white sm:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
          aria-label="GE Smart Home - Go to homepage"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <img 
              src="/GE-Logo.png" 
              alt="GE Logo" 
              className="h-16 w-16 object-contain"
            />
          </div>
          <span className="hidden flex-col font-medium text-blue-100 sm:flex">
            <span className="text-sm uppercase tracking-[0.2em] text-blue-200 leading-tight">Powered by Savant AI</span>
            <span className="text-xl font-semibold text-white leading-tight">GE Smart Home</span>
          </span>
        </Link>

        <div className="hidden md:flex flex-1">
          {currentNavLinks.length > 0 && (
            <div className="relative" data-dropdown>
               <button
                 onClick={() => setDropdownOpen(!dropdownOpen)}
                 className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-blue-200 transition-all duration-200 hover:text-white hover:bg-blue-900/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                 aria-expanded={dropdownOpen}
                 aria-haspopup="true"
                 aria-label="Open navigation menu"
               >
                 Navigation
                 <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
               </button>
              
               {dropdownOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: -10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                   className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-blue-800/50 bg-blue-950/95 backdrop-blur-xl shadow-2xl z-50 overflow-hidden"
                   role="menu"
                   aria-label="Navigation menu"
                 >
                   <div className="py-3">
                     {currentNavLinks.map((link, index) => {
                       const Component = link.isRoute ? Link : 'a'
                       return (
                         <motion.div
                           key={link.href}
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.05 }}
                         >
                           <Component
                             href={link.href}
                             className="flex items-center gap-3 px-5 py-4 text-base font-medium text-blue-200 transition-all duration-200 hover:text-white hover:bg-blue-900/50 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                             onClick={() => setDropdownOpen(false)}
                             role="menuitem"
                             tabIndex={0}
                           >
                             <span className="flex-1">{link.label}</span>
                             {link.isExternal && (
                               <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-200 hover:opacity-100" aria-label="External link" />
                             )}
                           </Component>
                         </motion.div>
                       )
                     })}
                   </div>
                 </motion.div>
               )}
            </div>
          )}
        </div>

        <div className="hidden items-center gap-5 md:flex ml-auto">
          {headerButtons.map((button) => (
            <Link
              key={button.href}
              href={button.href}
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 ${
                button.label === 'Apply Now'
                  ? 'bg-blue-800 border border-blue-700 text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700'
                  : 'bg-white/10 border border-white/30 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50'
              }`}
            >
              {button.label}
              {button.label === 'Apply Now' && <ArrowRight className="h-5 w-5" />}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-blue-800 p-3 text-blue-50 transition-all duration-200 hover:border-blue-600 hover:text-white active:scale-95 md:hidden"
          style={{ minHeight: '44px', minWidth: '44px' }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
      >
        <div className="space-y-4 border-t border-blue-900/60 bg-gradient-to-r from-blue-950 via-blue-950/95 to-black/90 px-4 py-6 text-blue-50 sm:px-6">
          <nav className="flex flex-col gap-3">
            {currentNavLinks.map((link) => {
              const Component = link.isRoute ? Link : 'a'
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-4 text-base font-semibold text-blue-200 transition-all duration-200 hover:bg-blue-900/60 hover:text-white hover:translate-x-1 active:scale-95"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="flex-1">{link.label}</span>
                  {link.isExternal && (
                    <ExternalLink className="h-4 w-4 opacity-60 transition-opacity duration-200 hover:opacity-100" />
                  )}
                </Component>
              )
            })}
          </nav>
          <div className="flex flex-col gap-3">
            {headerButtons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                onClick={() => setMobileOpen(false)}
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 ${
                  button.label === 'Apply Now'
                    ? 'bg-blue-800 border border-blue-700 text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700'
                    : 'bg-white/10 border border-white/30 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50'
                }`}
              >
                {button.label}
                {button.label === 'Apply Now' && <ArrowRight className="h-5 w-5" />}
              </Link>
            ))}
            {isSignup && (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/30 px-5 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
                >
                  Home
                </Link>
                <Link
                  href="/learning-guide"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-800 border border-blue-700 px-5 py-2.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Resources
                </Link>
              </>
            )}
            {!isLearningGuide && !isSignup && !isProgramDetails && (
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-base font-semibold text-blue-950 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
