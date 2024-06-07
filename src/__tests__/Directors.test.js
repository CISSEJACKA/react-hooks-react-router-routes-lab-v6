// Import necessary functions
import { render, screen } from '@testing-library/react';
import DirectorsPage from '../components/DirectorsPage'; // Assuming this is the component you want to test
import { fetchDirectors } from '../api'; // Assuming you have a function to fetch directors from an API

// Mock the API function to return some test data
jest.mock('../api', () => ({
  fetchDirectors: jest.fn(() => Promise.resolve([
    { id: 1, name: 'Christopher Nolan', movies: ['Inception', 'Interstellar'] },
    { id: 2, name: 'Quentin Tarantino', movies: ['Pulp Fiction', 'Kill Bill'] },
  ])),
}));

// Write your tests
test("renders each director's name", async () => {
  // Render the component
  render(<DirectorsPage />);

  // Fetch directors
  const directors = await fetchDirectors();

  // Check if each director's name is rendered
  for (const director of directors) {
    const directorElement = await screen.findByText(director.name, { exact: false });
    expect(directorElement).toBeInTheDocument();
  }
});

test('renders a <li /> for each movie', async () => {
  // Render the component
  render(<DirectorsPage />);

  // Fetch directors
  const directors = await fetchDirectors();

  // Check if each movie is rendered for each director
  for (const director of directors) {
    for (const movie of director.movies) {
      const movieElement = await screen.findByText(movie, { exact: false });
      expect(movieElement).toBeInTheDocument();
      expect(movieElement.tagName).toBe('LI');
    }
  }
});


