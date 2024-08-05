
import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders display with correct value', () => {
  render(<Display value="123" />);
  const displayElement = screen.getByText(/123/);
  expect(displayElement).toBeInTheDocument();
});
