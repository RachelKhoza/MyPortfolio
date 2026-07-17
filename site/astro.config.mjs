import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Netlify sets URL during production builds. Keep the fallback stable until a custom domain is attached.
const SITE = process.env.URL || 'https://rachelkhoza.netlify.app';

export default defineConfig({
  site: SITE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
