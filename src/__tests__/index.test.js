// src/__tests__/index.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from '../routes';

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/actors'] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/actors/i)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/directors'] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/directors/i)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', () => {
  const id = 1;
  const router = createMemoryRouter(routes, { initialEntries: [`/movie/${id}`] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/movie/i)).toBeInTheDocument();
});

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/bad-route'] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/error page/i)).toBeInTheDocument();
});

