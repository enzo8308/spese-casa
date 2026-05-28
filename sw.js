self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forza l'aggiornamento immediato dell'app
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Lascia passare tutti i dati (necessario per non bloccare Firebase)
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});