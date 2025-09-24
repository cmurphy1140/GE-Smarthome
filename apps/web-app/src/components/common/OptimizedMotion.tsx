'use client'

import { motion } from 'framer-motion'
import { memo, forwardRef } from 'react'

// Optimized motion components with reduced re-renders
export const OptimizedMotionDiv = memo(forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>((props, ref) => {
  return <motion.div ref={ref} {...props} />
}))

OptimizedMotionDiv.displayName = 'OptimizedMotionDiv'

export const OptimizedMotionSection = memo(forwardRef<HTMLElement, React.ComponentProps<typeof motion.section>>((props, ref) => {
  return <motion.section ref={ref} {...props} />
}))

OptimizedMotionSection.displayName = 'OptimizedMotionSection'

// Common animation variants to prevent recreation
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

export const scaleOnHoverVariants = {
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98 }
}