const CACHE_NAME = 'luis-hsa-v1';
const urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/css/main.css',
    '/favicon.ico'
];

// Cache de imagens externas
const imageCache = 'luis-hsa-images-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // Cache apenas imagens externas
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.open(imageCache).then(cache => {
                return cache.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }

                    return fetch(event.request)
                        .then(response => {
                            // Só cache imagens com sucesso
                            if (response.status === 200) {
                                cache.put(event.request, response.clone());
                            }
                            return response;
                        })
                        .catch(() => {
                            // Return fallback for failed images
                            return new Response(
                                '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#1a1a1a"/><text x="200" y="150" text-anchor="middle" fill="#888" font-family="Arial" font-size="14">Image unavailable</text></svg>',
                                {
                                    headers: {
                                        'Content-Type': 'image/svg+xml'
                                    }
                                }
                            );
                        });
                });
            })
        );
    }

    // Para outros recursos, usar cache normal
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== imageCache) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
