import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.jsx'],
    exclude: ['node_modules', 'dist'],
    setupFiles: ['./vitest.setup.js'],
    base: '/my-site/'
  }
})
