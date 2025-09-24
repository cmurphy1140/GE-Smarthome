'use client'

import React, { useEffect, useRef, useState, memo } from 'react'
import { animate, useMotionValue, useTransform, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

function AnimatedNumberComponent({ value, prefix = '', suffix = '', decimals = 0, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const formatted = useTransform(count, latest => {
    const nextValue = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
    return `${prefix}${nextValue}${suffix}`
  })
  const [display, setDisplay] = useState(() => `${prefix}${(0).toFixed(decimals)}${suffix}`)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useMotionValueEvent(formatted, 'change', latest => {
    setDisplay(latest)
  })

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.4, ease: 'easeOut' })
    }
  }, [count, value, isInView])

  return (
    <span
      ref={ref}
      className={
        className ?? 'text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl'
      }
    >
      {display}
    </span>
  )
}

export const AnimatedNumber = memo(AnimatedNumberComponent)
