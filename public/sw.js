const CACHE_NAME = 'ge-smarthome-v1.0.0'
const STATIC_CACHE = 'ge-smarthome-static-v1.0.0'
const DYNAMIC_CACHE = 'ge-smarthome-dynamic-v1.0.0'

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/learning-guide',
  '/program-details',
  '/signup',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-16.png',
  '/favicon-32.png',
  '/ge-favicon-32.png',
  '/icon.png',
  '/hero-bg.png',
  '/ge-smart-team.png',
  '/ge-smart-bulb-showcase.png',
  '/cync-bulb.png',
  '/bulb.png',
  '/thermostat.png',
  '/solor-panal.png',
  '/soft-white.png',
  '/led-light.png',
  '/dealer-cta.png',
  '/signup-hero.png',
  '/ge-logo.svg',
  '/ge-smart-bulb.png',
  '/ge-smart-team.png',
  '/smarthome-diagram.png',
  '/offline.html'
]

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...')
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Installation complete')
        return self.skipWaiting()
      })
      .catch(error => {
        console.error('Service Worker: Installation failed', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...')
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activation complete')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  event.respondWith(
    caches.match(request)
      .then(response => {
        // Return cached version if available
        if (response) {
          console.log('Service Worker: Serving from cache', request.url)
          return response
        }

        // Otherwise fetch from network
        console.log('Service Worker: Fetching from network', request.url)
        return fetch(request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseToCache)
              })

            return response
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error)
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline.html')
            }
            
            // Return a fallback response for other requests
            return new Response('Offline content not available', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            })
          })
      })
  )
})

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered')
    event.waitUntil(
      // Handle any pending form submissions or data sync
      handleBackgroundSync()
    )
  }
})

// Push notification handling
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received')
  
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/icon.png',
    badge: '/favicon-32.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/favicon-32.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon-32.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('GE Smart Home', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked')
  
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Handle any pending operations
    console.log('Service Worker: Handling background sync')
    return Promise.resolve()
  } catch (error) {
    console.error('Service Worker: Background sync failed', error)
    throw error
  }
}

// Message handling for communication with main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})
}