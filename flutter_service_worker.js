'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b5f8be16648ae8661b842c1da5d6f82a",
"index.html": "013daf86866dea81cafd30d81c38317b",
"/": "013daf86866dea81cafd30d81c38317b",
"main.dart.js": "9e77fbbca60b1171a763059b306010b2",
"version.json": "9f2274b7f45cf76b73addf4dc17427c9",
"assets/images/android-dark1.jpg": "ab78e3bfc381185c8d83cd0bd33949ea",
"assets/images/android-dark2.jpg": "84b5804a9f4c7bd52a6b9f816dfc6a37",
"assets/images/android-dark3.jpg": "55d4020e95692d03d670785700f69f7d",
"assets/images/android-light1.jpg": "4ca8ef510480c096c23a8d3c4a4fe453",
"assets/images/chinese-dark1.jpg": "4e3007fe5ba1e14cab0881d12541bb80",
"assets/images/english-dark1.jpg": "a634dd7c6abe2289a409027f1165b5ef",
"assets/images/chinese-light1.jpg": "2ffa90a910394397bae394b5564dde9d",
"assets/images/english-dark10.jpg": "697e8944db5b6f61ea79ce089a9e466c",
"assets/images/dark1.png": "24ff4e057ee6f4dc4ba36c062b46fee5",
"assets/images/dark2.png": "140857dee390fe42ed09e05f3e391d5e",
"assets/images/english-dark11.jpg": "aaaca058fdc54c8216deacb54894b885",
"assets/images/dark3.jpg": "9f3328f07f0ce7f3d5eddc936845c681",
"assets/images/english-dark3.jpg": "60d237ef0154b7887690f28cc10d5b0b",
"assets/images/english-dark12.jpg": "c10a1273c96629d08b8e291da3c90c3d",
"assets/images/english-dark13.jpg": "bfc001202ad5eca40073d3fd68c4f01c",
"assets/images/english-dark2.jpg": "2a545492d63dbb5b7477744fa36444fb",
"assets/images/english-dark5.jpg": "5eee4ae7c1e425fa927706e7a9b89c74",
"assets/images/english-dark9.jpg": "96f3b2da131173966dc2ac5067c6b288",
"assets/images/english-dark7.jpg": "5e124dc0e1b8cc7db79f74815588cff1",
"assets/images/english-dark4.jpg": "30779c771b66dbb342ba2b907f93400f",
"assets/images/english-light11.jpg": "35027cb997bebafe0b0ac72f403c5265",
"assets/images/english-dark6.jpg": "58e22f961cb7482197ee610778eaf41f",
"assets/images/english-light12.jpg": "3acede30d2cd3d7281f90360749e816c",
"assets/images/english-light3.jpg": "63f31300856a19c1a92538b58f90acb7",
"assets/images/english-light1.jpg": "c07a7158e402bdfc428780caa20ef605",
"assets/images/english-light4.jpg": "2e4ab4549e22f73b3d28fb140fdd8388",
"assets/images/english-dark8.jpg": "4cd248c226b5214f2e14ca8f683f01f5",
"assets/images/english-light13.jpg": "5ce3828fa327ae3e59c19081c538f38e",
"assets/images/english-light2.jpg": "a68db32b1ecec9b51bb6cddc625ee626",
"assets/images/english-light6.jpg": "58b1b7c08a7b1b42bd6c43045d2f16c2",
"assets/images/english-light10.jpg": "d7450d6672d89ff5468aba768d6e5489",
"assets/images/english-light5.jpg": "cde54def453480e0d77d884ea6affab8",
"assets/images/english-light8.jpg": "5c3a419f0aa25fc91536c586b1d4554e",
"assets/images/english-light7.jpg": "15933492bee927824a966972a82138e5",
"assets/images/english-light9.jpg": "adbe6f8e17ab52afb472d97ae499cf6b",
"assets/images/light2.png": "af9f92e4eba05989e91a02a45a1ccc3b",
"assets/images/light1.png": "3b460e065a0609c63b9b0bde2f37edec",
"assets/images/spain-light1.jpg": "2361a6e6bf8ee09b2a4946fcf8514094",
"assets/images/russian-dark1.jpg": "362aa57cc9b5569604adec11f83b0734",
"assets/images/spain-dark1.jpg": "5a0563c94e4126a26dcb0632e50748f4",
"assets/images/russian-light1.jpg": "b2c5a84a05060605456cc396506c583e",
"assets/fonts/CorporateSBold.otf": "7098442646fbde9778d92ee84716617a",
"assets/fonts/AtegraSansMedium.otf": "73e1bae483d46b4b176b9af88aca230a",
"assets/fonts/URWGroteskRegular.ttf": "f7f8574b35c760b380ce842a4bd46f5f",
"assets/fonts/URWGroteskLight.ttf": "7f57561230513152d279749757d8aa54",
"assets/fonts/URWGroteskExtraLight.ttf": "eb001f99166c4a77024cc2cc5131d7bb",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "ef365be4bc8e41d16d35ee41a2b95847",
"assets/AssetManifest.bin": "8b0f7b4cfc7081d7e48cb2919c014a31",
"assets/FontManifest.json": "5ca9e1db91fa59edc55260b13d813bf3",
"assets/NOTICES": "feb98d035f46a5fdf4648f836b1dcf4b",
"assets/AssetManifest.bin.json": "dcfa68fb29928e67b551ab1abc5de12c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "77d395b9e692607bd60e9dd8ff1569d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
