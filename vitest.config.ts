import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  test: {
    globals: true,
    include: [
      'tests/**/*.test.ts',
      'src/**/*.test.ts'
    ],
    exclude: [
      'tests/**/*.bench.ts',
      'src/**/*.bench.ts'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts']
    }
  }
})
