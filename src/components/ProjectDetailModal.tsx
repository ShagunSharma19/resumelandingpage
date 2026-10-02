import React, { useState } from 'react';
import { X, Check, Copy, ArrowRight, Play, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onShowToast,
}) => {
  const [selectedRole, setSelectedRole] = useState('Senior Python Developer');
  const [taskInput, setTaskInput] = useState('Build an automated CSV data validator with exception logging');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  if (!project) return null;

  const handleGeneratePrompt = () => {
    const promptText = `### SYSTEM ROLE
You are an expert ${selectedRole} adhering to clean architecture, PEP 8, and defensive programming.

### TASK
${taskInput}

### MANDATORY CONSTRAINTS
- Use strictly modern Python 3.12 standard library features where applicable.
- Include thorough type hints and descriptive docstrings.
- Implement robust try/except error boundaries with explicit error codes.
- Do not output conversational filler. Provide only production-ready code with usage examples.

### EXPECTED OUTPUT FORMAT
1. Architecture breakdown (max 3 bullets).
2. Clean, runnable Python module.
3. Verification test case.`;

    setGeneratedPrompt(promptText);
    onShowToast('Prompt generated successfully with structured boundaries!');
  };

  const handleCopyPrompt = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      onShowToast('Copied structured prompt to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-ink-900/10 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-ivory-100 text-ink-500 hover:text-ink-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-pyblue-600 uppercase">
              {project.projectNumber}
            </span>
            <span className="text-ink-300">•</span>
            <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-pyblue-50 text-pyblue-700 font-semibold">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-900">
            {project.title}
          </h3>
          <p className="text-sm text-ink-600 mt-2 leading-relaxed">
            {project.fullDetails.overview}
          </p>
        </div>

        {/* Objective & Tech */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-900/5">
            <p className="text-xs font-mono uppercase text-ink-400 font-semibold mb-1">
              Project Objective
            </p>
            <p className="text-sm text-ink-800">{project.fullDetails.objective}</p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase text-ink-400 font-semibold mb-2">
              Technologies & Methodologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.fullDetails.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-ivory-100 text-ink-800 border border-ink-900/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="mb-8">
          <p className="text-xs font-mono uppercase text-ink-400 font-semibold mb-2">
            Key Learning Outcomes & Artifacts
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-ink-700">
            {project.fullDetails.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Feature Demo specific to each project */}
        {project.fullDetails.demoData?.interactiveType === 'prompt_generator' && (
          <div className="bg-ink-900 text-ivory-50 rounded-2xl p-5 border border-ink-800 space-y-4">
            <div className="flex items-center justify-between border-b border-ink-800 pb-3">
              <span className="text-xs font-mono font-bold text-pyblue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Prompt Builder
              </span>
              <span className="text-[10px] font-mono text-ink-400">Live Demo</span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-ink-400 block mb-1">Select System Role:</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-ink-800 border border-ink-700 rounded-lg p-2 text-ivory-100 text-xs focus:outline-none focus:border-pyblue-500"
                >
                  <option value="Senior Python Developer">Senior Python Developer</option>
                  <option value="Automation Pipeline Architect">Automation Pipeline Architect</option>
                  <option value="Data Processing Specialist">Data Processing Specialist</option>
                  <option value="Prompt Engineering Specialist">Prompt Engineering Specialist</option>
                </select>
              </div>

              <div>
                <label className="text-ink-400 block mb-1">Target Task / Goal:</label>
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  className="w-full bg-ink-800 border border-ink-700 rounded-lg p-2 text-ivory-100 text-xs focus:outline-none focus:border-pyblue-500"
                />
              </div>

              <button
                onClick={handleGeneratePrompt}
                className="w-full py-2.5 rounded-lg bg-pyblue-600 hover:bg-pyblue-500 text-white font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Generate Structured Prompt</span>
              </button>

              {generatedPrompt && (
                <div className="mt-3 p-3 bg-ink-950 rounded-xl border border-ink-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-ink-400">
                    <span>Generated Template:</span>
                    <button
                      onClick={handleCopyPrompt}
                      className="hover:text-white flex items-center gap-1 text-pyblue-400 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-[11px] text-ivory-200 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto font-mono">
                    {generatedPrompt}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {project.fullDetails.demoData?.interactiveType === 'workflow_diagram' && (
          <div className="bg-ivory-50 rounded-2xl p-5 border border-ink-900/10 space-y-4">
            <p className="text-xs font-mono font-bold text-pyblue-600 uppercase">
              Pipeline Execution Simulator
            </p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
              {['1. Webhook', '2. Filter', '3. AI Node', '4. Output'].map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    activePipelineStep === idx
                      ? 'bg-pyblue-600 text-white font-bold shadow-xs'
                      : 'bg-white text-ink-700 border-ink-900/10 hover:border-pyblue-300'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
            <div className="p-3 bg-white rounded-xl border border-ink-900/10 text-xs font-mono text-ink-600">
              {activePipelineStep === 0 && 'Node 1: Receives real-time payload via secure HTTPS webhook endpoint.'}
              {activePipelineStep === 1 && 'Node 2: Evaluates JSON criteria; branches non-conforming items into fallback.'}
              {activePipelineStep === 2 && 'Node 3: Triggers AI model API with contextual instructions for extraction.'}
              {activePipelineStep === 3 && 'Node 4: Appends structured result to destination database and sends email notification.'}
            </div>
          </div>
        )}

        {project.fullDetails.demoData?.interactiveType === 'video_storyboard' && (
          <div className="bg-ivory-50 rounded-2xl p-5 border border-ink-900/10 space-y-3">
            <p className="text-xs font-mono font-bold text-pyblue-600 uppercase">
              Production Storyboard Breakdown
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="bg-white p-3 rounded-xl border border-ink-900/10">
                <span className="font-bold text-ink-900 block">Shot 01 (0:00 - 0:15)</span>
                <span className="text-ink-600">Wide cinematic view of high-altitude Himalayan valley with digital matrix overlay.</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-ink-900/10">
                <span className="font-bold text-ink-900 block">Shot 02 (0:15 - 0:35)</span>
                <span className="text-ink-600">Close-up macro of mechanical terminal executing Python algorithms in real time.</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-ink-900/10">
                <span className="font-bold text-ink-900 block">Shot 03 (0:35 - 1:00)</span>
                <span className="text-ink-600">Human developer looking up from terminal toward future horizon with inspirational narration.</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-ink-900/10 flex items-center justify-between">
          <span className="text-xs font-mono text-ink-500">
            Shagun Sharma • Project Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          >
            Close Project
          </button>
        </div>

      </div>
    </div>
  );
};
