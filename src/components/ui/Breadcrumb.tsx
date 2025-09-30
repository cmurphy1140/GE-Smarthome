'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="flex items-center hover:text-blue-600 transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Predefined breadcrumbs for common pages
export const breadcrumbConfigs = {
  learningGuide: [
    { label: 'Learning Guide' }
  ],
  partnerJourney: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Partner Journey' }
  ],
  productEcosystem: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Product Ecosystem' }
  ],
  programTiers: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Program Tiers' }
  ],
  technology: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Smart Home Technology' }
  ],
  enablement: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Training & Support' }
  ],
  deployment: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: 'Deployment' }
  ],
  support: [
    { label: 'Learning Guide', href: '/learning-guide' },
    { label: '24/7 Support' }
  ],
  programDetails: [
    { label: 'Program Details' }
  ],
  signup: [
    { label: 'Sign Up' }
  ]
}

