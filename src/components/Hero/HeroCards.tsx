'use client';

import type { HeroCardItem } from '@/constants';
import { useEffect, useState } from 'react';
import { FeatureCard } from '@/components/FeatureCard/FeatureCard';
import {
  HERO_CARDS,
  HERO_PHASE_DURATION_MS,
  HERO_SLOT_BOTTOM,
  HERO_SLOT_CENTER,
  HERO_SLOT_TOP,
} from '@/constants';

/** Wait for SchemeCard path animation to finish before advancing hero cards. */
const PHASE_DURATION_MS = HERO_PHASE_DURATION_MS;

type Slot = 'top' | 'center' | 'bottom';

type PhaseConfig = {
  top: HeroCardItem['id'];
  center: HeroCardItem['id'];
  bottom: HeroCardItem['id'];
  entering: HeroCardItem['id'];
  exiting: HeroCardItem['id'];
  from: 'top' | 'bottom';
};

const CYCLE: PhaseConfig[] = [
  {
    top: 'banking',
    center: 'healthcare',
    bottom: 'retail',
    entering: 'banking',
    exiting: 'healthcare',
    from: 'top',
  },
  {
    top: 'healthcare',
    center: 'banking',
    bottom: 'retail',
    entering: 'retail',
    exiting: 'banking',
    from: 'bottom',
  },
  {
    top: 'healthcare',
    center: 'retail',
    bottom: 'banking',
    entering: 'healthcare',
    exiting: 'retail',
    from: 'top',
  },
  {
    top: 'retail',
    center: 'healthcare',
    bottom: 'banking',
    entering: 'banking',
    exiting: 'healthcare',
    from: 'bottom',
  },
];

const SLOT_POSITIONS: Record<Slot, { left: number; top: number }> = {
  top: HERO_SLOT_TOP,
  center: HERO_SLOT_CENTER,
  bottom: HERO_SLOT_BOTTOM,
};

/**
 * Returns phase config for any index (uses modulo). CYCLE is always non-empty.
 * @param index - The phase index.
 */
const getPhaseConfig = (index: number): PhaseConfig =>
  CYCLE[index % CYCLE.length] as PhaseConfig;

export type HeroCardsProps = {
  icons: Record<HeroCardItem['id'], React.ReactNode>;
  onCenterCardChange?: (centerId: HeroCardItem['id']) => void;
  /** 'column' = single column (mobile/tablet above scheme card); 'absolute' = animated top/center/bottom (lg+) */
  variant?: 'column' | 'absolute';
  /** Whether the component is rendered on the AI assistant page. */
  isAiMode?: boolean;
};

/**
 * Renders hero feature cards in a loop: one card at a time moves from top or bottom to center;
 * the current center card exits right (shrinks and fades like LeftPathEffect), then the cycle repeats.
 * @param props - The component props.
 */
export const HeroCards = (props: HeroCardsProps) => {
  const { icons, onCenterCardChange, variant = 'absolute' } = props;
  const [phase, setPhase] = useState(0);
  const [previousExiting, setPreviousExiting] = useState<HeroCardItem['id'] | null>(null);
  const [previousEntering, setPreviousEntering] = useState<HeroCardItem['id'] | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((p) => {
        const cfg = getPhaseConfig(p);
        setPreviousExiting(cfg.exiting);
        setPreviousEntering(cfg.entering);
        return (p + 1) % CYCLE.length;
      });
    }, PHASE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    onCenterCardChange?.(getPhaseConfig(phase).center);
  }, [phase, onCenterCardChange]);

  const config = getPhaseConfig(phase);
  const getSlot = (id: HeroCardItem['id']): Slot =>
    config.top === id ? 'top' : config.center === id ? 'center' : 'bottom';

  const getAnimationClass = (id: HeroCardItem['id']): string => {
    if (config.entering === id) {
      if (id === previousEntering) {
        return config.from === 'top'
          ? 'hero-card-enter-from-left-then-to-center-top'
          : 'hero-card-enter-from-left-then-to-center-bottom';
      }
      return config.from === 'top'
        ? 'hero-card-animate-swipe-top'
        : 'hero-card-animate-swipe-bottom';
    }
    if (config.exiting === id) {
      if (phase === 0 && id === previousExiting) {
        return 'hero-card-exit-right-from-hidden';
      }
      return 'hero-card-exit-right';
    }
    const slot = getSlot(id);
    if ((slot === 'top' || slot === 'bottom') && id === previousExiting) {
      return 'hero-card-enter-from-left';
    }
    return 'hero-card-reset';
  };

  const cardList = HERO_CARDS.map((card) => {
    const slot = getSlot(card.id);
    const pos = SLOT_POSITIONS[slot];
    const animClass = getAnimationClass(card.id);

    // Apply 10px offset to the top-most card in AI mode as per user request
    const topPos = slot === 'top' && props.isAiMode ? pos.top + 100 : pos.top;

    return (
      <div
        key={card.id}
        className="absolute lg:aspect-315/100 lg:origin-top-left lg:scale-[0.68] xl:aspect-auto xl:scale-100"
        style={{
          left: `${pos.left}px`,
          top: `${topPos}px`,
        }}
      >
        <FeatureCard
          title={card.title}
          description={card.description}
          icon={icons[card.id]}
          className={animClass}
        />
      </div>
    );
  });

  /** Md only: static column above scheme card on mobile/tablet; no animation. */
  const cardListMd = HERO_CARDS.map(card => (
    <FeatureCard
      key={card.id}
      title={card.title}
      description={card.description}
      icon={icons[card.id]}
    />
  ));

  if (variant === 'column') {
    return (
      <div className="flex w-full max-w-[340px] flex-col items-center gap-3 sm:max-w-[360px] md:max-w-[380px] md:gap-4">
        {cardListMd}
      </div>
    );
  }

  return (
    <>
      {/* Animated absolute layout: lg+ only */}
      <div className="absolute top-0 left-0 z-20 hidden w-full flex-wrap justify-start gap-0 md:justify-center lg:flex">
        {cardList}
      </div>
    </>
  );
};
