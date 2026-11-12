// Caches the app so it opens with no signal. Serves from cache, refreshes in the background,
// so an update you push shows up the launch after next. Bump CACHE to force a clean refresh.
const CACHE = 'shot-clock-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.png',
  './icon-192.png',
  './logo.png',
  './apple-touch-icon.png',
  './fonts/Campton-Medium.otf',
  './fonts/Campton-Bold.otf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  const network = fetch(req).then(async (res) => {
    if (res.ok) {
      const cache = await caches.open(CACHE);
      await cache.put(req, res.clone());
    }
    return res;
  });

  event.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || network));
  event.waitUntil(network.then(() => {}, () => {}));
});
