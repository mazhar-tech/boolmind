import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import { AppConfig } from '@/utils/AppConfig';

/**
 * Root locale page: redirects to the home page so the first page is /home (or /[locale]/home).
 * @param props - Page props.
 * @param props.params - Promise of locale segment params.
 */
import type { RootLocalePageProps } from '@/types';

export default async function RootLocalePage(props: RootLocalePageProps) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    return null;
  }

  setRequestLocale(locale);

  const pathPrefix
    = locale === AppConfig.defaultLocale ? '' : `/${locale}`;
  redirect(`${pathPrefix}/home`);
}
