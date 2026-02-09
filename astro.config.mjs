// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import path from 'path';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
          alias: {
            '@': path.resolve('./src'),
          },
        },
  },
  site: 'https://sarahj.pages.dev',
  integrations: [],

  adapter: cloudflare()
});