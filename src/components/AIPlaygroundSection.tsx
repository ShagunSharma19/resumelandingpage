import React, { useState } from 'react';
import {
  Binary,
  MessageSquareCode,
  Cog,
  Box,
  Image as ImageIcon,
  Compass,
  X,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { AI_PLAYGROUND_AREAS, AIPlaygroundArea } from '../data/portfolioData';

export const AIPlaygroundSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<AIPlaygroundArea | null>(null);

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'binary':
        return <Binary className="w-5 h-5" />;
      case 'message-square-code':
        return <MessageSquareCode className="w-5 h-5" />;
      case 'cog':
        return <Cog className="w-5 h-5" />;
      case 'box':
        return <Box className="w-5 h-5" />;
      case 'image':
        return <ImageIcon className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="ai-playground" className="py-20 bg-ivory-100/60 border-t border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
              Curiosity & Experiments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-1">
              My AI Playground
            </h2>
            <p className="text-ink-600 text-sm mt-1">
              Technologies and ideas I'm currently exploring.
            </p>
          </div>
          <div className="text-xs font-mono text-ink-500 bg-white px-3.5 py-1.5 rounded-lg border border-ink-900/10 shadow-2xs self-start sm:self-auto">
            6 Areas of Exploration
          </div>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_PLAYGROUND_AREAS.map((area) => {
            const isBlue = area.colorScheme === 'blue';
            const isLavender = area.colorScheme === 'lavender';

            return (
              <div
                key={area.num}
                onClick={() => setSelectedArea(area)}
                className="bg-white p-6 rounded-2xl border border-ink-900/10 shadow-2xs hover:shadow-md hover:border-pyblue-400 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                      isBlue
                        ? 'bg-pyblue-50 text-pyblue-600'
                        : isLavender
                        ? 'bg-lavender-50 text-lavender-600'
                        : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {getAreaIcon(area.iconName)}
                  </div>
                  <span className="text-xs font-mono text-ink-400">{area.num}</span>
                  <h3 className="text-lg font-bold text-ink-900 mt-1 mb-2 group-hover:text-pyblue-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed">{area.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink-900/5 flex items-center justify-between text-[11px] font-mono text-ink-400 group-hover:text-pyblue-600 transition-colors">
                  <span>Explore topic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Dialog / Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-ink-900/10 relative">
            <button
              onClick={() => setSelectedArea(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-ivory-100 text-ink-500 hover:text-ink-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pyblue-50 text-pyblue-600 flex items-center justify-center">
                {getAreaIcon(selectedArea.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-ink-400 uppercase tracking-wider">
                  Area {selectedArea.num} • Deep Dive
                </span>
                <h3 className="text-xl font-bold text-ink-900">{selectedArea.title}</h3>
              </div>
            </div>

            <p className="text-sm text-ink-600 mb-6 leading-relaxed">
              {selectedArea.desc}
            </p>

            <div className="space-y-4 text-xs font-mono">
              <div className="bg-ivory-50 p-3.5 rounded-xl border border-ink-900/5">
                <span className="text-ink-400 uppercase tracking-wider text-[10px] block mb-1">
                  Focus Subject
                </span>
                <span className="text-ink-900 font-bold text-sm">
                  {selectedArea.details.focusTopic}
                </span>
              </div>

              <div>
                <span className="text-ink-400 uppercase tracking-wider text-[10px] block mb-1.5">
                  Tools & Methodologies Explored
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArea.details.keyTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-pyblue-50 text-pyblue-700 border border-pyblue-200 text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-ink-900/10">
                <span className="text-ink-400 uppercase tracking-wider text-[10px] block mb-1">
                  Learning Takeaway
                </span>
                <p className="text-ink-700 font-sans leading-relaxed">
                  {selectedArea.details.whatILearn}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-900">
                <span className="text-emerald-700 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Practical Application
                </span>
                <p className="text-xs font-sans leading-relaxed text-emerald-800">
                  {selectedArea.details.practicalExample}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ink-900/10 flex justify-end">
              <button
                onClick={() => setSelectedArea(null)}
                className="px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                Close Exploration
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
