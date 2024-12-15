// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this points to the correct base
  server: {
    open: true,
    // Configure server to return index.html for unknown routes
    hmr: true,
  },
});
