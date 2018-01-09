import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, year, director }) => (
  <div>
    <div>
      <h1>{title}</h1>
      <h2> Director: {director}</h2>
      <h2> year: {year}</h2>
      <Link to="/movies">Back</Link>
    </div>
  </div>
);

export default Movie;