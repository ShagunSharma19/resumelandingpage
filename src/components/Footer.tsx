import React from 'react';
import { Instagram, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { SocialLinks } from '../data/portfolioData';

interface FooterProps {
  socialLinks: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory-100/90 border-t border-ink-900/10 py-12 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-ink-900/10">
          
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-xl font-bold tracking-tight text-ink-900">SHAGUN</span>
            <p className="text-xs font-mono text-ink-500">Python • AI • Automation</p>
          </div>

          {/* Social Icons: Instagram, Email, LinkedIn, GitHub (NO FACEBOOK) */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white border border-ink-900/10 text-ink-700 hover:text-pink-600 hover:border-pink-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.gmail}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-white border border-ink-900/10 text-ink-700 hover:text-red-600 hover:border-red-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white border border-ink-900/10 text-ink-700 hover:text-pyblue-600 hover:border-pyblue-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white border border-ink-900/10 text-ink-700 hover:text-ink-900 hover:border-ink-900 flex items-center justify-center transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-ink-500 font-mono">
          <p>© 2026 Shagun Sharma. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Crafted with Python-first focus & AI exploration</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 text-ink-600 hover:text-pyblue-600 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
