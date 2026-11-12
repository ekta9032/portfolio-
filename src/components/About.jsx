import React from 'react';
import { User, GraduationCap, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const keyStrengths = [
    "MERN Stack Architecture (MongoDB, Express.js, React.js, Node.js)",
    "Modular RESTful API design with thorough Postman verification",
    "Clean, reusable React component creation using Hooks and Context API",
    "Database modeling & schema design using MongoDB and Mongoose",
    "Version control workflows using Git, GitHub, branching & pull requests",
    "Committed to continuous learning, scalable code patterns & clean design"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Engineering Philosophy
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles className="w-32 h-32 text-indigo-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Aspiring Full Stack Engineer with strong foundation in MERN technologies.
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                  Core Competencies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {keyStrengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts Bento */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Education</div>
                <div className="text-sm font-semibold text-white mt-0.5">MCA (2024–2026)</div>
                <div className="text-xs text-slate-400">Pranveer Singh Inst. of Tech (PSIT), Kanpur</div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Location</div>
                <div className="text-sm font-semibold text-white mt-0.5">Uttar Pradesh, India</div>
                <div className="text-xs text-slate-400">Open to Relocation & Remote Roles</div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Current Focus</div>
                <div className="text-sm font-semibold text-white mt-0.5">MERN Stack Trainee</div>
                <div className="text-xs text-slate-400">QSpiders Noida (Jun 2026 – Present)</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
