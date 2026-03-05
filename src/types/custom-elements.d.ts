/** Declares Spline viewer web component for JSX so TypeScript accepts <spline-viewer>. */
import type { HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': HTMLAttributes<HTMLElement> & { url: string };
    }
  }
}
