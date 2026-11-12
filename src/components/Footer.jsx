import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollTo = (href) => {
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* Background radial gradient halos */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        
        {/* Top Callout CTA Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Let's Build Something Great</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Ready to create your{' '}
            <span className="font-serif italic font-normal text-white">
              next digital product?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities in Full-Stack and MERN Stack development. Whether it's a collaborative project, internship, or a full-time engineering role, I'd love to connect.
          </p>

          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-primary hover:bg-primary-600 text-white transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start border-t border-border/50 pt-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#home');
              }}
              className="text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>Ekta</span>
              <span className="text-primary text-3xl leading-none">.</span>
            </a>

            <p className="text-sm text-muted leading-relaxed max-w-sm">
              MERN Stack Developer passionate about building scalable full-stack web applications, intuitive user experiences, and clean software architectures.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5">Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="text-sm text-muted hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white mb-5">Quick Info</h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p>Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Role</p>
                  <p>MERN Stack Developer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Availability</p>
                  <p>Open to internships & full-time roles</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Ekta Maurya. All rights reserved.</p>
          <p>Built with React.js, Tailwind CSS, and a passion for modern web technologies.</p>
        </div>

      </div>
    </footer>
  );
}
