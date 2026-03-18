import type { CTASLevel } from '../data/ctasData';
import { ctasColors } from '../utils/ctasColors';

interface CTASBadgeProps {
  level: CTASLevel;
  size?: 'sm' | 'md';
}

export default function CTASBadge({ level, size = 'sm' }: CTASBadgeProps) {
  const color = ctasColors[level];
  const sizeClasses = size === 'sm'
    ? 'px-2.5 py-0.5 text-xs font-semibold'
    : 'px-3 py-1 text-sm font-bold';

  return (
    <span
      className={`inline-flex items-center rounded-full ${color.bg} ${color.text} ${sizeClasses} shrink-0`}
    >
      {color.label}
    </span>
  );
}
