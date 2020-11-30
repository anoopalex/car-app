import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

test('Renders Header options and logo', () => {
  render(<Router history={history}><NotFound/></Router>)
  expect(screen.getByText("404 - Not Found")).toBeInTheDocument();
  expect(screen.getByText("Sorry, The page you are looking for does not exist")).toBeInTheDocument();
  expect(screen.getByText(/You can always go back to the/i)).toBeInTheDocument();
});

