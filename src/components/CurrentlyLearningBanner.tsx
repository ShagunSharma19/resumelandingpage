import React from 'react';

export const CurrentlyLearningBanner: React.FC = () => {
  const topics = [
    { name: 'Python', color: 'bg-pyblue-400', textColor: 'text-pyblue-200' },
    { name: 'Artificial Intelligence', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'Prompt Engineering', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'AI Automation', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'Make Workflows', color: 'bg-pyblue-400', textColor: 'text-ivory-100' },
    { name: 'AI Tools', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'AI Image Generation', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'AI Video Generation', color: 'bg-lavender-400', textColor: 'text-ivory-100' },
    { name: 'Web Development', color: 'bg-pyblue-400', textColor: 'text-ivory-100' },
    { name: 'Emerging Technologies', color: 'bg-emerald-400', textColor: 'text-ivory-100' },
  ];

  return (
    <section className="py-16 bg-ink-900 text-ivory-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-800 text-pyblue-200 border border-ink-700 text-xs font-mono mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Always learning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Currently Learning</h2>
          </div>
          <p className="text-xs font-mono text-ink-400 max-w-md">
            Continuously expanding technical horizons through guided coursework, coding routines, and hands-on experiments.
          </p>
        </div>

        {/* 10 Display Badges */}
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic.name}
              className={`px-4 py-2.5 rounded-xl bg-ink-800 border border-ink-700 text-sm font-mono ${topic.textColor} flex items-center gap-2 shadow-2xs hover:border-pyblue-400 transition-colors`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${topic.color}`} />
              <span>{topic.name}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
