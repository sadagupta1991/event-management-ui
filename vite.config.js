import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/event-management-ui/', // Set the base path for GitHub Pages deployment
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  server: {
    port: 3000,
  },
})
