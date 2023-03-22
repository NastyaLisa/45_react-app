import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from "../App";

describe('TEST APP', () => {
  let container;

  beforeEach(() => {
    const { container: appContainer } = 
    render(
    <App />
    );
    container = appContainer;
  });

  test.each([
    ['Main', 'We have a lot of posts'],
    ['Posts', 'View our posts'],
    ['Login', 'Subscribe to our updates']
  ])
  ('Menu %s link work', (linkText, expectedText) => {
    fireEvent.click(screen.getAllByText(linkText)[0]);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});





