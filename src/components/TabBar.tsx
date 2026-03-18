interface Tab {
  label: string;
  icon: React.ReactNode;
}

interface TabBarProps {
  tabs: Tab[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function TabBar({ tabs, activeIndex, onChange }: TabBarProps) {
  return (
    <div className="bg-[#f2f2f7] px-4 pt-3 pb-2">
      <div className="flex bg-gray-200/80 rounded-xl p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => onChange(i)}
            className={`flex-1 flex items-center justify-center gap-1 py-2 px-1 text-[11px] font-semibold rounded-lg transition-all duration-200 ${
              activeIndex === i
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 active:bg-gray-300/40'
            }`}
          >
            <span className="w-3.5 h-3.5">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
