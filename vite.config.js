import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['framer-motion', 'lucide-react'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'state': ['zustand'],
          'i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
})
