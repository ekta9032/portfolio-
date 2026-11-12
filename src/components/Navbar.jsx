import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1418]/90 backdrop-blur-md border-b border-[#242b32] py-4 shadow-lg shadow-black/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 glass px-5 py-2 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="px-3.5 py-1 text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 text-muted"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold glass hover:border-primary/50 text-white hover:text-primary transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-primary hover:bg-primary-600 text-white transition-all shadow-md shadow-primary/20 hover:scale-105 active:scale-95"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-semibold rounded-full glass text-primary border border-primary/30"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-muted hover:text-white glass"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-b border-border mt-3 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  scrollTo(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass text-muted hover:text-primary"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass text-muted hover:text-primary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollTo('#contact');
              }}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-primary text-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
