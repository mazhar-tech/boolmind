'use client';

import { useEffect, useState } from 'react';

type UseCaseSectionTabTransitionParams = {
  /** Initial active tab value. */
  initialTab: string;
};

type UseCaseSectionTabTransitionReturn = {
  /** Currently active tab. */
  activeTab: string;
  /** Previous tab (for blurred back layer); null when not transitioning. */
  previousTab: string | null;
  /** Whether the blurred back layer should show blur (after rAF). */
  blurVisible: boolean;
  /** Call when user selects a new tab. */
  handleTabChange: (newTab: string) => void;
  /** Call when the slide-up animation ends (e.g. onAnimationEnd). */
  handleSlideAnimationEnd: () => void;
  /** True when the blurred previous-tab layer should be rendered. */
  showBlurredBack: boolean;
};

/**
 * Manages tab transition state for CaseSection: previous tab blurred in back,
 * new tab sliding up from bottom, and cleanup when animation ends.
 */
export function useCaseSectionTabTransition(
  params: UseCaseSectionTabTransitionParams
): UseCaseSectionTabTransitionReturn {
  const { initialTab } = params;
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [previousTab, setPreviousTab] = useState<string | null>(null);
  const [blurVisible, setBlurVisible] = useState(false);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    setBlurVisible(false);
    setPreviousTab(activeTab);
    setActiveTab(newTab);
  };

  useEffect(() => {
    if (previousTab === null) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setBlurVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [previousTab]);

  const handleSlideAnimationEnd = () => {
    setPreviousTab(null);
    setBlurVisible(false);
  };

  const showBlurredBack = previousTab !== null && previousTab !== activeTab;

  return {
    activeTab,
    previousTab,
    blurVisible,
    handleTabChange,
    handleSlideAnimationEnd,
    showBlurredBack,
  };
}
