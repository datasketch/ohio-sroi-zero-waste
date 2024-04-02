import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  base: '/zero-waste',
  site: 'https://ousroi.datasketch.co/zero-waste',
  build: {
    assetsPrefix: process.env.PREFIX_ASSETS === 'yes' ? 'https://ousroi.datasketch.co/zero-waste' : ''
  }
});
