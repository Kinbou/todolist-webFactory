import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todolist-webFactory/',
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@services': '/src/services',
      '@models': '/src/models',
      '@pages': '/src/pages',
      '@': '/src',
    },
  },
})
