import { Phone, AlertTriangle, ShieldCheck, X } from 'lucide-react';
import { EMERGENCY_NUMBERS, CRISIS_GUIDE } from '../data/appData';
import { Language } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export function EmergencyModal({ isOpen, onClose, lang }: EmergencyModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 lg:p-8 shadow-2xl border border-rose-200 my-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                {lang === 'fr' ? "Urgences & Soutien Immédiat" : "Vonjy Aina sy Fanohanana Maika"}
              </h2>
              <p className="text-xs text-stone-500">
                {lang === 'fr' 
                  ? "Si votre vie ou celle d'un proche est en danger immédiat" 
                  : "Raha misy loza mitatao amin'ny ainao na ny an'ny havanao"}
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

        {/* Emergency Numbers List */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider font-bold text-stone-700">
            {lang === 'fr' ? "Numéros d'Urgence à Madagascar" : "Laharana Vonjy Aina eto Madagasikara"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EMERGENCY_NUMBERS.map((num, idx) => (
              <div key={idx} className="p-3.5 bg-rose-50/50 border border-rose-100 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-stone-900">{num.name}</p>
                  <p className="text-[11px] text-stone-500">{num.available} · {num.city}</p>
                </div>
                <a 
                  href={`tel:${num.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold shadow-sm transition whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{num.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Protocol */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'fr' ? "Protocole d'apaisement immédiat :" : "Dingana fampitoniana maika :"}</span>
          </div>
          <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
            {CRISIS_GUIDE.dos.slice(0, 3).map((item, idx) => (
              <li key={idx}>{lang === 'fr' ? item.fr : item.mg}</li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg text-xs font-medium transition"
          >
            {lang === 'fr' ? "Fermer la fenêtre" : "Hakatona ny varavarankely"}
          </button>
        </div>

      </div>
    </div>
  );
}
