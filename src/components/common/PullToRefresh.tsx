'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

interface PullToRefreshProps {
  onRefresh: () => Promise<void>
  children: React.ReactNode
  threshold?: number
  disabled?: boolean
}

export function PullToRefresh({ 
  onRefresh, 
  children, 
  threshold = 80, 
  disabled = false 
}: PullToRefreshProps) {
  const [isPulling, setIsPulling] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const [startY, setStartY] = useState(0)
  const [canPull, setCanPull] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: TouchEvent) => {
    if (disabled || isRefreshing) return
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop === 0) {
      setCanPull(true)
      setStartY(e.touches[0].clientY)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!canPull || disabled || isRefreshing) return

    const currentY = e.touches[0].clientY
    const distance = currentY - startY

    if (distance > 0) {
      e.preventDefault()
      setIsPulling(true)
      setPullDistance(Math.min(distance, threshold * 1.5))
    }
  }

  const handleTouchEnd = async () => {
    if (!canPull || disabled || isRefreshing) return

    if (pullDistance >= threshold) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } catch (error) {
        console.error('Refresh failed:', error)
      } finally {
        setIsRefreshing(false)
      }
    }

    setIsPulling(false)
    setPullDistance(0)
    setCanPull(false)
    setStartY(0)
  }

  useEffect(() => {
    if (disabled) return

    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [canPull, pullDistance, disabled, isRefreshing])

  const progress = Math.min(pullDistance / threshold, 1)
  const rotation = progress * 180

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence>
        {isPulling && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
            style={{ transform: `translateY(${Math.min(pullDistance, threshold)}px)` }}
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: rotation }}
                transition={{ duration: 0.2 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </motion.div>
              <p className="text-sm text-blue-600 font-medium">
                {progress >= 1 ? 'Release to refresh' : 'Pull to refresh'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRefreshing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </motion.div>
              <p className="text-sm text-blue-600 font-medium">Refreshing...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
}
