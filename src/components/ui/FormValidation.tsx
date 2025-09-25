'use client'

import { useState, useEffect } from 'react'

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function useFormValidation(
  initialValues: Record<string, string>,
  rules: Record<string, ValidationRule>
) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string[] => {
    const fieldErrors: string[] = []
    const rule = rules[name]

    if (!rule) return fieldErrors

    if (rule.required && !value.trim()) {
      fieldErrors.push(`${name} is required`)
    }

    if (value && rule.minLength && value.length < rule.minLength) {
      fieldErrors.push(`${name} must be at least ${rule.minLength} characters`)
    }

    if (value && rule.maxLength && value.length > rule.maxLength) {
      fieldErrors.push(`${name} must be no more than ${rule.maxLength} characters`)
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      fieldErrors.push(`${name} format is invalid`)
    }

    if (value && rule.custom) {
      const customError = rule.custom(value)
      if (customError) {
        fieldErrors.push(customError)
      }
    }

    return fieldErrors
  }

  const validateForm = (): ValidationResult => {
    const allErrors: Record<string, string[]> = {}
    let isValid = true

    Object.keys(rules).forEach(name => {
      const fieldErrors = validateField(name, values[name] || '')
      if (fieldErrors.length > 0) {
        allErrors[name] = fieldErrors
        isValid = false
      }
    })

    setErrors(allErrors)
    return { isValid, errors: Object.values(allErrors).flat() }
  }

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const fieldErrors = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: fieldErrors }))
    }
  }

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const fieldErrors = validateField(name, values[name] || '')
    setErrors(prev => ({ ...prev, [name]: fieldErrors }))
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    isValid: Object.values(errors).every(errorArray => errorArray.length === 0)
  }
}

// Common validation rules
export const validationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      if (!value.includes('@')) return 'Please enter a valid email address'
      return null
    }
  },
  phone: {
    required: true,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    custom: (value: string) => {
      const cleaned = value.replace(/\D/g, '')
      if (cleaned.length < 10) return 'Please enter a valid phone number'
      return null
    }
  },
  company: {
    required: true,
    minLength: 2,
    maxLength: 100
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  }
}
