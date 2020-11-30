import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Header option', () => {
  render(<App />);
  const PurchaseOption = screen.getByText("Purchase");
  expect(PurchaseOption).toBeInTheDocument();
});

test('Renders Footer', () => {
  render(<App />);
  const footerText = screen.getByText("© AUTO1 Group 2018");
  expect(footerText).toBeInTheDocument();
});
