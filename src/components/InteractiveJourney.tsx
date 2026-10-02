import React, { useState } from 'react';
import { JOURNEY_STEPS, JourneyStep } from '../data/portfolioData';
import { CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';

export const InteractiveJourney: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(0);
  const currentStep: JourneyStep = JOURNEY_STEPS[activeStepId];

  return (
    <section id="interactive-journey" className="py-12 bg-white/70 border-y border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-ivory-100/80 rounded-3xl p-6 sm:p-10 border border-ink-900/10 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
                Interactive Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mt-1">
                Explore My Developer Journey
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Connecting foundational Python programming to automation and real-world AI exploration.
              </p>
            </div>
            <div className="text-xs font-mono bg-white px-3.5 py-1.5 rounded-full border border-ink-900/10 text-ink-600 self-start sm:self-auto flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-pyblue-600" />
              <span>Click any step to reveal details</span>
            </div>
          </div>

          {/* Flow Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {JOURNEY_STEPS.map((step) => {
              const isActive = activeStepId === step.id;
              const names = ['LEARN', 'EXPERIMENT', 'BUILD', 'DOCUMENT', 'IMPROVE'];
              const sublabels = [
                'Python Core & Logic',
                'AI Workflows & Tools',
                'Automation & Utilities',
                'Process & Code Logs',
                'Refinement & Scale'
              ];

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-pyblue-500 shadow-sm ring-2 ring-pyblue-500/20'
                      : 'bg-white/60 border-ink-900/10 hover:border-pyblue-300 hover:bg-white'
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono font-bold block mb-1 ${
                      isActive ? 'text-pyblue-600' : 'text-ink-400'
                    }`}
                  >
                    {step.stageNum}
                  </span>
                  <p className="text-base font-bold text-ink-900">{names[step.id]}</p>
                  <p className="text-xs text-ink-500 mt-1 font-mono line-clamp-1">{sublabels[step.id]}</p>
                </button>
              );
            })}
          </div>

          {/* Dynamic Detail Box */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-ink-900/10 shadow-xs transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 text-xs font-mono font-semibold bg-pyblue-100 text-pyblue-700 rounded-md">
                    {currentStep.badge}
                  </span>
                  <span className="text-xs font-mono text-ink-400">
                    Step {currentStep.id + 1} of 5
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-ink-900">
                  {currentStep.title}
                </h4>

                <p className="text-sm text-ink-600 max-w-3xl leading-relaxed">
                  {currentStep.desc}
                </p>

                {/* Key Practices */}
                <div className="pt-2">
                  <p className="text-xs font-mono uppercase font-semibold text-ink-500 mb-2">
                    Core Practices & Execution:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-700">
                    {currentStep.keyPractices.map((practice, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-ivory-50/70 p-2 rounded-lg border border-ink-900/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Principle */}
                <div className="flex items-center gap-2 text-xs font-mono text-ink-600 bg-pyblue-50/60 p-3 rounded-xl border border-pyblue-100">
                  <Lightbulb className="w-4 h-4 text-pygold-500 shrink-0" />
                  <span>
                    <strong className="text-ink-900">Principle:</strong> &ldquo;{currentStep.sampleInsight}&rdquo;
                  </span>
                </div>
              </div>

              {/* Connected With Badge */}
              <div className="shrink-0">
                <div className="px-4 py-3 rounded-xl bg-ivory-100 border border-ink-900/10 text-xs font-mono text-ink-700 space-y-1">
                  <p className="text-ink-400 text-[10px] uppercase tracking-wider">Integration Anchor</p>
                  <p className="font-bold text-pyblue-700 text-sm">{currentStep.connectedWith}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
