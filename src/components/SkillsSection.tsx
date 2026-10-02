import React, { useState } from 'react';
import { Star, Binary, BookOpen, Sparkles, Wrench, Search } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const skillsData = [
    { name: 'Python', category: 'Primary Focus', tag: 'Core' },
    { name: 'C', category: 'Programming Foundation', tag: 'Academics' },
    { name: 'C++', category: 'Programming Foundation', tag: 'Academics' },
    { name: 'HTML', category: 'Programming Foundation', tag: 'Academics' },
    { name: 'C# / .NET', category: 'Currently Learning', tag: 'Coursework' },
    { name: 'ASP.NET', category: 'Currently Learning', tag: 'Coursework' },
    { name: 'SQL', category: 'Currently Learning', tag: 'Database' },
    { name: 'Web Development', category: 'Currently Learning', tag: 'Frontend' },
    { name: 'Artificial Intelligence', category: 'Exploring', tag: 'AI' },
    { name: 'Prompt Engineering', category: 'Exploring', tag: 'AI' },
    { name: 'AI Automation', category: 'Exploring', tag: 'Workflow' },
    { name: 'Make', category: 'Exploring', tag: 'Automation' },
    { name: 'AI Tools', category: 'Exploring', tag: 'Productivity' },
    { name: 'AI Image Generation', category: 'Exploring', tag: 'Creative' },
    { name: 'AI Video Generation', category: 'Exploring', tag: 'Creative' },
    { name: 'Emerging Technologies', category: 'Exploring', tag: 'Trends' },
    { name: 'MS Word', category: 'Supporting Tools', tag: 'Office' },
    { name: 'MS Excel', category: 'Supporting Tools', tag: 'Data' },
    { name: 'Canva', category: 'Supporting Tools', tag: 'Design' },
  ];

  const filteredSkills = skillsData.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-20 bg-white border-y border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
              Technical Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-1">
              Skills & Competencies
            </h2>
            <p className="text-ink-600 text-sm mt-2">
              Organized honestly by skill groups and active stage of learning — no artificial percentages or fake bars.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter competencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-ivory-50 border border-ink-900/10 rounded-xl text-xs font-mono text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-pyblue-500 transition-colors"
            />
          </div>
        </div>

        {/* If user is searching, show dynamic results */}
        {searchQuery ? (
          <div className="bg-ivory-50 rounded-3xl p-8 border border-ink-900/10 mb-8">
            <p className="text-xs font-mono text-ink-500 mb-4">
              Found {filteredSkills.length} matching competencies for &ldquo;{searchQuery}&rdquo;:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {filteredSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded-xl bg-white border border-ink-900/10 text-xs font-mono shadow-2xs flex items-center gap-2"
                >
                  <span className="font-bold text-ink-900">{skill.name}</span>
                  <span className="text-[10px] text-ink-400">({skill.category})</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Group 1: PRIMARY FOCUS */}
            <div className="bg-pyblue-50/50 rounded-3xl p-6 sm:p-8 border-2 border-pyblue-500/40 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-pyblue-600 text-white font-mono text-[11px] font-bold">
                    PRIMARY FOCUS
                  </span>
                  <Star className="w-4 h-4 text-pyblue-600 fill-pyblue-600" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Python</h3>
                <p className="text-xs text-ink-600 mb-4 leading-relaxed">
                  Main technical priority. Emphasizing clean syntax, logical decomposition, scripting, and practical problem-solving.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-pyblue-200 text-pyblue-800 text-xs font-mono font-medium w-fit shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-pyblue-600 animate-pulse" />
                <span>Dedicated Focus</span>
              </div>
            </div>

            {/* Group 2: PROGRAMMING FOUNDATION */}
            <div className="bg-ivory-50 rounded-3xl p-6 sm:p-8 border border-ink-900/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-ivory-200 text-ink-700 font-mono text-[11px] font-bold">
                    PROGRAMMING FOUNDATION
                  </span>
                  <Binary className="w-4 h-4 text-ink-500" />
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">Academic Core</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                    C
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                    C++
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                    HTML
                  </span>
                </div>
              </div>
              <p className="text-xs text-ink-500 mt-4 leading-relaxed">
                Grounded in college coursework covering memory basics, procedural programming, and structured markup.
              </p>
            </div>

            {/* Group 3: CURRENTLY LEARNING */}
            <div className="bg-ivory-50 rounded-3xl p-6 sm:p-8 border border-ink-900/10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 font-mono text-[11px] font-bold">
                  CURRENTLY LEARNING
                </span>
                <BookOpen className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">Active Studies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-pyblue-700">
                  Python
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  C# / .NET
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  ASP.NET
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  SQL
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  Web Development
                </span>
              </div>
            </div>

            {/* Group 4: EXPLORING (Spans 2 cols) */}
            <div className="lg:col-span-2 bg-lavender-50/40 rounded-3xl p-6 sm:p-8 border border-lavender-200">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-lavender-200 text-lavender-800 font-mono text-[11px] font-bold">
                  EXPLORING
                </span>
                <Sparkles className="w-4 h-4 text-lavender-600" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">AI & Emerging Technologies</h3>
              <p className="text-xs text-ink-600 mb-4">
                Testing modern tools and understanding how automation interacts with intelligent workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Prompt Engineering',
                  'AI Automation',
                  'Make',
                  'AI Tools',
                  'AI Image Generation',
                  'AI Video Generation',
                  'Emerging Technologies'
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-white border border-lavender-200 font-mono text-xs text-ink-800 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Group 5: SUPPORTING TOOLS */}
            <div className="bg-ivory-50 rounded-3xl p-6 sm:p-8 border border-ink-900/10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-ivory-200 text-ink-700 font-mono text-[11px] font-bold">
                  SUPPORTING TOOLS
                </span>
                <Wrench className="w-4 h-4 text-ink-500" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">Productivity</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  MS Word
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  MS Excel
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-ink-900/10 font-mono text-xs font-semibold text-ink-800">
                  Canva
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
