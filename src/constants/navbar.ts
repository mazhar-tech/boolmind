/** Navbar dummy data and config */

export const NAV_LINKS = [
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Industries', href: '#industries' },
  { label: 'Research & Innovations', href: '#research-and-innovations' },
  { label: 'Company', href: '#company' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Talk to us', href: '#talk-to-us' },
] as const;

export const NAV_CTA = {
  label: 'Get Started',
  href: '#get-started',
} as const;

export const NAV_LOGO = {
  src: '/assets/svgs/Logo.svg',
  alt: 'BoolMind AI',
} as const;
