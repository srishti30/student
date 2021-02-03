import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Srishti",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Karnataka" },
    numberInStock: 8,
    dailyRentalRate: 100,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Yash",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Karnataka" },
    numberInStock: 9,
    dailyRentalRate:91
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Antra",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "general" },
    numberInStock: 1,
    dailyRentalRate: 98
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Sahana",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "non-karnataka" },
    numberInStock: 5,
    dailyRentalRate: 100
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Apeksha",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "non-karanatka" },
    numberInStock: 2,
    dailyRentalRate: 86
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Sanjana",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "non-karnataka" },
    numberInStock: 6,
    dailyRentalRate: 74
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Raghav",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "general" },
    numberInStock: 4,
    dailyRentalRate: 68
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Preet",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "general" },
    numberInStock: 3,
    dailyRentalRate: 98
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Somya",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Karnataka" },
    numberInStock: 7,
    dailyRentalRate: 86
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
