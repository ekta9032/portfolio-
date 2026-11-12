import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Skills & Core <span className="font-serif italic font-normal text-white">Technologies</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
            Hands-on expertise across full-stack JavaScript development, responsive user interfaces, and database management.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'glass text-muted hover:text-white hover:border-primary/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="glass p-7 rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Frontend</h3>
                    <p className="text-xs text-muted">Client Interfaces</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  UI / UX
                </span>
              </div>

              <div className="space-y-4">
                {skills.frontend.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-primary font-mono">{item.level}%</span>
                    </div>
                    <div className="w-full bg-[#141a1f] h-2 rounded-full overflow-hidden p-[1px]">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="glass p-7 rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Backend & APIs</h3>
                    <p className="text-xs text-muted">Server & Logic</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  REST
                </span>
              </div>

              <div className="space-y-4">
                {skills.backend.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-primary font-mono">{item.level}%</span>
                    </div>
                    <div className="w-full bg-[#141a1f] h-2 rounded-full overflow-hidden p-[1px]">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Database */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="glass p-7 rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Databases</h3>
                    <p className="text-xs text-muted">Data & Schemas</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Storage
                </span>
              </div>

              <div className="space-y-4">
                {skills.database.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-primary font-mono">{item.level}%</span>
                    </div>
                    <div className="w-full bg-[#141a1f] h-2 rounded-full overflow-hidden p-[1px]">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Workflow */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="glass p-7 rounded-3xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Development Tools & Concepts</h3>
                    <p className="text-xs text-muted">Workflow, Version Control & Systems</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.tools.map((tool, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-strong border border-border/80 text-center">
                    <div className="text-sm font-semibold text-white">{tool.name}</div>
                    <div className="text-xs text-primary font-mono mt-1">{tool.highlight}</div>
                  </div>
                ))}
                {skills.concepts.slice(0, 4).map((concept, idx) => (
                  <div key={`c-${idx}`} className="p-4 rounded-2xl glass-strong border border-border/80 text-center">
                    <div className="text-xs sm:text-sm font-medium text-white">{concept}</div>
                    <div className="text-[11px] text-muted font-mono mt-1">Core Architecture</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
