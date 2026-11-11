// ══════════════════════
// DONNÉES
// ══════════════════════
var DB = (typeof QUESTIONS!=='undefined'?QUESTIONS:[]).map(function(q){
  return {th:q.theme, q:q.question, r:q.reponse, opts:q.choix, c:q.correct};
});
var IQS = (typeof INTERVIEW_QUESTIONS!=='undefined'?INTERVIEW_QUESTIONS:[]).map(function(q){
  return {icon:q.icon, q:q.question, why:q.pourquoi, tips:q.conseils, ex:q.exemple, avoid:q.eviter||[]};
});
var CIVIQUE_DB = (typeof CIVIQUE_QUESTIONS!=='undefined'?CIVIQUE_QUESTIONS:[]).map(function(q){
  return {th:q.theme, q:q.question, r:q.reponse, src:q.source||['csp','cr']};
});
function civiqueThemes(){
  var seen=[],out=[];
  CIVIQUE_DB.forEach(function(q){if(seen.indexOf(q.th)===-1){seen.push(q.th);out.push(q.th);}});
  return out;
}
function civiquePool(source,theme){
  return CIVIQUE_DB.filter(function(q){
    var srcOk = (source==='all') || q.src.indexOf(source)!==-1;
    var thOk = (!theme || theme==='all') || q.th===theme;
    return srcOk && thOk;
  });
}
function buildCivicOptions(item,poolTh){
  var distractors=poolTh.filter(function(x){return x.r!==item.r;});
  if(distractors.length<3)distractors=CIVIQUE_DB.filter(function(x){return x.r!==item.r;});
  var wrongs=shuffle(distractors).slice(0,3).map(function(x){return x.r;});
  var opts=shuffle([item.r].concat(wrongs));
  return {opts:opts, c:opts.indexOf(item.r)};
}

// ══════════════════════
// STORAGE
// ══════════════════════
var SK = 'rf_v4';
function loadData(){
  try{var r=localStorage.getItem(SK);if(r){var p=JSON.parse(r);if(p.interviewDate===undefined)p.interviewDate=null;if(!p.badges)p.badges=[];return p;}}catch(e){}
  return {history:[],thStats:{},streak:{last:'',count:0},favoris:[],interviewDate:null,badges:[]};
}
function saveData(){ try{localStorage.setItem(SK,JSON.stringify(G.data));}catch(e){} }
var LS_EXTRA={parcours:'cap_parcours',livret:'cap_livret'};  // progression du parcours d'apprentissage et des fiches du livret
function lsRead(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
function exportData(){
  var out=JSON.parse(JSON.stringify(G.data));
  for(var n in LS_EXTRA){var v=lsRead(LS_EXTRA[n]);if(v)out[n]=v;}
  var b=new Blob([JSON.stringify(out,null,2)],{type:'application/json'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(b);
  a.download='progression-naturalisation-'+new Date().toISOString().slice(0,10)+'.json';
  a.click(); toast('✅ Progression exportée !');
  trackEvent('data_export',{quiz_count:(G.data.history||[]).length});
}
function importData(input){
  var file=input.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var p=JSON.parse(e.target.result);
      if(p.history&&p.thStats){
        if(!p.favoris)p.favoris=[];
        if(!p.badges)p.badges=[];
        for(var n in LS_EXTRA){
          try{if(p[n])localStorage.setItem(LS_EXTRA[n],JSON.stringify(p[n]));else localStorage.removeItem(LS_EXTRA[n]);}catch(e){}
          delete p[n];
        }
        G.data=p;saveData();updateSidebar();
        if(typeof buildLivret==='function')buildLivret();
        toast('✅ Progression importée !');
        if(currentView()==='dashboard')buildDashboard();
      }else{toast('❌ Fichier invalide');}
    }catch(err){toast('❌ Erreur lors de l\'import');}
  };
  reader.readAsText(file);input.value='';
}
function confirmReset(){
  if(confirm('Supprimer toute votre progression (quiz, favoris, badges et parcours d\'apprentissage) ? Cette action est irréversible.')){
    for(var n in LS_EXTRA){try{localStorage.removeItem(LS_EXTRA[n]);}catch(e){}}
    G.data={history:[],thStats:{},streak:{last:'',count:0},favoris:[],interviewDate:G.data.interviewDate||null,badges:[]};
    saveData();updateSidebar();
    if(typeof buildLivret==='function')buildLivret();
    if(currentView()==='dashboard')buildDashboard();
    toast('🗑 Progression réinitialisée');
  }
}
function toast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},2800);
}

// ══════════════════════
// STATE
// ══════════════════════
var G={
  data:loadData(),
  qs:[],idx:0,answers:[],active:false,timer:null,sec:30,withTimer:true,
  tqs:[],tidx:0,tanswers:[],ttheme:null,tqty:10,tchrono:true,
  oqs:[],oidx:0,oknew:0,onope:0,omissed:[],otheme:'all'
};

// ══════════════════════
// NAV
// ══════════════════════
function openSidebar(){document.getElementById('appSidebar').classList.add('open');document.getElementById('sidebarOverlay').classList.add('open');}
function closeSidebar(){document.getElementById('appSidebar').classList.remove('open');document.getElementById('sidebarOverlay').classList.remove('open');}
function dismissDonate(btn){
  var c=btn&&btn.closest?btn.closest('[data-donate-card]'):null;
  if(c)c.style.display='none';
  trackEvent('donate_dismiss',{});
}
function showDonate(){
  document.querySelectorAll('[data-donate-card]').forEach(function(c){c.style.display='';});
}
// ══════════════════════
// PAGE « COMMENT UTILISER »
// ══════════════════════
function buildAide(){
  var el=document.getElementById('aide-badges');
  if(el){
    if(!G.data.badges)G.data.badges=[];
    el.innerHTML=BADGES.map(function(b){
      var unlocked=G.data.badges.indexOf(b.id)!==-1;
      return '<div class="badge-item '+(unlocked?'unlocked':'locked')+'" title="'+b.desc+'">' +
        '<div class="badge-ic">'+b.icon+'</div>' +
        '<div class="badge-name">'+b.name+'</div>' +
        '<div class="badge-desc">'+(unlocked?b.desc:'🔒 '+b.desc)+'</div></div>';
    }).join('');
  }
  window.scrollTo(0,0);
}
// ══════════════════════
// ASTUCES ANIMÉES (accueil) — le texte « s'écrit » de temps en temps
// ══════════════════════
var TIPS=[
  {id:'oral',ic:'🗣️',t:"N'hésitez pas à faire un test oral : s'entraîner à voix haute rassure le jour de l'entretien.",b:"Essayer l'oral",a:function(){go('oral');}},
  {id:'themes',ic:'🎯',t:"Un thème vous résiste ? Découvrez la rubrique Quiz par thème pour cibler vos points faibles.",b:"Voir les thèmes",a:function(){go('theme-quiz');}},
  {id:'civique',ic:'📝',t:"Vous préparez l'examen civique ? Entraînez-vous avec les listes officielles CSP et CR.",b:"Ouvrir",a:function(){go('examen-civique');}},
  {id:'favoris',ic:'⭐',t:"Une question vous échappe ? Cliquez sur l'étoile ☆ pour la retrouver dans vos favoris.",b:"Voir comment",a:function(){go('aide');}},
  {id:'badges',ic:'🏆',t:"Révisez plusieurs jours de suite pour débloquer des badges.",b:"Mes badges",a:function(){go('dashboard');}},
  {id:'don',ic:'💛',t:"Vous aimez le projet ? Soutenez-le pour qu'il reste 100 % gratuit.",b:"Soutenir",a:function(){trackEvent('donate_click',{location:'home_ticker'});window.open('https://paypal.me/shankislaitk','_blank');}},
  {id:'contact',ic:'✉️',t:"Une question, une remarque ? Contactez-nous par e-mail.",b:"Écrire",a:function(){showContactBubble(document.getElementById('tip-go'));}},
  {id:'wa',ic:'📲',t:"Ce site vous aide ? Partagez-le sur WhatsApp avec vos proches qui préparent aussi leur naturalisation.",b:"Partager",a:function(){trackEvent('whatsapp_share',{location:'home_ticker'});window.open(WA_URL,'_blank');}},
  {id:'install',ic:'📲',t:"Installez Cap Naturalisation sur votre téléphone : une icône sur l'écran d'accueil, et le site s'ouvre comme une application.",b:"Installer",a:function(){installApp('home_ticker');},ok:function(){return canInstallHint();}},
  {id:'ig',ic:'📸',t:"Suivez Cap Naturalisation sur Instagram pour ne rien manquer des nouveautés du site.",b:"Suivre",a:function(){trackEvent('instagram_click',{location:'home_ticker'});window.open(IG_URL,'_blank');}},
  {id:'guide',ic:'💡',t:"Première visite ? Découvrez comment profiter au maximum du site.",b:"Mode d'emploi",a:function(){go('aide');}},
  {id:'jourj',ic:'📅',t:"Votre entretien approche ? Indiquez sa date dans Jour J pour un suivi personnalisé.",b:"Jour J",a:function(){go('mon-entretien');},ok:function(){return !(G.data&&G.data.interviewDate);}},
  {id:'pref',ic:'🏛️',t:"Chaque préfecture a ses habitudes : entraînez-vous avec les questions de la vôtre.",b:"Préfecture",a:function(){go('prefecture');}},
  {id:'fb',ic:'💬',t:"Après votre entretien, partagez votre retour dans le groupe Facebook pour aider les autres.",b:"Rejoindre",a:function(){window.open('https://www.facebook.com/groups/1663580948311419/','_blank');}}
];
function initHomeTicker(){
  var bar=document.getElementById('tip-bar');
  if(!bar)return;
  var ic=document.getElementById('tip-ic'),txt=document.getElementById('tip-txt'),sr=document.getElementById('tip-sr'),btn=document.getElementById('tip-go');
  var reduce=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var order=shuffle(TIPS.map(function(x,i){return i;}));
  var pos=0,cur=null,timer=null;
  function later(fn,ms){clearTimeout(timer);timer=setTimeout(fn,ms);}
  function visible(){
    var h=document.getElementById('view-home');
    return !document.hidden&&h&&h.classList.contains('active');
  }
  function nextTip(){
    for(var k=0;k<order.length;k++){
      var t=TIPS[order[pos%order.length]];pos++;
      if(!t.ok||t.ok())return t;
    }
    return TIPS[0];
  }
  function show(){
    if(!visible()){later(show,1500);return;}
    cur=nextTip();
    ic.textContent=cur.ic;btn.textContent=cur.b+' →';sr.textContent=cur.t;
    if(reduce){txt.textContent=cur.t;later(hide,9000);return;}
    var n=0;txt.textContent='';bar.classList.add('typing');
    (function type(){
      if(!visible()){later(type,1200);return;}
      n++;txt.textContent=cur.t.slice(0,n);
      if(n<cur.t.length){later(type,26);}
      else{bar.classList.remove('typing');later(hide,7000);}
    })();
  }
  function hide(){
    if(reduce){txt.textContent='';later(show,3000);return;}
    var n=txt.textContent.length;bar.classList.add('typing');
    (function erase(){
      n-=3;
      if(n<=0){txt.textContent='';bar.classList.remove('typing');later(show,2500+Math.random()*3500);return;}
      txt.textContent=cur.t.slice(0,n);later(erase,12);
    })();
  }
  btn.onclick=function(){
    if(!cur){go('aide');return;}
    trackEvent('home_tip_click',{tip:cur.id});
    cur.a();
  };
  later(show,1200);
}
function trackEvent(name,params){
  try{
    if(typeof gtag==='function')gtag('event',name,params||{});
  }catch(e){ /* GA indisponible (bloqueur de pub, etc.) : on ignore */ }
}
var PAGES={"home": "index.html", "aide": "comment-utiliser.html", "quiz": "quiz-naturalisation.html", "theme-quiz": "quiz-par-theme.html", "oral": "entrainement-oral.html", "revision": "revision-naturalisation.html", "interview": "entretien-naturalisation.html", "prefecture": "questions-par-prefecture.html", "favoris": "mes-favoris.html", "dashboard": "mon-bilan.html", "mon-entretien": "jour-j.html", "examen-civique": "examen-civique.html", "examen-csp": "examen-civique-csp.html", "examen-cr": "examen-civique-cr.html", "civique-quiz": "quiz-examen-civique.html", "livret": "livret-citoyen.html"};
function currentView(){return document.body.getAttribute('data-view')||'home';}
function initView(v){
  if(v==='prefecture')buildPrefLanding();
  if(v==='home')buildHome();
  if(v==='aide')buildAide();
  if(v==='revision')buildRevision();
  if(v==='interview')buildInterview();
  if(v==='dashboard')buildDashboard();
  if(v==='favoris')buildFavoris();
  if(v==='theme-quiz')buildThemeQuizLanding();
  if(v==='civique-quiz')buildCivicQuizLanding();
  if(v==='oral')buildOralLanding();
  if(v==='mon-entretien')buildInterviewDate();
  if(v==='livret'&&typeof buildLivret==='function')buildLivret();
  if(v==='quiz'&&!G.active){
    document.getElementById('quiz-landing').style.display='block';
    document.getElementById('quiz-screen').style.display='none';
    document.getElementById('quiz-results').style.display='none';
  }
  updateSidebar();
}
// Navigation : chaque rubrique est maintenant une page séparée.
function go(v){
  if(!PAGES[v])v='home';
  if(v!==currentView()){if(!confirmLeave())return;window.location.href=PAGES[v];return;}
  initView(v);
  window.scrollTo(0,0);
}

var shuffle=function(a){return[...a].sort(function(){return Math.random()-.5;});};
var themes=function(){return[...new Set(DB.map(function(q){return q.th;}))];};

// ══════════════════════
// HOME
// ══════════════════════
function buildHome(){
  document.getElementById('h-total').textContent=DB.length;
  buildHomeInterviewWidget();
  document.getElementById('home-themes').innerHTML=themes().map(function(t){
    return '<div class="theme-chip" onclick="go(\'theme-quiz\')">' +
      '<div class="tc-icon">'+t.split(' ')[0]+'</div>' +
      '<div class="tc-name">'+t.split(' ').slice(1).join(' ')+'</div>' +
      '<div class="tc-n">'+DB.filter(function(q){return q.th===t;}).length+'</div></div>';
  }).join('');
}

// ══════════════════════
// FAVORIS
// ══════════════════════
function isFav(q){return G.data.favoris.some(function(f){return f.q===q.q;});}
function toggleFav(q){
  var i=G.data.favoris.findIndex(function(f){return f.q===q.q;});
  if(i>=0){G.data.favoris.splice(i,1);toast('☆ Retiré des favoris');}
  else{G.data.favoris.push({q:q.q,th:q.th,r:q.r,opts:q.opts,c:q.c});toast('⭐ Ajouté aux favoris');trackEvent('favorite_added',{theme:q.th});}
  saveData();updateSidebar();
  return isFav(q);
}
function toggleFavCurrent(prefix){
  var arr=prefix==='qz'?G.qs:G.tqs;
  var idx=prefix==='qz'?G.idx:G.tidx;
  if(!arr.length)return;
  var now=toggleFav(arr[idx]);
  document.getElementById(prefix+'-fav').textContent=now?'★':'☆';
  document.getElementById(prefix+'-fav').classList.remove('fav-pulse');
  syncFavHint(prefix);
}
function syncFavHint(prefix){
  var h=document.getElementById(prefix+'-fav-hint');
  if(!h)return;
  var arr=prefix==='qz'?G.qs:G.tqs;
  var idx=prefix==='qz'?G.idx:G.tidx;
  var fav=arr.length&&isFav(arr[idx]);
  h.classList.toggle('done',!!fav);
  h.innerHTML=fav
    ?'⭐ Ajoutée à vos favoris — retrouvez-la dans l\'onglet <strong>Favoris</strong> pour la réviser.'
    :'💡 Question ratée ? Cliquez ici (ou sur l\'étoile ☆ en haut à droite) pour l\'ajouter à vos <strong>favoris</strong> et la réviser plus tard.';
}
function showFavHint(prefix){
  var b=document.getElementById(prefix+'-banner');
  if(!b)return;
  var h=document.createElement('button');
  h.type='button';h.className='fav-hint';h.id=prefix+'-fav-hint';
  h.onclick=function(){
    var arr=prefix==='qz'?G.qs:G.tqs;
    var idx=prefix==='qz'?G.idx:G.tidx;
    if(arr.length&&!isFav(arr[idx]))toggleFavCurrent(prefix);
  };
  b.appendChild(h);
  syncFavHint(prefix);
  var f=document.getElementById(prefix+'-fav');
  if(f){f.classList.remove('fav-pulse');void f.offsetWidth;f.classList.add('fav-pulse');}
}
function buildFavoris(){
  var favs=G.data.favoris;
  var el=document.getElementById('favoris-content');
  if(!favs||favs.length===0){
    el.innerHTML='<div class="fav-empty"><div class="fav-empty-icon">☆</div>' +
      '<div class="fav-empty-title">Aucun favori pour l\'instant</div>' +
      '<div class="fav-empty-sub">Pendant le quiz, cliquez sur l\'étoile ★ à côté du thème<br>pour marquer une question à retravailler.</div></div>';
    return;
  }
  var byTheme={};
  favs.forEach(function(f){if(!byTheme[f.th])byTheme[f.th]=[];byTheme[f.th].push(f);});
  el.innerHTML=Object.keys(byTheme).map(function(t){
    var qs=byTheme[t];
    var items=qs.map(function(q,i){
      var id='fi'+i+t.slice(2,5);
      return '<div class="fav-item" id="'+id+'">' +
        '<div class="fav-hd" onclick="tFav(\''+id+'\')">' +
        '<span class="fav-star">⭐</span>' +
        '<span class="fav-q">'+q.q+'</span>' +
        '<button class="fav-remove" onclick="event.stopPropagation();removeFav(\''+q.q.replace(/'/g,"\\'")+'\')" title="Retirer">✕</button>' +
        '<span class="fav-arr">▾</span></div>' +
        '<div class="fav-body">' +
        '<div class="acc-ans" style="margin-top:.8rem">💡 '+q.r+'</div>' +
        '<div class="acc-opts-l">Bonne réponse</div>' +
        '<div class="acc-opts"><div class="acc-opt ok">✔ '+q.opts[q.c]+'</div></div>' +
        '</div></div>';
    }).join('');
    return '<div style="margin-bottom:1.8rem">' +
      '<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+t+'</div><div class="sec-div-line"></div></div>' +
      items+'</div>';
  }).join('');
}
function tFav(id){var el=document.getElementById(id);if(el)el.classList.toggle('open');}
function removeFav(qtext){
  G.data.favoris=G.data.favoris.filter(function(f){return f.q!==qtext;});
  saveData();updateSidebar();buildFavoris();toast('☆ Retiré des favoris');
}

// ══════════════════════
// QUIZ DE NATURALISATION
// ══════════════════════
function startQuiz(theme,qty,withTimer){
  if(G.timer)clearInterval(G.timer);
  var pool=theme?DB.filter(function(q){return q.th===theme;}):DB;
  G.qs=shuffle(pool).slice(0,Math.min(qty,pool.length));
  G.idx=0;G.answers=[];G.active=true;G.withTimer=withTimer;
  document.getElementById('quiz-landing').style.display='none';
  document.getElementById('quiz-results').style.display='none';
  document.getElementById('quiz-screen').style.display='block';
  trackEvent('quiz_start',{quiz_type:'naturalisation',theme:theme||'all',quantity:G.qs.length,timer:!!withTimer});
  renderQ();
}
function renderQ(){
  var q=G.qs[G.idx],n=G.idx+1,tot=G.qs.length;
  document.getElementById('qz-count').innerHTML=n+' <small>/ '+tot+'</small>';
  document.getElementById('qz-prog').style.width=((n-1)/tot*100)+'%';
  document.getElementById('qz-theme').textContent=q.th;
  document.getElementById('qz-q').textContent=q.q;
  document.getElementById('qz-banner').innerHTML='';
  document.getElementById('qz-expl').innerHTML='';
  document.getElementById('qz-next').style.display='none';
  document.getElementById('qz-fav').textContent=isFav(q)?'★':'☆';document.getElementById('qz-fav').classList.remove('fav-pulse');
  var keys=['A','B','C','D'];
  var sh=shuffle([0,1,2,3]);
  document.getElementById('qz-opts').innerHTML=sh.map(function(orig,i){
    return '<button class="opt" onclick="pick(this,'+orig+','+q.c+',\''+q.r.replace(/'/g,"\\'").replace(/\n/g,' ')+'\')">' +
      '<span class="opt-key">'+keys[i]+'</span>'+q.opts[orig]+'</button>';
  }).join('');
  var tw=document.getElementById('qz-timer');
  if(G.withTimer){tw.style.display='flex';startTimer();}
  else{tw.style.display='none';if(G.timer)clearInterval(G.timer);}
}
function startTimer(){
  if(G.timer)clearInterval(G.timer);
  G.sec=30;updateTimer(30);
  G.timer=setInterval(function(){G.sec--;updateTimer(G.sec);if(G.sec<=0){clearInterval(G.timer);timeout();}},1000);
}
function updateTimer(s){
  var fg=document.getElementById('t-fg'),txt=document.getElementById('t-txt');
  fg.style.strokeDashoffset=138.2*(1-s/30);txt.textContent=s;
  fg.classList.toggle('urgent',s<=10);txt.classList.toggle('urgent',s<=10);
}
function timeout(){
  var q=G.qs[G.idx];
  G.answers.push({q:q.q,ok:false,to:true,correct:q.opts[q.c],given:'—',th:q.th});
  updateTh(q.th,false);
  document.querySelectorAll('#qz-opts .opt').forEach(function(b){
    b.disabled=true;
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[q.c])b.classList.add('show-ok');
  });
  document.getElementById('qz-banner').innerHTML='<div class="result-bar to">⏰ Temps écoulé — Bonne réponse : <strong>'+q.opts[q.c]+'</strong></div>';
  document.getElementById('qz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+q.r+'</div>';showFavHint('qz');
  document.getElementById('qz-next').style.display='inline-block';
}
function pick(btn,chosen,correct,expl){
  if(btn.disabled)return;
  clearInterval(G.timer);
  var q=G.qs[G.idx],ok=chosen===correct;
  document.querySelectorAll('#qz-opts .opt').forEach(function(b){b.disabled=true;});
  btn.classList.add(ok?'correct':'wrong');
  if(!ok)document.querySelectorAll('#qz-opts .opt').forEach(function(b){
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[correct])b.classList.add('show-ok');
  });
  G.answers.push({q:q.q,ok:ok,to:false,correct:q.opts[correct],given:q.opts[chosen],th:q.th});
  updateTh(q.th,ok);
  document.getElementById('qz-banner').innerHTML=ok
    ?'<div class="result-bar ok">✅ Bonne réponse !</div>'
    :'<div class="result-bar ko">✕ Mauvaise réponse — Bonne réponse : <strong>'+q.opts[correct]+'</strong></div>';
  document.getElementById('qz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+expl+'</div>';if(!ok)showFavHint('qz');
  document.getElementById('qz-next').style.display='inline-block';
}
function nextQ(){G.idx++;G.idx>=G.qs.length?finishQuiz():renderQ();}
function finishQuiz(){showDonate();
  clearInterval(G.timer);G.active=false;
  var ok=G.answers.filter(function(a){return a.ok;}).length;
  var tot=G.answers.length,pct=Math.round(ok/tot*100);
  var toC=G.answers.filter(function(a){return a.to;}).length;
  G.data.history.push({date:new Date().toISOString(),score:ok,tot:tot,pct:pct,mode:'main'});
  updateStreak();saveData();
  trackEvent('quiz_complete',{quiz_type:'naturalisation',score:ok,total:tot,percent:pct}); 
  document.getElementById('quiz-screen').style.display='none';
  document.getElementById('quiz-results').style.display='block';
  document.getElementById('res-sc').innerHTML=ok+'<small>/'+tot+'</small>';
  document.getElementById('res-pct-val').textContent=pct+'%';
  document.getElementById('rs-ok').textContent=ok;
  document.getElementById('rs-ko').textContent=tot-ok-toC;
  document.getElementById('rs-to').textContent=toC;
  var m,c;
  if(pct>=85){m='🌟 Excellent — Vous êtes prêt(e) !';c='var(--success)';}
  else if(pct>=70){m='👍 Bien — Continuez à réviser';c='var(--warning)';}
  else if(pct>=50){m='📖 Correct — Encore un effort';c='var(--navy)';}
  else{m='🔄 À retravailler — Persévérez !';c='var(--error)';}
  document.getElementById('res-mention').style.color=c;
  document.getElementById('res-mention').textContent=m;
  document.getElementById('res-date').textContent=new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  var byTh={};
  G.answers.forEach(function(a){if(!byTh[a.th])byTh[a.th]={ok:0,tot:0};byTh[a.th].tot++;if(a.ok)byTh[a.th].ok++;});
  document.getElementById('res-themes').innerHTML=Object.entries(byTh).map(function(e){
    var t=e[0],s=e[1],p=Math.round(s.ok/s.tot*100),bc=p>=70?'var(--success)':p>=50?'var(--warning)':'var(--error)';
    return '<div class="theme-res-row"><div class="trr-name">'+t+'</div>' +
      '<div class="trr-bar-w"><div class="trr-bar" style="width:'+p+'%;background:'+bc+'"></div></div>' +
      '<div class="trr-sc" style="color:'+bc+'">'+s.ok+'/'+s.tot+'</div></div>';
  }).join('');
  var wrongs=G.answers.filter(function(a){return!a.ok;});
  document.getElementById('res-wrongs').innerHTML=wrongs.length
    ?'<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+wrongs.length+' erreur(s) à revoir</div><div class="sec-div-line"></div></div>' +
      wrongs.map(function(a){
        return '<div class="wrong-item"><div class="wi-q">'+a.q+'</div>' +
          '<div class="wi-given">'+(a.to?'⏰ Temps écoulé':'Votre réponse : '+a.given)+'</div>' +
          '<div class="wi-correct">✔ '+a.correct+'</div></div>';
      }).join('')
    :'<div style="text-align:center;padding:1.2rem;color:var(--success);font-family:var(--font-b);font-weight:700">🎉 Aucune erreur !</div>';
  updateSidebar();
  setTimeout(function(){try{checkBadges();}catch(e){}},0);
}

// ══════════════════════
// QUIZ PAR THÈME
// ══════════════════════
function buildThemeQuizLanding(){
  var ts=themes();if(!G.ttheme)G.ttheme=ts[0];
  document.getElementById('tq-theme-sel').innerHTML=ts.map(function(t){
    return '<button class="theme-sel-btn'+(G.ttheme===t?' sel':'')+'" onclick="selTQTheme(\''+t.replace(/'/g,"\\'")+'\')">' +
      t.split(' ')[0]+' '+t.split(' ').slice(1).join(' ')+'</button>';
  }).join('');
  document.getElementById('tq-qty').textContent=G.tqty;
  document.getElementById('tq-chrono-track').className='tog-track'+(G.tchrono?' on':'');
  document.getElementById('tq-chrono-lbl').textContent=G.tchrono?'Activé':'Désactivé';
  document.getElementById('tq-landing').style.display='block';
  document.getElementById('tq-screen').style.display='none';
  document.getElementById('tq-results').style.display='none';
}
function selTQTheme(t){
  G.ttheme=t;
  document.querySelectorAll('#tq-theme-sel .theme-sel-btn').forEach(function(b){b.classList.remove('sel');});
  event.target.classList.add('sel');
  var max=DB.filter(function(q){return q.th===t;}).length;
  if(G.tqty>max){G.tqty=max;document.getElementById('tq-qty').textContent=G.tqty;}
}
function changeQty(d){
  var max=DB.filter(function(q){return q.th===G.ttheme;}).length;
  G.tqty=Math.max(5,Math.min(G.tqty+d,max));
  document.getElementById('tq-qty').textContent=G.tqty;
}
function toggleChrono(){
  G.tchrono=!G.tchrono;
  document.getElementById('tq-chrono-track').className='tog-track'+(G.tchrono?' on':'');
  document.getElementById('tq-chrono-lbl').textContent=G.tchrono?'Activé':'Désactivé';
}
function resetThemeQuiz(){
  document.getElementById('tq-results').style.display='none';
  document.getElementById('tq-screen').style.display='none';
  document.getElementById('tq-landing').style.display='block';
}
function launchThemeQuiz(){
  if(G.timer)clearInterval(G.timer);
  var pool=DB.filter(function(q){return q.th===G.ttheme;});
  G.tqs=shuffle(pool).slice(0,Math.min(G.tqty,pool.length));
  G.tidx=0;G.tanswers=[];
  document.getElementById('tq-landing').style.display='none';
  document.getElementById('tq-results').style.display='none';
  document.getElementById('tq-screen').style.display='block';
  trackEvent('quiz_start',{quiz_type:'theme',theme:G.ttheme||'all',quantity:G.tqs.length});
  renderTQ();
}
function renderTQ(){
  var q=G.tqs[G.tidx],n=G.tidx+1,tot=G.tqs.length;
  document.getElementById('tqz-count').innerHTML=n+' <small>/ '+tot+'</small>';
  document.getElementById('tqz-prog').style.width=((n-1)/tot*100)+'%';
  document.getElementById('tqz-theme').textContent=q.th;
  document.getElementById('tqz-q').textContent=q.q;
  document.getElementById('tqz-banner').innerHTML='';
  document.getElementById('tqz-expl').innerHTML='';
  document.getElementById('tqz-next').style.display='none';
  document.getElementById('tqz-fav').textContent=isFav(q)?'★':'☆';document.getElementById('tqz-fav').classList.remove('fav-pulse');
  var keys=['A','B','C','D'];
  var sh=shuffle([0,1,2,3]);
  document.getElementById('tqz-opts').innerHTML=sh.map(function(orig,i){
    return '<button class="opt" onclick="pickTQ(this,'+orig+','+q.c+',\''+q.r.replace(/'/g,"\\'").replace(/\n/g,' ')+'\')">' +
      '<span class="opt-key">'+keys[i]+'</span>'+q.opts[orig]+'</button>';
  }).join('');
  var tw=document.getElementById('tqz-timer');
  if(G.tchrono){tw.style.display='flex';startTimerTQ();}
  else{tw.style.display='none';if(G.timer)clearInterval(G.timer);}
}
function startTimerTQ(){
  if(G.timer)clearInterval(G.timer);
  G.sec=30;updateTimerTQ(30);
  G.timer=setInterval(function(){G.sec--;updateTimerTQ(G.sec);if(G.sec<=0){clearInterval(G.timer);timeoutTQ();}},1000);
}
function updateTimerTQ(s){
  var fg=document.getElementById('tqz-t-fg'),txt=document.getElementById('tqz-t-txt');
  fg.style.strokeDashoffset=138.2*(1-s/30);txt.textContent=s;
  fg.classList.toggle('urgent',s<=10);txt.classList.toggle('urgent',s<=10);
}
function timeoutTQ(){
  var q=G.tqs[G.tidx];
  G.tanswers.push({q:q.q,ok:false,to:true,correct:q.opts[q.c],given:'—'});
  updateTh(q.th,false);
  document.querySelectorAll('#tqz-opts .opt').forEach(function(b){
    b.disabled=true;
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[q.c])b.classList.add('show-ok');
  });
  document.getElementById('tqz-banner').innerHTML='<div class="result-bar to">⏰ Temps écoulé — Bonne réponse : <strong>'+q.opts[q.c]+'</strong></div>';
  document.getElementById('tqz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+q.r+'</div>';showFavHint('tqz');
  document.getElementById('tqz-next').style.display='inline-block';
}
function pickTQ(btn,chosen,correct,expl){
  if(btn.disabled)return;
  clearInterval(G.timer);
  var q=G.tqs[G.tidx],ok=chosen===correct;
  document.querySelectorAll('#tqz-opts .opt').forEach(function(b){b.disabled=true;});
  btn.classList.add(ok?'correct':'wrong');
  if(!ok)document.querySelectorAll('#tqz-opts .opt').forEach(function(b){
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[correct])b.classList.add('show-ok');
  });
  G.tanswers.push({q:q.q,ok:ok,to:false,correct:q.opts[correct],given:q.opts[chosen]});
  updateTh(q.th,ok);
  document.getElementById('tqz-banner').innerHTML=ok
    ?'<div class="result-bar ok">✅ Bonne réponse !</div>'
    :'<div class="result-bar ko">✕ Mauvaise réponse — Bonne réponse : <strong>'+q.opts[correct]+'</strong></div>';
  document.getElementById('tqz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+expl+'</div>';if(!ok)showFavHint('tqz');
  document.getElementById('tqz-next').style.display='inline-block';
}
function nextTQ(){G.tidx++;G.tidx>=G.tqs.length?finishTQ():renderTQ();}
function finishTQ(){showDonate();
  clearInterval(G.timer);
  var ok=G.tanswers.filter(function(a){return a.ok;}).length;
  var tot=G.tanswers.length,pct=Math.round(ok/tot*100);
  G.data.history.push({date:new Date().toISOString(),score:ok,tot:tot,pct:pct,mode:'theme'});
  updateStreak();saveData();
  trackEvent('quiz_complete',{quiz_type:'theme',theme:G.ttheme||'all',score:ok,total:tot,percent:pct}); 
  document.getElementById('tq-screen').style.display='none';
  document.getElementById('tq-results').style.display='block';
  document.getElementById('tqz-sc').innerHTML=ok+'<small>/'+tot+'</small>';
  document.getElementById('tqz-pct').textContent=pct+'%';
  var m,c;
  if(pct>=85){m='🌟 Excellent !';c='var(--success)';}
  else if(pct>=70){m='👍 Bien !';c='var(--warning)';}
  else if(pct>=50){m='📖 Encore un effort';c='var(--navy)';}
  else{m='🔄 À retravailler';c='var(--error)';}
  document.getElementById('tqz-mention').style.color=c;
  document.getElementById('tqz-mention').textContent=m;
  document.getElementById('tqz-date').textContent=new Date().toLocaleDateString('fr-FR');
  var wrongs=G.tanswers.filter(function(a){return!a.ok;});
  document.getElementById('tqz-wrongs').innerHTML=wrongs.length
    ?'<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+wrongs.length+' erreur(s)</div><div class="sec-div-line"></div></div>' +
      wrongs.map(function(a){
        return '<div class="wrong-item"><div class="wi-q">'+a.q+'</div>' +
          '<div class="wi-given">'+(a.to?'⏰ Temps écoulé':'Votre réponse : '+a.given)+'</div>' +
          '<div class="wi-correct">✔ '+a.correct+'</div></div>';
      }).join('')
    :'<div style="text-align:center;padding:1.2rem;color:var(--success);font-family:var(--font-b);font-weight:700">🎉 Parfait !</div>';
  updateSidebar();
  setTimeout(function(){try{checkBadges();}catch(e){}},0);
}

// ══════════════════════
// QUIZ EXAMEN CIVIQUE (CSP + CR)
// ══════════════════════
function buildCivicQuizLanding(){
  var ts=civiqueThemes();if(!G.cqtheme)G.cqtheme='all';
  if(G.cqsource===undefined)G.cqsource='all';
  if(G.cqqty===undefined)G.cqqty=10;
  if(G.cqchrono===undefined)G.cqchrono=true;
  var srcLabels={csp:'📄 CSP', cr:'🪪 CR', all:'🇫🇷 Les deux'};
  document.getElementById('cq-source-sel').innerHTML=['csp','cr','all'].map(function(s){
    return '<button class="theme-sel-btn'+(G.cqsource===s?' sel':'')+'" onclick="selCQSource(\''+s+'\')">'+srcLabels[s]+'</button>';
  }).join('');
  document.getElementById('cq-theme-sel').innerHTML=
    '<button class="theme-sel-btn'+(G.cqtheme==='all'?' sel':'')+'" onclick="selCQTheme(\'all\')">🌐 Tous les thèmes</button>' +
    ts.map(function(t){
      return '<button class="theme-sel-btn'+(G.cqtheme===t?' sel':'')+'" onclick="selCQTheme(\''+t.replace(/'/g,"\\'")+'\')">' + t + '</button>';
    }).join('');
  var max=civiquePool(G.cqsource,G.cqtheme).length;
  if(G.cqqty>max)G.cqqty=Math.max(5,max);
  document.getElementById('cq-qty').textContent=G.cqqty;
  document.getElementById('cq-pool-n').textContent=max;
  document.getElementById('cq-chrono-track').className='tog-track'+(G.cqchrono?' on':'');
  document.getElementById('cq-chrono-lbl').textContent=G.cqchrono?'Activé':'Désactivé';
  document.getElementById('cq-landing').style.display='block';
  document.getElementById('cq-screen').style.display='none';
  document.getElementById('cq-results').style.display='none';
}
function selCQSource(s){
  G.cqsource=s;
  document.querySelectorAll('#cq-source-sel .theme-sel-btn').forEach(function(b){b.classList.remove('sel');});
  event.target.classList.add('sel');
  var max=civiquePool(G.cqsource,G.cqtheme).length;
  document.getElementById('cq-pool-n').textContent=max;
  if(G.cqqty>max){G.cqqty=Math.max(5,max);document.getElementById('cq-qty').textContent=G.cqqty;}
}
function selCQTheme(t){
  G.cqtheme=t;
  document.querySelectorAll('#cq-theme-sel .theme-sel-btn').forEach(function(b){b.classList.remove('sel');});
  event.target.classList.add('sel');
  var max=civiquePool(G.cqsource,G.cqtheme).length;
  document.getElementById('cq-pool-n').textContent=max;
  if(G.cqqty>max){G.cqqty=Math.max(5,max);document.getElementById('cq-qty').textContent=G.cqqty;}
}
function changeQtyCQ(d){
  var max=civiquePool(G.cqsource,G.cqtheme).length;
  G.cqqty=Math.max(5,Math.min(G.cqqty+d,max));
  document.getElementById('cq-qty').textContent=G.cqqty;
}
function toggleChronoCQ(){
  G.cqchrono=!G.cqchrono;
  document.getElementById('cq-chrono-track').className='tog-track'+(G.cqchrono?' on':'');
  document.getElementById('cq-chrono-lbl').textContent=G.cqchrono?'Activé':'Désactivé';
}
function resetCivicQuiz(){
  document.getElementById('cq-results').style.display='none';
  document.getElementById('cq-screen').style.display='none';
  document.getElementById('cq-landing').style.display='block';
}
function launchCivicSimulation(){
  G.cqtheme='all';G.cqqty=40;G.cqchrono=true;
  if(currentView()==='civique-quiz'){buildCivicQuizLanding();window.scrollTo(0,0);return;}
  window.location.href=PAGES['civique-quiz']+'?mode=simulation';
}
function launchCivicQuiz(){
  if(G.timer)clearInterval(G.timer);
  var poolTh=civiquePool(G.cqsource,G.cqtheme);
  var chosen=shuffle(poolTh).slice(0,Math.min(G.cqqty,poolTh.length));
  G.cqs=chosen.map(function(item){
    var built=buildCivicOptions(item,poolTh);
    return {th:item.th,q:item.q,r:item.r,opts:built.opts,c:built.c};
  });
  G.cqidx=0;G.cqanswers=[];
  document.getElementById('cq-landing').style.display='none';
  document.getElementById('cq-results').style.display='none';
  document.getElementById('cq-screen').style.display='block';
  trackEvent('quiz_start',{quiz_type:'civique',source:G.cqsource||'all',theme:G.cqtheme||'all',quantity:G.cqs.length});
  renderCQ();
}
function renderCQ(){
  var q=G.cqs[G.cqidx],n=G.cqidx+1,tot=G.cqs.length;
  document.getElementById('cqz-count').innerHTML=n+' <small>/ '+tot+'</small>';
  document.getElementById('cqz-prog').style.width=((n-1)/tot*100)+'%';
  document.getElementById('cqz-theme').textContent=q.th;
  document.getElementById('cqz-q').textContent=q.q;
  document.getElementById('cqz-banner').innerHTML='';
  document.getElementById('cqz-expl').innerHTML='';
  document.getElementById('cqz-next').style.display='none';
  var keys=['A','B','C','D'];
  document.getElementById('cqz-opts').innerHTML=q.opts.map(function(opt,i){
    return '<button class="opt" onclick="pickCQ(this,'+i+','+q.c+',\''+q.r.replace(/'/g,"\\'").replace(/\n/g,' ')+'\')">' +
      '<span class="opt-key">'+keys[i]+'</span>'+opt+'</button>';
  }).join('');
  var tw=document.getElementById('cqz-timer');
  if(G.cqchrono){tw.style.display='flex';startTimerCQ();}
  else{tw.style.display='none';if(G.timer)clearInterval(G.timer);}
}
function startTimerCQ(){
  if(G.timer)clearInterval(G.timer);
  G.sec=30;updateTimerCQ(30);
  G.timer=setInterval(function(){G.sec--;updateTimerCQ(G.sec);if(G.sec<=0){clearInterval(G.timer);timeoutCQ();}},1000);
}
function updateTimerCQ(s){
  var fg=document.getElementById('cqz-t-fg'),txt=document.getElementById('cqz-t-txt');
  fg.style.strokeDashoffset=138.2*(1-s/30);txt.textContent=s;
  fg.classList.toggle('urgent',s<=10);txt.classList.toggle('urgent',s<=10);
}
function timeoutCQ(){
  var q=G.cqs[G.cqidx];
  G.cqanswers.push({q:q.q,ok:false,to:true,correct:q.opts[q.c],given:'—'});
  document.querySelectorAll('#cqz-opts .opt').forEach(function(b){
    b.disabled=true;
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[q.c])b.classList.add('show-ok');
  });
  document.getElementById('cqz-banner').innerHTML='<div class="result-bar to">⏰ Temps écoulé — Bonne réponse : <strong>'+q.opts[q.c]+'</strong></div>';
  document.getElementById('cqz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+q.r+'</div>';
  document.getElementById('cqz-next').style.display='inline-block';
}
function pickCQ(btn,chosen,correct,expl){
  if(btn.disabled)return;
  clearInterval(G.timer);
  var q=G.cqs[G.cqidx],ok=chosen===correct;
  document.querySelectorAll('#cqz-opts .opt').forEach(function(b){b.disabled=true;});
  btn.classList.add(ok?'correct':'wrong');
  if(!ok)document.querySelectorAll('#cqz-opts .opt').forEach(function(b){
    if(b.textContent.replace(/^[ABCD]/,'').trim()===q.opts[correct])b.classList.add('show-ok');
  });
  G.cqanswers.push({q:q.q,ok:ok,to:false,correct:q.opts[correct],given:q.opts[chosen]});
  document.getElementById('cqz-banner').innerHTML=ok
    ?'<div class="result-bar ok">✅ Bonne réponse !</div>'
    :'<div class="result-bar ko">✕ Mauvaise réponse — Bonne réponse : <strong>'+q.opts[correct]+'</strong></div>';
  document.getElementById('cqz-expl').innerHTML='<div class="expl"><strong>Explication :</strong> '+expl+'</div>';
  document.getElementById('cqz-next').style.display='inline-block';
}
function nextCQ(){G.cqidx++;G.cqidx>=G.cqs.length?finishCQ():renderCQ();}
function finishCQ(){showDonate();
  clearInterval(G.timer);
  var ok=G.cqanswers.filter(function(a){return a.ok;}).length;
  var tot=G.cqanswers.length,pct=Math.round(ok/tot*100);
  G.data.history.push({date:new Date().toISOString(),score:ok,tot:tot,pct:pct,mode:'civic'});
  updateStreak();saveData();
  trackEvent('quiz_complete',{quiz_type:'civique',source:G.cqsource||'all',theme:G.cqtheme||'all',score:ok,total:tot,percent:pct}); 
  document.getElementById('cq-screen').style.display='none';
  document.getElementById('cq-results').style.display='block';
  document.getElementById('cqz-sc').innerHTML=ok+'<small>/'+tot+'</small>';
  document.getElementById('cqz-pct').textContent=pct+'%';
  var m,c;
  if(pct>=85){m='🌟 Excellent !';c='var(--success)';}
  else if(pct>=70){m='👍 Bien !';c='var(--warning)';}
  else if(pct>=50){m='📖 Encore un effort';c='var(--navy)';}
  else{m='🔄 À retravailler';c='var(--error)';}
  document.getElementById('cqz-mention').style.color=c;
  document.getElementById('cqz-mention').textContent=m;
  document.getElementById('cqz-date').textContent=new Date().toLocaleDateString('fr-FR');
  var wrongs=G.cqanswers.filter(function(a){return!a.ok;});
  document.getElementById('cqz-wrongs').innerHTML=wrongs.length
    ?'<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+wrongs.length+' erreur(s)</div><div class="sec-div-line"></div></div>' +
      wrongs.map(function(a){
        return '<div class="wrong-item"><div class="wi-q">'+a.q+'</div>' +
          '<div class="wi-given">'+(a.to?'⏰ Temps écoulé':'Votre réponse : '+a.given)+'</div>' +
          '<div class="wi-correct">✔ '+a.correct+'</div></div>';
      }).join('')
    :'<div style="text-align:center;padding:1.2rem;color:var(--success);font-family:var(--font-b);font-weight:700">🎉 Parfait !</div>';
  updateSidebar();
  setTimeout(function(){try{checkBadges();}catch(e){}},0);
}

// ══════════════════════
// ENTRAÎNEMENT ORAL
// ══════════════════════
function buildOralLanding(){
  var ts=themes();
  var html='<button class="theme-sel-btn'+(G.otheme==='all'?' sel':'')+'" onclick="selOralTheme(\'all\',this)">🌐 Tous les thèmes</button>';
  html+=ts.map(function(t){
    return '<button class="theme-sel-btn'+(G.otheme===t?' sel':'')+'" onclick="selOralTheme(\''+t.replace(/'/g,"\\'")+'\',this)">' +
      t.split(' ')[0]+' '+t.split(' ').slice(1).join(' ')+'</button>';
  }).join('');
  document.getElementById('oral-theme-sel').innerHTML=html;
  var pool=G.otheme==='all'?DB:DB.filter(function(q){return q.th===G.otheme;});
  document.getElementById('oral-pool-n').textContent=pool.length;
  document.getElementById('oral-landing').style.display='block';
  document.getElementById('oral-screen').style.display='none';
  document.getElementById('oral-results').style.display='none';
}
function selOralTheme(t,btn){
  G.otheme=t;
  document.querySelectorAll('#oral-theme-sel .theme-sel-btn').forEach(function(b){b.classList.remove('sel');});
  btn.classList.add('sel');
  var pool=t==='all'?DB:DB.filter(function(q){return q.th===t;});
  document.getElementById('oral-pool-n').textContent=pool.length;
}
function resetOral(){
  document.getElementById('oral-results').style.display='none';
  document.getElementById('oral-screen').style.display='none';
  document.getElementById('oral-landing').style.display='block';
}
function startOral(){
  var pool=G.otheme==='all'?DB:DB.filter(function(q){return q.th===G.otheme;});
  G.oqs=shuffle(pool);G.oidx=0;G.oknew=0;G.onope=0;G.omissed=[];
  document.getElementById('oral-landing').style.display='none';
  document.getElementById('oral-results').style.display='none';
  document.getElementById('oral-screen').style.display='block';
  trackEvent('oral_practice_start',{theme:G.otheme||'all'});
  renderOral();
}
function renderOral(){
  var q=G.oqs[G.oidx],tot=G.oqs.length;
  document.getElementById('oral-prog-lbl').textContent=(G.oidx+1)+' / '+tot;
  document.getElementById('oral-prog').style.width=(G.oidx/tot*100)+'%';
  document.getElementById('oral-num').textContent='Question '+(G.oidx+1)+' sur '+tot;
  document.getElementById('oral-icon').textContent=q.th.split(' ')[0];
  document.getElementById('oral-q').textContent=q.q;
  document.getElementById('oral-ans-correct').textContent=q.opts[q.c];
  document.getElementById('oral-ans-expl').textContent=q.r;
  document.getElementById('oral-reveal-btn').style.display='block';
  document.getElementById('oral-answer').classList.remove('show');
}
function revealOral(){
  document.getElementById('oral-reveal-btn').style.display='none';
  document.getElementById('oral-answer').classList.add('show');
}
function scoreOral(knew){
  if(knew){G.oknew++;}
  else{G.onope++;G.omissed.push(G.oqs[G.oidx]);}
  G.oidx++;
  if(G.oidx>=G.oqs.length){finishOral();}else{renderOral();}
}
function finishOral(){showDonate();
  var tot=G.oqs.length,pct=Math.round(G.oknew/tot*100);
  document.getElementById('oral-screen').style.display='none';
  document.getElementById('oral-results').style.display='block';
  document.getElementById('oral-res-pct').textContent=pct+'%';
  document.getElementById('oral-res-sub').textContent=G.oknew+' questions maîtrisées sur '+tot;
  document.getElementById('oral-knew-n').textContent=G.oknew;
  document.getElementById('oral-nope-n').textContent=G.onope;
  var ml=document.getElementById('oral-missed-list');
  if(G.omissed.length>0){
    ml.innerHTML='<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">À retravailler ('+G.omissed.length+')</div><div class="sec-div-line"></div></div>' +
      G.omissed.map(function(q){
        return '<div class="wrong-item"><div class="wi-q">'+q.q+'</div><div class="wi-correct">✔ '+q.opts[q.c]+'</div></div>';
      }).join('');
  }else{
    ml.innerHTML='<div style="text-align:center;padding:1rem;color:var(--success);font-family:var(--font-b);font-weight:700">🎉 Toutes maîtrisées !</div>';
  }
}

// ══════════════════════
// RÉVISION
// ══════════════════════
function buildRevision(){
  var ts=themes();
  document.getElementById('rev-filters').innerHTML=
    '<div class="rev-pill active" onclick="setRevF(\'all\',this)">Tous ('+DB.length+')</div>' +
    ts.map(function(t){
      return '<div class="rev-pill" onclick="setRevF(\''+t.replace(/'/g,"\\'")+'\',this)">'+t+' ('+DB.filter(function(q){return q.th===t;}).length+')</div>';
    }).join('');
  renderRev('all');
}
function setRevF(f,el){
  document.querySelectorAll('.rev-pill').forEach(function(p){p.classList.remove('active');});
  el.classList.add('active');renderRev(f);
}
function renderRev(f){
  var ts=f==='all'?themes():[f];
  document.getElementById('rev-content').innerHTML=ts.map(function(t){
    var qs=DB.filter(function(q){return q.th===t;});
    return '<div style="margin-bottom:1.8rem">' +
      '<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+t+'</div><div class="sec-div-line"></div></div>' +
      qs.map(function(q,i){
        var id='ac'+i+t.slice(0,3);
        return '<div class="acc" id="'+id+'">' +
          '<div class="acc-hd" onclick="tAcc(\''+id+'\')">' +
          '<div class="acc-num">'+(i+1)+'</div><div class="acc-q">'+q.q+'</div><div class="acc-arr">▾</div></div>' +
          '<div class="acc-body"><div class="acc-ans">💡 '+q.r+'</div>' +
          '<div class="acc-opts-l">Choix proposés au quiz</div>' +
          '<div class="acc-opts">'+q.opts.map(function(o,oi){
            return '<div class="acc-opt'+(oi===q.c?' ok':'')+'">'+( oi===q.c?'✔ ':'')+o+'</div>';
          }).join('')+'</div></div></div>';
      }).join('')+'</div>';
  }).join('');
}
function tAcc(id){var el=document.getElementById(id);if(el)el.classList.toggle('open');}

// ══════════════════════
// PRÉFECTURE
// ══════════════════════
var GP={pref:null,qs:[],idx:0,knew:0,nope:0,missed:[]};
function buildPrefLanding(){
  var regions={};
  PREFECTURE_QUESTIONS.forEach(function(p){
    if(!regions[p.region])regions[p.region]=[];
    regions[p.region].push(p);
  });
  var html='';
  Object.keys(regions).forEach(function(r){
    html+='<div style="grid-column:1/-1"><div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">'+r+'</div><div class="sec-div-line"></div></div></div>';
    regions[r].forEach(function(p){
      html+='<div class="hc" onclick="startPref(\''+p.prefecture.replace(/'/g,"\\'")+'\')" style="cursor:pointer">'+
        '<div class="hc-icon" style="font-size:1.4rem;width:40px;height:40px">'+p.icon+'</div>'+
        '<div class="hc-title">'+p.prefecture+'</div>'+
        '<div class="hc-desc">'+p.questions.length+' question'+(p.questions.length>1?'s':'')+' · Flashcards</div>'+
        '<div class="hc-badge">'+r+'</div>'+
        '</div>';
    });
  });
  document.getElementById('pref-grid').innerHTML=html;
  document.getElementById('pref-landing').style.display='block';
  document.getElementById('pref-screen').style.display='none';
  document.getElementById('pref-results').style.display='none';
}
function startPref(prefName){
  var p=PREFECTURE_QUESTIONS.find(function(x){return x.prefecture===prefName;});
  if(!p)return;
  GP.pref=p;GP.qs=p.questions;GP.idx=0;GP.knew=0;GP.nope=0;GP.missed=[];
  document.getElementById('pref-landing').style.display='none';
  document.getElementById('pref-results').style.display='none';
  document.getElementById('pref-screen').style.display='block';
  document.getElementById('pref-screen-title').textContent=p.icon+' '+p.prefecture;
  renderPref();
}
function renderPref(){
  var q=GP.qs[GP.idx],tot=GP.qs.length;
  document.getElementById('pref-prog-lbl').textContent=(GP.idx+1)+' / '+tot;
  document.getElementById('pref-prog').style.width=(GP.idx/tot*100)+'%';
  document.getElementById('pref-num').textContent='Question '+(GP.idx+1)+' sur '+tot;
  document.getElementById('pref-icon').textContent=GP.pref.icon;
  document.getElementById('pref-q').textContent=q.q;
  document.getElementById('pref-ans-correct').textContent=q.r;
  var cw=document.getElementById('pref-conseil-wrap');
  var cl=document.getElementById('pref-conseil');
  if(q.conseil){cw.style.display='block';cl.textContent=q.conseil;}
  else{cw.style.display='none';}
  document.getElementById('pref-reveal-btn').style.display='block';
  document.getElementById('pref-answer').classList.remove('show');
}
function revealPref(){
  document.getElementById('pref-reveal-btn').style.display='none';
  document.getElementById('pref-answer').classList.add('show');
}
function scorePref(knew){
  if(knew){GP.knew++;}else{GP.nope++;GP.missed.push(GP.qs[GP.idx]);}
  GP.idx++;
  if(GP.idx>=GP.qs.length){finishPref();}else{renderPref();}
}
function finishPref(){showDonate();
  var tot=GP.qs.length,pct=Math.round(GP.knew/tot*100);
  document.getElementById('pref-screen').style.display='none';
  document.getElementById('pref-results').style.display='block';
  document.getElementById('pref-res-pct').textContent=pct+'%';
  document.getElementById('pref-res-sub').textContent=GP.knew+' questions maîtrisées sur '+tot;
  document.getElementById('pref-knew-n').textContent=GP.knew;
  document.getElementById('pref-nope-n').textContent=GP.nope;
  var ml=document.getElementById('pref-missed-list');
  if(GP.missed.length>0){
    ml.innerHTML='<div class="sec-div"><div class="sec-div-line"></div><div class="sec-div-label">À retravailler ('+GP.missed.length+')</div><div class="sec-div-line"></div></div>'+
      GP.missed.map(function(q){
        return '<div class="wrong-item"><div class="wi-q">'+q.q+'</div><div class="wi-correct" style="color:var(--navy)">'+q.r.slice(0,80)+'...</div></div>';
      }).join('');
  }else{
    ml.innerHTML='<div style="text-align:center;padding:1rem;color:var(--success);font-family:var(--font-b);font-weight:700">🎉 Toutes maîtrisées !</div>';
  }
}
function replayPref(){
  GP.idx=0;GP.knew=0;GP.nope=0;GP.missed=[];
  document.getElementById('pref-results').style.display='none';
  document.getElementById('pref-screen').style.display='block';
  renderPref();
}
function resetPref(){
  document.getElementById('pref-results').style.display='none';
  document.getElementById('pref-screen').style.display='none';
  document.getElementById('pref-landing').style.display='block';
}

// ══════════════════════
// ENTRETIEN
// ══════════════════════
function buildInterview(){
  var html='';
  IQS.forEach(function(q,i){
    var tips='';q.tips.forEach(function(t){tips+='<li><div class="tip-dot"></div>'+t+'</li>';});
    var ex='';
    if(q.ex&&Array.isArray(q.ex)&&q.ex.length){
      q.ex.forEach(function(para){
        if(!para.trim())return;
        var txt=para.replace(/\[([^\]]+)\]/g,'<span style="background:rgba(255,255,255,.15);border-radius:3px;padding:1px 6px">[$1]</span>');
        ex+='<p style="margin-bottom:.85rem;color:rgba(255,255,255,.85);font-family:Lora,serif;font-style:italic;font-size:.88rem;line-height:1.8">'+txt+'</p>';
      });
    }else{ex='<p style="color:rgba(255,255,255,.4);font-style:italic">Exemple non disponible.</p>';}
    var avoid='';
    if(q.avoid&&q.avoid.length){
      var items='';q.avoid.forEach(function(a){items+='<li style="display:flex;align-items:flex-start;gap:.5rem;font-size:.8rem;color:var(--error);padding:.2rem 0;line-height:1.5"><span style="font-weight:700;flex-shrink:0">✕</span>'+a+'</li>';});
      avoid='<div style="background:var(--error-bg);border:1px solid rgba(220,38,38,.2);border-radius:var(--r);padding:1rem 1.2rem;margin-top:1rem">' +
        '<div style="font-family:var(--font-b);font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--error);margin-bottom:.5rem">À éviter pour cette question</div>' +
        '<ul style="list-style:none">'+items+'</ul></div>';
    }
    html+='<div class="iq-card">' +
      '<div class="iq-head"><div class="iq-num">'+(i+1)+'</div><div class="iq-question">« '+q.q+' »</div></div>' +
      '<div class="iq-body">' +
      '<div class="iq-why">Pourquoi cette question ?</div><div class="iq-why-text">'+q.why+'</div>' +
      '<div class="iq-why" style="margin-top:.8rem">Conseils clés</div><ul class="iq-tips">'+tips+'</ul>' +
      '<button class="ex-toggle" onclick="tEx(\'iex'+i+'\',this)">Voir un exemple de réponse ▾</button>' +
      '<div id="iex'+i+'" style="display:none;margin-top:.8rem">' +
      '<div style="background:var(--navy);border-radius:var(--r);padding:1.2rem">' +
      '<div style="font-family:var(--font-b);font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:.7rem">✎ Exemple de réponse</div>' +
      ex+'</div>'+avoid+'</div>' +
      '</div></div>';
  });
  document.getElementById('interview-qs').innerHTML=html;
  document.getElementById('pitfalls').innerHTML=PITFALLS.map(function(p){return'<li>'+p+'</li>';}).join('');
}
function tEx(id,btn){
  var el=document.getElementById(id),open=el.style.display==='none';
  el.style.display=open?'block':'none';
  btn.textContent=open?"Masquer l'exemple ▴":'Voir un exemple de réponse ▾';
}

// ══════════════════════
// DASHBOARD
// ══════════════════════
function buildDashboard(){
  var h=G.data.history;
  document.getElementById('d-best').textContent=h.length?Math.max.apply(null,h.map(function(x){return x.pct;}))+'%':'—';
  document.getElementById('d-avg').textContent=h.length?Math.round(h.reduce(function(s,x){return s+x.pct;},0)/h.length)+'%':'—';
  document.getElementById('d-total').textContent=h.length;
  document.getElementById('d-streak').textContent=(G.data.streak&&G.data.streak.count)||0;
  renderBadges();
  document.getElementById('d-themes').innerHTML=themes().map(function(t){
    var st=G.data.thStats[t],pct=st?Math.round(st.ok/st.tot*100):0;
    var bc=pct>=70?'var(--success)':pct>=50?'var(--warning)':'var(--navy)';
    return '<div class="theme-res-row">' +
      '<div style="font-size:1.2rem;width:28px;text-align:center">'+t.split(' ')[0]+'</div>' +
      '<div class="trr-name">'+t.split(' ').slice(1).join(' ')+'</div>' +
      '<div class="trr-bar-w"><div class="trr-bar" style="width:'+pct+'%;background:'+bc+'"></div></div>' +
      '<div class="trr-sc" style="color:'+bc+'">'+(st?pct+'%':'—')+'</div></div>';
  }).join('');
  var favs=G.data.favoris||[];
  var df=document.getElementById('d-favoris');
  if(!favs.length){
    df.innerHTML='<p style="color:var(--text-3);font-family:var(--font-b);font-size:.82rem;padding:.3rem 0">Aucun favori — marquez des questions ★ pendant le quiz.</p>';
  }else{
    df.innerHTML=favs.slice(0,5).map(function(f){
      return '<div class="dash-fav-item">' +
        '<span style="font-size:1rem">⭐</span>' +
        '<div><div class="dash-fav-q">'+f.q+'</div><div class="dash-fav-th">'+f.th+'</div></div>' +
        '</div>';
    }).join('')+(favs.length>5?'<div style="font-family:var(--font-b);font-size:.75rem;color:var(--text-3);padding:.3rem 0 0">+ '+(favs.length-5)+' autres — <span style="cursor:pointer;color:var(--navy);text-decoration:underline" onclick="go(\'favoris\')">voir tous</span></div>':'');
  }
  document.getElementById('d-history').innerHTML=h.length
    ?'<table class="hist-table"><thead><tr><th>Date</th><th>Score</th><th>Résultat</th></tr></thead><tbody>' +
      [...h].reverse().slice(0,10).map(function(x){
        var d=new Date(x.date).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});
        var cls=x.pct>=70?'badge-green':x.pct>=50?'badge-yellow':'badge-red';
        return '<tr><td>'+d+'</td><td style="font-family:var(--font-b);font-weight:700">'+x.score+'/'+x.tot+'</td><td><span class="badge '+cls+'">'+x.pct+'%</span></td></tr>';
      }).join('')+'</tbody></table>'
    :'<div class="empty">Aucun quiz complété pour l\'instant. Lancez un quiz pour voir votre historique ici.</div>';
}

// ══════════════════════
// MON ENTRETIEN
// ══════════════════════
function interviewInfo(){
  var ds=G.data.interviewDate;
  if(!ds)return null;
  var today=new Date();today.setHours(0,0,0,0);
  var d=new Date(ds+'T00:00:00');
  var days=Math.round((d-today)/86400000);
  return {date:d,days:days};
}
function interviewTier(days){
  if(days<0)return{cls:'tier-passed',label:'Entretien passé'};
  if(days===0)return{cls:'tier-close',label:"C'est aujourd'hui !"};
  if(days<=7)return{cls:'tier-close',label:'Jour J tout proche'};
  if(days<=30)return{cls:'tier-mid',label:'Approche'};
  return{cls:'tier-far',label:'Vous avez le temps'};
}
function interviewMessage(days){
  if(days<0)return"Votre entretien est passé — bravo pour votre préparation ! Dites-nous comment ça s'est passé et partagez votre retour d'expérience (REX) avec la communauté, ça aide énormément les futurs candidats. 🙏";
  if(days===0)return"C'est aujourd'hui ! Respirez, relisez vos points clés une dernière fois et présentez-vous avec confiance. Vous êtes prêt(e) ! 🇫🇷";
  if(days<=7)return"Le jour J approche à grands pas ! Concentrez-vous sur les questions les plus fréquentes, révisez vos favoris ⭐ et faites une simulation d'entretien. Vous allez y arriver 💪";
  if(days<=30)return"Votre entretien approche : c'est le bon moment pour intensifier vos révisions par thème et vous entraîner à l'oral régulièrement. 🔥";
  return"Vous avez encore du temps devant vous : profitez-en pour réviser tranquillement, thème par thème, sans stress. La régularité fait la différence. 📚";
}
function buildInterviewDate(){
  var info=interviewInfo();
  var input=document.getElementById('interview-date-input');
  if(input)input.value=G.data.interviewDate||'';
  var clearBtn=document.getElementById('clear-interview-date');
  if(clearBtn)clearBtn.style.display=G.data.interviewDate?'inline-block':'none';
  var box=document.getElementById('interview-countdown');
  if(!box)return;
  if(!info){
    box.innerHTML='';
    return;
  }
  var tier=interviewTier(info.days);
  var dLabel=info.date.toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  var numHtml=info.days>=0
    ?'<div class="countdown-n">'+info.days+'</div><div class="countdown-l">jour(s) restant(s) — '+dLabel+'</div>'
    :'<div class="countdown-n">'+dLabel+'</div><div class="countdown-l">Entretien passé</div>';
  var rex=info.days<0?'<button class="rex-btn" onclick="window.open(\'https://www.facebook.com/groups/1663580948311419/\',\'_blank\')">💬 Partager mon retour d\'expérience</button>':'';
  box.innerHTML='<div class="countdown-box '+tier.cls+'">'+numHtml+'<div class="countdown-msg">'+interviewMessage(info.days)+'</div>'+rex+'</div>';
}
function saveInterviewDate(){
  var v=document.getElementById('interview-date-input').value;
  if(!v){toast('❌ Choisissez une date');return;}
  G.data.interviewDate=v;saveData();
  buildInterviewDate();buildHomeInterviewWidget();
  toast('✅ Date d\'entretien enregistrée');
}
function clearInterviewDate(){
  G.data.interviewDate=null;saveData();
  buildInterviewDate();buildHomeInterviewWidget();
  toast('🗑 Date effacée');
}
function buildHomeInterviewWidget(){
  var el=document.getElementById('home-interview-sub');
  if(!el)return;
  var info=interviewInfo();
  if(!info){el.textContent="Renseignez la date de votre entretien pour un suivi personnalisé";return;}
  if(info.days<0){el.textContent="Entretien passé — partagez votre retour d'expérience !";return;}
  if(info.days===0){el.textContent="C'est aujourd'hui ! Bonne chance 🇫🇷";return;}
  el.textContent=info.days+' jour(s) avant votre entretien';
}

// ══════════════════════
// COMMUN
// ══════════════════════
function updateTh(th,ok){
  if(!G.data.thStats[th])G.data.thStats[th]={ok:0,tot:0};
  G.data.thStats[th].tot++;if(ok)G.data.thStats[th].ok++;saveData();
}
function updateStreak(){
  var today=new Date().toISOString().slice(0,10),s=G.data.streak;
  if(s.last===today)return;
  var yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
  s.count=s.last===yesterday?s.count+1:1;s.last=today;
}
// ══════════════════════
// BADGES
// ══════════════════════
// Chaque badge est vérifié dans un try/catch individuel : une erreur sur un
// badge ne doit jamais empêcher l'affichage du récap de quiz.
var BADGES=[
  {id:'first',icon:'🎉',name:'Premier pas',desc:'Terminer un premier quiz',check:function(d){return d.history.length>=1;}},
  {id:'five',icon:'🔥',name:'Sur la lancée',desc:'5 quiz complétés',check:function(d){return d.history.length>=5;}},
  {id:'twenty',icon:'🏆',name:'Habitué(e)',desc:'20 quiz complétés',check:function(d){return d.history.length>=20;}},
  {id:'perfect',icon:'💯',name:'Sans faute',desc:'100% à un quiz (5 questions min.)',check:function(d){return d.history.some(function(h){return h.pct===100&&h.tot>=5;});}},
  {id:'streak3',icon:'📅',name:'3 jours de suite',desc:'Réviser 3 jours consécutifs',check:function(d){return (d.streak&&d.streak.count||0)>=3;}},
  {id:'streak7',icon:'🗓️',name:'Une semaine assidue',desc:'Réviser 7 jours consécutifs',check:function(d){return (d.streak&&d.streak.count||0)>=7;}},
  {id:'favs',icon:'⭐',name:'Collectionneur',desc:'5 questions mises en favoris',check:function(d){return (d.favoris||[]).length>=5;}},
  {id:'civic',icon:'🇫🇷',name:'Expert civique',desc:'Réussir un quiz Examen civique (≥70%)',check:function(d){return d.history.some(function(h){return h.mode==='civic'&&h.pct>=70;});}},
  {id:'themes5',icon:'🗺️',name:'Tour de France',desc:'Avoir travaillé les 5 grands thèmes',check:function(d){return Object.keys(d.thStats||{}).length>=5;}},
  {id:'marathon',icon:'🌙',name:'Marathonien(ne)',desc:'50 quiz complétés au total',check:function(d){return d.history.length>=50;}}
];
function checkBadges(){
  if(!G.data.badges)G.data.badges=[];
  if(!G.data.history)G.data.history=[];
  var newly=[];
  BADGES.forEach(function(b){
    try{
      if(G.data.badges.indexOf(b.id)===-1 && b.check(G.data)){
        G.data.badges.push(b.id);newly.push(b);
      }
    }catch(e){ /* un badge mal calculé ne doit jamais bloquer le reste */ }
  });
  if(newly.length){saveData();showBadgeToasts(newly);}
  return newly;
}
function showBadgeToasts(list){
  list.forEach(function(b,i){
    trackEvent('badge_unlocked',{badge_id:b.id,badge_name:b.name});
    setTimeout(function(){
      try{
        var el=document.createElement('div');
        el.className='badge-toast';
        el.innerHTML='<span style="font-size:1.3rem">'+b.icon+'</span><span>Badge débloqué : '+b.name+'</span>';
        document.body.appendChild(el);
        setTimeout(function(){el.remove();},3200);
      }catch(e){}
    }, i*1600);
  });
}
function renderBadges(){
  var el=document.getElementById('d-badges');
  if(!el)return;
  if(!G.data.badges)G.data.badges=[];
  el.innerHTML=BADGES.map(function(b){
    var unlocked=G.data.badges.indexOf(b.id)!==-1;
    return '<div class="badge-item '+(unlocked?'unlocked':'locked')+'" title="'+b.desc+'">' +
      '<div class="badge-ic">'+b.icon+'</div>' +
      '<div class="badge-name">'+b.name+'</div>' +
      '<div class="badge-desc">'+(unlocked?b.desc:'🔒 '+b.desc)+'</div></div>';
  }).join('');
}
// ══════════════════════
// EXAMEN CIVIQUE — NAV SIDEBAR + RECHERCHE
// ══════════════════════
function ecInitLayouts(){
  document.querySelectorAll('.ec-layout').forEach(function(layout){
    layout.querySelectorAll('.ec-nav-btn').forEach(function(btn){
      btn.addEventListener('click',function(){
        var panelsWrap=layout.querySelector('.ec-panels');
        layout.querySelectorAll('.ec-nav-btn').forEach(function(b){b.classList.remove('active');});
        panelsWrap.querySelectorAll('.ec-panel').forEach(function(p){p.classList.remove('active');});
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-panel')).classList.add('active');
        panelsWrap.scrollTop=0;
      });
    });
  });
}
function ecFilter(input,prefix){
  var q=input.value.trim().toLowerCase();
  var wrap=document.getElementById('ec-panels-'+prefix);
  if(!wrap)return;
  var anyVisibleGlobal=false;
  wrap.querySelectorAll('.ec-panel').forEach(function(panel){
    var count=0;
    panel.querySelectorAll('li').forEach(function(li){
      var match=!q||li.textContent.toLowerCase().indexOf(q)!==-1;
      li.classList.toggle('ec-hidden',!match);
      if(match)count++;
    });
    if(count>0)anyVisibleGlobal=true;
  });
  var noResult=wrap.querySelector('.ec-noresult');
  if(!q){
    if(noResult)noResult.style.display='none';
    return;
  }
  var activePanel=wrap.querySelector('.ec-panel.active');
  var activeHasResults=activePanel&&activePanel.querySelectorAll('li:not(.ec-hidden)').length>0;
  if(noResult)noResult.style.display=(!anyVisibleGlobal)?'block':'none';
  if(!activeHasResults&&anyVisibleGlobal){
    // bascule automatiquement sur le premier thème contenant un résultat
    var layout=wrap.closest('.ec-layout');
    var target=null;
    wrap.querySelectorAll('.ec-panel').forEach(function(p){
      if(!target&&p.querySelectorAll('li:not(.ec-hidden)').length>0)target=p;
    });
    if(target){
      layout.querySelectorAll('.ec-nav-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-panel')===target.id);});
      wrap.querySelectorAll('.ec-panel').forEach(function(p){p.classList.toggle('active',p.id===target.id);});
    }
  }
}
function updateSidebar(){
  var h=G.data.history;
  var sbt=document.getElementById('sb-total');if(sbt)sbt.textContent=DB.length;
  document.getElementById('sb-quizzes').textContent=h.length;
  document.getElementById('sb-best').textContent=h.length?Math.max.apply(null,h.map(function(x){return x.pct;}))+'%':'—';
  document.getElementById('sb-avg').textContent=h.length?Math.round(h.reduce(function(s,x){return s+x.pct;},0)/h.length)+'%':'—';
  var n=(G.data.favoris&&G.data.favoris.length)||0;
  var badge=document.getElementById('sb-fav-badge');
  badge.textContent=n>0?n:'';
  badge.style.display=n>0?'inline':'none';
}

document.addEventListener('DOMContentLoaded',function(){
  // Année dynamique pour le copyright
  var yr = new Date().getFullYear();
  var cpY = document.getElementById('cp-year');
  var cpYf = document.getElementById('cp-year-footer');
  if(cpY) cpY.textContent = yr;
  if(cpYf) cpYf.textContent = yr;

  var v=currentView();
  // Anciens liens de type /#quiz : redirection vers la nouvelle page
  if(v==='home'&&location.hash){
    var h=location.hash.slice(1);
    if(h&&h!=='home'&&PAGES[h]){window.location.replace(PAGES[h]);return;}
  }
  // Lien « simulation » depuis la page Examen civique
  if(v==='civique-quiz'&&/[?&]mode=simulation/.test(location.search)){G.cqtheme='all';G.cqqty=40;G.cqchrono=true;}
  initView(v);
  ecInitLayouts();
  try{initHomeTicker();}catch(e){}
  var ql=document.getElementById('ql-sub');
  if(ql)ql.textContent='Questions mélangées parmi les '+DB.length+' de la base';
});


// ══════════════════════════════════════════════════════
// ERGONOMIE : quiz en cours protégé, clavier, accessibilité
// ══════════════════════════════════════════════════════
var QUIZ_SCREENS=['quiz-screen','tq-screen','cq-screen','oral-screen','pref-screen','lv-screen','lv-quiz','pc-ex'];
function quizInProgress(){
  return QUIZ_SCREENS.some(function(id){var e=document.getElementById(id);return !!(e&&e.style.display==='block');});
}
// Demande confirmation avant de quitter une session en cours (clic sur un lien interne ou go())
function confirmLeave(){
  if(!quizInProgress())return true;
  var ok=window.confirm('Quitter cette session ? Votre progression sur ce quiz sera perdue.');
  if(ok)window.__leaving=true;
  return ok;
}
window.addEventListener('beforeunload',function(e){
  if(!window.__leaving&&quizInProgress()){e.preventDefault();e.returnValue='';return '';}
});
document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
  if(!a||a.target==='_blank'||e.defaultPrevented)return;
  var href=a.getAttribute('href')||'';
  if(href.charAt(0)==='#'||/^(mailto:|tel:|javascript:)/i.test(href))return;
  if(a.origin&&a.origin!==window.location.origin)return;
  if(!confirmLeave()){e.preventDefault();e.stopPropagation();}
},true);

// Éléments cliquables non natifs (cartes, puces…) : accessibles au clavier
function enhanceClickables(root){
  (root||document).querySelectorAll('[onclick]').forEach(function(el){
    var tag=el.tagName;
    if(tag==='A'||tag==='BUTTON'||tag==='INPUT'||tag==='SUMMARY'||tag==='SELECT'||tag==='TEXTAREA'||tag==='LABEL')return;
    if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','0');
    if(!el.hasAttribute('role'))el.setAttribute('role','button');
  });
}
// Raccourcis clavier : 1-4 / A-D pour répondre, Entrée ou → pour continuer, Entrée/Espace pour révéler une flashcard
function visibleScreen(ids){
  for(var i=0;i<ids.length;i++){var e=document.getElementById(ids[i]);if(e&&e.style.display==='block')return e;}
  return null;
}
document.addEventListener('keydown',function(e){
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  var t=e.target||document.body,tag=t.tagName;
  if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||t.isContentEditable)return;
  var key=e.key;
  // Entrée / Espace sur un élément cliquable non natif
  if((key==='Enter'||key===' ')&&t.getAttribute&&t.getAttribute('role')==='button'&&tag!=='BUTTON'&&tag!=='A'){
    e.preventDefault();t.click();return;
  }
  var nativeBtn=(tag==='BUTTON'||tag==='A'||tag==='SUMMARY')&&!/-fav$/.test(t.id||'');
  // Quiz à choix multiples
  var qs=visibleScreen(['quiz-screen','tq-screen','cq-screen']);
  if(qs){
    var k=key.toLowerCase(),idx=-1;
    if(k.length===1&&k>='1'&&k<='4')idx=parseInt(k,10)-1;
    else if(k.length===1&&k>='a'&&k<='d')idx=k.charCodeAt(0)-97;
    if(idx>-1){
      var opts=Array.prototype.filter.call(qs.querySelectorAll('.opt'),function(b){return !b.disabled;});
      if(opts[idx]){e.preventDefault();opts[idx].click();}
      return;
    }
    if((key==='Enter'||key==='ArrowRight')&&!nativeBtn){
      var nx=qs.querySelector('[id$="-next"]');
      if(nx&&nx.style.display!=='none'){e.preventDefault();nx.click();}
    }
    return;
  }
  // Flashcards (oral, préfecture)
  var fc=visibleScreen(['oral-screen','pref-screen']);
  if(fc){
    var pre=fc.id==='oral-screen'?'oral':'pref',fn=fc.id==='oral-screen'?'scoreOral':'scorePref';
    var rb=document.getElementById(pre+'-reveal-btn'),ans=document.getElementById(pre+'-answer');
    var revealed=ans&&ans.classList.contains('show');
    if((key==='Enter'||key===' ')&&!nativeBtn&&rb&&rb.style.display!=='none'&&!revealed){e.preventDefault();rb.click();return;}
    if(revealed&&(key==='1'||key==='2')){
      var b=fc.querySelector('[onclick^="'+fn+'('+(key==='1'?'true':'false')+')"]');
      if(b){e.preventDefault();b.click();}
    }
  }
});
document.addEventListener('DOMContentLoaded',function(){
  enhanceClickables(document);
  var main=document.querySelector('.main'),pending=false;
  if(main&&window.MutationObserver){
    new MutationObserver(function(){
      if(pending)return;pending=true;
      requestAnimationFrame(function(){pending=false;enhanceClickables(main);});
    }).observe(main,{childList:true,subtree:true});
  }
  // Astuce affichée sous les réponses (ordinateur uniquement)
  var hints=[['qz-opts','<kbd>1</kbd>–<kbd>4</kbd> ou <kbd>A</kbd>–<kbd>D</kbd> pour répondre · <kbd>Entrée</kbd> pour continuer'],
             ['tqz-opts','<kbd>1</kbd>–<kbd>4</kbd> ou <kbd>A</kbd>–<kbd>D</kbd> pour répondre · <kbd>Entrée</kbd> pour continuer'],
             ['cqz-opts','<kbd>1</kbd>–<kbd>4</kbd> ou <kbd>A</kbd>–<kbd>D</kbd> pour répondre · <kbd>Entrée</kbd> pour continuer'],
             ['oral-reveal-btn','<kbd>Entrée</kbd> pour révéler la réponse · <kbd>1</kbd> Je savais · <kbd>2</kbd> Je ne savais pas'],
             ['pref-reveal-btn','<kbd>Entrée</kbd> pour révéler la réponse · <kbd>1</kbd> Je maîtrise · <kbd>2</kbd> À retravailler']];
  hints.forEach(function(h){
    var el=document.getElementById(h[0]);
    if(el)el.insertAdjacentHTML('afterend','<div class="kbd-hint" aria-hidden="true">⌨️ '+h[1]+'</div>');
  });
});

// Mode focus : pendant une session de quiz, les boutons Don / Facebook de la barre du haut sont masqués
function syncQuizFocus(){document.body.classList.toggle('quiz-focus',quizInProgress());}
document.addEventListener('DOMContentLoaded',function(){
  syncQuizFocus();
  if(!window.MutationObserver)return;
  var mo=new MutationObserver(syncQuizFocus);
  QUIZ_SCREENS.forEach(function(id){
    var el=document.getElementById(id);
    if(el)mo.observe(el,{attributes:true,attributeFilter:['style']});
  });
});


// ══════════════════════════════════════════════════════
// BULLE « CONTACT » : affiche l'adresse e-mail (le lien mailto ne fait rien si aucune messagerie n'est configurée)
// ══════════════════════════════════════════════════════
var CONTACT_MAIL='devby.fou@gmail.com';
function contactEsc(e){if(e.key==='Escape')closeContactBubble(true);}
function closeContactBubble(refocus){
  var b=document.getElementById('contact-pop');
  if(!b)return;
  var a=b.__anchor;
  b.parentNode.removeChild(b);
  document.removeEventListener('keydown',contactEsc,true);
  if(refocus&&a&&a.focus)a.focus();
}
function showContactBubble(anchor){
  var old=document.getElementById('contact-pop');
  if(old){var same=old.__anchor===anchor;closeContactBubble();if(same)return;}
  var b=document.createElement('div');
  b.id='contact-pop';b.className='contact-pop';
  b.setAttribute('role','dialog');b.setAttribute('aria-label','Nous contacter par e-mail');
  b.innerHTML='<button type="button" class="cp-x" aria-label="Fermer">×</button>'+
    '<div class="cp-t">✉️ Contactez-nous par mail sur :</div>'+
    '<div class="cp-mail">'+CONTACT_MAIL+'</div>'+
    '<div class="cp-btns"><button type="button" class="cp-copy">Copier l\'adresse</button>'+
    '<a class="cp-open" href="mailto:'+CONTACT_MAIL+'?subject=Contact%20Cap%20Naturalisation">Ouvrir ma messagerie</a></div>';
  b.__anchor=anchor;
  document.body.appendChild(b);
  var W=window.innerWidth,H=window.innerHeight,bw=b.offsetWidth,bh=b.offsetHeight;
  if(anchor&&anchor.getBoundingClientRect&&W>480){
    var r=anchor.getBoundingClientRect();
    var left=Math.min(Math.max(8,r.left+r.width/2-bw/2),W-bw-8);
    var top=(r.top>bh+16)?r.top-bh-10:Math.min(r.bottom+10,H-bh-8);
    b.style.left=left+'px';b.style.top=Math.max(8,top)+'px';
  }
  b.querySelector('.cp-x').onclick=function(){closeContactBubble(true);};
  b.querySelector('.cp-copy').onclick=function(){
    var btn=this;
    function done(){btn.textContent='✓ Adresse copiée';}
    function fallback(){
      var ta=document.createElement('textarea');
      ta.value=CONTACT_MAIL;ta.style.position='fixed';ta.style.opacity='0';
      document.body.appendChild(ta);ta.select();
      try{document.execCommand('copy');done();}catch(e){btn.textContent='Copiez-la à la main';}
      document.body.removeChild(ta);
    }
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(CONTACT_MAIL).then(done,fallback);}
    else{fallback();}
  };
  document.addEventListener('keydown',contactEsc,true);
  b.querySelector('.cp-copy').focus();
}
document.addEventListener('click',function(e){
  var t=e.target;
  if(!t||!t.closest)return;
  var a=t.closest('a[href^="mailto:devby.fou@gmail.com?subject=Contact"]');
  if(a&&!a.closest('#contact-pop')){e.preventDefault();showContactBubble(a);return;}
  if(document.getElementById('contact-pop')&&!t.closest('#contact-pop'))closeContactBubble();
});


// ══════════════════════════════════════════════════════
// PARTAGE WHATSAPP + CONSENTEMENT (mesure d'audience)
// ══════════════════════════════════════════════════════
var WA_URL='https://wa.me/?text=Je%20pr%C3%A9pare%20ma%20naturalisation%20avec%20Cap%20Naturalisation%20%3A%20quiz%20et%20examen%20civique%20gratuits%2C%20sans%20inscription.%20https%3A%2F%2Fcap-naturalisation.fr%2F%3Futm_source%3Dwhatsapp%26utm_medium%3Dpartage';
var CONSENT_KEY='cap_consent',CONSENT_TTL=15552000000; // environ 6 mois
function getConsent(){
  try{
    var c=JSON.parse(localStorage.getItem(CONSENT_KEY)||'null');
    if(c&&(c.v==='granted'||c.v==='denied')&&Date.now()-c.t<CONSENT_TTL)return c.v;
  }catch(e){}
  return null;
}
function clearGACookies(){
  document.cookie.split(';').forEach(function(c){
    var n=c.split('=')[0].trim();
    if(n.indexOf('_ga')===0){
      document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+location.hostname;
    }
  });
}
function setConsent(v){
  try{localStorage.setItem(CONSENT_KEY,JSON.stringify({v:v,t:Date.now()}));}catch(e){}
  if(v==='granted'){loadGA();}
  else{window['ga-disable-'+GA_ID]=true;window.__gaOn=false;clearGACookies();}
  var b=document.getElementById('consent-bar');
  if(b)b.parentNode.removeChild(b);
}
function showConsentBanner(){
  if(document.getElementById('consent-bar'))return;
  var b=document.createElement('div');
  b.id='consent-bar';b.className='consent-bar';b.setAttribute('role','dialog');b.setAttribute('aria-label','Mesure d\'audience');
  b.innerHTML='<p><strong>Mesure d\'audience.</strong> Ce site utilise Google Analytics (cookies) pour savoir quelles pages sont utiles et les améliorer. Aucune publicité. '+
    'Vous pouvez refuser : le site fonctionne exactement de la même façon. <a href="mentions-legales.html">En savoir plus</a></p>'+
    '<div class="cb-btns"><button type="button" class="cb-no">Refuser</button><button type="button" class="cb-yes">Accepter</button></div>';
  document.body.appendChild(b);
  b.querySelector('.cb-no').onclick=function(){setConsent('denied');};
  b.querySelector('.cb-yes').onclick=function(){setConsent('granted');};
}
document.addEventListener('DOMContentLoaded',function(){
  if(getConsent()===null)showConsentBanner();
  else if(getConsent()==='denied')window['ga-disable-'+GA_ID]=true;
});


// ══════════════════════════════════════════════════════
// APPLICATION INSTALLABLE (PWA) : service worker + bouton « Installer »
// ══════════════════════════════════════════════════════
if('serviceWorker' in navigator){
  window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});
}
var __deferredInstall=null;
function isStandalone(){
  return !!((window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||window.navigator.standalone===true);
}
function isIOS(){
  return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
}
function installDismissed(){
  try{var t=parseInt(localStorage.getItem('cap_install_dismissed')||'0',10);return !!t&&Date.now()-t<2592000000;}catch(e){return false;} // 30 jours
}
function canInstallHint(){return !isStandalone()&&(!!__deferredInstall||isIOS());}
function refreshInstallUI(){
  var can=canInstallHint();
  document.querySelectorAll('[data-install]').forEach(function(el){
    var card=el.getAttribute('data-install')==='card';
    el.hidden=!(can&&!(card&&installDismissed()));
  });
}
function dismissInstall(){
  try{localStorage.setItem('cap_install_dismissed',String(Date.now()));}catch(e){}
  trackEvent('pwa_install_dismiss',{});
  refreshInstallUI();
}
function closeInstallHelp(){var b=document.getElementById('install-pop');if(b)b.parentNode.removeChild(b);}
function showInstallHelp(anchor){
  if(document.getElementById('install-pop')){closeInstallHelp();return;}
  var b=document.createElement('div');
  b.id='install-pop';b.className='contact-pop';b.setAttribute('role','dialog');b.setAttribute('aria-label','Installer sur iPhone');
  b.innerHTML='<button type="button" class="cp-x" aria-label="Fermer">×</button>'+
    '<div class="cp-t">📲 Installer sur iPhone / iPad</div>'+
    '<ol class="ip-steps"><li>Ouvrez ce site dans <strong>Safari</strong>.</li>'+
    '<li>Appuyez sur <strong>Partager</strong> (le carré avec une flèche vers le haut).</li>'+
    '<li>Choisissez <strong>« Sur l\'écran d\'accueil »</strong>, puis <strong>Ajouter</strong>.</li></ol>';
  document.body.appendChild(b);
  var W=window.innerWidth,H=window.innerHeight,bw=b.offsetWidth,bh=b.offsetHeight;
  if(anchor&&anchor.getBoundingClientRect&&W>480){
    var r=anchor.getBoundingClientRect();
    b.style.left=Math.min(Math.max(8,r.left+r.width/2-bw/2),W-bw-8)+'px';
    b.style.top=Math.max(8,(r.top>bh+16)?r.top-bh-10:Math.min(r.bottom+10,H-bh-8))+'px';
  }
  b.querySelector('.cp-x').onclick=closeInstallHelp;
}
function installApp(loc){
  trackEvent('pwa_install_click',{location:loc});
  if(__deferredInstall){
    var p=__deferredInstall;__deferredInstall=null;
    p.prompt();
    if(p.userChoice)p.userChoice.then(function(r){trackEvent('pwa_install_choice',{outcome:r.outcome});});
    refreshInstallUI();
  }else if(isIOS()){
    showInstallHelp(document.activeElement);
  }
}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();__deferredInstall=e;refreshInstallUI();});
window.addEventListener('appinstalled',function(){__deferredInstall=null;trackEvent('pwa_installed',{});refreshInstallUI();});
document.addEventListener('click',function(e){
  var t=e.target;
  if(!t||!t.closest||!document.getElementById('install-pop'))return;
  if(t.closest('#install-pop')||t.closest('[data-install]')||t.closest('#tip-go'))return;
  closeInstallHelp();
});
document.addEventListener('DOMContentLoaded',function(){
  refreshInstallUI();
  if(isStandalone())trackEvent('pwa_launch',{});
});


// ══════════════════════════════════════════════════════
// BULLE « COMMUNAUTÉ » (barre du haut) : Facebook + Instagram
// ══════════════════════════════════════════════════════
var IG_URL='https://www.instagram.com/cap_naturalisation/',FB_URL='https://www.facebook.com/groups/1663580948311419/';
function closeCommunity(){var b=document.getElementById('community-pop');if(b)b.parentNode.removeChild(b);}
function showCommunityBubble(anchor){
  if(document.getElementById('community-pop')){closeCommunity();return;}
  var b=document.createElement('div');
  b.id='community-pop';b.className='contact-pop';b.setAttribute('role','dialog');b.setAttribute('aria-label','Rejoindre la communauté');
  b.innerHTML='<button type="button" class="cp-x" aria-label="Fermer">×</button><div class="cp-t">💬 Rejoignez la communauté</div>'+
    '<ul class="cm-list"><li>Posez vos questions à d\'autres candidats</li><li>Lisez les retours d\'expérience après l\'entretien</li><li>Suivez les nouveautés du site</li></ul>'+
    '<div class="cp-btns"><a class="cp-copy" href="'+FB_URL+'" target="_blank" rel="noopener noreferrer" onclick="trackEvent(\'facebook_click\',{location:\'topbar_bubble\'})">Groupe Facebook</a>'+
    '<a class="cp-open cp-ig" href="'+IG_URL+'" target="_blank" rel="noopener noreferrer" onclick="trackEvent(\'instagram_click\',{location:\'topbar_bubble\'})">Instagram</a></div>';
  document.body.appendChild(b);
  var W=window.innerWidth,H=window.innerHeight,bw=b.offsetWidth,bh=b.offsetHeight;
  if(anchor&&anchor.getBoundingClientRect&&W>480){
    var r=anchor.getBoundingClientRect();
    b.style.left=Math.min(Math.max(8,r.left+r.width/2-bw/2),W-bw-8)+'px';
    b.style.top=Math.max(8,Math.min(r.bottom+10,H-bh-8))+'px';
  }
  b.querySelector('.cp-x').onclick=closeCommunity;
  trackEvent('community_open',{});
}
document.addEventListener('click',function(e){
  var t=e.target;
  if(!t||!t.closest||!document.getElementById('community-pop'))return;
  if(t.closest('#community-pop')||t.closest('.ss-fb'))return;
  closeCommunity();
});

/* Thème sombre et contraste élevé (mémorisés sur l'appareil) */
(function(){
  var R=document.documentElement;
  function get(k){try{return localStorage.getItem(k);}catch(e){return null;}}
  function put(k,v){try{if(v)localStorage.setItem(k,v);else localStorage.removeItem(k);}catch(e){}}
  function apply(){
    if(get('cap_theme')==='dark')R.setAttribute('data-theme','dark');else R.removeAttribute('data-theme');
    if(get('cap_contrast')==='high')R.setAttribute('data-contrast','high');else R.removeAttribute('data-contrast');
    var a=document.getElementById('tc-theme'),b=document.getElementById('tc-contrast');
    if(a){a.setAttribute('aria-pressed',get('cap_theme')==='dark');a.setAttribute('aria-label',get('cap_theme')==='dark'?'Passer au thème clair':'Passer au thème sombre');}
    if(b)b.setAttribute('aria-pressed',get('cap_contrast')==='high');
  }
  window.toggleTheme=function(){put('cap_theme',get('cap_theme')==='dark'?'':'dark');apply();if(window.trackEvent)trackEvent('theme_toggle',{theme:get('cap_theme')||'light'});};
  window.toggleContrast=function(){put('cap_contrast',get('cap_contrast')==='high'?'':'high');apply();};
  document.addEventListener('DOMContentLoaded',function(){
    var host=document.querySelector('.stats-strip-in');
    if(host&&!document.getElementById('tc-theme')){
      var g=document.createElement('div');g.className='tc-grp';
      g.innerHTML='<button type="button" class="tc-btn" id="tc-theme" onclick="toggleTheme()" title="Thème clair / sombre"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button><button type="button" class="tc-btn" id="tc-contrast" onclick="toggleContrast()" aria-label="Contraste élevé" title="Contraste élevé"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg></button>';
      var save=host.querySelector('.ss-save');host.insertBefore(g,save||null);
    }
    apply();
  });
  apply();
})();

/* ===== Icônes : remplace les emojis par des icônes en traits (aussi pour les contenus ajoutés par le script) ===== */
(function(){
  var P={
    check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
    star:'<path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z"/>',
    clock:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/>',
    spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    down:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',up:'<path d="M12 20V9M7 13l5-5 5 5M5 4h14"/>',
    trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',
    save:'<path d="M5 3h11l4 4v14H5zM8 3v5h7V3M8 21v-7h8v7"/>',
    mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
    filecheck:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M9 14l2 2 4-4"/>',
    file:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h5"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    book:'<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',
    bank:'<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7z"/>',
    idcard:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M14 10h4M14 14h3"/>',
    scale:'<path d="M12 3v18M5 21h14M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    scroll:'<path d="M8 4h11v13a3 3 0 0 1-3 3H6a3 3 0 0 0 3-3V4zM8 4a2 2 0 0 0-2 2v2h3M12 9h4M12 13h4"/>',
    map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
    users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3-5.5 6.5-5.5s6 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .6 3.3 2.4 3.5 5.2"/>',
    heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',
    vol:'<path d="M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    play:'<path d="M7 4.5v15l12-7.5z"/>',
    refresh:'<path d="M20 11a8 8 0 0 0-14.5-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14.5 4L20 15M20 20v-5h-5"/>',
    alert:'<path d="M12 3l10 18H2zM12 10v5M12 18h.01"/>',
    thumb:'<path d="M7 11v9H4v-9zM7 11l4-8c1.7 0 2.5 1.2 2.3 2.7L13 9h6a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/>',
    cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    sprout:'<path d="M12 21v-9M12 12c0-4 2.5-6 7-6 0 4-2.5 6-7 6zM12 15c0-3-2-5-6-5 0 3 2 5 6 5z"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v2a3 3 0 0 0 4 2.8M16 6h4v2a3 3 0 0 1-4 2.8M12 13v4M8 21h8M10 17h4"/>',
    flame:'<path d="M12 22c4 0 7-2.7 7-6.5 0-3-2-4.8-3-7-1 1.2-1.5 2-2 3 0-4-1.5-7-4-9 .3 4-3.5 6-3.5 11.5C6.5 19.3 8.5 22 12 22z"/>',
    lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',shuffle:'<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
    keyb:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    pen:'<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    cards:'<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',hands:'<path d="M3 12l4-4 4 2 4-2 6 5-6 6-3-1-3 1zM7 8l3-2"/>',
    flagi:'<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>',palette:'<path d="M12 3a9 9 0 0 0 0 18c1.3 0 2-.8 2-1.8 0-1.3-1-1.5-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8zM7.5 11h.01M10 7.5h.01M14.5 7.5h.01"/>',cap:'<path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 13h18"/>',cross:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>',vote:'<rect x="4" y="9" width="16" height="11" rx="2"/><path d="M8 9l2-5 3 3M9 14h6"/>',
    chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',pray:'<path d="M12 21v-8M12 13c-3 0-5-2-5-6 3 0 5 2 5 6zM12 13c3 0 5-2 5-6-3 0-5 2-5 6z"/>',up2:'<path d="M6 15l6-6 6 6"/>',dn2:'<path d="M6 9l6 6 6-6"/>'
  };
  var M={'✅':'check','✔':'check','✓':'check','❌':'x','✕':'x','✗':'x','✖':'x','⭐':'star!','★':'star!','☆':'star','⏰':'clock','⏱':'clock','🎉':'spark','🌟':'spark','💡':'bulb','📲':'phone','💬':'chat','✉':'mail','⬇':'down','⬆':'up','🗑':'trash','💾':'save','🗣':'mic','🎙':'mic','📝':'filecheck','📄':'file','📋':'file','🎯':'target','📚':'book','📖':'book','🏛':'bank','🪪':'idcard','⚖':'scale','📜':'scroll','🗺':'map','🤝':'hands','❤':'heart','💛':'heart','📸':'chat','👥':'users','🔊':'vol','▶':'play!','🔄':'refresh','↻':'refresh','⚠':'alert','👍':'thumb','📅':'cal','📆':'cal','🗓':'cal','🌱':'sprout','☰':'menu','🏆':'trophy','🔥':'flame','🔒':'lock','🌐':'globe','🔍':'search','🔀':'shuffle','⌨':'keyb','✎':'pen','🙏':'pray','💪':'flame','💯':'check','🌙':'moon','🃏':'cards','📊':'chart','▾':'dn2','▴':'up2'};
  var KW=[[/valeur|r[ée]publi|principe|symbole|la[iï]cit|libert|devise/,'flagi'],[/institution|politique|pouvoir|[ée]tat|gouvern|[ée]lu|parlement|constitution/,'bank'],[/droit|devoir|justice|loi\b|lois/,'scale'],[/histoire|pass[ée]|dates?\b|guerre|r[ée]volution/,'scroll'],[/g[ée]ograph|territoire|r[ée]gion|d[ée]partement|carte|pays/,'map'],[/culture|patrimoine|art\b|arts\b|litt[ée]rature|gastronomie|f[eê]te/,'palette'],[/soci[ée]t[ée]|vivre|vie\b|quotidien|famille|solidarit|citoyenne/,'hands'],[/langue|fran[cç]ais|communication/,'chat'],[/sant[ée]|soin/,'cross'],[/travail|emploi|m[ée]tier|profession/,'briefcase'],[/[ée]cole|[ée]ducation|enseignement|[ée]tude/,'cap'],[/nationalit|naturalis|titre|s[ée]jour|identit/,'idcard'],[/europe|monde|international/,'globe'],[/vote|[ée]lection|d[ée]mocratie/,'vote']];
  function guess(ctx){ctx=(ctx||'').toLowerCase();for(var i=0;i<KW.length;i++)if(KW[i][0].test(ctx))return KW[i][1];return 'tag';}
  var keys=Object.keys(M).sort(function(a,b){return b.length-a.length;}).map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');});
  var RX=new RegExp('(?:\\uD83C[\\uDDE6-\\uDDFF]\\uD83C[\\uDDE6-\\uDDFF])|(?:'+keys.join('|')+')[\\uFE0E\\uFE0F]?|(?=\\p{Extended_Pictographic})[\\u2300-\\u2BFF\\u{1F000}-\\u{1FAFF}][\\uFE0E\\uFE0F]?(?:\\u200D\\p{Extended_Pictographic}[\\uFE0E\\uFE0F]?)*','gu');
  var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,TITLE:1,OPTION:1,NOSCRIPT:1};
  function svg(name){var f=/!$/.test(name);name=name.replace('!','');return '<svg class="ei'+(f?' ei-f':'')+'" viewBox="0 0 24 24" aria-hidden="true">'+P[name]+'</svg>';}
  function conv(txt,ctx){
    return txt.replace(RX,function(m){
      if(/^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(m))return '<span class="ei-flag" aria-hidden="true"><i></i><i></i><i></i></span>';
      var k=m.replace(/[︎️]/g,'');return M[k]?svg(M[k]):svg(guess(ctx||txt));});
  }
  function esc(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  function walk(root){
    if(!root||root.nodeType===8)return;
    if(root.nodeType===3){fix(root);return;}
    if(root.nodeType!==1||SKIP[root.nodeName]||(root.classList&&(root.classList.contains('ei')||root.classList.contains('ei-flag')))||root.closest&&root.closest('[data-noicon]'))return;
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){return SKIP[n.parentNode.nodeName]?NodeFilter.FILTER_REJECT:(RX.lastIndex=0,RX.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT);}}),a=[],n;
    while((n=w.nextNode()))a.push(n);a.forEach(fix);
  }
  function fix(n){
    RX.lastIndex=0;if(!n.parentNode||SKIP[n.parentNode.nodeName]||!RX.test(n.nodeValue))return;
    var sp=document.createElement('span');sp.className='ei-w';var pp=n.parentNode;sp.innerHTML=conv(esc(n.nodeValue),((pp.closest&&(pp.closest('.theme-chip,.theme-sel-btn,.theme-res-row')||pp.closest('li,button')))||pp).textContent);
    var frag=document.createDocumentFragment();while(sp.firstChild)frag.appendChild(sp.firstChild);
    n.parentNode.replaceChild(frag,n);
  }
  function start(){
    walk(document.body);
    if(!window.MutationObserver)return;
    var busy=false;
    new MutationObserver(function(ms){
      if(busy)return;busy=true;
      try{ms.forEach(function(m){
        if(m.type==='characterData')fix(m.target);
        else m.addedNodes.forEach(function(x){walk(x);});
      });}finally{busy=false;}
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();

/* ===== Partage : copier le lien ===== */
function copyShareLink(btn){
  var url='https://cap-naturalisation.fr/?utm_source=copie&utm_medium=partage';
  function ok(){if(window.toast)toast('Lien copié');btn.classList.add('done');setTimeout(function(){btn.classList.remove('done');},1500);if(window.trackEvent)trackEvent('copy_link',{location:'footer'});}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(ok,function(){window.prompt('Copiez le lien :',url);});}
  else window.prompt('Copiez le lien :',url);
}

/* ===== Cadran de score (résultats des quiz et bilan) ===== */
(function(){
  var R=62,C=2*Math.PI*R;
  function col(p){return p<50?'#d2452c':(p<75?'#e5ac00':'#1e8449');}
  function paint(host,p){
    p=Math.max(0,Math.min(100,p));
    var arc=host.querySelector('.dial-arc');if(!arc)return;
    arc.style.stroke=col(p);arc.setAttribute('stroke-dasharray',C.toFixed(1));arc.setAttribute('stroke-dashoffset',(C*(1-p/100)).toFixed(1));
  }
  function build(host){
    host.classList.add('dial-wrap');
    host.insertAdjacentHTML('afterbegin','<svg class="dial-svg" viewBox="0 0 150 150" aria-hidden="true"><circle cx="75" cy="75" r="'+R+'" class="dial-track"/><circle cx="75" cy="75" r="'+R+'" class="dial-arc" transform="rotate(-90 75 75)" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+C.toFixed(1)+'"/></svg>');
  }
  function legend(){return '<div class="dial-leg"><span><b style="background:#d2452c"></b>À revoir (moins de 50 %)</span><span><b style="background:#e5ac00"></b>En progrès (50 à 74 %)</span><span><b style="background:#1e8449"></b>Prêt(e) (75 % et plus)</span></div>';}
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.res-hero').forEach(function(h){
      var v=h.querySelector('.res-pct-val');if(!v)return;
      var host=v.parentNode;build(host);
      h.insertAdjacentHTML('afterend',legend());
      var up=function(){var n=parseInt(v.textContent,10);paint(host,isNaN(n)?0:n);};
      new MutationObserver(up).observe(v,{childList:true,characterData:true,subtree:true});up();
    });
    var bd=document.getElementById('bilan-dial'),avg=document.getElementById('d-avg');
    if(bd&&avg){
      build(bd);var out=document.getElementById('bd-val'),tot=document.getElementById('d-total'),cap=document.getElementById('bd-cap');
      var up2=function(){var n=parseInt(avg.textContent,10),t=parseInt(tot&&tot.textContent,10)||0;
        out.textContent=isNaN(n)?'—':n+'%';paint(bd,isNaN(n)?0:n);
        if(cap)cap.textContent=isNaN(n)?'Faites votre premier quiz pour voir votre score moyen ici.':'Moyenne de vos '+t+' quiz'+(t>1?'':'')+' terminé'+(t>1?'s':'')+'.';};
      var mo=new MutationObserver(up2);[avg,tot].forEach(function(e){if(e)mo.observe(e,{childList:true,characterData:true,subtree:true});});up2();
    }
  });
})();

/* ===== Navigation mobile en bas ===== */
(function(){
  document.addEventListener('DOMContentLoaded',function(){
    if(!document.getElementById('appSidebar')||document.getElementById('bottomNav'))return;
    var v=document.body.getAttribute('data-view')||'';
    var it=[['home','index.html','Accueil','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',['home','aide']],
      ['livret','livret-citoyen.html','Parcours','<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>',['livret','revision']],
      ['quiz','quiz-naturalisation.html','Quiz','<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',['quiz','theme-quiz','oral']],
      ['examen-civique','examen-civique.html','Examen','<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7z"/>',['examen-civique','examen-cr','examen-csp','civique-quiz']],
      ['dashboard','mon-bilan.html','Bilan','<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',['dashboard','favoris','mon-entretien','interview','prefecture']]];
    var h='<nav class="bottom-nav" id="bottomNav" aria-label="Navigation rapide">';
    it.forEach(function(x){var on=x[4].indexOf(v)>=0;h+='<a href="'+x[1]+'"'+(on?' class="on" aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+x[3]+'</svg><span>'+x[2]+'</span></a>';});
    document.body.insertAdjacentHTML('beforeend',h+'</nav>');
  });
})();

/* ===== Message « Nouveautés » (affiché une fois aux visiteurs déjà venus) ===== */
(function(){
  var KEY='cap_whatsnew',VER='v2';
  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}}
  function ic(p){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';}
  var ITEMS=[
    ['<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>','Un nouveau design','Menus en haut, pages plus claires, cadrans de progression. Deux boutons permettent de passer en thème sombre ou en contraste élevé.'],
    ['<path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/>','Parcours découverte : le Livret du citoyen','5 niveaux courts pour partir de zéro, d\'après le Livret du citoyen (mai 2026), avec la page du livret pour chaque point. Une fois les niveaux validés, place aux quiz de naturalisation.'],
    ['<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>','Un suivi plus clair','Cadran de score après chaque quiz, score moyen dans le bilan, progression du parcours sur l\'accueil.'],
    ['<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>','Pensé pour le téléphone','Barre de navigation en bas de l\'écran et possibilité d\'installer le site comme une application.'],
    ['<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3-5.5 6.5-5.5s6 2 6.5 5.5M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .6 3.3 2.4 3.5 5.2"/>','Une communauté','Rejoignez le groupe Facebook ou suivez le compte Instagram pour poser vos questions et partager votre retour d\'expérience.']
  ];
  var last=null;
  window.showWhatsNew=function(){
    if(document.getElementById('wn-modal'))return;
    last=document.activeElement;
    var h='<div class="wn-back" id="wn-modal" role="dialog" aria-modal="true" aria-labelledby="wn-title"><div class="wn-card"><button type="button" class="wn-x" aria-label="Fermer" onclick="closeWhatsNew()">'+ic('<path d="M6 6l12 12M18 6L6 18"/>')+'</button>'+
      '<div class="wn-eyebrow">Nouveautés</div><h2 id="wn-title">Cap Naturalisation fait peau neuve</h2><p class="wn-sub">Voici ce qui change, en quelques lignes. Votre progression enregistrée est conservée.</p><ul class="wn-list">';
    ITEMS.forEach(function(x){h+='<li><span class="wn-ic">'+ic(x[0])+'</span><div><strong>'+x[1]+'</strong><p>'+x[2]+'</p></div></li>';});
    h+='</ul><div class="wn-btns"><a class="btn" href="livret-citoyen.html" onclick="closeWhatsNew(true);trackEvent(\'whatsnew_click\',{target:\'parcours\'})">Découvrir le parcours</a><button type="button" class="btn btn-outline" id="wn-ok" onclick="closeWhatsNew()">Continuer sur le site</button></div></div></div>';
    document.body.insertAdjacentHTML('beforeend',h);
    document.body.classList.add('wn-open');
    var ok=document.getElementById('wn-ok');if(ok)ok.focus();
    document.addEventListener('keydown',onKey);
    if(window.trackEvent)trackEvent('whatsnew_view',{});
  };
  window.closeWhatsNew=function(keep){
    var m=document.getElementById('wn-modal');if(m)m.remove();
    document.body.classList.remove('wn-open');ls(KEY,VER);
    document.removeEventListener('keydown',onKey);
    if(!keep&&last&&last.focus)try{last.focus();}catch(e){}
  };
  function onKey(e){
    if(e.key==='Escape'){closeWhatsNew();return;}
    if(e.key!=='Tab')return;
    var f=document.querySelectorAll('#wn-modal button,#wn-modal a');if(!f.length)return;
    var a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}
    else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}
  }
  document.addEventListener('DOMContentLoaded',function(){
    if(document.body.getAttribute('data-view')!=='home')return;
    if(ls(KEY)===VER)return;
    var returning=false;try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k===SK||k.indexOf('cap_')===0){returning=true;break;}}}catch(e){}
    if(!returning){ls(KEY,VER);return;}   /* première visite : rien à annoncer */
    setTimeout(function(){if(!document.getElementById('wn-modal')&&!document.body.classList.contains('quiz-focus'))showWhatsNew();},900);
  });
})();
