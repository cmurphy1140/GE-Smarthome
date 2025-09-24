'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  variant?: 'light' | 'dark'
}

const baseAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.17, 0.67, 0.35, 1] }
  }
} as const

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  variant = 'light'
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const widthClass = align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
  
  const eyebrowClasses = variant === 'dark' 
    ? "inline-flex items-center rounded-full border border-blue-700/40 bg-blue-800/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200"
    : "inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
  
  const titleClasses = variant === 'dark'
    ? "text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl"
    : "text-2xl font-semibold leading-tight text-slate-900 md:text-3xl lg:text-4xl"

  return (
    <motion.div
      variants={baseAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-72px' }}
      className={`space-y-4 ${alignmentClass} ${widthClass} ${className ?? ''}`.trim()}
    >
      {eyebrow ? (
        <span className={eyebrowClasses}>
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-4">
        <div className={titleClasses}>
          {title}
        </div>
        {description ? (
          <p className={variant === 'dark' ? "text-base leading-relaxed text-blue-100 md:text-lg lg:text-xl" : "text-base leading-relaxed text-slate-600 md:text-lg lg:text-xl"}>
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  )
}
