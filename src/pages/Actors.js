import React from 'react';

const Actors = () => {
  // Assuming actors data is available
  const actors = [
    { id: 1, name: 'Actor 1', movies: ['Movie 1', 'Movie 2'] },
    { id: 2, name: 'Actor 2', movies: ['Movie 3', 'Movie 4'] },
    // Add more actors as needed
  ];

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;

