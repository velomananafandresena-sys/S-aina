import { useState, useEffect } from 'react';
import { ArrowRight, Compass, HeartHandshake, Shield, Sparkles, Download, Phone } from 'lucide-react';
import { QUOTES } from '../data/appData';
import { Language } from '../types';
import heroImg from '../assets/images/support_community_madagascar_1791739349540.jpg';

interface HeroBannerProps {
  onNavigate: (tab: string) => void;
  lang: Language;
  onOpenEmergency: () => void;
  onOpenDownload: () => void;
}

export function HeroBanner({ onNavigate, lang, onOpenEmergency, onOpenDownload }: HeroBannerProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Rotating quotes ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentQuote = QUOTES[quoteIndex];

  return (
    <section className="bg-white border border-stone-200/90 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Editorial Split Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column : Content & Prose */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
          
          <div className="space-y-4">
            
            {/* Animated Quote Ticker */}
            <div className="p-3 bg-stone-50 border border-stone-200/70 rounded-xl flex items-start gap-3 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div className="text-xs space-y-0.5">
                <p className="text-stone-700 italic font-medium leading-relaxed">
                  {lang === 'fr' ? currentQuote.fr : currentQuote.mg}
                </p>
                <p className="text-[11px] text-stone-500">— {currentQuote.author}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-teal-900 font-bold bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
                  S-aina · Santé, aina, saina
                </span>
                <span className="text-xs font-semibold text-teal-800 italic">
                  « Pour le changement social positif à Madagascar »
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15]">
                {lang === 'fr' ? (
                  <>Santé mentale & handicap : <span className="text-teal-900 italic font-serif">comprendre</span>, s'orienter et s'épanouir.</>
                ) : (
                  <>Fahasalamana ara-tsaina sy fahasembanana : <span className="text-teal-900 italic font-serif">fahatakarana</span>, fitarihana ary fivelarana.</>
                )}
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {lang === 'fr'
                  ? "S-aina (Santé, aina, saina) connecte les personnes en situation de handicap, les personnes concernées par la santé mentale et leurs proches aux structures de soins réelles à Madagascar (CHU Befelatanana, Anjanamasina, etc.). Accès universel, sans diagnostic automatique, avec bienveillance et dignité."
                  : "Ny S-aina (Santé, aina, saina) dia mampitohy ny olona manana fahasembanana, ny marary ara-tsaina ary ny fianakaviany amin'ireo toeram-pitsaboana sy fanampiana marina eto Madagasikara (CHU Befelatanana, Anjanamasina, sns). Fihainoana am-pitiavana tsy misy fanavakavahana."}
              </p>
            </div>

          </div>

          {/* Quick Action Matrix */}
          <div className="space-y-4 pt-2">
            
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => onNavigate('modele')}
                className="px-4 py-2.5 bg-teal-900 hover:bg-teal-950 text-white text-xs font-semibold rounded-lg shadow-sm transition flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>{lang === 'fr' ? "Le Modèle de Soins" : "Dingam-pitsaboana"}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>

              <button
                onClick={() => onNavigate('specialistes')}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-medium rounded-lg transition"
              >
                {lang === 'fr' ? "Annuaire des Hôpitaux (CHU)" : "Lahatahiry Hopitaly (CHU)"}
              </button>

              <button
                onClick={() => onNavigate('proches')}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-medium rounded-lg transition flex items-center gap-1.5"
              >
                <HeartHandshake className="w-4 h-4 text-rose-600" />
                <span>{lang === 'fr' ? "Accompagner un Proche" : "Mpanohana Havana"}</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="px-3.5 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 text-xs font-medium rounded-lg transition flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'fr' ? "Télécharger App HTML" : "Ampidino HTML"}</span>
              </button>
            </div>

            {/* 4 Pillars Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-100 text-xs">
              <div>
                <p className="font-bold text-stone-900">1. Orientation</p>
                <p className="text-[11px] text-stone-500">Du Niveau 1 au CHU</p>
              </div>
              <div>
                <p className="font-bold text-stone-900">2. Insertion</p>
                <p className="text-[11px] text-stone-500">Relais vers ONG & PFPH</p>
              </div>
              <div>
                <p className="font-bold text-stone-900">3. Psycho-Éducation</p>
                <p className="text-[11px] text-stone-500">CIM-11 & DSM-5-TR</p>
              </div>
              <div>
                <p className="font-bold text-stone-900">4. Boussole</p>
                <p className="text-[11px] text-stone-500">Apaisement & Fihavanana</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column : Authentic Editorial Photograph */}
        <div className="lg:col-span-5 relative bg-stone-100 min-h-[320px] lg:min-h-full">
          <img
            src={heroImg}
            alt="Communauté et écoute bienveillante à Madagascar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-[11px] uppercase tracking-widest text-teal-200 font-semibold">Solidarité & Écoute</span>
            <p className="text-sm font-medium mt-1 drop-shadow-sm">
              {lang === 'fr' 
                ? "« Ny fihavanana sy ny fihainoana am-pitiavana no fanafody voalohany »"
                : "« Ny fihavanana sy ny fihainoana am-pitiavana no fanafody voalohany »"}
            </p>
            <p className="text-[11px] text-stone-300 mt-0.5">Antananarivo & Régions de Madagascar</p>
          </div>
        </div>

      </div>

    </section>
  );
}
