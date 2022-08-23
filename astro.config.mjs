import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [ViteYaml()],
  }
});