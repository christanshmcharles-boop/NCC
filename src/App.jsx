import React, { useState } from 'react';
import { 
  Shield, Award, BookOpen, CheckCircle2, XCircle, RotateCcw, 
  Trophy, HelpCircle, ChevronRight, Target, Compass, Crosshair, ArrowRight
} from 'lucide-react';

const QUIZ_DATA = [
  {
    id: 1,
    category: "Drill",
    question: "How many paces are taken in 'Tej Chal' (Quick Time) per minute by a cadet?",
    options: ["110 Paces", "120 Paces", "135 Paces", "140 Paces"],
    correctAnswer: 1,
    explanation: "In Quick Time (Tej Chal), standard SD/JD cadets take 120 paces per minute (116 for SW/JW)."
  },
  {
    id: 2,
    category: "Weapon Training",
    question: "What is the effective range of a .22 Deluxe Rifle?",
    options: ["25 Yards", "50 Yards", "100 Yards", "300 Yards"],
    correctAnswer: 0,
    explanation: "The effective range of a .22 Deluxe Rifle is 25 yards (23 meters)."
  },
  {
    id: 3,
    category: "Weapon Training",
    question: "What is the capacity of the magazine for a 7.62mm SLR (Self Loading Rifle)?",
    options: ["10 Rounds", "20 Rounds", "28 Rounds", "30 Rounds"],
    correctAnswer: 1,
    explanation: "The 7.62mm SLR magazine holds up to 20 rounds of ammunition."
  },
  {
    id: 4,
    category: "Map Reading",
    question: "What color is used to represent water bodies on a topographical map?",
    options: ["Green", "Brown", "Blue", "Red"],
    correctAnswer: 2,
    explanation: "Blue is conventionally used for water bodies such as rivers, lakes, and oceans."
  },
  {
    id: 5,
    category: "Map Reading",
    question: "What instrument is used to find the Magnetic North in field navigation?",
    options: ["Prismatic Compass", "Altimeter", "Protractor", "Barometer"],
    correctAnswer: 0,
    explanation: "A Service Prismatic Compass is used to locate Magnetic North and measure bearings."
  },
  {
    id: 6,
    category: "General Knowledge",
    question: "In which year was the National Cadet Corps (NCC) officially established in India?",
    options: ["1947", "1948", "1950", "1962"],
    correctAnswer: 1,
    explanation: "The NCC was formed under the National Cadet Corps Act of 1948 on 15th July 1948."
  },
  {
    id: 7,
    category: "Drill",
    question: "What is the angle formed between the feet in 'Savdhan' (Attention) position?",
    options: ["30 Degrees", "45 Degrees", "60 Degrees", "90 Degrees"],
    correctAnswer: 0,
    explanation: "In the Savdhan position, heels are together and toes are open at an angle of 30 degrees."
  },
  {
    id: 8,
    category: "Fieldcraft & Tactics",
    question: "Which of the following is NOT a method of judging distance in FC & BC?",
    options: ["Unit of Measure", "Appearance Method", "Section Average", "Radar Echo Method"],
    correctAnswer: 3,
    explanation: "Radar Echo Method is an electronic measure, not a manual fieldcraft distance judging technique."
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Filter questions based on category
  const questions = selectedCategory === 'All' 
    ? QUIZ_DATA 
    : QUIZ_DATA.filter(q => q.category === selectedCategory);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return; // Prevent changing answer after selection
    setSelectedOption(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = (category = 'All') => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Patriotic Bar */}
      <div className="h-1.5 bg-gradient-to-r from-amber-500 via-slate-100 to-emerald-600 w-full sticky top-0 z-50"></div>

      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur border-b border-slate-800 sticky top-1.5 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border-2 border-amber-500 flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-xl font-black uppercase bg-gradient-to-r from-amber-400 via-white to-emerald-400 bg-clip-text text-transparent">
                NCC Exam Prep Portal
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                'B' & 'C' Certificate Quiz
              </p>
            </div>
          </div>

          <button 
            onClick={() => resetQuiz(selectedCategory)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            Restart
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Category Filters */}
        {!isQuizCompleted && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['All', 'Drill', 'Weapon Training', 'Map Reading', 'General Knowledge', 'Fieldcraft & Tactics'].map((cat) => (
              <button
                key={cat}
                onClick={() => resetQuiz(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Quiz Card or Completion Screen */}
        {!isQuizCompleted ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-2">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span className="text-amber-400 font-bold">{currentQuestion.category}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                let btnStyle = "bg-slate-950/60 border-slate-800 text-slate-200 hover:border-amber-500/50 hover:bg-slate-800/50";
                
                if (selectedOption !== null) {
                  if (index === currentQuestion.correctAnswer) {
                    btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-semibold";
                  } else if (index === selectedOption) {
                    btnStyle = "bg-red-950/80 border-red-500 text-red-300 font-semibold";
                  } else {
                    btnStyle = "bg-slate-950/30 border-slate-900 text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={index}
                    disabled={selectedOption !== null}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {selectedOption !== null && index === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {selectedOption !== null && index === selectedOption && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-amber-400 block uppercase">Explanation:</span>
                <p>{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Next Action Button */}
            {selectedOption !== null && (
              <button
                onClick={handleNextQuestion}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>{currentQuestionIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

          </div>
        ) : (
          /* Results Screen */
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 bg-amber-500/10 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <Trophy className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-black text-white uppercase tracking-wider">Quiz Completed!</h2>
            
            <div className="space-y-2">
              <p className="text-4xl font-black text-amber-400 font-mono">
                {score} / {questions.length}
              </p>
              <p className="text-sm text-slate-400">
                You scored {Math.round((score / questions.length) * 100)}% on the {selectedCategory} section.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => resetQuiz(selectedCategory)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-12 text-center text-xs text-slate-500">
        <p>NCC Certificate Exam Prep Portal • Unity and Discipline</p>
      </footer>

    </div>
  );
}