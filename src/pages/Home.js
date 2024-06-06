import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  // Assuming movies data is available
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Add more movies as needed
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieCard title={movie.title} id={movie.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

