// Common types used throughout the application

export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price: string
  dealerPrice: string
}

export interface HeroStat {
  value: string | number
  suffix: string
  label: string
}

export interface NavigationLink {
  label: string
  href: string
  isExternal?: boolean
  isRoute?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface JourneyPhase {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  duration: string
  features: string[]
}

export interface ProductFamily {
  id: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  products: string[]
}

export interface ProfessionalSegment {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  benefits: string[]
}

export interface DealerTier {
  id: string
  name: string
  description: string
  requirements: string[]
  benefits: string[]
  investment: string
}

export interface FocusPrefill {
  businessFocus: string
  targetTier: string
  interestReason: string
  label: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  businessFocus: string
  targetTier: string
  interestReason: string
  additionalInfo: string
}

export interface ValidationError {
  field: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  errors?: ValidationError[]
}

// Animation variants
export interface AnimationVariants {
  hidden: Record<string, any>
  visible: Record<string, any>
}

// Component props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface SectionProps extends BaseComponentProps {
  id?: string
  title?: string
  description?: string
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface LoadingProps {
  state: LoadingState
  message?: string
  error?: string
}
