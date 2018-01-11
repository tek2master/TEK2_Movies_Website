import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, year, image, star, genre, director }) => (
  <div>
    <div>
    <header>
        <h1>{title}</h1>
          {" "}
          <img src={image} />
    </header>
    </div>
    <div>  
      <h2> Director: {director}</h2>
      <h2> year: {year}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ultricies nunc. 
      Mauris hendrerit urna id felis imperdiet pellentesque a a est. Nulla vestibulum ornare 
      purus in tincidunt. Praesent eros lorem, viverra at facilisis sit amet, porta nec sem. 
      In feugiat finibus urna et fermentum. Nam interdum, ligula vitae dictum gravida, dolor 
      ipsum pretium tellus, et luctus sapien tellus pretium felis. Nunc vitae finibus odio, 
      vel luctus sapien. </p>

      <Link to="/movies">Back to movie listing</Link>
    </div>
  </div>
);

export default Movie;