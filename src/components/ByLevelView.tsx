import { useState, useRef, useMemo } from 'react';
import { getEntriesByLevel, ctasLevelLabels } from '../data/ctasData';
import type { CTASLevel } from '../data/ctasData';
import { ctasHexColors } from '../utils/ctasColors';
import CategoryIcon from './CategoryIcon';

const levels: { level: CTASLevel; timeframe: string }[] = [
  { level: 1, timeframe: 'Immediate' },
  { level: 2, timeframe: '< 15 min' },
  { level: 3, timeframe: '< 30 min' },
  { level: 4, timeframe: '< 60 min' },
  { level: 5, timeframe: '< 120 min' },
];

export default function ByLevelView() {
  const [openLevel, setOpenLevel] = useState<number | null>(null);
  const entriesByLevel = useMemo(() => getEntriesByLevel(), []);

  const handleToggle = (level: number) => {
    setOpenLevel((prev) => (prev === level ? null : level));
  };

  return (
    <div className="px-4 pb-8 pt-1 flex flex-col gap-3">
      {levels.map(({ level, timeframe }) => (
        <LevelAccordion
          key={level}
          level={level}
          timeframe={timeframe}
          groups={entriesByLevel[level] || []}
          isOpen={openLevel === level}
          onToggle={() => handleToggle(level)}
        />
      ))}
    </div>
  );
}

interface LevelAccordionProps {
  level: CTASLevel;
  timeframe: string;
  groups: { categoryName: string; sectionName: string; entries: { description: string }[] }[];
  isOpen: boolean;
  onToggle: () => void;
}

function LevelAccordion({ level, timeframe, groups, isOpen, onToggle }: LevelAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const color = ctasHexColors[level];
  const totalEntries = groups.reduce((sum, g) => sum + g.entries.length, 0);
  const isLight = level === 4;

  return (
    <div className="rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-left active:brightness-90 transition-all"
        style={{ backgroundColor: color }}
      >
        <div>
          <div className={`font-bold text-base ${isLight ? 'text-gray-900' : 'text-white'}`}>
            CTAS {level}: {ctasLevelLabels[level]}
          </div>
          <div className={`text-xs mt-0.5 ${isLight ? 'text-gray-700' : 'text-white/80'}`}>
            {timeframe} &middot; {totalEntries} entries
          </div>
        </div>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isLight ? 'text-gray-700' : 'text-white/80'} ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 5000) : 0 }}
      >
        <div ref={contentRef} className="bg-white">
          {groups.map((group, gi) => (
            <div key={gi}>
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
                <span className="text-gray-400">
                  <CategoryIcon category={group.categoryName} className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {group.categoryName}
                </span>
                <span className="text-[10px] text-gray-300 ml-auto">{group.sectionName}</span>
              </div>
              {group.entries.map((entry, ei) => (
                <div
                  key={ei}
                  className={`flex items-start gap-3 px-4 py-2.5 ${
                    ei < group.entries.length - 1 || gi < groups.length - 1 ? 'border-b border-gray-50' : ''
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-sm text-gray-700 flex-1 leading-snug">{entry.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
