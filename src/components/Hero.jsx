import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code2, Database, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const techBadges = [
    { label: "MongoDB", color: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30" },
    { label: "Express.js", color: "from-slate-500/20 to-slate-500/5 text-slate-300 border-slate-500/30" },
    { label: "React.js", color: "from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/30" },
    { label: "Node.js", color: "from-green-500/20 to-green-500/5 text-green-400 border-green-500/30" },
    { label: "JavaScript (ES6+)", color: "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30" },
    { label: "REST APIs", color: "from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/30" }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-orb-primary pointer-events-none opacity-60"></div>
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] glow-orb-cyan pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {personal.status}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">{personal.name}</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300">
              Full Stack & MERN Developer
            </span>
          </h1>

          {/* Subtitle / Pitch */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {personal.tagline} Focused on scalable RESTful APIs, modern component architectures, and responsive user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Tech stack pills banner */}
          <div className="pt-8">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
              Core Tech Stack & Competencies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {techBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg border bg-gradient-to-b text-xs font-mono font-medium shadow-sm transition-transform hover:-translate-y-0.5 ${badge.color}`}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Full-Stack MERN</div>
              <div className="text-xs text-slate-400 mt-0.5">End-to-end CRUD web applications with Node, Express & React</div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Database & APIs</div>
              <div className="text-xs text-slate-400 mt-0.5">MongoDB, Mongoose schemas, REST APIs & Postman testing</div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Academic Rigor</div>
              <div className="text-xs text-slate-400 mt-0.5">Master of Computer Applications (MCA) at PSIT Kanpur</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
