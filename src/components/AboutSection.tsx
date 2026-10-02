import React from 'react';
import { Compass, UserCheck, Code2 } from 'lucide-react';
import { SiteConfig } from '../data/portfolioData';

interface AboutSectionProps {
  config: SiteConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Honest Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
                About Shagun
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight leading-tight mt-1">
                Building my skills through practical learning.
              </h2>
            </div>

            <p className="text-ink-600 text-base leading-relaxed">
              I'm Shagun Sharma, a BCA student developing my Python skills while exploring Artificial Intelligence, automation and emerging technologies. I enjoy learning new tools, experimenting with workflows and turning what I learn into practical projects.
            </p>

            <div className="p-5 rounded-2xl bg-pyblue-50/70 border border-pyblue-100 text-sm text-ink-700 space-y-2">
              <p className="font-bold text-pyblue-800 flex items-center gap-2">
                <Compass className="w-4 h-4 text-pyblue-600" />
                <span>Honest Stance</span>
              </p>
              <p className="text-xs leading-relaxed text-ink-600">
                I am an aspiring Python developer at the start of my technical journey. No inflated claims or fabricated achievements — just consistent, hands-on development and curious exploration.
              </p>
            </div>
          </div>

          {/* Right Column: Information Card (Editorial Specification) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-ink-900/10 shadow-sm p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-pyblue-100/30 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-ink-900/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-ink-900 text-white flex items-center justify-center font-bold shadow-xs">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-900">Profile Overview</h3>
                    <p className="text-xs font-mono text-ink-500">BCA Undergrad & Python Explorer</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Learner
                </span>
              </div>

              {/* Profile Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-xs font-mono text-ink-400 uppercase tracking-wider">Full Name</p>
                  <p className="text-base font-bold text-ink-900 mt-1">{config.name}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-ink-400 uppercase tracking-wider">Current Status</p>
                  <p className="text-base font-bold text-ink-900 mt-1">{config.semester}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-ink-400 uppercase tracking-wider">College Institution</p>
                  <p className="text-base font-bold text-ink-900 mt-1">{config.college}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-ink-400 uppercase tracking-wider">Location</p>
                  <p className="text-base font-bold text-ink-900 mt-1">{config.location}</p>
                </div>

                <div className="sm:col-span-2 pt-4 border-t border-ink-900/5">
                  <p className="text-xs font-mono text-pyblue-600 uppercase tracking-wider font-semibold">Primary Focus</p>
                  <p className="text-base font-bold text-ink-900 mt-1 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-pyblue-600" />
                    <span>Python Development</span>
                  </p>
                  <p className="text-xs text-ink-500 mt-1">
                    Building algorithmic fundamentals, clean code syntax, and practical utilities.
                  </p>
                </div>

                <div className="sm:col-span-2 pt-4 border-t border-ink-900/5">
                  <p className="text-xs font-mono text-lavender-600 uppercase tracking-wider font-semibold">Exploring</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 border border-ink-900/10 text-ink-700">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 border border-ink-900/10 text-ink-700">
                      Automation
                    </span>
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 border border-ink-900/10 text-ink-700">
                      Prompt Engineering
                    </span>
                    <span className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 border border-ink-900/10 text-ink-700">
                      Emerging Technology
                    </span>
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
