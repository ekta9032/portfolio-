import React from 'react';
import { X, Printer, Phone, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, experience, education, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Action Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0f1418] text-white border-b border-[#242b32]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">Resume Preview — {personal.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#20b2a6] hover:bg-[#178f86] text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Matching PDF */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans print:p-0 print:m-0 text-slate-800">
          
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-300">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 uppercase">
              {personal.name}
            </h1>
            <p className="text-base font-semibold text-[#17726d] mt-1">
              {personal.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 mt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                {personal.phone}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                {personal.email}
              </span>
              <span>|</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#20b2a6] underline">
                GitHub
              </a>
              <span>|</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#20b2a6] underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-4 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-4 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-700">
              <p><strong className="text-slate-900">Programming Language:</strong> JavaScript</p>
              <p><strong className="text-slate-900">Frontend:</strong> React.js, HTML5, CSS3, Responsive Web Design</p>
              <p><strong className="text-slate-900">Backend:</strong> Node.js, Express.js, RESTful APIs</p>
              <p><strong className="text-slate-900">Databases:</strong> MongoDB, Mongoose, SQL</p>
              <p><strong className="text-slate-900">Tools:</strong> Git, GitHub, VS Code, Postman</p>
              <p><strong className="text-slate-900">Concepts:</strong> Data Structures & Algorithms, CRUD Operations, API Integration, State Management, Component-Based Architecture, SDLC</p>
            </div>
          </div>

          {/* Experience */}
          <div className="py-4 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3">
              Professional Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">
                    {exp.company}{exp.location ? `, ${exp.location}` : ''}
                  </h3>
                  <span className="text-xs text-slate-600 font-mono">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-[#17726d] mb-1.5 italic">{exp.role}</div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="py-4 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#17726d] hover:underline font-medium">
                      GitHub
                    </a>
                  </div>
                  <div className="text-xs text-slate-600 italic mb-1.5">
                    {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                    {proj.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="py-4">
            <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">{edu.institution}</h3>
                    <div className="text-xs text-slate-700">{edu.degree}</div>
                  </div>
                  <div className="text-xs text-slate-600 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
