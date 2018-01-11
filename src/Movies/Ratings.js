import React from "react";
import movieAPI from "./movieAPI";
import MovieList from "./MovieList";
// import RenderAMovie from "./RenderAMovie";
import Stars from "./Stars";

class Ratings extends React.Component {
  render() {
    return <Stars message={`Choose a movie by rating`} />;
  }
}

export default Ratings;
