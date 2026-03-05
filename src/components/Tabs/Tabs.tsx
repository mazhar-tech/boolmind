'use client';

import { useState } from 'react';
import { TABS_ITEMS } from '@/constants';

type TabsProps = {
  items?: readonly string[];
  defaultValue?: string;
  /** When set, tab selection is controlled by the parent. */
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

/** Reusable tabs with active state, full width, divider, and gradient underline. */
export const Tabs = ({
  items = TABS_ITEMS,
  defaultValue = TABS_ITEMS[0],
  value,
  onChange,
  className = '',
}: TabsProps) => {
  const [internalActive, setInternalActive] = useState(defaultValue);
  const isControlled = value !== undefined;
  const active = isControlled ? value : internalActive;

  const handleSelect = (newValue: string) => {
    if (!isControlled) setInternalActive(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={`relative isolate h-14 w-full overflow-x-auto overscroll-x-contain scroll-smooth md:overflow-visible [-webkit-overflow-scrolling:touch] tabs-scroll ${className}`.trim()}
      role="tablist"
      aria-label="Industry tabs"
    >
      <div className="relative flex min-h-full min-w-max w-full flex-row items-end gap-0">
        {items.map(item => {
          const isActive = active === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(item)}
              className="group flex shrink-0 flex-col items-center justify-end gap-0 px-4 md:min-w-0 md:flex-1 md:shrink"
            >
              <span
                className={`font-tags mb-4 whitespace-nowrap text-center text-lg font-medium uppercase leading-6 tracking-[1px] transition-colors ${
                  isActive ? 'text-brand' : 'text-nav-muted hover:text-white'
                }`}
              >
                / {item.toUpperCase()}
              </span>
              {isActive && (
                <span
                  className=" h-[2px] w-full  bg-brand"
                  aria-hidden
                />
              )}
            </button>
          );
        })}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-tabs-divider"
          aria-hidden
        />
      </div>
    </div>
  );
};
