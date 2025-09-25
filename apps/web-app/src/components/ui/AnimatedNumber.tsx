'use client'

import React, { memo } from 'react'

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

function AnimatedNumberComponent({ value, prefix = '', suffix = '', decimals = 0, className }: AnimatedNumberProps) {
  const displayValue = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()
  const display = `${prefix}${displayValue}${suffix}`

  return (
    <span
      className={
        className ?? 'text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl'
      }
    >
      {display}
    </span>
  )
}

export const AnimatedNumber = memo(AnimatedNumberComponent)