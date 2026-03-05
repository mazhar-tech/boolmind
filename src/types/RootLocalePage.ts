/**
 * Props for the root locale page that redirects to /home.
 */

export type RootLocalePageProps = {
  params: Promise<{ locale: string }>;
};
