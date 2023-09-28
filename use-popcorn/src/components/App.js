import { useEffect, useState } from "react";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import NumResults from "./num-results/NumResults";
import SearchBox from "./search-box/SearchBox";
import Loading from "./loading/Loading";
import ErrorMessage from "./error-message/ErrorMessage";
import MovieList from "./movie-list/MovieList";
import WatchedMovieBox from "./watched-movie-box/WatchedMovieBox";
import "./App.css";
import MovieDetail from "./movie-list/movie-detail/MovieDetail";
import { useMovies } from "../hooks/useMovies";
import Box from "./box/Box";

function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movieList, loading, errorMsg } = useMovies(searchQuery, []);

  function handleMovieSelect(imdbID) {
    if (selectedMovie?.imdbID === imdbID) {
      setSelectedMovie(null);
      return;
    }

    const foundMovie = movieList.find((movie) => movie.imdbID === imdbID);
    setSelectedMovie(foundMovie);
  }

  function handleCloseDetail() {
    setSelectedMovie(null);
  }

  function handleMovieAdd(movie) {
    setWatchedList((pwl) => [...pwl, movie]);
  }

  function handleWatchedMovieDelete(imdbId) {
    console.log(watchedList);
    setWatchedList((wl) => wl.filter((wm) => wm.imdbID !== imdbId));
  }

  const numResults = movieList ? movieList.length : 0;

  return (
    <>
      <Header>
        <Logo />
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <NumResults numResults={numResults} />
      </Header>
      <main className="main">
        <Box>
          {loading && <Loading />}
          {errorMsg && <ErrorMessage message={errorMsg} />}
          {!loading && !errorMsg && (
            <MovieList
              movieList={movieList}
              onMovieSelect={handleMovieSelect}
            />
          )}
        </Box>
        <Box>
          {selectedMovie && (
            <MovieDetail
              selectedMovieId={selectedMovie.imdbID}
              onMovieClose={handleCloseDetail}
              watchedList={watchedList}
              onAddMovie={handleMovieAdd}
            />
          )}
          {!selectedMovie && (
            <WatchedMovieBox
              watchedMovieList={watchedList}
              onWatchedMovieDelete={handleWatchedMovieDelete}
            />
          )}
        </Box>
      </main>
    </>
  );
}

export default App;
