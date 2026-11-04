const INTERVIEW_QUESTIONS = [

  {
    icon:     "🇫🇷",
    question: "Pourquoi souhaitez-vous devenir français(e) ?",
    pourquoi: "C'est la question centrale. L'agent veut comprendre votre motivation profonde et votre attachement réel à la France — pas une réponse administrative.",
    conseils: [
      "Parlez de votre vécu concret en France, pas de raisons administratives",
      "Mentionnez votre attachement aux valeurs : laïcité, égalité, libertés",
      "Évoquez votre intégration : travail, vie sociale, implication locale",
      "Montrez que vous connaissez les droits ET les devoirs qui viennent avec",
      "Soyez sincère : l'authenticité vaut mieux qu'une réponse apprise par coeur",
    ],
    exemple: [
      "Je vis en France depuis [X] ans, et c'est ici que j'ai construit l'essentiel de ma vie : ma carrière, mes amitiés, mes habitudes quotidiennes. Mes enfants sont nés et scolarisés ici — la France est leur pays, et c'est devenu le mien aussi.",
      "Ce qui me tient à coeur, c'est de pouvoir participer pleinement à la vie de ce pays. Voter, m'impliquer dans la vie civique, assumer les mêmes obligations que mes voisins. Je ne veux plus être spectateur — je veux être citoyen à part entière.",
      "Les valeurs de la République — la laïcité, l'égalité, la liberté d'expression — ne sont pas pour moi des mots abstraits. Ce sont des principes que je vis au quotidien et que je défends sincèrement.",
    ],
    eviter: [
      "Ne dites pas que c'est pour obtenir un passeport ou faciliter des voyages",
      "Évitez les réponses trop abstraites sans ancrage dans votre vie réelle",
      "Ne critiquez pas votre pays d'origine — cela peut être mal perçu",
      "N'énumérez pas les avantages pratiques sans mentionner les valeurs",
    ],
  },

  {
    icon:     "📋",
    question: "Pouvez-vous me parler de votre parcours en France ?",
    pourquoi: "L'agent vérifie votre intégration concrète : stabilité professionnelle, vie sociale, maîtrise de la langue, enracinement dans le territoire.",
    conseils: [
      "Présentez votre arrivée en France et vos raisons de venir",
      "Décrivez votre parcours professionnel et votre stabilité",
      "Parlez de votre vie sociale : associations, voisinage, amitiés",
      "Mentionnez vos enfants, votre famille si pertinent",
      "Évoquez les difficultés surmontées — cela montre votre résilience",
    ],
    exemple: [
      "Je suis arrivé(e) en France en [année], initialement pour [raison : études / travail / regroupement familial]. Au début, la langue et les codes culturels ont été un défi, mais j'ai rapidement cherché à m'intégrer.",
      "Depuis [date], je travaille comme [métier] dans [secteur] à [ville]. J'habite dans le quartier de [quartier/ville] depuis [X] ans — j'y ai mes voisins, mes commerçants, mes habitudes.",
      "Mes enfants sont scolarisés ici depuis [date] : ils parlent français parfaitement et se sentent pleinement français. Au fil des années, la France n'est plus seulement un pays où je vis — c'est mon pays.",
    ],
    eviter: [
      "Ne vous limitez pas à la chronologie administrative (dates de titres de séjour)",
      "Évitez de lire depuis un papier préparé — parlez naturellement",
      "Ne soyez pas trop bref : montrez la richesse de votre vie en France",
    ],
  },

  {
    icon:     "⚖️",
    question: "Qu'est-ce que la laïcité pour vous ?",
    pourquoi: "La laïcité est l'un des piliers absolus de la République. L'agent vérifie que vous comprenez et acceptez ce principe dans sa profondeur, pas seulement sa définition.",
    conseils: [
      "Donnez la définition : séparation de l'Église et de l'État, loi de 1905",
      "Montrez que la laïcité protège TOUTES les croyances, y compris les athées",
      "Insistez : la laïcité n'est pas l'hostilité à la religion, c'est la neutralité de l'État",
      "Dites que vous y adhérez personnellement et expliquez pourquoi",
      "Citez un exemple concret : l'école publique, les administrations",
    ],
    exemple: [
      "Pour moi, la laïcité est le principe qui permet à des personnes de toutes origines et croyances de vivre ensemble dans l'égalité. Concrètement, cela signifie que l'État est neutre : il ne favorise ni ne combat aucune religion.",
      "À l'école publique, par exemple, la laïcité garantit que tous les enfants sont traités à égalité, sans distinction de religion. C'est ce qui permet à mon enfant de partager la même classe avec des camarades de tous horizons.",
      "Ce que j'apprécie dans ce principe, c'est qu'il protège tout le monde : les croyants de toutes religions, comme les non-croyants. C'est un principe auquel j'adhère sincèrement, parce qu'il correspond à ma vision du vivre-ensemble.",
    ],
    eviter: [
      "Ne confondez pas laïcité et interdiction de pratiquer une religion",
      "Évitez de paraître réticent ou en désaccord avec ce principe",
      "Ne restez pas à la définition théorique — montrez que vous l'avez intériorisé",
    ],
  },

  {
    icon:     "📜",
    question: "Quels sont vos droits et devoirs en tant que futur(e) citoyen(ne) ?",
    pourquoi: "L'agent vérifie que vous avez conscience que la citoyenneté est un contrat bilatéral : des droits, mais aussi des obligations concrètes envers la République.",
    conseils: [
      "Citez au moins 3 droits : vote, liberté d'expression, accès aux soins...",
      "Citez au moins 3 devoirs : respecter les lois, payer ses impôts, défense nationale...",
      "Insistez sur le droit de vote — c'est le plus symbolique et le plus attendu",
      "Montrez que vous êtes prêt(e) à assumer les obligations, pas seulement les droits",
    ],
    exemple: [
      "La nationalité française, pour moi, c'est d'abord le droit de vote — pouvoir participer aux élections présidentielles, législatives, municipales, et peser sur les décisions qui concernent notre vie commune.",
      "Il y a aussi l'accès à la fonction publique, la protection consulaire à l'étranger, et la libre circulation dans toute l'Union européenne.",
      "Mais je suis tout aussi conscient(e) des devoirs : respecter les lois et la Constitution, payer mes impôts, respecter la liberté d'autrui. La citoyenneté c'est un engagement mutuel — la France me donne des droits, je lui dois mes obligations.",
    ],
    eviter: [
      "Ne listez pas uniquement les droits sans évoquer les devoirs — c'est rédhibitoire",
      "Évitez une liste scolaire récitée sans conviction personnelle",
      "Ne confondez pas les droits du citoyen avec ceux du simple résident",
    ],
  },

  {
    icon:     "🏛️",
    question: "Quel personnage historique français vous a le plus marqué(e) ?",
    pourquoi: "Cette question évalue votre culture générale et votre intérêt sincère pour l'histoire de France. Il n'y a pas de bonne réponse — ce qui compte c'est votre connaissance et votre authenticité.",
    conseils: [
      "Choisissez un personnage que vous connaissez vraiment bien",
      "Expliquez pourquoi il vous touche — faites le lien avec vos valeurs personnelles",
      "Montrez votre connaissance historique sans réciter une fiche",
      "Un peu d'émotion sincère est toujours bien perçu",
      "Préparez 2-3 options au cas où l'agent vous demande d'en citer d'autres",
    ],
    exemple: [
      "Le personnage qui me touche le plus est Simone Veil. Elle incarne quelque chose d'essentiel pour moi : le courage de défendre des principes au nom de la dignité humaine, même face à une opposition violente.",
      "En 1975, elle a porté la loi sur l'IVG devant une Assemblée nationale hostile — et elle l'a fait avec une conviction et une dignité remarquables. Rescapée de la Shoah, elle a consacré sa vie aux droits des femmes et à la construction européenne.",
      "Elle représente pour moi ce que la France a de meilleur : la capacité à se remettre en question, à avancer, à défendre l'égalité et la dignité pour tous.",
    ],
    eviter: [
      "Ne choisissez pas un personnage dont vous ne maîtrisez pas l'histoire",
      "Évitez les erreurs factuelles — vérifiez les dates avant l'entretien",
      "Ne répondez pas 'je ne sais pas trop' — c'est une question à préparer à l'avance",
    ],
  },

  {
    icon:     "🤝",
    question: "Comment participez-vous à la vie de votre communauté locale ?",
    pourquoi: "L'intégration ne se mesure pas qu'à l'emploi. L'agent évalue votre implication dans la vie civique et sociale française au quotidien.",
    conseils: [
      "Citez des exemples concrets : associations, bénévolat, école, voisinage",
      "Parlez de vos relations avec des Français : amis, collègues, voisins",
      "Évoquez vos pratiques linguistiques — parler français au quotidien compte",
      "Montrez que vous vous projetez durablement en France",
    ],
    exemple: [
      "Je m'implique de plusieurs façons. Depuis [date], je suis bénévole à [association / club sportif / école]. C'est une façon concrète de rendre à la communauté ce qu'elle m'a apporté.",
      "Mes enfants font leurs activités dans le quartier, ce qui me met en contact régulier avec d'autres familles. J'ai des amis français avec qui je partage des moments du quotidien.",
      "Pour moi, l'intégration ce n'est pas une case à cocher : c'est quelque chose qui s'est construit naturellement, année après année, dans les petits gestes du quotidien.",
    ],
    eviter: [
      "Ne dites pas que vous n'avez pas le temps de vous impliquer",
      "Évitez de n'évoquer que votre communauté d'origine",
      "L'authenticité est toujours préférable — ne mentez pas sur vos activités",
    ],
  },

  {
    icon:     "🗣️",
    question: "Comment décririez-vous votre maîtrise du français ?",
    pourquoi: "L'agent évalue directement votre niveau de langue tout au long de l'entretien, mais cette question vous invite aussi à une auto-évaluation honnête sur votre progression.",
    conseils: [
      "Soyez honnête sur votre niveau — l'agent l'entend de toute façon",
      "Racontez votre progression : comment vous avez appris, vos efforts",
      "Mentionnez les pratiques concrètes : cours, lectures, pratique quotidienne",
      "Acceptez vos lacunes éventuelles avec sérénité",
      "Insistez sur le fait que vous continuez à progresser",
    ],
    exemple: [
      "Je parle français au quotidien depuis [X] ans. Au début, c'était difficile — les subtilités de la langue, les expressions, les accents régionaux. Mais j'ai travaillé régulièrement : des cours au départ, puis surtout la pratique quotidienne.",
      "Aujourd'hui, je me sens à l'aise pour m'exprimer sur la plupart des sujets — au travail, dans les administrations, dans la vie sociale. Il m'arrive encore de chercher un mot, et je le vis très bien.",
      "Je lis la presse française, je suis des émissions en français. C'est aussi une façon de mieux comprendre la société dans laquelle je vis et de continuer à progresser.",
    ],
    eviter: [
      "Ne surestimez pas votre niveau — l'agent s'en rendra compte immédiatement",
      "Ne soyez pas trop autoflagellatoire — montrez votre progression",
      "Évitez de dire que l'accent est un problème — l'accent n'est pas un défaut",
    ],
  },

  {
    icon:     "👨‍👩‍👧",
    question: "Comment élevez-vous vos enfants par rapport à la culture française ?",
    pourquoi: "Cette question évalue votre intégration familiale et votre transmission des valeurs françaises à la génération suivante — un signal fort d'enracinement.",
    conseils: [
      "Parlez de la scolarité de vos enfants et de leur rapport au français",
      "Évoquez les valeurs que vous leur transmettez : laïcité, égalité, respect",
      "Il est normal de transmettre aussi sa culture d'origine — montrez l'équilibre",
      "Si vous n'avez pas d'enfants, adaptez à votre entourage proche",
    ],
    exemple: [
      "Mes enfants sont scolarisés en France depuis [date]. Le français est leur langue principale — c'est dans cette langue qu'ils pensent, qu'ils rêvent, qu'ils se font des amis.",
      "À la maison, nous parlons les deux langues : je tiens à ce qu'ils gardent un lien avec mes origines. Mais je leur transmets aussi les valeurs françaises : le respect des règles communes, l'égalité entre filles et garçons, la laïcité.",
      "Je crois profondément à une éducation qui leur donne les clés pour s'épanouir ici, en France, tout en restant fiers de ce qu'ils sont.",
    ],
    eviter: [
      "Ne donnez pas l'impression que la culture française est secondaire chez vous",
      "Évitez de sembler nier votre culture d'origine — les deux sont une richesse",
      "Ne présentez pas les valeurs républicaines comme une contrainte",
    ],
  },

  {
    icon:     "🌍",
    question: "Quel regard portez-vous sur la société française aujourd'hui ?",
    pourquoi: "L'agent évalue votre maturité civique et votre capacité à avoir une opinion nuancée sans tomber dans la critique systématique.",
    conseils: [
      "Adoptez un regard équilibré : points forts ET points de tension",
      "Montrez que vous suivez l'actualité française",
      "Évitez les positions politiques partisanes tranchées",
      "Valorisez ce que vous appréciez sincèrement dans le modèle français",
    ],
    exemple: [
      "La France est une société que j'admire pour beaucoup de raisons. Son système de protection sociale, l'école gratuite, l'accès aux soins — ce sont des acquis que je mesure chaque jour à leur juste valeur.",
      "En même temps, je vois que la société française fait face à des défis : les inégalités économiques, les questions d'intégration, les tensions autour du vivre-ensemble. Ce sont des sujets complexes.",
      "C'est d'ailleurs l'une des raisons pour lesquelles je veux devenir français(e) : non pas pour profiter d'un système, mais pour contribuer à cette société, voter, m'engager, participer aux débats.",
    ],
    eviter: [
      "Ne faites pas de critique politique partisane",
      "Évitez de dresser un tableau uniquement négatif de la France",
      "Ne comparez pas défavorablement la France à votre pays d'origine",
    ],
  },

  {
    icon:     "🕊️",
    question: "Que signifie pour vous la devise Liberté, Égalité, Fraternité ?",
    pourquoi: "L'agent évalue votre rapport intime aux valeurs fondatrices de la République. Il veut voir si ces mots ont un sens vivant pour vous, pas seulement une récitation.",
    conseils: [
      "Ne vous contentez pas de définir chaque mot — donnez-leur un sens personnel",
      "Reliez chaque valeur à votre vie quotidienne ou à votre parcours",
      "Montrez que ces valeurs ne sont pas acquises — elles se défendent",
      "Un exemple concret pour chaque valeur est très apprécié",
    ],
    exemple: [
      "Ces trois mots correspondent à quelque chose que j'ai ressenti en vivant en France. La Liberté, pour moi, c'est pouvoir m'exprimer, pratiquer ma religion dans la sphère privée, choisir mon mode de vie — sans que l'État s'y immisce, tant que je respecte la loi.",
      "L'Égalité, c'est ce que je vois à l'école de mes enfants : peu importe l'origine, le nom, la religion, tous les élèves ont les mêmes droits. C'est un idéal que la France n'atteint pas toujours pleinement, mais c'est un cap qui guide les politiques publiques.",
      "La Fraternité, c'est peut-être la valeur qui m'émeut le plus. C'est la solidarité entre des gens qui ne se connaissent pas. J'ai vécu cette fraternité ici, et j'essaie de la pratiquer à mon tour.",
    ],
    eviter: [
      "Ne récitez pas une définition de dictionnaire — l'agent cherche votre ressenti",
      "Évitez de dire que ces valeurs sont parfaitement réalisées en France",
      "Ne faites pas une réponse trop courte — cette question mérite développement",
    ],
  },

  {
    icon:     "💼",
    question: "Quelle est votre situation professionnelle actuelle ?",
    pourquoi: "L'agent vérifie votre stabilité en France, votre intégration économique et votre contribution à la société française.",
    conseils: [
      "Soyez factuel et précis : métier, secteur, ancienneté",
      "Mentionnez votre stabilité et vos perspectives",
      "Si vous êtes au chômage ou en reconversion, présentez-le positivement",
      "Reliez votre travail à votre intégration : collègues, langue, vie quotidienne",
    ],
    exemple: [
      "Je travaille actuellement comme [métier] dans [secteur] à [ville] depuis [X] ans. C'est un poste stable qui me permet de contribuer concrètement à la société française.",
      "Mon travail est aussi un lieu d'intégration : je collabore avec des collègues français et étrangers, je gère des situations qui nécessitent une bonne maîtrise de la langue et des codes culturels.",
      "Mon parcours professionnel ici m'a permis de me former, de progresser, et de m'ancrer davantage dans la société française.",
    ],
    eviter: [
      "Ne minimisez pas votre travail même s'il vous semble modeste",
      "Évitez d'être vague — précision et stabilité sont ce que l'agent recherche",
      "Si vous êtes au chômage, n'esquivez pas — expliquez votre situation sereinement",
    ],
  },

]; // ← NE PAS SUPPRIMER


const PITFALLS = [
  "Arriver sans avoir révisé les fondamentaux : devise, hymne, valeurs, symboles de la République",
  "Répondre uniquement en mots isolés sans construire de phrases complètes",
  "Montrer une réticence ou un désaccord avec la laïcité ou l'égalité hommes-femmes",
  "Ne parler que des avantages de la nationalité sans évoquer les obligations",
  "Critiquer ouvertement les institutions françaises ou le système politique",
  "Confondre le Parlement européen et le Parlement français",
  "Manquer de connaissances sur les droits civiques fondamentaux",
  "Paraître peu motivé ou donner l'impression que c'est uniquement administratif",
  "Ne pas connaître la date du 14 juillet ou la signification de La Marseillaise",
  "Lire ses réponses depuis un papier préparé à l'avance pendant l'entretien",
  "Répondre en moins de 3 phrases à une question ouverte",
  "Utiliser uniquement des arguments pratiques sans évoquer les valeurs",
];
