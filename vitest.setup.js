import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock localStorage
vi.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation(() => null);
vi.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation(() => {});
vi.spyOn(window.localStorage.__proto__, 'removeItem').mockImplementation(() => {});
vi.spyOn(window.localStorage.__proto__, 'clear').mockImplementation(() => {});
window.localStorage._version = 'mock-version';

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
