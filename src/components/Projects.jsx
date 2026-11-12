import React from 'react';
import { FolderGit2, ExternalLink, Github, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Software Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Full-stack web applications and interactive client solutions engineered with MERN stack & modern React.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Visual Header / Mockup Banner */}
                <div className={`p-6 border-b border-slate-800/80 bg-gradient-to-br ${
                  isFirst 
                    ? 'from-indigo-950/60 via-slate-900/80 to-slate-950'
                    : 'from-cyan-950/60 via-slate-900/80 to-slate-950'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                      <span className="ml-2 font-mono text-[11px] text-slate-400">
                        {isFirst ? 'mern-task-app.js' : 'food-delivery-app.jsx'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Simulated App Visual Banner */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 font-mono text-xs text-slate-400 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{isFirst ? 'REST API Endpoints: GET, POST, PUT, DELETE /api/tasks' : 'Interactive Menu & Cart State: Context API'}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {isFirst ? 'Connected to MongoDB Atlas cluster via Mongoose ODM' : 'Dynamic category filtering & responsive device viewport'}
                    </div>
                  </div>
                </div>

                {/* Project Details Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Key Accomplishments:
                      </h4>
                      {project.achievements.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills & Links */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
                      >
                        <Github className="w-4 h-4 text-slate-300" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 hover:border-indigo-500 transition-all active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
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
