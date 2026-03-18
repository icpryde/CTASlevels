interface HeaderProps {
  onInfoClick: () => void;
}

export default function Header({ onInfoClick }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-b from-[#2d1445] to-[#3b1961] text-white pt-[calc(env(safe-area-inset-top,20px)+8px)] px-4 pb-3 overflow-hidden">
      <svg
        className="absolute right-0 top-0 h-full w-40 opacity-10"
        viewBox="0 0 160 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,60 20,60 25,20 30,65 35,55 50,55 55,15 60,60 80,60 100,60 105,25 110,65 115,50 130,50 135,10 140,60 160,60"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
            <svg className="w-5 h-5 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l2-6 3 12 3-8 2 4h6" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">CTAS Reference</h1>
            <p className="text-purple-200 text-[10px] mt-0">Adult Prehospital Guide v2.0</p>
          </div>
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
