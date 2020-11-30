import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Renders Header options and logo', () => {
  render(<Header />);
  expect(screen.getByAltText("logo")).toBeInTheDocument();
  expect(screen.getByText("Purchase")).toBeInTheDocument();
  expect(screen.getByText("My Orders")).toBeInTheDocument();
  expect(screen.getByText("Sell")).toBeInTheDocument();
});

