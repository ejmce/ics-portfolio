import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy /api requests to the Go backend during development.
    // This means React components use "/api/..." — no hardcoded ports.
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
