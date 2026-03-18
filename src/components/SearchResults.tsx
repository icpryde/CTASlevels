import type { SearchResult } from '../hooks/useSearch';
import CTASBadge from './CTASBadge';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const terms = query.trim().toLowerCase().split(/\s+/);
  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isMatch = terms.some(t => part.toLowerCase() === t);
    return isMatch ? (
      <mark key={i} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-gray-400 text-sm">No matching entries found.</p>
        <p className="text-gray-300 text-xs mt-1">Try different keywords</p>
      </div>
    );
  }

  const grouped: Record<string, SearchResult[]> = {};
  for (const r of results) {
    const key = `${r.sectionName} — ${r.categoryName}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(r);
  }

  return (
    <div className="px-4 pb-6 flex flex-col gap-3">
      <p className="text-xs text-gray-400 px-1">
        {results.length} result{results.length !== 1 ? 's' : ''}
      </p>
      {Object.entries(grouped).map(([groupName, items]) => (
        <div key={groupName} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {groupName}
            </span>
          </div>
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-4 py-3 ${
                i < items.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <p className="text-sm text-gray-700 flex-1 leading-snug">
                {highlightMatch(item.entry.description, query)}
              </p>
              <CTASBadge level={item.entry.level} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
