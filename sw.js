// Lets Year Calendar open without an internet connection once installed.
// Online: always fetches the latest version (so edits you publish show up next launch).
// Offline: uses the last saved copy.
const CACHE = "year-calendar-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/favicon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-96.png",
  "./icons/icon-192.png",
  "./icons/icon-256.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
