import { useState } from 'react';
import { User, Building2, Shield, Lock, FileText, Download, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { UserHealthProfile, Language, AccountType, UserRole } from '../types';

interface PersonalSpaceSectionProps {
  lang: Language;
  onProfileUpdated?: (profile: UserHealthProfile) => void;
}

export function PersonalSpaceSection({ lang, onProfileUpdated }: PersonalSpaceSectionProps) {
  // Load from localStorage if present
  const [profile, setProfile] = useState<UserHealthProfile>(() => {
    try {
      const saved = localStorage.getItem('fahasalamana_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      accountType: 'individual',
      fullName: '',
      organizationName: '',
      role: 'student',
      email: '',
      phone: '',
      region: 'Analamanga',
      city: 'Antananarivo',
      reasonForJoining: '',
      healthConsentGiven: false,
      healthConsentTimestamp: undefined,
      conditions: [],
      allergiesOrSensitivities: '',
      currentTreatments: '',
      accessibilityNeeds: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      personalNotes: ''
    };
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('fahasalamana_profile', JSON.stringify(profile));
      setSavedSuccess(true);
      if (onProfileUpdated) onProfileUpdated(profile);
      setTimeout(() => setSavedSuccess(false), 4000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleToggleConsent = () => {
    const updated = {
      ...profile,
      healthConsentGiven: !profile.healthConsentGiven,
      healthConsentTimestamp: !profile.healthConsentGiven ? new Date().toISOString() : undefined
    };
    setProfile(updated);
    try {
      localStorage.setItem('fahasalamana_profile', JSON.stringify(updated));
      if (onProfileUpdated) onProfileUpdated(updated);
    } catch (e) {
      console.error(e);
    }
  };

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'mon-dossier-fahasalamana.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleClearData = () => {
    if (confirm(lang === 'fr' ? "Êtes-vous sûr de vouloir effacer toutes vos données de votre appareil ?" : "Tena hofafana tokoa ve ny antontan-taratasinao rehetra ?")) {
      localStorage.removeItem('fahasalamana_profile');
      setProfile({
        accountType: 'individual',
        fullName: '',
        organizationName: '',
        role: 'student',
        email: '',
        phone: '',
        region: 'Analamanga',
        city: 'Antananarivo',
        reasonForJoining: '',
        healthConsentGiven: false,
        healthConsentTimestamp: undefined,
        conditions: [],
        allergiesOrSensitivities: '',
        currentTreatments: '',
        accessibilityNeeds: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        personalNotes: ''
      });
      alert(lang === 'fr' ? "Données effacées avec succès." : "Voafafa soa aman-tsara ny angona.");
    }
  };

  return (
    <section className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5">
        <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
          {lang === 'fr' ? "Confidentialité & Données Sécurisées" : "Toerana Manokana Voaaro"}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mt-1">
          {lang === 'fr' ? "Mon Espace Personnel & Données Sanitaires" : "Ny Toerako Manokana sy ny Fahasalamako"}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {lang === 'fr'
            ? "Renseignez vos informations de santé pour votre usage personnel ou celui de votre organisation. Vos données restent exclusivement sur votre appareil et ne sont jamais transmises à des tiers sans votre accord."
            : "Soraty eto ny mombamomba anao sy ny fahasalamanao. Voatahiry ao amin'ny fitaovanao manokana izany ary tsy zaraina amin'iza na iza."}
        </p>
      </div>

      {/* Ethical Charter Strip */}
      <div className="p-4 bg-teal-50/60 border border-teal-100 rounded-2xl flex items-start gap-3">
        <Shield className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
        <div className="text-xs text-teal-950 space-y-1">
          <p className="font-bold">
            {lang === 'fr' ? "Garantie Éthique Fahasalamana & Aina :" : "Fepetra sy Fanajana ny Tsiambaratelo :"}
          </p>
          <p>
            {lang === 'fr'
              ? "1. Aucune vente de données. 2. Stockage strictement local sur votre terminal. 3. Consentement séparé pour les données sensibles révocable en un clic à tout instant. 4. Aucun diagnostic automatique."
              : "Tsy amidy ny angonao. Voatahiry ao amin'ny solosainao na findainao izany. Afaka fafana amin'ny fotoana rehetra."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-8">
        
        {/* Account Type Selection */}
        <div className="space-y-3">
          <label className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
            {lang === 'fr' ? "Type de Compte :" : "Karazana Kaonty :"}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            <button
              type="button"
              onClick={() => setProfile({ ...profile, accountType: 'individual' })}
              className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                profile.accountType === 'individual'
                  ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{lang === 'fr' ? "Particulier / Individu" : "Olona Tsotra"}</span>
            </button>

            <button
              type="button"
              onClick={() => setProfile({ ...profile, accountType: 'organization' })}
              className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                profile.accountType === 'organization'
                  ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{lang === 'fr' ? "Organisation / Entreprise / ONG" : "Orinasa / Fikambanana"}</span>
            </button>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-4 pt-4 border-t border-stone-100">
          <h3 className="text-base font-bold text-stone-900">
            {lang === 'fr' ? "Informations Générales" : "Mombamomba Ankapobeny"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {profile.accountType === 'organization' && (
              <div className="sm:col-span-2 space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Nom de l'Organisation / Entreprise" : "Anaran'ny Fikambanana na Orinasa"}
                </label>
                <input
                  type="text"
                  value={profile.organizationName || ''}
                  onChange={(e) => setProfile({ ...profile, organizationName: e.target.value })}
                  placeholder="Ex: Association Fampandrosoana, Entreprise XYZ..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Nom et Prénom (ou pseudonyme)" : "Anarana sy Fanampin'anarana"} *
              </label>
              <input
                type="text"
                required
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                placeholder="Ex: Rado, Fanja..."
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Votre Rôle Principal" : "Andraikitra"}
              </label>
              <select
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value as UserRole })}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              >
                <option value="student">{lang === 'fr' ? "Étudiant / Jeune" : "Mpianatra / Tanora"}</option>
                <option value="worker">{lang === 'fr' ? "Travailleur / Salarié" : "Mpiasa"}</option>
                <option value="parent">{lang === 'fr' ? "Parent / Éducateur" : "Ray aman-dReny"}</option>
                <option value="caregiver">{lang === 'fr' ? "Proche aidant d'un patient" : "Mpanohana havana"}</option>
                <option value="concerned_person">{lang === 'fr' ? "Personne en situation de handicap / trouble" : "Olona manana fahasembanana"}</option>
                <option value="organization">{lang === 'fr' ? "Responsable RH / Direction" : "Mpitantana orinasa"}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Ville de Résidence" : "Tanàna"}
              </label>
              <input
                type="text"
                value={profile.city}
                onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                placeholder="Ex: Antananarivo, Toamasina, Mahajanga..."
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Téléphone (facultatif)" : "Laharana finday"}
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                placeholder="+261 34 ..."
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>

            <div className="sm:col-span-2 space-y-1">
              <label className="font-semibold text-stone-700">
                {lang === 'fr' ? "Raison de votre inscription (facultatif)" : "Antony hidiranao (tsy voatery)"}
              </label>
              <textarea
                rows={2}
                value={profile.reasonForJoining}
                onChange={(e) => setProfile({ ...profile, reasonForJoining: e.target.value })}
                placeholder={lang === 'fr' ? "Ex: M'informer pour mon fils, trouver un psychologue, apaiser mon stress..." : "Ohatra: Mahita fanampiana ho an'ny zanako..."}
                className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>
          </div>
        </div>

        {/* Health Data & Explicit Consent */}
        <div className="space-y-4 pt-4 border-t border-stone-100">
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                {lang === 'fr' ? "Carnet Médical & Caractéristiques Sanitaires" : "Taratasy Ara-Pahasalamana"}
              </h3>
              <p className="text-xs text-stone-500">
                {lang === 'fr' 
                  ? "Saisissez vos données utiles en cas de consultation ou d'urgence" 
                  : "Angona ilaina rehefa manatona mpitsabo"}
              </p>
            </div>
            
            {/* Separate Consent Button */}
            <button
              type="button"
              onClick={handleToggleConsent}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                profile.healthConsentGiven
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-stone-100 text-stone-600 border border-stone-300'
              }`}
            >
              {profile.healthConsentGiven ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Lock className="w-4 h-4 text-stone-400" />}
              <span>
                {profile.healthConsentGiven 
                  ? (lang === 'fr' ? "Consentement Actif" : "Ekena ny fitahirizana") 
                  : (lang === 'fr' ? "Activer Consentement Santé" : "Hanaiky fitahirizana")}
              </span>
            </button>
          </div>

          {profile.healthConsentGiven ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Traitements en cours / Médicaments" : "Fanafody sotroina amin'izao fotoana"}
                </label>
                <input
                  type="text"
                  value={profile.currentTreatments}
                  onChange={(e) => setProfile({ ...profile, currentTreatments: e.target.value })}
                  placeholder="Ex: Anxiolytique, antidépresseur, insuline..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Allergies ou Sensibilités sensorielles" : "Zavatra tsy zaka (allergies)"}
                </label>
                <input
                  type="text"
                  value={profile.allergiesOrSensitivities}
                  onChange={(e) => setProfile({ ...profile, allergiesOrSensitivities: e.target.value })}
                  placeholder="Ex: Bruits forts, pénicilline, poussière..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Besoins d'accessibilité spécifiques" : "Filana manokana amin'ny fidirana"}
                </label>
                <input
                  type="text"
                  value={profile.accessibilityNeeds}
                  onChange={(e) => setProfile({ ...profile, accessibilityNeeds: e.target.value })}
                  placeholder="Ex: Fauteuil roulant, rampe d'accès, langue des signes..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Contact d'Urgence (Nom et Téléphone)" : "Olona antsoina maika raha misy loza"}
                </label>
                <input
                  type="text"
                  value={profile.emergencyContactName}
                  onChange={(e) => setProfile({ ...profile, emergencyContactName: e.target.value })}
                  placeholder="Ex: Mère (+261 34 00 000 00)"
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <label className="font-semibold text-stone-700">
                  {lang === 'fr' ? "Notes personnelles d'apaisement" : "Fanamarihana manokana"}
                </label>
                <textarea
                  rows={2}
                  value={profile.personalNotes}
                  onChange={(e) => setProfile({ ...profile, personalNotes: e.target.value })}
                  placeholder={lang === 'fr' ? "Ce qui m'aide quand je panique : écouter de la musique, sortir marcher..." : "Ny zavatra mampitony ahy..."}
                  className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
                />
              </div>
            </div>
          ) : (
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 flex items-center justify-between">
              <p>
                {lang === 'fr'
                  ? "Pour enregistrer vos antécédents médicaux, veuillez activer votre consentement explicite ci-dessus. Vous pourrez le retirer à tout moment."
                  : "Mila ekenao aloha ny fitahirizana ny angon'ny fahasalamanao vao afaka manoratra eto ianao."}
              </p>
            </div>
          )}

        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-sm transition"
            >
              {lang === 'fr' ? "Enregistrer mon profil" : "Hitahiry ny toerako"}
            </button>

            {savedSuccess && (
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {lang === 'fr' ? "Données enregistrées localement !" : "Voatahiry soa aman-tsara !"}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportData}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? "Exporter (JSON)" : "Alaina (JSON)"}</span>
            </button>

            <button
              type="button"
              onClick={handleClearData}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg text-xs font-medium transition flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? "Effacer mes données" : "Fafao ny angona"}</span>
            </button>
          </div>
        </div>

      </form>

    </section>
  );
}
