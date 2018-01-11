import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import Home from "./Home";
import Genres from "./Movies/Ratings";
import Ratings from "./Movies/Ratings";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>{"  "} 
      <Link to="/movies">Movies</Link>{"  "}
      <Link to="/genres">Genres</Link>{"  "}
      <Link to="/ratings">Movies by Ratings</Link>{"  "}
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/genres" component={Genres} />
      <Route path="/ratings" component={Ratings} />
    </Switch>
  </div>
);

export default App;
