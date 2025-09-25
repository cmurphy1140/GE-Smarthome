'use client'

import React from 'react'

// Temporary motion replacement to disable animations
export function motion(tag: keyof JSX.IntrinsicElements) {
  return React.forwardRef<any, any>((props, ref) => {
    const { initial, animate, variants, whileInView, viewport, transition, ...restProps } = props
    return React.createElement(tag, { ref, ...restProps })
  })
}

// Create all the motion elements we need
motion.div = motion('div')
motion.section = motion('section')
motion.header = motion('header')
motion.h1 = motion('h1')
motion.h2 = motion('h2')
motion.h3 = motion('h3')
motion.p = motion('p')
motion.span = motion('span')
motion.article = motion('article')
motion.button = motion('button')