'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface TouchGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
  onDoubleTap?: () => void
  onLongPress?: () => void
  threshold?: number
  longPressDelay?: number
}

interface TouchPosition {
  x: number
  y: number
  time: number
}

export function useTouchGestures(options: TouchGestureOptions = {}) {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    onLongPress,
    threshold = 50,
    longPressDelay = 500
  } = options

  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null)
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null)
  const [lastTap, setLastTap] = useState<number>(0)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    const position = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }
    setTouchStart(position)
    setTouchEnd(null)

    // Long press detection
    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        onLongPress()
      }, longPressDelay)
    }
  }, [onLongPress, longPressDelay])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    const position = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    }
    setTouchEnd(position)

    // Cancel long press if user moves finger
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    // Cancel long press timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }

    if (!touchStart || !touchEnd) {
      // Handle tap
      const now = Date.now()
      if (now - lastTap < 300) {
        // Double tap
        if (onDoubleTap) {
          onDoubleTap()
        }
      } else {
        // Single tap
        if (onTap) {
          onTap()
        }
      }
      setLastTap(now)
      return
    }

    const deltaX = touchEnd.x - touchStart.x
    const deltaY = touchEnd.y - touchStart.y
    const deltaTime = touchEnd.time - touchStart.time

    // Only process swipes if they're quick enough (less than 300ms)
    if (deltaTime < 300) {
      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      // Determine if it's a horizontal or vertical swipe
      if (absDeltaX > absDeltaY && absDeltaX > threshold) {
        // Horizontal swipe
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight()
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft()
        }
      } else if (absDeltaY > threshold) {
        // Vertical swipe
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown()
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp()
        }
      }
    }

    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, onDoubleTap, lastTap])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [])

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }
}

// Hook for detecting device type
export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
      setIsTouch(isTouchDevice)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile, isTablet, isTouch }
}

// Hook for mobile-specific optimizations
export function useMobileOptimizations() {
  const { isMobile, isTouch } = useDeviceType()
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    isMobile,
    isTouch,
    isReducedMotion,
    shouldAnimate: !isReducedMotion,
    touchTargetSize: isMobile ? 44 : 32 // Minimum touch target size
  }
}
