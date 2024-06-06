import React from 'react';

const Directors = () => {
  // Assuming directors data is available
  const directors = [
    { id: 1, name: 'Director 1', movies: ['Movie 1', 'Movie 2'] },
    { id: 2, name: 'Director 2', movies: ['Movie 3', 'Movie 4'] },
    // Add more directors as needed
  ];

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;

