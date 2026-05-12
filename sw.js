const CACHE='rpps-v2';
const FILES=['/RPPS-GESTOR/','/RPPS-GESTOR/index.html','/RPPS-GESTOR/manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
