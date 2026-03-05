/** Evolution section content */

export const EVOLUTION = {
  tag: 'Evolution',
  title: 'What You Will Get',
  description:
    "We focus on the boring but critical part of AI — making data reliable, traceable and easy to use. Here’s what changes once BoolMind AI is in place.",
} as const;

/** Left block: Before state */
export const EVOLUTION_BEFORE = {
  tag: '/Before BoolMind.AI',
  headline: 'Fragmented Data With Noisy, Unreliable Semantics.',
} as const;

/** Right block: After state */
export const EVOLUTION_AFTER = {
  tag: '/After BoolMind.AI',
  headline: 'Unified Data With Clear, Reliable Semantics.',
} as const;

/** Hint row: same description for each of the three hints (cube, sphere, pyramid) */
export const EVOLUTION_HINT_TEXT =
  'A single data unit in JSON/CSV/XML format that lacks clear structure and unified' as const;

export const EVOLUTION_HINTS = [
  { id: 'cube' as const, icon: '/assets/svgs/Cube.svg', label: EVOLUTION_HINT_TEXT },
  { id: 'sphere' as const, icon: '/assets/svgs/Circle.svg', label: EVOLUTION_HINT_TEXT },
  { id: 'pyramid' as const, icon: '/assets/svgs/Triangle.svg', label: EVOLUTION_HINT_TEXT },
] as const;
