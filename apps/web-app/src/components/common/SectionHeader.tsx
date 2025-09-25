'use client'

import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  eyebrowNode?: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  variant?: 'light' | 'dark'
}


export function SectionHeader({
  eyebrow,
  eyebrowNode,
  title,
  description,
  align = 'center',
  className,
  variant = 'light'
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const widthClass = align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
  
  const eyebrowClasses = variant === 'dark' 
    ? "inline-flex items-center rounded-full border border-blue-300/50 bg-blue-700/40 px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-blue-50 shadow-sm"
    : "inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm"
  
  const titleClasses = variant === 'dark'
    ? "text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
    : "text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl"

  return (
    <div className={`space-y-3 ${alignmentClass} ${widthClass} ${className ?? ''}`.trim()}>
      {eyebrowNode ? (
        eyebrowNode
      ) : eyebrow ? (
        <span className={eyebrowClasses}>
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <div className={titleClasses}>
          {title}
        </div>
        {description ? (
          <p className={variant === 'dark' ? "text-xl leading-snug text-blue-50 md:text-2xl lg:text-3xl font-medium" : "text-xl leading-snug text-slate-700 md:text-2xl lg:text-3xl font-medium"}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
