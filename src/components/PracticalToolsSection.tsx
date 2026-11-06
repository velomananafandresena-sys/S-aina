import { useState, useEffect } from 'react';
import { Wind, Eye, Compass, Heart, Play, Pause, RotateCcw, Sparkles, BookOpen, Check } from 'lucide-react';
import { Language } from '../types';

interface PracticalToolsSectionProps {
  lang: Language;
}

export function PracticalToolsSection({ lang }: PracticalToolsSectionProps) {
  const [activeTab, setActiveTab] = useState<'primary_care' | 'prevention' | 'culture'>('primary_care');

  // Cardiac Coherence Timer State
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  // 5-4-3-2-1 Grounding Step State
  const [groundingStep, setGroundingStep] = useState(0);

  // Emotion Compass Selected State
  const [selectedEmotion, setSelectedEmotion] = useState<'anxious' | 'sad' | 'angry' | 'overwhelmed'>('anxious');

  // Breathing Loop
  useEffect(() => {
    if (!isBreathingActive) return;

    const interval = setInterval(() => {
      setPhaseSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Switch phase
          if (breathPhase === 'inspire') {
            setBreathPhase('hold');
            return 2;
          } else if (breathPhase === 'hold') {
            setBreathPhase('expire');
            return 6;
          } else {
            setBreathPhase('inspire');
            setCyclesCompleted((c) => c + 1);
            return 4;
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, breathPhase]);

  const groundingSteps = [
    {
      count: 5,
      titleFr: "5 choses que vous pouvez VOIR",
      titleMg: "Zavatra 5 azonao JAIRINA manodidina anao",
      descFr: "Regardez autour de vous. Remarquez 5 détails visuels précis : la texture d'un mur, une plante, la lumière à travers la fenêtre, une couleur vive, vos mains.",
      descMg: "Jereo ny manodidina. Manasà zavatra 5 mazava : loko iray, voninkazo, hazavana, ny tananao, zavatra eny ambony latabatra."
    },
    {
      count: 4,
      titleFr: "4 choses que vous pouvez TOUCHER",
      titleMg: "Zavatra 4 azonao TSAPAIN-TANANA",
      descFr: "Touchez la surface de vos vêtements, la fraîcheur d'une table en bois, la texture de votre chaise, ou frottez vos deux paumes l'une contre l'autre.",
      descMg: "Tsapao ny akanjonao, ny hafanana na hatsiaky ny latabatra, ny seza ipetrahanao, na katsaho ny felatananao."
    },
    {
      count: 3,
      titleFr: "3 sons que vous pouvez ENTENDRE",
      titleMg: "Feo 3 azonao RENESINA",
      descFr: "Fermez un instant les yeux. Écoutez le chant d'un oiseau, le bruit lointain d'une voiture, le souffle du vent ou le bourdonnement d'une pièce.",
      descMg: "Mihainoa feon'ny vorona, feom-piarakodia lavitra, feon'ny rivotra na fisefoanao manokana."
    },
    {
      count: 2,
      titleFr: "2 odeurs que vous pouvez SENTIR",
      titleMg: "Fofona 2 azonao TSOFAVINA",
      descFr: "Sentez l'air autour de vous, le parfum d'un savon, l'odeur du café ou du thé, ou l'odeur de la terre humide.",
      descMg: "Fofony ny savony, ny kafe na dite, na ny fofon'ny tany madio."
    },
    {
      count: 1,
      titleFr: "1 goût ou pensée positive d'ancrage",
      titleMg: "Tsiron-javatra 1 na eritreritra tsara 1 mampahery",
      descFr: "Prenez une gorgée d'eau fraîche, ou répétez intérieurement : « Je suis vivant, mon corps est là, ce moment difficile va passer ».",
      descMg: "Misotroa rano mangatsiaka eran'ny vava, na lazao am-po hoe : « Velona aho, eto aho, handalo izao fotoana sarotra izao »."
    }
  ];

  const emotionCompassData = {
    anxious: {
      titleFr: "Je ressens une anxiété étouffante / de la panique",
      titleMg: "Mahatsiaro fanahiana mahery vaika sy sempotra aho",
      adviceFr: "Votre système sympathique est suractivé. Ralentissez immédiatement l'expiration. Buvez lentement un verre d'eau tempérée. Vos pensées catastrophistes ne sont que du bruit passager, pas des faits certains.",
      adviceMg: "Mikorontana ny fitempon'ny fonao. Avoahy miadana ny fisefoana. Misotroa rano malefaka. Tsy ny zavatra atahoranao rehetra akory no tena hisy.",
      actionFr: "Faites 3 minutes de cohérence cardiaque ci-dessous."
    },
    sad: {
      titleFr: "Je ressens un vide intérieur ou une tristesse lourde",
      titleMg: "Mahatsiaro foana sy alahelo mavesatra loatra aho",
      adviceFr: "La tristesse demande de la douceur, pas de la colère contre vous-même. Ne restez pas dans l'obscurité. Sortez marcher 10 minutes sous le soleil pour stimuler la sérotonine naturelle.",
      adviceMg: "Aza tezitra amin'ny tenanao raha malahelo. Aza mijanona anaty haizina. Mandehana mitsangantsangana kely 10 minitra amin'ny masoandro.",
      actionFr: "Appelez un proche bienveillant ou écoutez une musique apaisante."
    },
    angry: {
      titleFr: "Je suis submergé de colère ou d'irritabilité",
      titleMg: "Tezitra mafy sy tsy mahatanty zavatra aho",
      adviceFr: "L'énergie de la colère monte dans les mâchoires et les poings. Desserrez les dents, secouez vos bras pendant 30 secondes pour évacuer la tension motrice, et écrivez ce que vous ressentez sur une feuille.",
      adviceMg: "Vohay ny nify, ahetsiketsaho mafy ny tanana mba hivoaka ny herin'ny hatezerana, ary soraty amin'ny taratasy izay mampalahelo anao.",
      actionFr: "Isolez-vous 5 minutes avant de répondre à quiconque."
    },
    overwhelmed: {
      titleFr: "Mon esprit est saturé de pensées et de stress",
      titleMg: "Mavesatra loatra ny saiko, feno eritreritra be loatra",
      adviceFr: "Cerveau en surchauffe. Choisissez UNE SEULE tâche simple à accomplir maintenant (ex: ranger votre lit, boire un thé). Le reste attendra demain.",
      adviceMg: "Be loatra ny zavatra eritreretinao. Manaova zavatra tsotra iray monja dieny izao (mandamina fandriana, misotro dite). Ny sisa avelao rahampitso.",
      actionFr: "Pratiquez la technique d'ancrage 5-4-3-2-1 ci-dessous."
    }
  };

  return (
    <section className="space-y-10">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Boussole & Bien-Être Pratique" : "Fitaovana sy Fampitoniana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Outils Pratiques : Prévention & Prise en Charge Primaire" 
            : "Fitaovana Fampitoniana sy Fahasalamana Ara-tsaina"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Conformément à nos recommandations, nous distinguons clairement la prévention éducative et la prise en charge primaire numérique (exercices guidés d'apaisement), enrichies par la dimension culturelle malgache du Fihavanana."
            : "Fampitoniana saina sy fo amin'ny fomba tsotra sy azo ampiharina avy hatrany, ampiarahana amin'ny fahendrena malagasy sy ny fihavanana."}
        </p>
      </div>

      {/* 3 Main Categories Toggle Buttons */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-2xl max-w-2xl">
        <button
          onClick={() => setActiveTab('primary_care')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
            activeTab === 'primary_care'
              ? 'bg-white text-teal-950 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Wind className="w-4 h-4 text-teal-700" />
          <span>{lang === 'fr' ? "Prise en Charge Primaire (Outils)" : "Fitaovana Fampitoniana"}</span>
        </button>

        <button
          onClick={() => setActiveTab('prevention')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
            activeTab === 'prevention'
              ? 'bg-white text-teal-950 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-teal-700" />
          <span>{lang === 'fr' ? "Prévention & Éducation" : "Fisorohana sy Fahalalana"}</span>
        </button>

        <button
          onClick={() => setActiveTab('culture')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 ${
            activeTab === 'culture'
              ? 'bg-white text-teal-950 shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Heart className="w-4 h-4 text-teal-700" />
          <span>{lang === 'fr' ? "Fihavanana & Culture" : "Fihavanana sy Kolontsaina"}</span>
        </button>
      </div>

      {/* TAB 1: PRISE EN CHARGE PRIMAIRE (EXERCICES DIRECTS) */}
      {activeTab === 'primary_care' && (
        <div className="space-y-8">
          
          {/* INTERACTIVE CARDIAC COHERENCE */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  {lang === 'fr' ? "Régulation du Système Nerveux" : "Fandaminana ny Fisefoana"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                  {lang === 'fr' ? "Cohérence Cardiaque 4-2-6" : "Fisefoana Milamina 4-2-6"}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {lang === 'fr' 
                    ? "Ralentit les battements du cœur et abaisse le cortisol en 3 minutes" 
                    : "Mampidina haingana ny fitempon'ny fo sy ny fikorontanan-tsaina ao anatin'ny 3 minitra"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-lg text-stone-700">
                  {lang === 'fr' ? `Cycles : ${cyclesCompleted}` : `Fihodinana : ${cyclesCompleted}`}
                </span>
                <button
                  onClick={() => setIsBreathingActive(!isBreathingActive)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-sm transition flex items-center gap-1.5 ${
                    isBreathingActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-teal-800 hover:bg-teal-900'
                  }`}
                >
                  {isBreathingActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isBreathingActive ? (lang === 'fr' ? 'Pause' : 'Hajanona') : (lang === 'fr' ? 'Démarrer' : 'Atombohy')}</span>
                </button>
                <button
                  onClick={() => {
                    setIsBreathingActive(false);
                    setBreathPhase('inspire');
                    setPhaseSecondsLeft(4);
                    setCyclesCompleted(0);
                  }}
                  className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Breathing Ring */}
            <div className="flex flex-col items-center justify-center py-8 space-y-6">
              
              <div className="relative flex items-center justify-center">
                {/* Expanding Outer Ring */}
                <div 
                  className={`w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    breathPhase === 'inspire' 
                      ? 'scale-110 bg-teal-100/80 border-4 border-teal-600 shadow-xl' 
                      : breathPhase === 'hold'
                      ? 'scale-110 bg-amber-100/80 border-4 border-amber-600 shadow-xl'
                      : 'scale-90 bg-sky-50 border-4 border-sky-400'
                  }`}
                >
                  <div className="text-center space-y-1">
                    <p className="text-xs uppercase tracking-wider font-bold text-stone-500">
                      {breathPhase === 'inspire' && (lang === 'fr' ? "Inspirez par le nez" : "Sintomy amin'ny orona")}
                      {breathPhase === 'hold' && (lang === 'fr' ? "Retenez doucement" : "Tazomy moramora")}
                      {breathPhase === 'expire' && (lang === 'fr' ? "Expirez par la bouche" : "Avoahy amin'ny vava")}
                    </p>
                    <p className="text-5xl font-mono font-bold text-stone-900 tabular-nums">
                      {phaseSecondsLeft}s
                    </p>
                    <p className="text-[11px] text-stone-400">
                      {breathPhase === 'inspire' ? '4s' : breathPhase === 'hold' ? '2s' : '6s'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-md text-center text-xs text-stone-600 leading-relaxed">
                {lang === 'fr'
                  ? "Suivez le cercle : gonflez le ventre en inspirant, gardez une posture droite sans forcer, et expirez comme à travers une paille."
                  : "Araho ny boribory : fenoina rivotra ny kibo rehefa misintona, ary avoahy miadana toy ny mitsoka mololo."}
              </div>

            </div>
          </div>

          {/* 5-4-3-2-1 SENSORY GROUNDING */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {lang === 'fr' ? "Technique d'Ancrage Mental" : "Fampodiana ny Saina amin'ny Zava-misy"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                {lang === 'fr' ? "La Méthode 5 - 4 - 3 - 2 - 1" : "Ny Paikady 5 - 4 - 3 - 2 - 1"}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {lang === 'fr' 
                  ? "Idéal en cas de dissociation, crise d'angoisse ou pensées envahissantes" 
                  : "Tena mahomby raha lasa lavitra loatra ny eritreritra na mikorontana ny fo"}
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {groundingSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setGroundingStep(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
                    groundingStep === idx
                      ? 'bg-teal-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <span className="font-mono text-sm">{step.count}</span>
                  <span className="hidden sm:inline">
                    {lang === 'fr' ? step.titleFr.split(' ')[0] : step.titleMg.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Current Step Content */}
            {(() => {
              const current = groundingSteps[groundingStep];
              return (
                <div className="p-6 bg-teal-50/50 border border-teal-100 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                      Étape {5 - current.count + 1} sur 5
                    </span>
                    <span className="text-2xl font-bold text-teal-900 font-mono">
                      {current.count}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">
                    {lang === 'fr' ? current.titleFr : current.titleMg}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {lang === 'fr' ? current.descFr : current.descMg}
                  </p>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setGroundingStep((prev) => (prev + 1) % groundingSteps.length)}
                      className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-semibold transition"
                    >
                      {groundingStep === 4 
                        ? (lang === 'fr' ? "Recommencer" : "Averina") 
                        : (lang === 'fr' ? "Étape suivante →" : "Dingana manaraka →")}
                    </button>
                  </div>
                </div>
              );
            })()}

          </div>

          {/* EMOTION COMPASS */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {lang === 'fr' ? "Auto-Évaluation Bienveillante" : "Fahalalana ny Fihetseham-po"}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                {lang === 'fr' ? "La Boussole des Émotions" : "Ny Diri-tsain'ny Fihetseham-po"}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {lang === 'fr' ? "Cliquez sur ce que vous traversez en ce moment pour recevoir un conseil adapté" : "Safidio izay tsapanao amin'izao fotoana izao"}
              </p>
            </div>

            {/* Emotion Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'anxious' as const, labelFr: "Anxieux / Paniqué", labelMg: "Manahy / Matahotra" },
                { id: 'sad' as const, labelFr: "Triste / Vide", labelMg: "Malahelo / Kivy" },
                { id: 'angry' as const, labelFr: "En colère / Tendu", labelMg: "Tezitra / Masiaka" },
                { id: 'overwhelmed' as const, labelFr: "Submergé / Épuisé", labelMg: "Reraka / Safotry ny saina" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedEmotion(item.id)}
                  className={`p-3.5 rounded-xl border text-xs font-semibold text-center transition ${
                    selectedEmotion === item.id
                      ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {lang === 'fr' ? item.labelFr : item.labelMg}
                </button>
              ))}
            </div>

            {/* Selected Emotion Feedback */}
            {(() => {
              const current = emotionCompassData[selectedEmotion];
              return (
                <div className="p-5 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
                  <h4 className="text-base font-bold text-stone-900">
                    {lang === 'fr' ? current.titleFr : current.titleMg}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {lang === 'fr' ? current.adviceFr : current.adviceMg}
                  </p>
                  <p className="text-xs font-semibold text-teal-800 pt-1">
                    ⚡ {lang === 'fr' ? "Action recommandée :" : "Zavatra tsara atao :"} {current.actionFr}
                  </p>
                </div>
              );
            })()}

          </div>

        </div>
      )}

      {/* TAB 2: PRÉVENTION & PSYCHO-ÉDUCATION */}
      {activeTab === 'prevention' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">1. Sommeil & Rythme</span>
            <h3 className="text-lg font-bold text-stone-900">L'hygiène du sommeil</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Le manque de sommeil dérègle l'amygdale cérébrale et augmente l'anxiété de 40%. Éteignez les téléphones au moins 45 minutes avant de dormir et levez-vous à heure fixe même le week-end.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">2. Relations & Conflits</span>
            <h3 className="text-lg font-bold text-stone-900">Désamorcer les micro-conflits</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Exprimez vos besoins avec la communication non violente (« Quand il se passe X, je ressens Y, j'aurais besoin de Z ») plutôt que d'accumuler de la rancœur qui ronge votre santé.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">3. Hygiène Numérique</span>
            <h3 className="text-lg font-bold text-stone-900">Limiter la surinformation</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Faites des diètes d'actualités anxiogènes. Remplacer 30 minutes de réseaux sociaux par une conversation réelle ou une marche apaise directement le système nerveux.
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: CULTURE MALAGASY & FIHAVANANA */}
      {activeTab === 'culture' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-10 shadow-sm space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
              {lang === 'fr' ? "Spécificités Culturelles Malagasy" : "Kolontsaina sy Fahendrena Malagasy"}
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-1">
              « Ny Fihavanana sy ny Fahasalamana Ara-tsaina »
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
              La santé mentale communautaire numérique : réhabiliter la solidarité malgache et briser le tabou du silence (« henatra »).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700 leading-relaxed">
            <div className="p-5 bg-stone-50 rounded-xl space-y-2 border border-stone-100">
              <h4 className="font-bold text-stone-900 text-sm">Fihainoana am-pitiavana (L'écoute avec amour)</h4>
              <p>
                Tsy misy olona afaka miaina irery. Ny fihavanana marina dia tsy fanakonana ny olana fa fihainoana ny havana mijaly tsy misy fitsarana. Raha marary ny saina dia tokony ho tohanana tahaka ny olona voan'ny tazo na tapaka taolana.
              </p>
            </div>

            <div className="p-5 bg-stone-50 rounded-xl space-y-2 border border-stone-100">
              <h4 className="font-bold text-stone-900 text-sm">Fialana amin'ny henatra manimba</h4>
              <p>
                Ny henatra manafina ny aretin-tsaina dia vao mainka mampitombo ny fahoriana. Ny fanatonana mpitsabo saina eny amin'ny hopitaly na toeram-pihainoana dia fahasahiana lehibe miaro ny fianakaviana iray manontolo.
              </p>
            </div>
          </div>

          <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl text-xs text-teal-950 font-medium">
            💡 <strong>Ohabolana mampahery :</strong> « Aleo very tsikalakalam-bola toy izay very tsikalakalam-pihavanana sy aina. » Ny fahasalamana sy ny aina no harena voalohany indrindra.
          </div>
        </div>
      )}

    </section>
  );
}
