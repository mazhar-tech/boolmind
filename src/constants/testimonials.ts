/** Testimonials section content */

export const TESTIMONIALS_HEADER = {
  tag: 'Testimonials',
  title: 'What Our Partners Say',
  description:
    'We work as an extension of your data team - from early discovery to production rollout.',
} as const;

export const TESTIMONIALS = [
  {
    id: '1',
    tag: '/ Al Data Foundations',
    solution: 'Clean reporting without manual spreadsheets',
    quote:
      'Month-end reporting used to mean downloading dozens of CSVs, stitching them in huge spreadsheets and hoping nothing broke. BoolMind AI ingested those files, unified the schemas and published a governed metrics layer into our BI tools. Close went from five days of manual work to a two-hour self-service dashboard refresh, and finance finally trusts the numbers.',
    authorName: 'Lisa Howard',
    authorRole: 'Director of FP&A, Enterprise Fintech',
    logoAlt: 'NAXECO',
    mediaImage: '/assets/images/media-image.jpg',
    videoThumb: '/assets/images/video-thumb.png',
  },
  {
    id: '2',
    tag: '/ Al Data Foundations',
    solution: 'Unified metrics layer for finance',
    quote:
      'We needed a single source of truth for our financial metrics. BoolMind AI connected our ERP, CRM and spreadsheets into one governed layer. Now our FP&A team runs reports in minutes instead of days.',
    authorName: 'James Chen',
    authorRole: 'VP of Data, Enterprise Fintech',
    logoAlt: 'NAXECO',
    mediaImage: '/assets/images/media-image.jpg',
    videoThumb: '/assets/images/video-thumb.png',
  },
  {
    id: '3',
    tag: '/ Al Data Foundations',
    solution: 'Self-service dashboards that finance trusts',
    quote:
      'Before BoolMind AI, every report was a custom build. Now we have a governed metrics layer and our teams refresh dashboards themselves. The numbers are consistent and auditable.',
    authorName: 'Sarah Miller',
    authorRole: 'Head of Analytics',
    logoAlt: 'NAXECO',
    mediaImage: '/assets/images/media-image.jpg',
    videoThumb: '/assets/images/video-thumb.png',
  },
] as const;
