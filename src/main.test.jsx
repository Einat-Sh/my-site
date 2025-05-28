import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/themeProvider'; // Fixed path
import { MemoryRouter } from 'react-router-dom';


describe('Test main.test', () => {
  it('renders App', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );
  });
});