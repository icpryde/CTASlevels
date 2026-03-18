interface CategoryIconProps {
  category: string;
  className?: string;
}

const icons: Record<string, React.ReactNode> = {
  Cardiac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  'Mental Health': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 017 7c0 2.5-1.3 4.8-3 6v2H8v-2c-1.7-1.2-3-3.5-3-6a7 7 0 017-7z" />
      <path d="M9 21h6M10 17v-2.5M14 17v-2.5" />
    </svg>
  ),
  Neurologic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 5 5 5 9c0 2.5 1 4.5 3 6l1 1v3h6v-3l1-1c2-1.5 3-3.5 3-6 0-4-3-7-7-7z" />
      <path d="M9 22h6" />
      <path d="M12 2v4M8.5 7l3 2M15.5 7l-3 2" />
    </svg>
  ),
  'Obstetrics / Gynecology': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M8 21v-3a4 4 0 018 0v3" />
      <circle cx="12" cy="15" r="2" />
    </svg>
  ),
  Gastrointestinal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-3 0-5 2-5 5 0 2 1 3.5 2 4.5S11 15 11 17v4h2v-4c0-2 1-3.5 2-4.5S17 10 17 8c0-3-2-5-5-5z" />
      <path d="M12 3v5" />
    </svg>
  ),
  Respiratory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v7" />
      <path d="M8 10c-3 0-5 2.5-5 5s2 4 4 4h2c1 0 2-.5 3-1.5" />
      <path d="M16 10c3 0 5 2.5 5 5s-2 4-4 4h-2c-1 0-2-.5-3-1.5" />
    </svg>
  ),
  Other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8M12 14v8M2 12h8M14 12h8" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  ),
  Trauma: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l-1 8h3L9 22l1-8H7L8 2z" />
    </svg>
  ),
  Environmental: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
    </svg>
  ),
  'Oxygen Saturation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l2-6 3 12 3-8 2 4h6" />
    </svg>
  ),
  'Hemodynamic Stability': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l2-6 3 12 3-8 2 4h6" />
      <circle cx="12" cy="12" r="0" />
    </svg>
  ),
  'Glasgow Coma Scale': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Temperature: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
      <line x1="12" y1="16" x2="12" y2="12" />
    </svg>
  ),
  Pain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
    </svg>
  ),
  'Blood Glucose': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.7S6 8 6 13a6 6 0 0012 0c0-5-6-10.3-6-10.3z" />
    </svg>
  ),
  'Blood Pressure': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  Dehydration: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.7S6 8 6 13a6 6 0 0012 0c0-5-6-10.3-6-10.3z" />
      <path d="M10 16l4-6" />
    </svg>
  ),
  Bleeding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.7S6 8 6 13a6 6 0 0012 0c0-5-6-10.3-6-10.3z" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function CategoryIcon({ category, className = 'w-5 h-5' }: CategoryIconProps) {
  const icon = icons[category];
  if (!icon) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    );
  }
  return <span className={className}>{icon}</span>;
}
