import React, { useState } from 'react';
import {
  GraduationCap,
  Building2,
  MapPin,
  ArrowDown,
  FileText,
  Sparkles,
  Terminal,
  User,
} from 'lucide-react';
import { SiteConfig } from '../data/portfolioData';

interface HeroSectionProps {
  config: SiteConfig;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onOpenResume }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center pt-8 pb-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-pyblue-50 border border-pyblue-200/80 text-pyblue-700 text-xs font-semibold tracking-wider uppercase w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-pyblue-600 animate-pulse" />
              <span>PYTHON DEVELOPER • BCA STUDENT</span>
            </div>

            {/* Main Heading & Statement */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-mono text-ink-500 font-normal">
                Hi, I'm <span className="text-ink-900 font-bold font-sans">{config.name}</span>.
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-[1.12]">
                Building with Python.<br />
                <span className="text-pyblue-600 font-serif italic font-normal">Exploring AI.</span>
              </h1>
            </div>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl text-ink-600 font-normal leading-relaxed max-w-2xl">
              I'm a BCA student developing my Python skills and exploring AI, automation and emerging technologies through practical projects.
            </p>

            {/* Supporting Information Badges (Strictly No CGPA/10th/12th here) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-600 pt-2 border-t border-ink-900/10">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-pyblue-600" />
                <span>{config.semester}</span>
              </div>
              <span className="text-ink-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-ink-500" />
                <span>{config.college}</span>
              </div>
              <span className="text-ink-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-ink-500" />
                <span>{config.location}</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-ink-900/15 text-ink-800 hover:border-pyblue-600 hover:text-pyblue-600 text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#interactive-journey"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-ink-600 hover:text-pyblue-600 underline underline-offset-4 decoration-ink-300 transition-colors"
              >
                <span>Explore Developer Journey</span>
                <Sparkles className="w-3.5 h-3.5 text-lavender-600 animate-spin-slow" />
              </a>
            </div>

          </div>

          {/* Right Column: REAL Portrait Photo with Editorial Design */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Subtle decorative frames & geometric accents */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-pyblue-500/20 pointer-events-none -z-10 bg-pyblue-50/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-lavender-500/20 pointer-events-none -z-10 bg-lavender-50/40" />
              
              {/* Portrait Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/90 shadow-2xl bg-white aspect-[3/4] flex items-center justify-center group">
                
                {/* Fallback container if image fails or before load */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-ivory-100 to-pyblue-50 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-pyblue-100 text-pyblue-600 flex items-center justify-center mb-4">
                      <User className="w-10 h-10" />
                    </div>
                    <p className="font-bold text-ink-900 text-lg">Shagun Sharma</p>
                    <p className="text-xs font-mono text-ink-500 mt-1">Python Developer & BCA Student</p>
                  </div>
                )}

                <img
                  src={config.portraitUrl}
                  alt="Shagun Sharma portrait — Aspiring Python Developer and BCA student"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] ${
                    imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Bottom subtle gradient overlay for contrast with badge */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent pointer-events-none" />

                {/* Floating Label over portrait */}
                <div className="absolute bottom-4 inset-x-4 flex justify-between items-center bg-white/95 badge-blur p-3.5 rounded-2xl shadow-lg border border-white/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pyblue-50 border border-pyblue-200 flex items-center justify-center text-pyblue-600 shrink-0">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink-900">Python • AI • Automation</p>
                      <p className="text-[10px] font-mono text-ink-500">Student & Technology Explorer</p>
                    </div>
                  </div>
                  <span className="inline-flex px-2 py-0.5 text-[10px] font-mono font-semibold text-pyblue-700 bg-pyblue-50 border border-pyblue-200 rounded-md shrink-0">
                    BCA 5th
                  </span>
                </div>
              </div>

              {/* Small handwritten / editorial note tag */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-white px-3.5 py-2 rounded-2xl shadow-md border border-ink-900/10 flex items-center gap-2 rotate-2 hover:rotate-0 transition-transform">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-serif italic text-sm text-ink-800 font-medium">Learn → Build → Improve</span>
              </div>

              {/* Python Code Snippet Decorative Tag */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-ink-900 text-ivory-50 px-3.5 py-2.5 rounded-xl shadow-lg font-mono text-[11px] border border-ink-700 flex items-center gap-2 -rotate-3 hover:rotate-0 transition-transform">
                <span className="text-pygold-400">def</span>
                <span className="text-pyblue-200">grow</span>():
                <span className="text-emerald-400">return</span>
                <span className="text-ivory-200">"Practical Code"</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
