import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, Hospital, Users, Sparkles } from 'lucide-react';
import { CARE_MODEL_STEPS } from '../data/appData';
import { Language, CareLevel } from '../types';

interface CareModelSectionProps {
  lang: Language;
  onFilterDirectoryLevel: (level: CareLevel) => void;
  onNavigate: (tab: string) => void;
}

export const CARE_MATRIX = [
  {
    conditionFr: "Stress du quotidien, baisse de moral passagère, besoin d'écoute sans jugement",
    conditionMg: "Raritsaina andavanandro, alahelo mandalo, faniriana horesahina tsy misy fitsarana",
    recommendedLevel: 1 as CareLevel,
    specialistFr: "Pairs-aidants, Ligne d'écoute, Collectif bénévole, Proche de confiance",
    specialistMg: "Mpanampy mitovy traikefa, Fihainoana an-tariby, Fikambanana",
    actionFr: "Exercices d'apaisement, groupes de parole, hygiène de vie"
  },
  {
    conditionFr: "Anxiété persistante, phobies, deuil difficile, difficultés relationnelles",
    conditionMg: "Fanahiana maharitra, tahotra tsy voafehy, fisaonana sarotra, fifanolanana",
    recommendedLevel: 2 as CareLevel,
    specialistFr: "Psychologue clinicien, Psychothérapeute, Travailleur social",
    specialistMg: "Psychologue (Mpitsabo saina amin'ny resaka), Mpanampy ara-tsosialy",
    actionFr: "Psychothérapie ambulatoire (séances de 45 min sans hospitalisation)"
  },
  {
    conditionFr: "Handicap moteur, rééducation physique, adaptation du poste de travail",
    conditionMg: "Fahasembanana ara-batana, fanarenana fihetsika, fampifanarahana amin'ny asa",
    recommendedLevel: 2 as CareLevel,
    specialistFr: "Kinésithérapeute, Ergothérapeute, Plateforme Handicap (PFPH/MAD)",
    specialistMg: "Mpanao otra fitsaboana, Fikambanana mpiaro ny zon'ny sembana",
    actionFr: "Bilan fonctionnel, aides techniques (béquilles, fauteuil), insertion professionnelle"
  },
  {
    conditionFr: "Suspicion de trouble du spectre de l'autisme (TSA) ou TDAH chez l'enfant",
    conditionMg: "Ahiahy momba ny autisme na fahasarotana mifantoka amin'ny zaza",
    recommendedLevel: 2 as CareLevel,
    specialistFr: "Pédopsychiatre, Orthophoniste, Psychologue du développement",
    specialistMg: "Mpitsabo manokana ny ankizy, Mpampianatra miteny (orthophoniste)",
    actionFr: "Bilan pluridisciplinaire du développement et accompagnement parental"
  },
  {
    conditionFr: "Hallucinations (entendre des voix), délires de persécution, perte de contact avec la réalité",
    conditionMg: "Fandrenesana feo tsy misy, fiheverana fa misy mikasa hamono, fahaverezan-tsaina",
    recommendedLevel: 3 as CareLevel,
    specialistFr: "Médecin Psychiatre en CHU (Befelatanana, Anjanamasina, etc.)",
    specialistMg: "Mpitsabo aretin-tsaina (Psychiatre) any amin'ny hopitaly CHU",
    actionFr: "Consultation psychiatrique d'urgence, prescription de neuroleptiques, hospitalisation si crise aiguë"
  },
  {
    conditionFr: "Dépression sévère avec idées suicidaires, crise d'agitation motrice incontrôlable",
    conditionMg: "Fahaketrahana lalina misy eritreritra hamono tena, savorovoro mahery vaika",
    recommendedLevel: 3 as CareLevel,
    specialistFr: "Urgences Psychiatriques CHU JRB Befelatanana ou CHU Anjanamasina",
    specialistMg: "Vonjy Taitra CHU Befelatanana na CHU Anjanamasina",
    actionFr: "Prise en charge médicale hospitalière immédiate (24h/24)"
  },
  {
    conditionFr: "Addiction sévère avec syndrome de sevrage (tremblements, sueurs de l'alcool/drogues)",
    conditionMg: "Fiankinan-doha mahery vaika amin'ny toaka na zava-mahadomelina misy fangovitana",
    recommendedLevel: 3 as CareLevel,
    specialistFr: "Unité d'Addictologie (CHU Anjanamasina / Befelatanana)",
    specialistMg: "Sampana manokana momba ny fiankinan-doha CHU Anjanamasina",
    actionFr: "Sevrage médicalisé sécurisé sous surveillance infirmière"
  }
];

export function CareModelSection({ lang, onFilterDirectoryLevel, onNavigate }: CareModelSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<CareLevel>(2);

  return (
    <section className="space-y-10">
      
      {/* Section Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Orientation Médicale & Prise en Charge" : "Fitarihana sy Dingam-Pitsaboana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Le Modèle de Prise en Charge : du moins sévère au plus sévère" 
            : "Ny Dingam-Pitsaboana : manomboka amin'ny tsotra ka hatramin'ny tena maika"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Tous les troubles de santé mentale ne nécessitent pas un séjour à l'hôpital. La prise en charge suit une progression rationnelle pour que chacun reçoive l'aide adéquate sans errance ni stigmatisation."
            : "Tsy ny aretin-tsaina rehetra akory no mila miditra hopitaly avy hatrany. Misy ambaratonga telo mazava mifanaraka amin'ny filan'ny olona tsirairay mba tsy hisian'ny fikorontanana."}
        </p>
      </div>

      {/* 3 Steps Visual Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARE_MODEL_STEPS.map((step) => {
          const isSelected = selectedLevel === step.level;
          const levelColor = 
            step.level === 1 ? 'border-emerald-200 bg-emerald-50/40' :
            step.level === 2 ? 'border-sky-200 bg-sky-50/40' :
            'border-rose-200 bg-rose-50/40';

          const badgeColor = 
            step.level === 1 ? 'bg-emerald-100 text-emerald-800' :
            step.level === 2 ? 'bg-sky-100 text-sky-800' :
            'bg-rose-100 text-rose-800';

          return (
            <div
              key={step.level}
              onClick={() => setSelectedLevel(step.level as CareLevel)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between space-y-4 ${
                isSelected 
                  ? `ring-2 ring-teal-800 shadow-md ${levelColor}` 
                  : 'bg-white border-stone-200/90 hover:border-stone-300 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${badgeColor}`}>
                    Niveau {step.level} {step.level === 1 ? '· Écoute' : step.level === 2 ? '· Ambulatoire' : '· Psychiatrie CHU'}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">0{step.level}</span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {lang === 'fr' ? step.titleFr : step.titleMg}
                </h3>

                <p className="text-xs font-medium text-stone-500 italic">
                  {lang === 'fr' ? step.severityFr : step.severityMg}
                </p>

                <div className="space-y-2 text-xs text-stone-600 pt-3 border-t border-stone-200/60">
                  <p>
                    <strong className="text-stone-800">{lang === 'fr' ? "Qui prend en charge ?" : "Iza no mandray an-tanana ?"}</strong><br />
                    {lang === 'fr' ? step.whoFr : step.whoMg}
                  </p>
                  <p>
                    <strong className="text-stone-800">{lang === 'fr' ? "Pour quelles situations ?" : "Amin'ny toe-javatra manao ahoana ?"}</strong><br />
                    {lang === 'fr' ? step.indicationsFr : step.indicationsMg}
                  </p>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFilterDirectoryLevel(step.level as CareLevel);
                    onNavigate('specialistes');
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-teal-900 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg transition"
                >
                  <span>{lang === 'fr' ? `Voir structures Niveau ${step.level}` : `Hijery toerana Ambaratonga ${step.level}`}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Decision Table : Quel spécialiste pour quel trouble ? */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-8 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-stone-900">
              {lang === 'fr' ? "Guide d'Aiguillage : Quel spécialiste consulter ?" : "Torolalana : Iza amin'ireo manam-pahaizana no tokony hatonina ?"}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {lang === 'fr' 
                ? "Recherchez votre situation pour identifier immédiatement l'intervenant adapté"
                : "Tadiavo ny toe-javatra misy anao hahafantarana haingana ny olona tokony hanampy"}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">{lang === 'fr' ? "Signes ou Situation" : "Toe-javatra"}</th>
                <th className="py-3 px-3">{lang === 'fr' ? "Niveau" : "Ambaratonga"}</th>
                <th className="py-3 px-3">{lang === 'fr' ? "Spécialiste Recommandé" : "Manam-pahaizana Tokony Hatonina"}</th>
                <th className="py-3 px-3 hidden sm:table-cell">{lang === 'fr' ? "Action Principale" : "Asa Atao"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {CARE_MATRIX.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                  <td className="py-3 px-3 font-medium text-stone-900 max-w-xs">
                    {lang === 'fr' ? item.conditionFr : item.conditionMg}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                      item.recommendedLevel === 1 ? 'bg-emerald-100 text-emerald-800' :
                      item.recommendedLevel === 2 ? 'bg-sky-100 text-sky-800' :
                      'bg-rose-100 text-rose-800'
                    }`}>
                      Niveau {item.recommendedLevel}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-semibold text-teal-900">
                    {lang === 'fr' ? item.specialistFr : item.specialistMg}
                  </td>
                  <td className="py-3 px-3 text-stone-500 hidden sm:table-cell">
                    {item.actionFr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
