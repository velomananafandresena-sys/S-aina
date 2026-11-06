import { useState } from 'react';
import { HeartHandshake, CheckCircle2, XCircle, AlertTriangle, BatteryCharging, Shield, Sparkles } from 'lucide-react';
import { CRISIS_GUIDE } from '../data/appData';
import { Language } from '../types';
import listeningImg from '../assets/images/listening_counseling_dialogue_1791739360969.jpg';

interface CaregiversSectionProps {
  lang: Language;
  onOpenEmergency: () => void;
  onNavigateToTools: () => void;
}

export function CaregiversSection({ lang, onOpenEmergency, onNavigateToTools }: CaregiversSectionProps) {
  const [activeCrisisType, setActiveCrisisType] = useState<'panic' | 'agitation' | 'suicidal' | 'withdrawal'>('panic');

  const crisisScenarios = [
    {
      id: 'panic' as const,
      titleFr: "Crise de Panique / Angoisse Aiguë",
      titleMg: "Krizy Tahotra sy Fahasemporana Tampoka",
      descFr: "La personne hyperventile, tremble, a peur de mourir ou étouffe.",
      descMg: "Mikorontana ny fisefoany, mangovitra, mahatsapa ho sempotra na ho faty.",
      stepsFr: [
        "Installez la personne assise dans un endroit calme et aéré.",
        "Respirez lentement devant elle pour synchroniser son rythme respiratoire (inspiration 4s, expiration 6s).",
        "Répétez d'une voix calme : « Tu es en sécurité ici, la crise va redescendre dans quelques minutes ».",
        "Posez une main douce sur son épaule uniquement si elle y consent."
      ],
      stepsMg: [
        "Ampipetraho amin'ny toerana milamina sy madio rivotra izy.",
        "Miaraha miaina miadana aminy (sintomy 4 segondra ny rivotra, avoahy 6 segondra).",
        "Teny malefaka : « Tsy misy atahorana eto, hilamina tsy ho ela ity ».",
        "Aza terena raha tsy manaiky hokasihina izy."
      ]
    },
    {
      id: 'agitation' as const,
      titleFr: "Crise d'Agitation ou Épisode Psychotique",
      titleMg: "Savorovoro sy Fahaverezan-tsaina Tampoka",
      descFr: "La personne est confuse, parle de menaces invisibles, crie ou gesticule.",
      descMg: "Mikorontana ny sainy, milaza zavatra mampatahotra tsy misy, mikiaka na mihetsiketsika.",
      stepsFr: [
        "Ne discutez pas la véracité de ses délires. Dites : « Je vois que cela te fait très peur, je reste avec toi ».",
        "Gardez une distance physique de sécurité (2 mètres) sans lui bloquer la sortie.",
        "Éloignez tous les objets tranchants ou dangereux discrètement.",
        "Contactez les urgences psychiatriques (CHU Befelatanana : +261 20 22 270 51) si le danger persiste."
      ],
      stepsMg: [
        "Aza iadiana hevitra ny zavatra hitany na henoiny. Lazao fa azonao ny tahony.",
        "Mijanona amin'ny halavirana 2 metatra, aza sakantsakanana ny fivoahany.",
        "Esory mangina ireo zavatra maranitra na mety handratra.",
        "Antsoy ny vonjy taitra hopitaly Befelatanana raha tsy milamina."
      ]
    },
    {
      id: 'suicidal' as const,
      titleFr: "Propos Suicidaires ou Détresse Vitale",
      titleMg: "Eritreritra Hamono Tena na Loza Mitatao",
      descFr: "La personne dit vouloir en finir, fait ses adieux ou a préparé un moyen d'agir.",
      descMg: "Milaza ho te ho faty, manao veloma na manomana zavatra hanapahana ny ainy.",
      stepsFr: [
        "Prenez TOUJOURS ses propos au sérieux. Ne dites jamais « tu dis ça pour attirer l'attention ».",
        "Ne laissez JAMAIS la personne seule, même pour aller chercher de l'eau.",
        "Retirez immédiatement médicaments, armes, cordes ou produits toxiques de la pièce.",
        "Activez immédiatement le protocole d'urgence et amenez-la au CHU ou appelez le 117 / médecin."
      ],
      stepsMg: [
        "RAISO HO TENA ZAVA-DEHIBE foana. Aza atao tsinontsinona mihitsy.",
        "Aza avela irery mihitsy na dia segondra vitsy aza.",
        "Esory haingana ny fanafody, tady na poizina.",
        "Ento avy hatrany any amin'ny hopitaly CHU na antsoy ny vonjy taitra."
      ]
    },
    {
      id: 'withdrawal' as const,
      titleFr: "Repli Massif et Mutisme",
      titleMg: "Fitokanana Tanteraka sy Tsy Fitokisana",
      descFr: "La personne ne parle plus, reste prostrée dans son lit, ne se nourrit plus.",
      descMg: "Tsy mety miteny intsony, tsy mivoaka ny fandriana, tsy mety mihinan-kanina.",
      stepsFr: [
        "Respectez son silence tout en manifestant une présence chaleureuse sans pression (« Je suis là si tu veux du thé »).",
        "Proposez de petites actions très simples (boire une gorgée d'eau, regarder par la fenêtre).",
        "Sollicitez un psychologue ou travailleur social pour une visite à domicile si possible.",
        "Vérifiez l'hydratation et le sommeil quotidien."
      ],
      stepsMg: [
        "Aza terena hiteny fa manomeza fitiavana amin'ny fahanginana (« Eto akaikinao aho raha mila zavatra ianao »).",
        "Manomeza rano matetika sy sakafo maivana.",
        "Mitadiava mpitsabo saina afaka manampy an-trano raha ilaina.",
        "Araho maso ny torimaso sy ny heriny."
      ]
    }
  ];

  return (
    <section className="space-y-10">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Guide Pratique pour l'Entourage" : "Torolalana ho an'ny Fianakaviana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Accompagner nos Proches : Savoir Réagir sans s'Épuiser" 
            : "Fanohanana ny Havana : Fahaizana Mandray sy Fiarovana ny Tenanao"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Vivre avec une personne ayant un trouble psychique ou un handicap demande de l'empathie, des repères concrets et des limites saines. Vous n'êtes pas seul : découvrez les attitudes qui apaisent et celles qui aggravent la détresse."
            : "Ny fiarahana amin'ny havana marary na manana fahasembanana dia mila fitiavana sy fahalalana marina. Jereo eto ny fihetsika mampahery sy ireo zavatra tsy tokony hatao mihitsy."}
        </p>
      </div>

      {/* Editorial Split Hero for Caregivers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white border border-stone-200/90 rounded-2xl shadow-sm overflow-hidden">
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
            {lang === 'fr' ? "Écoute empathique" : "Fihainoana am-pitiavana"}
          </span>
          <h3 className="text-2xl font-bold text-stone-900">
            {lang === 'fr' ? "« Être là » vaut mieux que donner mille leçons" : "Ny fanatrehana am-pitiavana no sarobidy indrindra"}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            {lang === 'fr'
              ? "Quand un proche va mal, notre premier réflexe est souvent de vouloir régler le problème immédiatement ou de lui dire de « positiver ». Pourtant, ce dont il a le plus besoin, c'est de sentir que sa souffrance est entendue et qu'il n'est pas un fardeau pour sa famille."
              : "Rehefa mijaly ny havantsika dia matetika isika maniry ny handamina izany haingana na mananatra azy. Ny tena ilainy anefa dia ny mahafantatra fa misy mihaino ny fony ary tsy vesatra ho an'ny fianakaviana izy."}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold shadow-sm transition"
            >
              {lang === 'fr' ? "Numéros d'urgence en cas de danger" : "Laharana vonjy aina maika"}
            </button>
            <button
              onClick={onNavigateToTools}
              className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition"
            >
              {lang === 'fr' ? "Exercices de respiration guidée" : "Fanazaran-tena fisefoana"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 bg-stone-100 min-h-[260px] lg:min-h-full relative">
          <img
            src={listeningImg}
            alt="Entretien d'écoute bienveillant à Madagascar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Comparative Table: CHOSES À FAIRE VS CHOSES À ÉVITER */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-bold text-stone-900">
            {lang === 'fr' ? "Que faire et que NE PAS faire au quotidien ?" : "Inona no tokony hatao ary inona no FADIANA tanteraka ?"}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {lang === 'fr' 
              ? "Les attitudes recommandées par les professionnels et les pièges relationnels à éviter" 
              : "Ny toetra tsara mampitony sy ireo hadisoana matetika mankarary fo"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* DOS Column */}
          <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>{lang === 'fr' ? "Ce qui apaise et aide vraiment :" : "Zavatra manampy sy mampitony :"}</span>
            </div>
            <ul className="space-y-3 text-xs text-stone-700">
              {CRISIS_GUIDE.dos.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{lang === 'fr' ? item.fr : item.mg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DONTS Column */}
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <XCircle className="w-5 h-5" />
              <span>{lang === 'fr' ? "Ce qu'il faut ÉVITER absolument :" : "Zavatra FADIANA tanteraka :"}</span>
            </div>
            <ul className="space-y-3 text-xs text-stone-700">
              {CRISIS_GUIDE.donts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-700 font-bold shrink-0 mt-0.5">✕</span>
                  <span className="font-medium text-stone-800">{lang === 'fr' ? item.fr : item.mg}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Situations de Crise : Protocole Interactif */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
        <div className="border-b border-stone-100 pb-4">
          <h3 className="text-xl font-bold text-stone-900">
            {lang === 'fr' ? "Premiers Gestes en Cas de Crise Aiguë" : "Dingana Voalohany Rehefa Misy Krizy Maika"}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {lang === 'fr' ? "Sélectionnez le type de crise pour afficher la conduite immédiate à tenir" : "Safidio ny karazana krizy hahitana ny zavatra hatao haingana"}
          </p>
        </div>

        {/* Crisis Type Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {crisisScenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActiveCrisisType(sc.id)}
              className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                activeCrisisType === sc.id
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {lang === 'fr' ? sc.titleFr : sc.titleMg}
            </button>
          ))}
        </div>

        {/* Selected Crisis Content */}
        {(() => {
          const current = crisisScenarios.find((s) => s.id === activeCrisisType)!;
          return (
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
              <div>
                <h4 className="text-base font-bold text-stone-900">
                  {lang === 'fr' ? current.titleFr : current.titleMg}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  {lang === 'fr' ? current.descFr : current.descMg}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
                  {lang === 'fr' ? "Actions immédiates recommandées :" : "Dingana tokony hatao avy hatrany :"}
                </span>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-stone-700 pl-1">
                  {(lang === 'fr' ? current.stepsFr : current.stepsMg).map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })()}

      </div>

      {/* Prendre soin de soi en tant qu'aidant (Burnout de l'aidant) */}
      <div className="p-6 lg:p-8 bg-stone-100 border border-stone-200 rounded-2xl space-y-4">
        <div className="flex items-center gap-2.5 text-teal-900 font-bold">
          <BatteryCharging className="w-5 h-5 text-teal-700" />
          <h3 className="text-lg font-bold">
            {lang === 'fr' ? "Prendre Soin de Soi : Éviter l'Épuisement de l'Aidant" : "Fiarovana ny Tenanao : Fisorohana ny Harerahan'ny Mpanampy"}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
          {lang === 'fr'
            ? "Pour verser de l'eau, il faut que la cruche soit remplie. Vous ne pouvez pas soutenir efficacement un proche si vous êtes vous-même à bout de forces physiques et mentales. Accordez-vous des respirations régulières, déléguez les tâches quotidiennes et confiez vos doutes à un professionnel ou à un groupe de pairs."
            : "Raha te hanampy ny hafa ianao dia tsy maintsy salama koa ny tenanao. Aza manao ny zava-drehetra irery. Manomeza fotoana hialana sasatra ary zarao amin'ny fianakaviana hafa ny adidy."}
        </p>
      </div>

    </section>
  );
}
