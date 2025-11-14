self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll([
        "/brick-pwa/",
        "/brick-pwa/index.html",
        "/brick-pwa/manifest.json",
        "/brick-pwa/sw.js",
        "/brick-pwa/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
