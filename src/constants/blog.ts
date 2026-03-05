/** Blog section content */

export const BLOG_HEADER = {
  tag: 'Blog',
  title: 'Latest Research & Insights',
  description:
    'We share what we learn while building data and AI systems in complex environments - from practical guides to deep dives.',
} as const;

export const BLOG_READ_MORE_LABEL = 'Read More' as const;

export type BlogPost = {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar?: string;
  date: string;
  mediaImage?: string;
  link?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Category',
    subcategory: 'Subcategory',
    title: 'From Spreadsheets To Schemas: Structuring Operational Data',
    description:
      'A step-by-step guide to turning ad-hoc spreadsheets and exports into a consistent schema that both humans and AI systems can understand.',
    authorName: 'Annette Black',
    date: 'Sep 20, 2025',
    mediaImage: '/assets/images/Blog1.png',
    link: '#',
    authorAvatar: '/assets/images/User.png',
    
  },
  {
    id: '2',
    category: 'Category',
    subcategory: 'Subcategory',
    title: 'Designing Agentic Data Quality Pipelines',
    description:
      'How to orchestrate agents that profile, validate and repair data across multiple systems without breaking governance and lineage.',
    authorName: 'Jane Cooper',
    date: 'Sep 20, 2025',
    mediaImage: '/assets/images/Blog2.png',
    link: '#',
    authorAvatar: '/assets/images/User.png',
  },
  {
    id: '3',
    category: 'Category',
    subcategory: 'Subcategory',
    title: 'Building A Canonical 360° Entity Model',
    description:
      'Patterns for resolving conflicting IDs, merging records and maintaining a trusted "golden" view of customers, patients or accounts.',
    authorName: 'Arlene McCoy',
    date: 'Sep 20, 2025',
    mediaImage: '/assets/images/Blog3.png',
    link: '#',
    authorAvatar: '/assets/images/User.png',
  },
];
