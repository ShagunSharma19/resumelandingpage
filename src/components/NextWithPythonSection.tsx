import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const NextWithPythonSection: React.FC = () => {
  const steps = ['LEARNING', 'PRACTICING', 'BUILDING', 'DOCUMENTING', 'IMPROVING'];

  const futureCards = [
    {
      num: '01',
      title: 'Python Automation & Utilities',
      desc: 'Writing command-line tools to streamline daily developer tasks and repetitive computing chores.',
      tags: ['argparse', 'CLI tools', 'system scripts']
    },
    {
      num: '02',
      title: 'File Management Tools',
      desc: "Automated file sorters, directory organizers, and batch renaming scripts with Python's OS/shutil modules.",
      tags: ['pathlib', 'os', 'shutil']
    },
    {
      num: '03',
      title: 'Data Processing Tools',
      desc: 'Parsing CSV, JSON, and text reports to clean and extract key information with speed.',
      tags: ['csv', 'json', 'data cleaning']
    },
    {
      num: '04',
      title: 'API-Based Python Projects',
      desc: 'Consuming public REST APIs, handling JSON responses, and building interactive command-line dashboards.',
      tags: ['requests', 'REST APIs', 'HTTP endpoints']
    },
    {
      num: '05',
      title: 'AI + Python Experiments',
      desc: 'Writing Python wrapper scripts that communicate with AI model endpoints for structured tasks.',
      tags: ['AI SDKs', 'prompt logic', 'JSON Schemas']
    },
    {
      num: '06',
      title: 'Python Web Applications',
      desc: 'Building simple lightweight web interfaces using Python backend concepts for practical utility tools.',
      tags: ['Flask / FastAPI', 'HTML templates', 'routes']
    },
  ];

  return (
    <section id="future-python" className="py-20 bg-ivory-100/70 border-y border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-ink-900/10 text-ink-700 text-xs font-mono mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-pygold-500" />
            <span>Clearly Labeled: Future Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
            Next With Python
          </h2>
          <p className="text-ink-600 text-base mt-2">
            Planned practical project categories I am preparing to build as my Python proficiency deepens.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="mb-12 p-6 rounded-2xl bg-white border border-ink-900/10 shadow-2xs">
          <p className="text-xs font-mono font-semibold text-ink-400 uppercase tracking-wider mb-4">
            My Development Cycle:
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono font-bold text-ink-800">
            {steps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3.5 py-1.5 rounded-lg bg-pyblue-50 text-pyblue-700 border border-pyblue-200">
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-ink-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Future Project Idea Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureCards.map((card) => (
            <div
              key={card.num}
              className="p-6 rounded-2xl bg-white border border-ink-900/10 hover:border-pyblue-400 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-ivory-100 flex items-center justify-center text-ink-700 mb-3 font-mono text-xs font-bold">
                  {card.num}
                </div>
                <h4 className="font-bold text-ink-900 text-base mb-1.5">
                  {card.title}
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-ink-900/5 flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-ivory-100 text-ink-600 border border-ink-900/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
