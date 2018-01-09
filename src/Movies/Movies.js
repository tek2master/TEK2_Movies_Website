// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import movieAPI from "./movieAPI";
// Import React Components
import Movie from "./Movie";
import MovieList from "./MovieList";

class Movies extends React.Component {
  renderMovie = props => {
    const { title } = props.match.params;
    // const title = props.match.params.title
    console.log("title: ", title);
    const movie = movieAPI.getOne(title);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <Movie director={movie.director} genre={movie.genre} year={movie.year}/>;
    }
  };

  renderMovieList = () => {
    const movies = movieAPI.getAll();
    return <MovieList movies={movies} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:title" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Movies;
