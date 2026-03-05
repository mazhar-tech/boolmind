/** Footer section content */

export const FOOTER_CTA = {
  tag: 'Explore',
  mobileTitle: 'If you have questions, our AI assistant will try to answer them',
  title: 'We Help You Turn Data into Decisions You Can Trust',
  description:
    'From data cleaning and standardization to agentic workflows and governance — BoolMind AI takes on the hardest part of your AI journey.',
} as const;

export const FOOTER_PRIMARY_LABEL = 'Get started' as const;
export const FOOTER_SECONDARY_LABEL = 'Talk To AI Assistant' as const;

export const FOOTER_NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
] as const;

export type FooterSocialItem = {
  label: string;
  href: string;
};

export const FOOTER_SOCIAL: FooterSocialItem[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'GitLab', href: 'https://gitlab.com' },
  { label: 'Bitbucket', href: 'https://bitbucket.org' },
];

export const FOOTER_COPYRIGHT = '© BoolMind AI, 2026. All rights reserved.' as const;
export const FOOTER_PRIVACY_LABEL = 'Privacy policy' as const;
export const FOOTER_TERMS_LABEL = 'Terms and conditions' as const;
export const FOOTER_PRIVACY_HREF = '/privacy' as const;
export const FOOTER_TERMS_HREF = '/terms' as const;

export const FOOTER_DESIGNED_BY = 'designed by' as const;
export const FOOTER_DESIGNED_AGENCY = 'league design agency' as const;
export const FOOTER_DESIGNED_AGENCY_HREF = 'https://leaguedesign.com' as const;
