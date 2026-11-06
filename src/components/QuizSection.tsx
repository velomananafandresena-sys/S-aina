import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/appData';
import { Language, QuizQuestion } from '../types';

interface QuizSectionProps {
  lang: Language;
}

export function QuizSection({ lang }: QuizSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredMap, setAnsweredMap] = useState<Record<number, string>>({});

  const question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (selectedOptionId !== null) return; // Prevent double answer

    setSelectedOptionId(optionId);
    setAnsweredMap((prev) => ({ ...prev, [currentQuestionIndex]: optionId }));

    if (isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsFinished(false);
    setAnsweredMap({});
  };

  return (
    <section className="bg-white border border-stone-200/90 rounded-2xl p-6 lg:p-10 shadow-sm space-y-8">
      
      {/* Header */}
      <div className="border-b border-stone-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-teal-800 font-bold">
            {lang === 'fr' ? "Apprentissage Ludique & Démystification" : "Lalao Fanabeazana sy Fahalalana"}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
            {lang === 'fr' 
              ? "Jeu Interactif : Vrai ou Faux & Mises en Situation" 
              : "Lalao : Marina sa Diso & Fisehoan-javatra"}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {lang === 'fr' 
              ? "Testez vos connaissances sans jugement pour briser les stéréotypes sur la santé mentale et le handicap." 
              : "Fantaro ny tena marina tsy misy fitsarana mba handravana ny hevi-diso."}
          </p>
        </div>

        {!isFinished && (
          <span className="px-3 py-1 bg-stone-100 rounded-full font-mono text-xs text-stone-600 font-bold self-start sm:self-auto">
            {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Question Title */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
              {question.type === 'true_false' 
                ? (lang === 'fr' ? "Question Vrai ou Faux" : "Fanontaniana Marina sa Diso") 
                : question.type === 'scenario' 
                ? (lang === 'fr' ? "Mise en situation concrète" : "Toe-javatra eo amin'ny fiainana") 
                : (lang === 'fr' ? "Quiz psycho-éducatif" : "Quiz fampianarana")}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {lang === 'fr' ? question.questionFr : question.questionMg}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const hasAnswered = selectedOptionId !== null;

              let btnStyle = 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-800';

              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold';
                } else {
                  btnStyle = 'bg-stone-50/50 border-stone-200 opacity-60 text-stone-500';
                }
              }

              return (
                <div key={opt.id} className="space-y-2">
                  <button
                    onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition flex items-center justify-between gap-3 ${btnStyle}`}
                  >
                    <span>{lang === 'fr' ? opt.textFr : opt.textMg}</span>
                    {hasAnswered && opt.isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {hasAnswered && isSelected && !opt.isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>

                  {/* Explanation feedback */}
                  {hasAnswered && (isSelected || opt.isCorrect) && (
                    <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                      opt.isCorrect ? 'bg-emerald-100/70 text-emerald-900' : 'bg-rose-100/70 text-rose-900'
                    }`}>
                      <p><strong>{opt.isCorrect ? (lang === 'fr' ? 'Explication :' : 'Fanazavana :') : (lang === 'fr' ? 'À retenir :' : 'Marihina :')}</strong> {lang === 'fr' ? opt.explanationFr : opt.explanationMg}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          {selectedOptionId !== null && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-sm transition"
              >
                {currentQuestionIndex + 1 === QUIZ_QUESTIONS.length 
                  ? (lang === 'fr' ? "Voir les résultats" : "Hijery ny vokatra") 
                  : (lang === 'fr' ? "Question suivante →" : "Fanontaniana manaraka →")}
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Final Score Card */
        <div className="text-center py-6 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900">
            {lang === 'fr' ? "Bravo pour votre démarche !" : "Arahabaina tamin'ny fandraisana anjara !"}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm">
            {lang === 'fr' 
              ? `Vous avez obtenu un score de ${score} sur ${QUIZ_QUESTIONS.length}. Chaque pas vers la compréhension est une victoire contre les préjugés et la honte.` 
              : `Nahazo isa ${score} amin'ny ${QUIZ_QUESTIONS.length} ianao. Ny fahalalana marina no manala ny tahotra sy ny fanavakavahana.`}
          </p>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-sm transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{lang === 'fr' ? "Recommencer le jeu" : "Averina ny lalao"}</span>
          </button>
        </div>
      )}

    </section>
  );
}
