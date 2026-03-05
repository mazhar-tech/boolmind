import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

/** Validated environment variables. Use this instead of process.env in application code. */
export const Env = createEnv({
  server: {
    ARCJET_KEY: z.string().startsWith('ajkey_').optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    NEXT_PUBLIC_SENTRY_DISABLED: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
  },
  runtimeEnv: {
    ARCJET_KEY: process.env.ARCJET_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DISABLED: process.env.NEXT_PUBLIC_SENTRY_DISABLED,
    NODE_ENV: process.env.NODE_ENV,
  },
});
