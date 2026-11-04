// ═══════════════════════════════════════════════
// QUESTIONS PAR PRÉFECTURE — cap-naturalisation.fr
// ═══════════════════════════════════════════════
// Pour ajouter une préfecture :
//   1. Ajoute un objet dans le tableau PREFECTURE_QUESTIONS
//   2. Remplis les champs : region, prefecture, icon, questions
//   3. Chaque question a : q (question), r (réponse), conseil (optionnel)
// ═══════════════════════════════════════════════

var PREFECTURE_QUESTIONS = [

 {
    region: "Nouvelle-Aquitaine",
    prefecture: "Gironde (33)",
    icon: "🍷",
    description: "La préfecture de la Gironde mène des entretiens très approfondis, mêlant parcours personnel, valeurs républicaines, culture générale et actualité. Les questions sont souvent directes et personnelles.",
    questions: [
      {
        q: "Pouvez-vous raconter votre arrivée en France ? Pourquoi êtes-vous venue ?",
        r: "Question ouverte — racontez votre arrivée de façon chronologique : quand, dans quelles circonstances, avec quel projet.",
        conseil: "Soyez précise et sincère. Donnez une date, un contexte, une motivation claire. Montrez que votre installation en France était un choix réfléchi, pas subi."
      },
      {
        q: "Pourquoi avez-vous choisi la France ?",
        r: "Question ouverte — évoquez ce qui vous a attirée : la langue, la culture, des études, un projet de vie, des valeurs partagées.",
        conseil: "Allez au-delà des raisons pratiques. Parler d'un attachement à la culture française, à ses valeurs ou à sa langue est toujours bien perçu."
      },
    
      {
        q: "Avez-vous commencé à apprendre le français lorsque vous étiez encore dans votre pays d'origine ?",
        r: "Question ouverte — précisez si vous avez étudié le français avant d'arriver, dans quel cadre (école, cours privés, université) et pendant combien de temps.",
        conseil: "Avoir appris le français avant d'arriver montre une démarche volontaire d'intégration. Valorisez cet effort même s'il était modeste au départ."
      },
      
      {
        q: "Pourquoi avez-vous choisi d'apprendre le français ?",
        r: "Question ouverte — parlez de ce qui vous a motivée : un goût pour la culture française, la littérature, le cinéma, ou un projet de vie en France.",
        conseil: "Montrez que le français n'était pas un simple outil mais un choix culturel. Cela renforce votre attachement sincère à la France."
      },
      {
        q: "Avez-vous trouvé un travail immédiatement après vos études ?",
        r: "Question ouverte — décrivez votre parcours professionnel après vos études : recherche d'emploi, premier poste, évolution.",
        conseil: "Mettez en avant votre autonomie et votre intégration professionnelle. Si le chemin a été difficile, montrez votre persévérance."
      },
      {
        q: "Pourquoi voulez-vous devenir française ?",
        r: "Question ouverte — exprimez un attachement sincère : votre vie est construite en France, vous partagez les valeurs de la République, vous souhaitez participer pleinement à la vie citoyenne.",
        conseil: "Évitez les réponses purement pratiques (passeport, facilités administratives). Parlez d'appartenance, d'identité, de valeurs. C'est la question centrale de l'entretien."
      },
      {
        q: "Où avez-vous rencontré votre conjoint ?",
        r: "Question ouverte — répondez simplement et précisément : lieu, circonstances, date approximative.",
        conseil: "Répondez naturellement. Cette question vise à vérifier la réalité de votre vie en France. Soyez concrète et cohérente avec le reste de votre dossier."
      },
      {
        q: "Quelles activités faites-vous ensemble ?",
        r: "Question ouverte — parlez de vos loisirs partagés, sorties, voyages, activités culturelles ou sportives.",
        conseil: "Montrez une vie commune riche et ancrée en France. Des activités locales (randonnées en Gironde, visites de vignobles, sorties culturelles à Bordeaux) sont des plus appréciés."
      },
      {
        q: "Êtes-vous proche de sa famille ? Les relations se passent-elles bien ?",
        r: "Question ouverte — décrivez vos relations avec la belle-famille : fréquence des rencontres, qualité des liens, événements partagés.",
        conseil: "Des liens familiaux solides avec une famille française sont un signe fort d'intégration. Soyez positive et donnez des exemples concrets."
      },
      {
        q: "Retournez-vous souvent dans votre pays d'origine ?",
        r: "Question ouverte — indiquez la fréquence de vos voyages et leurs raisons (famille, démarches administratives). Précisez que votre vie et votre centre d'intérêts est en France.",
        conseil: "Montrez que vos liens avec votre pays d'origine sont familiaux et personnels, et que votre ancrage principal est en France."
      },
      {
        q: "Comment est composé votre cercle d'amis en France ?",
        r: "Question ouverte — décrivez la diversité de votre cercle amical : collègues, voisins, parents d'élèves, amis de votre conjoint, personnes d'origines variées.",
        conseil: "Montrez un cercle d'amis intégré dans la société française, pas uniquement communautaire. Des amis français ou de nationalités diverses est perçu très positivement."
      },
      {
        q: "Quelle est la devise de la République française ?",
        r: "La devise de la République française est : Liberté, Égalité, Fraternité. Elle est inscrite dans la Constitution et figure sur les bâtiments publics.",
        conseil: "Réponse courte et précise attendue. Vous pouvez ajouter qu'elle date de la Révolution française pour montrer votre culture générale."
      },
      {
        q: "Que signifient les valeurs Liberté, Égalité, Fraternité ?",
        r: "Liberté : chacun peut penser, s'exprimer et agir librement dans le respect de la loi. Égalité : tous les citoyens ont les mêmes droits sans discrimination. Fraternité : solidarité entre tous les membres de la nation, nul ne doit être laissé sans secours.",
        conseil: "Illustrez chaque valeur avec un exemple tiré de votre vie quotidienne en France. Cela montre que ces valeurs ne sont pas abstraites pour vous."
      },
      {
        q: "Sommes-nous vraiment tous égaux en France ?",
        r: "Le principe d'égalité est inscrit dans la Constitution et c'est un idéal que la France cherche à atteindre. Des inégalités existent encore dans les faits, mais la République se donne des outils pour les réduire : lois anti-discrimination, politiques d'égalité des chances, parité homme-femme.",
        conseil: "Question de réflexion. Ne répondez ni naïvement (tout est parfait) ni négativement (rien ne fonctionne). Montrez que vous comprenez l'écart entre principe et réalité, et que vous croyez en cet idéal républicain."
      },
      {
        q: "Que signifie la laïcité ?",
        r: "La laïcité est le principe qui sépare l'État des religions. L'État est neutre : il ne favorise ni ne combat aucune religion. Chacun est libre de croire ou ne pas croire, mais la religion relève de la sphère privée. Les services publics et agents de l'État sont soumis à un devoir de neutralité religieuse.",
        conseil: "Insistez sur les deux volets : liberté de croire ET neutralité de l'État. Évitez de réduire la laïcité à une interdiction du religieux."
      },
      {
        q: "Peut-on critiquer une religion en France ?",
        r: "Oui. La liberté d'expression garantit le droit de critiquer, questionner ou même satiriser les religions et les idées religieuses. C'est une liberté fondamentale en France, illustrée par la tradition de la presse satirique. En revanche, la loi interdit les appels à la haine contre des personnes en raison de leur religion.",
        conseil: "Question importante liée à la liberté d'expression et à la laïcité. La distinction entre critiquer une idée (autorisé) et attaquer des personnes (interdit) est essentielle à mentionner."
      },

      {
        q: "Qu'est-ce que la démocratie ?",
        r: "La démocratie est un système politique dans lequel le pouvoir appartient au peuple, qui l'exerce directement ou par l'intermédiaire de représentants élus. Elle repose sur la liberté d'expression, le pluralisme politique, la séparation des pouvoirs et l'État de droit.",
        conseil: "Définition classique mais attendue. Vous pouvez ajouter que la France est une démocratie représentative pour montrer que vous connaissez le système français spécifiquement."
      },
      {
        q: "Depuis quand la France est-elle une démocratie ?",
        r: "La France a posé les bases de sa démocratie avec la Révolution française de 1789 et la Déclaration des droits de l'homme et du citoyen. Cependant, la démocratie française a connu des interruptions (Empire, régimes autoritaires). La démocratie républicaine stable s'est consolidée avec la IIIe République (1870) et la Ve République (1958).",
        conseil: "Mentionner 1789 est indispensable. Montrez que vous avez conscience que la démocratie est un acquis historique, pas une évidence."
      },
      {
        q: "Si vous devenez française, à quelles élections pourrez-vous voter ?",
        r: "En tant que citoyenne française, je pourrai voter à toutes les élections : présidentielle, législatives, sénatoriales, régionales, départementales, municipales, et européennes.",
        conseil: "N'oubliez pas les élections européennes — souvent oubliées. Montrez votre enthousiasme à l'idée de participer à la vie démocratique."
      },
      {
        q: "Pouvez-vous parler de la Révolution française ?",
        r: "La Révolution française (1789-1799) a renversé la monarchie absolue et posé les fondements de la République. Elle a proclamé les droits de l'homme et du citoyen, aboli les privilèges de la noblesse et du clergé, et donné à la France sa devise Liberté, Égalité, Fraternité. Elle a profondément transformé la France et influencé le monde entier.",
        conseil: "Donnez les dates (1789), les événements clés (prise de la Bastille le 14 juillet, Déclaration des droits de l'homme) et l'impact. Montrez que vous comprenez pourquoi c'est un événement fondateur."
      },
      {
        q: "Pouvez-vous citer des personnages historiques liés à cette période ?",
        r: "Parmi les figures marquantes : Robespierre (acteur majeur de la Terreur), Danton (orateur révolutionnaire), Marie-Antoinette (reine guillotinée), Louis XVI (dernier roi de l'Ancien Régime), Olympe de Gouges (auteure de la Déclaration des droits de la femme), l'Abbé Sieyès (théoricien politique).",
        conseil: "Citez au moins 3 noms avec une courte description pour chacun. Mentionner Olympe de Gouges montre une sensibilité à l'égalité homme-femme, très appréciée."
      },
      {
        q: "Quel personnage historique vous a particulièrement marquée ?",
        r: "Question ouverte — choisissez un personnage que vous admirerez sincèrement et expliquez pourquoi en lien avec des valeurs que vous partagez.",
        conseil: "Choisissez un personnage français ou lié à la France et expliquez clairement ce qu'il représente pour vous. Simone Veil, Victor Hugo, Marie Curie ou Jean Moulin sont d'excellents choix qui résonnent avec les valeurs républicaines."
      },
      {
        q: "Pouvez-vous citer des peintres français ?",
        r: "Parmi les grands peintres français : Claude Monet (impressionnisme), Édouard Manet, Edgar Degas, Paul Cézanne, Henri Matisse, Georges Seurat. La France a également accueilli des artistes étrangers comme Picasso.",
        conseil: "Citez au moins 3 noms et associez-les à un courant ou une œuvre. Si vous êtes allée au musée en France (Louvre, musée d'Orsay), mentionnez-le — cela ancre votre réponse dans votre vécu."
      },
      {
        q: "Allez-vous souvent au musée ?",
        r: "Question ouverte — parlez de vos visites culturelles en France : musées, expositions, monuments historiques.",
        conseil: "Même si vous n'y allez pas très souvent, citez des visites précises (un musée, une expo). Cela montre un intérêt réel pour la culture française au-delà du quotidien."
      },
      {
        q: "Quelles sont les dates et le contexte de la Seconde Guerre mondiale ?",
        r: "La Seconde Guerre mondiale a duré de 1939 à 1945. Elle a opposé les Alliés (France, Royaume-Uni, URSS, États-Unis) aux puissances de l'Axe (Allemagne nazie, Italie fasciste, Japon). La France a été occupée de 1940 à 1944. Elle s'est terminée par la capitulation de l'Allemagne le 8 mai 1945 et du Japon le 2 septembre 1945.",
        conseil: "Maîtrisez bien les dates : 1939 (début), 1940 (occupation de la France), 6 juin 1944 (Débarquement), 8 mai 1945 (fin en Europe). En tant que personne d'origine russe, mentionner le rôle de l'URSS peut enrichir votre réponse."
      },
      {
        q: "Quel était l'objectif de Hitler ?",
        r: "Adolf Hitler, chef du régime nazi, avait pour objectif d'établir une domination mondiale de la race aryenne, d'éliminer les personnes considérées comme 'inférieures' — notamment les Juifs, les Roms, les homosexuels, les handicapés — et d'étendre le territoire allemand (Lebensraum). Son régime a mené à la Shoah, génocide de 6 millions de Juifs.",
        conseil: "N'édulcorez pas la réponse. Nommer la Shoah et son ampleur est attendu. Montrez que vous prenez la mesure de l'horreur de cette période."
      },
      {
        q: "Dans quelle République sommes-nous actuellement ?",
        r: "Nous sommes sous la Ve République, instaurée en 1958.",
        conseil: "Réponse courte et précise. Avoir la date en tête (1958) est indispensable."
      },
      {
        q: "Quelle est la spécificité de la Ve République ?",
        r: "La Ve République se distingue par un exécutif fort, notamment un président de la République aux pouvoirs élargis, élu au suffrage universel direct depuis 1962. Elle établit un équilibre entre régime présidentiel et parlementaire, souvent qualifié de régime semi-présidentiel.",
        conseil: "L'élection du président au suffrage universel direct est la grande nouveauté par rapport aux républiques précédentes. C'est le point central à mentionner."
      },
      {
        q: "Quand a-t-elle été créée ?",
        r: "La Ve République a été créée en 1958, sous l'impulsion du général de Gaulle, en réponse à la crise politique et à la guerre d'Algérie qui avaient fragilisé la IVe République.",
        conseil: "Relier 1958 à de Gaulle et à la crise de la IVe République montre que vous comprenez le contexte historique, pas seulement la date."
      },
      {
        q: "Qui était Charles de Gaulle ?",
        r: "Charles de Gaulle (1890-1970) est une figure majeure de l'histoire française. Général et homme d'État, il a lancé l'Appel du 18 juin 1940 depuis Londres pour résister à l'occupation nazie. Il a dirigé la France libre, libéré la France et fondé la Ve République en 1958 dont il fut le premier président. Il incarne la résistance et la grandeur nationale.",
        conseil: "De Gaulle est incontournable. Mémorisez : l'Appel du 18 juin 1940, la France libre, et fondateur de la Ve République. Ce sont les trois piliers de sa légende."
      },
      {
        q: "Quels sont les trois pouvoirs en France ?",
        r: "Les trois pouvoirs sont : le pouvoir législatif (le Parlement, qui vote les lois), le pouvoir exécutif (le président de la République et le gouvernement, qui appliquent les lois), et le pouvoir judiciaire (les tribunaux, qui rendent la justice).",
        conseil: "Donnez le nom des institutions pour chaque pouvoir. La séparation des pouvoirs est un principe fondamental issu de Montesquieu — vous pouvez le mentionner."
      },
      {
        q: "Pourquoi les sépare-t-on ?",
        r: "La séparation des pouvoirs, théorisée par Montesquieu au XVIIIe siècle, vise à éviter les abus de pouvoir et la tyrannie. En répartissant l'autorité entre différentes institutions indépendantes, chacune contrôle et limite les autres, garantissant ainsi les libertés des citoyens.",
        conseil: "Mentionner Montesquieu et l'idée de contre-pouvoir montre votre culture politique. Le mot-clé est 'éviter les abus de pouvoir'."
      },
      {
        q: "Quel est le rôle du président de la République ?",
        r: "Le président de la République est le chef de l'État. Il veille au respect de la Constitution, garantit l'indépendance nationale, préside le Conseil des ministres, nomme le Premier ministre, est le chef des armées et représente la France à l'international. Il est élu pour 5 ans au suffrage universel direct.",
        conseil: "Les trois fonctions clés à retenir : garant de la Constitution, chef des armées, représentant de la France à l'étranger. N'oubliez pas la durée du mandat : 5 ans (quinquennat)."
      },
      {
        q: "Qui est le Premier ministre ?",
        r: "Question d'actualité — vérifiez le nom du Premier ministre en exercice avant votre entretien. Le Premier ministre dirige le gouvernement, coordonne l'action des ministres et met en œuvre la politique de la nation.",
        conseil: "Tenez-vous informée de l'actualité politique dans les semaines précédant l'entretien. Connaître le nom du Premier ministre est indispensable."
      },
      {
        q: "Quand la peine de mort a-t-elle été abolie en France ?",
        r: "La peine de mort a été abolie en France le 9 octobre 1981, sous la présidence de François Mitterrand, par la loi portée par le garde des Sceaux Robert Badinter.",
        conseil: "Retenez trois éléments : 1981, Mitterrand, Badinter. Robert Badinter, récemment décédé, est une figure très respectée en France. Le mentionner est très apprécié."
      },
      {
        q: "Qu'en pensez-vous de l'abolition de la peine de mort ?",
        r: "Je suis convaincue que l'abolition de la peine de mort est une avancée civilisationnelle majeure. L'État ne peut pas avoir le droit de vie et de mort sur ses citoyens. La justice doit réhabiliter, pas éliminer. C'est une valeur fondamentale que je partage pleinement.",
        conseil: "Réponse d'opinion attendue. Montrez une adhésion sincère et argumentée. Évitez toute ambiguïté : l'abolition de la peine de mort fait consensus dans les valeurs républicaines françaises."
      },
      {
        q: "Qui est Simone Veil ?",
        r: "Simone Veil (1927-2017) est une grande figure française. Survivante de la Shoah (Auschwitz), elle est devenue ministre de la Santé et a fait voter en 1975 la loi légalisant l'IVG (avortement) au prix d'un discours courageux devant une Assemblée très hostile. Première présidente du Parlement européen élue, elle a été élue à l'Académie française et est entrée au Panthéon en 2018.",
        conseil: "Simone Veil est une figure emblématique à absolument connaître. Elle incarne à la fois la mémoire de la Shoah, les droits des femmes et la construction européenne — trois valeurs fondamentales."
      },
      {
        q: "Avortement — Êtes-vous d'accord ?",
        r: "Oui, je suis favorable au droit à l'avortement. C'est un droit fondamental des femmes à disposer de leur corps, reconnu par la loi française depuis 1975 grâce à Simone Veil. En 2024, ce droit a été inscrit dans la Constitution française, ce qui témoigne de son importance pour la République.",
        conseil: "Réponse d'adhésion sans ambiguïté attendue. L'inscription de l'IVG dans la Constitution en 2024 est un élément d'actualité fort à mentionner si vous le connaissez."
      },
      
      {
        q: "Que pense votre famille de votre demande de nationalité française ?",
        r: "Question ouverte — parlez du soutien ou de la compréhension de votre famille, qu'elle soit en France ou dans votre pays d'origine.",
        conseil: "Montrez que votre décision est mûrement réfléchie et personnelle. Si votre famille à l'étranger ne comprend pas toujours, expliquez que votre vie est en France et que c'est votre choix assumé."
      },

      {
        q: "Comment vivez-vous le fait d'être étranger(e) dans le contexte géopolitique actuel ?",
        r: "Question ouverte et délicate — exprimez clairement votre position en distinguant votre identité personnelle de la politique de votre pays d'origine, et montrez que votre demande de nationalité française s'inscrit dans un choix de valeurs.",
        conseil: "Soyez direct(e) et courageux(se) : montrez que vous adhérez aux valeurs de démocratie et de paix défendues par la France. Ne restez pas dans le vague."
      },

      {
        q: "Soutenez-vous la politique de la France vis-à-vis de votre pays d'origine ?",
        r: "Question ouverte — exprimez un soutien de principe aux positions françaises tout en pouvant nuancer sur les approches diplomatiques.",
        conseil: "Ne vous mettez pas en porte-à-faux avec la politique étrangère française. Montrez que vous comprenez et partagez les grandes lignes de la position française, qui est de défendre la souveraineté et le droit international."
      },

      {
        q: "Pensez-vous que la diplomatie française est adaptée ?",
        r: "Question ouverte de réflexion — vous pouvez saluer l'engagement de la France pour la paix et le dialogue, tout en reconnaissant la complexité de la situation.",
        conseil: "Question de nuance. Ne critiquez pas frontalement la diplomatie française. Vous pouvez dire que la France joue un rôle important pour tenter de préserver le dialogue tout en soutenant l'Ukraine, et que la situation est complexe."
      },
      {
        q: "Suivez-vous l'actualité ?",
        r: "Question ouverte — précisez quels médias vous suivez (presse française, radio, télévision), à quelle fréquence et quels sujets vous intéressent.",
        conseil: "Citez des médias français concrets : France Inter, Le Monde, Sud Ouest, France 3 Nouvelle-Aquitaine. Cela montre que vous vous informez en français et êtes ancrée dans l'actualité locale et nationale."
      },
      {
        q: "Quels sont les sujets d'actualité dont on parle actuellement ?",
        r: "Question d'actualité — préparez 3 à 4 sujets majeurs du moment avant votre entretien : situation géopolitique, actualité politique française, sujets sociaux, actualité locale girondine.",
        conseil: "Préparez cette question comme un exercice à part entière. La semaine avant l'entretien, lisez la presse locale (Sud Ouest) et nationale. Avoir un avis personnel sur un sujet est un plus."
      },
      {
        q: "Connaissez-vous les candidats aux élections municipales à Bordeaux ?",
        r: "Question d'actualité locale — renseignez-vous sur les candidats en lice et les grandes lignes de leur programme avant votre entretien.",
        conseil: "Cette question évalue votre intégration locale concrète. Connaître le nom du maire actuel de Bordeaux et des principaux candidats montre que vous vous sentez concernée par la vie de votre ville. Consultez Sud Ouest ou bordeaux.fr pour vous préparer."
      }
    ]
  },   

  {
    region: "Île-de-France",
    prefecture: "Paris (75)",
    icon: "🗼",
    description: "La préfecture de Paris est connue pour des entretiens approfondis sur les valeurs républicaines et l'intégration professionnelle.",
    questions: [

      {
        q: "Pourquoi avez-vous choisi la France plutôt qu'un autre pays ?",
        r: "Question ouverte — évoquez ce qui vous a attiré vers la France : la langue, la culture, des études, un projet de vie, des valeurs partagées.",
        conseil: "Allez au-delà des raisons pratiques. Parler d'un attachement à la culture française, à ses valeurs ou à sa langue est toujours bien perçu. Montrez que c'était un choix réfléchi, pas un hasard."
      },
      {
        q: "Comment se passe votre vie professionnelle en France ? Votre travail vous épanouit-il ?",
        r: "Question ouverte — décrivez votre poste, votre environnement de travail, vos collègues, et ce que vous appréciez dans votre activité professionnelle.",
        conseil: "Montrez que vous êtes bien intégré(e) professionnellement. Parlez de vos collègues, de l'ambiance, de ce que ce travail vous apporte. L'épanouissement professionnel est un signe fort d'intégration."
      },
      {
        q: "Quelle est la profession de votre conjoint(e) ? Dans quel domaine et où travaille-t-il/elle ?",
        r: "Question ouverte — répondez précisément : secteur d'activité, type de poste, lieu de travail.",
        conseil: "Répondez simplement et avec précision. Cette question vise à vérifier la cohérence et la réalité de votre vie commune en France. Soyez concret(e)."
      },
      {
        q: "Quelle différence percevez-vous entre la liberté d'expression dans votre pays d'origine et en France ?",
        r: "En France, la liberté d'expression est un droit fondamental garanti par la Constitution et la Déclaration des droits de l'homme de 1789. Elle protège le droit de critiquer le gouvernement, les institutions et les idées, y compris religieuses. Cette liberté a des limites légales : appels à la haine, diffamation, négationnisme sont interdits.",
        conseil: "Valorisez la liberté d'expression française sans dénigrer violemment votre pays d'origine. Montrez que vous appréciez concrètement cette liberté dans votre vie quotidienne en France."
      },
      {
        q: "Pratiquez-vous une religion ? Si oui, comment vivez-vous votre foi dans le cadre de la laïcité française ?",
        r: "Question ouverte — répondez honnêtement. Si vous pratiquez une religion, précisez que vous le faites dans la sphère privée, dans le respect du principe de laïcité.",
        conseil: "L'agent ne juge pas votre croyance mais évalue votre rapport à la laïcité. Montrez que vous comprenez la distinction entre sphère privée (où la religion est libre) et sphère publique (où l'État est neutre)."
      },
      {
        q: "Quelle est la devise de la République française ? Pouvez-vous l'illustrer par un exemple concret de votre vie ?",
        r: "La devise est Liberté, Égalité, Fraternité. Par exemple : la Liberté, c'est pouvoir exprimer mon opinion sans crainte ; l'Égalité, c'est avoir accès aux mêmes droits que n'importe quel citoyen ; la Fraternité, c'est la solidarité que j'ai ressentie à mon arrivée grâce aux services publics et aux associations.",
        conseil: "L'exemple concret est la clé de cette question. Préparez à l'avance un exemple personnel pour chacune des trois valeurs. Cela montre que ces principes ne sont pas abstraits pour vous."
      },
      {
        q: "La laïcité existe-t-elle dans votre pays d'origine ? Qu'apporte selon vous la laïcité à la vie en France ?",
        r: "Question ouverte — comparez objectivement la place de la religion dans l'espace public de votre pays d'origine avec le modèle français. Exprimez ce que la laïcité vous apporte concrètement : liberté de croire ou de ne pas croire, égalité entre tous les citoyens quelle que soit leur foi.",
        conseil: "Ne critiquez pas frontalement votre pays d'origine. Mettez en valeur ce que la laïcité française vous apporte positivement : une neutralité de l'État qui protège tout le monde également."
      },
      {
        q: "Avez-vous un restaurant préféré à Paris ? Qu'est-ce qui vous y plaît particulièrement ?",
        r: "Question ouverte — citez un restaurant réel que vous fréquentez, votre plat favori, et ce que vous appréciez dans l'expérience : l'ambiance, la cuisine, le quartier.",
        conseil: "Question détendue qui vise à confirmer votre ancrage dans la vie parisienne. Ayez un nom précis en tête — un restaurant que vous connaissez vraiment. Cela rend l'échange naturel et montre que Paris est vraiment votre ville."
      },
      {
        q: "Pouvez-vous me parler d'un sujet d'actualité qui vous a récemment marqué(e) ?",
        r: "Question d'actualité — préparez 2 à 3 sujets récents : actualité politique française, internationale, ou locale parisienne. Ayez un avis personnel argumenté sur au moins l'un d'eux.",
        conseil: "Lisez la presse française (Le Monde, Le Figaro, France Inter) dans les jours précédant l'entretien. Choisir un sujet sur lequel vous avez un vrai avis montre que vous êtes une citoyenne active et informée."
      },      

{
        q: "Pouvez-vous me parler de votre entourage en France ?",
        r: "Question ouverte — décrivez votre cercle : famille, amis, collègues, voisins. Montrez la diversité et la richesse de vos liens sociaux en France.",
        conseil: "Montrez un ancrage social réel et varié. Des liens avec des Français de différents horizons est perçu comme un signe fort d'intégration."
      },
      {
        q: "Pouvez-vous me raconter votre parcours depuis votre arrivée en France ?",
        r: "Question ouverte — retracez chronologiquement votre vie en France : arrivée, études ou formation, vie professionnelle, vie personnelle et familiale.",
        conseil: "Préparez un récit fluide et cohérent. L'agent cherche à comprendre votre trajectoire et votre progression en France. Mettez en avant les étapes qui montrent votre intégration."
      },
      {
        q: "Quelle est votre profession ? Pouvez-vous me décrire votre activité ?",
        r: "Question ouverte — décrivez précisément votre métier, vos missions, votre environnement de travail et ce que vous appréciez dans votre activité.",
        conseil: "Soyez précis(e) et enthousiaste. Montrez que vous exercez une activité qui vous intègre dans la société française et que vous y contribuez."
      },
      {
        q: "Que représentent pour vous les valeurs de la France ? Qu'est-ce que la IVe République ?",
        r: "Les valeurs fondamentales de la France sont la liberté, l'égalité et la fraternité, auxquelles s'ajoutent la laïcité et la démocratie. La IVe République (1946-1958) a succédé à la Libération. Elle a instauré le droit de vote des femmes et construit l'État-providence, mais a été fragilisée par une instabilité gouvernementale chronique et la guerre d'Algérie, ce qui a conduit à l'avènement de la Ve République.",
        conseil: "Distinguez bien les valeurs (intemporelles) de l'histoire institutionnelle. Sur la IVe République, retenez : 1946-1958, droit de vote des femmes, instabilité politique, remplacée par la Ve sous de Gaulle."
      },
      {
        q: "Le mariage pour tous existe-t-il dans votre pays d'origine ? Comment cela se passe-t-il pour les personnes homosexuelles là-bas ?",
        r: "Question ouverte — comparez objectivement la situation dans votre pays d'origine avec le cadre français, sans jugement excessif. Exprimez votre adhésion au principe d'égalité des droits garanti en France.",
        conseil: "Montrez que vous mesurez la chance de vivre dans un pays où l'égalité des droits est garantie par la loi. Restez factuel(le) sur votre pays d'origine sans tomber dans le dénigrement."
      },
      {
        q: "Avez-vous des amis homosexuels dans votre pays d'origine ? Comment vivent-ils leur quotidien ?",
        r: "Question ouverte — répondez honnêtement sur la réalité vécue par les personnes homosexuelles dans votre pays d'origine, en comparaison avec la protection offerte par la loi française.",
        conseil: "Cette question évalue votre sensibilité concrète à l'égalité. Soyez naturel(le) et factuel(le). Montrez que vous comprenez la valeur de la protection légale qu'offre la France."
      },
      {
        q: "La peine de mort existe-t-elle dans votre pays d'origine ? Quel est votre avis sur ce sujet ?",
        r: "Question ouverte — indiquez si la peine de mort est en vigueur dans votre pays d'origine et exprimez votre adhésion à l'abolition telle qu'elle existe en France depuis 1981.",
        conseil: "Comparez sans dénigrer excessivement. L'important est de montrer que vous partagez la valeur française : l'État ne peut pas avoir le droit de vie et de mort sur ses citoyens."
      },
      {
        q: "Pouvez-vous citer un homme et une femme français(e) connus et expliquer pourquoi ils sont importants ?",
        r: "Parmi les figures incontournables — Femmes : Simone Veil (droits des femmes, Shoah), Marie Curie (double prix Nobel), Simone de Beauvoir (féminisme). Hommes : Victor Hugo (littérature, engagement social), Charles de Gaulle (Résistance, Ve République), Albert Camus (littérature, philosophie).",
        conseil: "Choisissez une femme et un homme que vous admirez sincèrement et préparez 2-3 phrases sur chacun. Évitez les figures purement people — privilégiez des personnalités qui incarnent des valeurs."
      },
      {
        q: "Pouvez-vous me parler des rois de la monarchie absolue en France ?",
        r: "La monarchie absolue en France a atteint son apogée avec Louis XIV (le Roi-Soleil, 1643-1715), qui a incarné la toute-puissance royale avec la formule 'L'État c'est moi' et construit Versailles. Avant lui, Louis XIII et Richelieu ont centralisé le pouvoir. Louis XV et Louis XVI ont suivi, ce dernier étant guillotiné lors de la Révolution de 1789 qui a mis fin à la monarchie absolue.",
        conseil: "Louis XIV est le personnage central à maîtriser. Retenez : Versailles, 'L'État c'est moi', le Roi-Soleil. Louis XVI et la Révolution de 1789 sont le point final de cette période."
      },
      {
        q: "Avez-vous de la famille en France ? Qui de vos proches vit ici ?",
        r: "Question ouverte — décrivez les membres de votre famille présents en France : leur situation, vos relations, la fréquence de vos rencontres.",
        conseil: "Avoir de la famille en France renforce votre ancrage. Si vous n'en avez pas, mettez en avant vos liens amicaux et professionnels qui constituent votre réseau de proximité."
      },
      {
        q: "Retournez-vous régulièrement dans votre pays d'origine ? À quelle fréquence ?",
        r: "Question ouverte — indiquez la fréquence et les raisons de vos voyages (famille, démarches). Précisez que votre centre de vie est établi en France.",
        conseil: "Des voyages ponctuels pour voir la famille sont tout à fait normaux et acceptés. L'important est de montrer que vous revenez chez vous, en France, et que votre vie est construite ici."
      },
      {
        q: "Quel est votre avis sur les attentats de 2015, Charlie Hebdo et la liberté de la presse satirique ?",
        r: "Les attentats de janvier 2015 contre Charlie Hebdo et de novembre 2015 ont été un traumatisme national profond. La liberté de la presse et la presse satirique sont des piliers de la démocratie française. Charlie Hebdo incarne le droit de caricaturer, y compris les religions — un droit fondamental en France. Ces attaques contre la liberté d'expression ont suscité une mobilisation historique : 'Je suis Charlie'.",
        conseil: "Condamnez les attentats sans ambiguïté. Défendez clairement la liberté de la presse satirique et le droit à la caricature comme valeur française fondamentale, même si certaines caricatures peuvent choquer."
      },
      {
        q: "Que dit la loi de 2004 sur la laïcité à l'école ? Quel est votre avis ?",
        r: "La loi du 15 mars 2004 interdit le port de signes religieux ostensibles dans les établissements scolaires publics (voile islamique, grande croix, kippa...). Elle vise à garantir la neutralité religieuse dans l'espace scolaire et à protéger les élèves de toute pression communautaire. L'école républicaine doit être un espace d'égalité entre tous les élèves.",
        conseil: "Montrez que vous comprenez et adhérez à l'esprit de cette loi : protéger l'école comme espace neutre et égalitaire. Évitez toute réserve sur ce sujet — c'est une loi qui fait consensus dans les valeurs républicaines."
      },
      {
        q: "Faites-vous partie d'une association ou d'un collectif en France ?",
        r: "Question ouverte — parlez de vos engagements associatifs : sport, culture, aide aux devoirs, quartier, syndicat, parents d'élèves...",
        conseil: "Toute forme d'engagement compte, même modeste. La vie associative est très valorisée en France comme signe d'intégration et de participation à la vie collective. Si vous n'êtes dans aucune association, mentionnez un engagement informel dans votre quartier ou école."
      },
      {
        q: "Irez-vous voter lorsque vous serez française ?",
        r: "Oui, absolument. Voter est pour moi à la fois un droit fondamental et un devoir civique. C'est précisément l'une des raisons pour lesquelles je souhaite devenir française : participer pleinement à la vie démocratique et avoir mon mot à dire sur l'avenir du pays dans lequel j'ai choisi de construire ma vie.",
        conseil: "Répondez avec conviction et enthousiasme. Hésiter ou minimiser sur ce sujet serait très mal perçu. Le vote est le symbole même de l'appartenance citoyenne."
      },
      
{
        q: "Êtes-vous marié(e) ou en couple ? Pouvez-vous me parler de votre situation familiale ?",
        r: "Question ouverte — décrivez votre situation : marié(e), pacsé(e), en couple, célibataire. Si vous êtes en couple, parlez brièvement de votre conjoint(e) et de votre vie commune.",
        conseil: "Répondez naturellement et avec précision. La cohérence entre votre situation familiale et votre dossier est importante. Montrez que votre vie de famille est ancrée en France."
      },
      {
        q: "Avez-vous des enfants ? Envisagez-vous d'en avoir prochainement ?",
        r: "Question ouverte — répondez simplement. Si vous avez des enfants, parlez de leur scolarité et de leur intégration en France. Si vous envisagez d'en avoir, montrez votre projet de vie en France.",
        conseil: "L'école française et l'éducation républicaine sont des sujets valorisés. Si vos enfants sont scolarisés en France, mentionnez-le comme un ancrage fort."
      },
      {
        q: "Où vivent vos parents et votre famille proche ?",
        r: "Question ouverte — indiquez où résident vos proches : en France ou à l'étranger, et décrivez la nature de vos liens avec eux.",
        conseil: "Avoir de la famille en France renforce votre ancrage. Si votre famille est à l'étranger, mettez en avant vos liens sociaux et amicaux en France qui constituent votre réseau de proximité."
      },
      {
        q: "Quelle est la profession de vos parents dans votre pays d'origine ?",
        r: "Question ouverte — décrivez brièvement l'activité professionnelle de vos parents.",
        conseil: "Question anodine qui vise à mieux vous connaître. Répondez simplement et naturellement."
      },
      {
        q: "Avez-vous de la famille restée dans votre pays d'origine ?",
        r: "Question ouverte — indiquez quels membres de votre famille vivent encore dans votre pays d'origine et la fréquence de vos contacts avec eux.",
        conseil: "Avoir de la famille à l'étranger est normal et attendu. L'important est de montrer que malgré ces liens, votre centre de vie et votre projet sont solidement établis en France."
      },
      {
        q: "Qui est le maire de Paris et qui est le maire de votre département ?",
        r: "Question d'actualité — renseignez-vous avant l'entretien sur le maire de Paris et le maire ou président du conseil départemental de votre lieu de résidence.",
        conseil: "Connaître les élus locaux montre que vous suivez la vie politique de votre territoire. Consultez le site de votre mairie ou la presse locale dans les jours précédant l'entretien."
      },
      {
        q: "Quelles activités pratiquez-vous avec vos amis ?",
        r: "Question ouverte — parlez de vos loisirs partagés : sorties culturelles, sport, restaurants, voyages, activités associatives.",
        conseil: "Mentionnez des activités ancrées dans la vie française : visites de musées, sorties au cinéma, randonnées, événements locaux. Cela illustre concrètement votre intégration sociale."
      },
      {
        q: "Quelle langue utilisez-vous au travail et à la maison ?",
        r: "Question ouverte — précisez la place du français dans votre quotidien professionnel et personnel.",
        conseil: "Le français comme langue principale du quotidien est un signe fort d'intégration. Si vous parlez une autre langue à la maison, précisez que le français reste votre langue de communication principale avec l'extérieur."
      },
      {
        q: "Avez-vous déjà bénéficié des prestations de la Sécurité sociale ?",
        r: "La Sécurité sociale est le système de protection sociale français créé en 1945. Elle couvre la santé, la maternité, les accidents du travail et la retraite. En tant que résidente en France, j'ai accès à ces prestations et j'y contribue par mes cotisations.",
        conseil: "Montrez que vous connaissez et utilisez le système social français, et que vous y contribuez. C'est un signe d'appartenance à la communauté nationale."
      },
      {
        q: "Quelles villes avez-vous visitées en France et dans les pays voisins ?",
        r: "Question ouverte — citez des villes françaises et européennes que vous avez visitées, en mentionnant ce qui vous a marqué.",
        conseil: "Préparez quelques exemples précis avec une anecdote ou une impression. Cela montre votre curiosité pour la France et l'Europe, et ancre votre vie dans un espace culturel français."
      },
      {
        q: "Quels films avez-vous récemment vus au cinéma ?",
        r: "Question ouverte — citez un ou deux films récents vus en salle, idéalement des films français ou en français.",
        conseil: "Avoir vu des films français montre une pratique culturelle intégrée. Si vous voyez des films en version originale française, mentionnez-le. C'est un détail qui compte."
      },
      {
        q: "Qu'est-ce qui vous déplaît en France ? Y a-t-il des aspects de la société française que vous trouvez difficiles ?",
        r: "Question ouverte — exprimez une critique constructive et mesurée : la bureaucratie, les inégalités persistantes, le rythme administratif... Montrez que vous aimez la France tout en ayant un regard lucide.",
        conseil: "Ne répondez pas 'rien, tout est parfait' — ce serait peu crédible. Choisissez une critique constructive et bienveillante. Cela montre que vous êtes intégré(e) et que vous vous sentez libre de vous exprimer, comme tout citoyen."
      },
      {
        q: "Quelle est, selon vous, la place de la femme dans la société française aujourd'hui ?",
        r: "La France a fait d'immenses progrès en matière d'égalité : droit de vote en 1944, loi Veil en 1975, parité en politique, lois contre les violences faites aux femmes. Cependant, des inégalités persistent : écarts de salaires, sous-représentation dans certains secteurs, violences conjugales. La République continue de progresser vers l'égalité réelle.",
        conseil: "Montrez que vous avez un regard à la fois positif et lucide. Valoriser les avancées tout en reconnaissant les défis restants est la posture la plus mature et appréciée."
      },
      {
        q: "Qu'est-ce que la loi relative à l'IVG et pourquoi a-t-elle été inscrite dans la Constitution ?",
        r: "La loi Veil de 1975 a légalisé l'interruption volontaire de grossesse en France, permettant aux femmes de disposer librement de leur corps. En mars 2024, la France est devenue le premier pays au monde à inscrire la liberté de recourir à l'IVG dans sa Constitution, afin de protéger ce droit de tout futur retour en arrière législatif.",
        conseil: "Mentionner l'inscription dans la Constitution en 2024 est un élément fort et récent à valoriser. Cela montre que vous suivez l'actualité et que vous comprenez l'importance symbolique de cet acte."
      },
      {
        q: "En quelle année le principe de laïcité a-t-il été instauré en France ?",
        r: "La laïcité a été instaurée par la loi de séparation des Églises et de l'État du 9 décembre 1905. Elle a été réaffirmée dans la Constitution de 1958 qui définit la France comme une 'République laïque'.",
        conseil: "Retenez deux dates clés : 1905 pour la loi fondatrice et 1958 pour la constitutionnalisation. Le 9 décembre est parfois célébré comme la 'journée de la laïcité'."
      },
      {
        q: "Qu'est-ce que le pouvoir législatif et quel est son rôle ?",
        r: "Le pouvoir législatif est exercé par le Parlement, composé de l'Assemblée nationale (577 députés élus au suffrage universel direct) et du Sénat (348 sénateurs élus au suffrage indirect). Il vote les lois, adopte le budget de l'État et contrôle l'action du gouvernement.",
        conseil: "Distinguez bien les deux chambres et leurs modes d'élection respectifs. Insistez sur les trois fonctions : voter les lois, voter le budget, contrôler le gouvernement."
      },
      {
        q: "Pour quelle durée le président de la République est-il élu et selon quel mode de scrutin ?",
        r: "Le président de la République est élu pour un mandat de 5 ans, appelé quinquennat, au suffrage universel direct à deux tours. Il est rééligible une seule fois consécutivement. Le quinquennat a remplacé le septennat (7 ans) depuis la réforme constitutionnelle de 2000.",
        conseil: "Retenez : 5 ans, suffrage universel direct, deux tours, une seule réélection possible. Mentionner le passage du septennat au quinquennat en 2000 montre une connaissance approfondie."
      },
      {
        q: "Qui a instauré la Cinquième République ?",
        r: "La Ve République a été instaurée par le général Charles de Gaulle en 1958, en réponse à la crise politique et institutionnelle provoquée par la guerre d'Algérie. La nouvelle Constitution a été approuvée par référendum le 28 septembre 1958.",
        conseil: "Liez toujours la Ve République à de Gaulle, à 1958 et à la crise algérienne. Ces trois éléments forment un ensemble cohérent facile à retenir."
      },
      {
        q: "Pouvez-vous citer dans l'ordre les présidents de la Cinquième République ?",
        r: "Les présidents de la Ve République dans l'ordre : Charles de Gaulle (1959-1969), Georges Pompidou (1969-1974), Valéry Giscard d'Estaing (1974-1981), François Mitterrand (1981-1995), Jacques Chirac (1995-2007), Nicolas Sarkozy (2007-2012), François Hollande (2012-2017), Emmanuel Macron (2017-...).",
        conseil: "Mémorisez cette liste chronologique — elle est souvent demandée. Une astuce : De Gaulle, Pompidou, Giscard, Mitterrand, Chirac, Sarkozy, Hollande, Macron. Vérifiez avant l'entretien si un nouveau président est en fonction."
      },
      {
        q: "Quels sont les symboles de la République française ?",
        r: "Les symboles de la République française sont : le drapeau tricolore bleu, blanc, rouge ; La Marseillaise (hymne national) ; la devise Liberté, Égalité, Fraternité ; Marianne (symbole de la République figurant sur les timbres et dans les mairies) ; et le 14 juillet comme fête nationale.",
        conseil: "Cinq symboles à connaître : drapeau, hymne, devise, Marianne, fête nationale. Vous pouvez ajouter que la cocarde tricolore date de la Révolution française pour montrer votre culture générale."
      },
      {
        q: "Pouvez-vous citer un roi de France ? Comment Louis XIV était-il également surnommé ?",
        r: "Parmi les rois de France : Clovis (premier roi chrétien), Charlemagne, Saint Louis, François Ier, Henri IV, Louis XIII, Louis XIV, Louis XVI. Louis XIV était surnommé le Roi-Soleil en raison de son règne fastueux centré sur sa personne, symbolisé par la construction du château de Versailles.",
        conseil: "Louis XIV et son surnom 'Roi-Soleil' sont incontournables. Associez-le toujours à Versailles et à la formule 'L'État c'est moi' pour compléter le tableau."
      },
      {
        q: "Pouvez-vous citer un auteur français et un scientifique français ?",
        r: "Parmi les grands auteurs : Victor Hugo (Les Misérables, Notre-Dame de Paris), Molière (théâtre classique), Albert Camus (L'Étranger), Simone de Beauvoir (Le Deuxième Sexe). Parmi les grands scientifiques : Marie Curie (double prix Nobel, radioactivité), Louis Pasteur (pasteurisation, vaccins), René Descartes (philosophie et mathématiques).",
        conseil: "Choisissez un nom dans chaque catégorie et associez-le à une œuvre ou une découverte. Marie Curie et Victor Hugo sont les choix les plus sûrs et les plus valorisés."
      },
      {
        q: "À quelle date s'est terminée la Première Guerre mondiale ?",
        r: "La Première Guerre mondiale s'est terminée le 11 novembre 1918, avec l'armistice signé dans la forêt de Compiègne. Cette date est célébrée chaque année en France comme jour férié et de commémoration nationale.",
        conseil: "Retenez : 11 novembre 1918. Cette date est un jour férié en France — le rappeler montre que vous connaissez le calendrier civique français."
      },
      {
        q: "À quelle date s'est terminée la Seconde Guerre mondiale ?",
        r: "La Seconde Guerre mondiale s'est terminée en Europe le 8 mai 1945 avec la capitulation de l'Allemagne nazie, célébrée comme le jour de la Victoire. En Asie, elle s'est achevée le 2 septembre 1945 avec la capitulation du Japon.",
        conseil: "Le 8 mai 1945 est également un jour férié en France. Faire ce lien montre que vous connaissez le calendrier civique. Distinguer la fin en Europe et en Asie est un plus apprécié."
      },
      {
        q: "À quelle date a débuté la Révolution française et quelle en fut la durée ?",
        r: "La Révolution française a débuté en 1789, avec la prise de la Bastille le 14 juillet. Elle s'étend généralement jusqu'en 1799, avec le coup d'État de Napoléon Bonaparte, soit une durée d'environ 10 ans.",
        conseil: "Retenez : 1789-1799, soit 10 ans. Le 14 juillet 1789 est la date symbolique fondatrice, aujourd'hui fête nationale française."
      },
      {
        q: "Quels événements majeurs ont eu lieu en 1789 ?",
        r: "En 1789 : convocation des États généraux (mai), serment du Jeu de Paume (juin), prise de la Bastille le 14 juillet, abolition des privilèges dans la nuit du 4 août, et adoption de la Déclaration des droits de l'homme et du citoyen le 26 août.",
        conseil: "Cinq événements clés à retenir. La prise de la Bastille et la Déclaration des droits de l'homme sont les deux plus importants. Le 26 août 1789 est une date fondatrice des droits fondamentaux."
      },
      {
        q: "Quel était le rôle de la Bastille avant sa démolition ?",
        r: "La Bastille était une forteresse médiévale utilisée comme prison d'État sous l'Ancien Régime, symbole de l'arbitraire royal et de l'enfermement sans jugement. Sa prise le 14 juillet 1789 par le peuple parisien est devenue le symbole du renversement de la tyrannie et de l'avènement de la liberté.",
        conseil: "Insistez sur le symbolisme : la Bastille ne représentait pas seulement une prison, mais l'oppression de l'Ancien Régime. Sa destruction symbolise la naissance de la liberté — c'est pourquoi le 14 juillet est la fête nationale."
      },
      {
        q: "Qui était Napoléon Bonaparte ?",
        r: "Napoléon Bonaparte (1769-1821) est l'une des figures les plus importantes de l'histoire française. Général brillant issu de la Révolution, il a pris le pouvoir par un coup d'État en 1799, est devenu empereur des Français en 1804. Il a réorganisé la France avec le Code civil (1804), le Conseil d'État, la Légion d'honneur et le lycée. Vaincu à Waterloo en 1815, il est mort en exil à Sainte-Hélène.",
        conseil: "Retenez les éléments clés : général de la Révolution, Premier consul (1799), Empereur (1804), Code civil, Waterloo (1815). Le Code civil est son héritage le plus durable — il est encore la base du droit français."
      },
      {
        q: "Combien de départements compte la France ?",
        r: "La France compte 101 départements : 96 en métropole (dont la Corse) et 5 départements et régions d'outre-mer (DROM) : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte.",
        conseil: "Retenez le chiffre 101 et les 5 DROM. Une erreur fréquente est de dire 95 ou 96 en oubliant les outre-mer. Avoir ce chiffre précis montre votre sérieux."
      },
      {
        q: "Pouvez-vous citer les départements et régions d'outre-mer ?",
        r: "Les 5 départements et régions d'outre-mer (DROM) sont : la Guadeloupe (971), la Martinique (972), la Guyane (973), La Réunion (974) et Mayotte (976). Ils font partie intégrante de la République française et de l'Union européenne.",
        conseil: "Mémorisez les 5 noms dans l'ordre numérique : Guadeloupe, Martinique, Guyane, Réunion, Mayotte. Préciser qu'ils font partie de l'UE montre une connaissance approfondie."
      },
      {
        q: "Combien de pays compte l'Union européenne et quel pays l'a récemment quittée ?",
        r: "L'Union européenne compte actuellement 27 États membres depuis le retrait du Royaume-Uni. Le Brexit, officialisé le 31 janvier 2020, a fait du Royaume-Uni le premier et seul pays à quitter l'Union européenne.",
        conseil: "Retenez : 27 membres et Brexit (Royaume-Uni, 2020). Ces deux éléments vont ensemble et sont faciles à mémoriser."
      },
      {
        q: "Pouvez-vous présenter quelques spécialités culinaires françaises ?",
        r: "La France est mondialement reconnue pour sa gastronomie, inscrite au patrimoine culturel immatériel de l'UNESCO depuis 2010. Parmi ses spécialités : le pain et la baguette, les fromages (plus de 300 variétés), les vins, la bouillabaisse, le cassoulet, le bœuf bourguignon, les crêpes bretonnes, le foie gras, la quiche lorraine et les macarons.",
        conseil: "Mentionnez l'inscription au patrimoine de l'UNESCO — c'est un élément de fierté nationale. Citez au moins 4-5 spécialités régionales variées pour montrer que vous connaissez la diversité culinaire française au-delà de Paris."
      },      

    ]
  },


  {
    region: "Auvergne-Rhône-Alpes",
    prefecture: "Lyon (69)",
    icon: "🦁",
    description: "Lyon est connue pour des entretiens équilibrés entre culture générale et parcours personnel.",
    questions: [
      {
        q: "Que savez-vous de l'histoire de Lyon ?",
        r: "Lyon est la 3e ville de France, capitale des Gaules à l'époque romaine, berceau de la résistance lyonnaise pendant la Seconde Guerre mondiale, capitale mondiale de la gastronomie. Connue pour la Fête des Lumières chaque 8 décembre.",
        conseil: "Si vous habitez Lyon ou la région, montrez que vous connaissez et appréciez votre ville. C'est un signe d'intégration fort."
      },
      {
        q: "Qu'est-ce que la Résistance française ?",
        r: "Mouvement qui s'est opposé à l'occupation nazie et au régime de Vichy pendant la Seconde Guerre mondiale (1940-1944). Jean Moulin en fut une figure emblématique, particulièrement lié à Lyon.",
        conseil: "À Lyon, la Résistance est un sujet particulièrement sensible et important. Mentionnez Jean Moulin si possible."
      },
    ]
  },

  {
    region: "Provence-Alpes-Côte d'Azur",
    prefecture: "Marseille (13)",
    icon: "⚓",
    description: "À Marseille, l'accent est souvent mis sur la connaissance de la région et l'intégration dans une ville multiculturelle.",
    questions: [
      {
        q: "Marseille est une ville très diverse, comment vivez-vous cette diversité ?",
        r: "Question ouverte — exprimez une vision positive de la diversité dans le cadre des valeurs républicaines : égalité de tous, fraternité, respect mutuel.",
        conseil: "Ne parlez pas de communautés séparées. Insistez sur ce qui unit plutôt que ce qui divise. La République est une et indivisible."
      },
      {
        q: "Que représente la Méditerranée pour la France ?",
        r: "La Méditerranée est au cœur de l'histoire française et européenne. Elle représente un carrefour de civilisations, d'échanges commerciaux et culturels. Marseille, fondée il y a 2600 ans, est le symbole de ces échanges.",
        conseil: "Valorisez l'histoire de Marseille et son ouverture sur le monde tout en ancrant la réponse dans les valeurs françaises."
      },
      {
        q: "Connaissez-vous La Marseillaise ?",
        r: "C'est l'hymne national français, composé par Rouget de Lisle en 1792 à Strasbourg. Elle a été baptisée 'La Marseillaise' car les volontaires marseillais la chantaient en marchant vers Paris. Elle est devenue hymne national en 1795.",
        conseil: "À Marseille cette question est quasi incontournable ! Connaître l'histoire de l'hymne est un plus."
      },

      {
        q: "Avez-vous de la famille proche en France ?",
        r: "Question ouverte — décrivez les membres de votre famille présents en France : leur situation, vos relations, la fréquence de vos rencontres.",
        conseil: "Avoir de la famille en France renforce votre ancrage. Si vous n'en avez pas, mettez en avant vos liens amicaux et professionnels qui constituent votre réseau de proximité."
      },
      {
        q: "Faites-vous partie d'une association ? Si oui, laquelle et depuis quand ?",
        r: "Question ouverte — parlez de vos engagements associatifs : sport, culture, aide aux devoirs, quartier, parents d'élèves...",
        conseil: "Toute forme d'engagement compte, même modeste. La vie associative est très valorisée en France comme signe d'intégration et de participation à la vie collective. Si vous n'êtes dans aucune association, mentionnez un engagement informel dans votre quartier."
      },
      {
        q: "Avez-vous encore de la famille dans votre pays d'origine ?",
        r: "Question ouverte — indiquez quels membres de votre famille vivent encore dans votre pays d'origine et la fréquence de vos contacts avec eux.",
        conseil: "Avoir de la famille à l'étranger est normal et attendu. L'important est de montrer que malgré ces liens, votre centre de vie et votre projet sont solidement établis en France."
      },
      {
        q: "À quelle fréquence retournez-vous dans votre pays d'origine ?",
        r: "Question ouverte — indiquez la fréquence et les raisons de vos voyages (famille, démarches administratives). Précisez que votre centre de vie est établi en France.",
        conseil: "Des voyages ponctuels pour voir la famille sont tout à fait normaux et acceptés. L'important est de montrer que vous revenez chez vous, en France, et que votre vie est construite ici."
      },
      {
        q: "Quelles activités faites-vous avec votre conjoint(e) ?",
        r: "Question ouverte — parlez de vos loisirs partagés : sorties culturelles, sport, restaurants, voyages, activités de plein air.",
        conseil: "Mentionnez des activités ancrées dans la vie locale marseillaise et provençale : balades sur le littoral, visites du Vieux-Port, randonnées dans les calanques. Cela montre un ancrage concret dans votre région."
      },
      {
        q: "Que représente la Fraternité pour vous ? Comment se reflète-t-elle dans la vie quotidienne ?",
        r: "La Fraternité est le troisième pilier de la devise républicaine. Elle désigne la solidarité entre tous les membres de la nation, sans distinction d'origine, de religion ou de condition sociale. Elle se reflète concrètement dans les services publics accessibles à tous, la Sécurité sociale, les associations d'entraide, et dans les gestes du quotidien entre voisins et concitoyens.",
        conseil: "Illustrez avec un exemple personnel vécu à Marseille ou en France. La Fraternité est la valeur la plus concrète des trois — donnez un exemple tiré de votre vie, pas seulement une définition abstraite."
      },
      {
        q: "Existe-t-il une quatrième valeur républicaine en France ?",
        r: "Oui, la laïcité est souvent considérée comme une quatrième valeur fondamentale de la République, aux côtés de Liberté, Égalité et Fraternité. Elle est inscrite dans l'article 1er de la Constitution : 'La France est une République indivisible, laïque, démocratique et sociale.'",
        conseil: "La réponse attendue est la laïcité. Citer l'article 1er de la Constitution montre une connaissance approfondie et fait toujours bonne impression."
      },
      {
        q: "Êtes-vous croyant(e) ? Que pensez-vous de la laïcité en France ?",
        r: "Question ouverte — répondez honnêtement sur votre rapport à la religion, en précisant que vous le vivez dans la sphère privée, dans le respect du principe de laïcité. La laïcité garantit la liberté de croire ou de ne pas croire, tout en assurant la neutralité de l'État.",
        conseil: "L'agent ne juge pas votre croyance mais évalue votre rapport à la laïcité. Montrez clairement que vous séparez votre foi personnelle de l'espace public et que vous adhérez pleinement à ce principe."
      },
      {
        q: "Que célèbre-t-on le 14 juillet en France ?",
        r: "Le 14 juillet est la fête nationale française. Elle commémore deux événements : la prise de la Bastille le 14 juillet 1789, symbole du renversement de l'Ancien Régime, et la Fête de la Fédération du 14 juillet 1790, symbole de l'unité nationale. Elle est marquée par un défilé militaire sur les Champs-Élysées et des feux d'artifice dans toute la France.",
        conseil: "Beaucoup de candidats ne citent que la prise de la Bastille. Mentionner aussi la Fête de la Fédération de 1790 montre une connaissance approfondie et fait la différence."
      },
      {
        q: "Pouvez-vous m'expliquer ce qu'est le Parlement français et quel est son rôle ?",
        r: "Le Parlement est le pouvoir législatif de la République française. Il est composé de deux chambres : l'Assemblée nationale (577 députés élus au suffrage universel direct pour 5 ans) et le Sénat (348 sénateurs élus au suffrage indirect pour 6 ans). Ses trois missions principales sont : voter les lois, adopter le budget de l'État et contrôler l'action du gouvernement.",
        conseil: "Distinguez bien les deux chambres, leurs modes d'élection et leurs durées de mandat. Les trois missions sont le cœur de la réponse : lois, budget, contrôle."
      },
      {
        q: "Qui est l'actuel Premier ministre et qui était son prédécesseur ?",
        r: "Question d'actualité — vérifiez impérativement le nom du Premier ministre en exercice et de son prédécesseur dans les jours précédant votre entretien.",
        conseil: "Cette information change régulièrement. Consultez France Info ou Le Monde la veille de l'entretien. Connaître les deux noms montre que vous suivez l'actualité politique de près."
      },
      {
        q: "Qui était le premier président de la Ve République ?",
        r: "Le premier président de la Ve République était le général Charles de Gaulle, élu en décembre 1958. Il a exercé la présidence jusqu'en avril 1969, date à laquelle il a démissionné après l'échec d'un référendum.",
        conseil: "De Gaulle et 1958 sont indissociables. Préciser qu'il a démissionné en 1969 après un référendum montre une connaissance fine de son parcours."
      },
      {
        q: "Qui a mis en place la loi sur l'IVG et en quelle année ?",
        r: "La loi légalisant l'interruption volontaire de grossesse a été portée par Simone Veil, alors ministre de la Santé, et adoptée le 17 janvier 1975. Elle a été défendue avec courage devant une Assemblée nationale majoritairement hostile, dans un discours resté historique.",
        conseil: "Retenez : Simone Veil, 1975. Mentionner le courage de Simone Veil face à une assemblée hostile montre que vous connaissez le contexte, pas seulement la date. C'est ce qui fait la différence."
      },
      {
        q: "Pouvez-vous citer trois écrivains français ?",
        r: "Parmi les grands écrivains français : Victor Hugo (Les Misérables, Notre-Dame de Paris), Molière (Le Bourgeois gentilhomme, Le Malade imaginaire), Albert Camus (L'Étranger, La Peste), Gustave Flaubert (Madame Bovary), Simone de Beauvoir (Le Deuxième Sexe), Marcel Proust (À la recherche du temps perdu).",
        conseil: "Citez trois noms et associez chacun à au moins une œuvre. Victor Hugo est incontournable. Citer une femme comme Simone de Beauvoir ou George Sand montre une sensibilité à l'égalité culturelle."
      },
{
        q: "Que s'est-il passé le 14 juillet 1789 ?",
        r: "Le 14 juillet 1789, le peuple parisien a pris d'assaut la forteresse de la Bastille, symbole de l'oppression royale et de l'emprisonnement arbitraire. Cet événement marque le début de la Révolution française et est devenu la fête nationale française, célébrée chaque année le 14 juillet.",
        conseil: "Distinguez bien la date historique (1789) de la fête nationale (chaque 14 juillet). Préciser que la Bastille était un symbole de l'arbitraire royal, pas seulement une prison, montre une compréhension du sens profond de l'événement."
      },
      {
        q: "À quel âge la scolarité est-elle obligatoire en France ?",
        r: "En France, l'instruction est obligatoire de 3 à 16 ans depuis la loi de 2019. Elle débute à l'école maternelle (3 ans) et se termine à la fin du collège ou du lycée professionnel (16 ans). Elle peut être assurée dans un établissement scolaire ou à domicile.",
        conseil: "Retenez : 3 ans et 16 ans depuis 2019. Avant cette loi, l'obligation débutait à 6 ans. Mentionner cette évolution récente montre que vous suivez les réformes de l'éducation française."
      },
      {
        q: "Pouvez-vous citer un écrivain français et quelques-unes de ses œuvres ?",
        r: "Victor Hugo (1802-1885) est l'un des plus grands écrivains français. Il est l'auteur des Misérables, roman social sur la misère et la rédemption, et de Notre-Dame de Paris. Engagé politiquement, il a également été député et défenseur des droits humains. On peut aussi citer Albert Camus, prix Nobel de littérature, auteur de L'Étranger et La Peste.",
        conseil: "Choisissez un auteur que vous connaissez vraiment et citez au moins deux œuvres. Victor Hugo est le choix le plus sûr car il incarne à la fois la littérature et l'engagement républicain."
      },
      {
        q: "Pouvez-vous citer un chanteur et une chanteuse français(e) ?",
        r: "Parmi les grands noms de la chanson française : Édith Piaf (La Vie en rose, Non je ne regrette rien), icône mondiale de la chanson française. Charles Aznavour, Georges Brassens, Jacques Brel pour les classiques. Pour les artistes plus contemporains : Stromae, Zaz, ou Angèle qui chantent en français et rayonnent à l'international.",
        conseil: "Citez un homme et une femme comme demandé. Édith Piaf est incontournable pour la chanteuse. Associez toujours un artiste à au moins une chanson connue pour montrer que vous les connaissez vraiment."
      },
      {
        q: "Quelles sont les couleurs du drapeau français et que symbolisent-elles ?",
        r: "Le drapeau français est tricolore : bleu, blanc, rouge. Ces couleurs datent de la Révolution française. Le blanc représentait la royauté, le bleu et le rouge étaient les couleurs de Paris. Ensemble, elles symbolisent l'union du peuple et du roi, puis sont devenues le symbole de la République.",
        conseil: "L'ordre des couleurs est important : bleu, blanc, rouge de gauche à droite. Connaître l'origine révolutionnaire des couleurs montre une culture générale appréciée."
      },
      {
        q: "En quelle année la loi sur le mariage pour tous a-t-elle été adoptée ?",
        r: "La loi ouvrant le mariage aux couples de même sexe a été adoptée le 17 mai 2013, sous la présidence de François Hollande. Elle a été portée par la garde des Sceaux Christiane Taubira et a été précédée d'un vif débat national.",
        conseil: "Retenez : 2013, Hollande, Taubira. Mentionner que cette loi a suscité un grand débat national montre que vous connaissez le contexte, pas seulement la date."
      },
      {
        q: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
        r: "Les femmes ont obtenu le droit de vote en France par l'ordonnance du général de Gaulle du 21 avril 1944. Elles ont exercé ce droit pour la première fois lors des élections municipales d'avril 1945. La France a été l'un des derniers pays d'Europe occidentale à accorder ce droit aux femmes.",
        conseil: "Retenez : 1944, de Gaulle. Préciser que la France fut l'un des derniers pays d'Europe occidentale montre un regard lucide sur l'histoire des droits des femmes en France, très apprécié."
      },
      {
        q: "Quel est le nom du président de la République actuellement en fonction ?",
        r: "Question d'actualité — vérifiez le nom du président en exercice avant votre entretien.",
        conseil: "Information à vérifier impérativement avant l'entretien. Consultez France Info ou tout média français la veille. Ne pas connaître le nom du président serait très mal perçu."
      },

    ]
  },

  {
    region: "Occitanie",
    prefecture: "Toulouse (31)",
    icon: "🌹",
    description: "Toulouse privilégie les questions sur l'intégration professionnelle et la connaissance des institutions.",
    questions: [
      {
        q: "Comment fonctionne le système de sécurité sociale en France ?",
        r: "La Sécurité sociale est un système de protection sociale créé en 1945. Elle couvre les risques maladie, maternité, invalidité, vieillesse et accidents du travail. Elle est financée par les cotisations des employeurs et des salariés.",
        conseil: "Montrez que vous utilisez et appréciez le système social français. C'est un pilier de la République."
      },
      {
        q: "Qu'est-ce que le Parlement français ?",
        r: "Le Parlement est composé de deux chambres : l'Assemblée nationale (577 députés élus au suffrage universel direct) et le Sénat (348 sénateurs élus au suffrage indirect). Il vote les lois et contrôle le gouvernement.",
        conseil: "Distinguez bien les deux chambres et leur mode d'élection."
      },
      {
        q: "Avez-vous des attaches dans votre pays d'origine ?",
        r: "Question ouverte et délicate — vous pouvez avoir de la famille là-bas tout en ayant construit votre vie en France. L'important est de montrer que votre centre de vie est en France.",
        conseil: "Soyez honnête mais mettez l'accent sur votre ancrage en France : famille, travail, logement, amis."
      }
    ]
  },

  {
    region: "Grand Est",
    prefecture: "Strasbourg (67)",
    icon: "🏰",
    description: "À Strasbourg, siège du Parlement européen, les questions portent souvent sur l'Europe et l'histoire franco-allemande.",
    questions: [
      {
        q: "Que représente Strasbourg pour l'Europe ?",
        r: "Strasbourg est le siège du Parlement européen et du Conseil de l'Europe. Elle symbolise la réconciliation franco-allemande après la Seconde Guerre mondiale et est au cœur de la construction européenne.",
        conseil: "Question quasi systématique à Strasbourg. Connaître le rôle européen de la ville est indispensable."
      },
      {
        q: "Que savez-vous de la réconciliation franco-allemande ?",
        r: "Après trois guerres en 70 ans, la France et l'Allemagne se sont réconciliées après 1945. Le Traité de l'Élysée signé en 1963 par De Gaulle et Adenauer a scellé cette amitié. Elle est à la base de la construction européenne.",
        conseil: "L'Alsace a une histoire particulière entre France et Allemagne. Montrez que vous connaissez et respectez cette histoire complexe."
      },
      {
        q: "Qu'est-ce que l'Union Européenne ?",
        r: "L'UE est une union politique et économique de 27 États membres. Elle a été fondée progressivement après 1945 pour assurer la paix et la prospérité en Europe. La France en est un membre fondateur. L'euro est la monnaie commune à 20 pays membres.",
        conseil: "La France est fière de son rôle fondateur dans l'UE. Montrez que vous comprenez et appréciez cette dimension."
      }
    ]
  }

];

// ═══════════════════════════════════════════════
// MODÈLE VIDE — copie-colle pour ajouter une préfecture
// ═══════════════════════════════════════════════
/*
  {
    region: "Nom de la région",
    prefecture: "Ville (département)",
    icon: "🏛️",
    description: "Description du style d'entretien dans cette préfecture.",
    questions: [
      {
        q: "La question posée en entretien ?",
        r: "La réponse idéale à donner.",
        conseil: "Conseil pratique pour bien répondre à cette question."
      }
    ]
  },
*/