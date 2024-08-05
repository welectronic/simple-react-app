import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Display component', () => {
  render(<App />);
  const displayElement = screen.getByTestId('calculator-display');
  expect(displayElement).toBeInTheDocument();
  expect(displayElement).toHaveTextContent('0');
});

test('renders ButtonPanel component', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('button-1');
  expect(buttonElement).toBeInTheDocument();
});
