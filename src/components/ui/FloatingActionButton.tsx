'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, Phone, Mail } from 'lucide-react'
import { useMobileOptimizations } from '../common/TouchGestures'

interface FloatingActionButtonProps {
  onScrollToTop?: () => void
  onContact?: () => void
  className?: string
}

export function FloatingActionButton({ 
  onScrollToTop, 
  onContact,
  className = '' 
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const { isMobile, touchTargetSize } = useMobileOptimizations()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowScrollToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onScrollToTop?.()
    setIsOpen(false)
  }

  const handleContact = () => {
    onContact?.()
    setIsOpen(false)
  }

  const handleCall = () => {
    window.location.href = 'tel:+1-800-GE-SMART'
    setIsOpen(false)
  }

  const handleEmail = () => {
    window.location.href = 'mailto:dealers@gesmarthome.com'
    setIsOpen(false)
  }

  if (!isMobile) return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {showScrollToTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                onClick={handleScrollToTop}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-200 hover:bg-blue-700 active:scale-95"
                style={{ minHeight: `${touchTargetSize}px`, minWidth: `${touchTargetSize}px` }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            )}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              onClick={handleCall}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-200 hover:bg-green-700 active:scale-95"
              style={{ minHeight: `${touchTargetSize}px`, minWidth: `${touchTargetSize}px` }}
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              onClick={handleEmail}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition-all duration-200 hover:bg-purple-700 active:scale-95"
              style={{ minHeight: `${touchTargetSize}px`, minWidth: `${touchTargetSize}px` }}
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              onClick={handleContact}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg transition-all duration-200 hover:bg-orange-700 active:scale-95"
              style={{ minHeight: `${touchTargetSize}px`, minWidth: `${touchTargetSize}px` }}
              aria-label="Contact us"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-200 hover:bg-blue-700 active:scale-95"
        style={{ minHeight: `${touchTargetSize + 10}px`, minWidth: `${touchTargetSize + 10}px` }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </div>
  )
}
