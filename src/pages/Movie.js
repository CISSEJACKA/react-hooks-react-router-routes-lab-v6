import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();

  // Fetch movie details based on id
  // Assuming movie data is available
  const movie = { id: 1, title: 'Movie Title', time: '2 hours', genres: ['Action', 'Drama'] };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
    </div>
  );
}

export default Movie;

