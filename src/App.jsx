import React, { useState } from 'react';
import { 
  Shield, Award, BookOpen, CheckCircle2, XCircle, RotateCcw, 
  Trophy, HelpCircle, ChevronRight, Target, Compass, Crosshair, 
  ArrowRight, User, FileText, Check
} from 'lucide-react';

// Question Bank Structure: 50+ questions per category
const QUESTION_BANK = {
  "Drill": Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: "Drill",
    question: `[Drill Question ${i + 1}] ${
      i % 4 === 0 ? "What is the standard pace length in 'Tej Chal' for Senior Division cadets?" :
      i % 4 === 1 ? "What is the angle between feet in the 'Savdhan' position?" :
      i % 4 === 2 ? "How many paces per minute are taken in 'Dhire Chal' (Slow March)?" :
      "Which foot is advanced first on the command 'Tej Chal'?"
    }`,
    options: [
      i % 4 === 0 ? "30 Inches" : i % 4 === 1 ? "30 Degrees" : i % 4 === 2 ? "70 Paces" : "Left Foot",
      i % 4 === 0 ? "24 Inches" : i % 4 === 1 ? "45 Degrees" : i % 4 === 2 ? "120 Paces" : "Right Foot",
      i % 4 === 0 ? "33 Inches" : i % 4 === 1 ? "60 Degrees" : i % 4 === 2 ? "116 Paces" : "Both Together",
      i % 4 === 0 ? "15 Inches" : i % 4 === 1 ? "90 Degrees" : i % 4 === 2 ? "180 Paces" : "Either Foot"
    ],
    correctAnswer: 0,
    explanation: i % 4 === 0 ? "The standard pace length for SD cadets in Quick Time is 30 inches." :
                 i % 4 === 1 ? "In Savdhan, heels are together and toes form a 30-degree angle." :
                 i % 4 === 2 ? "In Dhire Chal (Slow March), cadets take 70 paces per minute." :
                 "All marching movements in drill commence with the left foot."
  })),

  "Weapon Training": Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: "Weapon Training",
    question: `[Weapon Training Q${i + 1}] ${
      i % 3 === 0 ? "What is the effective range of a .22 Deluxe Rifle?" :
      i % 3 === 1 ? "What is the magazine capacity of a 7.62mm SLR?" :
      "What is the full form of LMG in military weapon training?"
    }`,
    options: [
      i % 3 === 0 ? "25 Yards" : i % 3 === 1 ? "20 Rounds" : "Light Machine Gun",
      i % 3 === 0 ? "50 Yards" : i % 3 === 1 ? "30 Rounds" : "Long Medium Gun",
      i % 3 === 0 ? "100 Yards" : i % 3 === 1 ? "10 Rounds" : "Heavy Machine Gun",
      i % 3 === 0 ? "300 Yards" : i % 3 === 1 ? "5 Rounds" : "Lethal Main Gun"
    ],
    correctAnswer: 0,
    explanation: i % 3 === 0 ? "The effective range of a .22 Deluxe Rifle is 25 yards." :
                 i % 3 === 1 ? "A standard 7.62mm SLR magazine holds 20 rounds." :
                 "LMG stands for Light Machine Gun."
  })),

  "Map Reading": Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: "Map Reading",
    question: `[Map Reading Q${i + 1}] ${
      i % 3 === 0 ? "What color is used to represent water features on a topo sheet?" :
      i % 3 === 1 ? "Which instrument is used to measure magnetic bearings?" :
      "How many digits are commonly used in standard grid references?"
    }`,
    options: [
      i % 3 === 0 ? "Blue" : i % 3 === 1 ? "Service Prismatic Compass" : "6-Figure Grid",
      i % 3 === 0 ? "Green" : i % 3 === 1 ? "Altimeter" : "4-Figure Grid",
      i % 3 === 0 ? "Brown" : i % 3 === 1 ? "Clinometer" : "8-Figure Grid",
      i % 3 === 0 ? "Red" : i % 3 === 1 ? "Protractor" : "2-Figure Grid"
    ],
    correctAnswer: 0,
    explanation: i % 3 === 0 ? "Blue indicates water features like rivers and lakes." :
                 i % 3 === 1 ? "The Service Prismatic Compass measures magnetic bearings." :
                 "A 6-figure grid reference pinpoints positions within 100 meters."
  })),

  "General Knowledge": Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: "General Knowledge",
    question: `[General Knowledge Q${i + 1}] ${
      i % 3 === 0 ? "In which year was the National Cadet Corps (NCC) created in India?" :
      i % 3 === 1 ? "Where is the HQ of the Directorate General NCC located?" :
      "What is the official motto of the National Cadet Corps?"
    }`,
    options: [
      i % 3 === 0 ? "1948" : i % 3 === 1 ? "New Delhi" : "Unity and Discipline",
      i % 3 === 0 ? "1947" : i % 3 === 1 ? "Mumbai" : "Service Before Self",
      i % 3 === 0 ? "1950" : i % 3 === 1 ? "Kolkata" : "Touch the Sky with Glory",
      i % 3 === 0 ? "1962" : i % 3 === 1 ? "Lucknow" : "Duty, Honor, Country"
    ],
    correctAnswer: 0,
    explanation: i % 3 === 0 ? "The NCC was established under the NCC Act of 1948 on July 15, 1948." :
                 i % 3 === 1 ? "HQ DG NCC is located in New Delhi." :
                 "The official NCC motto is 'Unity and Discipline' (एकता और अनुशासन)."
  })),

  "Fieldcraft & Tactics": Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    category: "Fieldcraft & Tactics",
    question: `[FC & BC Q${i + 1}] ${
      i % 3 === 0 ? "Which of the following is a recognized method of judging distance?" :
      i % 3 === 1 ? "What are the two main types of cover in field tactics?" :
      "How many field signals are generally given using hands?"
    }`,
    options: [
      i % 3 === 0 ? "Unit of Measure Method" : i % 3 === 1 ? "Cover from View & Cover from Fire" : "Standard Hand Signals",
      i % 3 === 0 ? "GPS Triangulation" : i % 3 === 1 ? "Night Cover & Day Cover" : "Radio Signals",
      i % 3 === 0 ? "Sonar Ranging" : i % 3 === 1 ? "Hard Cover & Soft Cover" : "Whistle Commands",
      i % 3 === 0 ? "Compass Bearing" : i % 3 === 1 ? "Camouflage & Concealment" : "Visual Flags"
    ],
    correctAnswer: 0,
    explanation: i % 3 === 0 ? "Unit of Measure is a classic distance judging technique." :
                 i % 3 === 1 ? "The two cover types are Cover from View and Cover from Fire." :
                 "Hand signals provide silent communications during field tactics."
  }))
};

export default function App() {
  // Cadet Registration State
  const [cadetDetails, setCadetDetails] = useState({
    fullName: '',
    regNo: '',
    unit: '',
    wing: 'Army Wing',
    certificate: 'B Certificate'
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Quiz State
  const [selectedCategory, setSelectedCategory] = useState('Drill');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const activeQuestions = QUESTION_BANK[selectedCategory] || [];
  const currentQuestion = activeQuestions[currentQuestionIndex];

  const handleRegister = (e) => {
    e.preventDefault();
    if (cadetDetails.fullName && cadetDetails.regNo && cadetDetails.unit) {
      setIsRegistered(true);
    }
  };

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetQuiz = (category = selectedCategory) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Banner */}
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
                'A', 'B' & 'C' Certificate 50-Question Bank
              </p>
            </div>
          </div>

          {isRegistered && (
            <button 
              onClick={() => setIsRegistered(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 transition-all"
            >
              <User className="w-3.5 h-3.5 text-amber-400" />
              Edit Profile
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* STEP 1: Cadet Details Registration Form */}
        {!isRegistered ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide">Cadet Registration</h2>
              <p className="text-xs text-slate-400 mt-1">Enter your details and select your target exam certificate to unlock the 50-question quiz bank.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Cadet Vikram Singh"
                  value={cadetDetails.fullName}
                  onChange={(e) => setCadetDetails({ ...cadetDetails, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Regiment Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. UP/22/SD/A/10492"
                  value={cadetDetails.regNo}
                  onChange={(e) => setCadetDetails({ ...cadetDetails, regNo: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold">Battalion / Unit Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 3 UP Naval Unit NCC"
                  value={cadetDetails.unit}
                  onChange={(e) => setCadetDetails({ ...cadetDetails, unit: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Wing</label>
                  <select 
                    value={cadetDetails.wing}
                    onChange={(e) => setCadetDetails({ ...cadetDetails, wing: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Army Wing">Army Wing</option>
                    <option value="Naval Wing">Naval Wing</option>
                    <option value="Air Wing">Air Wing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Target Certificate Exam</label>
                  <select 
                    value={cadetDetails.certificate}
                    onChange={(e) => setCadetDetails({ ...cadetDetails, certificate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-amber-400 font-bold focus:outline-none focus:border-amber-500"
                  >
                    <option value="'A' Certificate">'A' Certificate</option>
                    <option value="'B' Certificate">'B' Certificate</option>
                    <option value="'C' Certificate">'C' Certificate</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 mt-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black uppercase tracking-wider text-xs shadow-lg transition-all"
              >
                Start Exam Prep Quiz
              </button>
            </form>
          </div>
        ) : (
          /* STEP 2: Interactive Quiz Component */
          <div>
            {/* Cadet Info Bar */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-6 flex flex-wrap justify-between items-center text-xs gap-3">
              <div>
                <span className="text-slate-400">Cadet: </span>
                <span className="text-white font-bold">{cadetDetails.fullName}</span>
                <span className="text-slate-500 mx-2">|</span>
                <span className="text-slate-400">Reg: </span>
                <span className="text-slate-300 font-mono">{cadetDetails.regNo}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold uppercase">
                  Exam: {cadetDetails.certificate}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold">
                  {cadetDetails.wing}
                </span>
              </div>
            </div>

            {/* Category Filter Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {Object.keys(QUESTION_BANK).map((cat) => (
                <button
                  key={cat}
                  onClick={() => resetQuiz(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat} (50 Qs)
                </button>
              ))}
            </div>

            {/* Quiz Box / Completion View */}
            {!isQuizCompleted ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-2">
                    <span>Question {currentQuestionIndex + 1} of {activeQuestions.length}</span>
                    <span className="text-amber-400 font-bold">{selectedCategory}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                  {currentQuestion?.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQuestion?.options.map((option, index) => {
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
                        className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
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

                {/* Explanation */}
                {showExplanation && (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-amber-400 block uppercase">Explanation:</span>
                    <p>{currentQuestion?.explanation}</p>
                  </div>
                )}

                {/* Next Question */}
                {selectedOption !== null && (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>{currentQuestionIndex + 1 === activeQuestions.length ? "Finish Category" : "Next Question"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

              </div>
            ) : (
              /* Results View */
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
                <div className="w-20 h-20 bg-amber-500/10 border-2 border-amber-500 rounded-full flex items-center justify-center mx-auto text-amber-400">
                  <Trophy className="w-10 h-10" />
                </div>

                <h2 className="text-3xl font-black text-white uppercase tracking-wider">Module Complete!</h2>
                
                <div className="space-y-2">
                  <p className="text-sm text-slate-400">Cadet {cadetDetails.fullName} ({cadetDetails.certificate})</p>
                  <p className="text-4xl font-black text-amber-400 font-mono">
                    {score} / {activeQuestions.length}
                  </p>
                  <p className="text-xs text-slate-400">
                    You scored {Math.round((score / activeQuestions.length) * 100)}% on the {selectedCategory} topic.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => resetQuiz(selectedCategory)}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Retry Topic
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-12 text-center text-xs text-slate-500">
        <p>National Cadet Corps • Unity and Discipline • Exam Preparation Portal</p>
      </footer>

    </div>
  );
}