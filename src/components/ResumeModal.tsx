import React from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Code, Briefcase } from 'lucide-react';
import { SiteConfig } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, config }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl border border-ink-900/10 relative my-8 max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:p-0 print:border-none">
        
        {/* Top bar controls (hidden in print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-ink-900/10 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono font-bold text-ink-600 uppercase tracking-wider">
              Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ivory-100 hover:bg-ivory-200 text-ink-800 text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-2 rounded-full hover:bg-ivory-100 text-ink-500 hover:text-ink-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-6 text-ink-900">
          
          {/* Header */}
          <div className="border-b border-ink-900/10 pb-6">
            <h1 className="text-3xl font-extrabold tracking-tight">{config.name}</h1>
            <p className="text-base font-semibold text-pyblue-700 mt-1">
              Python Developer • BCA Student • AI Explorer
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-600 mt-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-ink-400" />
                {config.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-ink-400" />
                {config.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-ink-400" />
                {config.college}
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-ink-700">
              Bachelor of Computer Applications (BCA) 5th semester student at SVGC Ghumarwin, focused on foundational Python development, algorithmic logic, and automation utilities. Actively exploring Artificial Intelligence tools, prompt engineering, and structured data handling with a commitment to clean, readable code and transparent learning.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-400 mb-3">
              Education & Academics
            </h2>
            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-xl bg-ivory-50 border border-ink-900/5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ink-900">Bachelor of Computer Applications (BCA)</span>
                  <span className="font-mono text-xs text-pyblue-600 font-bold">5th Semester (Active)</span>
                </div>
                <p className="text-xs text-ink-600 mt-0.5">SVGC Ghumarwin • Himachal Pradesh, India</p>
                <p className="text-xs font-mono text-ink-500 mt-2">
                  Cumulative Academic Performance: <strong>7.2 CGPA</strong> (4th Semester)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                  <span className="text-ink-400 block text-[11px]">Class 12 (Higher Secondary)</span>
                  <span className="font-bold text-ink-900 text-sm">85.8%</span>
                </div>
                <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                  <span className="text-ink-400 block text-[11px]">Class 10 (Secondary School)</span>
                  <span className="font-bold text-ink-900 text-sm">92.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-400 mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                <span className="font-bold text-pyblue-700 block mb-1">Primary Programming</span>
                <p className="text-ink-700 font-mono">Python (Core, Functions, Data Structures, Scripting)</p>
              </div>
              <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                <span className="font-bold text-ink-900 block mb-1">Academic Core</span>
                <p className="text-ink-700 font-mono">C, C++, HTML, SQL, C# / .NET, ASP.NET</p>
              </div>
              <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                <span className="font-bold text-lavender-700 block mb-1">AI & Automation</span>
                <p className="text-ink-700 font-mono">Prompt Engineering, Make Workflows, AI Developer Tools</p>
              </div>
              <div className="p-3 rounded-xl bg-ivory-50 border border-ink-900/5">
                <span className="font-bold text-ink-900 block mb-1">Productivity & Utilities</span>
                <p className="text-ink-700 font-mono">MS Word, MS Excel, Canva, Terminal / CLI</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink-400 mb-3">
              Projects & Explorations
            </h2>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="border-l-2 border-pyblue-500 pl-3">
                <h3 className="font-bold text-ink-900 text-sm">Universal AI Prompt Generator</h3>
                <p className="text-ink-600 mt-0.5">
                  Created structured prompt workflows with defined role personas, context constraints, and deterministic output schemas.
                </p>
              </div>
              <div className="border-l-2 border-pyblue-500 pl-3">
                <h3 className="font-bold text-ink-900 text-sm">Make Automation Workflows</h3>
                <p className="text-ink-600 mt-0.5">
                  Designed multi-step visual event pipelines connecting inbound triggers, condition filtering, and destination data tables.
                </p>
              </div>
              <div className="border-l-2 border-pyblue-500 pl-3">
                <h3 className="font-bold text-ink-900 text-sm">AI Advertisement Concept</h3>
                <p className="text-ink-600 mt-0.5">
                  Constructed 60-second video storyboard and narrative synthesized script exploring multimedia AI generation tools.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer (hidden in print) */}
        <div className="mt-8 pt-4 border-t border-ink-900/10 flex items-center justify-between no-print">
          <span className="text-xs font-mono text-ink-400">
            Official Academic Portfolio • SVGC Ghumarwin
          </span>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-xs font-semibold tracking-wide transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save as PDF / Print</span>
          </button>
        </div>

      </div>
    </div>
  );
};
