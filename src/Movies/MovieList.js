import React from "react";
import { Link } from "react-router-dom";

// The movieList iterates over the array of movies and creates
// a link to each one's individual page.
const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li>
        <Link to={`/movies/${movie.title}`}>
          {movie.title} : {movie.director}: {movie.year}
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
