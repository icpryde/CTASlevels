import type { CTASLevel } from '../data/ctasData';
import { ctasLevelLabels } from '../data/ctasData';
import CTASBadge from './CTASBadge';

interface CTASLegendProps {
  isOpen: boolean;
  onClose: () => void;
}

const levelDescriptions: Record<CTASLevel, string> = {
  0: 'Used for Termination of Resuscitation or Code 5',
  1: 'Threats to life or limb or imminent risk of deterioration',
  2: 'Potential threat to life, limb or function',
  3: 'Potentially progress to a serious problem',
  4: 'Relates to patient age, distress, potential for deterioration or complications',
  5: 'Minor complaints with risk or potential for deterioration',
};

const levels: CTASLevel[] = [1, 2, 3, 4, 5, 0];

export default function CTASLegend({ isOpen, onClose }: CTASLegendProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl shadow-xl animate-slide-up">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h2 className="text-lg font-bold text-gray-900">CTAS Levels</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center active:bg-gray-200"
            aria-label="Close"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 pb-[calc(env(safe-area-inset-bottom,16px)+16px)]">
          <div className="flex flex-col gap-3">
            {levels.map((level) => (
              <div key={level} className="flex items-start gap-3">
                <CTASBadge level={level} size="md" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{ctasLevelLabels[level]}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{levelDescriptions[level]}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
            Referenced from "Prehospital CTAS Paramedic Guide Version 2.0: Adult" — Ontario Ministry of Health
          </p>
        </div>
      </div>
    </div>
  );
}
