/* Fiches du Livret du citoyen (édition mai 2026, ministère de l'Intérieur). Aide à la révision : textes reformulés, page = numéro imprimé du livret. */
var LV_PARTS={1:"Principes et valeurs",2:"Institutions",3:"Droits et devoirs",4:"Histoire, géo, culture",5:"Vivre en France"};
var LV_SEC={av:[0,"Avant-propos"],"1a":[1,"La devise et les symboles"],"1b":[1,"Les principes de la République"],"2a":[2,"Démocratie et État de droit"],"2b":[2,"Organisation territoriale"],"2c":[2,"L'Union européenne"],"3a":[3,"Les droits fondamentaux"],"3b":[3,"Obligations et devoirs"],"4a":[4,"Périodes et personnages"],"4b":[4,"Territoire et géographie"],"4c":[4,"Culture et patrimoine"],"5a":[5,"La vie quotidienne"],"5b":[5,"Travailler en France"],"5c":[5,"La vie familiale"],an:[0,"Annexes"]};
var LV=[
["av",3,"Quel niveau de français le livret mentionne-t-il ?","Le niveau B2 oral et écrit du cadre européen commun de référence pour les langues."],
["1a",6,"Quelle est la devise de la République ?","Liberté, égalité, fraternité. Elle est inscrite sur le fronton des bâtiments publics (préfectures, mairies…)."],
["1a",6,"Que dit l'article 4 de la Déclaration des droits de l'homme et du citoyen (1789) ?","La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui."],
["1a",6,"Qu'est-ce qu'une discrimination ?","Traiter différemment une personne dans une situation comparable (logement, travail, loisirs…) à cause de son origine, sexe, orientation sexuelle, opinion, âge, religion ou apparence. C'est puni par la loi."],
["1a",8,"Quelle est la fête nationale ? Pourquoi ?","Le 14 juillet (depuis 1880) : prise de la Bastille (1789) et Fête de la Fédération (1790)."],
["1a",8,"Qui a écrit La Marseillaise ? Que représente Marianne ?","Rouget de Lisle, en 1792. Marianne porte un bonnet phrygien (symbole de la liberté) : c'est le symbole de la République."],
["1b",10,"Que dit l'article 1er de la Constitution de 1958 ?","La France est une République indivisible, laïque, démocratique et sociale."],
["1b",10,"Que garantit la laïcité ? Quel jour est-elle célébrée ?","La liberté de conscience (croire, ne pas croire, changer de religion), le libre exercice des cultes, la neutralité de l'État. Célébrée le 9 décembre."],
["1b",11,"Le blasphème est-il un délit en France ?","Non. Chacun peut critiquer une religion : c'est la liberté d'expression. Ses limites : diffamation, injures, incitation à la haine, négationnisme…"],
["1b",12,"Que dit la loi du 11 octobre 2010 ?","Elle interdit de dissimuler son visage dans l'espace public (cagoule, masque, voile intégral…)."],
["1b",13,"Quelle loi interdit les signes religieux ostensibles à l'école publique ?","La loi du 15 mars 2004. Les signes discrets sont autorisés."],
["1b",14,"Que dit l'article 3 de la Constitution ?","La souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par le référendum."],
["2a",16,"Quels sont les trois pouvoirs ?","Législatif (députés et sénateurs), exécutif (gouvernement), judiciaire (juges)."],
["2a",16,"Comment est élu le Président de la République ?","Au suffrage universel direct, pour 5 ans, renouvelable une fois. Il faut 500 parrainages d'élus pour se présenter."],
["2a",16,"Comment est composé le Parlement ?","Assemblée nationale (577 députés, élus tous les 5 ans) et Sénat (348 sénateurs, élus pour 6 ans au suffrage indirect)."],
["2a",17,"Quelles conditions pour voter ?","Nationalité française (ou UE pour municipales et européennes), être majeur, ne pas être privé de ses droits civiques, être inscrit sur les listes électorales."],
["2a",17,"Quand les femmes ont-elles obtenu le droit de vote ?","En avril 1944 ; elles ont voté pour la première fois en avril 1945."],
["2b",19,"Combien de communes, départements et régions ?","34 875 communes (1er janvier 2025), 101 départements (96 en métropole, 5 outre-mer), 18 régions (13 métropolitaines, 5 outre-mer)."],
["2b",19,"Quel est le département le plus récent ?","Mayotte, créé en 2011."],
["2b",20,"Quels sont les 5 territoires à la fois départements et régions ?","Guadeloupe, Martinique, Mayotte, Guyane, La Réunion."],
["2c",22,"Quels sont les 6 pays fondateurs de la CEE (traité de Rome, 1957) ?","France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg."],
["2c",22,"Quand l'Union européenne est-elle créée ? Combien de membres ?","En 1992 (traité de Maastricht). 27 États membres aujourd'hui."],
["2c",23,"Quels sont les symboles de l'Union européenne ?","12 étoiles sur le drapeau ; hymne : l'Ode à la joie (Beethoven) ; devise : « Unie dans la diversité » ; Journée de l'Europe le 9 mai."],
["2c",23,"Depuis quand l'euro circule-t-il ?","Depuis le 1er janvier 2002 (pièces et billets)."],
["3a",25,"Quels textes garantissent les droits fondamentaux ?","Constitution de 1958, DDHC de 1789, préambule de 1946, Charte de l'environnement de 2004, textes internationaux (ex. Convention européenne des droits de l'homme)."],
["3a",27,"Qu'est-ce que l'espace Schengen ?","Une zone de libre circulation sans contrôle aux frontières intérieures : 23 États de l'UE + Norvège, Islande, Suisse, Liechtenstein."],
["3a",29,"Depuis quand l'IVG est-elle garantie par la Constitution ?","Depuis le 8 mars 2024."],
["3a",29,"Quels droits en garde à vue ?","Connaître les motifs de l'arrestation, garder le silence, être assisté d'un avocat, prévenir un proche."],
["3a",31,"Quelle loi reconnaît la liberté d'association ?","La loi du 1er juillet 1901."],
["3b",32,"Quelles sont les trois catégories d'infractions ?","Contraventions (tribunal de police), délits (tribunal correctionnel, jusqu'à 10 ans de prison), crimes (cour d'assises ou cour criminelle, jusqu'à la perpétuité)."],
["3b",34,"Le vote est-il obligatoire en France ?","Non, mais c'est un devoir civique important."],
["3b",35,"Le service militaire est-il obligatoire ?","Non, plus depuis 1997. Journée défense et citoyenneté (JDC) ; recensement en mairie dès 16 ans. Un service militaire volontaire existe depuis le 1er janvier 2026."],
["3b",36,"Jusqu'à quel âge la scolarité est-elle obligatoire ?","De 3 à 16 ans."],
["4a",38,"Dans l'ordre, quels sont les régimes depuis la Révolution ?","Révolution (1789), Ire République (1792), Premier Empire (1804), Restauration (1814), Monarchie de Juillet (1830), IIe République (1848), Second Empire (1852), IIIe République (1870), Vichy (1940), GPRF (1944), IVe République (1946), Ve République (1958)."],
["4a",39,"Qui est Jeanne d'Arc ?","Jeune paysanne (1412-1431) qui a mené des troupes pendant la guerre de Cent Ans ; héroïne nationale."],
["4a",39,"Que décide Henri IV en 1598 ?","L'édit de Nantes, qui met fin aux guerres de religion entre catholiques et protestants."],
["4a",40,"Quel événement marque le début de la Révolution ?","La prise de la Bastille, le 14 juillet 1789."],
["4a",41,"Quelles institutions Napoléon Ier a-t-il créées ?","Le Code civil, la Banque de France et les préfets."],
["4a",42,"Quand l'esclavage a-t-il été aboli ? Par qui ?","En 1848 (IIe République) ; le décret est rédigé par Victor Schoelcher."],
["4a",43,"Qu'a fait Jules Ferry pour l'école ?","École publique gratuite (1881), puis laïque et obligatoire (1882)."],
["4a",44,"Qu'est-ce que l'appel du 18 juin 1940 ?","Appel de Charles de Gaulle, depuis Londres (BBC), qui marque le début de la Résistance."],
["4a",45,"Comment naît la Ve République ?","De Gaulle rédige une nouvelle Constitution, adoptée par référendum le 28 septembre 1958 et promulguée le 4 octobre 1958."],
["4a",46,"Qui a fait voter l'abolition de la peine de mort ?","Robert Badinter, ministre de la Justice, en 1981 (président : François Mitterrand)."],
["4b",49,"Combien d'habitants et quelle superficie ?","68,6 millions d'habitants (2025) ; 675 000 km² avec l'outre-mer."],
["4b",49,"Avec quels pays la métropole a-t-elle une frontière terrestre ?","Allemagne, Andorre, Belgique, Espagne, Italie, Luxembourg, Monaco, Suisse (8 pays)."],
["4b",51,"Quelle est la plus haute montagne de France ? Le plus long fleuve ?","Le Mont-Blanc (4 810 m). La Loire est le plus long fleuve français."],
["4c",54,"Quel tableau est exposé au Louvre ?","La Joconde, de Léonard de Vinci."],
["4c",56,"Qui a conçu la tour Eiffel ? Quand ?","Gustave Eiffel, pour l'Exposition universelle de 1889."],
["4c",58,"Quand est la fête de la musique ?","Le 21 juin, lancée en 1982."],
["4c",59,"Quand la France a-t-elle gagné la Coupe du monde de football ?","En 1998 (contre le Brésil) et en 2018 (contre la Croatie) : deux étoiles sur le maillot."],
["5a",63,"Comment demander un logement social (HLM) ?","Par un dossier en ligne sur demande-logement-social.gouv.fr ; revenus sous des plafonds."],
["5a",65,"Où est-il interdit de fumer ?","Lieux fermés ou couverts, et depuis le 1er juillet 2025 aussi parcs, plages, abribus, abords d'écoles. Amende : 135 €."],
["5a",68,"Quand la Sécurité sociale a-t-elle été créée ?","En 1945, à la Libération."],
["5a",69,"Quels sont les numéros d'urgence principaux ?","15 SAMU · 17 police secours · 18 pompiers · 112 urgence européen. Appels gratuits 24 h/24."],
["5a",69,"Quels numéros pour l'enfance, les violences, le harcèlement ?","119 enfance maltraitée · 3919 violences conjugales · 3018 harcèlement scolaire · 115 hébergement d'urgence · 196 secours en mer."],
["5b",70,"Quelle est la durée légale du travail ? Qu'est-ce que le SMIC ?","35 heures par semaine. Le SMIC est le salaire horaire minimum garanti."],
["5b",71,"Quels sont les contrats de travail courants ?","CDD (temporaire), CDI (permanent), intérim."],
["5c",73,"Quel mariage est reconnu par la loi ? À partir de quel âge ?","Seul le mariage civil en mairie. À partir de 18 ans (16 ans avec autorisation du procureur et accord des parents). La polygamie est interdite."],
["5c",75,"De quel âge à quel âge l'école est-elle obligatoire ?","De 3 à 16 ans."],
["5c",76,"Qu'est-ce que la majorité numérique ?","Fixée à 15 ans (loi du 7 juillet 2023) : avant, on ne s'inscrit plus seul sur les réseaux sociaux."],
["an",81,"Où trouver le référentiel de l'examen civique ?","Annexe I de l'arrêté du 10 octobre 2025 relatif au programme, aux épreuves et à l'organisation de l'examen civique (Légifrance)."]
];
var lv={part:0,rev:false,pool:[],i:0,ok:0,ko:[],flipped:false};
function lvId(c){var s=c[1]+c[2],h=5381,k;for(k=0;k<s.length;k++)h=((h<<5)+h+s.charCodeAt(k))|0;return String(h);}
function lvLoad(){try{return JSON.parse(localStorage.getItem('cap_livret')||'{}');}catch(e){return {};}}
function lvSave(d){try{localStorage.setItem('cap_livret',JSON.stringify(d));}catch(e){}}
function lvCards(){var d=lvLoad();return LV.filter(function(c){return (!lv.part||LV_SEC[c[0]][0]===lv.part)&&(!lv.rev||d[lvId(c)]);});}
function lvShow(a){['lv-landing','lv-screen','lv-quiz','lv-results','lv-reader','pc-lesson','pc-ex','pc-end'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display=(id===a)?'block':'none';});window.scrollTo(0,0);}
function lvSrc(c){var s=LV_SEC[c[0]];return (s[0]?'Partie '+s[0]+' · ':'')+s[1]+' · p. '+c[1];}
function buildLivret(){
  var el=document.getElementById('lv-path');if(!el)return;
  var d=lvLoad(),ok=d.ok||{};
  function row(p,t){
    var cs=LV.filter(function(c){return !p||LV_SEC[c[0]][0]===p;}),n=cs.length,m=cs.filter(function(c){return ok[lvId(c)];}).length;
    return '<div class="lv-step'+(n&&m===n?' done':'')+'"><div class="lv-step-h"><span class="lv-num">'+(p||'★')+'</span><div class="lv-step-t"><strong>'+t+'</strong><small>'+m+' / '+n+' maîtrisées</small></div></div>'+
    '<div class="prog-wrap"><div class="prog-fill" style="width:'+(n?Math.round(m/n*100):0)+'%"></div></div>'+
    '<div class="lv-modes"><button type="button" onclick="lvGo('+p+',\'cards\')">🃏 Cartes</button><button type="button" onclick="lvGo('+p+',\'quiz\')">🎯 Quiz</button><button type="button" onclick="lvGo('+p+',\'tf\')">✔✖ Vrai/Faux</button></div></div>';
  }
  var h='';for(var p in LV_PARTS)h+=row(+p,LV_PARTS[p]);
  el.innerHTML=h+row(0,'Tout le livret');
  var r=LV.filter(function(c){return d[lvId(c)];}).length;
  document.getElementById('lv-count').textContent=LV.length+' fiches';if(typeof pcBuild==='function')pcBuild();
  document.getElementById('lv-rev').innerHTML='<label><input type="checkbox" '+(lv.rev?'checked':'')+' onchange="lvOnlyRev(this.checked)"> Seulement mes cartes « à revoir » ('+r+')</label>';
  var sp=!('speechSynthesis' in window);
  document.querySelectorAll('.lv-listen').forEach(function(b){b.hidden=sp;});
  lvShow('lv-landing');
}
function lvOnlyRev(v){lv.rev=v;}
function lvGo(p,mode){lv.part=p;if(mode==='cards')lvStart();else lvQuizStart(mode);}
function lvAgain(){if(lv.last==='cards')lvStart();else lvQuizStart(lv.last);}
function lvStart(){
  lv.pool=lvCards().slice().sort(function(){return Math.random()-.5;});
  if(!lv.pool.length){alert('Aucune carte à revoir ici pour le moment.');return;}
  lv.i=0;lv.ok=0;lv.ko=[];lv.last='cards';lvShow('lv-screen');lvCard();
}
function lvCard(){
  var c=lv.pool[lv.i];lv.flipped=false;
  document.getElementById('lv-n').innerHTML=(lv.i+1)+' <small>/ '+lv.pool.length+'</small>';
  document.getElementById('lv-prog').style.width=(lv.i/lv.pool.length*100)+'%';
  document.getElementById('lv-src').textContent=LV_SEC[c[0]][1];
  document.getElementById('lv-q').textContent=c[2];
  document.getElementById('lv-a').textContent=c[3];
  document.getElementById('lv-page').textContent='📖 Livret du citoyen, page '+c[1];
  document.getElementById('lv-a').hidden=true;document.getElementById('lv-page').hidden=true;document.getElementById('lv-act').hidden=true;
  document.getElementById('lv-hint').hidden=false;
}
function lvFlip(){
  if(lv.flipped)return;lv.flipped=true;
  document.getElementById('lv-a').hidden=false;document.getElementById('lv-page').hidden=false;document.getElementById('lv-act').hidden=false;document.getElementById('lv-hint').hidden=true;
}
function lvDone(c){var d=lvLoad(),id=lvId(c);d.ok=d.ok||{};d.ok[id]=1;delete d[id];lvSave(d);}
function lvFail(c){var d=lvLoad(),id=lvId(c);d[id]=1;if(d.ok)delete d.ok[id];lvSave(d);}
function lvMark(ok){
  if(!lv.flipped)return;
  var c=lv.pool[lv.i];
  if(ok){lv.ok++;lvDone(c);}else{lv.ko.push(c);lvFail(c);}
  lv.i++;
  if(lv.i>=lv.pool.length){lvEnd();return;}
  lvCard();
}
function lvEnd(){
  document.getElementById('lv-res').innerHTML='<strong>'+lv.ok+'</strong> sues · <strong>'+lv.ko.length+'</strong> à revoir sur '+lv.pool.length;
  document.getElementById('lv-kolist').innerHTML=lv.ko.map(function(c){return '<li>'+c[2]+' <span class="lv-p">p. '+c[1]+'</span></li>';}).join('')||'<li>Bravo, tout est acquis !</li>';
  lvShow('lv-results');
}
function lvRead(){
  var h='',k;
  for(k in LV_SEC){
    var it=LV.filter(function(c){return c[0]===k&&(!lv.part||LV_SEC[k][0]===lv.part);});
    if(!it.length)continue;
    h+='<details class="faq-item"><summary>'+(LV_SEC[k][0]?'Partie '+LV_SEC[k][0]+' · ':'')+LV_SEC[k][1]+'</summary><div class="faq-answer">'+it.map(function(c){return '<p><strong>'+c[2]+'</strong><br>'+c[3]+' <span class="lv-p">p. '+c[1]+'</span></p>';}).join('')+'</div></details>';
  }
  document.getElementById('lv-readlist').innerHTML=h;lvShow('lv-reader');
}
document.addEventListener('keydown',function(e){
  var s=document.getElementById('lv-screen');
  if(!s||s.style.display!=='block'||e.ctrlKey||e.metaKey||e.altKey)return;
  if((e.key==='Enter'||e.key===' ')&&e.target.tagName!=='BUTTON'){e.preventDefault();lvFlip();}
  else if(e.key==='1'){lvMark(true);}else if(e.key==='2'){lvMark(false);}
});

/* ===== Quiz (QCM) et Vrai/Faux : fabriqués à partir des cartes ===== */
var lq={mode:'',pool:[],i:0,ok:0,cur:null,done:false,opts:[],tf:true,shown:null};
function lvShuf(a){return a.slice().sort(function(){return Math.random()-.5;});}
function lvQT(c){return c[2].toLowerCase().replace(/[^a-zà-ÿ' ]/g,'').split(' ')[0];}
function lvDistr(c,n){
  var all=LV.filter(function(x){return x!==c&&x[3]!==c[3]&&x[3].slice(0,20)!==c[3].slice(0,20);});
  var t=lvQT(c),pa=LV_SEC[c[0]][0];
  var same=all.filter(function(x){return lvQT(x)===t&&LV_SEC[x[0]][0]===pa;}),kind=all.filter(function(x){return lvQT(x)===t&&same.indexOf(x)<0;}),rest=all.filter(function(x){return lvQT(x)!==t;});
  var out=[],seen={};
  lvShuf(same).concat(lvShuf(kind),lvShuf(rest)).forEach(function(x){if(out.length<n&&!seen[x[3]]){seen[x[3]]=1;out.push(x);}});
  return out;
}
function lvQuizStart(mode){
  lq.pool=lvShuf(lvCards()).slice(0,10);
  if(!lq.pool.length){alert('Aucune carte à revoir ici pour le moment.');return;}
  lq.mode=mode;lq.i=0;lq.ok=0;lv.ko=[];lv.last=mode;lvShow('lv-quiz');lvQ();
}
function lvQ(){
  var c=lq.cur=lq.pool[lq.i],o=document.getElementById('lq-opts'),pr=document.getElementById('lq-prop');
  lq.done=false;
  document.getElementById('lq-n').innerHTML=(lq.i+1)+' <small>/ '+lq.pool.length+'</small>';
  document.getElementById('lq-prog').style.width=(lq.i/lq.pool.length*100)+'%';
  document.getElementById('lq-mode').textContent=(lq.mode==='quiz'?'Quiz · ':'Vrai ou faux · ')+LV_SEC[c[0]][1];
  document.getElementById('lq-q').textContent=c[2];
  document.getElementById('lq-fb').hidden=true;document.getElementById('lq-next').hidden=true;
  if(lq.mode==='quiz'){
    pr.hidden=true;lq.opts=lvShuf([c].concat(lvDistr(c,3)));
    o.innerHTML=lq.opts.map(function(x,k){return '<button type="button" class="lv-opt" onclick="lvPick('+k+')"><b>'+'ABCD'.charAt(k)+'</b><span>'+x[3]+'</span></button>';}).join('');
  }else{
    lq.tf=Math.random()<.5;lq.shown=lq.tf?c:(lvDistr(c,1)[0]||c);if(lq.shown===c)lq.tf=true;
    pr.hidden=false;pr.textContent='Réponse proposée : '+lq.shown[3];
    o.innerHTML='<button type="button" class="lv-opt" onclick="lvPick(0)"><b>V</b><span>Vrai</span></button><button type="button" class="lv-opt" onclick="lvPick(1)"><b>F</b><span>Faux</span></button>';
  }
}
function lvPick(k){
  if(lq.done)return;lq.done=true;
  var c=lq.cur,good=lq.mode==='quiz'?lq.opts[k]===c:((k===0)===lq.tf),bs=document.querySelectorAll('#lq-opts .lv-opt');
  bs.forEach(function(b,i){
    b.disabled=true;
    var right=lq.mode==='quiz'?lq.opts[i]===c:((i===0)===lq.tf);
    if(right)b.classList.add('ok');else if(i===k)b.classList.add('ko');
  });
  if(good){lq.ok++;lvDone(c);}else{lv.ko.push(c);lvFail(c);}
  var f=document.getElementById('lq-fb');
  f.innerHTML=(good?'✓ <strong>Exact.</strong> ':'✗ <strong>Pas tout à fait.</strong> ')+'Bonne réponse : '+c[3]+' <span class="lv-p">📖 livret, p. '+c[1]+'</span>';
  f.hidden=false;
  var n=document.getElementById('lq-next');n.textContent=lq.i+1>=lq.pool.length?'Voir le résultat':'Suivant →';n.hidden=false;
}
function lvNext(){
  lq.i++;
  if(lq.i>=lq.pool.length){lv.pool=lq.pool;lv.ok=lq.ok;lvEnd();return;}
  lvQ();
}
/* ===== Écouter (synthèse vocale du navigateur) ===== */
function lvListen(){
  if(!('speechSynthesis' in window))return;
  var t='',qz=document.getElementById('lv-quiz');
  if(qz&&qz.style.display==='block'&&lq.cur)t=lq.cur[2]+(lq.mode==='tf'?'. Réponse proposée : '+lq.shown[3]:'');
  else if(lv.pool[lv.i])t=lv.pool[lv.i][2]+(lv.flipped?'. '+lv.pool[lv.i][3]:'');
  if(!t)return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(t);u.lang='fr-FR';u.rate=.9;window.speechSynthesis.speak(u);
}
document.addEventListener('keydown',function(e){
  var s=document.getElementById('lv-quiz');
  if(!s||s.style.display!=='block'||e.ctrlKey||e.metaKey||e.altKey)return;
  var k=e.key.toLowerCase(),n=lq.mode==='quiz'?'1234'.indexOf(k):(k==='v'||k==='1'?0:(k==='f'||k==='2'?1:-1));
  if(n>-1&&n<(lq.mode==='quiz'?4:2)){lvPick(n);}
  else if(e.key==='Enter'&&e.target.tagName!=='BUTTON'&&lq.done){e.preventDefault();lvNext();}
});
