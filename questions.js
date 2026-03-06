// ================================================================
//  QUESTIONS.JS — Base de données des questions
// ================================================================

const QUESTIONS = [

  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 1 — 🏛️ Histoire                                  │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "🏛️ Histoire",
    question: "Quelle est la date de la prise de la Bastille ?",
    reponse:  "La prise de la Bastille le 14 juillet 1789 est l'événement fondateur de la Révolution française, symbole de la chute de l'Ancien Régime et de l'avènement des idéaux républicains.",
    choix: [
      "14 juillet 1789",
      "4 août 1789",
      "14 juillet 1793",
      "26 août 1789",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui a lancé l'Appel du 18 juin 1940 ?",
    reponse:  "Depuis Londres sur la BBC, le général de Gaulle appela les Français à résister à l'occupation nazie. Cet acte fondateur de la Résistance lui valut d'incarner la France libre.",
    choix: [
      "Charles de Gaulle",
      "Philippe Pétain",
      "Jean Moulin",
      "Georges Clemenceau",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "En quelle année la Ve République a-t-elle été fondée ?",
    reponse:  "La Ve République naît en 1958 sous l'impulsion du général de Gaulle, en réponse à l'instabilité de la IVe République et à la crise algérienne. La Constitution est adoptée par référendum le 28 septembre 1958.",
    choix: [
      "1958",
      "1946",
      "1944",
      "1962",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Que commémore le 11 novembre en France ?",
    reponse:  "Le 11 novembre commémore l'Armistice de 1918, signé à 11h, mettant fin à la Première Guerre mondiale. Jour férié, il rend hommage aux soldats morts pour la France.",
    choix: [
      "L'armistice de la Première Guerre mondiale",
      "La libération de Paris",
      "La victoire de 1945",
      "La déclaration de guerre de 1914",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Jeanne d'Arc ?",
    reponse:  "Jeanne d'Arc (v. 1412-1431) leva le siège d'Orléans (1429) et fit sacrer Charles VII à Reims. Brûlée à Rouen, canonisée en 1920, elle incarne le courage et le patriotisme français.",
    choix: [
      "Héroïne de la guerre de Cent Ans",
      "Reine de France",
      "Résistante de 1940",
      "Révolutionnaire de 1789",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Que s'est-il passé le 6 juin 1944 ?",
    reponse:  "Le Débarquement en Normandie (Opération Overlord) est la plus grande opération amphibie de l'Histoire. Il ouvrit un second front à l'ouest et amorça la libération de la France et de l'Europe.",
    choix: [
      "Débarquement allié en Normandie",
      "Signature de l'armistice de 1945",
      "Appel du général de Gaulle",
      "Libération de Paris",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quelle est la signification du 8 mai ?",
    reponse:  "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie et la fin de la Seconde Guerre mondiale en Europe. Jour férié, il commémore la victoire des Alliés.",
    choix: [
      "Victoire des Alliés en 1945",
      "Armistice de la Première Guerre mondiale",
      "Débarquement en Normandie",
      "Libération de Paris",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la Déclaration des droits de l'Homme et du Citoyen ?",
    reponse:  "Adoptée le 26 août 1789, elle proclame les droits naturels et inaliénables (liberté, propriété, sûreté, résistance à l'oppression). Elle reste au cœur du droit constitutionnel français.",
    choix: [
      "Texte fondateur de 1789 sur les droits naturels",
      "La Constitution de 1958",
      "Le préambule du traité européen",
      "La Magna Carta française",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Napoléon Bonaparte ?",
    reponse:  "Napoléon Bonaparte (1769-1821), général puis Empereur des Français (1804-1815), réorganisa l'État : Code civil (1804), lycées, Légion d'honneur, Banque de France.",
    choix: [
      "Général et Empereur des Français",
      "Roi de France",
      "Président de la IIe République",
      "Directeur du Directoire",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'était la Résistance française (1940-1944) ?",
    reponse:  "La Résistance désigne les mouvements clandestins luttant contre l'occupation nazie et Vichy : maquis, réseaux de renseignement, presse clandestine, aide aux personnes persécutées.",
    choix: [
      "Mouvement clandestin anti-nazi",
      "Parti politique de la IIIe République",
      "L'armée française régulière",
      "Un mouvement pacifiste légal",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Victor Hugo ?",
    reponse:  "Victor Hugo (1802-1885), auteur de Notre-Dame de Paris et Les Misérables, est une figure majeure de la littérature française. Défenseur des droits humains et député, il repose au Panthéon.",
    choix: [
      "Grand écrivain et défenseur des droits humains",
      "Révolutionnaire de 1789",
      "Président de la IIe République",
      "Maréchal de la Grande Armée",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la Révolution française (1789-1799) ?",
    reponse:  "La Révolution française abolit l'Ancien Régime, proclama les droits de l'Homme et jeta les bases de la République. Elle reste l'un des événements fondateurs des démocraties modernes.",
    choix: [
      "Bouleversement abolissant l'Ancien Régime",
      "Une guerre étrangère gagnée par la France",
      "Un mouvement religieux de réforme",
      "La modernisation industrielle de la France",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Marie Curie ?",
    reponse:  "Marie Curie (1867-1934) est la première femme lauréate d'un prix Nobel — et la seule à en avoir reçu deux (physique 1903, chimie 1911). Elle découvrit le polonium et le radium. Elle repose au Panthéon depuis 1995.",
    choix: [
      "Première femme doublement Nobel, découvreuse du radium",
      "Première femme Présidente de la République",
      "Pionnière de l'aviation française",
      "Fondatrice de la Croix-Rouge française",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Louis XIV et pourquoi est-il célèbre ?",
    reponse:  "Louis XIV (1638-1715), dit le Roi-Soleil, est célèbre pour son règne de 72 ans, le plus long de l'histoire de France. Symbole de la monarchie absolue, il fit construire le château de Versailles et centralisa tout le pouvoir entre ses mains.",
    choix: [
      "Roi-Soleil, règne le plus long de l'histoire de France",
      "Roi guillotiné pendant la Révolution française",
      "Premier roi à unifier la France",
      "Fondateur de la Ve République",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Louis XIV et pourquoi est-il célèbre ?",
    reponse:  "Louis XIV (1638-1715), dit le Roi-Soleil, est célèbre pour son règne de 72 ans, le plus long de l'histoire de France. Symbole de la monarchie absolue, il fit construire le château de Versailles et centralisa tout le pouvoir entre ses mains.",
    choix: [
      "Roi-Soleil, règne le plus long de l'histoire de France",
      "Roi guillotiné pendant la Révolution française",
      "Premier roi à unifier la France",
      "Fondateur de la Ve République",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Jean Moulin ?",
    reponse:  "Jean Moulin est le symbole de la Résistance française pendant la Seconde Guerre mondiale. Envoyé par de Gaulle pour unifier les mouvements de résistance, il fut arrêté par la Gestapo, torturé et mourut en déportation en 1943.",
    choix: [
      "Héros de la Résistance, unifié les mouvements contre l'occupation",
      "Général de la Première Guerre mondiale",
      "Président du Conseil sous la IVe République",
      "Fondateur du parti communiste français",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "En quelle année l'esclavage a-t-il été aboli en France ?",
    reponse:  "L'esclavage a été définitivement aboli en France le 27 avril 1848, sous la IIe République, grâce notamment à l'action de Victor Schoelcher, alors sous-secrétaire d'État à la Marine.",
    choix: [
      "1848",
      "1789",
      "1794",
      "1905",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quand a eu lieu la première guerre mondiale ?",
    reponse:  "La Première Guerre mondiale s'est déroulée du 28 juillet 1914 au 11 novembre 1918. Elle opposa les Alliés (France, Angleterre, Russie, États-Unis) aux Empires centraux (Allemagne, Autriche-Hongrie).",
    choix: [
      "Du 28 juillet 1914 au 11 novembre 1918",
      "Du 1er septembre 1939 au 8 mai 1945",
      "Du 14 juillet 1789 au 9 novembre 1799",
      "Du 3 août 1914 au 28 juin 1919",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la bataille de Verdun ?",
    reponse:  "La bataille de Verdun (1916) est l'une des plus sanglantes de la Première Guerre mondiale. Elle opposa l'armée française à l'armée allemande en Lorraine, sans vainqueur décisif, et symbolise le sacrifice des soldats français.",
    choix: [
      "Bataille de 1916 entre France et Allemagne, symbole de sacrifice",
      "Bataille qui a mis fin à la Seconde Guerre mondiale",
      "Victoire décisive de Napoléon en 1805",
      "Bataille fondatrice du Moyen Âge français",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la guerre de Cent Ans ?",
    reponse:  "La guerre de Cent Ans (1337-1453) fut un conflit entre les rois de France et d'Angleterre qui dura en réalité 116 ans. Jeanne d'Arc y joua un rôle décisif en contribuant à la libération du territoire français.",
    choix: [
      "Conflit franco-anglais du Moyen Âge, 116 ans en réalité",
      "Guerre entre la France et l'Allemagne au XIXe siècle",
      "Série de guerres de religion en France",
      "Conflit opposant la France à l'Espagne",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quand ont été construites les cathédrales gothiques françaises ?",
    reponse:  "Les grandes cathédrales gothiques françaises (Notre-Dame de Paris, Chartres, Reims, Amiens…) ont été bâties au Moyen Âge, principalement entre le XIIe et le XIVe siècle.",
    choix: [
      "Au Moyen Âge (XIIe–XIVe siècle)",
      "Sous la Renaissance (XVIe siècle)",
      "Sous Napoléon (XIXe siècle)",
      "Sous Louis XIV (XVIIe siècle)",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quand a été construite la tour Eiffel et à quelle occasion ?",
    reponse:  "La tour Eiffel a été construite en 1889 par Gustave Eiffel à l'occasion de l'Exposition universelle de Paris, pour célébrer le centenaire de la Révolution française. Elle mesure 330 mètres.",
    choix: [
      "En 1889, pour l'Exposition universelle de Paris",
      "En 1900, pour l'Exposition universelle",
      "En 1804, pour le couronnement de Napoléon",
      "En 1876, pour le centenaire de la République",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la loi Veil de 1975 ?",
    reponse:  "La loi Veil, votée le 17 janvier 1975, dépénalise l'interruption volontaire de grossesse (IVG) en France. Préparée par la ministre de la Santé Simone Veil, elle garantit aux femmes le droit de disposer librement de leur corps.",
    choix: [
      "Loi dépénalisant l'IVG, défendue par Simone Veil en 1975",
      "Loi accordant le droit de vote aux femmes",
      "Loi instaurant le congé maternité",
      "Loi sur la parité hommes-femmes en politique",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quel surnom portaient les soldats français pendant la Première Guerre mondiale ?",
    reponse:  "Les soldats français de la Première Guerre mondiale étaient surnommés les « Poilus », en référence à leur barbe et à leur aspect peu soigné dû aux conditions de vie difficiles dans les tranchées.",
    choix: [
      "Les Poilus",
      "Les Bleus",
      "Les Grognards",
      "Les Fantassins",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui étaient les alliés de la France pendant la Première Guerre mondiale ?",
    reponse:  "Pendant la Première Guerre mondiale (1914-1918), les principaux alliés de la France étaient le Royaume-Uni, la Russie et les États-Unis (entrés en guerre en 1917). Cet ensemble formait les Alliés face aux Empires centraux.",
    choix: [
      "Le Royaume-Uni, la Russie et les États-Unis",
      "L'Allemagne, l'Autriche-Hongrie et la Turquie",
      "L'Italie, l'Espagne et le Portugal",
      "La Belgique, la Hollande et le Danemark",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui étaient les alliés de la France pendant la Seconde Guerre mondiale ?",
    reponse:  "Pendant la Seconde Guerre mondiale (1939-1945), les alliés de la France libre étaient le Royaume-Uni, l'URSS (Union soviétique) et les États-Unis. Ensemble, ils vainquirent l'Allemagne nazie et ses alliés.",
    choix: [
      "Le Royaume-Uni, l'URSS et les États-Unis",
      "La Russie, le Japon et les États-Unis",
      "La Belgique, la Pologne et le Royaume-Uni",
      "L'Italie, l'Espagne et l'URSS",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quel était le rôle de la prison de la Bastille avant sa prise en 1789 ?",
    reponse:  "La Bastille était une forteresse servant de prison d'État. Le roi pouvait y emprisonner des personnes sans jugement par lettre de cachet. Des personnalités comme Voltaire y ont été enfermées. Sa prise le 14 juillet 1789 symbolisa la fin de l'arbitraire royal.",
    choix: [
      "Prison d'État royale où l'on enfermait sans jugement",
      "Palais résidentiel du roi Louis XVI",
      "Siège du Parlement de Paris",
      "Arsenal militaire principal de la capitale",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Napoléon Bonaparte selon l'histoire de France ?",
    reponse:  "Napoléon Bonaparte (1769-1821) fut général puis Premier consul, avant de se proclamer Empereur des Français en 1804. Il est à l'origine de grandes réformes durables : le Code civil, la Légion d'honneur, la Banque de France et les lycées.",
    choix: [
      "Général et Empereur, réformateur du droit et de l'État",
      "Roi de France renversé par la Révolution",
      "Général républicain opposé à l'Empire",
      "Premier Président de la IIe République",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "À quelle date précise la Révolution française a-t-elle débuté et pris fin ?",
    reponse:  "La Révolution française débuta le 5 mai 1789 avec l'ouverture des États généraux et se termina le 9 novembre 1799 (18 brumaire an VIII) avec le coup d'État de Napoléon Bonaparte mettant fin au Directoire.",
    choix: [
      "Du 5 mai 1789 au 9 novembre 1799",
      "Du 14 juillet 1789 au 21 janvier 1793",
      "Du 26 août 1789 au 10 août 1792",
      "Du 5 mai 1789 au 26 août 1795",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Charlemagne et quel est son lien avec la France ?",
    reponse:  "Charlemagne (742-814) fut roi des Francs puis premier Empereur d'Occident (800). Il unifia une grande partie de l'Europe occidentale, développa l'éducation et est considéré comme l'un des pères fondateurs de la France et de l'Europe.",
    choix: [
      "Roi des Francs et premier Empereur d'Occident (800)",
      "Premier roi capétien de France",
      "Chef gaulois résistant aux Romains",
      "Fondateur de la première République française",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que l'Exposition universelle de 1889 à Paris ?",
    reponse:  "L'Exposition universelle de 1889 fut organisée à Paris pour célébrer le centenaire de la Révolution française. Elle accueillit des millions de visiteurs du monde entier et donna naissance à la tour Eiffel, construite comme porte d'entrée monumentale.",
    choix: [
      "Événement mondial de 1889 ayant donné naissance à la tour Eiffel",
      "Conférence internationale sur le libre-échange",
      "Célébration de la victoire de Napoléon",
      "Première fête nationale officielle sous la IIIe République",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Quand la séparation de l'Église et de l'État a-t-elle eu lieu en France ?",
    reponse:  "La séparation de l'Église et de l'État fut établie par la loi du 9 décembre 1905, sous la IIIe République. Elle mit fin au régime concordataire de 1801 et posa les bases de la laïcité à la française.",
    choix: [
      "Le 9 décembre 1905",
      "Le 14 juillet 1789",
      "Le 28 mars 1882",
      "Le 4 octobre 1958",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui a instauré le Code civil en France ?",
    reponse:  "Le Code civil fut instauré par Napoléon Bonaparte en 1804. Aussi appelé « Code Napoléon », il régit encore aujourd'hui les relations entre personnes privées (famille, propriété, contrats) et a fortement influencé de nombreux systèmes juridiques dans le monde.",
    choix: [
      "Napoléon Bonaparte, en 1804",
      "La Convention nationale, en 1793",
      "Jules Ferry, en 1882",
      "La IIIe République, en 1870",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Henri IV et pourquoi est-il important ?",
    reponse:  "Henri IV (1553-1610), premier roi Bourbon, mit fin aux guerres de Religion en promulguant l'Édit de Nantes (1598), qui accordait la liberté de culte aux protestants. Il est célèbre pour sa phrase « Paris vaut bien une messe » et resta dans les mémoires comme un roi populaire et rassembleur.",
    choix: [
      "Roi qui mit fin aux guerres de Religion par l'Édit de Nantes",
      "Roi guillotiné pendant la Révolution française",
      "Fondateur de la monarchie absolue en France",
      "Premier roi de la dynastie capétienne",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était François Ier et quel est son héritage culturel ?",
    reponse:  "François Ier (1494-1547) fut un roi mécène qui encouragea la Renaissance en France : il fit venir Léonard de Vinci à Amboise, construisit le château de Chambord et fit du français la langue officielle de l'administration par l'ordonnance de Villers-Cotterêts (1539).",
    choix: [
      "Roi mécène de la Renaissance, imposa le français comme langue officielle",
      "Roi qui bâtit le château de Versailles",
      "Premier roi à se faire couronner à Reims",
      "Roi qui signa le traité de paix avec l'Angleterre",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Catherine de Médicis ?",
    reponse:  "Catherine de Médicis (1519-1589), d'origine florentine, fut reine de France par son mariage avec Henri II, puis régente pour ses fils. Elle joua un rôle politique majeur pendant les guerres de Religion et est associée, à tort ou à raison, à la Saint-Barthélemy (1572).",
    choix: [
      "Reine et régente de France durant les guerres de Religion",
      "Reine de France pendant la Révolution",
      "Épouse de Napoléon Bonaparte",
      "Reine ayant fondé l'Académie française",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que l'Édit de Nantes (1598) ?",
    reponse:  "L'Édit de Nantes, signé par Henri IV en 1598, accordait aux protestants (huguenots) la liberté de conscience et de culte dans certaines villes. Il mit fin aux guerres de Religion qui avaient ravagé la France pendant près de 40 ans.",
    choix: [
      "Édit accordant la liberté de culte aux protestants, fin des guerres de Religion",
      "Déclaration fondatrice des droits des citoyens",
      "Traité de paix entre la France et l'Espagne",
      "Loi instaurant la séparation de l'Église et de l'État",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la Fête de la Fédération du 14 juillet 1790 ?",
    reponse:  "La Fête de la Fédération du 14 juillet 1790 célébra le premier anniversaire de la prise de la Bastille et symbolisa l'unité nationale. C'est cet événement, autant que la prise de la Bastille, que commémore officiellement la fête nationale française du 14 juillet.",
    choix: [
      "Fête de l'unité nationale, un an après la prise de la Bastille",
      "Célébration de la proclamation de la République",
      "Commémoration de la victoire de Valmy",
      "Journée marquant l'adoption de la Constitution",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la Commune de Paris de 1871 ?",
    reponse:  "La Commune de Paris (mars-mai 1871) fut un gouvernement insurrectionnel qui prit le contrôle de Paris après la défaite de la France face à la Prusse. Elle dura 72 jours avant d'être violemment réprimée par le gouvernement de Versailles lors de la « Semaine sanglante ».",
    choix: [
      "Gouvernement insurrectionnel parisien de 72 jours en 1871",
      "Première mairie élue de Paris sous la IIIe République",
      "Soulèvement populaire pendant la Révolution de 1789",
      "Mouvement ouvrier fondateur du parti socialiste",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la décolonisation pour la France ?",
    reponse:  "La décolonisation désigne le processus par lequel les colonies françaises ont accédé à l'indépendance, principalement entre les années 1950 et 1960. L'Algérie, le Sénégal, le Mali, la Côte d'Ivoire et de nombreux autres pays africains en sont des exemples.",
    choix: [
      "Accession à l'indépendance des colonies françaises (années 1950-1960)",
      "Politique d'expansion coloniale de la France au XIXe siècle",
      "Échanges commerciaux entre la France et ses anciens territoires",
      "Mouvement d'immigration des populations coloniales vers la France",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Aliénor d'Aquitaine ?",
    reponse:  "Aliénor d'Aquitaine (1122-1204) fut l'une des femmes les plus puissantes du Moyen Âge. Reine de France par son mariage avec Louis VII, puis reine d'Angleterre par son remariage avec Henri II Plantagenêt, elle régna sur un vaste territoire et fut mère de deux rois d'Angleterre.",
    choix: [
      "Reine de France puis d'Angleterre, femme puissante du Moyen Âge",
      "Reine de France pendant la Révolution",
      "Épouse de Napoléon Bonaparte",
      "Reine ayant fondé la première université française",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qui était Marie-Antoinette ?",
    reponse:  "Marie-Antoinette (1755-1793), archiduchesse d'Autriche, devint reine de France en épousant Louis XVI en 1770. Symbole du luxe et de l'insouciance royale aux yeux du peuple, elle fut guillotinée le 16 octobre 1793, quelques mois après son époux.",
    choix: [
      "Reine de France, épouse de Louis XVI, guillotinée en 1793",
      "Impératrice sous Napoléon Ier",
      "Reine de France pendant la guerre de Cent Ans",
      "Reine ayant signé l'alliance franco-autrichienne",
    ],
    correct: 0,
  },

  {
    theme:    "🏛️ Histoire",
    question: "Qu'est-ce que la Libération de Paris en 1944 ?",
    reponse:  "La Libération de Paris eut lieu du 19 au 25 août 1944. Après le débarquement en Normandie, les forces alliées et la 2e Division blindée du général Leclerc libérèrent la capitale de l'occupation nazie. De Gaulle y fit son entrée triomphale le 26 août 1944.",
    choix: [
      "Libération de Paris en août 1944 par Leclerc et les Alliés",
      "Capitulation de l'Allemagne nazie le 8 mai 1945",
      "Débarquement allié en Normandie le 6 juin 1944",
      "Armistice signé à Paris mettant fin à la guerre",
    ],
    correct: 0,
  },

  // ← Ajoute ici de nouvelles questions d'Histoire ↑


  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 2 — ⚖️ Institutions                              │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "⚖️ Institutions",
    question: "Quelles sont les trois valeurs de la République française ?",
    reponse:  "Liberté, Égalité, Fraternité : inscrites à l'article 2 de la Constitution, elles figurent sur tous les bâtiments officiels et symbolisent le pacte républicain depuis la Révolution.",
    choix: [
      "Liberté, Égalité, Fraternité",
      "Travail, Famille, Patrie",
      "Justice, Paix, Démocratie",
      "Nation, Loi, Roi",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la laïcité ?",
    reponse:  "Principe constitutionnel issu de la loi de 1905, la laïcité garantit la séparation Église/État, la neutralité des services publics en matière religieuse et la liberté de conscience pour tous.",
    choix: [
      "Séparation Église-État, liberté de conscience",
      "Interdiction de toute religion",
      "Religion officielle de l'État",
      "Obligation d'être athée dans le service public",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quels sont les trois pouvoirs de l'État ?",
    reponse:  "Le législatif (Parlement, vote les lois), l'exécutif (Président + gouvernement, les applique) et le judiciaire (tribunaux, rend la justice). Cette séparation garantit l'équilibre démocratique.",
    choix: [
      "Législatif, Exécutif, Judiciaire",
      "Présidentiel, Parlementaire, Militaire",
      "Fédéral, Régional, Communal",
      "Civil, Pénal, Administratif",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Pour combien d'années le Président de la République est-il élu ?",
    reponse:  "Depuis la réforme de 2000, le Président est élu pour 5 ans (quinquennat) au suffrage universel direct, avec un maximum de deux mandats consécutifs.",
    choix: [
      "5 ans",
      "7 ans",
      "4 ans",
      "6 ans",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que l'Assemblée nationale ?",
    reponse:  "Chambre basse du Parlement, composée de 577 députés élus pour 5 ans. Elle vote les lois, contrôle le gouvernement et peut le renverser par une motion de censure.",
    choix: [
      "Chambre basse, 577 députés élus",
      "Chambre haute avec les sénateurs",
      "Le Conseil des ministres",
      "Le Conseil constitutionnel",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "À quel âge peut-on voter en France ?",
    reponse:  "Le droit de vote est accordé à 18 ans à tout citoyen français inscrit sur les listes électorales. Les ressortissants européens votent aux élections locales et européennes.",
    choix: [
      "18 ans",
      "16 ans",
      "21 ans",
      "20 ans",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la Constitution française ?",
    reponse:  "La Constitution du 4 octobre 1958 est la loi suprême de la République. Elle définit l'organisation des pouvoirs, les droits fondamentaux et les valeurs. Toutes les lois doivent lui être conformes.",
    choix: [
      "Loi suprême de la République depuis 1958",
      "Le Code civil de Napoléon",
      "La Déclaration de 1789",
      "Le règlement du Parlement européen",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quel est le rôle du Premier ministre ?",
    reponse:  "Chef du gouvernement nommé par le Président, il dirige l'action gouvernementale, coordonne les ministres, est responsable devant l'Assemblée nationale et assure l'exécution des lois.",
    choix: [
      "Chef du gouvernement nommé par le Président",
      "Chef de l'État élu au suffrage universel",
      "Président du Sénat",
      "Président de l'Assemblée nationale",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le Conseil constitutionnel ?",
    reponse:  "Haute juridiction créée en 1958, il veille à la conformité des lois avec la Constitution, contrôle les élections nationales, et peut être saisi par les citoyens via la QPC (Question Prioritaire de Constitutionnalité).",
    choix: [
      "Juridiction contrôlant la constitutionnalité des lois",
      "La chambre haute du Parlement",
      "Le tribunal pour crimes graves",
      "Le conseil des ministres en séance",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Combien de régions compte la France métropolitaine ?",
    reponse:  "Depuis la réforme de 2016, 13 régions en métropole. S'y ajoutent 5 régions d'outre-mer : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte.",
    choix: [
      "13 régions",
      "22 régions",
      "10 régions",
      "18 régions",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le Sénat ?",
    reponse:  "Chambre haute du Parlement, 348 sénateurs élus pour 6 ans par suffrage indirect (via les élus locaux). Il vote les lois avec l'Assemblée nationale et représente les collectivités territoriales.",
    choix: [
      "Chambre haute, 348 sénateurs",
      "Chambre basse avec les députés",
      "L'organe qui élit le Président",
      "Le gouvernement au complet",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le suffrage universel ?",
    reponse:  "Droit de vote accordé à tous les citoyens majeurs (18 ans+), sans condition de fortune, sexe, religion ou origine. En France, les femmes l'obtinrent en 1944.",
    choix: [
      "Droit de vote pour tous les citoyens majeurs",
      "Vote réservé aux propriétaires",
      "Élection par les seuls représentants élus",
      "Droit réservé aux hommes",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Combien de mandats présidentiels consécutifs sont possibles ?",
    reponse:  "Un Président ne peut exercer que deux mandats consécutifs de 5 ans. Limite adoptée en 2008 pour éviter une trop longue concentration du pouvoir.",
    choix: [
      "Deux mandats consécutifs maximum",
      "Autant de fois qu'il est élu",
      "Pas de limitation",
      "Trois mandats au total",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quelles sont les différentes républiques françaises et leurs dates ?",
    reponse:  "La France a connu cinq républiques : Ire (1792-1804), IIe (1848-1852), IIIe (1870-1940), IVe (1946-1958) et Ve (1958 à aujourd'hui), fondée par de Gaulle.",
    choix: [
      "Cinq républiques, de 1792 à aujourd'hui",
      "Trois républiques, depuis la Révolution",
      "Quatre républiques, la Ve étant en cours",
      "Six républiques dont une sous Napoléon",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la cohabitation politique ?",
    reponse:  "La cohabitation désigne la coexistence d'un Président de la République et d'un Premier ministre d'orientations politiques opposées. Exemple : Mitterrand (PS) avec Chirac (RPR) de 1986 à 1988.",
    choix: [
      "Président et Premier ministre de bords politiques opposés",
      "Alliance entre deux partis de gouvernement",
      "Accord entre la France et un État étranger",
      "Coalition de partis pour former une majorité",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Où se situe le siège de la présidence de la République ?",
    reponse:  "Le Président de la République réside et travaille au Palais de l'Élysée, situé dans le 8e arrondissement de Paris, rue du Faubourg-Saint-Honoré.",
    choix: [
      "Au Palais de l'Élysée, à Paris",
      "À l'Hôtel Matignon, à Paris",
      "Au Palais Bourbon, à Paris",
      "Au Palais du Luxembourg, à Paris",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Où se situent les bureaux du Premier ministre ?",
    reponse:  "Le Premier ministre réside et travaille à l'Hôtel Matignon, situé dans le 7e arrondissement de Paris. C'est le siège officiel du gouvernement français.",
    choix: [
      "À l'Hôtel Matignon, à Paris",
      "Au Palais de l'Élysée, à Paris",
      "Au Palais Bourbon, à Paris",
      "Au Château de Vincennes",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Comment sont élus les députés à l'Assemblée nationale ?",
    reponse:  "Les 577 députés sont élus au suffrage universel direct, au scrutin uninominal majoritaire à deux tours, pour un mandat de 5 ans. L'Assemblée nationale siège au Palais Bourbon.",
    choix: [
      "Suffrage universel direct, scrutin majoritaire à deux tours, 5 ans",
      "Suffrage universel indirect via les grands électeurs, 6 ans",
      "Désignation par le Président de la République",
      "Suffrage universel direct, un seul tour, 4 ans",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quelle est la différence entre un député et un sénateur ?",
    reponse:  "Le député siège à l'Assemblée nationale (élu au suffrage direct, 5 ans) et représente les citoyens. Le sénateur siège au Sénat (élu au suffrage indirect, 6 ans) et défend en plus les collectivités territoriales (communes, départements, régions).",
    choix: [
      "Le sénateur défend aussi les collectivités territoriales, élu indirectement",
      "Le sénateur est élu directement par les citoyens",
      "Le député a un mandat de 6 ans, le sénateur de 5 ans",
      "Il n'y a aucune différence de rôle entre les deux",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qui assure l'intérim du Président de la République en cas de décès ?",
    reponse:  "Selon la Constitution, c'est le Président du Sénat qui assure l'intérim de la présidence de la République en cas de décès ou d'empêchement définitif du Président.",
    choix: [
      "Le Président du Sénat",
      "Le Premier ministre",
      "Le Président de l'Assemblée nationale",
      "Le ministre de l'Intérieur",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quels sont les trois types de collectivités territoriales en France ?",
    reponse:  "La France compte trois types de collectivités territoriales : les communes (environ 35 000), les départements (101 au total dont 96 en métropole) et les régions (13 en métropole + 5 en outre-mer).",
    choix: [
      "Les communes, les départements et les régions",
      "Les cantons, les arrondissements et les régions",
      "Les communes, les préfectures et les régions",
      "Les municipalités, les provinces et les territoires",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Comment est élu le Président de la République en France ?",
    reponse:  "Le Président est élu au suffrage universel direct, au scrutin majoritaire à deux tours, pour un mandat de 5 ans (quinquennat). Ce mode d'élection, instauré en 1962, lui confère une légitimité populaire directe.",
    choix: [
      "Suffrage universel direct, deux tours, mandat de 5 ans",
      "Suffrage indirect par les parlementaires, 7 ans",
      "Désignation par le Parlement réuni en Congrès",
      "Suffrage universel direct, un seul tour, 5 ans",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Où siège l'Assemblée nationale ?",
    reponse:  "L'Assemblée nationale siège au Palais Bourbon, sur le quai d'Orsay dans le 7e arrondissement de Paris. C'est là que se réunissent les 577 députés élus au suffrage universel direct.",
    choix: [
      "Au Palais Bourbon, quai d'Orsay, Paris",
      "Au Palais du Luxembourg, Paris",
      "À l'Élysée, rue du Faubourg-Saint-Honoré",
      "Au Palais-Royal, Paris",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Quel est le rôle exact du Parlement français ?",
    reponse:  "Le Parlement français vote les lois et contrôle l'action du gouvernement. Il est composé de deux chambres : l'Assemblée nationale (chambre basse, 577 députés) et le Sénat (chambre haute, 348 sénateurs).",
    choix: [
      "Voter les lois et contrôler le gouvernement",
      "Appliquer les lois et diriger l'administration",
      "Juger les affaires civiles et pénales",
      "Élire le Président de la République",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qui nomme le Premier ministre en France ?",
    reponse:  "Le Premier ministre est nommé par le Président de la République. Il doit toutefois disposer de la confiance de l'Assemblée nationale pour gouverner. C'est lui qui nomme ensuite les ministres et secrétaires d'État.",
    choix: [
      "Le Président de la République",
      "L'Assemblée nationale par un vote",
      "Le Sénat par scrutin secret",
      "Le Conseil constitutionnel",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le quinquennat ?",
    reponse:  "Le quinquennat est la durée du mandat présidentiel en France : 5 ans. Il remplace le septennat (7 ans) depuis la réforme constitutionnelle approuvée par référendum en septembre 2000, sous la présidence de Jacques Chirac.",
    choix: [
      "Durée de 5 ans du mandat présidentiel, depuis 2000",
      "Durée de 7 ans du mandat présidentiel",
      "Durée de 5 ans du mandat des sénateurs",
      "Durée de 4 ans du mandat des députés",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le suffrage universel indirect ?",
    reponse:  "Le suffrage universel indirect est un mode d'élection où les citoyens ne votent pas directement pour les candidats mais choisissent des représentants (grands électeurs) qui éliront à leur tour les élus. C'est ainsi qu'est élu le Sénat en France.",
    choix: [
      "Élection via des représentants intermédiaires (grands électeurs)",
      "Vote réservé aux citoyens ayant plus de 21 ans",
      "Élection à bulletin secret uniquement",
      "Vote par correspondance ou procuration uniquement",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce qu'une motion de censure ?",
    reponse:  "La motion de censure est une procédure parlementaire par laquelle l'Assemblée nationale peut mettre en cause et renverser le gouvernement. Si elle est adoptée à la majorité absolue des députés, le Premier ministre doit remettre la démission de son gouvernement.",
    choix: [
      "Procédure permettant à l'Assemblée nationale de renverser le gouvernement",
      "Décision du Président de dissoudre l'Assemblée",
      "Vote du Sénat pour bloquer une loi",
      "Mesure du Conseil constitutionnel contre une loi",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la démocratie selon la Constitution française ?",
    reponse:  "Selon l'article 2 de la Constitution, la France est une « République indivisible, laïque, démocratique et sociale ». La démocratie y est définie comme le gouvernement du peuple, par le peuple et pour le peuple : le peuple est souverain.",
    choix: [
      "Gouvernement du peuple, par le peuple et pour le peuple",
      "Gouvernement des experts désignés par le Président",
      "Régime où le Parlement détient tous les pouvoirs",
      "Système où le peuple vote uniquement lors des crises",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le Conseil d'État ?",
    reponse:  "Le Conseil d'État est la plus haute juridiction administrative française. Il conseille le gouvernement sur les projets de loi et de décret, et juge en dernier ressort les litiges entre les citoyens et l'administration (État, collectivités, services publics).",
    choix: [
      "Plus haute juridiction administrative, conseille aussi le gouvernement",
      "Chambre haute du Parlement française",
      "Organe chargé de contrôler les finances publiques",
      "Tribunal compétent pour les crimes les plus graves",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la Cour de cassation ?",
    reponse:  "La Cour de cassation est la plus haute juridiction de l'ordre judiciaire français. Elle ne rejuge pas les affaires sur le fond mais vérifie que la loi a été correctement appliquée par les tribunaux inférieurs. Elle garantit l'unité de l'interprétation du droit.",
    choix: [
      "Plus haute juridiction judiciaire, vérifie la bonne application de la loi",
      "Tribunal chargé de juger les crimes de guerre",
      "Juridiction contrôlant les comptes de l'État",
      "La chambre haute du Parlement en matière pénale",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que le référendum en France ?",
    reponse:  "Le référendum est un vote direct par lequel les citoyens se prononcent par oui ou non sur une question posée par le Président de la République (article 11) ou pour réviser la Constitution (article 89). C'est une forme de démocratie directe.",
    choix: [
      "Vote direct des citoyens sur une question posée par le Président",
      "Élection des députés au suffrage universel",
      "Consultation des maires sur un projet de loi",
      "Vote du Sénat pour ratifier un traité international",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la présomption d'innocence ?",
    reponse:  "La présomption d'innocence est un principe fondamental du droit français : toute personne accusée est considérée innocente jusqu'à ce que sa culpabilité soit établie par un tribunal. C'est à l'accusation de prouver la faute, non à l'accusé de prouver son innocence.",
    choix: [
      "Toute personne est innocente jusqu'à preuve du contraire par un tribunal",
      "Droit de refuser de témoigner contre soi-même",
      "Obligation pour l'accusé de prouver qu'il n'a pas commis le crime",
      "Principe permettant de libérer tout accusé après 48 heures",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la Cour des comptes ?",
    reponse:  "La Cour des comptes est une juridiction financière qui contrôle l'utilisation des fonds publics par l'État, les collectivités et les organismes publics. Elle publie chaque année un rapport sur la gestion des finances publiques et contribue à la bonne gouvernance.",
    choix: [
      "Juridiction contrôlant l'utilisation des fonds publics",
      "Ministère chargé de percevoir les impôts",
      "Banque centrale gérant les finances de l'État",
      "Commission parlementaire chargée du budget",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce qu'un préfet en France ?",
    reponse:  "Le préfet est le représentant de l'État dans un département ou une région. Nommé en Conseil des ministres, il est chargé d'appliquer les décisions du gouvernement, de maintenir l'ordre public et de coordonner les services de l'État sur le territoire.",
    choix: [
      "Représentant de l'État dans un département, nommé en Conseil des ministres",
      "Élu local chargé de gérer le budget départemental",
      "Magistrat présidant le tribunal de grande instance",
      "Directeur de l'administration fiscale locale",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que les élections municipales ?",
    reponse:  "Les élections municipales permettent d'élire les conseillers municipaux de chaque commune, qui élisent ensuite le maire et ses adjoints. Elles ont lieu tous les 6 ans. Les ressortissants européens résidant en France peuvent y participer.",
    choix: [
      "Élection des conseillers municipaux et indirectement du maire, tous les 6 ans",
      "Élection directe du maire au suffrage universel",
      "Vote pour désigner les conseillers régionaux",
      "Élection organisée tous les 5 ans pour renouveler les communes",
    ],
    correct: 0,
  },

  {
    theme:    "⚖️ Institutions",
    question: "Qu'est-ce que la Question prioritaire de constitutionnalité (QPC) ?",
    reponse:  "La QPC, introduite en 2010, permet à tout justiciable de contester la constitutionnalité d'une loi lors d'un procès. Si le Conseil constitutionnel juge la loi contraire aux droits fondamentaux, il peut l'abroger. C'est une avancée majeure pour les droits des citoyens.",
    choix: [
      "Droit pour tout citoyen de contester la constitutionnalité d'une loi",
      "Procédure permettant au Parlement d'annuler une décision présidentielle",
      "Question posée par référendum sur un sujet constitutionnel",
      "Droit de pétition adressé au Conseil d'État",
    ],
    correct: 0,
  },

  // ← Ajoute ici de nouvelles questions d'Institutions ↑


  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 3 — 🎨 Culture & Symboles                        │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quels sont les symboles officiels de la République ?",
    reponse:  "Le drapeau tricolore bleu-blanc-rouge, La Marseillaise (hymne national), la devise « Liberté, Égalité, Fraternité », Marianne (allégorie) et le 14 juillet (fête nationale).",
    choix: [
      "Drapeau, Marseillaise, Marianne, devise",
      "Coq gaulois, Napoléon, Arc de Triomphe",
      "Tour Eiffel, baguette, béret",
      "Fleur de lys, La Royale, Soleil roi",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quelle est la fête nationale française et sa date ?",
    reponse:  "Le 14 juillet, commémorant la prise de la Bastille (1789) et la Fête de la Fédération (1790). Défilé militaire sur les Champs-Élysées et feux d'artifice partout en France.",
    choix: [
      "14 juillet",
      "11 novembre",
      "8 mai",
      "1er mai",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Que représente Marianne ?",
    reponse:  "Marianne est l'allégorie officielle de la République française. Coiffée d'un bonnet phrygien, elle symbolise la liberté et la raison. Son buste orne toutes les mairies.",
    choix: [
      "Allégorie de la République française",
      "Ancienne reine de France",
      "Déesse romaine de la justice",
      "Emblème de l'armée",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui a composé La Marseillaise et quand ?",
    reponse:  "Composée en 1792 par Rouget de Lisle comme « Chant de guerre pour l'armée du Rhin », popularisée par les soldats de Marseille, elle devint hymne national en 1795.",
    choix: [
      "Rouget de Lisle en 1792",
      "Napoléon Bonaparte en 1804",
      "La Convention en 1793",
      "Victor Hugo en 1848",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quelle est la signification du drapeau tricolore ?",
    reponse:  "Né de la Révolution de 1789 : le bleu et rouge sont les couleurs de Paris, le blanc symbolisait le roi. Ensemble, ils représentent l'union de la Nation et les valeurs républicaines.",
    choix: [
      "Union de Paris et du roi, valeurs républicaines",
      "Trois religions principales de France",
      "Couleurs de l'armée napoléonienne",
      "Les régions fondatrices de la France",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que l'Académie française ?",
    reponse:  "Fondée en 1635 par Richelieu, l'Académie française défend et enrichit la langue française. Ses 40 membres, les « Immortels », publient le Dictionnaire de l'Académie française.",
    choix: [
      "Institution défendant la langue française",
      "Plus haute juridiction administrative",
      "Plus ancienne université de France",
      "Musée des arts et traditions populaires",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le Panthéon à Paris ?",
    reponse:  "Le Panthéon (5e arrondissement) est le mausolée des grands personnages qui ont honoré la France : Victor Hugo, Voltaire, Marie Curie, Jean Moulin, Simone Veil.",
    choix: [
      "Mausolée des grands personnages français",
      "Plus grande cathédrale de Paris",
      "Palais présidentiel",
      "Siège du Sénat",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le mouvement des Lumières ?",
    reponse:  "Courant philosophique du XVIIIe siècle (Voltaire, Rousseau, Montesquieu) prônant la raison, la liberté, la tolérance. Il a directement inspiré la Révolution française et les démocraties modernes.",
    choix: [
      "Courant philosophique du XVIIIe siècle",
      "Mouvement artistique du XIXe siècle",
      "La Renaissance italienne en France",
      "La révolution industrielle",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que la gastronomie française représente ?",
    reponse:  "Inscrite au patrimoine immatériel de l'UNESCO depuis 2010, elle incarne un art de vivre : plaisir du repas partagé, qualité des produits, savoir-faire ancestral transmis de génération en génération.",
    choix: [
      "Patrimoine UNESCO, art de vivre",
      "Industrie purement économique",
      "Obligation légale pour les restaurants",
      "Phénomène uniquement parisien",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que la Francophonie ?",
    reponse:  "Ensemble des peuples et États partageant le français. L'OIF (Organisation Internationale de la Francophonie) compte 88 membres. Le français est parlé par environ 300 millions de personnes.",
    choix: [
      "États et peuples partageant le français",
      "Uniquement les anciennes colonies françaises",
      "L'Académie française et ses membres",
      "Pays ayant le français comme seule langue officielle",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui a écrit 'Les Trois Mousquetaires' ?",
    reponse:  "Les Trois Mousquetaires (1844) ont été écrits par Alexandre Dumas, en collaboration avec Auguste Maquet. C'est l'un des romans d'aventures les plus célèbres de la littérature française.",
    choix: [
      "Alexandre Dumas (et Auguste Maquet)",
      "Victor Hugo",
      "Molière",
      "Honoré de Balzac",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Voltaire ?",
    reponse:  "Voltaire (1694-1778), de son vrai nom François-Marie Arouet, est un écrivain et philosophe français du XVIIIe siècle. Figure majeure des Lumières, il combattit l'intolérance religieuse et l'arbitraire politique.",
    choix: [
      "Philosophe des Lumières, défenseur de la tolérance",
      "Révolutionnaire de 1789, auteur de la Marseillaise",
      "Maréchal de Napoléon Bonaparte",
      "Fondateur de l'Académie française",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quelle est la devise de l'Union européenne ?",
    reponse:  "La devise de l'Union européenne est « Unie dans la diversité », adoptée en 2000. Elle traduit la volonté des Européens de coopérer ensemble tout en préservant leurs identités culturelles et linguistiques.",
    choix: [
      "Unie dans la diversité",
      "Liberté, Égalité, Fraternité",
      "Paix, Prospérité, Démocratie",
      "L'Ode à la joie",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quel est l'hymne de l'Union européenne ?",
    reponse:  "L'hymne européen est tiré de l'Ode à la joie, dernier mouvement de la 9e Symphonie de Ludwig van Beethoven (1823). Adopté en 1985, il symbolise les valeurs communes d'unité et de liberté.",
    choix: [
      "L'Ode à la joie de Beethoven",
      "La Marseillaise",
      "God Save the King",
      "L'Hymne à l'Europe de Mozart",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Que représente le 9 mai en Europe ?",
    reponse:  "Le 9 mai est la Journée de l'Europe, commémorant la déclaration Schuman du 9 mai 1950 qui posa les bases de la construction européenne. Elle symbolise la paix et la réconciliation entre les peuples européens.",
    choix: [
      "La Journée de l'Europe, en référence à la déclaration Schuman de 1950",
      "La date de création de l'euro",
      "L'anniversaire du traité de Maastricht",
      "La fin de la Seconde Guerre mondiale en Europe",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Combien d'étoiles comporte le drapeau européen et que symbolisent-elles ?",
    reponse:  "Le drapeau européen comporte 12 étoiles dorées disposées en cercle sur fond bleu. Ce nombre est fixe et symbolise les idéaux d'unité, de solidarité et d'harmonie entre les peuples d'Europe.",
    choix: [
      "12 étoiles, symboles d'unité et de solidarité",
      "27 étoiles représentant chaque pays membre",
      "6 étoiles pour les pays fondateurs",
      "15 étoiles pour les membres avant 2004",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui a été à l'origine du château de Versailles ?",
    reponse:  "Le château de Versailles a été voulu et construit par Louis XIV à partir de 1661. Symbole de la monarchie absolue et de la puissance royale, il devint la résidence principale du roi et de la cour.",
    choix: [
      "Louis XIV, le Roi-Soleil",
      "Napoléon Bonaparte",
      "François Ier",
      "Louis XVI",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Quel est le point culminant de France et quelle est son altitude ?",
    reponse:  "Le point culminant de France est le Mont-Blanc, avec une altitude de 4 808 mètres. Situé à la frontière entre la France et l'Italie, il est aussi le plus haut sommet d'Europe occidentale.",
    choix: [
      "Le Mont-Blanc, 4 808 m, à la frontière franco-italienne",
      "Le Puy de Dôme, 1 465 m, en Auvergne",
      "Le mont Ventoux, 1 910 m, en Provence",
      "Le pic du Midi, 2 877 m, dans les Pyrénées",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "À quelle occasion la Marseillaise a-t-elle été composée ?",
    reponse:  "La Marseillaise fut composée dans la nuit du 25 au 26 avril 1792 par Rouget de Lisle, à Strasbourg, après la déclaration de guerre contre l'Autriche. Intitulée « Chant de guerre pour l'armée du Rhin », elle fut popularisée par les volontaires de Marseille.",
    choix: [
      "En 1792 à Strasbourg, après la déclaration de guerre contre l'Autriche",
      "Lors de la prise de la Bastille le 14 juillet 1789",
      "Pour le sacre de Napoléon en 1804",
      "Lors de la Fête de la Fédération en 1790",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Citez trois peintres français célèbres.",
    reponse:  "La peinture française compte de grands maîtres : Paul Cézanne (post-impressionnisme), Eugène Delacroix (romantisme, auteur de La Liberté guidant le peuple) et Claude Monet (impressionnisme, célèbre pour ses Nymphéas).",
    choix: [
      "Cézanne, Delacroix, Monet",
      "Picasso, Dali, Goya",
      "Léonard de Vinci, Michel-Ange, Raphaël",
      "Rembrandt, Vermeer, Rubens",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Molière ?",
    reponse:  "Molière (1622-1673), de son vrai nom Jean-Baptiste Poquelin, est le plus grand auteur de comédies de la littérature française. Ses pièces (Le Malade imaginaire, Le Misanthrope, L'Avare) sont jouées dans le monde entier encore aujourd'hui.",
    choix: [
      "Plus grand auteur de comédies de la littérature française",
      "Philosophe des Lumières au XVIIIe siècle",
      "Auteur romantique du XIXe siècle",
      "Poète de la Résistance française",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le Tour de France ?",
    reponse:  "Le Tour de France est la plus célèbre course cycliste au monde, créée en 1903. Elle se déroule chaque été sur environ 3 500 km à travers la France en 21 étapes. C'est l'un des trois grands tours avec le Giro et la Vuelta.",
    choix: [
      "La plus célèbre course cycliste au monde, créée en 1903",
      "Un marathon national organisé chaque année à Paris",
      "Une compétition d'athlétisme autour de la France",
      "Un rallye automobile créé par Napoléon",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que Roland-Garros ?",
    reponse:  "Roland-Garros est le tournoi de tennis du Grand Chelem se tenant à Paris sur terre battue, généralement fin mai-début juin. C'est l'un des quatre tournois majeurs mondiaux avec Wimbledon, l'US Open et l'Open d'Australie.",
    choix: [
      "Tournoi de tennis parisien du Grand Chelem, sur terre battue",
      "Compétition de rugby organisée à Paris",
      "Circuit automobile en région parisienne",
      "Stade olympique d'athlétisme à Paris",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Simone Veil ?",
    reponse:  "Simone Veil (1927-2017) est une femme politique française, survivante de la Shoah. Ministre de la Santé, elle porta la loi légalisant l'IVG en 1975. Elle fut également présidente du Parlement européen et entra au Panthéon en 2018.",
    choix: [
      "Ministre qui porta la loi sur l'IVG en 1975, entrée au Panthéon",
      "Première femme Présidente de la République française",
      "Fondatrice de la Croix-Rouge française",
      "Première femme élue à l'Académie française",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Citez trois monuments historiques français célèbres.",
    reponse:  "La France possède un patrimoine monumental exceptionnel : la tour Eiffel (Paris, 1889), le château de Versailles (XVIIe siècle), le Louvre (ancien palais royal devenu le plus grand musée du monde) et l'Arc de triomphe (commandé par Napoléon en 1806).",
    choix: [
      "Tour Eiffel, château de Versailles, le Louvre",
      "Big Ben, Westminster, Buckingham Palace",
      "Colisée, Vatican, fontaine de Trevi",
      "Sagrada Familia, Alhambra, Prado",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le bonnet phrygien ?",
    reponse:  "Le bonnet phrygien est un symbole révolutionnaire adopté en 1789. Rouge, il représente la liberté et l'affranchissement. Porté par Marianne, allégorie de la République française, on le retrouve sur les timbres, les pièces de monnaie et les blasons officiels.",
    choix: [
      "Symbole révolutionnaire de liberté porté par Marianne",
      "Coiffe traditionnelle des rois de France",
      "Emblème militaire napoléonien",
      "Chapeau porté par les membres de l'Académie française",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Albert Camus et pourquoi est-il célèbre ?",
    reponse:  "Albert Camus (1913-1960) est un écrivain et philosophe français né en Algérie. Prix Nobel de littérature en 1957, il est l'auteur de L'Étranger, La Peste et Le Mythe de Sisyphe. Il est associé au courant de l'absurde et a été une voix morale majeure du XXe siècle.",
    choix: [
      "Prix Nobel de littérature 1957, auteur de L'Étranger et La Peste",
      "Philosophe des Lumières du XVIIIe siècle",
      "Auteur romantique du XIXe siècle, contemporain de Hugo",
      "Dramaturge classique du XVIIe siècle",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le musée du Louvre ?",
    reponse:  "Le Louvre, à Paris, est le plus grand musée du monde et le plus visité avec près de 10 millions de visiteurs par an. Ancien palais royal, il abrite des collections exceptionnelles dont la Joconde de Léonard de Vinci et la Vénus de Milo.",
    choix: [
      "Plus grand et plus visité musée du monde, ancien palais royal à Paris",
      "Musée dédié exclusivement à l'art français du XIXe siècle",
      "Musée national des sciences et techniques à Paris",
      "Galerie d'art moderne construite sous Georges Pompidou",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que le mouvement impressionniste français ?",
    reponse:  "L'impressionnisme est un mouvement pictural né en France vers 1860, avec des artistes comme Claude Monet, Pierre-Auguste Renoir et Edgar Degas. Il se caractérise par la représentation de la lumière et des instants fugaces, en rupture avec la peinture académique.",
    choix: [
      "Mouvement pictural français du XIXe siècle, Monet, Renoir, Degas",
      "Courant littéraire du XVIIIe siècle lié aux Lumières",
      "Style architectural développé sous Napoléon III",
      "Mouvement artistique d'avant-garde du XXe siècle",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Joséphine Baker ?",
    reponse:  "Joséphine Baker (1906-1975), artiste américaine naturalisée française, fut chanteuse, danseuse et résistante durant la Seconde Guerre mondiale. Elle lutta toute sa vie contre le racisme et l'injustice. En 2021, elle est entrée au Panthéon, première femme noire à y être honorée.",
    choix: [
      "Artiste naturalisée française, résistante, entrée au Panthéon en 2021",
      "Première femme élue à l'Assemblée nationale française",
      "Écrivaine française du mouvement surréaliste",
      "Chanteuse française créatrice de la chanson française moderne",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que les 24 Heures du Mans ?",
    reponse:  "Les 24 Heures du Mans est la plus célèbre course automobile d'endurance du monde, organisée chaque année depuis 1923 dans la ville du Mans (Sarthe). Les équipes concourent pendant 24 heures consécutives, couvrant plusieurs milliers de kilomètres.",
    choix: [
      "Plus célèbre course automobile d'endurance, organisée depuis 1923",
      "Course cycliste annuelle autour du Mans",
      "Compétition nautique organisée en Normandie",
      "Grand Prix de Formule 1 organisé en France",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que la gastronomie régionale française ?",
    reponse:  "Chaque région française possède ses spécialités : la bouillabaisse à Marseille, la choucroute en Alsace, le cassoulet à Toulouse, la fondue savoyarde en Savoie, les crêpes en Bretagne, le foie gras en Périgord, le camembert en Normandie.",
    choix: [
      "Spécialités régionales : bouillabaisse, choucroute, cassoulet, crêpes…",
      "Une cuisine nationale identique dans toutes les régions",
      "Uniquement les plats de Paris reconnus internationalement",
      "Les recettes codifiées par l'Académie culinaire française",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qui était Zinedine Zidane ?",
    reponse:  "Zinedine Zidane, né en 1972 à Marseille de parents algériens, est considéré comme l'un des meilleurs footballeurs de l'histoire. Champion du monde 1998 et champion d'Europe 2000 avec la France, il a été trois fois Ballon d'Or et est devenu un symbole de l'intégration et du talent français.",
    choix: [
      "Champion du monde 1998, l'un des meilleurs footballeurs de l'histoire",
      "Champion de tennis français multiple vainqueur à Roland-Garros",
      "Athlète français champion olympique au sprint",
      "Judoka français quintuple champion du monde",
    ],
    correct: 0,
  },

  {
    theme:    "🎨 Culture & Symboles",
    question: "Qu'est-ce que la Légion d'honneur ?",
    reponse:  "La Légion d'honneur est la plus haute distinction française, créée par Napoléon Bonaparte en 1802. Elle récompense des mérites éminents rendus à la nation, civils ou militaires. Elle est remise par le Président de la République et comporte cinq grades.",
    choix: [
      "Plus haute distinction française, créée par Napoléon en 1802",
      "Médaille militaire réservée aux soldats de la Légion étrangère",
      "Prix littéraire décerné chaque année par l'Académie française",
      "Décoration européenne pour services rendus à l'Union",
    ],
    correct: 0,
  },

  // ← Ajoute ici de nouvelles questions de Culture & Symboles ↑


  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 4 — 🤝 Droits & Citoyenneté                     │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Quels sont les droits fondamentaux garantis en France ?",
    reponse:  "Liberté d'expression, de conscience et de religion, droit à l'éducation, à la santé, au travail, droit de vote, procès équitable, protection de la vie privée. Garantis par la Constitution et la CEDH.",
    choix: [
      "Liberté, vote, éducation, santé, procès équitable",
      "Uniquement les libertés civiles",
      "Seulement droits des citoyens de naissance",
      "Droits réservés aux résidents de 10 ans",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Quelles sont les obligations du citoyen français ?",
    reponse:  "Respecter les lois et la Constitution, payer ses impôts, participer à la défense nationale (JDC), respecter les libertés d'autrui, et s'impliquer dans la vie démocratique.",
    choix: [
      "Respecter les lois, impôts, défense nationale",
      "Voter uniquement aux présidentielles",
      "Payer les impôts uniquement",
      "Adhérer à un parti politique",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'apporte concrètement la nationalité française ?",
    reponse:  "Droit de vote à toutes les élections, accès à la fonction publique réservée aux nationaux, passeport français, protection consulaire à l'étranger, libre circulation dans toute l'UE.",
    choix: [
      "Vote, fonction publique, passeport, protection consulaire",
      "Uniquement le droit de travailler en France",
      "Seulement la libre circulation",
      "Les mêmes droits que le titre de séjour",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Que signifie le principe d'égalité devant la loi ?",
    reponse:  "L'article 1er de la Constitution garantit que tous sont égaux devant la loi, sans distinction d'origine, race, religion ou sexe. Cela implique l'égal accès aux droits et l'interdiction des discriminations.",
    choix: [
      "Tous égaux devant la loi, sans discrimination",
      "Égalité uniquement des revenus",
      "Égalité limitée aux citoyens de naissance",
      "L'égalité n'existe que dans la sphère publique",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le droit d'asile en France ?",
    reponse:  "La France accorde l'asile aux personnes persécutées pour opinions, nationalité, religion, race ou appartenance à un groupe social. Garanti par la Constitution (préambule 1946) et la Convention de Genève de 1951.",
    choix: [
      "Protection des personnes persécutées",
      "Droit réservé aux ressortissants européens",
      "Une aide financière temporaire",
      "Le droit d'entrer librement en France",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la liberté de la presse ?",
    reponse:  "Garantie par la loi du 29 juillet 1881, elle permet d'informer et de critiquer sans censure préalable, dans le respect de la loi (diffamation, vie privée). La France est reconnue pour la pluralité de ses médias.",
    choix: [
      "Droit d'informer sans censure, loi de 1881",
      "Privilège accordé aux seuls médias publics",
      "Liberté sans aucune limite légale",
      "Un droit récent issu de 1958",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le Code civil français ?",
    reponse:  "Élaboré sous Napoléon (1804), le Code civil est le socle du droit privé. Il régit les relations entre personnes : mariage, famille, propriété, contrats, successions. Il a influencé de nombreux droits étrangers.",
    choix: [
      "Socle du droit privé depuis 1804",
      "Recueil de toutes les lois françaises",
      "Le règlement de l'Assemblée nationale",
      "La Constitution de la Ière République",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la laïcité à l'école publique ?",
    reponse:  "La laïcité garantit la neutralité religieuse de l'école publique et la liberté de conscience des élèves. Depuis la loi de 2004, les signes religieux ostensibles sont interdits pour les élèves.",
    choix: [
      "Neutralité religieuse et liberté de conscience",
      "Interdiction de tout enseignement sur les religions",
      "Obligation pour les élèves d'être athées",
      "Enseignement religieux possible sur demande",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "La liberté d'expression est-elle absolue en France ?",
    reponse:  "Non. La liberté d'expression est garantie mais elle n'est pas absolue : les libertés des uns s'arrêtent là où commencent celles des autres. Elle est limitée par la loi (diffamation, incitation à la haine, injure).",
    choix: [
      "Non, elle est limitée par la loi (diffamation, incitation à la haine)",
      "Oui, c'est un droit absolu et sans limite",
      "Non, elle est réservée aux médias agréés",
      "Oui, sauf dans les services publics",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Depuis quand les femmes ont-elles le droit de vote en France ?",
    reponse:  "Les femmes ont obtenu le droit de vote en France le 21 avril 1944, sous le gouvernement provisoire du général de Gaulle. Elles l'ont exercé pour la première fois aux élections municipales d'avril 1945.",
    choix: [
      "Depuis le 21 avril 1944",
      "Depuis la Révolution française de 1789",
      "Depuis 1919 après la Première Guerre mondiale",
      "Depuis la Constitution de 1958",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "La discrimination est-elle légale en France ?",
    reponse:  "Non, la discrimination est illégale en France. C'est un délit passible de lourdes sanctions pénales. Traiter différemment une personne en raison de son origine, sexe, religion ou appartenance ethnique est interdit par la loi.",
    choix: [
      "Non, c'est un délit passible de sanctions pénales",
      "Oui, dans le domaine privé uniquement",
      "Oui, si elle est justifiée par des raisons professionnelles",
      "Non, mais uniquement dans le service public",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qui peut accéder aux emplois de la fonction publique en France ?",
    reponse:  "En France, les emplois de la fonction publique sont en principe réservés aux citoyens français (nationalité française requise pour de nombreux postes). Les ressortissants de l'UE peuvent accéder à certains emplois publics.",
    choix: [
      "Les citoyens français (et partiellement les ressortissants UE)",
      "Tous les résidents légaux en France",
      "Uniquement les personnes nées en France",
      "Tous les détenteurs d'un titre de séjour",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Que sont les formes de démocratie en France ?",
    reponse:  "On distingue trois formes de démocratie : la démocratie directe (les citoyens décident eux-mêmes, ex. référendum), la démocratie représentative (via des élus) et la démocratie participative (implication des citoyens dans les décisions locales).",
    choix: [
      "Démocratie directe, représentative et participative",
      "Démocratie présidentielle, parlementaire et fédérale",
      "Démocratie libérale, socialiste et écologique",
      "Démocratie nationale, régionale et européenne",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Comment les citoyens peuvent-ils exprimer leur désaccord avec le gouvernement ?",
    reponse:  "Les citoyens peuvent exprimer leur désaccord légalement en manifestant, en faisant grève, en votant lors des élections, en écrivant à leurs représentants ou en créant des associations. Ces droits sont garantis par la Constitution.",
    choix: [
      "En manifestant, faisant grève ou votant contre aux élections",
      "Uniquement lors des élections présidentielles",
      "Par pétition adressée au Président uniquement",
      "Seulement via les médias officiels",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la loi de 1905 sur la séparation de l'Église et de l'État ?",
    reponse:  "La loi du 9 décembre 1905 établit la séparation des Églises et de l'État en France. L'État ne reconnaît, ne salarie ni ne subventionne aucun culte. Elle est le fondement juridique de la laïcité française.",
    choix: [
      "Loi fondatrice de la laïcité, séparant Église et État",
      "Loi interdisant toute pratique religieuse en public",
      "Loi créant le ministère des Cultes",
      "Loi obligeant tous les Français à se déclarer athées",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Quels droits confère la nationalité française par rapport au titre de séjour ?",
    reponse:  "La nationalité française donne accès à des droits supplémentaires : voter à toutes les élections (y compris présidentielle), accéder aux emplois de la fonction publique réservés aux nationaux, obtenir un passeport français et bénéficier de la protection consulaire à l'étranger.",
    choix: [
      "Vote à toutes élections, fonction publique, passeport, protection consulaire",
      "Les mêmes droits que le titre de séjour permanent",
      "Uniquement le droit de travailler sans restriction",
      "Seulement la libre circulation dans l'espace Schengen",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Est-il obligatoire de payer ses impôts en France ?",
    reponse:  "Oui, payer ses impôts est une obligation légale pour tout résident en France. C'est un devoir civique fondamental : les impôts financent les services publics (éducation, santé, sécurité, infrastructures) dont bénéficient tous les habitants.",
    choix: [
      "Oui, c'est une obligation légale et un devoir civique",
      "Non, c'est facultatif pour les personnes à faibles revenus",
      "Oui, mais seulement pour les citoyens français",
      "Non, uniquement les entreprises paient des impôts obligatoires",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la parité hommes-femmes en France ?",
    reponse:  "La parité est le principe d'égalité entre femmes et hommes, garanti par l'article 1er de la Constitution. En politique, la loi de 2000 impose une représentation équilibrée sur les listes électorales. Des progrès restent à faire, notamment dans l'égalité salariale.",
    choix: [
      "Principe constitutionnel d'égalité entre femmes et hommes",
      "Quota imposant 60 % de femmes dans les entreprises",
      "Loi réservant la moitié des emplois publics aux femmes",
      "Mesure facultative laissée à l'appréciation des employeurs",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le droit de manifester en France ?",
    reponse:  "Le droit de manifester est une liberté fondamentale garantie par la Constitution. Il permet aux citoyens d'exprimer collectivement leurs opinions dans l'espace public. Les manifestations doivent être déclarées en préfecture et rester pacifiques.",
    choix: [
      "Liberté fondamentale de s'exprimer collectivement en public",
      "Droit réservé aux syndicats reconnus par l'État",
      "Autorisation exceptionnelle délivrée par le ministre",
      "Droit applicable uniquement en dehors des périodes électorales",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Depuis quand les citoyens français sont-ils aussi citoyens européens ?",
    reponse:  "Les citoyens français sont citoyens européens depuis le traité de Maastricht, entré en vigueur le 1er novembre 1993. La citoyenneté européenne s'ajoute à la citoyenneté nationale et offre notamment le droit de circuler et de résider librement dans l'UE.",
    choix: [
      "Depuis le traité de Maastricht, entré en vigueur en 1993",
      "Depuis la création de l'euro en 2002",
      "Depuis le traité de Rome de 1957",
      "Depuis l'entrée en vigueur du traité de Lisbonne en 2009",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Que prévoit la Constitution française sur la religion ?",
    reponse:  "L'article 1er de la Constitution dispose que la France est une République laïque. L'État ne reconnaît aucune religion officielle, garantit la liberté de conscience et de culte, et assure l'égalité de tous devant la loi quelle que soit leur religion ou conviction.",
    choix: [
      "La France est laïque : aucune religion officielle, liberté de conscience garantie",
      "La France est officiellement catholique depuis Clovis",
      "L'État finance équitablement tous les cultes reconnus",
      "La religion doit rester strictement privée et n'est jamais mentionnable",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la liberté de conscience en France ?",
    reponse:  "La liberté de conscience est le droit fondamental de croire ou de ne pas croire, d'avoir ses propres opinions philosophiques, morales ou religieuses sans contrainte. Garantie par la Constitution et la loi de 1905, elle est au cœur de la laïcité française.",
    choix: [
      "Droit de croire ou ne pas croire, sans contrainte de l'État",
      "Obligation de déclarer sa religion à l'administration",
      "Liberté limitée aux seules convictions religieuses",
      "Droit réservé aux citoyens français de naissance",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la liberté d'association en France ?",
    reponse:  "La liberté d'association est garantie par la loi du 1er juillet 1901. Elle permet à toute personne de créer librement une association à but non lucratif sans autorisation préalable. Les associations jouent un rôle majeur dans la vie civile et sociale française.",
    choix: [
      "Droit de créer librement une association, loi de 1901",
      "Autorisation nécessaire pour tout regroupement de plus de 5 personnes",
      "Droit réservé aux citoyens français majeurs",
      "Liberté conditionnée à l'agrément du ministère de l'Intérieur",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le principe d'égalité des salaires en France ?",
    reponse:  "Le principe « à travail égal, salaire égal » est garanti par le Code du travail français. Il interdit toute discrimination salariale fondée sur le sexe, l'origine ou la religion. En pratique, des écarts subsistent, notamment entre hommes et femmes, et font l'objet de mesures correctrices.",
    choix: [
      "À travail égal, salaire égal — toute discrimination salariale est interdite",
      "Salaire fixé uniquement par la négociation collective sans règle légale",
      "Principe s'appliquant uniquement dans la fonction publique",
      "Règle limitée aux entreprises de plus de 50 salariés",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le droit à l'éducation en France ?",
    reponse:  "Le droit à l'éducation est garanti par la Constitution et le préambule de 1946. L'instruction est obligatoire de 3 à 16 ans, gratuite dans les écoles publiques. L'État assure également l'accès à l'enseignement supérieur via des universités publiques aux frais d'inscription modiques.",
    choix: [
      "Droit constitutionnel, instruction obligatoire et gratuite de 3 à 16 ans",
      "Service payant garanti uniquement aux citoyens français",
      "Droit facultatif laissé au choix des familles",
      "Obligation scolaire de 6 à 18 ans dans les écoles privées ou publiques",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que le droit de grève en France ?",
    reponse:  "Le droit de grève est un droit constitutionnel reconnu depuis le préambule de la Constitution de 1946. Il permet aux salariés de cesser collectivement le travail pour défendre leurs intérêts professionnels. Dans certains services publics essentiels, un service minimum est obligatoire.",
    choix: [
      "Droit constitutionnel de cesser le travail collectivement pour défendre ses droits",
      "Droit réservé aux fonctionnaires de l'État",
      "Autorisation accordée uniquement par les syndicats reconnus",
      "Droit interdit dans le secteur public depuis 1958",
    ],
    correct: 0,
  },

  {
    theme:    "🤝 Droits & Citoyenneté",
    question: "Qu'est-ce que la Convention européenne des droits de l'Homme (CEDH) ?",
    reponse:  "La CEDH, signée à Rome en 1950, est un traité du Conseil de l'Europe garantissant les droits fondamentaux (vie, liberté, procès équitable, expression, vie privée…). Tout citoyen d'un pays signataire peut saisir la Cour européenne des droits de l'Homme à Strasbourg.",
    choix: [
      "Traité de 1950 garantissant les droits fondamentaux en Europe",
      "Constitution de l'Union européenne",
      "Charte des Nations Unies sur les droits de l'Homme",
      "Déclaration universelle adoptée par l'ONU en 1948",
    ],
    correct: 0,
  },


  // ← Ajoute ici de nouvelles questions de Droits & Citoyenneté ↑


  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 5 — 🌍 Géographie & Europe                       │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quelle est la capitale de la France ?",
    reponse:  "Paris, capitale depuis le Moyen Âge, est le siège des institutions (Élysée, Assemblée nationale, Sénat), premier centre économique et culturel, et ville la plus visitée au monde.",
    choix: [
      "Paris",
      "Lyon",
      "Versailles",
      "Marseille",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "En quelle année la France a-t-elle adopté l'euro ?",
    reponse:  "L'euro circula sous forme scripturale dès le 1er janvier 1999. Les pièces et billets furent introduits le 1er janvier 2002, remplaçant le franc français.",
    choix: [
      "2002",
      "1999",
      "2000",
      "2004",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Combien de pays composent l'Union européenne ?",
    reponse:  "27 États membres depuis le Brexit (sortie du Royaume-Uni, 1er janvier 2021). La France est l'un des 6 membres fondateurs avec l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg.",
    choix: [
      "27 pays",
      "28 pays",
      "25 pays",
      "30 pays",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quelle est la devise de l'Union européenne ?",
    reponse:  "« Unie dans la diversité », adoptée en 2000, traduit la volonté des Européens de coopérer tout en préservant leurs cultures et langues nationales.",
    choix: [
      "Unie dans la diversité",
      "Liberté, Égalité, Fraternité",
      "Paix, Prospérité, Démocratie",
      "Europa, Avenir, Solidarité",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quel traité a fondé l'UE sous sa forme actuelle ?",
    reponse:  "Le Traité de Maastricht (1992) créa la citoyenneté européenne, établit les bases de l'Union économique et monétaire (euro) et renforça la coopération politique entre États membres.",
    choix: [
      "Traité de Maastricht (1992)",
      "Traité de Rome (1957)",
      "Traité de Lisbonne (2007)",
      "Déclaration Schuman (1950)",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quel est le siège officiel du Parlement européen ?",
    reponse:  "Strasbourg (France) est le siège officiel pour les séances plénières. Le Parlement dispose aussi d'un lieu de travail à Bruxelles et d'un Secrétariat général à Luxembourg.",
    choix: [
      "Strasbourg",
      "Bruxelles",
      "Luxembourg",
      "Paris",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels sont les 5 DROM français ?",
    reponse:  "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte. Ces Départements et Régions d'Outre-Mer font partie intégrante de la République française et de l'Union européenne.",
    choix: [
      "Guadeloupe, Martinique, Guyane, La Réunion, Mayotte",
      "Polynésie, Nouvelle-Calédonie, Wallis-et-Futuna",
      "Saint-Martin, Saint-Barthélemy, Saint-Pierre",
      "Tahiti, Guyane, Martinique, Réunion, Nouvelle-Calédonie",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quelle est la 2e plus grande ville de France ?",
    reponse:  "Marseille (~870 000 hab.), fondée vers 600 av. J.-C. par les Grecs (Massalia), est la deuxième ville de France et l'une des plus anciennes cités du pays.",
    choix: [
      "Marseille",
      "Lyon",
      "Toulouse",
      "Bordeaux",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que l'espace Schengen ?",
    reponse:  "Zone de 29 pays européens ayant supprimé les contrôles aux frontières intérieures, permettant la libre circulation des personnes. Créé par les accords de Schengen de 1985.",
    choix: [
      "Zone de libre circulation entre 29 pays",
      "L'intégralité de l'Union européenne",
      "Une zone monétaire utilisant l'euro",
      "Un accord de défense militaire",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quel est le plus long fleuve de France ?",
    reponse:  "La Loire (1 013 km), traversant le Centre et l'Ouest, est le plus long fleuve entièrement français. Son val est classé au patrimoine mondial de l'UNESCO.",
    choix: [
      "La Loire",
      "La Seine",
      "Le Rhône",
      "La Garonne",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels sont les pays frontaliers de la France métropolitaine ?",
    reponse:  "La France partage ses frontières avec 8 pays : la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, Monaco, Andorre et l'Espagne. C'est l'un des pays les plus frontaliers d'Europe.",
    choix: [
      "Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Andorre, Espagne",
      "Belgique, Allemagne, Suisse, Italie et Espagne uniquement",
      "Angleterre, Belgique, Espagne, Italie et Suisse",
      "Belgique, Pays-Bas, Allemagne, Autriche et Espagne",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels sont les principales chaînes de montagnes en France ?",
    reponse:  "La France possède plusieurs massifs montagneux importants : les Alpes (avec le Mont-Blanc), les Pyrénées, le Massif central, les Vosges et le Jura. Les Alpes sont les plus hautes avec des sommets dépassant 4 000 mètres.",
    choix: [
      "Alpes, Pyrénées, Massif central, Vosges, Jura",
      "Alpes, Ardennes, Pyrénées, Cévennes",
      "Alpes, Pyrénées et Massif armoricain uniquement",
      "Jura, Ardennes, Vosges et Alpes uniquement",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quel est le siège de la Commission européenne ?",
    reponse:  "La Commission européenne, organe exécutif de l'Union européenne, a son siège à Bruxelles, en Belgique. Elle est distincte du Parlement européen dont le siège officiel est à Strasbourg.",
    choix: [
      "Bruxelles, en Belgique",
      "Strasbourg, en France",
      "Luxembourg",
      "Francfort, en Allemagne",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que le traité de Rome et quand a-t-il eu lieu ?",
    reponse:  "Le 25 mars 1957, six pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg) ont signé à Rome deux traités fondateurs : l'un créant la Communauté économique européenne (CEE), l'autre la Communauté européenne de l'énergie atomique (Euratom).",
    choix: [
      "Traité de 1957 fondant la CEE, signé par 6 pays fondateurs",
      "Traité de 1992 créant l'Union européenne",
      "Accord de 1957 sur la liberté de circulation",
      "Traité de paix signé en 1957 après la Seconde Guerre mondiale",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels sont les 6 pays fondateurs de la construction européenne ?",
    reponse:  "Les six pays fondateurs de la Communauté économique européenne (1957) sont la France, l'Allemagne de l'Ouest, l'Italie, la Belgique, les Pays-Bas et le Luxembourg.",
    choix: [
      "France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg",
      "France, Allemagne, Espagne, Italie, Belgique, Pays-Bas",
      "France, Angleterre, Allemagne, Italie, Suisse, Luxembourg",
      "France, Allemagne, Autriche, Italie, Belgique, Luxembourg",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels sont les principaux fleuves français ?",
    reponse:  "La France est traversée par plusieurs grands fleuves : la Loire (le plus long, 1 013 km), le Rhône, la Seine, la Garonne, le Rhin (frontière avec l'Allemagne), la Marne et la Dordogne.",
    choix: [
      "Loire, Rhône, Seine, Garonne, Rhin, Marne, Dordogne",
      "Seine, Loire, Danube, Rhin, Saône",
      "Rhône, Loire, Meuse, Moselle, Garonne",
      "Seine, Loire, Tamise, Rhin, Garonne",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Citez trois régions françaises métropolitaines.",
    reponse:  "La France métropolitaine compte 13 régions. Parmi elles : l'Île-de-France (avec Paris), la Bretagne, la Normandie, l'Occitanie, Auvergne-Rhône-Alpes, la Provence-Alpes-Côte d'Azur et les Hauts-de-France.",
    choix: [
      "Île-de-France, Bretagne, Occitanie (parmi 13 régions)",
      "Paris, Lyon, Marseille",
      "Alsace, Lorraine, Champagne (anciennes régions)",
      "Bretagne, Normandie, Corse (parmi 22 régions)",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Combien de départements compte la France au total ?",
    reponse:  "La France compte 101 départements au total : 96 en métropole (dont la Corse-du-Sud et la Haute-Corse) et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte). Chaque département est identifié par un numéro.",
    choix: [
      "101 départements (96 en métropole + 5 en outre-mer)",
      "96 départements uniquement en métropole",
      "105 départements depuis la dernière réforme",
      "86 départements métropolitains et 5 d'outre-mer",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quels avantages offre l'appartenance à l'Union européenne ?",
    reponse:  "L'appartenance à l'UE offre de nombreux avantages : libre circulation des personnes dans l'espace Schengen, monnaie unique (l'euro), marché commun sans droits de douane, aide au développement régional, coopération politique et partage de valeurs démocratiques.",
    choix: [
      "Libre circulation, monnaie unique, marché commun, coopération politique",
      "Uniquement des avantages économiques et commerciaux",
      "Armée commune et politique étrangère unique",
      "Suppression des frontières et des douanes uniquement",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Quelles sont les trois plus grandes villes de France ?",
    reponse:  "Les trois plus grandes villes de France par leur population sont Paris (capitale, environ 2,1 millions d'habitants intra-muros), Marseille (environ 870 000 habitants) et Lyon (environ 520 000 habitants).",
    choix: [
      "Paris, Marseille et Lyon",
      "Paris, Lyon et Toulouse",
      "Paris, Marseille et Nice",
      "Paris, Bordeaux et Lille",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que la Déclaration Schuman du 9 mai 1950 ?",
    reponse:  "La déclaration Schuman, prononcée par le ministre français des Affaires étrangères Robert Schuman le 9 mai 1950, proposa de mettre en commun les productions de charbon et d'acier franco-allemandes. Elle est considérée comme l'acte fondateur de la construction européenne.",
    choix: [
      "Proposition fondatrice de la construction européenne par Robert Schuman",
      "Discours annonçant la création de l'euro",
      "Déclaration franco-allemande de réconciliation après 1945",
      "Traité instaurant la libre circulation des personnes en Europe",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que la zone euro ?",
    reponse:  "La zone euro regroupe les pays membres de l'Union européenne ayant adopté l'euro comme monnaie unique. En 2024, elle compte 20 États membres. La politique monétaire de la zone euro est gérée par la Banque centrale européenne (BCE), dont le siège est à Francfort.",
    choix: [
      "Pays de l'UE ayant adopté l'euro, politique monétaire gérée par la BCE",
      "L'ensemble des 27 pays membres de l'Union européenne",
      "Zone de libre-échange incluant aussi la Suisse et la Norvège",
      "Espace économique comprenant tous les pays utilisant l'euro",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que le Parlement européen et comment est-il élu ?",
    reponse:  "Le Parlement européen est l'assemblée législative de l'Union européenne, composée de 720 députés européens élus au suffrage universel direct tous les 5 ans par les citoyens des États membres. Il siège officiellement à Strasbourg.",
    choix: [
      "Assemblée de l'UE, 720 députés élus au suffrage universel direct, tous les 5 ans",
      "Institution nommée par les gouvernements des États membres",
      "Assemblée consultative dont les membres sont désignés par les Parlements nationaux",
      "Organe composé de 27 représentants, un par État membre",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que la Cour de justice de l'Union européenne ?",
    reponse:  "La Cour de justice de l'UE (CJUE), dont le siège est à Luxembourg, est la plus haute juridiction de l'Union européenne. Elle veille au respect du droit européen et tranche les litiges entre États membres, institutions et citoyens de l'UE.",
    choix: [
      "Plus haute juridiction de l'UE, siège à Luxembourg",
      "Tribunal européen des droits de l'Homme, siège à Strasbourg",
      "Cour internationale de justice des Nations Unies, siège à La Haye",
      "Juridiction financière contrôlant le budget de l'UE",
    ],
    correct: 0,
  },

  {
    theme:    "🌍 Géographie & Europe",
    question: "Qu'est-ce que la politique agricole commune (PAC) ?",
    reponse:  "La Politique agricole commune (PAC), créée en 1962, est l'une des plus anciennes politiques de l'Union européenne. Elle vise à soutenir les agriculteurs européens via des aides financières directes, à garantir la sécurité alimentaire et à promouvoir un développement rural durable.",
    choix: [
      "Politique de l'UE soutenant les agriculteurs européens depuis 1962",
      "Accord commercial entre l'UE et les pays exportateurs de céréales",
      "Programme de subventions uniquement pour les grandes exploitations",
      "Politique nationale française d'aide à l'agriculture bio",
    ],
    correct: 0,
  },

  // ← Ajoute ici de nouvelles questions de Géographie & Europe ↑


  // ┌─────────────────────────────────────────────────────────┐
  // │  THÈME 6 — 🏡 Société & Quotidien                       │
  // └─────────────────────────────────────────────────────────┘

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la Sécurité sociale ?",
    reponse:  "Créée en 1945, elle garantit à tous les résidents l'accès aux soins, aux prestations familiales, aux retraites et aux indemnités chômage, financée par les cotisations patronales et salariales.",
    choix: [
      "Protection sociale universelle depuis 1945",
      "Assurance privée obligatoire",
      "Service réservé aux fonctionnaires",
      "Aide réservée aux plus démunis",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le SMIC ?",
    reponse:  "Le Salaire Minimum Interprofessionnel de Croissance est le salaire horaire minimum légal, en dessous duquel aucun employeur ne peut rémunérer un salarié. Révisé chaque année.",
    choix: [
      "Salaire minimum légal garanti à tous les salariés",
      "Aide sociale pour les chômeurs",
      "Salaire moyen des fonctionnaires",
      "Une taxe sur les entreprises",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Quelle est la durée légale du travail hebdomadaire en France ?",
    reponse:  "35 heures par semaine depuis la loi Aubry de 2000. Les heures au-delà sont des heures supplémentaires, majorées et encadrées par des règles strictes.",
    choix: [
      "35 heures",
      "40 heures",
      "39 heures",
      "30 heures",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Combien de jours fériés compte la France ?",
    reponse:  "11 jours fériés légaux : 1er janvier, Lundi de Pâques, 1er mai, 8 mai, Ascension, Lundi de Pentecôte, 14 juillet, 15 août, 1er novembre, 11 novembre, 25 décembre.",
    choix: [
      "11 jours fériés",
      "8 jours fériés",
      "14 jours fériés",
      "7 jours fériés",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le Pacs ?",
    reponse:  "Le Pacte civil de solidarité (1999) est un contrat d'union civile entre deux personnes majeures, offrant des droits similaires au mariage en matière fiscale et sociale, plus simple à dissoudre.",
    choix: [
      "Contrat d'union civile depuis 1999",
      "Un diplôme professionnel",
      "Une aide au logement",
      "Un contrat de travail spécifique",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "À quel âge l'instruction est-elle obligatoire en France ?",
    reponse:  "L'instruction est obligatoire de 3 à 16 ans depuis la loi de 2019. L'école maternelle est désormais incluse, reflétant l'importance accordée à l'éducation précoce.",
    choix: [
      "De 3 à 16 ans",
      "De 6 à 16 ans",
      "De 4 à 18 ans",
      "De 5 à 15 ans",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le baccalauréat ?",
    reponse:  "Diplôme national de fin d'études secondaires passé à 17-18 ans, donnant accès à l'enseignement supérieur. Créé par Napoléon en 1808, c'est l'un des plus anciens diplômes encore en usage.",
    choix: [
      "Diplôme national de fin d'études secondaires",
      "Un diplôme universitaire",
      "Un concours d'entrée en fonction publique",
      "Une certification professionnelle",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la CAF ?",
    reponse:  "La Caisse d'Allocations Familiales verse les prestations familiales et sociales : allocations familiales, APL (aide au logement), RSA, prime d'activité. Pilier de la politique sociale française.",
    choix: [
      "Organisme versant prestations familiales et sociales",
      "Centrale syndicale agricole",
      "Organisme de retraite complémentaire",
      "Un service fiscal local",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le service public à la française ?",
    reponse:  "Activités d'intérêt général assurées par l'État selon trois principes fondamentaux : continuité (fonctionnement permanent), égalité (traitement identique pour tous), adaptabilité (évolution selon les besoins).",
    choix: [
      "Service d'intérêt général : continuité, égalité, adaptabilité",
      "Service uniquement pour les fonctionnaires",
      "Entreprises publiques rentables",
      "Un service optionnel proposé par l'État",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le système de santé français ?",
    reponse:  "Considéré parmi les meilleurs au monde (OMS), fondé sur l'Assurance maladie universelle et les mutuelles. L'accès aux soins est garanti à tous, avec remboursement partiel ou total des frais médicaux.",
    choix: [
      "Système universel, parmi les meilleurs au monde",
      "Système entièrement privé",
      "Assurance réservée aux fonctionnaires",
      "Service payant sans remboursement",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Depuis quand l'instruction est-elle obligatoire en France ?",
    reponse:  "L'instruction obligatoire a été instaurée le 28 mars 1882 par Jules Ferry, alors ministre de l'Instruction publique. Elle était alors obligatoire de 6 à 13 ans ; depuis 2019, elle l'est de 3 à 16 ans.",
    choix: [
      "Depuis 1882, loi Jules Ferry",
      "Depuis la Révolution française de 1789",
      "Depuis la Constitution de 1958",
      "Depuis la loi de 1901 sur les associations",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qui a rendu l'école gratuite et obligatoire en France ?",
    reponse:  "Jules Ferry, ministre de l'Instruction publique puis président du Conseil, a rendu l'école primaire publique gratuite (1881) et obligatoire (1882). Ces lois fondatrices ont laïcisé et universalisé l'enseignement en France.",
    choix: [
      "Jules Ferry, ministre de l'Instruction publique",
      "Napoléon Bonaparte",
      "Victor Hugo",
      "Condorcet, philosophe révolutionnaire",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Comment est financée la Sécurité sociale française ?",
    reponse:  "La Sécurité sociale est financée par les cotisations sociales prélevées sur les salaires des employeurs et des salariés, ainsi que par des impôts spécifiques (CSG, CRDS). Elle illustre concrètement le principe de fraternité républicaine.",
    choix: [
      "Par les cotisations des employeurs et salariés (et impôts spécifiques)",
      "Exclusivement par le budget de l'État",
      "Par les contributions volontaires des citoyens",
      "Uniquement par les impôts sur le revenu",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le PACS ?",
    reponse:  "Le Pacte civil de solidarité (PACS), créé en 1999, est un contrat d'union entre deux personnes majeures, de même sexe ou de sexe différent. Il offre des droits proches du mariage (fiscalité, protection sociale) et se dissout plus facilement.",
    choix: [
      "Contrat d'union civile entre deux personnes majeures, depuis 1999",
      "Un diplôme professionnel d'État",
      "Une aide au logement pour couples",
      "Un contrat de travail à durée déterminée",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Quels sont les plats typiques de la cuisine française ?",
    reponse:  "La cuisine française regorge de plats emblématiques : la bouillabaisse (Marseille), la quiche lorraine, le pot-au-feu, le coq au vin, le bœuf bourguignon, le cassoulet, les crêpes bretonnes ou encore la tartiflette savoyarde.",
    choix: [
      "Bouillabaisse, quiche lorraine, coq au vin, bœuf bourguignon…",
      "Pizza, paella, tapas, sushi",
      "Sauerkraut, bratwurst, pretzels",
      "Fish and chips, pudding, scones",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la Journée défense et citoyenneté (JDC) ?",
    reponse:  "La Journée défense et citoyenneté (JDC), anciennement journée d'appel de préparation à la défense, est obligatoire pour tous les Français (garçons et filles) à 16 ans. Elle sensibilise aux enjeux de défense nationale et de citoyenneté.",
    choix: [
      "Journée obligatoire à 16 ans sur la défense et la citoyenneté",
      "Un service militaire de 10 jours",
      "Une cérémonie facultative pour les majeurs",
      "Un diplôme civique remplaçant le baccalauréat",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le RSA ?",
    reponse:  "Le Revenu de solidarité active (RSA) est une aide sociale versée par la CAF aux personnes sans ressources ou disposant de revenus très faibles. Il vise à assurer un minimum de ressources tout en encourageant le retour à l'emploi.",
    choix: [
      "Aide sociale versée aux personnes sans ressources suffisantes",
      "Retraite supplémentaire pour les seniors",
      "Prime versée aux salariés à temps partiel uniquement",
      "Allocation chômage pour les moins de 25 ans",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la loi de 2004 sur les signes religieux à l'école ?",
    reponse:  "La loi du 15 mars 2004 interdit le port de signes ou tenues manifestant ostensiblement une appartenance religieuse dans les écoles, collèges et lycées publics. Elle s'applique aux élèves et s'inscrit dans le principe de laïcité scolaire.",
    choix: [
      "Loi interdisant les signes religieux ostentatoires à l'école publique",
      "Loi instaurant des cours de religion dans les écoles",
      "Loi autorisant le voile dans les universités publiques",
      "Loi interdisant tout symbole politique et religieux pour les enseignants",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "A-t-on le droit de porter des signes religieux dans l'espace public en France ?",
    reponse:  "Oui, dans l'espace public, chacun est libre de porter les signes de sa religion. En revanche, les signes religieux ostentatoires sont interdits dans les écoles publiques (loi 2004) et les agents de la fonction publique doivent respecter la neutralité religieuse dans l'exercice de leurs fonctions.",
    choix: [
      "Oui dans l'espace public, mais pas dans les écoles publiques ni pour les fonctionnaires",
      "Non, les signes religieux sont totalement interdits en France",
      "Oui, partout sans aucune restriction",
      "Non, sauf dans les lieux de culte",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que l'APL (Aide personnalisée au logement) ?",
    reponse:  "L'APL est une aide au logement versée par la CAF (Caisse d'allocations familiales) aux personnes ayant des revenus modestes, qu'elles soient locataires ou accédants à la propriété. Elle réduit directement le montant du loyer ou de la mensualité.",
    choix: [
      "Aide au logement versée par la CAF aux ménages modestes",
      "Allocation pour les personnes âgées en maison de retraite",
      "Prime versée aux propriétaires pour rénover leur logement",
      "Aide réservée aux étudiants boursiers uniquement",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la Journée internationale du 1er mai en France ?",
    reponse:  "Le 1er mai est la Fête du Travail, jour férié et chômé en France. Elle commémore la lutte des travailleurs pour l'obtention de la journée de 8 heures, en référence aux manifestations du 1er mai 1886 à Chicago. Le muguet est offert traditionnellement ce jour-là.",
    choix: [
      "Fête du Travail, jour férié commémorant la lutte ouvrière",
      "Fête nationale de la République française",
      "Anniversaire de la Déclaration des droits de l'Homme",
      "Journée de commémoration de la Libération",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le système de retraite français ?",
    reponse:  "Le système de retraite français est un régime par répartition : les actifs cotisent pour payer les pensions des retraités actuels. Il est géré par la Sécurité sociale et des caisses complémentaires. L'âge légal de départ à la retraite est fixé par la loi.",
    choix: [
      "Régime par répartition : les actifs financent les retraites en cours",
      "Système d'épargne individuelle obligatoire",
      "Assurance privée facultative pour compléter le revenu",
      "Pension versée uniquement aux fonctionnaires",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que Pôle emploi (France Travail) ?",
    reponse:  "France Travail (anciennement Pôle emploi) est l'organisme public français chargé d'accompagner les demandeurs d'emploi dans leur recherche et de leur verser les allocations chômage (ARE). Il résulte de la fusion de l'ANPE et des Assedic en 2008.",
    choix: [
      "Organisme public d'accompagnement des chômeurs et versement des allocations",
      "Agence privée de recrutement financée par les entreprises",
      "Service du ministère des Finances gérant les impôts des salariés",
      "Organisation patronale chargée des négociations salariales",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le congé maternité en France ?",
    reponse:  "Le congé maternité est un droit garanti par le Code du travail. Il permet à la mère salariée de s'arrêter de travailler avant et après l'accouchement tout en percevant des indemnités journalières versées par l'Assurance maladie. Sa durée varie selon le nombre d'enfants.",
    choix: [
      "Droit légal de suspension du travail avant et après l'accouchement, indemnisé",
      "Aide financière versée par la CAF uniquement aux mères célibataires",
      "Congé facultatif d'une semaine après la naissance",
      "Prestation réservée aux fonctionnaires de l'État",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que l'Assurance maladie universelle en France ?",
    reponse:  "La Protection universelle maladie (PUMa) garantit à toute personne résidant en France de façon stable et régulière la prise en charge de ses frais de santé, indépendamment de sa situation professionnelle. Elle remplace la CMU de base depuis 2016.",
    choix: [
      "Prise en charge des frais de santé pour tout résident stable en France",
      "Mutuelle privée obligatoire souscrite par tous les salariés",
      "Aide médicale réservée aux seuls ressortissants français",
      "Assurance couvrant uniquement les accidents du travail",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le mariage civil en France ?",
    reponse:  "En France, seul le mariage civil célébré en mairie a une valeur juridique. Le mariage religieux est une cérémonie personnelle sans effet légal. Le mariage civil crée des droits et obligations entre époux (succession, impôts, autorité parentale partagée).",
    choix: [
      "Seul le mariage civil en mairie a une valeur juridique en France",
      "Le mariage religieux est obligatoire avant le mariage civil",
      "Le mariage civil et religieux ont la même valeur légale",
      "Le mariage civil est facultatif depuis la loi de 1999 sur le PACS",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que la médecine de ville en France ?",
    reponse:  "La médecine de ville désigne les soins dispensés en dehors de l'hôpital par les professionnels libéraux : médecins généralistes, spécialistes, dentistes, kinésithérapeutes, etc. Le médecin généraliste est le médecin traitant, premier interlocuteur du patient dans le système de santé.",
    choix: [
      "Soins libéraux hors hôpital : généraliste (médecin traitant), spécialistes…",
      "Réseau de cliniques privées réservé aux patients aisés",
      "Service d'urgences médicales mobiles intervenant en ville",
      "Ensemble des hôpitaux de proximité dans les centres-villes",
    ],
    correct: 0,
  },

  {
    theme:    "🏡 Société & Quotidien",
    question: "Qu'est-ce que le bénévolat et quel est son rôle en France ?",
    reponse:  "Le bénévolat désigne l'engagement volontaire et gratuit au service d'une association ou d'une cause d'intérêt général. En France, on compte environ 13 millions de bénévoles actifs dans les domaines sportif, culturel, social, humanitaire et caritatif. C'est un pilier de la cohésion sociale.",
    choix: [
      "Engagement volontaire et gratuit dans une association, 13 millions de bénévoles",
      "Travail non déclaré toléré dans certains secteurs",
      "Service civique obligatoire pour les jeunes de 16 à 25 ans",
      "Aide rémunérée destinée aux personnes en situation de chômage",
    ],
    correct: 0,
  },

  // ← Ajoute ici de nouvelles questions de Société & Quotidien ↑

]; // ← NE PAS SUPPRIMER CETTE LIGNE


