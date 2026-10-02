import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { SiteConfig } from '../data/portfolioData';

interface EducationSectionProps {
  config: SiteConfig;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ config }) => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
              Formal Academic Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight leading-tight">
              Education & Academic Foundation
            </h2>
            <p className="text-ink-600 text-base leading-relaxed">
              Pursuing my Bachelor of Computer Applications with steady dedication to computing theory, practical labs, and programming principles.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-ink-900/10 text-xs font-mono text-ink-500 space-y-1 shadow-2xs">
              <p className="font-bold text-ink-700 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Academic Record:</span>
              </p>
              <p>{config.college}, {config.location}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            
            {/* Degree Card */}
            <div className="bg-white rounded-3xl p-8 border border-ink-900/10 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pyblue-50 text-pyblue-600 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-xs font-mono text-ink-500">
                      {config.college} • {config.location}
                    </p>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-pyblue-100 text-pyblue-700 font-mono text-xs font-bold">
                  {config.semester.replace(' Student', '')}
                </span>
              </div>

              {/* Academic Details: Strictly Confined to this Section */}
              <div className="mt-6">
                <p className="text-xs font-mono text-ink-400 uppercase tracking-wider mb-4">
                  Academic Details & Performance:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <div className="p-5 rounded-2xl bg-ivory-50 border border-ink-900/10 shadow-2xs">
                    <p className="text-xs font-mono text-ink-500">4th Semester</p>
                    <p className="text-3xl font-black text-ink-900 font-mono mt-1 tabular-nums">7.2</p>
                    <p className="text-[11px] font-mono text-pyblue-600 font-bold mt-0.5">CGPA</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-ivory-50 border border-ink-900/10 shadow-2xs">
                    <p className="text-xs font-mono text-ink-500">Class 12</p>
                    <p className="text-3xl font-black text-ink-900 font-mono mt-1 tabular-nums">85.8%</p>
                    <p className="text-[11px] font-mono text-ink-500 mt-0.5">Higher Secondary</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-ivory-50 border border-ink-900/10 shadow-2xs">
                    <p className="text-xs font-mono text-ink-500">Class 10</p>
                    <p className="text-3xl font-black text-ink-900 font-mono mt-1 tabular-nums">92.2%</p>
                    <p className="text-[11px] font-mono text-ink-500 mt-0.5">Secondary School</p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
