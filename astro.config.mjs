// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://vanesalotero.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.google(),
      weights: [400, 600],
      styles: ['normal', 'italic'],
      display: 'swap',
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Manrope',
      cssVariable: '--font-manrope',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      display: 'swap',
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
