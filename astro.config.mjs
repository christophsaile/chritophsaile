import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import svelte from '@astrojs/svelte';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), svelte(), mdx()],
  output: 'hybrid',
  adapter: netlify(),
  image: {
    domains: ['open.spotify.com', 'i.scdn.co']
  }
});