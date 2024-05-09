import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    lit(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
