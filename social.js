/* Cap Naturalisation : invitation à suivre la page Instagram
   - bande défilante permanente en haut du contenu de chaque page
   - message « Suivez-nous sur Instagram » (affiché une fois, rappel après 21 jours)
   Fichier autonome : styles injectés, aucune dépendance. */
(function () {
  'use strict';
  var IG_URL = 'https://www.instagram.com/cap_naturalisation/';
  var IG_NAME = '@cap_naturalisation';
  var KEY = 'cap_ig';                       // {s:'seen'|'followed', t:timestamp}
  var REMIND_MS = 21 * 24 * 3600 * 1000;    // rappel au bout de 21 jours si « Plus tard »
  var DELAY_MS = 14000;                     // délai avant affichage du message

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function track(n, p) { try { if (window.trackEvent) window.trackEvent(n, p || {}); } catch (e) {} }
  function svg(p, cls) { return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : '') + '>' + p + '</svg>'; }
  var IG_ICON = '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>';

  /* ---------- styles ---------- */
  var css = [
    '.ig-tick{position:relative;display:flex;min-width:0;max-width:100%;box-sizing:border-box;contain:layout paint;align-items:center;gap:0;margin:0 0 1.4rem;border-radius:14px;overflow:hidden;background:linear-gradient(90deg,#0d2b5e,#16397a);color:#fff;text-decoration:none;font-family:"Figtree",system-ui,sans-serif;box-shadow:0 8px 22px -14px rgba(13,43,94,.7)}',
    '.ig-tick:hover .ig-track,.ig-tick:focus-visible .ig-track{animation-play-state:paused}',
    '.ig-tick:focus-visible{outline:3px solid #f59e0b;outline-offset:2px}',
    '.ig-badge{flex:none;display:flex;align-items:center;gap:.5rem;padding:.7rem 1rem;background:linear-gradient(45deg,#d4561a,#e1306c 55%,#833ab4);font-weight:800;font-size:.82rem;letter-spacing:.02em;position:relative;z-index:2}',
    '.ig-badge svg{width:20px;height:20px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.ig-view{flex:1;min-width:0;position:relative;height:2.7rem;overflow:hidden;white-space:nowrap;-webkit-mask-image:linear-gradient(90deg,transparent,#000 4%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 4%,#000 94%,transparent)}',
    '.ig-track{position:absolute;left:0;top:0;height:100%;align-items:center;display:inline-flex;animation:igscroll 46s linear infinite;will-change:transform}',
    '.ig-track span{display:inline-flex;align-items:center;gap:.9rem;padding:0 1.1rem;font-size:.9rem;font-weight:600}',
    '.ig-track span::after{content:"";width:6px;height:6px;border-radius:50%;background:#f59e0b;margin-left:.9rem}',
    '.ig-track b{color:#f59e0b;font-weight:800}',
    '.ig-go{flex:none;padding:.7rem 1rem;font-weight:800;font-size:.82rem;background:#fff;color:#0d2b5e;position:relative;z-index:2}',
    '@keyframes igscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}',
    '@media (prefers-reduced-motion:reduce){.ig-track{animation:none}}',
    '@media (max-width:520px){.ig-go{display:none}.ig-badge{padding:.7rem .85rem}.ig-track span{font-size:.85rem}}',
    'body.quiz-focus .ig-tick{display:none}',
    /* modal */
    '.ig-back{position:fixed;inset:0;z-index:310;background:rgba(13,27,46,.58);display:flex;align-items:center;justify-content:center;padding:1rem;overflow-y:auto;animation:igfade .25s ease both}',
    'body.ig-open{overflow:hidden}',
    '.ig-card{position:relative;background:#fff;color:#1a2433;border:1px solid #e1e6ee;border-radius:20px;max-width:560px;width:100%;padding:0 0 1.4rem;margin:auto;box-shadow:0 24px 60px rgba(0,0,0,.3);overflow:hidden;font-family:"Figtree",system-ui,sans-serif;animation:igpop .35s cubic-bezier(.2,1.2,.4,1) both}',
    '.ig-hero{display:flex;align-items:center;gap:1rem;padding:1.5rem 1.6rem;background:linear-gradient(135deg,#0d2b5e,#1d4fa8);color:#fff}',
    '.ig-av{flex:none;width:68px;height:68px;border-radius:50%;padding:3px;background:linear-gradient(45deg,#d4561a,#e1306c 55%,#833ab4)}',
    '.ig-av img{width:100%;height:100%;border-radius:50%;display:block;background:#fff;object-fit:cover;border:3px solid #fff}',
    '.ig-hero small{display:block;font-size:.74rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#f59e0b}',
    '.ig-hero h2{font-family:"Barlow Condensed",system-ui,sans-serif;font-size:2rem;line-height:1.02;margin:.15rem 0 0;font-weight:700}',
    '.ig-x{position:absolute;top:.7rem;right:.7rem;width:34px;height:34px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.12);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}',
    '.ig-x svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round}',
    '.ig-body{padding:1.2rem 1.6rem 0}',
    '.ig-lead{font-size:1rem;line-height:1.5;color:#3b4a5f;margin-bottom:.9rem}',
    '.ig-list{list-style:none;margin:0 0 1.2rem;padding:0}',
    '.ig-list li{display:flex;gap:.85rem;padding:.7rem 0;border-top:1px solid #e8edf4}',
    '.ig-ic{flex:none;width:40px;height:40px;border-radius:11px;background:#eef2fb;color:#0d2b5e;display:flex;align-items:center;justify-content:center}',
    '.ig-ic svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}',
    '.ig-list strong{display:block;font-size:1rem;color:#1a2433}',
    '.ig-list p{margin:.1rem 0 0;font-size:.9rem;line-height:1.5;color:#5b6877}',
    '.ig-btns{display:flex;gap:.7rem;flex-wrap:wrap;align-items:center}',
    '.ig-follow{display:inline-flex;align-items:center;gap:.6rem;padding:.85rem 1.3rem;border-radius:12px;background:linear-gradient(45deg,#d4561a,#e1306c 55%,#833ab4);color:#fff;font-weight:800;font-size:1rem;text-decoration:none;border:0;cursor:pointer}',
    '.ig-follow svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.ig-later{padding:.85rem 1.1rem;border-radius:12px;border:1px solid #cdd6e3;background:#fff;color:#1a2433;font-weight:700;font-size:.95rem;cursor:pointer}',
    '.ig-done{display:block;margin:.9rem auto 0;background:none;border:0;color:#5b6877;font-size:.85rem;text-decoration:underline;cursor:pointer}',
    '@keyframes igfade{from{opacity:0}to{opacity:1}}@keyframes igpop{from{opacity:0;transform:translateY(24px) scale(.96)}to{opacity:1;transform:none}}',
    '@media (prefers-reduced-motion:reduce){.ig-card,.ig-back{animation:none}}',
    '@media (max-width:480px){.ig-hero h2{font-size:1.7rem}.ig-btns .ig-follow,.ig-btns .ig-later{width:100%;justify-content:center}}',
    /* thème sombre */
    ':root[data-theme=dark] .ig-card{background:#16202f;color:#e8edf5;border-color:#2b3a50}',
    ':root[data-theme=dark] .ig-lead,:root[data-theme=dark] .ig-list p{color:#aab6c7}',
    ':root[data-theme=dark] .ig-list strong{color:#f1f5fb}',
    ':root[data-theme=dark] .ig-list li{border-color:#2b3a50}',
    ':root[data-theme=dark] .ig-ic{background:#22324a;color:#9db8e8}',
    ':root[data-theme=dark] .ig-later{background:#1b2738;color:#e8edf5;border-color:#34455e}',
    ':root[data-theme=dark] .ig-done{color:#aab6c7}',
    ':root[data-theme=dark] .ig-back{background:rgba(0,0,0,.7)}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'ig-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  /* ---------- bande défilante ---------- */
  var MSGS = [
    'Suivez <b>' + IG_NAME + '</b> sur Instagram',
    'Les <b>nouveautés</b> du site, annoncées en premier',
    'Des <b>quiz</b> et des conseils d’entretien en vidéos courtes',
    'Posez vos <b>questions</b> à la communauté',
    'Un Reel pour réviser en 20 secondes',
    '100 % gratuit, sans publicité'
  ];
  function buildTicker() {
    if (document.getElementById('ig-tick')) return;
    var host = document.querySelector('main.main') || document.querySelector('main') || document.querySelector('.wrap,.container,.page');
    var one = MSGS.map(function (m) { return '<span>' + m + '</span>'; }).join('');
    var a = document.createElement('a');
    a.id = 'ig-tick'; a.className = 'ig-tick'; a.href = IG_URL; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Suivre Cap Naturalisation sur Instagram (s’ouvre dans un nouvel onglet)');
    a.innerHTML = '<span class="ig-badge">' + svg(IG_ICON) + 'Instagram</span>' +
      '<span class="ig-view"><span class="ig-track" aria-hidden="true">' + one + one + '</span></span>' +
      '<span class="ig-go">Suivre →</span>';
    a.addEventListener('click', function () { track('instagram_click', { source: 'bandeau' }); });
    if (host) host.insertBefore(a, host.firstChild); else document.body.insertBefore(a, document.body.firstChild);
  }

  /* ---------- message d'invitation ---------- */
  var last = null;
  function state() { try { return JSON.parse(ls(KEY) || 'null'); } catch (e) { return null; } }
  function save(s) { ls(KEY, JSON.stringify({ s: s, t: Date.now() })); }
  function due() {
    var s = state();
    if (!s) return true;
    if (s.s === 'followed') return false;
    return Date.now() - s.t > REMIND_MS;
  }
  var ITEMS = [
    ['<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', 'Les nouveautés en premier', 'Nouvelles fonctionnalités, nouvelles questions, mises à jour du Livret du citoyen : tout est annoncé sur la page.'],
    ['<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M10 9.5l5 2.5-5 2.5z"/>', 'Des quiz et des conseils en vidéos courtes', 'Réviser en 20 secondes, repérer les pièges de l’entretien, retenir les points clés de l’examen civique.'],
    ['<path d="M4 5h16v11H9l-5 4z"/>', 'Posez vos questions', 'Une question sur l’examen, l’entretien ou le dossier ? Écrivez-nous en message ou en commentaire : vos questions inspirent les prochains contenus.'],
    ['<path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>', 'Une communauté qui prépare la même étape', 'Retrouvez d’autres candidats, échangez, et ne restez pas seul(e) face à la préparation.']
  ];
  function onKey(e) {
    if (e.key === 'Escape') { closeIg('later'); return; }
    if (e.key !== 'Tab') return;
    var f = document.querySelectorAll('#ig-modal button,#ig-modal a'); if (!f.length) return;
    var a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
  function closeIg(kind) {
    var m = document.getElementById('ig-modal'); if (m) m.remove();
    document.body.classList.remove('ig-open');
    document.removeEventListener('keydown', onKey);
    save(kind === 'followed' ? 'followed' : 'seen');
    if (last && last.focus) try { last.focus(); } catch (e) {}
  }
  window.closeInstagramInvite = closeIg;
  window.showInstagramInvite = function () {
    if (document.getElementById('ig-modal')) return;
    last = document.activeElement;
    var h = '<div class="ig-back" id="ig-modal" role="dialog" aria-modal="true" aria-labelledby="ig-title"><div class="ig-card">' +
      '<button type="button" class="ig-x" aria-label="Fermer" id="ig-x">' + svg('<path d="M6 6l12 12M18 6L6 18"/>') + '</button>' +
      '<div class="ig-hero"><div class="ig-av"><img src="icons/logo.png" alt="" width="62" height="62"></div><div><small>Restez connecté</small><h2 id="ig-title">Suivez Cap Naturalisation sur Instagram</h2></div></div>' +
      '<div class="ig-body"><p class="ig-lead">Le site est gratuit, et la page ' + IG_NAME + ' est <strong>le meilleur moyen de ne rien rater</strong>.</p><ul class="ig-list">';
    ITEMS.forEach(function (x) { h += '<li><span class="ig-ic">' + svg(x[0]) + '</span><div><strong>' + x[1] + '</strong><p>' + x[2] + '</p></div></li>'; });
    h += '</ul><div class="ig-btns"><a class="ig-follow" id="ig-follow" href="' + IG_URL + '" target="_blank" rel="noopener noreferrer">' + svg(IG_ICON) + 'Suivre ' + IG_NAME + '</a>' +
      '<button type="button" class="ig-later" id="ig-later">Plus tard</button></div>' +
      '<button type="button" class="ig-done" id="ig-done">J’ai déjà suivi la page</button></div></div></div>';
    document.body.insertAdjacentHTML('beforeend', h);
    document.body.classList.add('ig-open');
    document.getElementById('ig-x').onclick = function () { closeIg('later'); };
    document.getElementById('ig-later').onclick = function () { track('instagram_later', {}); closeIg('later'); };
    document.getElementById('ig-done').onclick = function () { track('instagram_already', {}); closeIg('followed'); };
    document.getElementById('ig-follow').addEventListener('click', function () { track('instagram_click', { source: 'message' }); closeIg('followed'); });
    document.getElementById('ig-modal').addEventListener('click', function (e) { if (e.target.id === 'ig-modal') closeIg('later'); });
    document.getElementById('ig-follow').focus();
    document.addEventListener('keydown', onKey);
    track('instagram_invite_view', {});
  };

  function busy() {
    var b = document.body;
    return !!(document.getElementById('wn-modal') || b.classList.contains('quiz-focus') || b.classList.contains('wn-open'));
  }
  function schedule(tries) {
    if (!due()) return;
    setTimeout(function () {
      if (busy() && tries < 6) { schedule(tries + 1); return; }
      if (!busy()) window.showInstagramInvite();
    }, DELAY_MS);
  }

  function init() {
    buildTicker();
    schedule(0);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
