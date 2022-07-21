const CACHE_NAME = 'my-site-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/manifest.json',
    '/assets/css/style.css',
    '/assets/js/loadImages.js',
    '/assets/images/icons/icon-72x72.png',
    '/assets/images/icons/icon-96x96.png',
    '/assets/images/icons/icon-128x128.png',
    '/assets/images/icons/icon-144x144.png',
    '/apps.js'
  ];

  self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached successfully!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
    })
    
    
    // Activate the service worker and remove old data from the cache
   
    self.addEventListener('activate', function(evt) {
        evt.waitUntil(
            caches.keys().then(keyList => {
                return Promise.all(
                    keyList.map(key => {
                        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                            console.log('Removing old cache data', key);
                        }
                    })
                );
            })
        ); 
        self.clients.claim();
        })
    
    // Intercept fetch requests
    // YOUR CODE HERE
    
    self.addEventListener('fetch', function(evt) {
        evt.respondWith(
            fetch(evt.request).catch(function() {
              return caches.match(evt.request).then(function(response) {
                if (response) {
                  return response;
                } else if (evt.request.headers.get('accept').includes('text/html')) {
                  // return the cached home page for all requests for html pages
                  return caches.match('/');
                }
              });
            })
          );
    });