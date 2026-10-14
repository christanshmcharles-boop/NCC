import React, { useState } from 'react';
import { 
  Shield, Award, BookOpen, Calendar, User, MapPin, Phone, Mail, 
  Download, Search, Play, Pause, Volume2, CheckCircle2, FileText, 
  ChevronRight, Star, Flame, Compass, Crosshair, Clock, Send, 
  X, Menu, Check, Info, ExternalLink, Anchor, Wind
} from 'lucide-react';

const NCC_ANTHEM_LYRICS = [
  "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain",
  "Apni Chhatate Hain Unche Aasmaan, Hum Sab Bharatiya Hain",
  "Kadam Se Kadam Milaye Jaa, Khushi Ke Geet Gaaye Jaa",
  "Bipatti Mein Muskuraye Jaa, Hum Sab Bharatiya Hain",
  "Ek Hi Hamari Zameen, Ek Hi Hamara Aasman",
  "Ek Hi Hamari Nadiyan, Ek Hi Hamara Bagaan",
  "Ekta Hamari Shaan, Ekta Hamari Jaan",
  "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain!"
];

const ANNOUNCEMENTS = [
  { id: 1, title: "'C' Certificate Exam 2026 Schedule Released", date: "18 Oct 2026", category: "Exams", urgent: true, desc: "Written and Practical exams for 'C' Certificate will commence at HQ ground." },
  { id: 2, title: "Combined Annual Training Camp (CATC-112) Registration", date: "22 Oct 2026", category: "Camps", urgent: true, desc: "Mandatory 10-day camp for 2nd & 3rd year SD/SW cadets starting next month." },
  { id: 3, title: "Special Drill & Parade Practice for RDC Selection", date: "25 Oct 2026", category: "Parades", urgent: false, desc: "Daily morning drill session starting 0600 hrs at University Parade Ground." },
  { id: 4, title: "Puneet Sagar Abhiyan & Beach Cleaning Drive", date: "28 Oct 2026", category: "Social", urgent: false, desc: "Joint initiative by Naval & Army wing cadets to clean local water bodies." },
];

const STUDY_MATERIALS = [
  { id: 'm1', title: 'Drill Manual & Words of Command', category: 'Drill', size: '3.4 MB', icon: Compass, file: 'NCC_Drill_Manual_2026.pdf' },
  { id: 'm2', title: '.22 Deluxe Rifle & SLR 7.62mm Weapon Guide', category: 'Weapon Training', size: '5.1 MB', icon: Crosshair, file: 'NCC_Weapon_Training_Guide.pdf' },
  { id: 'm3', title: 'Fieldcraft & Battlecraft (FC & BC)', category: 'Tactics', size: '4.2 MB', icon: Shield, file: 'FC_BC_Standard_Handbook.pdf' },
  { id: 'm4', title: 'Map Reading & Service Prismatic Compass', category: 'Navigation', size: '6.0 MB', icon: MapPin, file: 'Map_Reading_Compass_Guide.pdf' },
  { id: 'm5', title: 'First Aid, Hygiene & Sanitation Manual', category: 'Health', size: '2.8 MB', icon: Star, file: 'NCC_First_Aid_Manual.pdf' },
  { id: 'm6', title: 'Military History & Famous Battles of India', category: 'General', size: '7.5 MB', icon: BookOpen, file: 'Indian_Military_History.pdf' },
];

const WINGS_DATA = {
  army: {
    name: 'Army Wing',
    color: 'from-amber-800 to-emerald-900',
    badgeBg: 'bg-emerald-950 border-emerald-600',
    accentColor: 'text-emerald-400',
    tagline: 'Defenders of the Land',
    icon: Shield,
    motto: 'Service Before Self',
    training: ['Weapon Training (.22 Rifle, SLR, LMG)', 'Drill with Arms & Ceremonial Parade', 'Obstacle Course Training', 'Fieldcraft & Battlecraft Tactics'],
    camps: ['All India Thal Sainik Camp (AITSC)', 'Army Attachment Camp (AAC)', 'Mountain Trekking Camps', 'National Integration Camp (NIC)'],
    mottoEn: 'Unity and Discipline'
  },
  naval: {
    name: 'Naval Wing',
    color: 'from-blue-900 to-indigo-950',
    badgeBg: 'bg-blue-950 border-blue-600',
    accentColor: 'text-cyan-400',
    tagline: 'Rulers of the Seas',
    icon: Anchor,
    motto: 'Sham No Varunah (May the Waters Be Auspicious)',
    training: ['Boat Pulling & Sailing Operations', 'Seamanship & Knot Tying', 'Naval Communication & Signaling', 'Ship Modeling & Ship Visits'],
    camps: ['Nau Sainik Camp (NSC)', 'Naval Attachment Camp (NAC)', 'Sea Training & Sailing Expeditions', 'Scuba Diving & Ocean Swimming'],
    mottoEn: 'Guardians of the Coast'
  },
  air: {
    name: 'Air Wing',
    color: 'from-sky-800 to-slate-900',
    badgeBg: 'bg-sky-950 border-sky-600',
    accentColor: 'text-sky-300',
    tagline: 'Touch the Sky with Glory',
    icon: Wind,
    motto: 'Nabha Sparsham Deeptam',
    training: ['Microlight Flying Experience', 'Aero Modeling (Static & Control Line)', 'Principles of Flight & Meteorology', 'Air Traffic Control Basics'],
    camps: ['Vayu Sainik Camp (VSC)', 'Air Force Academy Attachment', 'Gliding & Flying Expeditions', 'Inter-Group Aero Modeling Competitions'],
    mottoEn: 'Lords of the Skies'
  }
};

const RANKS = [
  { title: "Senior Under Officer (SUO)", level: "Senior Division", icon: "⭐⭐⭐", desc: "Top cadet appointment in a Battalion. Commands company parades and liaises with ANOs/CO." },
  { title: "Junior Under Officer (JUO)", level: "Senior Division", icon: "⭐⭐", desc: "Assists SUO in company management and drill command. Second-in-command during parades." },
  { title: "Company Quarter Master Sergeant (CQMS)", level: "Senior Division", icon: "🎖️", desc: "In-charge of battalion stores, equipment distribution, arms room, and parade logs." },
  { title: "Sergeant (SGT)", level: "SD & JD", icon: "🎗️", desc: "Section commander leading 10-12 cadets. Key supervisor during field training." },
  { title: "Corporal (CPL)", level: "SD & JD", icon: "🎗️", desc: "Assists Sergeant in section handling, attendance checking, and uniform inspection." },
  { title: "Lance Corporal (L/CPL)", level: "SD & JD", icon: "🎗️", desc: "Junior NCO appointment. Demonstrates drill perfection and mentors junior cadets." },
  { title: "Cadet (CDT)", level: "Entry Level", icon: "🔰", desc: "Basic rank upon enrolment. Focuses on foundational drill, discipline, and theory." },
];

const DIRECTORY = [
  { unit: "1 UP Battalion NCC", location: "Lucknow", officer: "Col. R. S. Rathore", ano: "Lt. Dr. A. K. Sharma", phone: "+91 522 2489012", email: "1upbn.ncc@gov.in" },
  { unit: "3 UP Naval Unit NCC", location: "Varanasi", officer: "Cdr. V. K. Nambiar", ano: "Sub Lt. S. P. Verma", phone: "+91 542 2367119", email: "3upnavy.ncc@gov.in" },
  { unit: "2 UP Air Sqn NCC", location: "Kanpur", officer: "Wg Cdr. M. Singh", ano: "Fg Offr. R. K. Gupta", phone: "+91 512 2548890", email: "2upair.ncc@gov.in" },
  { unit: "7 UP Girls Battalion NCC", location: "Agra", officer: "Col. Sunita Menon", ano: "Lt. Meenakshi Roy", phone: "+91 562 2210943", email: "7upgirls.ncc@gov.in" }
];

export default function App() {
  const [activeWing, setActiveWing] = useState('army');
  const [activeTab, setActiveTab] = useState('overview');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPlayingAnthem, setIsPlayingAnthem] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [attendanceLogs] = useState([
    { id: 1, date: "12 Oct 2026", activity: "Squad Drill & Arms Inspection", status: "Present" },
    { id: 2, date: "05 Oct 2026", activity: ".22 Rifle Firing Practice", status: "Present" },
    { id: 3, date: "28 Sep 2026", activity: "Social Service Cleanliness Drive", status: "Present" },
    { id: 4, date: "21 Sep 2026", activity: "Theory Class: Map Reading", status: "Absent" },
  ]);
  
  const [campModalOpen, setCampModalOpen] = useState(false);
  const [campForm, setCampForm] = useState({ name: '', regNo: '', rank: 'SUO', campName: 'CATC-112', fitnessCertified: false });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCampSubmit = (e) => {
    e.preventDefault();
    if (!campForm.name || !campForm.regNo) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setCampModalOpen(false);
      setCampForm({ name: '', regNo: '', rank: 'SUO', campName: 'CATC-112', fitnessCertified: false });
    }, 2000);
  };

  const filteredAnnouncements = activeCategory === 'All' 
    ? ANNOUNCEMENTS 
    : ANNOUNCEMENTS.filter(a => a.category === activeCategory);

  const filteredDirectory = DIRECTORY.filter(d => 
    d.unit.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.officer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Banner */}
      <div className="h-1.5 bg-gradient-to-r from-amber-500 via-slate-100 to-emerald-600 w-full sticky top-0 z-50 shadow-lg"></div>

      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-1.5 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-amber-500 flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-white to-emerald-400 bg-clip-text text-transparent uppercase">
                  NCC Cadet Portal
                </span>
                <span className="block text-[10px] tracking-widest text-slate-400 font-semibold uppercase">
                  Ekta aur Anushasan
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'overview', label: 'Home' },
                { id: 'wings', label: 'NCC Wings' },
                { id: 'notices', label: 'Notices' },
                { id: 'portal', label: 'Cadet Dashboard' },
                { id: 'ranks', label: 'Ranks & Rules' },
                { id: 'downloads', label: 'Study Manuals' },
                { id: 'directory', label: 'Directory' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => { setActiveTab('portal'); setCampModalOpen(true); }}
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs tracking-wider uppercase shadow-md transition-all transform active:scale-95"
              >
                <Award className="w-4 h-4" />
                Apply for Camp
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
            {[
              { id: 'overview', label: 'Home' },
              { id: 'wings', label: 'NCC Wings' },
              { id: 'notices', label: 'Notices' },
              { id: 'portal', label: 'Cadet Dashboard' },
              { id: 'ranks', label: 'Ranks & Rules' },
              { id: 'downloads', label: 'Study Manuals' },
              { id: 'directory', label: 'Directory' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'bg-amber-500/10 text-amber-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      {activeTab === 'overview' && (
        <main>
          <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                    <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                    National Cadet Corps • India
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                    UNITY AND DISCIPLINE
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-500 mt-2 font-mono">
                      ( एकता और अनुशासन )
                    </span>
                  </h1>

                  <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                    Welcome to the official cadet portal. Empowering youth through character building, leadership training, drill precision, and selfless national service.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setActiveTab('portal')}
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                    >
                      <User className="w-5 h-5" />
                      Cadet Portal Login
                    </button>

                    <button 
                      onClick={() => setActiveTab('wings')}
                      className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
                    >
                      Explore Wings
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="relative bg-slate-900/90 border border-slate-700/80 p-8 rounded-3xl shadow-2xl backdrop-blur-xl text-center space-y-6">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-slate-800 border-2 border-amber-500/50 flex items-center justify-center shadow-inner">
                        <Shield className="w-14 h-14 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white tracking-wider uppercase">NCC Motto & Ethos</h3>
                        <p className="text-sm text-slate-400 italic">"Obey With Smile, Be Punctual, Work Hard Without Fuss, Make No Excuses and Tell No Lies."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-slate-900/60 border-y border-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                      <Volume2 className="w-4 h-4" /> Official NCC Anthem
                    </div>
                    <h3 className="text-2xl font-black text-white">"Hum Sab Bharatiya Hain"</h3>
                  </div>

                  <button 
                    onClick={() => setIsPlayingAnthem(!isPlayingAnthem)}
                    className="px-6 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold flex items-center gap-3 transition-all"
                  >
                    {isPlayingAnthem ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlayingAnthem ? 'Pause Song' : 'Play Anthem'}</span>
                  </button>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
                  {NCC_ANTHEM_LYRICS.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                      <span className="text-amber-500 font-bold">{idx + 1}.</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'wings' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-2">
              {Object.keys(WINGS_DATA).map((wingKey) => {
                const wing = WINGS_DATA[wingKey];
                const IconComponent = wing.icon;
                return (
                  <button
                    key={wingKey}
                    onClick={() => setActiveWing(wingKey)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                      activeWing === wingKey
                        ? 'bg-slate-800 text-white shadow-md border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${wing.accentColor}`} />
                    {wing.name}
                  </button>
                );
              })}
            </div>
          </div>

          {(() => {
            const currentWing = WINGS_DATA[activeWing];
            const Icon = currentWing.icon;
            return (
              <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
                <div className={`p-8 sm:p-12 bg-gradient-to-r ${currentWing.color} relative border-b border-slate-800`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{currentWing.tagline}</span>
                      <h3 className="text-3xl sm:text-4xl font-black text-white">{currentWing.name}</h3>
                      <p className="text-sm text-slate-200 italic">Motto: "{currentWing.motto}"</p>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Crosshair className="w-5 h-5 text-amber-500" />
                      Core Training Syllabus
                    </h4>
                    <ul className="space-y-3">
                      {currentWing.training.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      Prestigious Wing Camps
                    </h4>
                    <ul className="space-y-3">
                      {currentWing.camps.map((camp, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                          <Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{camp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {activeTab === 'notices' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Battalion Notice Board</h2>
              <p className="text-slate-400 text-sm mt-1">Official circulars, exam schedules, and parade notifications.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Exams', 'Camps', 'Parades', 'Social'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAnnouncements.map((item) => (
              <div 
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all relative overflow-hidden"
              >
                {item.urgent && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                    Urgent
                  </div>
                )}

                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-800 text-amber-400 font-semibold">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'portal' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Cadet Profile & Portal</h2>
              <p className="text-slate-400 text-sm mt-1">Manage your attendance logs, camp enrolments, and official credentials.</p>
            </div>
            <button 
              onClick={() => setCampModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs tracking-wider uppercase shadow-md transition-all self-start sm:self-auto"
            >
              <Award className="w-4 h-4" />
              Apply for Camp
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 shadow-inner">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      Senior Under Officer
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">Cadet Vikram Singh</h3>
                    <p className="text-xs text-slate-400 font-mono">REG: UP/22/SD/A/10492</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-t border-b border-slate-800/80 py-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Unit / Battalion:</span>
                    <span className="text-slate-200 font-medium">3 UP Naval Unit NCC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Institution:</span>
                    <span className="text-slate-200 font-medium">BHU Main Campus</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 text-amber-400" />
                    Download Cadet ID Card
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    Parade & Drill Attendance Logs
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                        <th className="pb-3 px-2">Date</th>
                        <th className="pb-3 px-2">Activity / Training Topic</th>
                        <th className="pb-3 px-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {attendanceLogs.map((log) => (
                        <tr key={log.id} className="text-xs">
                          <td className="py-3 px-2 font-mono text-slate-300">{log.date}</td>
                          <td className="py-3 px-2 text-slate-200 font-medium">{log.activity}</td>
                          <td className="py-3 px-2 text-right">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              log.status === 'Present' 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                                : 'bg-red-500/10 text-red-400 border border-red-500/30'
                            }`}>
                              {log.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'ranks' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Cadet Ranks & Insignia</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RANKS.map((rank, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{rank.icon}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-bold uppercase">
                    {rank.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{rank.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{rank.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'downloads' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Official Training Manuals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDY_MATERIALS.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-400">{item.size}</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">{item.category}</span>
                    <h3 className="text-base font-bold text-white mt-1 mb-4">{item.title}</h3>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {activeTab === 'directory' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Unit Directory</h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input 
                type="text"
                placeholder="Search unit or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDirectory.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.unit}</h3>
                    <p className="text-xs text-amber-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> {item.location} Location
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80">
                  <div>
                    <span className="text-slate-400 block">Commanding Officer:</span>
                    <span className="text-slate-200 font-semibold">{item.officer}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">ANO In-Charge:</span>
                    <span className="text-slate-200 font-semibold">{item.ano}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" /> {item.phone}
                  </span>
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-500" /> {item.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {campModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setCampModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Camp Application Form</h3>
            <p className="text-xs text-slate-400 mb-6">Submit your nomination for upcoming national/state training camps.</p>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Submitted!</h4>
              </div>
            ) : (
              <form onSubmit={handleCampSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Cadet Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Vikram Singh"
                    value={campForm.name}
                    onChange={(e) => setCampForm({...campForm, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold">Regiment Number</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. UP/22/SD/A/10492"
                    value={campForm.regNo}
                    onChange={(e) => setCampForm({...campForm, regNo: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 mt-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold tracking-wider uppercase transition-all shadow-md"
                >
                  Submit Enrolment
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16 text-xs text-slate-400 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="font-bold text-slate-300 uppercase tracking-widest">National Cadet Corps • Unity and Discipline</p>
          <p>© 2026 Official Cadet Portal. Developed for Cadet Training & Administration Support.</p>
        </div>
      </footer>

    </div>
  );
}