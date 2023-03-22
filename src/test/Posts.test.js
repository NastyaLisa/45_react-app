import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Posts from '../components/Posts.js';

describe('Posts component', () => {
  test('renders post titles', async () => {
    render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Posts/i)[0]).toBeVisible();

    const links = await screen.findAllByTestId('link');

    expect(links.length).toBeGreaterThan(0);
   
    links.forEach((link) => {
      const title = link.textContent;
    
      expect(title).not.toBe(''); 
    });
});
});
