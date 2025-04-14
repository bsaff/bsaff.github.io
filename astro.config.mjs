// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'file', // This forces Astro to generate .html files with full names
  },
});
