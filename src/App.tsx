import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CareModelSection } from './components/CareModelSection';
import { DirectorySection } from './components/DirectorySection';
import { DiseasesSection } from './components/DiseasesSection';
import { CaregiversSection } from './components/CaregiversSection';
import { PracticalToolsSection } from './components/PracticalToolsSection';
import { CompanionSection } from './components/CompanionSection';
import { RoleTipsSection } from './components/RoleTipsSection';
import { PersonalSpaceSection } from './components/PersonalSpaceSection';
import { PeerStoriesSection } from './components/PeerStoriesSection';
import { QuizSection } from './components/QuizSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { EmergencyModal } from './components/EmergencyModal';
import { DownloadModal } from './components/DownloadModal';
import { ARTICLES_DATA } from './data/appData';
import { Language, CareLevel, UserRole, UserHealthProfile } from './types';
import { Download, Sparkles, Newspaper, HeartHandshake, Compass, Users } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('accueil');
  const [lang, setLang] = useState<Language>('fr');
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [initialDirectoryLevel, setInitialDirectoryLevel] = useState<CareLevel | null>(null);

  const [userProfile, setUserProfile] = useState<UserHealthProfile | null>(() => {
    try {
      const saved = localStorage.getItem('fahasalamana_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return null;
  });

  const handleFilterDirectoryLevel = (lvl: CareLevel) => {
    setInitialDirectoryLevel(lvl);
    setCurrentTab('specialistes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Bar Contract Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        lang={lang}
        setLang={setLang}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* TAB: ACCUEIL */}
        {currentTab === 'accueil' && (
          <div className="space-y-16">
            
            {/* Hero Section */}
            <HeroBanner
              onNavigate={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              lang={lang}
              onOpenEmergency={() => setIsEmergencyOpen(true)}
              onOpenDownload={() => setIsDownloadOpen(true)}
            />

            {/* Offline App Download Banner */}
            <div className="bg-teal-900 text-white rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                  {lang === 'fr' ? "Téléchargement & Accès Hors-Ligne" : "Ampidino sy Fampiasana Tsy mila Aterineto"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif">
                  {lang === 'fr' 
                    ? "Téléchargez l'Application Complète en un seul fichier HTML (.html)" 
                    : "Ampidino ny Rindranasa Feno amin'ny Rakitra HTML tokana"}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                  {lang === 'fr'
                    ? "Vous souhaitez l'avoir sur votre ordinateur ou smartphone sans connexion internet ? Téléchargez le fichier autonome contenant tous les annuaires, fiches de troubles et exercices."
                    : "Te hampiasa azy amin'ny solosainao na findainao tsy mila aterineto ve ianao ? Ampidino ilay rakitra tokana misy ny fampianarana sy hopitaly rehetra."}
                </p>
              </div>

              <button
                onClick={() => setIsDownloadOpen(true)}
                className="px-5 py-3 bg-white text-teal-950 hover:bg-stone-100 rounded-xl text-xs font-bold shadow-md transition flex items-center gap-2 shrink-0 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-teal-800" />
                <span>{lang === 'fr' ? "Télécharger le fichier .html" : "Ampidino ny rakitra .html"}</span>
              </button>
            </div>

            {/* Care Model Teaser Strip */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
                  {lang === 'fr' ? "Comprendre la Pyramide de Soin" : "Dingam-pitsaboana"}
                </span>
                <h3 className="text-xl font-bold text-stone-900">
                  {lang === 'fr' ? "Quel spécialiste pour quel niveau de gravité ?" : "Iza no manam-pahaizana mifanaraka amin'ny aretinao ?"}
                </h3>
                <p className="text-xs text-stone-600 max-w-xl">
                  {lang === 'fr'
                    ? "Découvrez notre modèle de prise en charge : du Niveau 1 (écoute communautaire) au Niveau 3 (psychiatrie hospitalière en CHU Befelatanana et Anjanamasina)."
                    : "Jereo ny fizarana telo lehibe manomboka amin'ny fihainoana ka hatramin'ny hopitaly CHU."}
                </p>
              </div>

              <button
                onClick={() => {
                  setCurrentTab('modele');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-sm transition whitespace-nowrap"
              >
                {lang === 'fr' ? "Explorer le Modèle de Soins →" : "Hijery ny Dingana →"}
              </button>
            </div>

            {/* Fil d'Actualités & Articles de la Rédaction */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
                    {lang === 'fr' ? "Éditorial & Sensibilisation" : "Lahatsoratra sy Vaovao"}
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-0.5">
                    {lang === 'fr' ? "Fil d'Actualités & Psycho-Éducation" : "Vaovao sy Fanabeazana Ara-tsaina"}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ARTICLES_DATA.map((art) => (
                  <article
                    key={art.id}
                    className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-stone-400">
                        <span className="font-bold uppercase tracking-wider text-teal-800">
                          {lang === 'fr' ? art.categoryFr : art.categoryMg}
                        </span>
                        <span>{art.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-stone-900 leading-snug">
                        {lang === 'fr' ? art.titleFr : art.titleMg}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {lang === 'fr' ? art.excerptFr : art.excerptMg}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>{art.author}</span>
                      <span>{art.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Interactive Game / Quiz Section */}
            <QuizSection lang={lang} />

          </div>
        )}

        {/* TAB: MODÈLE DE SOINS */}
        {currentTab === 'modele' && (
          <CareModelSection
            lang={lang}
            onFilterDirectoryLevel={handleFilterDirectoryLevel}
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB: ANNUAIRE SPÉCIALISTES & CHU */}
        {currentTab === 'specialistes' && (
          <DirectorySection
            lang={lang}
            initialLevelFilter={initialDirectoryLevel}
          />
        )}

        {/* TAB: ANNUAIRE MALADIES & TROUBLES */}
        {currentTab === 'maladies' && (
          <DiseasesSection
            lang={lang}
            onNavigateToCareModel={() => {
              setCurrentTab('modele');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB: ACCOMPAGNER NOS PROCHES */}
        {currentTab === 'proches' && (
          <CaregiversSection
            lang={lang}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onNavigateToTools={() => {
              setCurrentTab('outils');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB: OUTILS PRATIQUES & APAISEMENT */}
        {currentTab === 'outils' && (
          <PracticalToolsSection lang={lang} />
        )}

        {/* TAB: COMPAGNON D'ÉCOUTE AINA */}
        {currentTab === 'compagnon' && (
          <CompanionSection
            lang={lang}
            userProfile={userProfile}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onNavigateToDirectory={() => {
              setCurrentTab('specialistes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB: ASTUCES SELON LE RÔLE */}
        {currentTab === 'astuces' && (
          <RoleTipsSection
            lang={lang}
            currentRole={userProfile?.role || 'student'}
            onSetRole={(r) => {
              if (userProfile) {
                const up = { ...userProfile, role: r };
                setUserProfile(up);
                localStorage.setItem('fahasalamana_profile', JSON.stringify(up));
              }
            }}
          />
        )}

        {/* TAB: ESPACE PERSONNEL & DONNÉES */}
        {currentTab === 'espace' && (
          <PersonalSpaceSection
            lang={lang}
            onProfileUpdated={(p) => setUserProfile(p)}
          />
        )}

        {/* TAB: RÉCITS DE VIE & SIGNALEMENT */}
        {currentTab === 'recits' && (
          <PeerStoriesSection lang={lang} />
        )}

        {/* TAB: QUI SOMMES-NOUS ? */}
        {currentTab === 'a-propos' && (
          <AboutSection lang={lang} />
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenDownload={() => setIsDownloadOpen(true)}
        lang={lang}
      />

      {/* Emergency Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        lang={lang}
      />

      {/* Standalone HTML Web App Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        lang={lang}
      />

    </div>
  );
}
