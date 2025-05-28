import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  _version: 'mock'
};
globalThis.localStorage = localStorageMock;

// Ensure window is defined
globalThis.window = globalThis;

// Mock document methods used in your theme provider
Object.defineProperty(document, 'documentElement', {
  value: {
    classList: {
      toggle: vi.fn(),
    },
  },
  writable: true,
});

// mock user
globalThis.navigator = {
  userAgent: 'node.js',
  platform: 'Linux',
};

// Mock document.classList
if (!globalThis.document) {
  globalThis.document = {
    documentElement: {
      classList: {
        toggle: vi.fn(),
      },
    },
  };
};
