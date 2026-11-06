import { useState } from 'react';
import { GraduationCap, Briefcase, Users, HeartHandshake, Accessibility, Building2, Lightbulb, Check } from 'lucide-react';
import { ROLE_TIPS_DATA } from '../data/appData';
import { Language, UserRole } from '../types';

interface RoleTipsSectionProps {
  lang: Language;
  currentRole?: UserRole;
  onSetRole?: (role: UserRole) => void;
}

export function RoleTipsSection({ lang, currentRole = 'student', onSetRole }: RoleTipsSectionProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(currentRole);

  const roles = [
    { id: 'student' as UserRole, labelFr: "Étudiant & Jeune", labelMg: "Mpianatra sy Tanora", icon: GraduationCap },
    { id: 'worker' as UserRole, labelFr: "Travailleur & Salarié", labelMg: "Mpiasa sy Mpikarama", icon: Briefcase },
    { id: 'parent' as UserRole, labelFr: "Parent & Éducateur", labelMg: "Ray aman-dReny", icon: Users },
    { id: 'caregiver' as UserRole, labelFr: "Proche & Aidant", labelMg: "Mpanohana Havana", icon: HeartHandshake },
    { id: 'concerned_person' as UserRole, labelFr: "Personne avec Handicap", labelMg: "Olona manana Fahasembanana", icon: Accessibility },
    { id: 'organization' as UserRole, labelFr: "Organisation / École", labelMg: "Orinasa sy Sekoly", icon: Building2 }
  ];

  const handleSelect = (r: UserRole) => {
    setSelectedRole(r);
    if (onSetRole) onSetRole(r);
  };

  const currentTip = ROLE_TIPS_DATA.find((t) => t.role === selectedRole) || ROLE_TIPS_DATA[0];

  return (
    <section className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Recommandations Contextuelles" : "Torohevitra sy Torolalana"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' 
            ? "Astuces Personnalisées selon votre Profil" 
            : "Torohevitra Manokana Araka ny Andraikitrao"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Chaque situation de vie implique des défis uniques. Choisissez votre rôle pour afficher des conseils sur-mesure pour préserver votre santé mentale et créer un environnement inclusif."
            : "Ny andraikitry ny tsirairay dia misy fiatraikany amin'ny saina. Safidio ny andraikitrao hahitana torohevitra mifanaraka aminao indrindra."}
        </p>
      </div>

      {/* Role Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {roles.map((r) => {
          const Icon = r.icon;
          const isSelected = selectedRole === r.id;
          return (
            <button
              key={r.id}
              onClick={() => handleSelect(r.id)}
              className={`p-4 rounded-2xl border text-center transition flex flex-col items-center justify-center space-y-2 ${
                isSelected
                  ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200/90 hover:bg-stone-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-200' : 'text-teal-800'}`} />
              <span className="text-xs font-semibold leading-tight">
                {lang === 'fr' ? r.labelFr : r.labelMg}
              </span>
            </button>
          );
        })}
      </div>

      {/* Displayed Tip Card */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-6">
        
        <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider">
          <Lightbulb className="w-4 h-4" />
          <span>{lang === 'fr' ? "Fiche Conseil Pratique" : "Torohevitra Azo Ampiharina"}</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-stone-900">
            {lang === 'fr' ? currentTip.titleFr : currentTip.titleMg}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
            {lang === 'fr' ? currentTip.contentFr : currentTip.contentMg}
          </p>
        </div>

        {/* Action Concrete */}
        <div className="p-5 bg-teal-50/60 border border-teal-100 rounded-2xl space-y-2 text-xs text-teal-950">
          <span className="font-bold uppercase tracking-wider text-[11px] text-teal-800 block">
            {lang === 'fr' ? "Action clé recommandée au quotidien :" : "Asa mivaingana tokony hatao :"}
          </span>
          <p className="text-stone-800 leading-relaxed text-sm">
            {lang === 'fr' ? currentTip.keyActionFr : currentTip.keyActionMg}
          </p>
        </div>

      </div>

    </section>
  );
}
