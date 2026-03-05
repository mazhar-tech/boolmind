/**
 * Props for the root layout under [locale].
 */

export type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
