const cacheName = 'mws-rest-1';
const filesToCache = [
    './',
    './index.html',
    './restaurant.html',
    './error.html',
    './data/restaurants.json',
    './css/styles.css',
    './js/dbhelper.js',
    './js/restaurant_info.js',
    './js/main.js',
    './js/index.js',
    './sw.js',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',   
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function (cache) {
            console.log('Write cache');
            return cache.addAll(filesToCache);
    }));
});

this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request)
    .then(function() {
        return fetch(event.request);
    })
    .then(function(r) {
        response = r;
        caches.open(cacheName)
        .then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    })
    .catch(function() {
        return caches.match('./error.html');
    }));
});
