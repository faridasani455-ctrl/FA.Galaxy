const quizQuestions = [
    // --- SCIENCES & NATURE (1-20) ---
    {
        question: "Quelle est la planète la plus chaude du système solaire ?",
        options: ["Mercure", "Vénus", "Mars", "Jupiter"],
        correctIndex: 1,
        explanation: "L'atmosphère dense de Vénus emprisonne la chaleur par effet de serre, la rendant plus chaude que Mercure bien qu'elle soit plus éloignée du Soleil."
    },
    {
        question: "Quelle force maintient les planètes en orbite autour du Soleil ?",
        options: ["La force magnétique", "La force gravitationnelle", "La force centrifuge", "La friction atmosphérique"],
        correctIndex: 1,
        explanation: "C'est la force de gravité, modélisée par Newton puis Einstein, qui régit les mouvements des corps célestes à grande échelle."
    },
    {
        question: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?",
        options: ["L'oxygène", "Le dioxyde de carbone", "L'azote", "L'hydrogène"],
        correctIndex: 2,
        explanation: "L'atmosphère de la Terre est composée à environ 78% d'azote (diazote) et à seulement 21% d'oxygène."
    },
    {
        question: "Combien de temps la lumière du Soleil met-elle environ pour parvenir sur Terre ?",
        options: ["8 secondes", "8 minutes", "8 heures", "8 jours"],
        correctIndex: 1,
        explanation: "La Terre étant située à environ 150 millions de kilomètres du Soleil, la lumière voyageant à 300 000 km/s met environ 8 minutes et 20 secondes à nous parvenir."
    },
    {
        question: "Quel est l'élément chimique le plus léger et le plus abondant de l'Univers ?",
        options: ["L'hélium", "L'oxygène", "L'hydrogène", "Le carbone"],
        correctIndex: 2,
        explanation: "L'hydrogène représente près de 75% de la masse de la matière visible de l'Univers, servant de carburant principal aux étoiles."
    },
    {
        question: "Quelle est la principale source d'énergie d'une étoile comme le Soleil ?",
        options: ["La combustion du charbon", "La fusion nucléaire", "La fission nucléaire", "L'effet gravitationnel simple"],
        correctIndex: 1,
        explanation: "La fusion de noyaux d'hydrogène en hélium au cœur du Soleil libère une quantité phénoménale d'énergie sous forme de lumière et de chaleur."
    },
    {
        question: "Quel type de cellule humaine ne possède pas de noyau ?",
        options: ["Le neurone", "Le globule blanc", "Le globule rouge", "La cellule musculaire"],
        correctIndex: 2,
        explanation: "Les globules rouges (hématies) matures perdent leur noyau afin de maximiser l'espace disponible pour transporter l'oxygène via l'hémoglobine."
    },
    {
        question: "Quel scientifique a formulé la théorie de la relativité générale ?",
        options: ["Isaac Newton", "Albert Einstein", "Galilée", "Nikola Tesla"],
        correctIndex: 1,
        explanation: "Albert Einstein a publié la théorie de la relativité générale en 1915, révolutionnant notre compréhension de l'espace, du temps et de la gravité."
    },
    {
        question: "Quel est l'organe le plus lourd du corps humain ?",
        options: ["Le cerveau", "Le foie", "La peau", "Le cœur"],
        correctIndex: 2,
        explanation: "La peau est considérée comme un organe à part entière et pèse entre 3 et 5 kg chez un adulte, ce qui en fait le plus lourd."
    },
    {
        question: "Quelle planète du système solaire possède le plus de lunes connues ?",
        options: ["Jupiter", "Saturne", "Uranus", "Neptune"],
        correctIndex: 1,
        explanation: "Saturne dépasse Jupiter avec plus de 145 lunes confirmées grâce aux récentes découvertes astronomiques."
    },
    {
        question: "Quel est le métal qui est liquide à température ambiante ?",
        options: ["Le plomb", "Le mercure", "Le cuivre", "Le magnésium"],
        correctIndex: 1,
        explanation: "Le mercure est le seul métal commun liquide dans les conditions normales de température et de pression."
    },
    {
        question: "Quelle est la vitesse de la lumière dans le vide ?",
        options: ["300 000 m/s", "300 000 km/h", "300 000 km/s", "1 000 000 km/s"],
        correctIndex: 2,
        explanation: "La vitesse de la lumière est une constante physique fondamentale fixée précisément à 299 792,458 km/s (communément arrondie à 300 000 km/s)."
    },
    {
        question: "Quel mammifère est le seul capable de voler activement ?",
        options: ["L'écureuil volant", "La chauve-souris", "L'ornithorynque", "Le lémurien"],
        correctIndex: 1,
        explanation: "Les chauves-souris (chiroptères) possèdent des ailes membraneuses et sont les seuls mammifères dotés d'un vol battu actif."
    },
    {
        question: "Quel composant donne aux plantes leur couleur verte ?",
        options: ["Le carotène", "La mélanine", "La chlorophylle", "L'hémoglobine"],
        correctIndex: 2,
        explanation: "La chlorophylle est le pigment photosynthétique qui absorbe la lumière (principalement rouge et bleue) et réfléchit la lumière verte."
    },
    {
        question: "Dans quel état physique se trouve l'eau à une température de 105°C au niveau de la mer ?",
        options: ["Liquide", "Solide", "Gazeux", "Plasma"],
        correctIndex: 2,
        explanation: "L'eau bout à 100°C sous la pression atmosphérique normale du niveau de la mer ; elle se transforme donc en gaz (vapeur)."
    },
    {
        question: "Quel est l'oiseau le plus rapide du monde en piqué ?",
        options: ["Le colibri", "Le faucon pèlerin", "L'aigle royal", "L'autruche"],
        correctIndex: 1,
        explanation: "Le faucon pèlerin peut atteindre des vitesses supérieures à 380 km/h lors de ses piqués de chasse."
    },
    {
        question: "Comment appelle-t-on les séismes qui se produisent sous l'eau ?",
        options: ["Des typhons", "Des geysers", "Des raz-de-marée", "Des séismes sous-marins"],
        correctIndex: 3,
        explanation: "Les séismes sous-marins se produisent sous la mer et sont la cause principale des tsunamis dévastateurs."
    },
    {
        question: "Quel acide est naturellement présent dans notre estomac pour aider à la digestion ?",
        options: ["L'acide sulfurique", "L'acide chlorhydrique", "L'acide acétique", "L'acide nitrique"],
        correctIndex: 1,
        explanation: "L'estomac produit de l'acide chlorhydrique (HCl) hautement concentré pour décomposer les aliments et tuer les bactéries nocives."
    },
    {
        question: "Quelle partie de l'œil capte la lumière et la convertit en signaux électriques ?",
        options: ["La cornée", "L'iris", "Le cristallin", "La rétine"],
        correctIndex: 3,
        explanation: "La rétine est la membrane située au fond de l'œil, tapissée de cellules photoréceptrices (cônes et bâtonnets) connectées au nerf optique."
    },
    {
        question: "Quelle échelle mesure la magnitude de l'énergie libérée par un séisme ?",
        options: ["L'échelle de Beaufort", "L'échelle de Richter", "L'échelle de Celsius", "L'échelle de Scoville"],
        correctIndex: 1,
        explanation: "L'échelle de Richter, développée en 1935, quantifie l'énergie libérée au foyer des tremblements de terre."
    },

    // --- HISTOIRE & ANCIENNES CIVILISATIONS (21-40) ---
    {
        question: "Qui était le premier empereur romain ?",
        options: ["Jules César", "Auguste", "Néron", "Marc Aurèle"],
        correctIndex: 1,
        explanation: "Octave, petit-neveu de Jules César, a pris le titre d'Auguste en 27 avant J.-C., devenant ainsi le premier empereur de l'Empire romain."
    },
    {
        question: "En quelle année a eu lieu la Révolution française ?",
        options: ["1776", "1789", "1804", "1815"],
        correctIndex: 1,
        explanation: "La Révolution française a commencé en 1789, marquée notamment par la prise de la Bastille le 14 juillet."
    },
    {
        question: "Quelle reine d'Égypte antique a été l'épouse de Jules César puis de Marc Antoine ?",
        options: ["Néfertiti", "Cléopâtre VII", "Hatchepsout", "Néfertari"],
        correctIndex: 1,
        explanation: "Cléopâtre VII a utilisé ses alliances politiques et amoureuses avec Jules César et Marc Antoine pour préserver l'indépendance de l'Égypte."
    },
    {
        question: "Quel navigateur génois est célèbre pour avoir atteint les Amériques en 1492 ?",
        options: ["Vasco de Gama", "Marco Polo", "Christophe Colomb", "Fernand de Magellan"],
        correctIndex: 2,
        explanation: "Christophe Colomb, naviguant pour le compte de la Couronne d'Espagne, a accosté aux Caraïbes en octobre 1492, pensant avoir atteint les Indes."
    },
    {
        question: "Qui était le roi de France surnommé le 'Roi-Soleil' ?",
        options: ["François Ier", "Henri IV", "Louis XIV", "Louis XVI"],
        correctIndex: 2,
        explanation: "Louis XIV a régné pendant 72 ans (de 1643 à 1715) et a incarné la monarchie absolue de droit divin à Versailles."
    },
    {
        question: "Quel peuple de l'Antiquité a construit les pyramides de Gizeh ?",
        options: ["Les Romains", "Les Égyptiens", "Les Grecs", "Les Babyloniens"],
        correctIndex: 1,
        explanation: "Les anciens Égyptiens ont érigé les pyramides sous l'Ancien Empire, servant de tombes monumentales pour leurs pharaons."
    },
    {
        question: "Quelle civilisation a inventé la démocratie ?",
        options: ["Les Romains", "Les Sumériens", "Les Grecs (Athènes)", "Les Perses"],
        correctIndex: 2,
        explanation: "La démocratie est née au VIe siècle avant J.-C. dans la cité d'Athènes, où les citoyens participaient directement aux décisions politiques."
    },
    {
        question: "Quelle est la cause principale du déclenchement de la Première Guerre mondiale en 1914 ?",
        options: ["L'invasion de la Pologne", "L'assassinat de l'archiduc François-Ferdinand", "Le krach boursier de Wall Street", "La révolution russe"],
        correctIndex: 1,
        explanation: "L'assassinat de l'héritier du trône austro-hongrois à Sarajevo le 28 juin 1914 a activé le jeu des alliances militaires européennes."
    },
    {
        question: "Qui a dirigé la France en tant qu'Empereur au début du XIXe siècle ?",
        options: ["Louis-Philippe", "Napoléon Bonaparte", "Charles X", "Robespierre"],
        correctIndex: 1,
        explanation: "Napoléon Bonaparte s'est sacré empereur sous le nom de Napoléon Ier en 1804, réorganisant profondément les institutions françaises."
    },
    {
        question: "Quelle navigatrice a été la première femme à traverser l'océan Atlantique en avion en solitaire ?",
        options: ["Jeanne Barret", "Amelia Earhart", "Marie Curie", "Florence Nightingale"],
        correctIndex: 1,
        explanation: "L'Américaine Amelia Earhart a accompli cet exploit historique en mai 1932, devenant une icône de l'aviation mondiale."
    },
    {
        question: "Quelle cité antique a été ensevelie par l'éruption du Vésuve en 79 après J.-C. ?",
        options: ["Athènes", "Troie", "Pompéi", "Carthage"],
        correctIndex: 2,
        explanation: "Pompéi, ainsi que la ville voisine d'Herculanum, a été figée sous des mètres de cendres volcaniques, offrant un témoignage archéologique unique."
    },
    {
        question: "Qui a écrit la Déclaration d'Indépendance des États-Unis en 1776 ?",
        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln"],
        correctIndex: 2,
        explanation: "Thomas Jefferson est le principal rédacteur de ce texte fondateur proclamant l'indépendance des treize colonies vis-à-vis de la Grande-Bretagne."
    },
    {
        question: "Quelle dynastie régnait sur la Russie avant la révolution de 1917 ?",
        options: ["Les Tudor", "Les Bourbon", "Les Habsbourg", "Les Romanov"],
        correctIndex: 3,
        explanation: "La dynastie des Romanov a gouverné l'Empire russe pendant plus de trois siècles, de 1613 à l'abdication de Nicolas II en 1917."
    },
    {
        question: "Quel leader sud-africain a lutté contre l'Apartheid et est devenu président en 1994 ?",
        options: ["Kofi Annan", "Nelson Mandela", "Desmond Tutu", "Patrice Lumumba"],
        correctIndex: 1,
        explanation: "Après 27 ans d'emprisonnement, Nelson Mandela a mené une transition pacifique vers la démocratie multiraciale en Afrique du Sud."
    },
    {
        question: "En quelle année le mur de Berlin est-il tombé ?",
        options: ["1962", "1985", "1989", "1991"],
        correctIndex: 2,
        explanation: "Le 9 novembre 1989, sous la pression populaire, les frontières séparant Berlin-Est et Berlin-Ouest ont été ouvertes, préfigurant la réunification allemande."
    },
    {
        question: "Qui était la reine d'Angleterre pendant l'âge d'or du théâtre élisabéthain au XVIe siècle ?",
        options: ["Marie Stuart", "Élisabeth Ière", "Victoria", "Anne de Clèves"],
        correctIndex: 1,
        explanation: "Le règne d'Élisabeth Ière (1558-1603) a vu l'épanouissement de la Renaissance anglaise, portée notamment par William Shakespeare."
    },
    {
        question: "Quelle jeune héroïne française a mené des troupes durant la guerre de Cent Ans et a été brûlée vive en 1431 ?",
        options: ["Jeanne d'Arc", "Marie de Médicis", "Olympe de Gouges", "Aliénor d'Aquitaine"],
        correctIndex: 0,
        explanation: "Jeanne d'Arc a contribué à libérer Orléans et à faire sacrer Charles VII avant d'être capturée, jugée et brûlée par les Anglais à Rouen."
    },
    {
        question: "Quel code juridique rédigé en Mésopotamie vers 1750 avant J.-C. est l'un des plus anciens textes de lois connus ?",
        options: ["La Grande Charte", "Le Code de Hammurabi", "La Loi des Douze Tables", "Le Code Justinien"],
        correctIndex: 1,
        explanation: "Le Code de Hammurabi, roi de Babylone, est célèbre pour ses lois gravées sur une stèle de basalte, basées sur la loi du talion."
    },
    {
        question: "Qui a été le premier homme dans l'espace en 1961 ?",
        options: ["Neil Armstrong", "Yuri Gagarine", "Buzz Aldrin", "John Glenn"],
        correctIndex: 1,
        explanation: "Le cosmonaute soviétique Yuri Gagarine a accompli une orbite complète autour de la Terre le 12 avril 1961 à bord de Vostok 1."
    },
    {
        question: "Quel pays a subi la première attaque par bombe atomique de l'histoire en 1945 ?",
        options: ["L'Allemagne", "L'Union Soviétique", "Le Japon", "Le Vietnam"],
        correctIndex: 2,
        explanation: "Les États-Unis ont largué deux bombes atomiques sur les villes japonaises d'Hiroshima et de Nagasaki en août 1945, entraînant la capitulation du pays."
    },

    // --- GÉOGRAPHIE & PAYS (41-60) ---
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["L'océan Atlantique", "L'océan Indien", "L'océan Arctique", "L'océan Pacifique"],
        correctIndex: 3,
        explanation: "L'océan Pacifique couvre plus de 30% de la surface de la Terre, dépassant la superficie cumulée de toutes les terres émergées."
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctIndex: 2,
        explanation: "Canberra a été choisie comme capitale fédérale en 1908 comme compromis pour clore la rivalité entre Sydney et Melbourne."
    },
    {
        question: "Quel long fleuve traverse l'Égypte pour se jeter dans la mer Méditerranée ?",
        options: ["L'Amazone", "Le Nil", "Le Congo", "Le Mississippi"],
        correctIndex: 1,
        explanation: "Le Nil, l'un des plus longs fleuves du monde, a permis le développement de la brillante civilisation de l'Égypte antique."
    },
    {
        question: "Dans quel pays se trouve le mont Everest, le point culminant de la Terre ?",
        options: ["En Inde", "En Chine / Népal", "Au Pakistan", "Au Japon"],
        correctIndex: 1,
        explanation: "Le mont Everest se situe dans la chaîne de l'Himalaya, à la frontière entre le Népal et la région autonome du Tibet en Chine."
    },
    {
        question: "Quel pays possède la plus grande superficie territoriale au monde ?",
        options: ["Le Canada", "Les États-Unis", "La Chine", "La Russie"],
        correctIndex: 3,
        explanation: "La Russie couvre plus de 17 millions de kilomètres carrés, s'étendant sur l'Europe de l'Est et l'Asie du Nord."
    },
    {
        question: "Quel canal artificiel relie la mer Méditerranée à la mer Rouge ?",
        options: ["Le canal de Panama", "Le canal de Suez", "Le canal de Corinthe", "Le canal de Kiel"],
        correctIndex: 1,
        explanation: "Inauguré en 1869, le canal de Suez évite aux navires marchands de contourner l'Afrique par le Cap de Bonne-Espérance."
    },
    {
        question: "Dans quelle ville peut-on admirer le Colisée et la fontaine de Trevi ?",
        options: ["Paris", "Madrid", "Rome", "Athènes"],
        correctIndex: 2,
        explanation: "Ces monuments emblématiques se situent à Rome, la capitale historique de l'Italie."
    },
    {
        question: "Quel désert de sable est le plus vaste de la planète ?",
        options: ["Le désert de Gobi", "Le désert du Sahara", "Le désert d'Atacama", "Le désert du Kalahari"],
        correctIndex: 1,
        explanation: "Le Sahara, situé en Afrique du Nord, est le plus grand désert chaud du monde (les déserts polaires d'Antarctique et d'Arctique étant froids)."
    },
    {
        question: "Quel pays européen est réputé pour ses fjords spectaculaires ?",
        options: ["L'Espagne", "La Norvège", "La Grèce", "La Pologne"],
        correctIndex: 1,
        explanation: "La côte norvégienne est profondément découpée par des milliers de fjords, d'anciennes vallées glaciaires envahies par la mer."
    },
    {
        question: "Quelle ligne imaginaire sépare la Terre en deux hémisphères Nord et Sud ?",
        options: ["Le méridien de Greenwich", "Le tropique du Cancer", "Le tropique du Capricorne", "L'Équateur"],
        correctIndex: 3,
        explanation: "L'Équateur est le parallèle de latitude 0° situé à égale distance des deux pôles géographiques de la Terre."
    },
    {
        question: "Quel pays d'Amérique du Sud a le portugais comme langue officielle ?",
        options: ["L'Argentine", "Le Brésil", "La Colombie", "Le Chili"],
        correctIndex: 1,
        explanation: "Ancienne colonie portugaise, le Brésil est le seul pays lusophone des Amériques."
    },
    {
        question: "Quelle mer fermée, extrêmement salée, empêche presque tout organisme d'y vivre et permet de flotter sans effort ?",
        options: ["La mer Rouge", "La mer Méditerranée", "La mer Morte", "La mer Caspienne"],
        correctIndex: 2,
        explanation: "La forte salinité de la mer Morte (environ 340 g/L, soit 10 fois plus que l'océan) augmente la densité de l'eau, facilitant la flottaison."
    },
    {
        question: "Quelle île d'Italie abrite le célèbre volcan en activité nommé l'Etna ?",
        options: ["La Sardaigne", "La Sicile", "Corfou", "Capri"],
        correctIndex: 1,
        explanation: "L'Etna se dresse sur la côte est de la Sicile et figure parmi les volcans les plus actifs du monde."
    },
    {
        question: "Quel pays d'Asie est composé de plus de 17 000 îles et abrite la plus grande population musulmane au monde ?",
        options: ["Les Philippines", "Le Japon", "L'Indonésie", "La Thaïlande"],
        correctIndex: 2,
        explanation: "L'Indonésie est le plus grand archipel de la planète, réputé pour sa biodiversité et ses cultures variées."
    },
    {
        question: "Quelle est la capitale du Canada ?",
        options: ["Toronto", "Montréal", "Vancouver", "Ottawa"],
        correctIndex: 3,
        explanation: "Ottawa a été choisie comme capitale par la reine Victoria en 1857 en raison de sa situation stratégique sur la frontière linguistique."
    },
    {
        question: "Quel pays d'Afrique du Nord abrite les ruines historiques de la cité de Carthage ?",
        options: ["Le Maroc", "L'Algérie", "La Tunisie", "L'Égypte"],
        correctIndex: 2,
        explanation: "Carthage était une grande puissance maritime de l'Antiquité, dont les vestiges archéologiques se situent près de Tunis."
    },
    {
        question: "Quel État américain est un archipel volcanique situé dans l'océan Pacifique ?",
        options: ["La Floride", "Hawaï", "L'Alaska", "La Californie"],
        correctIndex: 1,
        explanation: "Hawaï a rejoint les États-Unis en 1959 en tant que 50e État américain."
    },
    {
        question: "Quelle chaîne de montagnes s'étend sur toute la longueur de la côte ouest de l'Amérique du Sud ?",
        options: ["Les Rocheuses", "Les Alpes", "La Cordillère des Andes", "L'Himalaya"],
        correctIndex: 2,
        explanation: "La Cordillère des Andes est la plus longue chaîne de montagnes continentale du monde, traversant sept pays sud-américains."
    },
    {
        question: "Quel petit pays enclavé dans la ville de Rome est le plus petit État indépendant du monde ?",
        options: ["Monaco", "Le Vatican", "Saint-Marin", "Andorre"],
        correctIndex: 1,
        explanation: "Le Vatican couvre une superficie d'à peine 0,44 kilomètre carré, abritant le siège de l'Église catholique romaine."
    },
    {
        question: "Quel détroit étroit sépare l'Espagne du Maroc et relie l'océan Atlantique à la mer Méditerranée ?",
        options: ["Le détroit de Gibraltar", "Le détroit de Magellan", "Le détroit de Béring", "Le détroit du Bosphore"],
        correctIndex: 0,
        explanation: "Le détroit de Gibraltar ne mesure que 14 km de large dans sa section la plus étroite, marquant la frontière physique entre l'Europe et l'Afrique."
    },

    // --- ART, LITTÉRATURE & PHILOSOPHIE (61-80) ---
    {
        question: "Qui a peint la célèbre Joconde exposée au musée du Louvre ?",
        options: ["Michel-Ange", "Léonard de Vinci", "Vincent van Gogh", "Claude Monet"],
        correctIndex: 1,
        explanation: "Léonard de Vinci a réalisé ce portrait de Lisa Gherardini (Mona Lisa) au début du XVIe siècle, utilisant la technique du sfumato."
    },
    {
        question: "Quel dramaturge anglais a écrit la tragédie 'Romeo et Juliette' ?",
        options: ["Charles Dickens", "Oscar Wilde", "William Shakespeare", "George Orwell"],
        correctIndex: 2,
        explanation: "William Shakespeare est l'auteur de cette célèbre pièce de théâtre élisabéthaine publiée à la fin du XVIe siècle."
    },
    {
        question: "Quel mouvement artistique du XIXe siècle mené par Monet, Renoir et Degas cherchait à capter la lumière éphémère ?",
        options: ["Le Surréalisme", "Le Cubisme", "L'Impressionnisme", "Le Romantisme"],
        correctIndex: 2,
        explanation: "L'Impressionnisme tire son nom du tableau de Claude Monet 'Impression, soleil levant' exposé en 1874."
    },
    {
        question: "Quel peintre néerlandais s'est coupé une partie de l'oreille et a peint 'La Nuit étoilée' ?",
        options: ["Rembrandt", "Vincent van Gogh", "Johannes Vermeer", "Piet Mondrian"],
        correctIndex: 1,
        explanation: "Vincent van Gogh, figure majeure du postimpressionnisme, a souffert de troubles psychiques sévères durant ses dernières années."
    },
    {
        question: "Quel écrivain français est l'auteur du roman fleuve 'Les Misérables' ?",
        options: ["Émile Zola", "Gustave Flaubert", "Victor Hugo", "Marcel Proust"],
        correctIndex: 2,
        explanation: "Victor Hugo a publié 'Les Misérables' en 1862, dénonçant la misère sociale du Paris du XIXe siècle à travers le destin de Jean Valjean."
    },
    {
        question: "Quel philosophe de la Grèce antique a été le maître d'Alexandre le Grand ?",
        options: ["Socrate", "Platon", "Aristote", "Pythagore"],
        correctIndex: 2,
        explanation: "Aristote a été invité par le roi Philippe II de Macédoine pour instruire le jeune prince Alexandre."
    },
    {
        question: "Quelle œuvre monumentale d'Homère raconte le long retour d'Ulysse après la guerre de Troie ?",
        options: ["L'Énéide", "L'Illiade", "L'Odyssée", "La Divine Comédie"],
        correctIndex: 2,
        explanation: "L'Odyssée détaille les périples maritimes d'Ulysse luttant contre la colère des dieux pour retrouver son royaume d'Ithaque."
    },
    {
        question: "Qui a sculpté la statue de marbre blanc de 'David' exposée à Florence ?",
        options: ["Donatello", "Auguste Rodin", "Michel-Ange", "Bernini"],
        correctIndex: 2,
        explanation: "Michel-Ange a sculpté ce chef-d'œuvre de la Renaissance italienne entre 1501 et 1504, symbolisant la liberté de Florence."
    },
    {
        question: "Dans quel roman d'anticipation de George Orwell le personnage de 'Big Brother' apparaît-il ?",
        options: ["1984", "Le Meilleur des Mondes", "La Ferme des Animaux", "Fahrenheit 451"],
        correctIndex: 0,
        explanation: "Publié en 1949, '1984' est une dystopie dénonçant les régimes totalitaires à travers le contrôle absolu de l'information."
    },
    {
        question: "Quel célèbre détective privé fictionnel a été créé par l'écrivain britannique Arthur Conan Doyle ?",
        options: ["Hercule Poirot", "Sherlock Holmes", "Arsène Lupin", "Jules Maigret"],
        correctIndex: 1,
        explanation: "Sherlock Holmes, flanqué de son fidèle ami le docteur Watson, utilise la déduction logique pour résoudre ses enquêtes au 221B Baker Street."
    },
    {
        question: "Quel peintre espagnol est le cofondateur du Cubisme et l'auteur du tableau engagé 'Guernica' ?",
        options: ["Salvador Dalí", "Pablo Picasso", "Francisco de Goya", "Joan Miró"],
        correctIndex: 1,
        explanation: "Pablo Picasso a peint 'Guernica' en 1937 pour dénoncer le bombardement de la ville basque homonyme durant la guerre d'Espagne."
    },
    {
        question: "Qui a écrit la fable philosophique 'Le Petit Prince' ?",
        options: ["Antoine de Saint-Exupéry", "Albert Camus", "Jean-Paul Sartre", "Jules Verne"],
        correctIndex: 0,
        explanation: "Pilote et écrivain, Antoine de Saint-Exupéry a publié ce conte poétique et philosophique universel en 1943."
    },
    {
        question: "Quelle est la langue d'écriture originale de l'œuvre poétique 'La Divine Comédie' de Dante ?",
        options: ["Le latin", "Le français médiéval", "L'italien (florentin)", "L'espagnol"],
        correctIndex: 2,
        explanation: "Dante Alighieri a choisi d'écrire en florentin vulgaire plutôt qu'en latin, posant ainsi les bases de la langue italienne moderne."
    },
    {
        question: "Quel sculpteur français a réalisé la célèbre statue de bronze 'Le Penseur' ?",
        options: ["Camille Claudel", "Auguste Rodin", "Edgar Degas", "Jean-Baptiste Carpeaux"],
        correctIndex: 1,
        explanation: "Auguste Rodin a conçu cette œuvre représentant un homme méditant face aux portes de l'Enfer."
    },
    {
        question: "Quel roman fantastique de Mary Shelley met en scène un savant créant la vie à partir de morceaux de cadavres ?",
        options: ["Dracula", "Le Portrait de Dorian Gray", "Frankenstein ou le Prométhée moderne", "L'Étrange Cas du docteur Jekyll"],
        correctIndex: 2,
        explanation: "Mary Shelley a écrit ce roman gothique précurseur de la science-fiction en 1816, alors qu'elle n'avait que 18 ans."
    },
    {
        question: "Quel compositeur classique autrichien, enfant prodige, a écrit l'opéra 'La Flûte enchantée' ?",
        options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Frédéric Chopin"],
        correctIndex: 2,
        explanation: "Mozart a composé plus de 600 œuvres musicales avant sa mort prématurée à l'âge de 35 ans en 1791."
    },
    {
        question: "Quel philosophe des Lumières a rédigé le traité tolérant intitulé 'Candide' ?",
        options: ["Jean-Jacques Rousseau", "Voltaire", "Denis Diderot", "Montesquieu"],
        correctIndex: 1,
        explanation: "Voltaire a écrit 'Candide ou l'Optimisme' en 1759 sous forme de conte satirique pour critiquer l'optimisme béat et l'intolérance cléricale."
    },
    {
        question: "Quel peintre espagnol est la figure de proue du Surréalisme, célèbre pour ses montres molles ?",
        options: ["Joan Miró", "Salvador Dalí", "Diego Velázquez", "Francisco de Goya"],
        correctIndex: 1,
        explanation: "Salvador Dalí a peint 'La Persistance de la mémoire' (les montres molles) en 1931, explorant les rêves et l'inconscient."
    },
    {
        question: "Quel écrivain français a écrit la série fantastique 'Vingt Mille Lieues sous les mers' ?",
        options: ["Victor Hugo", "Alexandre Dumas", "Jules Verne", "Guy de Maupassant"],
        correctIndex: 2,
        explanation: "Jules Verne est un pionnier des romans d'aventures et d'anticipation technologique, créant le légendaire capitaine Nemo."
    },
    {
        question: "Quel penseur antique a dit la célèbre phrase : 'Tout ce que je sais, c'est que je ne sais rien' ?",
        options: ["Socrate", "Confucius", "Cicéron", "Sénèque"],
        correctIndex: 0,
        explanation: "Socrate, qui n'a laissé aucun écrit, enseignait l'humilité intellectuelle et pratiquait l'art du questionnement (la maïeutique)."
    },

    // --- SPORTS & LOISIRS (81-90) ---
    {
        question: "Tous les combien d'années se déroulent normalement les Jeux Olympiques d'été ?",
        options: ["2 ans", "3 ans", "4 ans", "5 ans"],
        correctIndex: 2,
        explanation: "Suivant la tradition antique de l'olympiade, les Jeux Olympiques modernes se tiennent tous les 4 ans."
    },
    {
        question: "Quel pays a remporté la Coupe du Monde de football de la FIFA en 2018 ?",
        options: ["L'Allemagne", "Le Brésil", "La France", "L'Argentine"],
        correctIndex: 2,
        explanation: "L'équipe de France a gagné sa deuxième étoile mondiale en battant la Croatie en finale en Russie."
    },
    {
        question: "Sur quelle surface (court) se joue le tournoi de tennis de Roland-Garros ?",
        options: ["Gazon", "Terre battue", "Surface dure synthétique", "Parquet"],
        correctIndex: 1,
        explanation: "Roland-Garros est le seul tournoi du Grand Chelem se disputant sur terre battue, une surface lente favorisant les longs échanges."
    },
    {
        question: "Quel basketteur américain est largement considéré comme l'un des plus grands sportifs, portant le numéro 23 des Chicago Bulls ?",
        options: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"],
        correctIndex: 1,
        explanation: "Michael Jordan a remporté 6 championnats NBA avec les Bulls et a popularisé le basket à l'échelle internationale dans les années 1990."
    },
    {
        question: "Combien de joueurs composent une équipe de football présente sur le terrain au début d'un match ?",
        options: ["9 joueurs", "11 joueurs", "13 joueurs", "15 joueurs"],
        correctIndex: 1,
        explanation: "Chaque équipe aligne 11 joueurs sur le terrain, dont un gardien de but."
    },
    {
        question: "Quelle course cycliste par étapes française est la plus célèbre au monde ?",
        options: ["Le Giro d'Italia", "La Vuelta a España", "Le Tour de France", "Paris-Roubaix"],
        correctIndex: 2,
        explanation: "Créé en 1903, le Tour de France est la compétition cycliste annuelle la plus prestigieuse."
    },
    {
        question: "Quel athlète jamaïcain détient les records du monde du 100m et 200m en athlétisme ?",
        options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"],
        correctIndex: 1,
        explanation: "Surnommé 'La Foudre', Usain Bolt a couru le 100m en 9,58 secondes lors des championnats du monde de Berlin en 2009."
    },
    {
        question: "Dans quel sport de combat utilise-t-on un fleuret, un sabre ou une épée ?",
        options: ["Le judo", "L'escrime", "Le karaté", "La boxe"],
        correctIndex: 1,
        explanation: "L'escrime moderne dérive des duels d'honneur traditionnels et utilise ces trois types d'armes de touche."
    },
    {
        question: "Combien de points vaut un tir au panier réussi au-delà de la ligne arquée en basketball NBA ?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correctIndex: 2,
        explanation: "Les tirs réussis derrière la ligne des 3 points (située à environ 7,24 mètres en NBA) rapportent logiquement 3 points."
    },
    {
        question: "Quelle est la distance officielle d'une course de marathon ?",
        options: ["21,097 km", "30 km", "42,195 km", "50 km"],
        correctIndex: 2,
        explanation: "La distance de 42,195 km a été fixée lors des Jeux Olympiques de Londres en 1908 pour relier le château de Windsor au stade olympique."
    },

    // --- POP CULTURE & CINÉMA (91-105) ---
    {
        question: "Quel réalisateur américain a dirigé les films cultes 'E.T.', 'Jurassic Park' et 'Schindler's List' ?",
        options: ["Martin Scorsese", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"],
        correctIndex: 1,
        explanation: "Steven Spielberg est l'un des cinéastes les plus influents du box-office mondial, pionnier des blockbusters modernes."
    },
    {
        question: "Quel acteur incarne le personnage de Jack Dawson dans le film 'Titanic' sorti en 1997 ?",
        options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"],
        correctIndex: 2,
        explanation: "Leonardo DiCaprio a acquis une renommée planétaire grâce à son rôle tragique aux côtés de Kate Winslet."
    },
    {
        question: "Quel groupe de rock britannique légendaire chantait 'Hey Jude' et 'Yesterday' dans les années 1960 ?",
        options: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
        correctIndex: 1,
        explanation: "Originaire de Liverpool, le quatuor John Lennon, Paul McCartney, George Harrison et Ringo Starr a révolutionné l'histoire de la musique pop."
    },
    {
        question: "Quelle saga de films fantastiques se déroule dans la Terre du Milieu et implique la destruction d'un anneau unique ?",
        options: ["Harry Potter", "Le Seigneur des Anneaux", "Le Chroniques de Narnia", "Star Wars"],
        correctIndex: 1,
        explanation: "Réalisée par Peter Jackson, cette trilogie adapte l'immense chef-d'œuvre littéraire de J.R.R. Tolkien."
    },
    {
        question: "Dans la saga 'Star Wars', qui est le père biologique de Luke Skywalker ?",
        options: ["Obi-Wan Kenobi", "Darth Vader (Anakin)", "Yoda", "L'Empereur Palpatine"],
        correctIndex: 1,
        explanation: "La révélation 'Je suis ton père' proférée par Dark Vador dans L'Empire contre-attaque est l'une des répliques les plus célèbres du cinéma."
    },
    {
        question: "Quelle chanteuse américaine pop est surnommée la 'Queen of Pop', connue pour ses tubes 'Like a Virgin' et 'Hung Up' ?",
        options: ["Lady Gaga", "Whitney Houston", "Madonna", "Britney Spears"],
        correctIndex: 2,
        explanation: "Madonna a vendu plus de 300 millions de disques et a marqué la culture pop par ses réinventions musicales constantes."
    },
    {
        question: "Quel est le nom de l'école de sorcellerie fréquentée par Harry Potter ?",
        options: ["Poudlard (Hogwarts)", "Rivendell", "Narnia", "Salem"],
        correctIndex: 0,
        explanation: "Poudlard est l'école magique britannique cachée dans les montagnes d'Écosse imaginée par J.K. Rowling."
    },
    {
        question: "Quelle plateforme de streaming de vidéos à la demande a produit la série télévisée à succès mondial 'Stranger Things' ?",
        options: ["Amazon Prime Video", "Netflix", "Disney+", "HBO Max"],
        correctIndex: 1,
        explanation: "Netflix a lancé 'Stranger Things' en 2016, devenant l'un de ses plus grands phénomènes de pop culture."
    },
    {
        question: "Quel super-héros masqué protège la ville fictive de Gotham City ?",
        options: ["Spider-Man", "Superman", "Batman", "Iron Man"],
        correctIndex: 2,
        explanation: "Créé par Bob Kane et Bill Finger, Bruce Wayne combat le crime sous le costume de Batman à Gotham."
    },
    {
        question: "Quel célèbre groupe de musique pop suédois a remporté l'Eurovision en 1974 avec la chanson 'Waterloo' ?",
        options: ["ABBA", "Roxette", "Ace of Base", "The Cardigans"],
        correctIndex: 0,
        explanation: "Le groupe composé d'Agnetha, Björn, Benny et Anni-Frid (ABBA) est devenu l'une des formations musicales les plus lucratives de l'histoire."
    },
    {
        question: "Dans quel film d'animation de Disney entend-on la chanson entêtante 'Libérée, Délivrée' ?",
        options: ["Raiponce", "La Reine des Neiges (Frozen)", "Vaiana", "Aladdin"],
        correctIndex: 1,
        explanation: "La Reine des Neiges est sorti en 2013 et a remporté l'Oscar du meilleur film d'animation et de la meilleure chanson originale."
    },
    {
        question: "Qui a composé la bande originale légendaire des films 'Star Wars', 'Indiana Jones' et 'Harry Potter' ?",
        options: ["Hans Zimmer", "Danny Elfman", "John Williams", "Ennio Morricone"],
        correctIndex: 2,
        explanation: "John Williams est un géant de la musique de film hollywoodienne, réputé pour ses thèmes symphoniques immédiatement reconnaissables."
    },
    {
        question: "Quelle série télévisée de fantasy médiévale d'HBO met en scène des luttes de pouvoir autour du Trône de fer ?",
        options: ["The Witcher", "Game of Thrones", "The Lord of the Rings", "Vikings"],
        correctIndex: 2,
        explanation: "Game of Thrones, basée sur les romans de George R.R. Martin, a battu de nombreux records d'audience mondiaux."
    },
    {
        question: "Quel réseau social mondial permettant de partager de courts messages limités à l'origine à 140 caractères a été renommé 'X' en 2023 ?",
        options: ["Facebook", "Instagram", "Twitter", "Snapchat"],
        correctIndex: 2,
        explanation: "Racheté par Elon Musk, Twitter a subi un changement d'identité complet pour devenir X."
    },
    {
        question: "Quel agent secret fictif porte le matricule 007 au service de Sa Majesté ?",
        options: ["Jason Bourne", "Ethan Hunt", "James Bond", "Sherlock Holmes"],
        correctIndex: 2,
        explanation: "James Bond, créé par le romancier Ian Fleming en 1953, est le héros de l'une des plus longues franchises cinématographiques de l'histoire."
    }
];

// Export standard for ES6 modules (if used) or fallback global availability
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizQuestions };
}