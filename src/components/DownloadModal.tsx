import { Download, CheckCircle, FileCode, WifiOff, X } from 'lucide-react';
import { downloadStandaloneHtmlApp } from '../lib/htmlExporter';
import { Language } from '../types';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function DownloadModal({ isOpen, onClose, lang }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 lg:p-8 shadow-2xl border border-stone-200 my-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                {lang === 'fr' ? "Télécharger l'Application HTML" : "Ampidino ny Rindranasa HTML"}
              </h2>
              <p className="text-xs text-stone-500">
                {lang === 'fr' 
                  ? "Version autonome et complète utilisable hors-ligne (sans connexion)"
                  : "Dika feno azo ampiasaina tsy misy aterineto"}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Points */}
        <div className="space-y-3 text-xs text-stone-600">
          <div className="p-3.5 bg-teal-50/60 border border-teal-100 rounded-xl space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-900">
              <WifiOff className="w-4 h-4" />
              <span>{lang === 'fr' ? "100% Hors-Ligne & Sans Serveur" : "100% Tsy mila Aterineto"}</span>
            </div>
            <p>
              {lang === 'fr'
                ? "Le fichier téléchargé est une application Web HTML unique (Single-File). Il contient l'annuaire complet des hôpitaux (CHU Befelatanana, Anjanamasina, etc.), le modèle de soins, les maladies, les outils d'apaisement et les numéros d'urgence."
                : "Ity rakitra ity dia rindranasa HTML iray monja misy ny lahatahiry rehetra, ny aretina, ny fanazaran-tena ary ny laharana vonjy aina."}
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <p className="font-semibold text-stone-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              {lang === 'fr' ? "Comment l'utiliser après téléchargement ?" : "Ahoana ny fampiasana azy rehefa voalatsaka ?"}
            </p>
            <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
              <li>{lang === 'fr' ? "Double-cliquez sur le fichier" : "Tsindrio indroa ilay rakitra"} <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800">s-aina-madagascar.html</code>.</li>
              <li>{lang === 'fr' ? "Il s'ouvre instantanément dans n'importe quel navigateur (Chrome, Firefox, Safari, Edge) sur PC ou téléphone." : "Hisokatra avy hatrany amin'ny browser rehetra na amin'ny solosaina na finday."}</li>
              <li>{lang === 'fr' ? "Aucun compte ni connexion internet n'est requis." : "Tsy mila kaonty na aterineto intsony."}</li>
            </ol>
          </div>
        </div>

        {/* CTA Button */}
        <div className="space-y-2 pt-2">
          <button 
            onClick={() => {
              downloadStandaloneHtmlApp();
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-sm font-semibold shadow-sm transition"
          >
            <FileCode className="w-4 h-4" />
            <span>{lang === 'fr' ? "Télécharger le fichier .html maintenant" : "Ampidino izao ilay rakitra .html"}</span>
          </button>
          <p className="text-[11px] text-center text-stone-400">
            {lang === 'fr' ? "Fichier léger (~65 Ko) · Totalement gratuit et autonome" : "Rakitra maivana (~65 Ko) · Maimaim-poana tanteraka"}
          </p>
        </div>

      </div>
    </div>
  );
}
