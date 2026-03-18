import type { CTASLevel } from '../data/ctasData';

export const ctasColors: Record<CTASLevel, { bg: string; text: string; border: string; label: string }> = {
  0: { bg: 'bg-ctas-0', text: 'text-white', border: 'border-ctas-0', label: 'CTAS 0' },
  1: { bg: 'bg-ctas-1', text: 'text-white', border: 'border-ctas-1', label: 'CTAS 1' },
  2: { bg: 'bg-ctas-2', text: 'text-white', border: 'border-ctas-2', label: 'CTAS 2' },
  3: { bg: 'bg-ctas-3', text: 'text-white', border: 'border-ctas-3', label: 'CTAS 3' },
  4: { bg: 'bg-ctas-4', text: 'text-gray-900', border: 'border-ctas-4', label: 'CTAS 4' },
  5: { bg: 'bg-ctas-5', text: 'text-white', border: 'border-ctas-5', label: 'CTAS 5' },
};

export const ctasHexColors: Record<CTASLevel, string> = {
  0: '#1a1a1a',
  1: '#6B2D8B',
  2: '#D72B2B',
  3: '#E8751A',
  4: '#D4A017',
  5: '#2E8B57',
};
