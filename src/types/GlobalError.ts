/**
 * Props for the global error boundary component.
 */

export type GlobalErrorProps = {
  error: Error & { digest?: string };
};
