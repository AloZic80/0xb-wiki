const CACHE_NAME = '0xb-wiki-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((n) => Promise.all(n.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.hostname === 'api.github.com') {
    e.respondWith(
      fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE_NAME).then((ca) => ca.put(e.request, c)); return r; })
      .catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE_NAME).then((ca) => ca.put(e.request, c)); return r; }).catch(() => cached);
      return cached || fetched;
    })
  );
});
