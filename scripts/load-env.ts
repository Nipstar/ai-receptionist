// Load .env, .env.local etc. the same way `next build` does, so scripts see the same NEXT_PUBLIC_* values.
// Import this first: ES imports run in order, before site.config.ts reads process.env.
import nextEnv from '@next/env';

// dev=false: the same files `next build` loads (.env, .env.production, .env.local, ...).
nextEnv.loadEnvConfig(process.cwd(), false, { info: () => {}, error: console.error });
