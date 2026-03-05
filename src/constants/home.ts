/** Home page dummy data and static content */

export const HOME_META = {
  title: 'Transforming Data into Insightful AI Solutions',
  description:
    'BoolMind AI helps data teams clean, standardize and orchestrate complex data so you can ship reliable AI solutions in weeks, not months.',
} as const;

export const HOME_CONTENT = {
  heading: HOME_META.title,
  intro: HOME_META.description,
} as const;
