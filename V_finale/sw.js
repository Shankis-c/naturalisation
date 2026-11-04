/* Cap Naturalisation : service worker
   - Précharge les pages et les données pour que le site fonctionne sans connexion.
   - Réseau d'abord (contenu toujours à jour), avec repli sur le cache si le réseau est absent ou trop lent.
   Pour forcer le renouvellement du cache chez tous les utilisateurs, changez le numéro de version ci-dessous. */
const CACHE = 'cap-naturalisation-v1';
const NETWORK_TIMEOUT = 4000; // ms : au-delà, on sert la version en cache
const PRECACHE = [
  './', 'index.html', 'comment-utiliser.html', 'quiz-naturalisation.html', 'quiz-par-theme.html',
  'entrainement-oral.html', 'revision-naturalisation.html', 'entretien-naturalisation.html',
  'questions-par-prefecture.html', 'examen-civique.html', 'examen-civique-csp.html',
  'examen-civique-cr.html', 'quiz-examen-civique.html', 'mes-favoris.html', 'mon-bilan.html', 'jour-j.html',
  'examen-civique-questions.html', 'mentions-legales.html',
  'style.css', 'app.js', 'questions.js', 'interview.js', 'prefecture.js', 'civique.js',
  'manifest.webmanifest', 'favicon.ico',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // un fichier manquant n'empêche pas l'installation des autres
      return Promise.all(PRECACHE.map(function (u) { return cache.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function fromNetwork(req) {
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () { reject(new Error('timeout')); }, NETWORK_TIMEOUT);
    fetch(req).then(function (res) { clearTimeout(timer); resolve(res); }, function (err) { clearTimeout(timer); reject(err); });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Analytics, polices, WhatsApp… passent directement
  e.respondWith(
    fromNetwork(req).then(function (res) {
      if (res && res.status === 200) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) {
        if (hit) return hit;
        if (req.mode === 'navigate') return caches.match('index.html');
        return Response.error();
      });
    })
  );
});
