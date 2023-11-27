const express = require("express");
const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", movieByIdHandler);

function movieByIdHandler(req, res) {
  const movieId = parseInt(req.params.id);
  let theMovie = null;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === movieId) {
      theMovie = movies[i];
    }
  }
  if (theMovie) {
    res.status(200).json(theMovie);
  } else {
    res.status(404).json("Not found");
  }
}

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
