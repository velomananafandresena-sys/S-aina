import { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, ShieldCheck, Sparkles, User, Bot, Trash2, Settings, Phone, Check } from 'lucide-react';
import { ChatMessage, Language, UserHealthProfile } from '../types';
import ainaAvatar from '../assets/images/companion_avatar_aina_1791739380764.jpg';
import { EMERGENCY_NUMBERS } from '../data/appData';

interface CompanionSectionProps {
  lang: Language;
  userProfile?: UserHealthProfile | null;
  onOpenEmergency: () => void;
  onNavigateToDirectory: () => void;
}

export function CompanionSection({ 
  lang, 
  userProfile, 
  onOpenEmergency, 
  onNavigateToDirectory 
}: CompanionSectionProps) {
  const [companionName, setCompanionName] = useState('Aina');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [allowProfileAccess, setAllowProfileAccess] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasEmergencyTrigger, setHasEmergencyTrigger] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'companion',
      text: lang === 'fr'
        ? `Bonjour, je m'appelle ${companionName}. Je suis un compagnon d'écoute bienveillant et d'orientation pour la santé mentale et le handicap à Madagascar. Je ne suis pas médecin et ne remplace pas une consultation médicale. Comment vous sentez-vous aujourd'hui ?`
        : `Manao ahoana tompoko, ${companionName} no anarako. Mpanolotsaina sy mpanampy amin'ny fihainoana am-pitiavana eto Madagasikara aho. Tsy dokotera aho ary tsy manolo-tena ho fitsaboana ara-pahasalamana. Ahoana ny fahasalaman'ny sainao androany ?`,
      timestamp: 'Maintenant'
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle Crisis keywords detection
  const checkCrisisKeywords = (text: string): boolean => {
    const crisisPatterns = [
      'suicide', 'suicidaire', 'mourir', 'en finir', 'miala aina', 'hamono tena', 
      'vonoy aho', 'te ho faty', 'veux mourir', 'plus envie de vivre', 'tuer', 'overdose', 'défenestrer'
    ];
    const lower = text.toLowerCase();
    return crisisPatterns.some((pattern) => lower.includes(pattern));
  };

  const handleSendMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const isEmergency = checkCrisisKeywords(trimmed);
    if (isEmergency) {
      setHasEmergencyTrigger(true);
    }

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isEmergency
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Generate Contextual empathetic response
    setTimeout(() => {
      let reply = '';

      if (isEmergency) {
        reply = lang === 'fr'
          ? `⚠️ J'entends votre immense détresse et je tiens à vous dire que vous avez de la valeur et que vous n'êtes pas seul(e). Votre vie est précieuse. S'il vous plaît, contactez immédiatement les urgences : le CHU JRB Befelatanana (+261 20 22 270 51), la cellule d'écoute au +261 34 50 123 45, ou le 117. Une équipe médicale est prête à vous accueillir avec respect dès maintenant.`
          : `⚠️ Reko ny fahoriana lalina mahazo anao, ary manome toky anao aho fa tsy irery ianao ary manan-danja lehibe ny ainao. Azafady indrindra, antsoy haingana ny vonjy taitra hopitaly Befelatanana (+261 20 22 270 51), ny laharana fihainoana +261 34 50 123 45 na ny 117. Misy olona vonona hihaino sy hamonjy anao dieny izao.`;
      } else {
        const lower = trimmed.toLowerCase();
        if (lower.includes('befelatanana') || lower.includes('hopitaly') || lower.includes('hopital') || lower.includes('chu')) {
          reply = lang === 'fr'
            ? `À Madagascar, le CHU JRB Befelatanana (Service Neuro-Psychiatrie) et le CHU Anjanamasina sont les hôpitaux de référence pour les soins psychiatriques. Le CHU SSPA Analakely propose aussi des consultations ambulatoires en centre-ville. Vous pouvez consulter leurs coordonnées complètes dans l'onglet "Annuaire CHU".`
            : `Eto Madagasikara, ny CHU Befelatanana sy ny CHU Anjanamasina no hopitaly lehibe manam-pahaizana amin'ny aretin-tsaina. Ny CHU SSPA Analakely koa dia mandray tsy mila mandry hopitaly. Jereo ao amin'ny "Lahatahiry" ny antsipiriany.`;
        } else if (lower.includes('stress') || lower.includes('raritsaina') || lower.includes('angoisse') || lower.includes('tahotra')) {
          reply = lang === 'fr'
            ? `Le stress et l'angoisse provoquent de fortes tensions physiques. Je vous invite à faire 3 minutes de cohérence cardiaque dans notre onglet "Outils & Apaisement" : inspirez 4 secondes par le nez, retenez 2 secondes, puis expirez 6 secondes. Buvez également un verre d'eau.`
            : `Ny raritsaina dia manavesatra ny fo sy ny saina. Manasa anao hanao fisefoana miadana ao amin'ny "Fampitoniana" : sintomy 4 segondra ny rivotra, tazomy 2 segondra, ary avoahy 6 segondra. Misotroa rano malefaka koa.`;
        } else if (lower.includes('handicap') || lower.includes('fahasembanana') || lower.includes('travail') || lower.includes('asa')) {
          reply = lang === 'fr'
            ? `Pour l'orientation professionnelle et l'inclusion des personnes en situation de handicap, la Plateforme des Personnes Handicapées (PFPH/MAD) et les centres d'insertion partenaires accompagnent l'accès aux droits et à la formation. L'application oriente sans intermédiaire.`
            : `Ho an'ny fahasembanana sy ny asa, ny Plateforme PFPH/MAD sy ireo fikambanana mpiara-miombon'antoka no manampy amin'ny fiofanana sy ny fidirana amin'ny asa.`;
        } else {
          reply = lang === 'fr'
            ? `Je vous remercie de partager cela avec moi. En tant que compagnon bienveillant, je vous rappelle que vous pouvez explorer notre modèle de soins, tester les exercices de respiration ou consulter les spécialistes référencés. Que souhaitez-vous approfondir ?`
            : `Misaotra anao niresaka tamiko. Mpanolotsaina am-pitiavana aho mampahatsiahy anao fa afaka mampiasa ny fitaovana fampitoniana ianao na mijery ny lahatahirin'ireo hopitaly. Inona no tianao ho fantatra manaraka ?`;
        }
      }

      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'companion',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isEmergency
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'init-fresh',
        sender: 'companion',
        text: lang === 'fr'
          ? `Conversation réinitialisée en toute confidentialité. Comment puis-je vous accompagner ?`
          : `Voafafa am-pahanginana ny resaka rehetra. Ahoana no hanampiako anao ?`,
        timestamp: 'Maintenant'
      }
    ]);
    setHasEmergencyTrigger(false);
  };

  return (
    <section className="space-y-6">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
            {lang === 'fr' ? "Compagnon d'Écoute Bienveillant" : "Mpanolotsaina am-Pitiavana"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-0.5">
            {companionName} · {lang === 'fr' ? "Votre Guide d'Orientation" : "Mpitari-dalana Anao"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {lang === 'fr' 
              ? "Échange confidentiel, aide à la gestion du stress et orientation vers les structures de Madagascar" 
              : "Resaka mangina, fanampiana amin'ny raritsaina ary fitarihana amin'ny hopitaly"}
          </p>
        </div>

        {/* Options & Configuration */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCustomizing(!isCustomizing)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition"
          >
            <Settings className="w-3.5 h-3.5 text-stone-500" />
            <span>{lang === 'fr' ? "Personnaliser" : "Hanova anarana"}</span>
          </button>

          <button
            onClick={handleClearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium transition"
            title="Effacer l'historique"
          >
            <Trash2 className="w-3.5 h-3.5 text-stone-400" />
            <span>{lang === 'fr' ? "Effacer" : "Fafao"}</span>
          </button>
        </div>
      </div>

      {/* Customization Drawer */}
      {isCustomizing && (
        <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm space-y-3 text-xs">
          <h4 className="font-bold text-stone-900">
            {lang === 'fr' ? "Personnaliser votre compagnon d'écoute :" : "Amboary ny mpanolotsainao :"}
          </h4>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto flex-1">
              <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                {lang === 'fr' ? "Nom du personnage" : "Anaran'ny mpanolotsaina"}
              </label>
              <input
                type="text"
                value={companionName}
                onChange={(e) => setCompanionName(e.target.value)}
                className="w-full px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              />
            </div>
            <div className="flex items-center gap-2 pt-4">
              <label className="flex items-center gap-2 cursor-pointer text-stone-700">
                <input
                  type="checkbox"
                  checked={allowProfileAccess}
                  onChange={(e) => setAllowProfileAccess(e.target.checked)}
                  className="rounded border-stone-300 text-teal-800 focus:ring-teal-800"
                />
                <span>
                  {lang === 'fr' 
                    ? "Autoriser Aina à consulter mon espace personnel pour personnaliser ses conseils" 
                    : "Avelao hijery ny fahasalamako ao amin'ny toerako izy"}
                </span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Banner Alert if Triggered */}
      {hasEmergencyTrigger && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-3 text-xs text-rose-950">
          <div className="flex items-center gap-2 font-bold text-rose-800 text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>{lang === 'fr' ? "Détresse vitale détectée — Aide immédiate à Madagascar" : "Vonjy Aina Maika eto Madagasikara"}</span>
          </div>
          <p>
            {lang === 'fr'
              ? "Si vous êtes en danger ou si vous songez à vous faire du mal, ne restez pas seul(e). Appelez sans attendre :"
              : "Raha mahatsapa loza ianao na mieritreritra hamono tena, aza miandry :"}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href="tel:+261202227051"
              className="px-3 py-1.5 bg-rose-600 text-white rounded-lg font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CHU Befelatanana : +261 20 22 270 51</span>
            </a>
            <button
              onClick={onOpenEmergency}
              className="px-3 py-1.5 bg-stone-900 text-white rounded-lg font-bold"
            >
              Voir tous les numéros d'urgence
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Interface */}
      <div className="bg-white border border-stone-200/90 rounded-2xl shadow-sm flex flex-col h-[520px] overflow-hidden">
        
        {/* Chat Header Card */}
        <div className="px-5 py-3.5 border-b border-stone-100 bg-stone-50/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ainaAvatar}
              alt={companionName}
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-stone-200"
            />
            <div>
              <p className="text-sm font-bold text-stone-900">{companionName}</p>
              <p className="text-[11px] text-teal-800 font-medium">
                {lang === 'fr' ? "Compagnon bienveillant · Garde-fous actifs" : "Mpanolotsaina vonona · Tsy manome fitsarana"}
              </p>
            </div>
          </div>
          <span className="text-[11px] text-stone-400 hidden sm:inline">
            {lang === 'fr' ? "Pas de diagnostic médical" : "Tsy dokotera mpitsabo"}
          </span>
        </div>

        {/* Message Flow Area */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4 text-xs">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {!isUser ? (
                  <img
                    src={ainaAvatar}
                    alt={companionName}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-teal-900 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                    U
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl space-y-1 ${
                    isUser
                      ? 'bg-teal-900 text-white rounded-tr-none'
                      : msg.isEmergency
                      ? 'bg-rose-50 border border-rose-200 text-stone-800 rounded-tl-none'
                      : 'bg-stone-100 text-stone-800 rounded-tl-none'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[10px] block text-right ${isUser ? 'text-teal-200' : 'text-stone-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-stone-400 text-xs pl-10">
              <span className="animate-pulse">{companionName} {lang === 'fr' ? 'écrit avec bienveillance...' : 'mieritreritra...'}</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Inquiries */}
        <div className="px-4 py-2 border-t border-stone-100 bg-stone-50 flex items-center gap-2 overflow-x-auto scrollbar-none text-[11px]">
          <span className="text-stone-400 shrink-0">{lang === 'fr' ? "Suggestions :" : "Fanontaniana :"}</span>
          <button
            onClick={() => setInputText(lang === 'fr' ? "Où se trouve le CHU Befelatanana et quels sont ses horaires ?" : "Aiza ny CHU Befelatanana ary amin'ny firy no misokatra ?")}
            className="px-2.5 py-1 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 shrink-0"
          >
            CHU Befelatanana
          </button>
          <button
            onClick={() => setInputText(lang === 'fr' ? "J'ai une crise d'angoisse maintenant, aide-moi à respirer." : "Manana tahotra sy sempotra aho izao, ampionao fisefoana.")}
            className="px-2.5 py-1 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 shrink-0"
          >
            {lang === 'fr' ? "Crise d'angoisse" : "Krizy fanahiana"}
          </button>
          <button
            onClick={() => setInputText(lang === 'fr' ? "Comment aider une personne avec un handicap pour son travail ?" : "Ahoana ny fanampiana olona manana fahasembanana amin'ny asa ?")}
            className="px-2.5 py-1 bg-white border border-stone-200 rounded-full text-stone-600 hover:text-stone-900 shrink-0"
          >
            {lang === 'fr' ? "Insertion handicap" : "Asa sy fahasembanana"}
          </button>
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-stone-200 bg-white flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={
              lang === 'fr' 
                ? `Parlez librement à ${companionName} (ex: "je me sens angoissé", "structures à Mahajanga")...` 
                : `Miresaha amin'i ${companionName}...`
            }
            className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:bg-white transition"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="p-2.5 bg-teal-800 hover:bg-teal-900 disabled:opacity-50 text-white rounded-xl shadow-sm transition shrink-0"
            aria-label="Envoyer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
