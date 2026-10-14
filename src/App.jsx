<section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
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
            {/* Cadet ID Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
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
                  <div className="flex justify-between">
                    <span className="text-slate-400">Wing:</span>
                    <span className="text-cyan-400 font-bold">Naval Wing (SD)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Certificate Status:</span>
                    <span className="text-emerald-400 font-bold">'B' Certificate Cleared</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 text-amber-400" />
                    Download Cadet ID Card
                  </button>
                  <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    Download 'C' Exam Hall Ticket
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance & Activity Logs */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-500" />
                    Parade & Drill Attendance Logs
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    75% Attendance (Eligible for Exam)
                  </span>
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

      {/* Ranks & Rules Tab */}
      {activeTab === 'ranks' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Cadet Ranks & Insignia</h2>
            <p className="text-slate-400 text-sm mt-2">Promotional hierarchy, rank appointments, and leadership roles in the Senior & Junior Divisions.</p>
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

      {/* Downloads / Study Manuals Tab */}
      {activeTab === 'downloads' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Official Training Manuals</h2>
            <p className="text-slate-400 text-sm mt-2">Download official NCC syllabus handbooks for 'A', 'B', and 'C' Certificate examination prep.</p>
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

      {/* Directory Tab */}
      {activeTab === 'directory' && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Unit Directory</h2>
              <p className="text-slate-400 text-sm mt-1">Locate and contact battalion headquarters and ANO officers.</p>
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

      {/* Camp Application Modal */}
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
                <p className="text-xs text-slate-400">Your application has been forwarded to your Unit ANO for approval.</p>
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Rank</label>
                    <select 
                      value={campForm.rank}
                      onChange={(e) => setCampForm({...campForm, rank: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                    >
                      <option value="SUO">SUO</option>
                      <option value="JUO">JUO</option>
                      <option value="SGT">SGT</option>
                      <option value="CPL">CPL</option>
                      <option value="CDT">CDT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Camp Selection</label>
                    <select 
                      value={campForm.campName}
                      onChange={(e) => setCampForm({...campForm, campName: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500"
                    >
                      <option value="CATC-112">CATC-112</option>
                      <option value="AITSC">Thal Sainik Camp</option>
                      <option value="RDC">Republic Day Camp</option>
                      <option value="NIC">National Integration Camp</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="fitness"
                    required
                    checked={campForm.fitnessCertified}
                    onChange={(e) => setCampForm({...campForm, fitnessCertified: e.target.checked})}
                    className="rounded bg-slate-950 border-slate-800 text-amber-500 focus:ring-0"
                  />
                  <label htmlFor="fitness" className="text-slate-400 text-[11px]">I certify that I am medically fit for physical drill & field camp.</label>
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

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16 text-xs text-slate-400 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="font-bold text-slate-300 uppercase tracking-widest">National Cadet Corps • Unity and Discipline</p>
          <p>© 2026 Official Cadet Portal. Developed for Cadet Training & Administration Support.</p>
        </div>
      </footer>

    </div>
  );
}