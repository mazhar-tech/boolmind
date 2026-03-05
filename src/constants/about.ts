/** About section content and pyramid Spline scene */

export const ABOUT_HEADER = {
  tag: 'About',
  title: "Built By Data Engineers, For Data-Driven Enterprises",
} as const;

export const ABOUT_RIGHT_TAG = 'Certifications' as const;

/** Placeholder labels for certification/ISO boxes (e.g. ISO 27001, SOC 2, GDPR). */
export const ABOUT_CERT_LABELS = ['ISO 27001', 'SOC 2', 'GDPR'] as const;

export type AboutActionCard = {
  id: string;
  label: string;
  href: string;
  /** 'default' | 'brand' (middle card accent) */
  variant: 'default' | 'brand';
};

export const ABOUT_ACTION_CARDS: AboutActionCard[] = [
  { id: '1', label: 'Transforming Data into Insightful AI Solutions', href: '#solutions', variant: 'default' },
  { id: '2', label: 'Analytics ML & Decider Intelligence', href: '#analytics', variant: 'brand' },
  { id: '3', label: 'Knowledge Graphs & Enterprise Search', href: '#knowledge-graphs', variant: 'default' },
];

export const ABOUT_STAT = {
  headline: "100+ Organizations we've supported on their data journey",
  description:
    'Lorem ipsum dolor sit amet consectetur. Morbi nec et id bibendum faucibus a est. Commodo at pellentesque massa est et ac scelerisque. In auctor dignissim proin mi at eu blandit cursus. Nisi adipiscing eget at nisl cras.',
} as const;

/** Pyramid 3D scene (About section). */
export const ABOUT_PYRAMID_SCENE_URL =
  'https://prod.spline.design/45cnYTHTnKT96ltv/scene.splinecode' as const;

export const ABOUT_PYRAMID_VIEWER_SCRIPT =
  'https://unpkg.com/@splinetool/viewer@1.12.16/build/spline-viewer.js' as const;
