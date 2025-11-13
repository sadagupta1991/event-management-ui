import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/event-management-ui/', // Set the base path for GitHub Pages deployment
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist/event-management-ui',
    base: '/event-management-ui/', // Explicitly set base for build
  },
})
