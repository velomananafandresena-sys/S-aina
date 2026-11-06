import { Phone, Download, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenEmergency: () => void;
  onOpenDownload: () => void;
}

export function Navbar({ 
  currentTab, 
  setCurrentTab, 
  lang, 
  setLang, 
  onOpenEmergency, 
  onOpenDownload 
}: NavbarProps) {
  
  const navLinks = [
    { id: 'accueil', labelFr: 'Accueil', labelMg: 'Fandraisana' },
    { id: 'modele', labelFr: 'Modèle de Soins', labelMg: 'Dingam-pitsaboana' },
    { id: 'specialistes', labelFr: 'Annuaire CHU', labelMg: 'Lahatahiry' },
    { id: 'maladies', labelFr: 'Maladies', labelMg: 'Aretina' },
    { id: 'proches', labelFr: 'Accompagner', labelMg: 'Mpanohana' },
    { id: 'outils', labelFr: 'Outils & Apaisement', labelMg: 'Fampitoniana' },
    { id: 'compagnon', labelFr: 'Compagnon Aina', labelMg: 'Aina Mpanolotsaina' },
    { id: 'astuces', labelFr: 'Astuces', labelMg: 'Torohevitra' },
    { id: 'espace', labelFr: 'Espace Perso', labelMg: 'Toerako' },
    { id: 'a-propos', labelFr: 'Qui sommes-nous ?', labelMg: 'Iza izahay ?' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand wordmark & Slogan */}
        <button 
          onClick={() => setCurrentTab('accueil')}
          className="flex flex-col text-left shrink-0 group py-0.5"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-xl lg:text-2xl font-bold tracking-tight text-teal-950 font-serif group-hover:text-teal-800 transition leading-none">
              S-aina
            </span>
            <span className="text-stone-300 hidden md:inline">|</span>
            <span className="text-[11px] font-semibold text-teal-800 hidden md:inline italic">
              Pour le changement social positif à Madagascar
            </span>
          </div>
          <span className="text-[10px] font-medium text-stone-500 tracking-wide mt-0.5">
            Santé, aina, saina
          </span>
        </button>

        {/* Zone 2: Concise single-line navigation links with subtle active states */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-stone-600 overflow-x-auto py-1">
          {navLinks.slice(0, 7).map(link => (
            <button
              key={link.id}
              onClick={() => setCurrentTab(link.id)}
              className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
                currentTab === link.id
                  ? 'text-teal-900 font-bold border-b-2 border-teal-800'
                  : 'hover:text-teal-900 text-stone-600'
              }`}
            >
              {lang === 'fr' ? link.labelFr : link.labelMg}
            </button>
          ))}
          <button
            onClick={() => setCurrentTab('espace')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              currentTab === 'espace'
                ? 'text-teal-900 font-bold border-b-2 border-teal-800'
                : 'hover:text-teal-900 text-stone-600'
            }`}
          >
            {lang === 'fr' ? 'Mon Espace' : 'Toerako'}
          </button>
          <button
            onClick={() => setCurrentTab('a-propos')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 ${
              currentTab === 'a-propos'
                ? 'text-teal-900 font-bold border-b-2 border-teal-800'
                : 'hover:text-teal-900 text-stone-600'
            }`}
          >
            {lang === 'fr' ? 'À Propos' : 'Momba anay'}
          </button>
        </nav>

        {/* Zone 3: Primary Action + Utilities */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'mg' : 'fr')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition whitespace-nowrap"
            title={lang === 'fr' ? "Basculer en Malagasy" : "Hiova amin'ny teny Frantsay"}
          >
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span>{lang === 'fr' ? 'FR · MG' : 'MG · FR'}</span>
          </button>

          {/* Download HTML App button */}
          <button
            onClick={onOpenDownload}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-lg transition whitespace-nowrap"
            title="Télécharger l'application Web en fichier HTML autonome"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Télécharger HTML' : 'Ampidino HTML'}</span>
          </button>

          {/* Primary Action Button (Emergency) */}
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Urgence' : 'Vonjy aina'}</span>
          </button>

        </div>

      </div>

      {/* Mobile Horizontal Navigation Scroller */}
      <div className="lg:hidden overflow-x-auto border-t border-stone-100 px-4 py-2 flex items-center gap-2 text-xs scrollbar-none">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => setCurrentTab(link.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium transition ${
              currentTab === link.id
                ? 'bg-teal-800 text-white'
                : 'text-stone-600 bg-stone-100 hover:text-stone-900'
            }`}
          >
            {lang === 'fr' ? link.labelFr : link.labelMg}
          </button>
        ))}
      </div>
    </header>
  );
}
