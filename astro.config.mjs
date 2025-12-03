import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://2010youy01.github.io',
  integrations: [sitemap()]
});