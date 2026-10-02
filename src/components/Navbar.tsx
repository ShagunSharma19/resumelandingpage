import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'python', 'python-ai', 'projects', 'ai-journey', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Python', href: '#python', id: 'python', highlight: true },
    { name: 'Python + AI', href: '#python-ai', id: 'python-ai' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'AI Journey', href: '#ai-journey', id: 'ai-journey' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-50/95 badge-blur border-b border-ink-900/10 shadow-xs'
          : 'bg-ivory-50/85 badge-blur border-b border-ink-900/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-ink-900 text-ivory-50 flex items-center justify-center font-bold font-mono text-base tracking-tight shadow-sm group-hover:bg-pyblue-600 transition-colors">
            SS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-ink-900 text-lg group-hover:text-pyblue-600 transition-colors">
              SHAGUN
            </span>
            <span className="text-[11px] font-mono text-ink-500 tracking-wider uppercase">
              Python • AI Explorer
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-ink-600 tracking-tight">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`py-1 transition-colors relative whitespace-nowrap ${
                  isActive
                    ? 'text-pyblue-600 font-bold'
                    : 'hover:text-pyblue-600 text-ink-600'
                }`}
              >
                {link.highlight && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-pyblue-600 mr-1.5 animate-pulse" />
                )}
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pyblue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="lg:hidden p-2 rounded-lg text-ink-700 hover:text-ink-900 hover:bg-ivory-200 focus:outline-none transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory-50 border-b border-ink-900/10 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-ink-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 flex items-center justify-between border-b border-ink-900/5 ${
                  activeSection === link.id
                    ? 'text-pyblue-600 font-bold'
                    : 'hover:text-pyblue-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pyblue-600" />
                  )}
                  {link.name}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
