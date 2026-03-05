'use client';

import { TABS_ITEMS } from '@/constants';
import { CaseSection } from '@/components/CaseSection';
import { Tabs } from '@/components/Tabs';
import { useCaseSectionTabTransition } from '@/hooks/animations';

export const HomeTabsWithCaseSection = () => {
  const {
    activeTab,
    previousTab,
    blurVisible,
    handleTabChange,
    handleSlideAnimationEnd,
    showBlurredBack,
  } = useCaseSectionTabTransition({ initialTab: TABS_ITEMS[0] });

  return (
    <>
      <div className=" xl:pt-6">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
        />
      </div>
      <div className="relative overflow-hidden">
        {showBlurredBack && previousTab !== null && (
          <div
            className={`case-section-blur-back absolute inset-0 z-0 overflow-hidden ${blurVisible ? 'visible' : ''}`}
            aria-hidden
          >
            <CaseSection activeTab={previousTab} />
          </div>
        )}
        <div
          key={activeTab}
          className="relative z-10 animate-slide-up-from-bottom"
          onAnimationEnd={handleSlideAnimationEnd}
        >
          <CaseSection activeTab={activeTab} />
        </div>
      </div>
    </>
  );
};
