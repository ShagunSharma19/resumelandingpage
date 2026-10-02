import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 lg:py-24 relative bg-ivory-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ink-900/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
              Want the complete picture?
            </h2>
            <p className="text-ink-600 text-base leading-relaxed">
              Explore my education, skills, projects and learning journey through my resume.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ivory-100 border border-ink-900/15 text-ink-800 hover:border-pyblue-500 hover:text-pyblue-600 text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
