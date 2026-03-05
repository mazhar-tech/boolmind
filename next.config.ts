import path from 'node:path';
import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  outputFileTracingRoot: path.join(process.cwd()),
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/react-spline': path.join(
        process.cwd(),
        'node_modules/@splinetool/react-spline/dist/react-spline.js',
      ),
    };
    return config;
  },
};

let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  configWithPlugins = withSentryConfig(configWithPlugins, {
    org: process.env.SENTRY_ORGANIZATION,
    project: process.env.SENTRY_PROJECT,
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    webpack: {
      reactComponentAnnotation: { enabled: true },
      treeshake: { removeDebugLogging: true },
    },
    telemetry: false,
  });
}

export default configWithPlugins;
