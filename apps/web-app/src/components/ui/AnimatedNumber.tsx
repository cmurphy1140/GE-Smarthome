'use client'

import React, { useEffect, useRef, useState, memo } from 'react'
import { animate, useMotionValue, useTransform, useMotionValueEvent } from 'framer-motion'
import { useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  suffix?: string
}

function AnimatedNumberComponent({ value, suffix }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.floor(latest))
  const [display, setDisplay] = useState('0')
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useMotionValueEvent(rounded, 'change', latest => {
    setDisplay(`${latest}${suffix ?? ''}`)
  })

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.4, ease: 'easeOut' })
    }
  }, [count, value, isInView])

  return (
    <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
      {display}
    </span>
  )
}

export const AnimatedNumber = memo(AnimatedNumberComponent)
