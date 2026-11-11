// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// @ts-ignore
const siteUrl = (typeof process !== 'undefined' ? process.env?.PUBLIC_SITE_URL : '')?.trim();

// https://astro.build/config
export default defineConfig({
  site: siteUrl && siteUrl.startsWith('http') ? siteUrl : undefined,
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
