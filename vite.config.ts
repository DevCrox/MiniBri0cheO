import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 'base' set to './' ensures assets are loaded correctly regardless of the subdirectory 
  // the site is deployed to (e.g. username.github.io/repo-name/)
  base: './', 
  build: {
    outDir: 'dist',
  }
});