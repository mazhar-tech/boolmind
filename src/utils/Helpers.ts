import { Env } from '@/libs/Env';
import { routing } from '@/libs/I18nRouting';

/**
 * Returns the base URL for the application.
 * Prefers Env.NEXT_PUBLIC_APP_URL, then Vercel deployment URLs, then localhost.
 */
export const getBaseUrl = () => {
  if (Env.NEXT_PUBLIC_APP_URL) {
    return Env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

/**
 * Returns the locale-prefixed path for a given URL and locale.
 * @param url - Path without locale prefix (e.g. '/about').
 * @param locale - Locale code (e.g. 'en', 'fr').
 * @returns Path with locale prefix when not the default locale.
 */
export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

/** Returns true when running on the server. */
export const isServer = () => {
  return typeof window === 'undefined';
};
