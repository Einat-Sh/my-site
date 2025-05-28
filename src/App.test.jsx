import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/themeProvider'; // Fixed path
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

try{
describe('App', () => {
  beforeEach(() => {
    localStorage.clear(); // Reset before each test
    document.body.className = 'light';
  });

  it('check the navbar was created', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );
    
    const button = screen.getByTestId('navbar-test-id');
    expect(button).toBeInTheDocument();
  });

  it('check the theme button was created', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );
    
    const button = screen.getByTestId('theme-button-test-id');
    expect(button).toBeInTheDocument();
  });

  it('check the footer was created', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );
    
    const button = screen.getByTestId('footer-test-id');
    expect(button).toBeInTheDocument();
  });

  it('check the theme uses light mode by default', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(document.body).toHaveClass('light');
  });

  it('toggles to dark mode and check the background color changed', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );
    const user = userEvent.setup();
    const button = screen.getByTestId('theme-button-test-id');
    await user.click(button);
    expect(document.body).toHaveClass('dark');
  });

  it('check CVPage renders on "/" route', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it('renders error 404 on invalid route', () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/no-such-path']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
} catch(err) {
  console.error('Error caught:', err.stack || err);
  throw err;
}