'use client'

import Link from 'next/link'
import { Instagram, Facebook, Dribbble, Linkedin } from 'lucide-react'
import React, { memo } from 'react'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
]

export const SocialSidebar = memo(function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {socialLinks.map((link) => {
        const IconComponent = link.icon
        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-110"
          >
            <IconComponent className="h-5 w-5" />
          </Link>
        )
      })}
    </div>
  )
})

