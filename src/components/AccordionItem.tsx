import { useRef } from 'react';
import type { Category, CTASLevel } from '../data/ctasData';
import CTASBadge from './CTASBadge';
import CategoryIcon from './CategoryIcon';
import { ctasHexColors, ctasBgTints } from '../utils/ctasColors';

interface AccordionItemProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}

function getHighestLevel(category: Category): CTASLevel {
  let highest: CTASLevel = 5;
  for (const entry of category.entries) {
    if (entry.level === 0) continue;
    if (entry.level < highest) highest = entry.level;
  }
  return highest;
}

export default function AccordionItem({ category, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const highestLevel = getHighestLevel(category);
  const accentColor = ctasHexColors[highestLevel];
  const bgTint = ctasBgTints[highestLevel];

  return (
    <div
      className="rounded-xl shadow-sm overflow-hidden"
      style={{ borderLeft: `4px solid ${accentColor}` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left active:brightness-95 transition-all"
        style={{ backgroundColor: isOpen ? bgTint : 'white' }}
      >
        <span className="text-gray-500" style={{ color: accentColor }}>
          <CategoryIcon category={category.name} className="w-5 h-5" />
        </span>
        <span className="font-semibold text-sm text-gray-900 flex-1">{category.name}</span>
        <span className="text-[11px] text-gray-400 font-medium mr-1">{category.entries.length}</span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="transition-[max-height] duration-300 ease-in-out overflow-hidden bg-white"
        style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ?? 2000) : 0 }}
      >
        <div ref={contentRef}>
          <div className="border-t border-gray-100">
            {category.entries.map((entry, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 px-4 py-3 ${
                  i < category.entries.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: ctasHexColors[entry.level] }}
                />
                <p className="text-sm text-gray-700 flex-1 leading-snug">{entry.description}</p>
                <CTASBadge level={entry.level} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
