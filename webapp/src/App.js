import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const formattedMovies = data.results.map((moviedata) => {
      return {
        id: moviedata.episode_id,
        title: moviedata.title,
        openingText: moviedata.opening_crawl,
        releaseDate: moviedata.release_date,
      };
    });
    setMovies(formattedMovies);
    setIsLoading(false);
  }

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const formattedMovies = data.results.map((moviedata) => {
  //         return {
  //           id: moviedata.episode_id,
  //           title: moviedata.title,
  //           openingText: moviedata.opening_crawl,
  //           releaseDate: moviedata.release_date,
  //         };
  //       });
  //       setMovies(formattedMovies);
  //     });
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies!</p>}
        {isLoading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

// const dummyMovies = [
//   {
//     id: 1,
//     title: 'Some Dummy Movie',
//     openingText: 'This is the opening text of the movie',
//     releaseDate: '2021-05-18',
//   },
//   {
//     id: 2,
//     title: 'Some Dummy Movie 2',
//     openingText: 'This is the second opening text of the movie',
//     releaseDate: '2021-05-19',
//   },
// ];
