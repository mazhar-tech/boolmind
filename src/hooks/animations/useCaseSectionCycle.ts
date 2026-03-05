'use client';

import { useEffect, useState } from 'react';

const CYCLE_DURATION_MS = 6000;

type UseCaseSectionCycleParams = {
  /** Number of description steps (used to reset position when cycling past end). */
  itemCount: number;
  /** When this changes, position resets to 0 (e.g. active tab). */
  activeTab: string;
  /** Interval in ms between steps. */
  cycleDurationMs?: number;
};

type UseCaseSectionCycleReturn = {
  /** Current step index (0-based). */
  position: number;
  /** When true, transform transition is disabled (used when snapping position back to 0). */
  noTransition: boolean;
  /** Call when the description list transition ends; pass current position to check for cycle reset. */
  handleTransitionEnd: (currentPosition: number) => void;
  /** Duration in ms for one step (for passing to scheme cards). */
  cycleDurationMs: number;
};

/**
 * Manages the CaseSection carousel: steps through items on an interval,
 * resets on tab change, and handles loop (position back to 0) without transition flash.
 */
export function useCaseSectionCycle(
  params: UseCaseSectionCycleParams
): UseCaseSectionCycleReturn {
  const {
    itemCount,
    activeTab,
    cycleDurationMs: cycleDurationMsParam = CYCLE_DURATION_MS,
  } = params;

  const [position, setPosition] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  useEffect(() => {
    setPosition(0);
    setNoTransition(false);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((p) => p + 1);
    }, cycleDurationMsParam);
    return () => clearInterval(interval);
  }, [cycleDurationMsParam]);

  const handleTransitionEnd = (currentPosition: number) => {
    if (currentPosition >= itemCount) {
      setNoTransition(true);
      setPosition(0);
    }
  };

  useEffect(() => {
    if (!noTransition) return;
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false));
    });
    return () => cancelAnimationFrame(t);
  }, [noTransition]);

  return {
    position,
    noTransition,
    handleTransitionEnd,
    cycleDurationMs: cycleDurationMsParam,
  };
}
