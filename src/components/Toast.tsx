import React from 'react';
import { Info, CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'info' | 'success';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose }) => {
  if (!message) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-ink-900 text-ivory-50 px-4 py-3 rounded-2xl shadow-2xl text-xs font-mono border border-ink-700 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div className="flex items-center gap-2.5">
        {type === 'success' ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : (
          <Info className="w-4 h-4 text-pyblue-400 shrink-0" />
        )}
        <span className="leading-snug">{message}</span>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="text-ink-400 hover:text-ivory-50 p-1 rounded-md transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
