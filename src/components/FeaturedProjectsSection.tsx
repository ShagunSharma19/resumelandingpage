import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

interface FeaturedProjectsSectionProps {
  onShowToast: (msg: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onShowToast,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
            Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-1">
            Things I've Built & Explored
          </h2>
          <p className="text-ink-600 text-base mt-2">
            Small experiments today. Bigger projects ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const isComingSoon = project.status === 'In Progress';

            if (isComingSoon) {
              return (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-ivory-100 via-white to-pyblue-50/40 rounded-3xl p-8 border-2 border-dashed border-pyblue-300 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-pyblue-700">
                        {project.projectNumber}
                      </span>
                      <span className="px-3 py-1 text-[11px] font-mono font-bold rounded-full bg-pyblue-600 text-white">
                        In Progress
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-ink-900 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-ink-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono rounded-lg bg-white border border-ink-900/10 text-pyblue-800 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ink-900/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-ink-500">
                      Scheduled for upcoming builds
                    </span>
                    <a
                      href="#future-python"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-pyblue-700 hover:underline"
                    >
                      <span>See roadmapped ideas</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-8 border border-ink-900/10 shadow-xs flex flex-col justify-between hover:border-pyblue-500 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-pyblue-600">
                      {project.projectNumber}
                    </span>
                    <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-pyblue-50 text-pyblue-700 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ink-900 mb-3 group-hover:text-pyblue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-ink-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 text-ink-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-900/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-pyblue-600 hover:text-pyblue-800 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onShowToast={onShowToast}
        />
      )}
    </section>
  );
};
