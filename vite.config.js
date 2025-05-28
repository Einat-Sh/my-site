import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

const isTest = process.env.NODE_ENV === 'test'

export default defineConfig({
  plugins: isTest ? [react()] : [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.jsx'],
    exclude: ['node_modules', 'dist'],
    setupFiles: ['./vitest.setup.js']
  }
})
