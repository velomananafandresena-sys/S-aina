import { Shield, Phone, Download, Globe } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenEmergency: () => void;
  onOpenDownload: () => void;
  lang: Language;
}

export function Footer({ onNavigate, onOpenEmergency, onOpenDownload, lang }: FooterProps) {
  return (
    <footer className="bg-white border-t border-stone-200 mt-20 pt-12 pb-10 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div>
              <span className="text-base font-bold text-teal-950 font-serif block">
                S-aina
              </span>
              <p className="text-[11px] font-medium text-stone-600">Santé, aina, saina</p>
              <p className="text-[11px] italic font-semibold text-teal-800">
                Pour le changement social positif à Madagascar
              </p>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              {lang === 'fr'
                ? "Plateforme d'orientation, de psycho-éducation et d'accompagnement en santé mentale et handicap à Madagascar."
                : "Sehatra fampahafantarana, fanabeazana sy fanohanana amin'ny fahasalamana ara-tsaina sy fahasembanana eto Madagasikara."}
            </p>
            <p className="text-[11px] text-stone-400">
              Mention Psychologie Sociale et Interculturelle (FLSH, Université d'Antananarivo)
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <p className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
              {lang === 'fr' ? "Orientation & Soins" : "Fitarihana"}
            </p>
            <ul className="space-y-1.5 text-stone-500 text-[11px]">
              <li><button onClick={() => onNavigate('modele')} className="hover:text-teal-900 transition">Modèle de Soins</button></li>
              <li><button onClick={() => onNavigate('specialistes')} className="hover:text-teal-900 transition">Annuaire CHU & Hôpitaux</button></li>
              <li><button onClick={() => onNavigate('maladies')} className="hover:text-teal-900 transition">Annuaire des Maladies</button></li>
              <li><button onClick={() => onNavigate('proches')} className="hover:text-teal-900 transition">Accompagner un Proche</button></li>
            </ul>
          </div>

          {/* Practical & Tools */}
          <div className="space-y-2">
            <p className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
              {lang === 'fr' ? "Outils & Espace" : "Fitaovana"}
            </p>
            <ul className="space-y-1.5 text-stone-500 text-[11px]">
              <li><button onClick={() => onNavigate('outils')} className="hover:text-teal-900 transition">Cohérence Cardiaque 4-2-6</button></li>
              <li><button onClick={() => onNavigate('compagnon')} className="hover:text-teal-900 transition">Compagnon d'Écoute Aina</button></li>
              <li><button onClick={() => onNavigate('espace')} className="hover:text-teal-900 transition">Mon Espace Personnel</button></li>
              <li><button onClick={() => onNavigate('a-propos')} className="hover:text-teal-900 transition">Qui sommes-nous ?</button></li>
            </ul>
          </div>

          {/* Urgences & Téléchargement */}
          <div className="space-y-3">
            <p className="font-bold text-stone-900 uppercase tracking-wider text-[11px]">
              {lang === 'fr' ? "Urgences & Accès Hors-Ligne" : "Vonjy Aina"}
            </p>
            <div className="space-y-2">
              <button
                onClick={onOpenEmergency}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-semibold transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "Urgences : +261 20 22 270 51" : "Vonjy aina Befelatanana"}</span>
              </button>

              <button
                onClick={onOpenDownload}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-lg text-xs font-medium transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "Télécharger App HTML (.html)" : "Ampidino HTML"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <p>
            © 2026 S-aina (Santé, aina, saina) — Porté par la Mention Psychologie Sociale et Interculturelle, Faculté des Lettres et Sciences Humaines de l'Université d'Antananarivo.
          </p>
          <p>
            Contenu éducatif basé sur CIM-11 & DSM-5-TR · Aucun diagnostic automatique
          </p>
        </div>

      </div>
    </footer>
  );
}
