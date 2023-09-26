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

const API_KEY = "<ADD YOUR API KEY>";
const API_URL = "http://www.omdbapi.com/";

function debounce(func, delay) {
  let functionCalled;
  return function (...args) {
    if (functionCalled) {
      clearTimeout(functionCalled);
    }
    functionCalled = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setErrorMsg("");
      try {
        const response = await fetch(
          API_URL + `?apikey=${API_KEY}&s=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Could not fetch movies.");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovieList(data.Search);
      } catch (err) {
        console.log(err);
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (searchQuery.length > 2) {
      debounce(fetchMovies, 800)();
    }
    return () => {
      console.log("Clean Up");
    };
  }, [searchQuery]);

  function handleMovieSelect(imdbID) {
    console.log(imdbID);
    if (selectedMovie?.imdbID === imdbID) {
      setSelectedMovie(null);
      return;
    }

    const foundMovie = movieList.find((movie) => movie.imdbID === imdbID);
    setSelectedMovie(foundMovie);
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
        <div className="box">
          {loading && <Loading />}
          {errorMsg && <ErrorMessage message={errorMsg} />}
          {!loading && !errorMsg && (
            <MovieList
              movieList={movieList}
              onMovieSelect={handleMovieSelect}
            />
          )}
        </div>
        <div className="box">
          {selectedMovie && (
            <MovieDetail selectedMovieId={selectedMovie.imdbID} />
          )}
          {!selectedMovie && <WatchedMovieBox />}
        </div>
      </main>
    </>
  );
}

export default App;
