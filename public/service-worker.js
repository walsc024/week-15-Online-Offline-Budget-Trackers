// Declare our cache variable names
var CACHE = "budget-tracker";
var DATA_CACHE = "budget-tracker-responses";

//Map out which URLs we are going to cache
var applicationUrls = [
    "/",
    "/db.js",
    "/index.js",
    "/manifest.json",
    "/styles.css",
    "/icons/inon-192x192.png",
    "/icons/icon-512x512.png"
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE).then((cache) =>{
            return cache.addAll(applicationUrls)
        })
    )
})
