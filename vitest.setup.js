import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn().mockImplementation(() => null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  _version: 'mock'
};
globalThis.localStorage = localStorageMock;
globalThis.window.localStorage = localStorageMock;
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

// mock pointerEvent for userEvent
if (typeof PointerEvent === 'undefined') {
  globalThis.PointerEvent = function () {};
}

// mock HTMLElement for userEvent 
globalThis.HTMLElement = globalThis.HTMLElement || function () {};

// mock window.matchMedia for userEvent
globalThis.window.matchMedia = globalThis.window.matchMedia || function () {
  return {
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  };
};

// explicitly define _version
Object.defineProperty(globalThis.localStorage, '_version', {
  value: 'mock-version',
  writable: true,
});