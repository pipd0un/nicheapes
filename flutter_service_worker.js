'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2665849bf9b937fa2a22c85e9ec2e1b7",
"assets/assets/img/1.jpg": "9614e3e7192b69d6510dc89d57086d83",
"assets/assets/img/10.jpg": "ea19285717d42ced8cb6e3d31f75d42b",
"assets/assets/img/2.jpg": "1be435af34a2489235f13d188224bda0",
"assets/assets/img/3.jpg": "725af15483947458c892ecb9a37b7f36",
"assets/assets/img/4.jpg": "8bbdd9e6866b8f4fe958c0a9edef1caa",
"assets/assets/img/5.jpg": "d8b4df99d1cc98e49db9ce676fe9b68f",
"assets/assets/img/6.jpg": "42781e05542009c8fe875f08a04f7572",
"assets/assets/img/7.jpg": "fbc47b14eeea5a237780d7c83d25053f",
"assets/assets/img/8.jpg": "f7a1eb91912b888789aac7203fb501e1",
"assets/assets/img/9.jpg": "47c00b5f5f138ec00be41cb40d59fb1b",
"assets/assets/img/apes/1.png": "6c41a0ec702e5d1d999b7c662beb7c28",
"assets/assets/img/apes/10.png": "0186a5ac4a5c49d7a15d1c3894367bd9",
"assets/assets/img/apes/11.png": "f3d0337f2366b298a9bd69106e1f85f3",
"assets/assets/img/apes/12.png": "d4afee34a502c1820ff7a60530c29e01",
"assets/assets/img/apes/13.png": "dfcf38026331ba0ef4deaba8f6a5fde3",
"assets/assets/img/apes/14.png": "dfee96bb9f9af9e57f16c1e204ebff47",
"assets/assets/img/apes/15.png": "7ca88009c126c3a16fc8cae76583ea41",
"assets/assets/img/apes/16.png": "64eb74468a184543dda2f8dd3cc84bd8",
"assets/assets/img/apes/17.png": "ef18b8c6a45fdea5b16138295cf39a6a",
"assets/assets/img/apes/18.png": "18df0c644e7dc76ec5ebb20ecbe2a30e",
"assets/assets/img/apes/19.png": "fb2b3745aa917d6304eced57bb0cafcf",
"assets/assets/img/apes/2.png": "ebf67329bfaaa2c8f73e2c87fc69bcf2",
"assets/assets/img/apes/20.png": "eac48c78a7a3b1972f2044c85a2d2000",
"assets/assets/img/apes/3.png": "4bcbf9ce420b3efab1ca6d2d1b22b0e2",
"assets/assets/img/apes/4.png": "cc4593cf821a8e63b4d1f2461288f388",
"assets/assets/img/apes/5.png": "a98fe6df02309c11d2da4fdd193eb737",
"assets/assets/img/apes/6.png": "8a958e0749ee90faca54243517165f69",
"assets/assets/img/apes/7.png": "ef05f9d0e6f1ea8a96570225322bc892",
"assets/assets/img/apes/8.png": "2178112074b00ed184450d31e62a2dab",
"assets/assets/img/apes/9.png": "419d17216cb867c43022f26618d62f40",
"assets/assets/img/na.jpg": "1e43eac864ca261d9bdc91f313c6d1ee",
"assets/assets/img/na_transparent.png": "302f83c0739e136da5a9e61d0f61abd2",
"assets/assets/img/na_transparent_inv.png": "84f704774e5eab1873e92b6058ac5c0f",
"assets/assets/img/opensea-logo.png": "334db26ceb76738e383d957aecdc306c",
"assets/assets/img/twitter_logo.png": "f29dee00e735dbac09867224cc6784f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "eec3f556c2f1f7103d4c51ddbf2fcae7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "e6474edf7ce3871169e94728ae42af40",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "e52d9a25c02ed806cd625d36514219e8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f62eba6c78e09bb5efe78929b01276eb",
"/": "f62eba6c78e09bb5efe78929b01276eb",
"main.dart.js": "e0464f8ff43206c73bd5eb5c182b2107",
"manifest.json": "fd1dbb566c219a98f2f9e64638f7d405",
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
