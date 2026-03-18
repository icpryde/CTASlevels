interface TabBarProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function TabBar({ tabs, activeIndex, onChange }: TabBarProps) {
  return (
    <div className="bg-[#f2f2f7] px-4 pt-3 pb-2">
      <div className="flex bg-gray-200/80 rounded-xl p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => onChange(i)}
            className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg transition-all duration-200 ${
              activeIndex === i
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 active:bg-gray-300/40'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
