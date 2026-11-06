import { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Clock, Accessibility, Building2, ExternalLink, X, Filter } from 'lucide-react';
import { SPECIALISTS_DATA } from '../data/appData';
import { Specialist, Language, CareLevel } from '../types';

interface DirectorySectionProps {
  lang: Language;
  initialLevelFilter?: CareLevel | null;
}

export function DirectorySection({ lang, initialLevelFilter }: DirectorySectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<string>(
    initialLevelFilter ? String(initialLevelFilter) : 'all'
  );
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  // Region options
  const regions = useMemo(() => {
    const list = Array.from(new Set(SPECIALISTS_DATA.map((s) => s.region)));
    return ['all', ...list];
  }, []);

  // Filtered specialists
  const filteredSpecialists = useMemo(() => {
    return SPECIALISTS_DATA.filter((item) => {
      // Query match
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.specialties.some((sp) => sp.toLowerCase().includes(query)) ||
        item.services.some((srv) => srv.toLowerCase().includes(query)) ||
        item.descriptionFr.toLowerCase().includes(query);

      // Region match
      const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;

      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Level match
      const matchesLevel = selectedLevel === 'all' || String(item.careLevel) === selectedLevel;

      return matchesQuery && matchesRegion && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedRegion, selectedCategory, selectedLevel]);

  return (
    <section className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Ressources & Cartographie" : "Toeram-Pitsaboana sy Fanampiana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Annuaire des Spécialistes, CHU & Organismes" 
            : "Lahatahiry Hopitaly CHU sy Fikambanana"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Retrouvez les centres hospitaliers universitaires (Befelatanana, Anjanamasina, Toamasina, Mahajanga, Tuléar...), les structures privées, les cabinets d'écoute et les organismes d'insertion du handicap à Madagascar."
            : "Hitanao eto ireo hopitalim-panjakana lehibe (Befelatanana, Anjanamasina, Mahajanga, Toamasina, Tuléar...), ny toerana fihainoana ary ny fikambanana manampy ny olona manana fahasembanana."}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'fr'
                ? "Rechercher par nom, ville (ex: Befelatanana, Anjanamasina, Toamasina, autisme, béquilles)..."
                : "Tadiavo amin'ny anarana, tanàna (Befelatanana, Anjanamasina, Toamasina, kalesy)..."
            }
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Filter Badges & Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          {/* Region */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'fr' ? "Région" : "Faritra"}
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-800"
            >
              <option value="all">{lang === 'fr' ? "Toutes les régions" : "Ny faritra rehetra"}</option>
              {regions.filter((r) => r !== 'all').map((reg) => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>
          </div>

          {/* Type of Structure */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'fr' ? "Type d'Établissement" : "Karazana Toerana"}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-800"
            >
              <option value="all">{lang === 'fr' ? "Tous les types" : "Ny karazany rehetra"}</option>
              <option value="chu">{lang === 'fr' ? "CHU Public (Hôpital Universitaire)" : "Hopitaly CHU Fanjakana"}</option>
              <option value="prive">{lang === 'fr' ? "Clinique Privée / Confessionnelle" : "Hopitaly Manokana / Masera"}</option>
              <option value="ong">{lang === 'fr' ? "ONG & Insertion Handicap" : "Fikambanana & Fampidirana Asa"}</option>
              <option value="cabinet">{lang === 'fr' ? "Cabinet de Psychologie / Écoute" : "Toerana Fihainoana sy Fitsaboana Saina"}</option>
            </select>
          </div>

          {/* Care Level */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              {lang === 'fr' ? "Niveau de Soin" : "Ambaratonga"}
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-800"
            >
              <option value="all">{lang === 'fr' ? "Tous les niveaux (1, 2, 3)" : "Ny ambaratonga rehetra"}</option>
              <option value="1">{lang === 'fr' ? "Niveau 1 : Écoute & Communauté" : "Ambaratonga 1 : Fihainoana"}</option>
              <option value="2">{lang === 'fr' ? "Niveau 2 : Ambulatoire & Primaire" : "Ambaratonga 2 : Psychologue"}</option>
              <option value="3">{lang === 'fr' ? "Niveau 3 : Psychiatrie CHU & Urgences" : "Ambaratonga 3 : Psychiatre CHU"}</option>
            </select>
          </div>

        </div>

        {/* Results Counter */}
        <div className="text-xs text-stone-500 flex items-center justify-between pt-1 border-t border-stone-100">
          <span>
            {filteredSpecialists.length} {lang === 'fr' ? "structure(s) trouvée(s)" : "toeram-pitsaboana hita"}
          </span>
          {(searchQuery || selectedRegion !== 'all' || selectedCategory !== 'all' || selectedLevel !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="text-teal-800 font-semibold hover:underline"
            >
              {lang === 'fr' ? "Réinitialiser les filtres" : "Averina amin'ny voalohany"}
            </button>
          )}
        </div>

      </div>

      {/* Grid of Specialists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpecialists.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedSpecialist(item)}
            className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-teal-800/40 transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                  {item.city} · {item.region}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  item.careLevel === 1 ? 'bg-emerald-100 text-emerald-800' :
                  item.careLevel === 2 ? 'bg-sky-100 text-sky-800' :
                  'bg-rose-100 text-rose-800'
                }`}>
                  Niveau {item.careLevel}
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-900 leading-snug">
                {item.name}
              </h3>

              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                {lang === 'fr' ? item.descriptionFr : item.descriptionMg}
              </p>

              <div className="space-y-1.5 text-xs text-stone-500 pt-2 border-t border-stone-100">
                <p className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{item.address}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-semibold text-teal-900">{item.phone}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{item.hours}</span>
                </p>
              </div>

            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs">
              <span className="text-stone-400 text-[11px]">
                {item.accessibilityInfo.includes('fauteuils') || item.accessibilityInfo.includes('PMR') 
                  ? '♿ Accessible PMR' 
                  : 'Accessible'}
              </span>
              <span className="font-semibold text-teal-900 flex items-center gap-1">
                {lang === 'fr' ? "Voir la fiche" : "Hijery antsipiriany"}
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedSpecialist && (
        <div 
          className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 lg:p-8 shadow-2xl border border-stone-200 my-8 space-y-6">
            
            <div className="flex items-start justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-teal-800">
                  {selectedSpecialist.city} · {selectedSpecialist.region} · Niveau {selectedSpecialist.careLevel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {selectedSpecialist.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSpecialist(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'fr' ? selectedSpecialist.descriptionFr : selectedSpecialist.descriptionMg}
            </p>

            {/* Services Offered */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-stone-700">
                {lang === 'fr' ? "Services Proposés & Prise en Charge" : "Tolotra sy Fitsaboana Omena"}
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                {selectedSpecialist.services.map((srv, idx) => (
                  <li key={idx}>{srv}</li>
                ))}
              </ul>
            </div>

            {/* Operational Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
              <div className="p-3 bg-white border border-stone-200 rounded-lg space-y-1">
                <span className="font-semibold text-stone-800">📍 {lang === 'fr' ? "Adresse" : "Toerana"}</span>
                <p>{selectedSpecialist.address}</p>
              </div>

              <div className="p-3 bg-white border border-stone-200 rounded-lg space-y-1">
                <span className="font-semibold text-stone-800">🕒 {lang === 'fr' ? "Horaires d'Ouverture" : "Ora Fandraisana"}</span>
                <p>{selectedSpecialist.hours}</p>
              </div>

              <div className="p-3 bg-white border border-stone-200 rounded-lg space-y-1">
                <span className="font-semibold text-stone-800">💰 {lang === 'fr' ? "Tarification" : "Sarany"}</span>
                <p>{lang === 'fr' ? selectedSpecialist.fees : selectedSpecialist.feesMg}</p>
              </div>

              <div className="p-3 bg-white border border-stone-200 rounded-lg space-y-1">
                <span className="font-semibold text-stone-800">♿ {lang === 'fr' ? "Accessibilité Handicap" : "Fidirana ho an'ny kalesy"}</span>
                <p>{lang === 'fr' ? selectedSpecialist.accessibilityInfo : selectedSpecialist.accessibilityInfoMg}</p>
              </div>
            </div>

            {/* Direct Call & Close Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
              <a
                href={`tel:${selectedSpecialist.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-sm transition"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'fr' ? `Appeler le ${selectedSpecialist.phone}` : `Hiantso an-tariby : ${selectedSpecialist.phone}`}</span>
              </a>

              <button
                onClick={() => setSelectedSpecialist(null)}
                className="w-full sm:w-auto px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition"
              >
                {lang === 'fr' ? "Fermer la fiche" : "Hakatona"}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
