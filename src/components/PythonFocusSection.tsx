import React from 'react';
import {
  Layers,
  Brain,
  Cpu,
  Sparkles,
  Globe,
  Code2,
} from 'lucide-react';
import { PYTHON_FOCUS_ITEMS } from '../data/portfolioData';

interface PythonFocusSectionProps {
  onShowToast?: (msg: string) => void;
}

export const PythonFocusSection: React.FC<PythonFocusSectionProps> = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers':
        return <Layers className="w-5 h-5" />;
      case 'brain':
        return <Brain className="w-5 h-5" />;
      case 'cpu':
        return <Cpu className="w-5 h-5" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="python" className="py-20 lg:py-28 bg-white border-t border-ink-900/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pyblue-50 border border-pyblue-200 text-pyblue-700 text-xs font-mono font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>PRIMARY TECHNICAL FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-tight">
            Python Development
          </h2>
          <p className="text-lg text-ink-600 mt-3 font-normal">
            Building my programming foundation with Python. Learning Python by building practical solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-mono text-ink-500">
            <span className="bg-ivory-100 px-3 py-1 rounded-md border border-ink-900/5">
              Python Developer in Progress
            </span>
            <span className="bg-ivory-100 px-3 py-1 rounded-md border border-ink-900/5">
              From fundamentals to AI-powered applications
            </span>
          </div>
        </div>

        {/* Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PYTHON_FOCUS_ITEMS.map((item) => {
            const isAI = item.id === 'python_ai';

            return (
              <div
                key={item.id}
                className={`bg-ivory-50 rounded-3xl p-8 border border-ink-900/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                  isAI ? 'hover:border-lavender-500' : 'hover:border-pyblue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-black font-mono ${
                        isAI ? 'text-lavender-600' : 'text-pyblue-600'
                      }`}
                    >
                      {item.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                        isAI
                          ? 'bg-lavender-100/70 text-lavender-700'
                          : 'bg-pyblue-100/60 text-pyblue-700'
                      }`}
                    >
                      {getCardIcon(item.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-xs font-mono text-ink-500 mb-4 uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2 text-sm text-ink-700 font-mono">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className={`mt-1 font-bold ${
                            isAI ? 'text-lavender-600' : 'text-pyblue-600'
                          }`}
                        >
                          →
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-900/5 text-xs text-ink-500 font-mono">
                  Status: {item.status}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
