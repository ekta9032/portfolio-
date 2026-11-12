import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    'React.js',
    'JavaScript (ES6+)',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'REST APIs',
    'JWT Authentication',
    'Postman',
    'Git',
    'GitHub',
    'SQL',
    'Context API',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      
      {/* Background Glow & Drifting Teal Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px]"></div>

        {/* Subtle Floating Star / Particle dots */}
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 animate-slow-drift"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${(i * 0.7) % 5}s`,
              animationDuration: `${14 + (i % 8) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-primary font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                MERN Stack Developer
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-white animate-fade-in">
              Building <span className="text-primary glow-text">modern</span>
              <br />
              full-stack web
              <br />
              <span className="font-serif italic font-normal text-white">
                experiences that scale.
              </span>
            </h1>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed animate-fade-in">
              Hi, I'm <strong className="text-white font-semibold">{personal.name}</strong> — an MCA graduate and MERN Stack Developer trained at <strong className="text-white font-semibold">QSpiders</strong>. I specialize in building responsive, scalable full-stack applications using React.js, Node.js, Express.js, MongoDB, and clean REST architectures.
            </p>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-primary hover:bg-primary-600 text-white transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass hover:border-primary/50 text-white hover:text-primary transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold glass hover:border-primary/50 text-white hover:text-primary transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4 text-muted">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Connect:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Card with Reference Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Pulsing Gradient Aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>

              {/* Glass Frame */}
              <div className="relative glass rounded-3xl p-3 glow-border">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
                  onError={(e) => {
                    // Fallback to nice stylized initials placeholder if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback container in case profile image not rendered */}
                <div className="hidden w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#141a1f] to-[#1a2329] flex-col items-center justify-center border border-border">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-3xl font-bold font-mono">
                    EM
                  </div>
                  <div className="mt-4 text-white font-semibold text-lg">{personal.name}</div>
                  <div className="text-xs text-primary font-mono mt-1">Full Stack Developer</div>
                </div>

                {/* Top-Left Floating Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2.5 animate-float border border-primary/20 shadow-xl">
                  <div className="text-2xl font-bold text-primary leading-none">∞</div>
                  <div className="text-[11px] font-medium text-primary mt-0.5">Curiosity & Code</div>
                </div>

                {/* Bottom-Right Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float border border-primary/20 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-white">Open to Opportunities</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Tech Marquee / Stack Pills */}
        <div className="mt-20 pt-8 border-t border-border/40">
          <p className="text-xs uppercase tracking-widest font-semibold text-muted mb-4 text-center">
            Technologies & Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full glass text-xs font-mono font-medium text-muted hover:text-white hover:border-primary/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
