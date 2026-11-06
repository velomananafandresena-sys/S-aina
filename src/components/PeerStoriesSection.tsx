import { useState } from 'react';
import { Quote, HeartHandshake, ShieldAlert, Send, CheckCircle2, MessageSquare, Flag } from 'lucide-react';
import { PEER_STORIES } from '../data/appData';
import { Language, PeerStory } from '../types';
import solidarityImg from '../assets/images/inclusion_disability_solidarity_1791739371189.jpg';

interface PeerStoriesSectionProps {
  lang: Language;
}

export function PeerStoriesSection({ lang }: PeerStoriesSectionProps) {
  const [selectedStory, setSelectedStory] = useState<PeerStory>(PEER_STORIES[0]);
  const [reportText, setReportText] = useState('');
  const [reportSender, setReportSender] = useState('');
  const [reportSuccess, setReportSuccess] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSuccess(true);
    setTimeout(() => {
      setReportText('');
      setReportSender('');
      setReportSuccess(false);
      setShowReportForm(false);
    }, 3000);
  };

  return (
    <section className="space-y-10">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Témoignages & Résilience" : "Fijoroana Vavolombelona sy Herim-po"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Récits de Vie de Pairs-Aidants à Madagascar" 
            : "Tantaram-piainan'ny Mpanampy Mitovy Traikefa"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Des personnes réelles qui ont traversé la dépression, le handicap ou les préjugés et qui témoignent aujourd'hui pour redonner espoir et guider les autres vers le rétablissement."
            : "Olona marina nandalo fahasarotana sy fahasembanana nefa tafavoaka ka vonona hanampy sy hanoro hevitra anao."}
        </p>
      </div>

      {/* Featured Photo and Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white border border-stone-200/90 rounded-2xl shadow-sm overflow-hidden">
        
        <div className="lg:col-span-5 bg-stone-100 min-h-[300px] lg:min-h-full relative">
          <img
            src={solidarityImg}
            alt="Solidarité et inclusion handicap à Madagascar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
            <span className="text-xs uppercase font-bold text-teal-300">Force & Dignité</span>
            <p className="text-sm font-medium mt-1">
              « Tsy ny fahasembanana no sakana, fa ny rindrin'ny hevi-diso. »
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-bold text-teal-900 uppercase tracking-wider">{selectedStory.name}, {selectedStory.age} ans</span>
              <span>·</span>
              <span>{selectedStory.location}</span>
            </div>

            <h3 className="text-2xl font-bold text-stone-900 leading-snug">
              {lang === 'fr' ? selectedStory.titleFr : selectedStory.titleMg}
            </h3>

            <div className="p-4 bg-stone-50 border-y border-stone-200/80 italic text-stone-800 text-xs sm:text-sm leading-relaxed">
              {lang === 'fr' ? selectedStory.quoteFr : selectedStory.quoteMg}
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {lang === 'fr' ? selectedStory.fullStoryFr : selectedStory.fullStoryMg}
            </p>

          </div>

          <div className="pt-4 border-t border-stone-100 text-xs text-teal-900 font-semibold">
            ✨ {lang === 'fr' ? "Enseignement clé :" : "Lesona lehibe :"} {lang === 'fr' ? selectedStory.takeawayFr : selectedStory.takeawayMg}
          </div>

        </div>

      </div>

      {/* Switch Between Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PEER_STORIES.map((story) => (
          <button
            key={story.id}
            onClick={() => setSelectedStory(story)}
            className={`p-5 rounded-2xl border text-left transition ${
              selectedStory.id === story.id
                ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
            }`}
          >
            <p className={`text-xs font-bold uppercase tracking-wider ${selectedStory.id === story.id ? 'text-teal-200' : 'text-teal-800'}`}>
              {story.name} · {story.location}
            </p>
            <h4 className="text-base font-bold mt-1">
              {lang === 'fr' ? story.topicFr : story.topicMg}
            </h4>
          </button>
        ))}
      </div>

      {/* Confidential Moderator Contact & Harassment Reporting Space */}
      <div className="bg-stone-100 border border-stone-200 rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-teal-800" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {lang === 'fr' ? "Espace Modérateur & Signalement Bienveillant" : "Fandrindrana sy Fampilazana Loza na Fanorisoran-toetra"}
              </h3>
              <p className="text-xs text-stone-500">
                {lang === 'fr' 
                  ? "Vous êtes victime de harcèlement, d'atteinte ou de propos déplacés ? Signalez en toute confidentialité."
                  : "Misy manadala na manaratsy anao ve ? Ampilazao am-pahanginana ny tompon'andraikitra."}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowReportForm(!showReportForm)}
            className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Flag className="w-3.5 h-3.5 text-rose-400" />
            <span>{showReportForm ? (lang === 'fr' ? "Fermer le formulaire" : "Hakatona") : (lang === 'fr' ? "Faire un signalement" : "Hampilaza")}</span>
          </button>
        </div>

        {showReportForm && (
          <form onSubmit={handleSendReport} className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 text-xs mt-3">
            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Votre nom ou contact (facultatif, peut rester anonyme)" : "Anaranao (tsy voatery)"}
              </label>
              <input
                type="text"
                value={reportSender}
                onChange={(e) => setReportSender(e.target.value)}
                placeholder="Ex: Anonyme ou Tel: +261 34..."
                className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Description de la situation à signaler" : "Fanazavana ny toe-javatra miseho"} *
              </label>
              <textarea
                required
                rows={3}
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder={lang === 'fr' ? "Expliquez ce qui s'est passé en toute sécurité..." : "Hazavao eto ny zava-misy..."}
                className="w-full p-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-stone-400">
                {lang === 'fr' ? "Traité avec discrétion par les psychologues de l'équipe" : "Hodinihina am-pahamalinana"}
              </span>

              <button
                type="submit"
                className="px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg font-semibold flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "Envoyer le signalement" : "Handefa"}</span>
              </button>
            </div>

            {reportSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'fr' ? "Signalement reçu. L'équipe modératrice s'en charge avec discrétion." : "Voaray ny fampilazana. Mandray an-tanana ny tompon'andraikitra."}</span>
              </div>
            )}
          </form>
        )}
      </div>

    </section>
  );
}
