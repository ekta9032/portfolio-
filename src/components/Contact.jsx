import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      copyable: true,
      copyType: 'email',
      isCopied: copiedEmail,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[^0-9+]/g, '')}`,
      copyable: true,
      copyType: 'phone',
      isCopied: copiedPhone,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Get In <span className="font-serif italic font-normal text-white">Touch</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
            I am actively seeking full-stack and MERN development opportunities. Reach out for collaborations or job openings!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass rounded-3xl p-8 border border-border">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-2xl glass hover:border-primary/40 transition-all duration-300"
                    >
                      <a href={item.href} className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted uppercase font-medium">{item.label}</div>
                          <div className="text-sm font-semibold text-white hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>

                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, item.copyType)}
                          aria-label={`Copy ${item.label}`}
                          className="p-2 rounded-lg glass text-muted hover:text-white transition-colors ml-2"
                        >
                          {item.isCopied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Box matching reference */}
            <div className="glass rounded-3xl p-8 border border-primary/40 shadow-lg shadow-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-white text-base">Currently Available</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                I'm open to internships, full-time engineering roles, and collaborative projects. Let’s build something impactful together.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-8 sm:p-10 border border-border">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-muted mb-6">
                Have a project or opportunity? Send a note directly and I'll respond promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl glass-strong border border-primary/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                  <p className="text-xs text-muted max-w-sm mx-auto">
                    Thank you for reaching out. You can also contact me directly at{' '}
                    <span className="text-primary font-mono">{personal.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f1418] border border-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f1418] border border-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="MERN Stack Opportunity / Project"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f1418] border border-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ekta, we are looking for a Full Stack Developer..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0f1418] border border-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-primary hover:bg-primary-600 text-white transition-all shadow-lg shadow-primary/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
