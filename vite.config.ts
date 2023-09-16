import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@models': '/src/models',
      '@pages': '/src/pages',
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
