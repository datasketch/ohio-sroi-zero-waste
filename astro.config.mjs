import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://ousroi.datasketch.co/zero-waste',
  base: '/zero-waste',
  outDir: './dist/zero-waste',
  build: {
    assetsPrefix: process.env.PREFIX_ASSETS === 'yes' ? 'https://ousroi.datasketch.co/zero-waste' : ''
  }
});
