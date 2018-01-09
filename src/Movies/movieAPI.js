const movies = [
{ year: "(1994)", title: "The Shawshank Redemption", star: "Tim Robbins", director: "Frank Darabont", rating: "R | 142 min", genre: "drama" },
{ year: "(1972)", title: "The Godfather", star: "Al Pacino", director: "Francis Ford Coppola",rating: "R | 175 min",  genre: "drama" },
{ year: "(1994)", title: "Pulp Fiction", star: "Samuel Jackson", director: "Quentin Tarantino",rating: "R | 154 min",  genre: "drama" },
{ year: "(2003)", title: "The Lord of the Rings: The Return of the King", star: "Elijah Wood", director: "Peter Jackson",rating: "PG - 13 | 201 min",  genre: "Fantasy" },
{ year: "(2008)", title: "The Dark Knight", star: "Christian Bale", director: "Christopher Nolan", rating: "PG - 13 | 152 min",  genre: "action" },
{ year: "(2010)", title: "Inception", star: "Leonardo DiCaprio", director: "Christopher Nolan",rating: "PG - 13 | 148 min",  genre: "sci - fi" },
{ year: "(1999)", title: "Fight Club", star: "Brad Pitt", director: "David Fincher",rating: "R | 139 min",  genre: "drama" },
{ year: "(1999)", title: "The Matrix", star: "Keanu Reeves", director: "Lana & Lilly Wachowski",rating: "R | 136 min",  genre: "Sci - Fi" }
];

const getAll = () => movies;

const getOne = title => movies.find(movie => movie.title === title);

export default {
  getOne,
  getAll
};
