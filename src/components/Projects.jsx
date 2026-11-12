import React from 'react';
import { ExternalLink, Github, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Selected <span className="font-serif italic font-normal text-white">Projects</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
            Full-stack web applications and client interfaces engineered with the MERN stack and modern React.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={project.id}
                className="glass rounded-3xl overflow-hidden flex flex-col justify-between border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 group shadow-xl"
              >
                {/* Visual Banner Header */}
                <div className="p-6 border-b border-border bg-[#141a1f]/80">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                      <span className="ml-2 font-mono text-xs text-muted">
                        {isFirst ? 'mern-task-api.js' : 'food-delivery.jsx'}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Terminal Simulation Preview */}
                  <div className="p-4 rounded-xl bg-[#0f1418] border border-border/80 font-mono text-xs text-muted space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{isFirst ? 'REST API: GET, POST, PUT, DELETE /api/tasks' : 'Component State: React Context & Hooks'}</span>
                    </div>
                    <div className="text-[11px] text-muted">
                      {isFirst ? 'Persistence: MongoDB Atlas via Mongoose ODM' : 'Responsive: Mobile, tablet & desktop viewports'}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs uppercase font-semibold text-primary tracking-wider mb-2">
                        Key Accomplishments:
                      </h4>
                      {project.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges & action buttons */}
                  <div className="pt-6 border-t border-border space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-[#141a1f] text-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold glass hover:border-primary/50 text-white hover:text-primary transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-primary hover:bg-primary-600 text-white transition-all shadow-md shadow-primary/20 active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
