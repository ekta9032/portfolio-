import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technology Stack & Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Hands-on technologies used across full-stack development, database architecture, and API integration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend Card */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="glass-card p-6 rounded-3xl space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Layout className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">Frontend Development</h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">Client-side</span>
              </div>
              <div className="space-y-3">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      {skill.highlight && (
                        <span className="text-cyan-400 font-mono text-[10px]">{skill.highlight}</span>
                      )}
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend Card */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="glass-card p-6 rounded-3xl space-y-4 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">Backend & APIs</h3>
                </div>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">Server-side</span>
              </div>
              <div className="space-y-3">
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      {skill.highlight && (
                        <span className="text-indigo-400 font-mono text-[10px]">{skill.highlight}</span>
                      )}
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Database Card */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="glass-card p-6 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">Databases</h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Data Layer</span>
              </div>
              <div className="space-y-3">
                {skills.database.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      {skill.highlight && (
                        <span className="text-emerald-400 font-mono text-[10px]">{skill.highlight}</span>
                      )}
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Workflow Card */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="glass-card p-6 rounded-3xl space-y-4 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">Tools & Environment</h3>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Workflow</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {skills.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white">{tool.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{tool.highlight}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Engineering Concepts */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="glass-card p-6 rounded-3xl space-y-4 md:col-span-2 lg:col-span-2 hover:border-purple-500/30 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">Engineering Concepts & Architecture</h3>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">Core Theory</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skills.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
