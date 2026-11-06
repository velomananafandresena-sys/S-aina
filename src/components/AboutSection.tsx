import { Users, Mail, MapPin, Phone, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section className="space-y-10">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Présentation, But & Contexte" : "Fampahafantarana sy Tanjona"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' ? "Qui sommes-nous ?" : "Iza izahay ?"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Découvrez la vision, l'équipe pluridisciplinaire et les engagements éthiques qui animent la plateforme S-aina (Santé, aina, saina) — Pour le changement social positif à Madagascar."
            : "Fantaro ny tanjona, ireo manam-pahaizana ary ny fepetra mifehy ny sehatra S-aina (Santé, aina, saina) — Ho an'ny fiovana ara-tsosialy tsara eto Madagasikara."}
        </p>
      </div>

      {/* Main Presentation Container */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-8">
        
        {/* Notre Mission */}
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-teal-800">
            {lang === 'fr' ? "Notre Mission" : "Iraka Iantsorohana"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
            {lang === 'fr' 
              ? "S-aina aide les personnes concernées par la santé mentale ou le handicap, et leurs proches, à comprendre, à se sentir moins seules et à trouver les bonnes ressources à Madagascar."
              : "Ny S-aina dia manampy ny olona voakasiky ny fahasalamana ara-tsaina na ny fahasembanana, sy ny fianakaviany, mba hahatakatra, tsy hahatsiaro ho irery ary hahita ny fanampiana mifanaraka aminy eto Madagasikara."}
          </h3>
        </div>

        {/* Qui porte ce projet ? */}
        <div className="p-6 bg-stone-50 border border-stone-200/80 rounded-2xl space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <h4 className="text-base font-bold text-stone-900">
            {lang === 'fr' ? "Qui porte ce projet ?" : "Iza no tompon-kevitra amin'ity tetikasa ity ?"}
          </h4>
          <p>
            {lang === 'fr'
              ? "Porté par la Mention Psychologie Sociale et Interculturelle de la Faculté des Lettres et Sciences Humaines de l'Université d'Antananarivo. L'équipe réunit enseignants-chercheurs, étudiants, psychologues cliniciens, experts en psychologie sociale, travailleurs sociaux, médecins, pairs-aidants et personnes en situation de handicap, afin d'offrir à tous les ressources nécessaires pour leur bien-être et leur dignité."
              : "Tarihin'ny Mention Psychologie Sociale et Interculturelle eo anivon'ny Faculté des Lettres et Sciences Humaines ao amin'ny Oniversiten'Antananarivo. Ahitana mpampianatra-mpikaroka, mpianatra, mpitsabo saina (psychologues), manam-pahaizana momba ny fiarahamonina, mpanampy ara-tsosialy ary olona manana fahasembanana mba hanome vahaolana maharitra ho an'ny rehetra."}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-600 font-medium border-t border-stone-200/60">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-teal-800" />
              <span>contact@s-aina.mg</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-teal-800" />
              <span>+261 34 50 123 45</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-800" />
              <span>Faculté des Lettres et Sciences Humaines, Université d'Antananarivo, Madagascar</span>
            </span>
          </div>
        </div>

        {/* Ce que vous trouverez ici */}
        <div className="space-y-4">
          <h4 className="text-base font-bold text-stone-900">
            {lang === 'fr' ? "Ce que vous trouverez sur cette plateforme :" : "Ny zavatra ho hitanao eto :"}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              {
                titleFr: "Un annuaire de structures d'écoute, de soins et d'insertion",
                titleMg: "Lahatahiry ireo hopitaly CHU sy toerana fihainoana ary fampidirana asa",
                descFr: "CHU JRB Befelatanana, CHU Anjanamasina, CENHOSOA, Saint Benoît Menni, et ONG d'insertion."
              },
              {
                titleFr: "Des fiches pour comprendre les troubles et lutter contre les préjugés",
                titleMg: "Fampianarana momba ny aretina sy fandravana ny hevi-diso",
                descFr: "CIM-11 et DSM-5-TR expliqués sans jargon, avec déconstruction des croyances erronées."
              },
              {
                titleFr: "Des conseils pratiques pour accompagner un proche",
                titleMg: "Torohevitra hanampiana ny havana tsy misy fahasorenana",
                descFr: "Premiers gestes en cas de crise, que faire et que NE PAS faire."
              },
              {
                titleFr: "Des exercices simples d'apaisement et de respiration",
                titleMg: "Fanazaran-tena fisefoana sy fampitoniana saina",
                descFr: "Cohérence cardiaque interactive, ancrage 5-4-3-2-1 et sagesse du Fihavanana."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-teal-50/40 border border-teal-100 rounded-xl space-y-1">
                <p className="font-bold text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{lang === 'fr' ? item.titleFr : item.titleMg}</span>
                </p>
                <p className="text-stone-600 pl-6 leading-relaxed">
                  {item.descFr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nos Partenaires */}
        <div className="space-y-3 pt-4 border-t border-stone-100">
          <h4 className="text-base font-bold text-stone-900">
            {lang === 'fr' ? "Nos Partenaires Institutionnels & Associatifs" : "Ireo Mpiara-miombon'antoka"}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-stone-600">
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center font-medium">
              Ministère de la Santé Publique
            </div>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center font-medium">
              CHU JRB Befelatanana
            </div>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center font-medium">
              CHU Anjanamasina
            </div>
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center font-medium">
              Plateforme Handicap PFPH/MAD
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
