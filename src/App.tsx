import { useState } from 'react';
import { allSections } from './data/ctasData';
import { useSearch } from './hooks/useSearch';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TabBar from './components/TabBar';
import AccordionGroup from './components/AccordionGroup';
import SearchResults from './components/SearchResults';
import CTASLegend from './components/CTASLegend';

const TAB_LABELS = ['Complaints', '1st Modifiers', '2nd Modifiers'];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [legendOpen, setLegendOpen] = useState(false);

  const searchResults = useSearch(allSections, searchQuery);
  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f7]">
      <Header onInfoClick={() => setLegendOpen(true)} />

      <div className="sticky top-0 z-20">
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        {!isSearching && (
          <TabBar tabs={TAB_LABELS} activeIndex={activeTab} onChange={setActiveTab} />
        )}
      </div>

      {isSearching ? (
        <SearchResults results={searchResults} query={searchQuery} />
      ) : (
        <main className="flex-1 px-4 pb-8 pt-1">
          <AccordionGroup
            key={activeTab}
            categories={allSections[activeTab].categories}
          />
        </main>
      )}

      <CTASLegend isOpen={legendOpen} onClose={() => setLegendOpen(false)} />
    </div>
  );
}
