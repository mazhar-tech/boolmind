import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { GlobalCursor } from '@/components/GlobalCursor';
import { fontBody, fontTags, fontTitle } from '@/libs/fonts';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: {
    icon: { url: '/favicon.ico', type: 'image/x-icon' },
  },
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

import type { RootLayoutProps } from '@/types';

export default async function RootLayout(props: RootLayoutProps) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${fontTitle.variable} ${fontBody.variable} ${fontTags.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#000008] font-sans antialiased text-white overflow-x-hidden">
        <GlobalCursor />
        <NextIntlClientProvider>
          <div className="mx-auto min-h-screen max-w-[1600px]">{props.children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
