'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics
        const performanceEntry = entry as PerformanceEntry & { value?: number }
        console.log('Performance metric:', {
          name: entry.name,
          value: performanceEntry.value || entry.duration,
          startTime: entry.startTime,
          duration: entry.duration,
        })

        // Send to analytics (replace with your analytics service)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'performance_metric', {
            metric_name: entry.name,
            metric_value: Math.round(performanceEntry.value || entry.duration),
            metric_delta: Math.round(performanceEntry.value || entry.duration),
          })
        }
      }
    })

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }

    // Monitor bundle loading performance
    const measureBundlePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming & { navigationStart: number }
      
      if (navigation) {
        const metrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          request: navigation.responseStart - navigation.requestStart,
          response: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - (navigation.navigationStart || 0),
          load: navigation.loadEventEnd - (navigation.navigationStart || 0),
        }

        console.log('Bundle performance metrics:', metrics)

        // Send to analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'bundle_performance', {
            dns_time: Math.round(metrics.dns),
            tcp_time: Math.round(metrics.tcp),
            request_time: Math.round(metrics.request),
            response_time: Math.round(metrics.response),
            dom_time: Math.round(metrics.dom),
            load_time: Math.round(metrics.load),
          })
        }
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measureBundlePerformance()
    } else {
      window.addEventListener('load', measureBundlePerformance)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('load', measureBundlePerformance)
    }
  }, [])

  return null
}

// Hook for measuring component render performance
export function usePerformanceMeasure(componentName: string) {
  useEffect(() => {
    const startTime = performance.now()
    
    return () => {
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      console.log(`Component ${componentName} render time:`, renderTime)
      
      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'component_render', {
          component_name: componentName,
          render_time: Math.round(renderTime),
        })
      }
    }
  })
}

// Hook for measuring async operations
export function useAsyncPerformance(operationName: string) {
  const measureAsync = async <T,>(operation: () => Promise<T>): Promise<T> => {
    const startTime = performance.now()
    
    try {
      const result = await operation()
      const endTime = performance.now()
      const duration = endTime - startTime
      
      console.log(`Async operation ${operationName} completed in:`, duration)
      
      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'async_operation', {
          operation_name: operationName,
          duration: Math.round(duration),
          status: 'success',
        })
      }
      
      return result
    } catch (error) {
      const endTime = performance.now()
      const duration = endTime - startTime
      
      console.error(`Async operation ${operationName} failed after:`, duration, error)
      
      // Send to analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'async_operation', {
          operation_name: operationName,
          duration: Math.round(duration),
          status: 'error',
        })
      }
      
      throw error
    }
  }
  
  return { measureAsync }
}
