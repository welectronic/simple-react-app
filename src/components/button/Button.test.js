// src/components/button/Button.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('renders button and handles click', () => {
  const handleClick = jest.fn();

  render(<Button value="1" onClick={handleClick} />);

  const buttonElement = screen.getByTestId('button-1');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.mouseDown(buttonElement);
  
  expect(handleClick).toHaveBeenCalledWith('1');
});
