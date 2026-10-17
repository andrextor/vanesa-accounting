// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://www.vanesalotero.com';

export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } } })],
  fonts: [
    {
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
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
