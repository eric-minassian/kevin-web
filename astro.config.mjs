// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eric-minassian.github.io',
  base: '/kevin-web',
  vite: {
    plugins: [tailwindcss()],
  },
});
