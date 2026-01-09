// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eric-minassian.github.io',
  base: process.env.CI ? '/kevin-web' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
