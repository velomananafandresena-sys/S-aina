import { useState, useMemo } from 'react';
import { Search, BookOpen, AlertCircle, CheckCircle, Info, ChevronRight, X, ShieldAlert } from 'lucide-react';
import { DISEASES_DATA } from '../data/appData';
import { Disease, Language } from '../types';

interface DiseasesSectionProps {
  lang: Language;
  onNavigateToCareModel: () => void;
}

export function DiseasesSection({ lang, onNavigateToCareModel }: DiseasesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const categories = [
    { id: 'all', labelFr: 'Toutes les catégories', labelMg: 'Ny sokajy rehetra' },
    { id: 'depression_mood', labelFr: 'Humeur & Dépression', labelMg: 'Fahaketrahana' },
    { id: 'anxiety', labelFr: 'Anxiété & Panique', labelMg: 'Fanahiana' },
    { id: 'neurodev', labelFr: 'Neurodéveloppement (Autisme)', labelMg: 'Fivoaran\'ny Atidoha' },
    { id: 'psychosis', labelFr: 'Troubles Psychotiques', labelMg: 'Fikorontanana Lalina' },
    { id: 'physical_motor', labelFr: 'Handicap Moteur', labelMg: 'Fahasembanana Ara-Batana' },
    { id: 'addiction', labelFr: 'Addictions & Dépendances', labelMg: 'Zava-mahadomelina' }
  ];

  const filteredDiseases = useMemo(() => {
    return DISEASES_DATA.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQ =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.malagasyName.toLowerCase().includes(q) ||
        item.summaryFr.toLowerCase().includes(q) ||
        item.symptomsFr.some((s) => s.toLowerCase().includes(q));

      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesQ && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Encyclopédie & Démystification" : "Fampianarana sy Fahalalana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Annuaire des Maladies, Troubles & Handicaps" 
            : "Lahatahiry ny Aretina, Fikorontanana sy Fahasembanana"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Fiches pédagogiques fondées sur la CIM-11 de l'OMS et le DSM-5-TR. Contenu strictement éducatif pour comprendre et déconstruire les préjugés, sans poser de diagnostic automatique."
            : "Fampianarana miorina amin'ny fenitra iraisam-pirenena (CIM-11 sy DSM-5-TR). Fampahalalana madio mba handravana ny hevi-diso sy ny fankatovana, fa tsy fanomezana fitsarana ara-pitsaboana mivantana."}
        </p>
      </div>

      {/* Ethical Disclaimer Warning Box */}
      <div className="p-4 bg-amber-50/70 border border-amber-200/90 rounded-2xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 leading-relaxed space-y-1">
          <p className="font-bold">
            {lang === 'fr' ? "Avertissement Déontologique et Médical :" : "Fampitandremana Ara-Pahasalamana :"}
          </p>
          <p>
            {lang === 'fr'
              ? "Ces fiches sont conçues pour vous aider à comprendre ce que vous ou un proche ressentez. Seul un médecin psychiatre ou un psychologue clinicien qualifié peut poser un diagnostic après un entretien clinique approfondi."
              : "Ity sehatra ity dia tsy manolo-tena ho dokotera. Ny mpitsabo manam-pahaizana ihany no afaka manome mari-pahasalamana azo antoka."}
          </p>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-4">
        
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'fr'
                ? "Rechercher un trouble, symptôme (ex: tristesse, anxiété, voix, tremblements)..."
                : "Tadiavo amin'ny soritr'aretina (fahaketrahana, tahotra, feo tsy misy)..."
            }
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white transition"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedCategory === cat.id
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelMg}
            </button>
          ))}
        </div>

      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDiseases.map((disease) => (
          <div
            key={disease.id}
            onClick={() => setSelectedDisease(disease)}
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-800/40 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold text-teal-800 uppercase tracking-wider">
                  {lang === 'fr' ? disease.categoryLabelFr : disease.categoryLabelMg}
                </span>
                <span className="bg-stone-100 px-2 py-0.5 rounded font-mono text-[10px]">
                  Réf: {disease.referenceSource}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {disease.name}
                </h3>
                <p className="text-xs font-serif italic text-stone-500 mt-0.5">
                  {disease.malagasyName}
                </p>
              </div>

              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {lang === 'fr' ? disease.summaryFr : disease.summaryMg}
              </p>

              {/* Myth Preview Pill */}
              <div className="p-3 bg-stone-50 border border-stone-200/80 rounded-xl text-xs space-y-1">
                <p className="text-[11px] font-bold text-rose-800 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'fr' ? "Idée reçue courante :" : "Hevi-diso matetika :"}</span>
                </p>
                <p className="italic text-stone-600 line-clamp-1">
                  {lang === 'fr' ? disease.myths[0].mythFr : disease.myths[0].mythMg}
                </p>
              </div>

            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs">
              <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                disease.careLevelNeeded === 1 ? 'bg-emerald-100 text-emerald-800' :
                disease.careLevelNeeded === 2 ? 'bg-sky-100 text-sky-800' :
                'bg-rose-100 text-rose-800'
              }`}>
                Niveau {disease.careLevelNeeded} recommandé
              </span>
              <span className="font-semibold text-teal-900 flex items-center gap-1">
                {lang === 'fr' ? "Consulter la fiche" : "Hijery fanazavana"}
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Disease Detail Modal */}
      {selectedDisease && (
        <div 
          className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 lg:p-8 shadow-2xl border border-stone-200 my-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-200 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-bold uppercase tracking-wider text-teal-800">
                    {lang === 'fr' ? selectedDisease.categoryLabelFr : selectedDisease.categoryLabelMg}
                  </span>
                  <span>·</span>
                  <span className="font-mono">Source : {selectedDisease.referenceSource} ({selectedDisease.lastUpdated})</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  {selectedDisease.name}
                </h3>
                <p className="text-sm font-serif italic text-stone-500">
                  {selectedDisease.malagasyName}
                </p>
              </div>
              <button
                onClick={() => setSelectedDisease(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {lang === 'fr' ? selectedDisease.summaryFr : selectedDisease.summaryMg}
            </p>

            {/* Symptoms List */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-800">
                {lang === 'fr' ? "Signes et Manifestations Fréquentes :" : "Famantarana sy Soritr'aretina :"}
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                {(lang === 'fr' ? selectedDisease.symptomsFr : selectedDisease.symptomsMg).map((sym, idx) => (
                  <li key={idx}>{sym}</li>
                ))}
              </ul>
            </div>

            {/* Myths Deconstruction */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-teal-900">
                {lang === 'fr' ? "Démystification des Idées Reçues & Croyances :" : "Fandravana ny Hevi-diso sy Fomba Fijery :"}
              </h4>
              <div className="space-y-3">
                {selectedDisease.myths.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-rose-50/50 border border-rose-100 rounded-xl text-xs space-y-1.5">
                    <p className="font-semibold text-rose-900">
                      ❌ {lang === 'fr' ? item.mythFr : item.mythMg}
                    </p>
                    <p className="text-stone-800 bg-white p-2.5 rounded-lg border border-rose-100/70 leading-relaxed">
                      ✅ <strong>{lang === 'fr' ? "Ce que dit la science :" : "Ny marina ara-tsiansa :"}</strong> {lang === 'fr' ? item.realityFr : item.realityMg}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Guidance */}
            <div className="p-4 bg-teal-50/60 border border-teal-100 rounded-xl text-xs space-y-2 text-teal-950">
              <div className="flex items-center gap-2 font-bold">
                <Info className="w-4 h-4 text-teal-700" />
                <span>{lang === 'fr' ? "Vers qui s'orienter ?" : "Iza no tokony hatonina ?"}</span>
              </div>
              <p>
                {lang === 'fr' ? selectedDisease.whoToConsultFr : selectedDisease.whoToConsultMg}
              </p>
              <p className="pt-1 text-stone-600 border-t border-teal-100">
                <strong>{lang === 'fr' ? "Conseil pour la famille :" : "Torohevitra ho an'ny fianakaviana :"}</strong> {lang === 'fr' ? selectedDisease.familyGuidanceFr : selectedDisease.familyGuidanceMg}
              </p>
            </div>

            {/* Footer Actions */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedDisease(null);
                  onNavigateToCareModel();
                }}
                className="text-xs font-semibold text-teal-900 hover:underline flex items-center gap-1"
              >
                <span>{lang === 'fr' ? "Voir le modèle de prise en charge" : "Hijery ny dingam-pitsaboana"}</span>
                <ChevronRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => setSelectedDisease(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition"
              >
                {lang === 'fr' ? "Fermer" : "Hakatona"}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
