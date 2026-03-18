import { useMemo } from 'react';
import type { Section, CTASEntry } from '../data/ctasData';

export interface SearchResult {
  sectionName: string;
  categoryName: string;
  entry: CTASEntry;
}

export function useSearch(sections: Section[], query: string): SearchResult[] {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const terms = trimmed.split(/\s+/);
    const results: SearchResult[] = [];

    for (const section of sections) {
      for (const category of section.categories) {
        for (const entry of category.entries) {
          const text = `${category.name} ${entry.description}`.toLowerCase();
          if (terms.every((term) => text.includes(term))) {
            results.push({
              sectionName: section.name,
              categoryName: category.name,
              entry,
            });
          }
        }
      }
    }

    return results;
  }, [sections, query]);
}
