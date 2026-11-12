import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Journey & Academic Track
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Hands-on full-stack developer training coupled with rigorous computer science post-graduate education.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/20 space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#090d16] border-2 border-indigo-500 group-hover:scale-125 transition-transform">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 m-auto mt-0.5"></div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl group-hover:border-indigo-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                        {exp.badge}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h4>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 mt-1 mb-4">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education & Degrees</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#090d16] border-2 border-purple-500 group-hover:scale-125 transition-transform">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400 m-auto mt-0.5"></div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl group-hover:border-purple-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h4>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 mt-1 mb-3">
                      <span className="font-semibold text-slate-200">{edu.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
