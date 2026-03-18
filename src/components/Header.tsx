interface HeaderProps {
  onInfoClick: () => void;
}

export default function Header({ onInfoClick }: HeaderProps) {
  return (
    <header className="bg-gradient-to-b from-[#2d1445] to-[#3b1961] text-white pt-[calc(env(safe-area-inset-top,20px)+8px)] px-4 pb-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">CTAS Reference</h1>
          <p className="text-purple-200 text-xs mt-0.5">Adult Prehospital Guide</p>
        </div>
        <button
          onClick={onInfoClick}
          className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm font-bold hover:bg-white/25 active:bg-white/30 transition-colors"
          aria-label="CTAS Level Legend"
        >
          ?
        </button>
      </div>
    </header>
  );
}
