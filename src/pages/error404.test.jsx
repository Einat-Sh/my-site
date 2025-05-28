import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/error404';
import { ThemeProvider } from '../context/themeProvider'; // Fixed path

describe('CV', () => {
  beforeEach(() => {
    localStorage.clear(); // Reset before each test
    document.body.className = 'light';
  });

  it('check the error image exists', () => {
    render(
      <ThemeProvider>
        <NotFoundPage />
      </ThemeProvider>
    );
    const img = screen.getByAltText('err-logo-img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/src/assets/error2.png');
  });

  it('check the error text exists', () => {
    render(
      <ThemeProvider>
        <NotFoundPage />
      </ThemeProvider>
    );

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});