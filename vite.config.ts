import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  // "/" for the real domain; the GitHub Pages demo builds with
  // BASE_PATH=/Beauty-by-Betito-website-demo/ (see .github/workflows/pages.yml).
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  build: {
    // Photos and the hero film live in public/media and are served as-is.
    target: 'es2020',
  },
});
