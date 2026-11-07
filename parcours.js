/* Parcours découverte : 5 niveaux d'après le Livret du citoyen (éd. mai 2026). Textes reformulés ; p. = page du livret. */
var PC=[
{t:"Les bases de la République",s:"Devise, symboles, laïcité",pts:[
["La devise","Liberté, égalité, fraternité : elle est inscrite sur les bâtiments publics (mairies, préfectures).",6],
["Les symboles","Drapeau bleu-blanc-rouge, hymne La Marseillaise, Marianne, fête nationale le 14 juillet, langue officielle : le français.",8],
["Quatre mots pour la République","La France est une République indivisible, laïque, démocratique et sociale (article 1 de la Constitution de 1958).",10],
["La laïcité","Chacun est libre de croire, de ne pas croire ou de changer de religion. L'État est neutre et séparé des religions (loi de 1905).",11],
["La démocratie","Le pouvoir appartient au peuple, qui vote pour ses représentants dès 18 ans.",14]],
ex:[["Quelle est la devise de la France ?",["Liberté, égalité, fraternité","Unité, travail, patrie","Paix, justice, progrès"],"Elle est inscrite sur les bâtiments publics (p. 6)."],
["Vrai ou faux : en France, on est libre de changer de religion.",["Vrai","Faux"],"La laïcité garantit la liberté de conscience (p. 10)."],
["Quelle est la fête nationale ?",["Le 14 juillet","Le 11 novembre","Le 1er mai"],"Elle rappelle la prise de la Bastille (p. 8)."],
["À partir de quel âge peut-on voter ?",["18 ans","16 ans","21 ans"],"Il faut être majeur et inscrit sur les listes électorales (p. 14 et 17)."]]},
{t:"Comment la France est organisée",s:"Pouvoirs, élus, territoire, Europe",pts:[
["Trois pouvoirs","Législatif (le Parlement fait les lois), exécutif (le gouvernement les applique), judiciaire (les juges rendent la justice).",16],
["Le Président","Il est élu pour 5 ans au suffrage universel direct, et peut l'être deux fois de suite.",16],
["Le Parlement","L'Assemblée nationale compte 577 députés ; le Sénat compte 348 sénateurs.",16],
["Le territoire","Communes, départements et régions : 34 875 communes, 101 départements, 18 régions.",19],
["L'Union européenne","Créée en 1992, elle compte 27 États membres. L'euro circule depuis 2002.",22]],
ex:[["Combien de temps dure le mandat du Président ?",["5 ans","6 ans","7 ans"],"Il est élu pour 5 ans (p. 16)."],
["Qui rend la justice ?",["Les juges","Le gouvernement","Le Parlement"],"C'est le pouvoir judiciaire (p. 16)."],
["Combien d'États membres compte l'Union européenne ?",["27","25","31"],"Ils sont 27 depuis la sortie du Royaume-Uni (p. 22)."],
["Vrai ou faux : la France compte 101 départements.",["Vrai","Faux"],"96 en métropole et 5 outre-mer (p. 19)."]]},
{t:"Droits et devoirs",s:"Libertés, justice, obligations",pts:[
["Où sont écrits nos droits ?","Dans la Constitution de 1958, la Déclaration de 1789, le préambule de 1946 et la Charte de l'environnement de 2004.",25],
["Des libertés avec des limites","Liberté de pensée, d'expression, de la presse, d'aller et venir. Injures, diffamation et incitation à la haine sont interdites.",26],
["La justice","Toute personne est présumée innocente tant qu'aucune condamnation définitive n'a été prononcée, et peut être assistée d'un avocat.",30],
["Des devoirs","Respecter les lois, payer ses impôts, scolariser ses enfants de 3 à 16 ans.",34],
["Voter et aider","Voter n'est pas obligatoire mais c'est un devoir civique. Porter secours à une personne en danger est une obligation légale.",36]],
ex:[["Vrai ou faux : voter est obligatoire en France.",["Faux","Vrai"],"C'est un devoir civique, pas une obligation (p. 34)."],
["L'école est obligatoire…",["de 3 à 16 ans","de 6 à 18 ans","de 3 à 18 ans"],"Les parents doivent scolariser leurs enfants (p. 36)."],
["Que signifie la présomption d'innocence ?",["On est innocent tant qu'on n'est pas condamné définitivement","On est coupable tant qu'on n'a pas prouvé le contraire"],"C'est un principe de la justice (p. 30)."],
["Vrai ou faux : on peut dire n'importe quoi sans limite.",["Faux","Vrai"],"Injures et incitation à la haine sont punies (p. 26)."]]},
{t:"Histoire, géographie et culture",s:"Dates clés, territoire, patrimoine",pts:[
["La Révolution","Le 14 juillet 1789, la prise de la Bastille marque son début ; la Déclaration des droits de l'homme est adoptée en 1789.",40],
["Napoléon Ier","Il a créé le Code civil, la Banque de France et les préfets.",41],
["Des dates à retenir","Abolition de l'esclavage en 1848 ; école gratuite en 1881, laïque et obligatoire en 1882 ; appel du 18 juin 1940 ; Ve République en 1958.",42],
["Le territoire","8 pays voisins en métropole ; le Mont-Blanc (4 810 m) est la plus haute montagne ; la Loire est le plus long fleuve.",51],
["Culture","Le Louvre (La Joconde), la tour Eiffel (1889) ; la France est la première destination touristique au monde.",56]],
ex:[["Quel événement marque le début de la Révolution ?",["La prise de la Bastille","Le sacre de Napoléon","L'appel du 18 juin"],"Le 14 juillet 1789 (p. 40)."],
["Qui a conçu la tour Eiffel ?",["Gustave Eiffel","Victor Hugo","Napoléon"],"Pour l'Exposition universelle de 1889 (p. 56)."],
["Vrai ou faux : la Ve République date de 1958.",["Vrai","Faux"],"La Constitution a été promulguée le 4 octobre 1958 (p. 45)."],
["Quel est le plus long fleuve de France ?",["La Loire","La Seine","Le Rhône"],"La Loire (p. 51)."]]},
{t:"Vivre en France",s:"Santé, urgences, travail, famille",pts:[
["La santé","La Sécurité sociale existe depuis 1945. L'Assurance Maladie est obligatoire ; la carte Vitale prouve vos droits.",68],
["Les urgences","15 SAMU, 17 police, 18 pompiers, 112 numéro européen. Appels gratuits.",69],
["Le travail","35 heures par semaine ; SMIC = salaire minimum ; le contrat de travail est obligatoire (CDD, CDI, intérim).",70],
["La famille","Seul le mariage civil en mairie est reconnu, à partir de 18 ans. La polygamie est interdite.",73],
["L'école","Elle est obligatoire de 3 à 16 ans : maternelle, élémentaire, collège, lycée.",75]],
ex:[["Quel numéro appeler pour les pompiers ?",["18","15","17"],"15 SAMU, 17 police, 18 pompiers (p. 69)."],
["Quel mariage est reconnu par la loi ?",["Le mariage civil en mairie","Le mariage religieux","Les deux"],"Seul le mariage civil (p. 73)."],
["Quelle est la durée légale du travail par semaine ?",["35 heures","39 heures","40 heures"],"Fixée par le Code du travail (p. 70)."]]}
];
var pc={l:0,i:0,ok:0,opts:[],done:false};
function pcLoad(){try{return JSON.parse(localStorage.getItem('cap_parcours')||'{}');}catch(e){return {};}}
function pcBuild(){
  var el=document.getElementById('pc-path');if(!el)return;
  var d=pcLoad(),n=0,next=-1;
  PC.forEach(function(l,i){if(d[i])n++;else if(next<0)next=i;});
  var h='<div class="pc-head"><strong>'+(n===PC.length?'Parcours terminé 🎉':'Niveau '+(next+1)+' sur '+PC.length)+'</strong><span>'+n+' / '+PC.length+' niveaux validés</span></div><div class="prog-wrap"><div class="prog-fill" style="width:'+(n/PC.length*100)+'%"></div></div><div class="pc-list">';
  PC.forEach(function(l,i){
    h+='<button type="button" class="pc-lv'+(d[i]?' done':'')+(i===next?' cur':'')+'" onclick="pcOpen('+i+')"><span class="lv-num">'+(d[i]?'✓':(i+1))+'</span><span class="pc-t"><strong>'+l.t+'</strong><small>'+l.s+'</small></span><span class="pc-st">'+(d[i]?'Validé':(i===next?'Vous êtes ici':'À faire'))+'</span></button>';
  });
  h+='</div>';
  if(n===PC.length)h+='<div class="pc-final"><strong>Vous avez les bases.</strong> Passez maintenant aux quiz de naturalisation.<br><a class="btn" href="quiz-naturalisation.html">▶ Quiz de 40 questions</a></div>';
  el.innerHTML=h;
}
function pcOpen(i){
  pc.l=i;var L=PC[i];
  document.getElementById('pc-title').textContent='Niveau '+(i+1)+' · '+L.t;
  document.getElementById('pc-pts').innerHTML=L.pts.map(function(p){return '<div class="pc-pt"><div><strong>'+p[0]+'</strong><p>'+p[1]+'</p></div><span class="lv-p">p. '+p[2]+'</span></div>';}).join('');
  lvShow('pc-lesson');
}
function pcStart(){pc.i=0;pc.ok=0;lvShow('pc-ex');pcQ();}
function pcQ(){
  var e=PC[pc.l].ex[pc.i];pc.done=false;
  document.getElementById('pc-n').innerHTML=(pc.i+1)+' <small>/ '+PC[pc.l].ex.length+'</small>';
  document.getElementById('pc-q').textContent=e[0];
  pc.opts=e[1].slice().sort(function(){return Math.random()-.5;});
  document.getElementById('pc-opts').innerHTML=pc.opts.map(function(o,k){return '<button type="button" class="lv-opt" onclick="pcAns('+k+')"><b>'+'ABC'.charAt(k)+'</b><span>'+o+'</span></button>';}).join('');
  document.getElementById('pc-fb').hidden=true;document.getElementById('pc-next').hidden=true;
}
function pcAns(k){
  if(pc.done)return;pc.done=true;
  var e=PC[pc.l].ex[pc.i],good=pc.opts[k]===e[1][0];
  document.querySelectorAll('#pc-opts .lv-opt').forEach(function(b,i){b.disabled=true;if(pc.opts[i]===e[1][0])b.classList.add('ok');else if(i===k)b.classList.add('ko');});
  if(good)pc.ok++;
  var f=document.getElementById('pc-fb');f.innerHTML=(good?'✓ <strong>Exact.</strong> ':'✗ <strong>Pas tout à fait.</strong> ')+e[2];f.hidden=false;
  var n=document.getElementById('pc-next');n.textContent=pc.i+1>=PC[pc.l].ex.length?'Voir le résultat':'Suivant →';n.hidden=false;
}
function pcNext(){pc.i++;if(pc.i>=PC[pc.l].ex.length){pcEnd();return;}pcQ();}
function pcEnd(){
  var t=PC[pc.l].ex.length,ok=pc.ok>=Math.ceil(t*.7),d=pcLoad(),last=pc.l===PC.length-1;
  if(ok){d[pc.l]=pc.ok;try{localStorage.setItem('cap_parcours',JSON.stringify(d));}catch(e){}}
  var all=PC.every(function(l,i){return pcLoad()[i];});
  document.getElementById('pc-res').innerHTML=(ok?'<strong>Niveau '+(pc.l+1)+' validé</strong>':'<strong>Pas encore validé</strong>')+'<br>'+pc.ok+' bonne'+(pc.ok>1?'s':'')+' réponse'+(pc.ok>1?'s':'')+' sur '+t;
  var b='';
  if(ok&&all)b='<a class="btn" href="quiz-naturalisation.html">▶ Passer au quiz de naturalisation</a> <button class="btn btn-outline" onclick="buildLivret()">Voir mon parcours</button>';
  else if(ok&&!last)b='<button class="btn" onclick="pcOpen('+(pc.l+1)+')">Niveau suivant →</button> <button class="btn btn-outline" onclick="buildLivret()">Mon parcours</button>';
  else if(ok)b='<button class="btn" onclick="buildLivret()">Mon parcours</button>';
  else b='<button class="btn" onclick="pcOpen('+pc.l+')">Relire la leçon</button> <button class="btn btn-outline" onclick="pcStart()">Réessayer</button>';
  document.getElementById('pc-actions').innerHTML=b;lvShow('pc-end');
}
