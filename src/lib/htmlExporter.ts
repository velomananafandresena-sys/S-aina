import { SPECIALISTS_DATA, DISEASES_DATA, ARTICLES_DATA, QUIZ_QUESTIONS, ROLE_TIPS_DATA, PEER_STORIES, CARE_MODEL_STEPS, EMERGENCY_NUMBERS } from '../data/appData';

/**
 * Generates and triggers download of a complete standalone Single-File HTML application
 * containing all content, directories, care model, interactive tools, and offline scripts.
 */
export function downloadStandaloneHtmlApp() {
  const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>S-aina (Santé, aina, saina) - Pour le changement social positif à Madagascar</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FAF9F5; color: #1C1917; }
    h1, h2, h3, .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    @keyframes breathePulse {
      0%, 100% { transform: scale(0.85); opacity: 0.8; }
      40%, 60% { transform: scale(1.3); opacity: 1; }
      90% { transform: scale(0.85); opacity: 0.8; }
    }
    .breathe-anim { animation: breathePulse 12s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- TOP BAR -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200 px-4 lg:px-8 py-3">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex flex-col">
        <div class="flex items-baseline gap-2">
          <a href="#accueil" class="text-xl font-bold tracking-tight text-teal-900 font-serif whitespace-nowrap">
            S-aina
          </a>
          <span class="text-xs text-stone-500 hidden sm:inline">· Santé, aina, saina</span>
        </div>
        <span class="text-[11px] font-semibold text-teal-800 italic">Pour le changement social positif à Madagascar</span>
      </div>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
        <a href="#modele-soins" class="hover:text-teal-900 transition">Modèle de Soins</a>
        <a href="#annuaire-specialistes" class="hover:text-teal-900 transition">Spécialistes & Hôpitaux</a>
        <a href="#annuaire-maladies" class="hover:text-teal-900 transition">Maladies & Troubles</a>
        <a href="#proches" class="hover:text-teal-900 transition">Accompagner nos proches</a>
        <a href="#outils" class="hover:text-teal-900 transition">Outils Pratiques</a>
        <a href="#qui-sommes-nous" class="hover:text-teal-900 transition">Qui sommes-nous ?</a>
      </nav>

      <div class="flex items-center gap-2">
        <button onclick="document.getElementById('emergency-modal').classList.remove('hidden')" class="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg whitespace-nowrap">
          Urgence / Vonjy aina
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <main class="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8 space-y-16">
    
    <section id="accueil" class="bg-white border border-stone-200 rounded-2xl p-6 lg:p-12 shadow-sm">
      <div class="max-w-3xl space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs uppercase tracking-widest text-teal-900 font-bold bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
            S-aina · Santé, aina, saina
          </span>
          <span class="text-xs font-semibold text-teal-800 italic">
            « Pour le changement social positif à Madagascar »
          </span>
        </div>
        <h1 class="text-3xl lg:text-5xl font-bold text-stone-900 leading-tight">
          Prendre soin de la santé mentale et valoriser chaque handicap à Madagascar
        </h1>
        <p class="text-stone-600 leading-relaxed text-base lg:text-lg">
          Une application citoyenne conçue pour les personnes concernées, leurs proches et la communauté. Trouver les spécialistes, comprendre les troubles sans jargon, et mobiliser les ressources d'écoute à Madagascar.
        </p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="#modele-soins" class="px-4 py-2.5 bg-teal-800 text-white rounded-lg text-sm font-medium hover:bg-teal-900 transition">
            Consulter le Modèle de Soins
          </a>
          <a href="#annuaire-specialistes" class="px-4 py-2.5 bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-sm font-medium hover:bg-stone-200 transition">
            Annuaire des Hôpitaux (CHU)
          </a>
          <a href="#outils" class="px-4 py-2.5 bg-stone-100 text-stone-800 border border-stone-200 rounded-lg text-sm font-medium hover:bg-stone-200 transition">
            Exercices d'apaisement
          </a>
        </div>
      </div>
    </section>

    <!-- CARE MODEL SECTION -->
    <section id="modele-soins" class="space-y-6">
      <div class="border-b border-stone-200 pb-4">
        <h2 class="text-2xl lg:text-3xl font-bold text-stone-900">Le Modèle de Prise en Charge en Santé Mentale</h2>
        <p class="text-sm text-stone-500 mt-1">Du moins sévère au plus sévère : quelle structure pour quel besoin ?</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${CARE_MODEL_STEPS.map(step => `
          <div class="bg-white border border-stone-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold uppercase tracking-wider text-${step.color === 'emerald' ? 'teal-700' : step.color === 'blue' ? 'sky-700' : 'rose-700'}">Niveau ${step.level}</span>
              <h3 class="text-lg font-bold text-stone-900">${step.titleFr}</h3>
              <p class="text-xs text-stone-500 italic">${step.severityFr}</p>
              <div class="text-xs space-y-1.5 pt-2 border-t border-stone-100">
                <p><strong>Intervenants :</strong> ${step.whoFr}</p>
                <p><strong>Indications :</strong> ${step.indicationsFr}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SPECIALISTS DIRECTORY -->
    <section id="annuaire-specialistes" class="space-y-6">
      <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl lg:text-3xl font-bold text-stone-900">Annuaire des Spécialistes & Hôpitaux (CHU)</h2>
          <p class="text-sm text-stone-500 mt-1">Centres hospitaliers universitaires, cliniques et organismes d'insertion à Madagascar</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${SPECIALISTS_DATA.map(spec => `
          <div class="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-3">
            <div>
              <span class="text-xs uppercase tracking-wider text-teal-800 font-semibold">${spec.city} · ${spec.category.toUpperCase()}</span>
              <h3 class="text-base font-bold text-stone-900 mt-0.5">${spec.name}</h3>
            </div>
            <p class="text-xs text-stone-600">${spec.descriptionFr}</p>
            <div class="text-xs space-y-1 text-stone-500 pt-2 border-t border-stone-100">
              <p>📍 ${spec.address}</p>
              <p>📞 <a href="tel:${spec.phone}" class="text-teal-700 font-semibold underline">${spec.phone}</a></p>
              <p>🕒 ${spec.hours}</p>
              <p>💰 ${spec.fees}</p>
              <p>♿ ${spec.accessibilityInfo}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- DISEASES DIRECTORY -->
    <section id="annuaire-maladies" class="space-y-6">
      <div class="border-b border-stone-200 pb-4">
        <h2 class="text-2xl lg:text-3xl font-bold text-stone-900">Annuaire des Maladies & Troubles (CIM-11 / DSM-5-TR)</h2>
        <p class="text-sm text-stone-500 mt-1">Contenu purement éducatif sans diagnostic médical. Démystification des préjugés.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${DISEASES_DATA.map(d => `
          <div class="bg-white border border-stone-200 rounded-xl p-6 shadow-sm space-y-4">
            <div>
              <div class="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>${d.categoryLabelFr}</span>
                <span>Réf: ${d.referenceSource}</span>
              </div>
              <h3 class="text-xl font-bold text-stone-900">${d.name} <span class="text-sm font-normal text-stone-500">(${d.malagasyName})</span></h3>
            </div>
            <p class="text-xs text-stone-600 leading-relaxed">${d.summaryFr}</p>
            
            <div class="bg-stone-50 p-3 rounded-lg text-xs space-y-1">
              <strong class="text-stone-800">Signes fréquents :</strong>
              <ul class="list-disc list-inside text-stone-600 space-y-0.5">
                ${d.symptomsFr.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>

            <div class="bg-amber-50 border border-amber-100 p-3 rounded-lg text-xs space-y-1 text-amber-900">
              <strong>Préjugé déconstruit :</strong>
              <p class="italic">${d.myths[0].mythFr}</p>
              <p class="font-medium text-stone-800 mt-1">Réalité : ${d.myths[0].realityFr}</p>
            </div>

            <div class="text-xs text-stone-500 pt-2 border-t border-stone-100">
              <strong>Vers qui s'orienter :</strong> ${d.whoToConsultFr}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- PRACTICAL TOOLS & CARDIAC COHERENCE -->
    <section id="outils" class="space-y-6">
      <div class="border-b border-stone-200 pb-4">
        <h2 class="text-2xl lg:text-3xl font-bold text-stone-900">Outils Pratiques d'Apaisement & Cohérence Cardiaque</h2>
        <p class="text-sm text-stone-500 mt-1">Prise en charge primaire numérique : respiration guidée 5 minutes et ancrage 5-4-3-2-1</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-stone-200 rounded-2xl p-6 lg:p-10">
        <div class="space-y-4">
          <span class="text-xs uppercase font-bold tracking-wider text-teal-800">Exercice Guidé Autonome</span>
          <h3 class="text-2xl font-bold text-stone-900">Cohérence Cardiaque 365</h3>
          <p class="text-sm text-stone-600 leading-relaxed">
            Inspirez pendant 4 secondes par le nez en gonflant le ventre, retenez 2 secondes, puis expirez lentement par la bouche pendant 6 secondes.
            Cet exercice régule le système nerveux autonome et abaisse le cortisol (hormone du stress).
          </p>
          <div class="p-3 bg-stone-50 rounded-lg text-xs space-y-1 text-stone-700">
            <p>• <strong>Inspirer (4s) :</strong> L'orbe s'agrandit doucement.</p>
            <p>• <strong>Pause (2s) :</strong> Maintenez l'air avec douceur.</p>
            <p>• <strong>Expirer (6s) :</strong> L'orbe se rétracte lentement.</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center py-6">
          <div class="w-48 h-48 rounded-full bg-teal-100 border-4 border-teal-600/30 flex items-center justify-center breathe-anim shadow-inner">
            <span class="text-teal-900 font-bold text-sm text-center px-4">Respirez au rythme de l'orbe</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="qui-sommes-nous" class="bg-stone-100 border border-stone-200 rounded-2xl p-6 lg:p-10 space-y-6">
      <div>
        <h2 class="text-2xl lg:text-3xl font-bold text-stone-900">Qui sommes-nous ?</h2>
        <p class="text-sm text-stone-600 mt-1">Présentation, mission et contexte de création</p>
      </div>
      <div class="space-y-4 text-sm text-stone-700 leading-relaxed">
        <p><strong>Notre mission :</strong> S-aina (Santé, aina, saina) — Pour le changement social positif à Madagascar. Cette plateforme aide les personnes concernées par la santé mentale ou le handicap, et leurs proches, à comprendre, à se sentir moins seules et à trouver les bonnes ressources à Madagascar.</p>
        <p><strong>Qui porte ce projet ?</strong> Porté par la Mention Psychologie Sociale et Interculturelle de la Faculté des Lettres et Sciences Humaines de l'Université d'Antananarivo, avec une équipe multidisciplinaire réunissant enseignants-chercheurs, étudiants, psychologues, travailleurs sociaux et personnes en situation de handicap afin d'offrir les ressources nécessaires à leur bien-être et leur dignité.</p>
        <p><strong>Nos partenaires :</strong> Ministère de la Santé Publique, CHU JRB Befelatanana, CHU Anjanamasina, Plateforme des Fédérations de Personnes Handicapées (PFPH/MAD), ONG et centres d'insertion.</p>
        <p><strong>Éthique & Données :</strong> Aucun diagnostic n'est délivré par cette plateforme. Les données restent strictement confidentielles sur votre appareil, sans aucune exploitation commerciale.</p>
      </div>
    </section>

  </main>

  <!-- EMERGENCY MODAL -->
  <div id="emergency-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-rose-200">
      <div class="flex items-center justify-between border-b border-stone-200 pb-3">
        <h3 class="text-lg font-bold text-rose-700">Numéros d'Urgence à Madagascar</h3>
        <button onclick="document.getElementById('emergency-modal').classList.add('hidden')" class="text-stone-400 hover:text-stone-600 text-lg font-bold">✕</button>
      </div>
      <div class="space-y-3 text-xs">
        ${EMERGENCY_NUMBERS.map(num => `
          <div class="p-3 bg-stone-50 rounded-lg flex items-center justify-between">
            <div>
              <p class="font-bold text-stone-900">${num.name}</p>
              <p class="text-stone-500">${num.available} · ${num.city}</p>
            </div>
            <a href="tel:${num.phone}" class="px-3 py-1.5 bg-rose-600 text-white font-bold rounded hover:bg-rose-700 whitespace-nowrap">
              ${num.phone}
            </a>
          </div>
        `).join('')}
      </div>
      <button onclick="document.getElementById('emergency-modal').classList.add('hidden')" class="w-full py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded text-xs font-semibold">
        Fermer
      </button>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="bg-white border-t border-stone-200 py-6 px-4 text-center text-xs text-stone-500">
    <p>© 2026 S-aina (Santé, aina, saina) — Porté par la Mention Psychologie Sociale et Interculturelle, FLSH - Université d'Antananarivo.</p>
    <p class="mt-1">Cette application ne remplace pas une consultation médicale auprès d'un médecin ou psychiatre qualifié.</p>
  </footer>

</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 's-aina-madagascar.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
