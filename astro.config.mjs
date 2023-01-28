import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue(), tailwind()],
  adapter: netlify()
});