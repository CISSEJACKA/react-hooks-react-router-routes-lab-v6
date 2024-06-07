// src/__tests__/Actors.test.js
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Actors from '../pages/Actors';

test("renders each actor's name", () => {
  const { container } = render(<Actors />);
  const h1 = container.querySelector('h1');
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

