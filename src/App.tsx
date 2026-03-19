import { useState } from 'react';
import { allSections } from './data/ctasData';
import { useSearch } from './hooks/useSearch';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TabBar from './components/TabBar';
import AccordionGroup from './components/AccordionGroup';
import SearchResults from './components/SearchResults';
import CTASLegend from './components/CTASLegend';
import ByLevelView from './components/ByLevelView';
const TABS = [
  {
    label: 'Complaints',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
      </svg>
    ),
  },
  {
    label: '1st Mod',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l2.5 2.5" />
      </svg>
    ),
  },
  {
    label: '2nd Mod',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    label: 'By Level',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 12h12M3 18h6" />
      </svg>
    ),
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [legendOpen, setLegendOpen] = useState(false);

  const searchResults = useSearch(allSections, searchQuery);
  const isSearching = searchQuery.trim().length > 0;

  const renderTabContent = () => {
    if (activeTab === 3) {
      return <ByLevelView />;
    }

    return (
      <main className="flex-1 px-4 pb-8 pt-1">
        <AccordionGroup
          key={activeTab}
          categories={allSections[activeTab].categories}
        />
      </main>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f7]">
      <Header onInfoClick={() => setLegendOpen(true)} />

      <div className="sticky top-0 z-20">
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        {!isSearching && (
          <TabBar tabs={TABS} activeIndex={activeTab} onChange={setActiveTab} />
        )}
      </div>

      {isSearching ? (
        <SearchResults results={searchResults} query={searchQuery} />
      ) : (
        renderTabContent()
      )}

      <CTASLegend isOpen={legendOpen} onClose={() => setLegendOpen(false)} />
    </div>
  );
}
