import React, { useState } from 'react';
import { TIMELINE_MILESTONES, MilestoneItem } from '../data/portfolioData';

export const AIJourneyTimelineSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'programming' | 'ai' | 'current' | 'future'>('all');

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    if (activeCategory === 'all') return true;
    return m.category === activeCategory;
  });

  return (
    <section id="ai-journey" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-lavender-600 tracking-wider">
            Evolution & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-1">
            My AI Journey
          </h2>
          <p className="text-ink-600 text-sm mt-2">
            From classroom foundations in BCA to active Python practice and AI exploration.
          </p>

          {/* Interactive filter tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-ivory-100 rounded-xl border border-ink-900/10 w-fit mx-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-ink-900 font-bold shadow-xs'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              All Milestones ({TIMELINE_MILESTONES.length})
            </button>
            <button
              onClick={() => setActiveCategory('programming')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'programming'
                  ? 'bg-white text-pyblue-700 font-bold shadow-xs'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              Programming & Python
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                activeCategory === 'ai'
                  ? 'bg-white text-lavender-700 font-bold shadow-xs'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              AI & Exploration
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative timeline-line space-y-8 pl-10 sm:pl-12">
          {filteredMilestones.map((item, idx) => {
            const isCurrent = item.stage.includes('Current');
            const isAhead = item.stage.includes('Ahead');
            const isAI = item.category === 'ai';

            return (
              <div key={idx} className="relative group">
                {/* Node indicator dot */}
                <div
                  className={`absolute -left-[30px] sm:-left-[34px] top-1 w-5 h-5 rounded-full bg-white border-4 transition-transform duration-200 group-hover:scale-125 ${
                    isCurrent
                      ? 'border-pyblue-600 ring-4 ring-pyblue-200'
                      : isAhead
                      ? 'border-ink-300'
                      : isAI
                      ? 'border-lavender-500'
                      : 'border-pyblue-600'
                  }`}
                />

                <div
                  className={`p-5 rounded-2xl border shadow-2xs transition-all duration-200 ${
                    isCurrent
                      ? 'bg-white border-pyblue-400 ring-2 ring-pyblue-100'
                      : isAhead
                      ? 'bg-white/80 border-2 border-dashed border-ink-900/15'
                      : 'bg-white border-ink-900/10 group-hover:border-pyblue-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase ${
                        isCurrent
                          ? 'text-pyblue-600'
                          : isAhead
                          ? 'text-ink-500'
                          : isAI
                          ? 'text-lavender-600'
                          : 'text-pyblue-600'
                      }`}
                    >
                      {item.stage}
                    </span>
                    {isCurrent && (
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-pyblue-50 text-pyblue-700 rounded-md border border-pyblue-200 font-bold animate-pulse">
                        Active Focus
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-ink-900 mt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
