import { useState } from 'react';
import type { Category } from '../data/ctasData';
import AccordionItem from './AccordionItem';

interface AccordionGroupProps {
  categories: Category[];
}

export default function AccordionGroup({ categories }: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-2">
      {categories.map((category, i) => (
        <AccordionItem
          key={category.name}
          category={category}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}
