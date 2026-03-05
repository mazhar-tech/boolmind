'use client';

import { useState } from 'react';
import { CASE_OPTIONS } from '@/constants';

type CaseBarProps = {
  onSelect?: (index: number) => void;
  className?: string;
};

/**
 * Case bar: row-wise options, click to show title (testimonial-style).
 * Each row: / LABEL tag; active row shows title below.
 */
export const CaseBar = ({ onSelect, className = '' }: CaseBarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onSelect?.(index);
  };

  return (
    <div
      className={`box-border flex w-full  flex-none flex-col self-stretch border-b border-tabs-divider bg-[#05061A] ${className}`.trim()}
    >
      {CASE_OPTIONS.map(({ index, label, title }) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleSelect(index)}
            className="flex w-full flex-col items-start gap-6 border-b border-tabs-divider/50 px-5 xl:py-10 pt-10 pb-5 text-left last:border-b-0 md:px-20"
          >
            <span className="font-tags text-lg font-medium uppercase leading-[23px] tracking-[0.02em] text-nav-muted">
              / {label}
            </span>
            {isActive && (
              <h2 className="font-title text-[32px] font-medium leading-[38px] capitalize text-gray-50">
                {title}
              </h2>
            )}
          </button>
        );
      })}
    </div>
  );
};
