import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  const mernFlowchart = [
    { title: 'Frontend UI', sub: 'React.js, Hooks, Context API & Tailwind' },
    { title: 'API & Server', sub: 'Node.js, Express.js REST Controllers' },
    { title: 'Database Layer', sub: 'MongoDB Atlas & Mongoose Schemas' },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Career & Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Professional <span className="font-serif italic font-normal text-white">Experience</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
            Internship experience in software development and full-stack MERN technologies, combined with MCA education.
          </p>
        </div>

        {/* Experience & Pipeline Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass p-7 sm:p-8 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-muted font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                <div className="text-sm font-semibold text-primary flex items-center gap-2 mt-1 mb-4">
                  <span>{exp.company}</span>
                  {exp.location && (
                    <>
                      <span>•</span>
                      <span className="text-muted font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </>
                  )}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50 mt-5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Architecture Flowchart Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="glass p-8 rounded-3xl border border-primary/30 shadow-xl flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6">
                MERN Pipeline Architecture
              </span>

              {mernFlowchart.map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <div className="glass w-full px-5 py-4 rounded-2xl border border-primary/20 text-center shadow-lg hover:border-primary/60 transition-colors">
                    <p className="text-sm font-medium text-white">{step.title}</p>
                    <p className="text-xs text-muted mt-1">{step.sub}</p>
                  </div>
                  {sIdx < mernFlowchart.length - 1 && (
                    <ChevronDown className="w-5 h-5 text-primary/70 my-3 animate-bounce" />
                  )}
                </React.Fragment>
              ))}

              <div className="mt-6 pt-6 border-t border-border/60 text-center text-xs text-muted leading-relaxed">
                Demonstrated end-to-end full-stack integration with clean component architecture and REST API protocols.
              </div>
            </div>
          </div>

        </div>

        {/* Education Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span>Academic Degrees</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass p-7 rounded-3xl border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    {edu.status}
                  </span>
                  <span className="text-xs text-muted font-mono">{edu.period}</span>
                </div>

                <h4 className="text-lg font-bold text-white mt-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-primary font-medium mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-muted flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </p>

                <ul className="space-y-1.5 mt-4 pt-4 border-t border-border/60">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
