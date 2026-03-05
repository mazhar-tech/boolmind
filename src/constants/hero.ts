/** Hero section dummy data and static content */

export const HERO_TITLE = {
  main: 'Transforming Data ',
  highlight: 'Into Insightful AI Solutions',
} as const;
export const AiAssistantTitle = {
  main: 'Ask the AI Assistant Any Question',
  highlight: 'To Help You With Your Data',
} as const;

export const HERO_INTRO
  = 'BoolMind AI helps data teams clean, standardize and orchestrate complex data so you can ship reliable AI solutions in weeks, not months.' as const;

export const HERO_CARDS = [
  {
    id: 'banking',
    title: 'Banking',
    description:
      'Disjointed product data across channels causes inconsistent pricing, search, and GenAI.',
    position: { left: 24.54, top: 317.83 },
  },
  {
    id: 'retail',
    title: 'Retail and Marketplaces',
    description:
      'Messy data and MCCs cause wrong spend analytics and AI hallucinations.',
    position: { left: -31.46, top: 584.83 },
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Fragmented data blocks Patient 360 views and safe clinical LLM usage.',
    position: { left: 283.54, top: 484.83 },
  },
] as const;

/** Single hero feature card shape */
export type HeroCardItem = (typeof HERO_CARDS)[number];

/** Slot positions for hero card carousel (top, bottom, center) */
export const HERO_SLOT_TOP = HERO_CARDS[0].position;
export const HERO_SLOT_CENTER = HERO_CARDS[2].position;
export const HERO_SLOT_BOTTOM = HERO_CARDS[1].position;

export const ASK_AI_LABEL = 'Ask AI Assistant' as const;

/** Duration (ms) before hero cards advance. Must be longer than SchemeCard path animation (last path ends ~5.9s). */
export const HERO_PHASE_DURATION_MS = 6500;

export const WHAT_YOU_GET = {
  title: 'What You Get',
  steps: [
    'Ingestion & Profiling',
    'Identity ML And Transform',
    'Build Patient Graph',
  ],
  conclusion:
    'Trusted Patient 360 Data That Powers Clinical AI Agents And Analytics.',
} as const;
