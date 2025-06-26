import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  build: {
    format: 'file',
  },

  integrations: [react()],
});