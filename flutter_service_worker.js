'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "30c8b20302855b337fb27393eb084cb9",
"assets/assets/img/apes/1.png": "e5f9a3a4cf9d9db81b982a58d0e911a9",
"assets/assets/img/apes/10.png": "d93634dddf7e7b2ae7ffa4362eaf9df6",
"assets/assets/img/apes/11.png": "89e976126e9d7a22c482e15cc5f90e57",
"assets/assets/img/apes/12.png": "e9cd191edebfe6ba712f442c78439df9",
"assets/assets/img/apes/13.png": "3f9a628eaeea09d0e4ed9dddf2c728b2",
"assets/assets/img/apes/14.png": "45a0b8fe8d34ba06a5d9e18c0f1a84bb",
"assets/assets/img/apes/15.png": "7ad083b357b63d0ab3ae618db0d47d6a",
"assets/assets/img/apes/16.png": "8df3ff2638d1def5efc1dbf7bf08f26b",
"assets/assets/img/apes/17.png": "d3ae49fb1a0d34c068939d297963611f",
"assets/assets/img/apes/18.png": "1bc225826f4d842a2dab1e9be4174776",
"assets/assets/img/apes/19.png": "35851ce9f3fde8393abe67b87437e5a0",
"assets/assets/img/apes/2.png": "67b38bde8e1f5c92a53dc47afea57b35",
"assets/assets/img/apes/20.png": "4e89616cbf7af56ce2ceebf6c75689d0",
"assets/assets/img/apes/3.png": "ffd5ad2978b78858f80eb06793fb2236",
"assets/assets/img/apes/4.png": "80546aa931792ee345f761a7f566b87a",
"assets/assets/img/apes/5.png": "3d28fa60d9d11874839615c192184c87",
"assets/assets/img/apes/6.png": "55dce3025e7eb6f35afce84a24a34426",
"assets/assets/img/apes/7.png": "dc984565ab79caf32454539d2e1fbe03",
"assets/assets/img/apes/8.png": "187cef3c5dfffdd3d102fe1ff0856540",
"assets/assets/img/apes/9.png": "bdeff9c751c246fe7c9c93a7c5134a6b",
"assets/assets/img/na.jpg": "1e43eac864ca261d9bdc91f313c6d1ee",
"assets/assets/img/na_transparent.png": "302f83c0739e136da5a9e61d0f61abd2",
"assets/assets/img/na_transparent_inv.png": "84f704774e5eab1873e92b6058ac5c0f",
"assets/assets/img/opensea-logo.png": "334db26ceb76738e383d957aecdc306c",
"assets/assets/img/twitter_logo.png": "f29dee00e735dbac09867224cc6784f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2e3e49d94eacac2a381e2c325d3e973e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e6474edf7ce3871169e94728ae42af40",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "e52d9a25c02ed806cd625d36514219e8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "3ca0a3d79f948d6d64002bab23018fd0",
"icons/android-chrome-512x512.png": "151b2a58af9fa7674976c5df3aad20fe",
"icons/apple-touch-icon.png": "7ce91158a3bac8ac1e4e7f5badd72faa",
"index.html": "3fa45763dc2dacd9ac1c4e58070f5e8a",
"/": "3fa45763dc2dacd9ac1c4e58070f5e8a",
"main.dart.js": "35e59ca23cdb4facf5282183498c5f37",
"manifest.json": "8ddd4d36e996c8ea5f334ec2978742ad",
"version.json": "86caf7d8c39182420f94d14fbc323cff"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
