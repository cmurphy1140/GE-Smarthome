/**
 * Lightweight analytics utility with safe fallbacks
 * Supports Google Analytics 4 and other tracking providers
 */

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
}

/**
 * Track an analytics event safely
 * No-ops if tracking is disabled or not available
 */
export function trackEvent(name: string, properties: Record<string, unknown> = {}) {
  try {
    // Console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', name, properties)
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        ...properties,
        // Standard GA4 properties
        custom_parameters: properties,
      })
    }

    // Other analytics providers can be added here
    // Example: window.mixpanel?.track(name, properties)
    // Example: window.segment?.track(name, properties)

  } catch (error) {
    // Silently fail to prevent analytics from breaking the application
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Analytics] Failed to track event:', name, error)
    }
  }
}

/**
 * Track page views
 */
export function trackPageView(path: string, title?: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  })
}

/**
 * Track form interactions
 */
export const FormEvents = {
  FORM_START: 'form_start',
  FORM_FIELD_FOCUS: 'form_field_focus',
  FORM_FIELD_BLUR: 'form_field_blur',
  FORM_VALIDATION_ERROR: 'form_validation_error',
  FORM_SUBMIT_ATTEMPT: 'form_submit_attempt',
  FORM_SUBMIT_SUCCESS: 'form_submit_success',
  FORM_SUBMIT_ERROR: 'form_submit_error',
} as const

/**
 * Track CTA interactions
 */
export const CTAEvents = {
  CTA_CLICK: 'cta_click',
  APPLY_NOW_CLICK: 'apply_now_click',
  LEARN_MORE_CLICK: 'learn_more_click',
  SCHEDULE_CALL_CLICK: 'schedule_call_click',
} as const

/**
 * Track ROI Calculator interactions
 */
export const ROIEvents = {
  CALCULATOR_LOAD: 'roi_calculator_load',
  SLIDER_CHANGE: 'roi_slider_change',
  CONFIG_SAVE_MODAL_OPEN: 'roi_config_save_modal_open',
  CONFIG_SAVE_SUBMIT: 'roi_config_save_submit',
  CONFIG_SAVE_SUCCESS: 'roi_config_save_success',
} as const

/**
 * Declare global gtag for TypeScript
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}