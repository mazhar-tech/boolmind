import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

/** App-wide configuration. Update for your project. */
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
