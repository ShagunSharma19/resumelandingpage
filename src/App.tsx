/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_CONFIG, INITIAL_SOCIAL_LINKS, SiteConfig, SocialLinks } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveJourney } from './components/InteractiveJourney';
import { AboutSection } from './components/AboutSection';
import { PythonFocusSection } from './components/PythonFocusSection';
import { PythonMeetsAISection } from './components/PythonMeetsAISection';
import { AIPlaygroundSection } from './components/AIPlaygroundSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { NextWithPythonSection } from './components/NextWithPythonSection';
import { AIJourneyTimelineSection } from './components/AIJourneyTimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CurrentlyLearningBanner } from './components/CurrentlyLearningBanner';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export default function App() {
  const [config] = useState<SiteConfig>(INITIAL_CONFIG);
  const [socialLinks] = useState<SocialLinks>(INITIAL_SOCIAL_LINKS);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="bg-ivory-50 text-ink-900 font-sans selection:bg-pyblue-100 selection:text-pyblue-700 antialiased relative min-h-screen overflow-x-hidden">
      
      {/* Background Decorative Grid & Ambient Glows */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60" />
      <div className="fixed top-[-10vw] right-[-5vw] w-[45vw] h-[45vw] bg-pyblue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-[-10vw] left-[-5vw] w-[40vw] h-[40vw] bg-lavender-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="relative z-10">
        <HeroSection config={config} onOpenResume={() => setResumeModalOpen(true)} />
        <InteractiveJourney />
        <AboutSection config={config} />
        <PythonFocusSection onShowToast={showToast} />
        <PythonMeetsAISection />
        <AIPlaygroundSection />
        <FeaturedProjectsSection onShowToast={showToast} />
        <NextWithPythonSection />
        <AIJourneyTimelineSection />
        <SkillsSection />
        <EducationSection config={config} />
        <CurrentlyLearningBanner />
        <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />
        <ContactSection socialLinks={socialLinks} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer socialLinks={socialLinks} />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        config={config}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
