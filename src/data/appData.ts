import { Specialist, Disease, Article, QuizQuestion, RoleTip, PeerStory } from '../types';

export const QUOTES = [
  {
    fr: "« La santé mentale n'est pas un luxe, c'est le fondement de la vie et de la dignité humaine. »",
    mg: "« Ny fahasalamana ara-tsaina dia tsy haitraitra fa fototry ny aina sy ny hasin'ny maha-olona. »",
    author: "Fahasalamana & Aina"
  },
  {
    fr: "« Demander de l'aide n'est pas un aveu de faiblesse, c'est un acte de grand courage. »",
    mg: "« Ny mitady fanampiana dia tsy fahalemena velively, fa herim-po lehibe. »",
    author: "Dr. R. Raharimanana (Psychiatre)"
  },
  {
    fr: "« Le fihavanana et l'écoute bienveillante sont les premiers remèdes face à la souffrance de l'âme. »",
    mg: "« Ny fihavanana sy ny fihainoana am-pitiavana no fanafody voalohany mampitony ny senton'ny fo. »",
    author: "Haja R. (Travailleur social)"
  },
  {
    fr: "« Le handicap ne définit pas une personne, il révèle notre devoir collectif d'accessibilité et de solidarité. »",
    mg: "« Ny fahasembanana dia tsy mamaritra ny maha-ianao anao, fa manaitra ny firaisankinantsika rehetra. »",
    author: "Collectif Handicap Madagascar"
  }
];

export const CARE_MODEL_STEPS = [
  {
    level: 1,
    titleFr: "Niveau 1 : Écoute & Soutien Communautaire",
    titleMg: "Ambaratonga 1 : Fihainoana sy Fanohanana Iraisana",
    severityFr: "Moins sévère / Prévention & Détresse débutante",
    severityMg: "Tsy dia mafy loatra / Fisorohana sy tebiteby vao manomboka",
    whoFr: "Pairs-aidants, associations de proximité, lignes d'écoute, famille bienveillante, éducateurs.",
    whoMg: "Mpanampy mitovy traikefa, fikambanana eny ifotony, antso an-tariby, fianakaviana, mpanabe.",
    indicationsFr: "Stress du quotidien, déprime passagère, isolement, besoin de parler sans jugement, questions sur le handicap.",
    indicationsMg: "Raritsaina andavanandro, alahelo mandalo, faniriana hiteny tsy misy fitsarana, fanontaniana momba ny fahasembanana.",
    color: "emerald"
  },
  {
    level: 2,
    titleFr: "Niveau 2 : Prise en Charge Primaire & Ambulatoire",
    titleMg: "Ambaratonga 2 : Fitsaboana Voalohany sy Manam-pahaizana",
    severityFr: "Modéré / Souffrance installée avec retentissement",
    severityMg: "Antenatenany / Faharariana misy fiantraikany amin'ny fiainana",
    whoFr: "Psychologues cliniciens, médecins généralistes formés, psychothérapeutes, travailleurs sociaux, orthophonistes, kinésithérapeutes.",
    whoMg: "Mpitsabo saina (Psychologues), mpitsabo ankapobeny, mpanampy ara-tsosialy, mpampianatra miteny, mpanao otra fitsaboana.",
    indicationsFr: "Anxiété persistante, deuil prolongé, dépression légère à modérée, difficultés relationnelles, rééducation motrice ou cognitive.",
    indicationsMg: "Fanahiana lava reny, fisaonana maharitra, fahaketrahana antonony, fahasarotana amin'ny fifandraisana, fanarenana ara-batana.",
    color: "blue"
  },
  {
    level: 3,
    titleFr: "Niveau 3 : Psychiatrie Hospitalière & Urgences",
    titleMg: "Ambaratonga 3 : Fitsaboana Areti-tsaina any amin'ny Hopitaly (CHU)",
    severityFr: "Sévère / Crise aiguë & Risque vital",
    severityMg: "Mafy sy Maika / Fitsaboana vonjy taitra sy fidirana hopitaly",
    whoFr: "Médecins psychiatres, services neuro-psychiatriques des CHU, équipes mobiles de crise, infirmiers psychiatriques.",
    whoMg: "Mpitsabo aretin-tsaina (Psychiatres), tolotra neuro-psychiatrie CHU, mpitsabo mpanampy manokana.",
    indicationsFr: "Épisode psychotique aigu, hallucinations, dépression sévère avec idées suicidaires, crise d'agitation, anorexie grave, sevrage complexe.",
    indicationsMg: "Fahaverezan-tsaina tampoka, fahitana zavatra tsy misy, fikasana hamono tena, savorovoro mahery vaika, fiankinan-doha mahery.",
    color: "rose"
  }
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: "chu-jrb-befelatanana",
    name: "CHU JRB - Service Neuro-Psychiatrie Befelatanana",
    shortName: "CHU Befelatanana",
    category: "chu",
    specialties: ["Psychiatrie adulte", "Neurologie", "Urgences psychiatriques", "Consultations externes"],
    region: "Analamanga",
    city: "Antananarivo",
    address: "Hôpital Joseph Raseta Befelatanana, Antananarivo 101",
    phone: "+261 20 22 270 51",
    emergencyPhone: "+261 20 22 270 51 (Poste Urgences)",
    hours: "24h/24 (Urgences) — 08h00 à 16h00 (Consultations lun-ven)",
    services: [
      "Prise en charge des crises psychiatriques aiguës",
      "Hospitalisation courte et moyenne durée",
      "Consultations de pédopsychiatrie et psychiatrie générale",
      "Suivi médicamenteux et psychothérapeutique",
      "Délivrance de certificats médico-légaux"
    ],
    careLevel: 3,
    fees: "Hôpital public : Consultations à tarif réglementé public, gratuité partielle selon indigence",
    feesMg: "Hopitalim-panjakana : Sarany ara-dalàna, tohana ho an'ny sahirana",
    accessibilityInfo: "Rampe d'accès rez-de-chaussée, accessible aux fauteuils roulants",
    accessibilityInfoMg: "Misy lalana ho an'ny kalesy misy kodiarana amin'ny rihana ambany",
    descriptionFr: "Service universitaire de référence nationale pour les soins psychiatriques et neurologiques au centre d'Antananarivo. Prise en charge des épisodes aigus et suivis spécialisés.",
    descriptionMg: "Toerana fakan-kevitra sy fitsaboana areti-tsaina sy ny kozatra lehibe indrindra eto Antananarivo. Mandray andro aman'alina amin'ny vonjy taitra."
  },
  {
    id: "chu-anjanamasina",
    name: "CHU Anjanamasina - Hôpital Psychiatrique de Référence",
    shortName: "CHU Anjanamasina",
    category: "chu",
    specialties: ["Psychiatrie hospitalière", "Addictologie", "Réhabilitation psychosociale", "Soins de longue durée"],
    region: "Analamanga",
    city: "Antananarivo (Route d'Ambohimanga)",
    address: "Commune Rurale d'Anjanamasina, Antananarivo Avaradrano",
    phone: "+261 20 22 441 22",
    emergencyPhone: "+261 20 22 441 22",
    hours: "24h/24 pour hospitalisation — Visites : 13h00-16h00",
    services: [
      "Hospitalisation psychiatrique complète et séjour prolongé",
      "Unité de sevrage et de traitement des addictions",
      "Ateliers d'ergothérapie et de réinsertion socioprofessionnelle",
      "Consultations psychiatriques et soutien aux familles"
    ],
    careLevel: 3,
    fees: "Hôpital public spécialisé : Frais de séjour hospitalier subventionnés",
    feesMg: "Hopitaly manokana : Sarany manaraka ny fepetra ara-panjakana",
    accessibilityInfo: "Espaces pavillonnaires de plain-pied accessibles",
    accessibilityInfoMg: "Toerana malalaka amin'ny tany lemaka, mora idirana",
    descriptionFr: "Hôpital psychiatrique historique et centre national de référence pour la santé mentale à Madagascar. Environnement aéré dédié à la stabilisation et la réhabilitation.",
    descriptionMg: "Hopitaly manokana lehibe indrindra manasitrana ny aretin-tsaina eto Madagasikara, manana toerana midadasika ho fanarenana sy fampitoniana."
  },
  {
    id: "chu-sspa-analakely",
    name: "CHU SSPA - Service de Santé Publique & Psychiatrie Analakely",
    shortName: "CHU SSPA Analakely",
    category: "chu",
    specialties: ["Psychiatrie ambulatoire", "Santé mentale communautaire", "Dépistage", "Addictions"],
    region: "Analamanga",
    city: "Antananarivo",
    address: "Analakely (proche Avenue de l'Indépendance), Antananarivo 101",
    phone: "+261 34 11 200 45",
    hours: "08h00 - 16h00 (Lundi au Vendredi)",
    services: [
      "Consultations externes de santé mentale en plein centre-ville",
      "Suivi ambulatoire sans hospitalisation",
      "Orientation précoce vers les structures spécialisées",
      "Écoute et soutien psychologique des jeunes et adultes"
    ],
    careLevel: 2,
    fees: "Tarif public de santé primaire",
    feesMg: "Sarany ara-panjakana fototra",
    accessibilityInfo: "Bâtiment central, accès facilité",
    accessibilityInfoMg: "Mora hatonina eo afovoan-tanàna",
    descriptionFr: "Centre ambulatoire au cœur de la capitale permettant un accès facile et discret aux consultations psychiatriques et de santé mentale sans hospitalisation.",
    descriptionMg: "Toeram-pitsaboana eny Analakely ahafahana maka hevitra sy manaraka fitsaboana tsy mila mijanona mandry hopitaly."
  },
  {
    id: "cenhosoa-homi",
    name: "CENHOSOA - Service Psychiatrie (HOMI Soavinandriana)",
    shortName: "CENHOSOA Soavinandriana",
    category: "chu",
    specialties: ["Psychiatrie médico-militaire et civile", "Traumatismes psychiques", "Addictologie"],
    region: "Analamanga",
    city: "Antananarivo",
    address: "Hôpital Militaire de Soavinandriana, Antananarivo 101",
    phone: "+261 20 22 392 11",
    hours: "07h30 - 16h30 (Urgences 24h/24)",
    services: [
      "Prise en charge du stress post-traumatique (PTSD)",
      "Consultations psychiatriques pour civils et personnels",
      "Examens médico-psychologiques approfondis"
    ],
    careLevel: 3,
    fees: "Tarif hospitalier conventionné",
    feesMg: "Sarany manaraka fifanarahana",
    accessibilityInfo: "Entièrement accessible aux personnes à mobilité réduite",
    accessibilityInfoMg: "Mety tsara amin'ny olona manana fahasembanana ara-batana",
    descriptionFr: "Pôle médico-chirurgical et psychiatrique réputé de Soavinandriana offrant un suivi psychiatrique d'excellence ouvert à l'ensemble de la population.",
    descriptionMg: "Toeram-pitsaboana manara-penitra eny Soavinandriana mandray ny olom-pirenena rehetra mila fitsaboana ara-tsaina."
  },
  {
    id: "saint-benoit-menni",
    name: "Centre Hospitalier Privé Saint Benoît Menni",
    shortName: "Saint Benoît Menni Imerintsiatosika",
    category: "prive",
    specialties: ["Psychiatrie générale", "Réhabilitation psychosociale", "Psychothérapie", "Soins humanisés"],
    region: "Itasy / Analamanga",
    city: "Imerintsiatosika",
    address: "RN1, Imerintsiatosika (à 25km à l'ouest d'Antananarivo)",
    phone: "+261 34 05 450 12",
    email: "saintbenoit.imerintsiatosika@gmail.com",
    hours: "Accueil 24h/24 — Consultations sur RDV du lundi au samedi",
    services: [
      "Hospitalisation en environnement calme et verdoyant",
      "Approche globale biopsychosociale respectueuse des droits humains",
      "Ergothérapie, jardinage thérapeutique et activités artistiques",
      "Accompagnement et formation continue des familles d'aidants"
    ],
    careLevel: 3,
    fees: "Tarif privé solidaire (œuvres hospitalières avec prise en charge sociale)",
    feesMg: "Sarany manokana mirary misy fanampiana ara-tsosialy",
    accessibilityInfo: "Bâtiments de plain-pied, allées aménagées pour fauteuils roulants",
    accessibilityInfoMg: "Toerana mirindra sy mora idiran'ny kalesy",
    descriptionFr: "Centre de référence géré par les Sœurs Hospitalières du Sacré-Cœur de Jésus, offrant un cadre thérapeutique chaleureux axé sur la dignité du patient.",
    descriptionMg: "Hopitaly manokana any Imerintsiatosika mikarakara am-pitiavana sy manaja ny hasin'ny marary ara-tsaina ao anaty tontolo milamina."
  },
  {
    id: "chu-pzaga-mahajanga",
    name: "CHU Pzaga Mahajanga - Service Psychiatrie",
    shortName: "CHU Pzaga Mahajanga",
    category: "chu",
    specialties: ["Psychiatrie régionale", "Urgences médico-psychiatriques", "Santé mentale communautaire"],
    region: "Boeny",
    city: "Mahajanga",
    address: "Boulevard Marcoz, Mahajanga",
    phone: "+261 34 20 811 02",
    hours: "24h/24 (Urgences) — 08h00 - 15h00 (Consultations)",
    services: [
      "Prise en charge psychiatrique pour la région Boeny et le Nord-Ouest",
      "Consultations et hospitalisation d'urgence",
      "Soutien aux familles et sensibilisation locale"
    ],
    careLevel: 3,
    fees: "Hôpital universitaire public",
    feesMg: "Hopitalim-panjakana manara-penitra",
    accessibilityInfo: "Accès adapté au rez-de-chaussée",
    accessibilityInfoMg: "Lalana azo idirana tsara",
    descriptionFr: "Centre de référence de santé mentale pour la province de Mahajanga et la côte Ouest malgache.",
    descriptionMg: "Hopitaly lehibe mitsabo ny aretin-tsaina ho an'ny faritra Boeny sy ny manodidina."
  },
  {
    id: "chu-toamasina",
    name: "CHU Toamasina - Service Psychiatrie",
    shortName: "CHU Toamasina",
    category: "chu",
    specialties: ["Psychiatrie générale", "Traumatologie & Détresse", "Consultations externes"],
    region: "Atsinanana",
    city: "Toamasina",
    address: "Hôpital Be Toamasina, Boulevard Joffre",
    phone: "+261 34 31 450 88",
    hours: "24h/24 (Urgences) — 08h00 - 16h00 (Consultations)",
    services: [
      "Prise en charge des crises psychiatriques de la côte Est",
      "Hospitalisation psychiatrique et suivi ambulatoire",
      "Consultations psychologiques et d'addictologie"
    ],
    careLevel: 3,
    fees: "Tarif public hospitalier",
    feesMg: "Sarany ara-panjakana",
    accessibilityInfo: "Accès pavillon psychiatrie",
    accessibilityInfoMg: "Misy lalana manokana mankany amin'ny sampana",
    descriptionFr: "Service psychiatrique du Grand Port assurant la prise en charge des affections mentales dans la région Atsinanana.",
    descriptionMg: "Hopitaly mitsabo ny fahasalamana ara-tsaina ho an'ny faritra Atsinanana sy Toamasina."
  },
  {
    id: "chu-tulear",
    name: "CHU Tuléar - Service Psychiatrie",
    shortName: "CHU Tuléar",
    category: "chu",
    specialties: ["Psychiatrie générale", "Santé mentale du Sud", "Suivi ambulatoire"],
    region: "Atsimo-Andrefana",
    city: "Toliara (Tuléar)",
    address: "Hôpital Be de Toliara",
    phone: "+261 34 44 920 15",
    hours: "24h/24 (Urgences) — 08h00 - 15h30",
    services: [
      "Prise en charge psychiatrique pour la région Sud",
      "Orientation et stabilisation des crises aiguës",
      "Consultations externes et accompagnement psychosocial"
    ],
    careLevel: 3,
    fees: "Tarif public réglementé",
    feesMg: "Sarany ara-panjakana fototra",
    accessibilityInfo: "Bâtiment rez-de-chaussée",
    accessibilityInfoMg: "Mora idirana amin'ny rihana ambany",
    descriptionFr: "Point focal de prise en charge psychiatrique pour Toliara et les districts du Sud de Madagascar.",
    descriptionMg: "Toeram-pitsaboana ara-tsaina lehibe indrindra ho an'ny faritra Atsimo-Andrefana."
  },
  {
    id: "plateforme-handicap-madagascar",
    name: "Plateforme des Fédérations de Personnes Handicapées (PFPH/MAD)",
    shortName: "PFPH Madagascar",
    category: "ong",
    specialties: ["Orientation handicap", "Plaidoyer droits humains", "Insertion sociale et professionnelle"],
    region: "Analamanga",
    city: "Antananarivo",
    address: "Ankadifotsy, Antananarivo 101",
    phone: "+261 34 14 550 90",
    email: "contact@pfphmadagascar.mg",
    hours: "08h30 - 16h30 (Lundi au Vendredi)",
    services: [
      "Orientation vers les organismes d'insertion professionnelle adaptés",
      "Aide à l'obtention d'aides techniques (fauteuils, cannes blanches, prothèses)",
      "Accompagnement juridique face aux discriminations",
      "Groupes de pairs-aidants et de parole pour personnes handicapées"
    ],
    careLevel: 1,
    fees: "Services et orientations gratuits",
    feesMg: "Maimaim-poana ny torohevitra sy ny fitarihana",
    accessibilityInfo: "Locaux entièrement adaptés et accessibles PMR",
    accessibilityInfoMg: "Toerana namboarina manokana ho an'ny olona manana fahasembanana",
    descriptionFr: "Coordination nationale regroupant les associations de personnes en situation de handicap physique, sensoriel et mental à Madagascar. Accompagne le parcours d'autonomie.",
    descriptionMg: "Vondron'ny fikambanana miaro ny zon'ny olona manana fahasembanana eto Madagasikara, manampy amin'ny asa sy fiaraha-monina."
  },
  {
    id: "cabinet-aepsi-ecoute",
    name: "Cellule d'Écoute et Soutien Psychologique AEPSI",
    shortName: "Cellule Écoute AEPSI",
    category: "cabinet",
    specialties: ["Psychologie clinique", "Écoute bienveillante", "Gestion du stress", "Accompagnement des proches"],
    region: "Analamanga",
    city: "Antananarivo",
    address: "Ambohijatovo / Antaninarenina, Antananarivo",
    phone: "+261 34 50 123 45",
    emergencyPhone: "+261 34 50 123 45",
    email: "ecoute@aepsi-madagascar.org",
    hours: "08h30 - 18h00 (Lun-Sam) — Permanence téléphonique d'urgence",
    services: [
      "Entretiens psychologiques individuels en français et malgache",
      "Soutien aux aidants familiaux de personnes avec handicap ou troubles",
      "Ateliers de gestion du stress et de relaxation",
      "Orientation personnalisée vers les spécialistes selon le modèle de soin"
    ],
    careLevel: 2,
    fees: "Tarif associatif solidaire ou gratuité selon situation économique",
    feesMg: "Sarany mirary ara-pirahalahiana na maimaim-poana",
    accessibilityInfo: "Accès plain-pied, assistance sur place",
    accessibilityInfoMg: "Misy mpanampy eo an-toerana",
    descriptionFr: "Espace d'écoute chaleureux porté par des psychologues et travailleurs sociaux bénévoles et professionnels engagés pour la santé mentale inclusive à Madagascar.",
    descriptionMg: "Toerana fihainoana am-pitiavana sy fanohanana ara-tsaina tarihin'ny mpitsabo saina sy mpanampy ara-tsosialy vonona hanampy."
  }
];

export const DISEASES_DATA: Disease[] = [
  {
    id: "depression-majeure",
    name: "Trouble Dépressif Majeur",
    malagasyName: "Fahaketrahana Lalina",
    category: "depression_mood",
    categoryLabelFr: "Troubles de l'Humeur",
    categoryLabelMg: "Fikorontanan'ny Toetry ny Saina",
    summaryFr: "La dépression est une maladie médicale courante mais sérieuse qui affecte négativement les sentiments, la façon de penser et d'agir. Elle se distingue nettement de la simple tristesse passagère.",
    summaryMg: "Ny fahaketrahana dia aretina ara-tsaina manelingelina ny fihetseham-po, ny fisainana ary ny asa aman-draharaha. Tsy alahelo tsotra mandalo izy io fa tena aretina azo tsaboina.",
    symptomsFr: [
      "Tristesse persistante, sensation de vide intérieur durant plus de 2 semaines",
      "Perte totale d'intérêt ou de plaisir pour les activités habituellement aimées (anhédonie)",
      "Fatigue intense et manque d'énergie même sans effort physique",
      "Troubles du sommeil (insomnies sévères ou hypersomnie)",
      "Sentiment de culpabilité excessive ou de dévalorisation de soi",
      "Pensées récurrentes de mort ou idées suicidaires"
    ],
    symptomsMg: [
      "Alahelo lalina sy fahatsapana ho foana mihoatra ny 2 herinandro",
      "Tsy faharisihana intsony amin'ny zavatra nahafinaritra teo aloha",
      "Havizanana tafahoatra tsy misy antony",
      "Tsy fahitan-tory na torimaso be loatra",
      "Fiheveran-tena ho tsy misy ilana azy na manam-pahalemena",
      "Eritreritra maniry ny ho faty na hamono tena"
    ],
    myths: [
      {
        mythFr: "« La dépression est causée par un manque de foi, de volonté ou par un mauvais sortilège. »",
        mythMg: "« Ny fahaketrahana dia vokatry ny tsy fahampiam-pinoana, na fahalemen-toetra, na vokatry ny fankatovana/mosavy. »",
        realityFr: "Faux. La dépression implique des déséquilibres neurochimiques réels, des facteurs génétiques et des stress psychosociaux mesurables. La foi apporte du réconfort mais ne remplace pas un soin médical.",
        realityMg: "Tsy marina. Aretina ara-tsiansa misy fikorontanana amin'ny atidoha izy io. Ny finoana dia mampahery saingy tsy mahasolo ny fitsaboana ara-pahasalamana."
      },
      {
        mythFr: "« Il suffit de se secouer et de sortir pour que ça passe. »",
        mythMg: "« Miezaha fotsiny mihetsika dia mandalo ho azy io. »",
        realityFr: "Faux. Dire cela culpabilise la personne et aggrave sa souffrance. Une personne dépressive a besoin d'écoute et d'un accompagnement professionnel adapté.",
        realityMg: "Tsy marina. Manome tsiny ny marary izany. Mila fihainoana sy fanampiana manam-pahaizana izy."
      }
    ],
    careLevelNeeded: 2,
    whoToConsultFr: "Psychologue clinicien pour les formes légères à modérées (Niveau 2). En cas d'idées suicidaires ou de forme sévère, consulter immédiatement un psychiatre en CHU (Niveau 3).",
    whoToConsultMg: "Psychologue raha antonony (Ambaratonga 2). Raha misy eritreritra hamono tena dia manatona avy hatrany ny mpitsabo aretin-tsaina any amin'ny CHU (Ambaratonga 3).",
    familyGuidanceFr: "Écoutez sans juger, ne minimisez pas sa douleur, évitez les phrases comme « il y a pire que toi », et proposez de l'accompagner chez un spécialiste.",
    familyGuidanceMg: "Mihainoa am-pitiavana tsy manome tsiny, aza mambelabela ny fijaliany, ary manomeza toky fa hiaraka aminy hanatona mpitsabo.",
    referenceSource: "CIM-11 (OMS)",
    lastUpdated: "Mars 2026"
  },
  {
    id: "troubles-anxieux",
    name: "Troubles Anxieux & Crises de Panique",
    malagasyName: "Tain-dranon'ny Fanahiana sy Tahotra Tampoka",
    category: "anxiety",
    categoryLabelFr: "Troubles Anxieux",
    categoryLabelMg: "Fanahiana sy Ahiahy",
    summaryFr: "L'anxiété devient un trouble lorsqu'elle est disproportionnée, constante, incontrôlable et qu'elle paralyse la vie quotidienne, provoquant d'intenses réactions physiques.",
    summaryMg: "Lasa aretina ny fanahiana rehefa tafahoatra, tsy mety mitsahatra, ary manakana ny olona tsy hahafehy ny fiainany andavanandro miaraka amin'ny fihetsehana ara-batana.",
    symptomsFr: [
      "Inquiétude permanente et excessive concernant plusieurs aspects de la vie",
      "Tension musculaire continue, sensation d'être toujours « sur le qui-vive »",
      "Palpitations cardiaques, sensation d'étouffement ou boule dans la gorge",
      "Difficultés sévères de concentration et irritabilité",
      "Attaques de panique soudaines avec peur imminente de mourir ou de perdre le contrôle"
    ],
    symptomsMg: [
      "Fanahiana tsy mitsaha-mitombo amin'ny lafim-piainana rehetra",
      "Fitepon'ny fo mafy sy tampoka, fahasemporana",
      "Hozatra mihenjana sy tsy fahatoniana",
      "Fahasarotana mifantoka sy mora tezitra",
      "Tahotra tampoka mahatsapa ho ho faty na ho very saina (crise de panique)"
    ],
    myths: [
      {
        mythFr: "« Ce n'est rien, c'est juste du cinéma ou de la faiblesse. »",
        mythMg: "« Tsinontsinona io fa fihatsarambelatsihy na fahalemena fotsiny. »",
        realityFr: "Faux. Les crises d'angoisse provoquent une décharge massive d'adrénaline mesurable dans le corps. La souffrance physique et psychologique est authentique.",
        realityMg: "Tsy marina. Ny krizy fanahiana dia miteraka fiovana simika mahery ao amin'ny vatana ka tena maharary tokoa."
      }
    ],
    careLevelNeeded: 2,
    whoToConsultFr: "Psychologue ou psychothérapeute formé aux thérapies cognitives et comportementales (TCC). Exercices de relaxation en Niveau 1.",
    whoToConsultMg: "Psychologue manao fitsaboana amin'ny resaka sy fanazaran-tena. Fanazaran-tena mampitony amin'ny ambaratonga voalohany.",
    familyGuidanceFr: "Pendant une crise, parlez d'une voix calme, guidez la respiration (souffle lent), ne l'étouffez pas de questions et rappelez-lui que la crise va passer.",
    familyGuidanceMg: "Rehefa tonga ny krizy, mitenena am-pahatoniana, toroy fomba fisefoana miadana, aza be fanontaniana ary ampahatsiahivo fa handalo io.",
    referenceSource: "CIM-11 (OMS)",
    lastUpdated: "Février 2026"
  },
  {
    id: "autisme-tsa",
    name: "Trouble du Spectre de l'Autisme (TSA)",
    malagasyName: "Autisme - Fahasamihafan'ny Fiasan'ny Saina",
    category: "neurodev",
    categoryLabelFr: "Neurodéveloppement",
    categoryLabelMg: "Fivoaran'ny Atidoha sy ny Saina",
    summaryFr: "Le TSA est une condition neurodéveloppementale qui modifie la manière dont une personne perçoit le monde, communique et interagit avec les autres. Ce n'est pas une maladie contagieuse ni un échec éducatif.",
    summaryMg: "Ny autisme dia fomba fiasan'ny atidoha hafa manokana eo amin'ny fifandraisana sy ny fahitana ny tontolo manodidina. Tsy aretina mifindra ary tsy fahadisoan'ny ray aman-dreny.",
    symptomsFr: [
      "Difficultés dans la communication verbale et non verbale (contact visuel, mimiques)",
      "Intérêts spécifiques intenses et besoin de routines prévisibles",
      "Sensibilités sensorielles accrues (hypersensibilité aux bruits, lumières, textures)",
      "Mouvements répétitifs d'autorégulation (stimming)"
    ],
    symptomsMg: [
      "Fahasarotana eo amin'ny firesahana sy ny fifaneraserana amin'ny hafa",
      "Firaiketana amin'ny fahazarana hentitra sy fankafizana lohahevitra manokana",
      "Fahasarotana amin'ny tabataba mafy na hazavana mamirapiratra",
      "Fihetsika miverimberina mampitony ny tenany"
    ],
    myths: [
      {
        mythFr: "« L'autisme est causé par des mères froides ou un envoûtement familial. »",
        mythMg: "« Ny tsy fitiavan'ny reniny na ozona ao amin'ny fianakaviana no mahatonga ny autisme. »",
        realityFr: "Faux. Cette théorie obsolète a été totalement réfutée par la science. L'autisme a des bases neurogénétiques complexes.",
        realityMg: "Tsy marina velively. Ny siansa dia manaporofo fa fiforonan'ny atidoha voajanahary izany fa tsy vokatry ny ray aman-dreny na ozona."
      }
    ],
    careLevelNeeded: 2,
    whoToConsultFr: "Équipe pluridisciplinaire : Pédopsychiatre, psychologue du développement, orthophoniste, psychomotricien et associations spécialisées.",
    whoToConsultMg: "Mpitsabo manokana ho an'ny ankizy, orthophoniste, psychomotricien sy fikambanana manampy ny olona manana autisme.",
    familyGuidanceFr: "Créez un environnement calme et structuré, utilisez des supports visuels, respectez son rythme et rejoignez des associations de parents.",
    familyGuidanceMg: "Amboary ny toerana hilamina, ampiasao sary hanazavana zavatra, ary miaraha miasa amin'ny fikambanana mifanohana.",
    referenceSource: "CIF (OMS)",
    lastUpdated: "Janvier 2026"
  },
  {
    id: "schizophrenie-psychose",
    name: "Troubles Psychotiques & Schizophrénie",
    malagasyName: "Fikorontanan'ny Saina Lalina (Schizophrénie)",
    category: "psychosis",
    categoryLabelFr: "Troubles Psychotiques",
    categoryLabelMg: "Fikorontanana Lalina",
    summaryFr: "Trouble psychiatrique sévère caractérisé par une altération de la perception de la réalité. Avec un traitement médical précoce et un suivi continu, les personnes peuvent mener une vie stable et intégrée.",
    summaryMg: "Aretina areti-tsaina lalina mahatonga ny olona hisaraka amin'ny zava-misy marina. Raha tsaboina haingana amin'ny fanafody sy fanaraha-maso dia afaka miaina milamina ny olona.",
    symptomsFr: [
      "Hallucinations (entendre des voix ou voir des choses invisibles aux autres)",
      "Idées délirantes (convictions inébranlables non conformes à la réalité, persécution)",
      "Désorganisation de la pensée et du discours",
      "Retrait social progressif et diminution des expressions émotionnelles"
    ],
    symptomsMg: [
      "Fandrenesana feo na fahitana zavatra tsy hitan'ny hafa (hallucinations)",
      "Finoana zavatra tsy marina toy ny hoe misy manenjika na mikasa hamono",
      "Fikorontanan'ny firesahana sy ny hevitra",
      "Fisintahana amin'ny fiaraha-monina sy fahaverezan'ny fihetseham-po"
    ],
    myths: [
      {
        mythFr: "« La personne est possédée par des esprits maléfiques et doit être enchaînée ou battue pour guérir. »",
        mythMg: "« Misy lolo na ambiroa ratsy ao aminy ka tokony hafatotra amin'ny rojo na kapohina mba hivoahan'ilay ratsy. »",
        realityFr: "ABSOLUMENT FAUX ET DANGEREUX. C'est une maladie neurologique et psychiatrique médicale qui requiert des antipsychotiques. L'enchaînement est une maltraitance qui aggrave l'état de la personne.",
        realityMg: "DISO TANTERAKA ARY MAMPIHETSIKA NY AINA. Aretina ara-tsiansa mila fanafody mpampitony any amin'ny hopitaly izany. Ny famatorana rojo dia fandikana lalàna sy fampijaliana mampidi-doza."
      }
    ],
    careLevelNeeded: 3,
    whoToConsultFr: "Médecin Psychiatre en centre hospitalier universitaire (CHU Befelatanana, CHU Anjanamasina, etc.). Prise en charge médicale indispensable.",
    whoToConsultMg: "Mpitsabo aretin-tsaina any amin'ny CHU (Befelatanana, Anjanamasina, sns). Tena ilaina maika ny fitsaboana ara-pahasalamana.",
    familyGuidanceFr: "Ne confrontez jamais violemment ses délires (ne dites pas « tu mens », mais « je comprends que cela te fasse peur »). Assurez la continuité de la prise de médicaments.",
    familyGuidanceMg: "Aza iadiana hevitra mahery vaika ny zavatra lazainy. Ataovy izay hahaizan'ny marary mihinana tsy tapaka ny fanafodiny.",
    referenceSource: "DSM-5-TR",
    lastUpdated: "Janvier 2026"
  },
  {
    id: "handicap-physique-moteur",
    name: "Handicap Moteur & Déficience Physique",
    malagasyName: "Fahasembanana Ara-Batana sy Fihetsika",
    category: "physical_motor",
    categoryLabelFr: "Handicap Moteur",
    categoryLabelMg: "Fahasembanana Ara-Batana",
    summaryFr: "Atteinte de la motricité réduisant l'autonomie physique (paralysie, amputation, infirmité motrice cérébrale, séquelles de polio). L'accessibilité universelle et l'inclusion professionnelle sont primordiales.",
    summaryMg: "Fahasarotana eo amin'ny fihetsehana sy ny fampiasana ny vatana (fahalemena, tapaka rantsam-batana, vokatry ny polio). Ny fanamorana ny fidirana sy ny asa no tena zava-dehibe.",
    symptomsFr: [
      "Difficultés ou impossibilité de se déplacer sans aide technique (béquilles, fauteuil roulant)",
      "Troubles de la préhension manuelle ou de la coordination motrice",
      "Fatigabilité physique accrue face aux obstacles d'accessibilité urbaine",
      "Douleurs musculo-squelettiques secondaires"
    ],
    symptomsMg: [
      "Fahasarotana mivezivezy tsy misy fitaovana fanampiana (kalesy, tehina)",
      "Fahasarotana mampiasa tanana na mandrindra fihetsika",
      "Havizanana haingana noho ny sakana amin'ny lalana sy trano",
      "Fanaintainan'ny vanin-taolana sy hozatra"
    ],
    myths: [
      {
        mythFr: "« Une personne avec un handicap physique est incapable de travailler ou d'étudier. »",
        mythMg: "« Ny olona kilemaina dia tsy afaka mianatra na miasa fa mila mitalaho fotsiny. »",
        realityFr: "Faux. Avec les aménagements raisonnables et l'accessibilité requise, les personnes handicapées exercent tous les métiers et ont de brillantes carrières.",
        realityMg: "Tsy marina. Raha omena fitaovana sy toerana mety tsara izy ireo dia mahavita asa sy fianarana tsara tahaka ny olona rehetra."
      }
    ],
    careLevelNeeded: 2,
    whoToConsultFr: "Médecin rééducateur, kinésithérapeute, ergothérapeute, appareilleurs orthopédiques et organismes d'insertion (PFPH/MAD).",
    whoToConsultMg: "Mpanao otra fitsaboana (kinésithérapeute), mpamboatra taolana sy fitaovana, ary fikambanana mampiditra amin'ny asa.",
    familyGuidanceFr: "Encouragez l'autonomie plutôt que la surprotection. Adaptez le domicile et soutenez l'accès à la formation et à l'emploi.",
    familyGuidanceMg: "Ampianaro hahaleo tena fa aza fehezina be loatra. Amboary ny trano hifanaraka aminy ary tohano amin'ny fianarana sy asa.",
    referenceSource: "CIF (OMS)",
    lastUpdated: "Février 2026"
  },
  {
    id: "addiction-substances",
    name: "Troubles Liés à l'Usage de Substances (Addictions)",
    malagasyName: "Fidorohana Zava-mahadomelina sy Toaka",
    category: "addiction",
    categoryLabelFr: "Addictions & Dépendances",
    categoryLabelMg: "Fiankinan-doha sy Zava-mahadomelina",
    summaryFr: "Dépendance physique et psychologique à une substance (alcool, tabac, cannabis, médicaments, drogues de synthèse). L'addiction est une maladie chronique du cerveau, pas un simple vice moral.",
    summaryMg: "Fiankinan-doha ara-batana sy ara-tsaina amin'ny toaka na zava-mahadomelina. Aretin'ny rafi-pitatitra izany fa tsy hoe faharatsiam-panahy tsotra.",
    symptomsFr: [
      "Envie irrépressible et compulsive de consommer (craving)",
      "Perte de contrôle sur la quantité ou la durée de consommation",
      "Tolérance accrue (besoin d'augmenter les doses pour le même effet)",
      "Syndrome de sevrage en cas d'arrêt brutal (tremblements, sueurs, angoisse)",
      "Abandon progressif des obligations familiales, scolaires ou professionnelles"
    ],
    symptomsMg: [
      "Faniriana tsy voatana handray ilay zava-mahadomelina na hisotro toaka",
      "Tsy fahafehezana ny fatra sotroina na laniana",
      "Fiharatsian'ny fahasalamana sy fikorontanan'ny asa aman-draharaha",
      "Mangovitra sy mikorontana raha vao tapahina ilay izy",
      "Fisintahana amin'ny adidy aman'andraikitra"
    ],
    myths: [
      {
        mythFr: "« Il suffirait de le punir ou de l'enfermer pour qu'il s'arrête. »",
        mythMg: "« Tokony saziana na hidiana dia hitsahatra ho azy. »",
        realityFr: "Faux. Le sevrage brutal sans surveillance médicale peut être mortel (ex: delirium tremens de l'alcool). Un protocole médical et addictologique est obligatoire.",
        realityMg: "Tsy marina. Ny fampitsaharana tampoka tsy misy mpitsabo dia mety hahafaty. Mila fitsaboana sy fanafody fanalana poizina."
      }
    ],
    careLevelNeeded: 3,
    whoToConsultFr: "Médecin addictologue, services spécialisés (CHU Anjanamasina unité d'addictologie), psychologue et groupes d'entraide.",
    whoToConsultMg: "Mpitsabo manokana momba ny fiankinan-doha, CHU Anjanamasina, psychologue sy vondrona mifanohana.",
    familyGuidanceFr: "Ne devenez pas complice du silence, posez des limites claires avec amour, refusez de financer la substance et proposez une prise en charge médicale.",
    familyGuidanceMg: "Aza manafina ny olana, mametraha fepetra mazava am-pitiavana, ary ento manatona mpitsabo manokana.",
    referenceSource: "CIM-11 (OMS)",
    lastUpdated: "Mars 2026"
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    category: "mental_health",
    categoryFr: "Santé Mentale",
    categoryMg: "Fahasalamana Ara-tsaina",
    titleFr: "Comprendre le modèle de soins en santé mentale : du soutien d'écoute à l'hospitalisation",
    titleMg: "Fahafantarana ny dingam-pitsaboana ara-tsaina : manomboka amin'ny fihainoana ka hatramin'ny hopitaly",
    excerptFr: "Pourquoi tous les troubles ne relèvent pas du psychiatre ? Comment s'orienter efficacement à Madagascar pour éviter les errances médicales.",
    excerptMg: "Nahoana no tsy ny aretin-tsaina rehetra no mila manatona mpitsabo aretin-tsaina avy hatrany ? Ahoana ny fizotran'ny fikarakarana eto Madagasikara.",
    contentFr: `À Madagascar, beaucoup pensent encore que consulter pour sa santé mentale signifie automatiquement aller en hôpital psychiatrique ou être « fou ». C'est une erreur fondamentale. Le système de soins moderne repose sur une pyramide à trois niveaux :

1. L'entraide communautaire et l'écoute primaire (Niveau 1) : les proches, les pairs-aidants, les associations étudiantes ou de quartier. C'est ici que l'on prévient le surmenage et que l'on brise l'isolement.
2. La prise en charge ambulatoire (Niveau 2) : assurée par les psychologues cliniciens et travailleurs sociaux. Elle traite l'anxiété, la dépression légère à modérée, les traumatismes sans nécessiter d'hospitalisation.
3. La psychiatrie hospitalière (Niveau 3) : réservée aux situations de crise aiguë, aux décompensations psychotiques ou aux dépressions sévères avec risque vital, prise en charge par les médecins psychiatres dans les CHU (Befelatanana, Anjanamasina, etc.).

Comprendre cette gradation permet à chacun de trouver la bonne porte d'entrée au bon moment.`,
    contentMg: `Eto Madagasikara, maro no mieritreritra fa raha miresaka fahasalamana ara-tsaina dia tonga dia hoe "adala" na tsy maintsy mankany Anjanamasina. Tsy marina izany. Mizara telo lehibe ny fitsaboana :
1. Fihainoana sy fifanampiana eny ifotony (Ambaratonga 1)
2. Fakan-kevitra amin'ny psychologue tsy mila mandry hopitaly (Ambaratonga 2)
3. Fitsaboana maika amin'ny hopitaly CHU tarihin'ny mpitsabo aretin-tsaina (Ambaratonga 3).`,
    author: "Équipe Éditoriale AEPSI",
    authorRole: "Psychologues cliniciens & Travailleurs sociaux",
    date: "10 Octobre 2026",
    readTime: "4 min"
  },
  {
    id: "art-2",
    category: "community",
    categoryFr: "Culture & Fihavanana",
    categoryMg: "Kolontsaina sy Fihavanana",
    titleFr: "Le Fihavanana : Notre ressource culturelle protectrice pour la santé mentale",
    titleMg: "Ny Fihavanana : Raki-tsarobidy mpiaro ny fahasalamana ara-tsaina eto amintsika",
    excerptFr: "Comment mobiliser la solidarité traditionnelle malgache sans tomber dans la culpabilisation ou le silence pesant.",
    excerptMg: "Ahoana no hanamafisana ny fihavanana hanampiana ny havana mijaly ara-tsaina tsy misy fitsarana na fanomezan-tsiny.",
    contentFr: `Dans la société malgache, l'individu n'est jamais isolé : « Ny fihavanana no maha-olona ». Lorsqu'une personne souffre psychologiquement, c'est l'ensemble du tissu social qui ressent cette onde de choc.

Cependant, le Fihavanana doit être renouvelé par l'écoute active et la démystification. Trop souvent, la honte sociale (« henatra ») pousse les familles à cacher un membre souffrant d'un trouble psychique ou d'un handicap. Remplacer le silence par un dialogue ouvert et bienveillant permet de faire du Fihavanana un véritable bouclier thérapeutique.`,
    contentMg: `Ny fihavanana dia hery lehibe mampitony ny saina. Saingy matetika ny henatra no mahatonga ny fianakaviana hanafina ny havana marary saina na manana fahasembanana. Fotoana izao hanovana izany ho fihainoana am-pitiavana sy fanohanana marina.`,
    author: "Mamy Razafindrakoto",
    authorRole: "Expert en Psychologie Sociale",
    date: "28 Septembre 2026",
    readTime: "3 min"
  },
  {
    id: "art-3",
    category: "disability",
    categoryFr: "Handicap & Inclusion",
    categoryMg: "Fahasembanana sy Fampidirana",
    titleFr: "L'orientation professionnelle des personnes en situation de handicap : Droits et opportunités",
    titleMg: "Fampidirana ny olona manana fahasembanana amin'ny tontolon'ny asa : Zo sy Fahafahana",
    excerptFr: "L'application oriente, elle n'insère pas : découvrez comment contacter les organismes d'insertion partenaires à Madagascar.",
    excerptMg: "Mitarika fa tsy mampiditra asa mivantana ny fampiharana : jereo ny fikambanana mpiara-miombon'antoka manampy amin'ny asa.",
    contentFr: `Le travail est un vecteur indispensable d'autonomie et de dignité. Les personnes en situation de handicap à Madagascar font face à des préjugés tenaces sur leurs compétences réelles.

Notre plateforme a pour vocation d'orienter les usagers vers les structures relais compétentes (PFPH/MAD, centres de formation adaptée, associations spécialisées) qui accompagnent concrètement la rédaction de CV, les entretiens et le dialogue avec les employeurs inclusifs.`,
    contentMg: `Ny asa dia manome hasina sy fahaleovantena. Ity sehatra ity dia manoro lalana anao mankany amin'ireo fikambanana manokana manampy amin'ny fitadiavana asa sy fanofanana sahaza.`,
    author: "Voahirana Andria",
    authorRole: "Conseillère en Insertion Sociale",
    date: "15 Septembre 2026",
    readTime: "5 min"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q-1",
    type: "true_false",
    questionFr: "Vrai ou Faux : Les troubles psychiatriques comme la dépression et la schizophrénie sont dus à une faiblesse de caractère ou à la sorcellerie ?",
    questionMg: "Marina sa Diso : Ny aretin-tsaina toy ny fahaketrahana sy ny schizophrénie dia vokatry ny fahalemen-toetra na fankatovana/mosavy ?",
    options: [
      {
        id: "q1-true",
        textFr: "Vrai",
        textMg: "Marina",
        isCorrect: false,
        explanationFr: "Non ! C'est scientifiquement faux. Les troubles de santé mentale sont des affections biomédicales et psychosociales documentées par la médecine et l'OMS (CIM-11). Ils ne résultent ni d'un manque de volonté ni d'un sortilège.",
        explanationMg: "Diso tanteraka ! Aretina ara-tsiansa misy fikorontanan'ny atidoha izany fa tsy vokatry ny mosavy na fahalemena velively."
      },
      {
        id: "q1-false",
        textFr: "Faux",
        textMg: "Diso",
        isCorrect: true,
        explanationFr: "Exactement ! Les troubles psychiques sont des maladies qui se soignent avec des approches médicales, psychologiques et sociales adaptées.",
        explanationMg: "Marina indrindra ! Aretina azo tsaboina amin'ny fomba ara-pahasalamana sy ara-tsaina sahaza izy ireo."
      }
    ]
  },
  {
    id: "q-2",
    type: "scenario",
    questionFr: "Mise en situation : Un ami ou collègue commence soudainement à hyperventiler, tremble et dit qu'il a l'impression d'étouffer ou de mourir (crise d'angoisse). Que devez-vous faire en premier ?",
    questionMg: "Toe-javatra : Misy namanao na mpiara-miasa aminao mikorontana fisefoana tampoka, mangovitra ary milaza fa sempotra sy ho faty (crise d'angoisse). Inona no tokony hataonao voalohany ?",
    options: [
      {
        id: "q2-opt1",
        textFr: "Lui crier dessus en lui disant de se calmer et de secouer ses bras",
        textMg: "Mivazavaza aminy hoe tony fa aza manao adaladala",
        isCorrect: false,
        explanationFr: "À éviter absolument ! Crier ou secouer augmente massivement sa panique et son rythme cardiaque.",
        explanationMg: "Tsy tokony hatao mihitsy ! Vao mainka mampitombo ny tahony izany."
      },
      {
        id: "q2-opt2",
        textFr: "L'isoler dans un endroit calme, s'asseoir à sa hauteur, parler d'une voix douce et respirer lentement ensemble",
        textMg: "Mitondra azy amin'ny toerana milamina, miara-mipetraka aminy, miteny malefaka ary miara-miaina miadana",
        isCorrect: true,
        explanationFr: "Parfait ! La présence rassurante, une voix posée et un rythme respiratoire synchronisé aident son système nerveux parasympathique à reprendre le dessus.",
        explanationMg: "Tonga lafatra ! Ny fitoniana sy ny fiaraha-misefo miadana no mamerina haingana ny fandriam-pahalemana ao amin'ny vatany."
      },
      {
        id: "q2-opt3",
        textFr: "Le laisser seul dans une pièce fermée pour qu'il réfléchisse",
        textMg: "Mamela azy irery ao an'efitrano hifantohany",
        isCorrect: false,
        explanationFr: "Dangereux ! L'isolement renforce le sentiment de mort imminente et de terreur.",
        explanationMg: "Mampidi-doza ! Ny faniriana hitoka-monina dia vao mainka mampitahotra azy."
      }
    ]
  },
  {
    id: "q-3",
    type: "quiz",
    questionFr: "Quel professionnel de santé est habilité à prescrire des médicaments psychiatriques ?",
    questionMg: "Iza amin'ireo manam-pahaizana ireo no afaka manoratra sy manome fanafody amin'ny fitsaboana aretin-tsaina ?",
    options: [
      {
        id: "q3-opt1",
        textFr: "Le Médecin Psychiatre (Docteur en médecine spécialisé)",
        textMg: "Mpitsabo Aretin-tsaina (Dokotera nianatra manokana momba ny aretin-tsaina - Psychiatre)",
        isCorrect: true,
        explanationFr: "Exactement ! Le psychiatre est un médecin. Le psychologue clinicien réalise des psychothérapies et bilans mais ne prescrit pas de médicaments.",
        explanationMg: "Marina ! Dokotera mpitsabo ny psychiatre ka afaka manome fanafody. Ny psychologue kosa dia mitsabo amin'ny firesahana sy fanazaran-tena."
      },
      {
        id: "q3-opt2",
        textFr: "Le Psychologue uniquement",
        textMg: "Ny Psychologue irery ihany",
        isCorrect: false,
        explanationFr: "Non, le psychologue pratique la psychothérapie par la parole mais n'étant pas médecin, il ne prescrit pas de traitement médicamenteux.",
        explanationMg: "Tsia, tsy manoratra fanafody ny psychologue."
      },
      {
        id: "q3-opt3",
        textFr: "N'importe quel pharmacien de quartier",
        textMg: "Na iza na iza mpivarotra fanafody",
        isCorrect: false,
        explanationFr: "Non, les psychotropes sont strictement réglementés et nécessitent une ordonnance médicale pour éviter toute dépendance ou complication.",
        explanationMg: "Tsia, fanafody voaaro sy mila taratasy avy amin'ny dokotera ny fanafodin'ny saina."
      }
    ]
  }
];

export const ROLE_TIPS_DATA: RoleTip[] = [
  {
    id: "tip-student",
    role: "student",
    titleFr: "Conseils pour les Étudiants & Jeunes",
    titleMg: "Torohevitra ho an'ny Mpianatra sy Tanora",
    contentFr: "Le stress des examens, l'éloignement familial et l'incertitude quant à l'avenir pèsent lourdement sur la santé mentale des jeunes malgaches.",
    contentMg: "Ny fanadinana, ny fahasahiranan'ny fiainana ary ny ahiahy amin'ny hoavy dia mampitombo ny raritsaina ho an'ny mpianatra.",
    keyActionFr: "Fixez une heure stricte d'extinction des écrans le soir (22h00). Ne révisez jamais toute la nuit avant un examen. Parlez de vos doutes à un ami de confiance ou à la cellule d'écoute universitaire.",
    keyActionMg: "Atsaharo ny telefaonina amin'ny 10 ora alina. Aza manao alim-pandry fotsiny alohan'ny fanadinana. Miresaha amin'ny namana na sampana fihainoana."
  },
  {
    id: "tip-worker",
    role: "worker",
    titleFr: "Conseils pour les Travailleurs & Salariés",
    titleMg: "Torohevitra ho an'ny Mpiasa sy Mpikarama",
    contentFr: "Le surmenage professionnel (burn-out), les micro-conflits d'équipe et la pression financière créent une charge mentale épuisante.",
    contentMg: "Ny harerahana tafahoatra amin'ny asa, ny fifamaliana kely ary ny olana ara-bola dia manavesatra ny loha.",
    keyActionFr: "Sachez dire non aux heures supplémentaires excessives sans culpabilité. Prenez une pause de 5 minutes de respiration toutes les 2 heures. Ne ramenez pas les conflits du bureau au foyer.",
    keyActionMg: "Mianara miteny hoe tsia am-panajana raha tafahoatra ny asa. Manaova fisefoana 5 minitra isaky ny 2 ora. Aza entina mody an-trano ny hatezerana any am-piasana."
  },
  {
    id: "tip-parent",
    role: "parent",
    titleFr: "Conseils pour les Parents & Éducateurs",
    titleMg: "Torohevitra ho an'ny Ray aman-dReny sy Mpanabe",
    contentFr: "Détecter les premiers signes de détresse ou de particularité neurodéveloppementale chez son enfant sans panique ni jugement.",
    contentMg: "Fikarohana sy fahitana mialoha ny fahasahiranan'ny zaza nefa tsy misy tahotra na fanamelohana.",
    keyActionFr: "Soyez attentif aux changements brutaux de comportement : baisse soudaine des notes, isolement dans la chambre, perte d'appétit. Privilégiez l'écoute plutôt que les reproches.",
    keyActionMg: "Araho maso raha miova tampoka ny toetrany : tsy mety mihinana, mitoka-monina, midina ny naoty. Miresaha am-pitiavana fa aza tonga dia mananatra amin'ny hatezerana."
  },
  {
    id: "tip-caregiver",
    role: "caregiver",
    titleFr: "Conseils pour les Proches & Aidants Familiaux",
    titleMg: "Torohevitra ho an'ny Mpanohana sy Mpikarakara Havana",
    contentFr: "Prendre soin d'un proche vivant avec un handicap ou un trouble psychique est un acte d'amour immense qui peut mener à l'épuisement.",
    contentMg: "Ny fikarakarana havana marary na manana fahasembanana dia fitiavana lehibe saingy mety handany hery raha tsy mitandrina.",
    keyActionFr: "Vous ne pouvez pas sauver votre proche en vous détruisant vous-même. Accordez-vous des temps de répit indispensables. Partagez la charge avec d'autres membres de la famille et rejoignez un groupe d'aidants.",
    keyActionMg: "Tsy afaka hanampy ny havanao ianao raha marary ny tenanao. Manomeza fotoana hialana sasatra. Zarao amin'ny hafa ny adidy ary mitadiava fanampiana."
  },
  {
    id: "tip-disabled",
    role: "concerned_person",
    titleFr: "Pour les Personnes en Situation de Handicap",
    titleMg: "Ho an'ny Olona Manana Fahasembanana",
    contentFr: "Affirmer vos droits fondamentaux, cultiver votre estime de soi et trouver les organismes d'insertion et d'accessibilité.",
    contentMg: "Fiarovana ny zo fototra, fitokisan-tena ary fitadiavana ireo toerana manampy amin'ny fampidirana amin'ny asa.",
    keyActionFr: "Rapprochez-vous de la Plateforme des Personnes Handicapées (PFPH/MAD). Ne laissez personne vous convaincre que vos rêves sont limités par votre corps ou votre esprit.",
    keyActionMg: "Mankanesa amin'ny fikambanana mpiaro ny zonao. Aza manaiky ho kivy na havelan'ny hafa hino fa tsy manan-danja ny fiainanao."
  },
  {
    id: "tip-org",
    role: "organization",
    titleFr: "Pour les Organisations, Entreprises & Écoles",
    titleMg: "Ho an'ny Orinasa, Fikambanana sy Sekoly",
    contentFr: "Construire un environnement professionnel inclusif, bienveillant et respectueux de la neurodiversité et du handicap.",
    contentMg: "Fametrahana tontolo miasa mirindra, manaja ny fahasamihafana ary mampiditra ny olona manana fahasembanana.",
    keyActionFr: "Organisez une journée annuelle de sensibilisation à la santé mentale. Aménagez les postes de travail (rampes, logiciels adaptés, flexibilité horaire). Mettez en place une charte anti-harcèlement stricte.",
    keyActionMg: "Manomana hetsika fampahafantarana ny fahasalamana ara-tsaina. Amboary ny birao hahafahan'ny kalesy miditra. Mametraha fitsipika hentitra manohitra ny fanorisoran-toetra."
  }
];

export const PEER_STORIES: PeerStory[] = [
  {
    id: "story-1",
    name: "Herizo R.",
    age: 29,
    location: "Antananarivo",
    topicFr: "Surmonter la dépression sévère et briser le silence familial",
    topicMg: "Fandresena ny fahaketrahana lalina sy fahasahiana niteny tamin'ny fianakaviana",
    titleFr: "« J'ai cru que j'étais possédé, alors que j'étais simplement malade et soignable »",
    titleMg: "« Nihevitra aho fa nisy lolo, kanefa aretina azo tsaboina tsotra izao »",
    quoteFr: "« Le jour où j'ai accepté de franchir la porte du CHU Befelatanana avec un psychologue, ma vie a recommencé. »",
    quoteMg: "« Ny andro nandehanako niresaka tamin'ny mpitsabo saina no nanomboka indray ny fiainako. »",
    fullStoryFr: "À 24 ans, après l'obtention de ma licence, j'ai sombré dans un noir total. Je ne sortais plus de mon lit, je ne mangeais presque plus. Ma famille pensait qu'un rival m'avait jeté un sortilège. Nous avons dépensé beaucoup d'argent sans résultat. C'est grâce à un ami travailleur social qui m'a orienté vers le service de neuro-psychiatrie que j'ai reçu un diagnostic clair : trouble dépressif majeur. Avec un traitement médicamenteux court et une psychothérapie, j'ai retrouvé l'envie de créer. Aujourd'hui, je suis pair-aidant.",
    fullStoryMg: "Tamin'ny faha-24 taonako dia rendrika tao anaty alahelo mangidy aho. Tsy nivoaka ny efitranoko intsony. Nieritreritra ny fianakaviako fa nisy namosavy aho ka nandany vola be tamin'ny fomba nentim-paharazana. Taty aoriana nisy mpanampy ara-tsosialy nanoro ahy hankany Befelatanana. Rehefa nahazo fitsaboana sy resaka mety aho dia niverina tsikelikely ny heriko.",
    takeawayFr: "La médecine psychiatrique n'est pas une honte, c'est une science réparatrice.",
    takeawayMg: "Tsy henatra ny manatona mpitsabo aretin-tsaina, fa famonjena aina."
  },
  {
    id: "story-2",
    name: "Fanja M.",
    age: 34,
    location: "Toamasina",
    topicFr: "Vivre avec un handicap moteur et diriger une équipe",
    topicMg: "Fahasembanana ara-batana sy fitarihana mpiasa amin'ny asa",
    titleFr: "« Mes roues sont mes pieds, mais ma compétence est intacte »",
    titleMg: "« Ny kalesiko no tongotro, fa ny fahaizako dia feno sy vonona »",
    quoteFr: "« Le handicap est dans le regard et dans les escaliers des autres, pas dans ma volonté. »",
    quoteMg: "« Ny sakana dia eny amin'ny tohatra sy ny fijerin'ny olona, fa tsy ao an-tsaiko. »",
    fullStoryFr: "Suite à un accident de la circulation à l'âge de 18 ans, j'ai perdu l'usage de mes jambes. Au début, l'entourage me voyait comme une charge. J'ai rejoint une association de femmes handicapées membre de la Plateforme Handicap. Grâce à des formations en gestion et à l'accès au télétravail, je gère aujourd'hui une entreprise de services comptables. Ce dont nous avons besoin, ce n'est pas de la pitié, mais d'accessibilité et de chances égales.",
    fullStoryMg: "Niharan-doza tamin'ny fiara aho teo amin'ny faha-18 taonako ka tsy afaka nandeha tongotra intsony. Nieritreritra ny olona fa ho vesatra fotsiny aho. Saingy niditra tamin'ny fikambanana aho, nianatra fitantanana ka mitantana orinasa kely amin'izao fotoana izao. Tsy fiantrana no ilainay fa fanomezana sehatra.",
    takeawayFr: "L'inclusion commence lorsque nous supprimons les barrières physiques et mentales.",
    takeawayMg: "Manomboka ny fampidirana rehefa esorina ny sakana amin'ny lalana sy ny saina."
  }
];

export const CRISIS_GUIDE = {
  dos: [
    {
      fr: "Restez calme et gardez un ton de voix posé, lent et doux.",
      mg: "Mitonia tsara ary mitenena amin'ny feo malefaka sy miadana."
    },
    {
      fr: "Écoutez activement sans contredire immédiatement ses perceptions effrayantes.",
      mg: "Mihainoa am-pitiavana fa aza tonga dia mandà ny zavatra mampatahotra azy."
    },
    {
      fr: "Réduisez les stimulations : éteignez les bruits forts, baissez les lumières agressives, demandez aux curieux de s'éloigner.",
      mg: "Ahena ny tabataba sy ny hazavana mamiratra, ary asaivo manalavitra ireo olona mijery fotsiny."
    },
    {
      fr: "Proposez de s'asseoir et invitez à respirer ensemble (inspiration lente par le nez, expiration longue par la bouche).",
      mg: "Asao hipetraka ary miaraha miaina miadana (misintona amin'ny orona, mamoaka amin'ny vava)."
    },
    {
      fr: "Restez à ses côtés jusqu'à la fin de la crise ou l'arrivée des secours.",
      mg: "Mijanona eo akaikiny mandra-pahatonin'ny krizy na fahatongavan'ny mpitsabo."
    }
  ],
  donts: [
    {
      fr: "NE JAMAIS crier, secouer la personne ou lui donner des gifles.",
      mg: "AZA MIATRAIKATRAKA MIHITSY, aza akatona na felahana."
    },
    {
      fr: "NE JAMAIS lui dire « tu fais exprès », « secoue-toi » ou « ce n'est rien du tout ».",
      mg: "AZA MITENY hoe « manao kitoatoa ianao » na « tsinontsinona io fa fahalemena »."
    },
    {
      fr: "NE JAMAIS l'enfermer à clé seule dans une pièce sombre ni l'attacher.",
      mg: "AZA HIDIANA IRERY ao anaty haizina na fatorana amin'ny tady/rojo."
    },
    {
      fr: "NE JAMAIS tenter de lui faire boire ou manger de force pendant une crise de panique ou de spasmes.",
      mg: "AZA FORCENA hisotro rano na hihinana amin'ny fotoana maha-sempotra azy."
    },
    {
      fr: "NE JAMAIS la juger ni divulguer sa situation à des tiers pour se moquer.",
      mg: "AZA ITSARANA na ambarambara amin'ny hafa mba hanesoana azy."
    }
  ]
};

export const EMERGENCY_NUMBERS = [
  {
    name: "CHU JRB Befelatanana (Urgences & Neuro-Psychiatrie)",
    phone: "+261 20 22 270 51",
    available: "24h/24 - 7j/7",
    city: "Antananarivo"
  },
  {
    name: "CHU Anjanamasina (Hôpital Psychiatrique)",
    phone: "+261 20 22 441 22",
    available: "24h/24 - 7j/7",
    city: "Antananarivo Avaradrano"
  },
  {
    name: "CENHOSOA HOMI (Soavinandriana Urgences)",
    phone: "+261 20 22 392 11",
    available: "24h/24 - 7j/7",
    city: "Antananarivo"
  },
  {
    name: "Police Secours (Madagascar)",
    phone: "117",
    available: "24h/24",
    city: "National"
  },
  {
    name: "Pompiers / Secours d'Urgence",
    phone: "118",
    available: "24h/24",
    city: "National"
  },
  {
    name: "Cellule d'Écoute AEPSI (Orientation)",
    phone: "+261 34 50 123 45",
    available: "08h00 - 18h00",
    city: "National"
  }
];
