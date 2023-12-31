import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ['src/setupTests.ts'],
      globals: true,
      environment: 'jsdom',
      reporters: ['default', 'html'],
      coverage: {
        enabled: true,
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
)
