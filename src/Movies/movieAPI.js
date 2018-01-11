const movies = [
  { 
    id: "001", 
   year: "(1994)", 
   title: "The Shawshank Redemption", 
   star: "Tim Robbins", 
   director: "Frank Darabont", 
   rating: "R | 142 min", 
   genre: "drama", 
   image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", 
   imdb: "http://www.imdb.com/title/tt0111161/?ref_=adv_li_i" 
  },

  { 
    id: "002", 
    year: "(1972)", 
    title: "The Godfather", 
    star: "Al Pacino", 
    director: "Francis Ford Coppola",
    rating: "R | 175 min",  
    genre: "drama", 
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg,",
    imdb: "http://www.imdb.com/title/tt0068646/?ref_=adv_li_i"
  },

  { 
    id: "003", 
    year: "(1994)", 
    title: "Pulp Fiction", 
    star: "Samuel Jackson", 
    director: "Quentin Tarantino",
    rating: "R | 154 min",  
    genre: "drama", 
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdb: "http://www.imdb.com/title/tt0110912/?ref_=adv_li_i"
    },

  { 
    id: "004", 
    year: "(2003)", 
    title: "The Lord of the Rings: The Return of the King", 
    star: "Elijah Wood", director: "Peter Jackson",
    rating: "PG - 13 | 201 min",  
    genre: "Fantasy",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdb: "http://www.imdb.com/title/tt0167260/?ref_=adv_li_i"
    },

  { 
    id: "005", 
    year: "(2008)", 
    title: "The Dark Knight", 
    star: "Christian Bale", 
    director: "Christopher Nolan", 
    rating: "PG - 13 | 152 min",  
    genre: "action", 
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdb: "http://www.imdb.com/title/tt0468569/?ref_=adv_li_i"
  },

  { 
    id: "006", 
    year: "(2010)", 
    title: "Inception", 
    star: "Leonardo DiCaprio", 
    director: "Christopher Nolan",
    rating: "PG - 13 | 148 min", 
     genre: "sci - fi", 
     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
     imdb: "http://www.imdb.com/title/tt1375666/?ref_=adv_li_i"
     },

  { 
    id: "007", 
    year: "(1999)", 
    title: "Fight Club", 
    star: "Brad Pitt", 
    director: "David Fincher",
    rating: "R | 139 min",  
    genre: "drama", 
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdb: "http://www.imdb.com/title/tt0137523/?ref_=adv_li_i"
  },

  { 
    id: "008", 
    year: "(1999)", 
    title: "The Matrix", 
    star: "Keanu Reeves", 
    director: "Lana & Lilly Wachowski",
    rating: "R | 136 min",  
    genre: "Sci - Fi", 
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdb: "http://www.imdb.com/title/tt0133093/?ref_=adv_li_i"
  }
];

const getAll = () => movies;

const getOne = title => movies.find(movie => movie.title === title);

export default {
  getOne,
  getAll
};
