'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/action_icons/action_notification.png": "df2d8d065d89cdb99b929376237d8afd",
"assets/action_icons/customer_support.png": "1b7b32651e096f5213a5ae85920cbea2",
"assets/action_icons/menu.png": "0cead21736492669a5f03019dc724eed",
"assets/AssetManifest.json": "69cacd3e80dd1ebf24008de4e92dde77",
"assets/drawer_icons/about.png": "dc7a72c897374670830e18c18c7aac37",
"assets/drawer_icons/customer_support.png": "1b7b32651e096f5213a5ae85920cbea2",
"assets/drawer_icons/dashboard_colored.png": "fc9f148aec0e995b9c78fca66ce54fb7",
"assets/drawer_icons/faqs.png": "8fe878d316f51b3c3245b5e14f13fe94",
"assets/drawer_icons/franchise.png": "684fe6b73a8170885f2812511c60b1c4",
"assets/drawer_icons/franchise_colored.png": "01dc2c29baad95c347c4b19e52b7b252",
"assets/drawer_icons/insurance.png": "770a8e059ed6d70d20b9bafd2eff092d",
"assets/drawer_icons/insurance_colored.png": "629b4885d6fedb1eb8ab008c55cd5f44",
"assets/drawer_icons/logout.png": "cc8638943fc9571d6641edba83a607d5",
"assets/drawer_icons/menu.png": "0cead21736492669a5f03019dc724eed",
"assets/drawer_icons/more.png": "f06574e8ab13d5eb93259c03eaf1938d",
"assets/drawer_icons/more_colored.png": "0158d54a19e42d6bae310b6795389b42",
"assets/drawer_icons/mutual_funds.png": "afb7722fef382cc3fefeb8a7ef122912",
"assets/drawer_icons/mutual_funds_colored.png": "842dec3b0a5defeff7b06f5f73290040",
"assets/drawer_icons/news.png": "957ce6f71cecc6a9918a74d572481d6d",
"assets/drawer_icons/notifications.png": "3bfcb1147483e1eb0f19a2852fca4ae3",
"assets/drawer_icons/pcg.png": "f4980b929718b56ebfd830783ebcfc17",
"assets/drawer_icons/plans.png": "514e3b4fef68e2fe62a01cd6258f4f33",
"assets/drawer_icons/price_alert.png": "b623ffb392756c9acda92118873f6579",
"assets/drawer_icons/privacy_policy.png": "c07a7ec329d5625a695de2ad35234955",
"assets/drawer_icons/rate_us.png": "63047e3cce2795d12287b926ad9b9518",
"assets/drawer_icons/search_research.png": "a3e8ab162f3a1be123ff8f6016ed13d7",
"assets/drawer_icons/services.png": "6f0ad0ee7590f1e274cb945edac6bc94",
"assets/drawer_icons/share_app.png": "7e0e013bfcd7c4f4630699d08330389d",
"assets/drawer_icons/support.png": "29c3e50dbdef6d2f7f275f9861825364",
"assets/drawer_icons/t_c.png": "fbe36cc0c17c4af537134a0d71b8d70e",
"assets/drawer_icons/trade.png": "8388ddb0359c8abc9220ef4968e61175",
"assets/drawer_icons/training_videos.png": "ccb6cf357b23c218b5f5e84f7d4f066a",
"assets/drawer_icons/watchlist.png": "0ff7c6cc9f9ada1a4b397a2510c24db1",
"assets/drawer_icons/watchlist_colored.png": "67c8c4663da21f32097ad9f0cb6b326d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/footer_icons/bills_colored.png": "508e65a1fea89f1ac4453edbea9cc220",
"assets/footer_icons/bills_white.png": "697f19383bb5c775982b760d2f9694da",
"assets/footer_icons/funds_colored.png": "d4ba2301a3b46d6b5e4b91daf7eeadbe",
"assets/footer_icons/funds_white.png": "20ea88a6c9bf2fe1f0b29104653223ff",
"assets/footer_icons/order_colored.png": "6e6ed5cb93c618f9f17b7dd124c3e92e",
"assets/footer_icons/order_white.png": "23e3e362bfab53220e779baa5b33f56e",
"assets/footer_icons/portfolio_colored.png": "bae0443c4f030ca615f6df8479a2bfd6",
"assets/footer_icons/portfolio_white.png": "574ee23824aa7517c5a12c55042be047",
"assets/footer_icons/watch_colored.png": "57787ee9d95729750ebac3fcf6539903",
"assets/footer_icons/watch_white.png": "619cde2a7e79fd403b73e1fed8415252",
"assets/icons/buy_blue_colour.png": "9ce4e2a067597f91db277c94ada2fa71",
"assets/icons/customer_support.png": "1b7b32651e096f5213a5ae85920cbea2",
"assets/icons/details_green_colour.png": "d9118b42baaa583a86ebe1813082b46d",
"assets/icons/more_colored.png": "0158d54a19e42d6bae310b6795389b42",
"assets/icons/search_action.png": "9f02ea4068964f48da3dad3e0ddbb9e0",
"assets/icons/sell_red_colour.png": "d2135afde376f3b151368c1534bc10de",
"assets/icons/watch_list_chart.png": "3ae96d101b6487838f1f715a4135c1c0",
"assets/icons/watch_list_depth.png": "6b4bb1a3a2dc858454648f3e0df11e11",
"assets/icons/watch_list_info.png": "11c4d35ddd8650878bbbeab071335d9a",
"assets/images/bg_indices.png": "e212832a303d1928ac32742ef13251fe",
"assets/images/dashboard_colored.png": "fc9f148aec0e995b9c78fca66ce54fb7",
"assets/images/m_icon_big.png": "280ed7f8e5e5a054e03a9968279fd08a",
"assets/images/open_an_acc.png": "c1b736c297d84c1502103b24a77e8868",
"assets/images/sip_background.png": "24c0ebe54b5fcf3dc3b54fddfdda29b3",
"assets/images/sip_money_icon.png": "cf39f4de1267f31a2befc8c801e916f5",
"assets/images/v_rise.png": "dd3294913ef915bd40bb1e43ce8741b8",
"assets/images/xtremsoft_logo.jpeg": "be18f2b370aba1abb90184a8dc0e4d01",
"assets/NOTICES": "d34ede7961aee00fc34a1691a0facaba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1e42056d471f560e4f763090cb197aa",
"/": "e1e42056d471f560e4f763090cb197aa",
"main.dart.js": "765a5d22eae132b5f0676ab3cc65a256",
"manifest.json": "c9c869dfcb007748e40ba6975ad92753",
"version.json": "a6221da249f5e7111a70949d00f9f3f3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
