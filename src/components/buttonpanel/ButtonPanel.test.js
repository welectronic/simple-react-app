// src/components/buttonpanel/ButtonPanel.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ButtonPanel from './ButtonPanel';

test('renders button panel and handles clicks', () => {
  const handleClick = jest.fn();

  render(<ButtonPanel onClick={handleClick} selectedOperator={null} />);

  const buttonElement = screen.getByTestId('button-1');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.mouseDown(buttonElement);
  
  expect(handleClick).toHaveBeenCalledWith('1');
});
