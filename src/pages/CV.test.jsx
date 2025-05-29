import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CVPage from '../pages/CV';
import { ThemeProvider } from '../context/themeProvider'; // Fixed path
import { userEvent } from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('CV', () => {
  beforeEach(() => {
    localStorage.clear(); // Reset before each test
    document.body.className = 'light';
  });

  it('check the logo image exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );
    const img = screen.getByAltText('logo-img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/src/assets/logo1.jpeg');
  });

  it('check the info section exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );

    expect(screen.getByText(/Einat/i)).toBeInTheDocument();
  });

  it('check the project carousel exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );

    expect(screen.getByTestId('project-crsl-test-id')).toBeInTheDocument();
  });

  it('check the project carousel cards exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );

    const cards = screen.getAllByTestId('carousel-card');
    expect(cards.length).toBeGreaterThan(1);
  });

  it('check the project images in nested carousels exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );
    const images = screen.getAllByTestId('nested-carousel-test-id');
    expect(images.length).toBeGreaterThan(0);
  });

  it('check project carousel can switch cards to the next/previous card', async () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );
    const user = userEvent.setup();
    // check if moving from slide 1 to slide 2 works
    expect(screen.getByTestId('card-1-test-id')).toBeVisible();
    const nextButton = screen.getByLabelText('Slide 2');
    await user.click(nextButton);
    await waitFor(() =>{expect(screen.getByTestId('card-2-test-id')).toBeVisible();});
    // check if moving from slide 2 to slide 1 works
    const prevButton = screen.getByLabelText('Slide 1');
    await user.click(prevButton);
    await waitFor(() =>{expect(screen.getByTestId('card-1-test-id')).toBeVisible();});
  });

  it('check the experience section exists', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );
    
    expect(screen.getAllByText(/Yahoo/i)).toHaveLength(2);
  });

  it('check the skills section exists and contains all', () => {
    render(
      <ThemeProvider>
        <CVPage />
      </ThemeProvider>
    );

    expect(screen.getAllByTestId("skill-badge-test-id")).toHaveLength(18);
  });
});