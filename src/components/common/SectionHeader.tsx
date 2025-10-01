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
  titleSize?: 'small' | 'medium' | 'large'
}


export function SectionHeader({
  eyebrow,
  eyebrowNode,
  title,
  description,
  align = 'center',
  className,
  variant = 'light',
  titleSize = 'large'
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const widthClass = align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
  
  const eyebrowClasses = variant === 'dark' 
    ? "inline-flex items-center rounded-full border border-blue-300/50 bg-blue-700/40 px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-blue-50 shadow-sm"
    : "inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-base font-bold uppercase tracking-[0.15em] text-slate-700 shadow-sm"
  
  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return "text-xl font-bold leading-tight md:text-2xl lg:text-3xl"
      case 'medium':
        return "text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
      case 'large':
      default:
        return "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
    }
  }

  const titleClasses = variant === 'dark'
    ? `${getTitleSizeClasses()} text-white`
    : `${getTitleSizeClasses()} text-slate-900`

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
        <h2 className={titleClasses}>
          {title}
        </h2>
        {description ? (
          <p className={variant === 'dark' ? "text-base leading-snug text-blue-50 md:text-lg lg:text-xl font-normal" : "text-base leading-snug text-slate-700 md:text-lg lg:text-xl font-normal"}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
