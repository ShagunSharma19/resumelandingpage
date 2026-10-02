import React, { useState } from 'react';
import {
  Terminal,
  Code,
  Repeat,
  Cpu,
  Workflow,
  ArrowRight,
  Info
} from 'lucide-react';

export const PythonMeetsAISection: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<number | null>(null);

  const flowSteps = [
    {
      num: '01',
      title: 'PYTHON',
      desc: 'Core syntax, object-oriented concepts, and standard library basics.',
      icon: Terminal,
      color: 'blue',
      deepDive: 'Focusing on clean, readable code and object-oriented abstractions that form the foundation for all subsequent scripts and data pipelines.'
    },
    {
      num: '02',
      title: 'PROGRAMMING',
      desc: 'Problem-solving techniques, modular scripting, and algorithm foundations.',
      icon: Code,
      color: 'blue',
      deepDive: 'Deconstructing challenges into deterministic procedural stages, choosing proper data structures, and optimizing computational complexity.'
    },
    {
      num: '03',
      title: 'AUTOMATION',
      desc: 'File batching, data cleanup, and eliminating tedious manual steps.',
      icon: Repeat,
      color: 'blue',
      deepDive: 'Writing Python scripts that interact with system files, parse messy text outputs, and automate repetitive everyday developer chores.'
    },
    {
      num: '04',
      title: 'AI TOOLS',
      desc: 'Leveraging Artificial Intelligence tools, prompt crafting, and model inputs.',
      icon: Cpu,
      color: 'lavender',
      deepDive: 'Understanding context windows, role conditioning, and token boundaries to make LLMs reliably perform specific, targeted cognitive tasks.'
    },
    {
      num: '05',
      title: 'AI-POWERED WORKFLOWS',
      desc: 'Combining prompt engineering, Make automation, and intelligent data flow.',
      icon: Workflow,
      color: 'lavender',
      deepDive: 'Constructing pipelines where events trigger automated scripts, pass structured context to AI models, and dispatch formatted results.'
    },
  ];

  return (
    <section id="python-ai" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-lavender-600 tracking-wider">
            Bridge of Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-2">
            Where Python Meets AI
          </h2>
          <p className="text-ink-600 text-base mt-3">
            I'm exploring how Python can become a bridge between programming, automation and AI.
          </p>
          <p className="text-xs font-mono text-ink-400 mt-2">
            An exploration and learning journey — not professional AI engineering.
          </p>
        </div>

        {/* Sequential Visual Flow Cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {flowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedFlow === idx;
              const isLavender = step.color === 'lavender';

              return (
                <div
                  key={step.num}
                  onClick={() => setSelectedFlow(isSelected ? null : idx)}
                  className={`bg-white rounded-2xl p-6 border shadow-2xs hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-pyblue-600 ring-2 ring-pyblue-500/20'
                      : isLavender
                      ? 'border-ink-900/10 hover:border-lavender-500'
                      : 'border-ink-900/10 hover:border-pyblue-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                          isLavender
                            ? 'bg-lavender-50 text-lavender-600'
                            : 'bg-pyblue-50 text-pyblue-600'
                        }`}
                      >
                        {step.num}
                      </span>
                      <Icon
                        className={`w-5 h-5 ${
                          isLavender
                            ? 'text-lavender-600'
                            : 'text-pyblue-600'
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-ink-900 mb-1">{step.title}</h3>
                    <p className="text-xs text-ink-600 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink-900/5 flex items-center justify-between text-[11px] font-mono text-ink-400">
                    <span>{isSelected ? 'Click to collapse' : 'Click to inspect'}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'rotate-90 text-pyblue-600' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded Step Deep Dive Drawer */}
          {selectedFlow !== null && (
            <div className="mt-6 p-6 rounded-2xl bg-pyblue-50/70 border border-pyblue-200 text-ink-800 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-pyblue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider font-bold text-pyblue-700">
                    Step {flowSteps[selectedFlow].num}: {flowSteps[selectedFlow].title}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-700 font-medium">
                    {flowSteps[selectedFlow].deepDive}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
