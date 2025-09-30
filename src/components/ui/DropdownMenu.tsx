'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface DropdownItem {
  href: string
  label: string
  description?: string
  isRoute?: boolean
  isExternal?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

interface DropdownMenuProps {
  trigger: string
  items: DropdownItem[]
  className?: string
}

export function DropdownMenu({ trigger, items, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap ${
              className.includes('text-white') 
                ? 'bg-white/10 border border-white/30 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:shadow-lg' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-600 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl'
            }`}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
        <span>{trigger}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 top-full mt-3 w-80 rounded-xl border border-gray-200 bg-white shadow-2xl z-50 backdrop-blur-sm"
          >
            <div className="p-2">
                  {items.map((item) => {
                    const Component = item.isRoute ? Link : 'a'
                    const IconComponent = item.icon
                    return (
                      <Component
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-lg p-4 text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {IconComponent && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-200 shadow-sm">
                            <IconComponent className="h-4 w-4" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="mt-1 text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                              {item.description}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 flex-shrink-0" />
                      </Component>
                    )
                  })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
