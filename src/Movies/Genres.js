import React from "react";
import movieAPI from "./movieAPI";
import MovieList from "./MovieList";

class Genres extends React.Component {
  constructor(props) {
    console.log("properties: ", props)
    super(props);
    console.log("super props", props)

    this.state = {
      selectedGenre: ""
    };
  }

  handleSelect = e => {
    this.setState({ selectedGenre: e.target.value });
  };

  render() {
    const { selectedGenre } = this.state;

    const genres = movieAPI.getAllGenres();
    let getMoviesByGenre = movieAPI.getMoviesByGenre(selectedGenre);

    return (
      <div>
        <div>
          <select value={selectedGenre} onChange={this.handleSelect}>
            {["", ...genres].map(genre => (
              <option value={genre}>{genre}</option>
            ))}
          </select>

          <MovieList movies={getMoviesByGenre} />
        </div>

        <button onClick={console.log(this.state)}>State</button>
      </div>
    );
  }
}

export default Genres;
