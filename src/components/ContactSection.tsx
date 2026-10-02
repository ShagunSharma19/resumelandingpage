import React, { useState } from 'react';
import {
  Instagram,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { SocialLinks } from '../data/portfolioData';

interface ContactSectionProps {
  socialLinks: SocialLinks;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  socialLinks,
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message transmitted! Thank you for reaching out to Shagun.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  const handleLinkClick = (url: string, platform: string) => {
    if (url.includes('PASTE_') || url === 'https://instagram.com' || url === 'https://linkedin.com' || url === 'https://github.com') {
      onShowToast(`${platform} connection ready: Update URL in SOCIAL_LINKS if custom!`);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-ink-900/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase text-pyblue-600 tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight mt-1">
            Let's Connect
          </h2>
          <p className="text-ink-600 text-base mt-3 leading-relaxed">
            I'm always interested in learning, building and connecting with people working with Python, AI and technology.
          </p>
        </div>

        {/* 4 Exact Contact Cards (Strictly NO Facebook) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(socialLinks.instagram, 'Instagram')}
            className="p-6 rounded-3xl bg-ivory-50 border border-ink-900/10 hover:border-pyblue-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-900">Instagram</h3>
              <p className="text-xs text-ink-500 mt-1">Connect for updates & learning stories</p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink-900/5 text-xs font-mono text-pyblue-600 flex items-center gap-1 font-semibold">
              <span>Follow / Message</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Gmail */}
          <a
            href={socialLinks.gmail}
            className="p-6 rounded-3xl bg-ivory-50 border border-ink-900/10 hover:border-pyblue-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-900">Gmail</h3>
              <p className="text-xs text-ink-500 mt-1">Direct message & correspondence</p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink-900/5 text-xs font-mono text-pyblue-600 flex items-center gap-1 font-semibold">
              <span>Send an Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(socialLinks.linkedin, 'LinkedIn')}
            className="p-6 rounded-3xl bg-ivory-50 border border-ink-900/10 hover:border-pyblue-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pyblue-50 text-pyblue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-900">LinkedIn</h3>
              <p className="text-xs text-ink-500 mt-1">Professional network & peer connections</p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink-900/5 text-xs font-mono text-pyblue-600 flex items-center gap-1 font-semibold">
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(socialLinks.github, 'GitHub')}
            className="p-6 rounded-3xl bg-ivory-50 border border-ink-900/10 hover:border-pyblue-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ink-900 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                <Github className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-900">GitHub</h3>
              <p className="text-xs text-ink-500 mt-1">Code repositories & experiments</p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink-900/5 text-xs font-mono text-pyblue-600 flex items-center gap-1 font-semibold">
              <span>Explore Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>

        {/* Interactive Direct Message Form */}
        <div className="max-w-2xl mx-auto bg-ivory-50 rounded-3xl p-8 sm:p-10 border border-ink-900/10 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ink-900/10">
            <div className="w-10 h-10 rounded-xl bg-pyblue-50 text-pyblue-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink-900">Send a Direct Message</h3>
              <p className="text-xs font-mono text-ink-500">I respond to learning inquiries and project feedback</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="font-bold text-base">Message Sent Successfully</p>
              <p className="text-xs text-emerald-700">Thank you for connecting with Shagun Sharma. Will be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-ink-700 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink-900/10 text-xs font-mono text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-pyblue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-700 font-semibold mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink-900/10 text-xs font-mono text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-pyblue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-ink-700 font-semibold mb-1">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Python collaboration or feedback"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink-900/10 text-xs font-mono text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-pyblue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-ink-700 font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink-900/10 text-xs font-mono text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-pyblue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-ink-900 text-ivory-50 hover:bg-pyblue-600 font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Shagun'}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
