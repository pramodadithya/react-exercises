import { useEffect, useState } from "react";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import NumResults from "./num-results/NumResults";
import SearchBox from "./search-box/SearchBox";
import Loading from "./loading/Loading";
import Error from "./error/Error";
import MovieList from "./movie-list/MovieList";
import WatchedMovieBox from "./watched-movie-box/WatchedMovieBox";
import "./App.css";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const API_KEY = "<ADD YOUR API KEY>";
const API_URL = "http://www.omdbapi.com/";

function App() {
  const [movieList, setMovieList] = useState(tempMovieData);
  const [watchedList, setWatchedList] = useState(tempWatchedData);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setErrorMsg("");
      try {
        const response = await fetch(
          API_URL + `?apikey=${API_KEY}&s=${searchQuery}`
        );
        const data = await response.json();
        if (data.Response === "False") {
          setErrorMsg(data.Error);
        }
        setMovieList(data.Search);
      } catch (e) {
        setErrorMsg(e.message);
      } finally {
        setLoading(false);
      }
    }
    if (searchQuery.length > 2) {
      fetchMovies();
    }
    return () => {
      console.log("Clean Up");
    };
  }, [searchQuery, setMovieList]);

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
          {errorMsg && <Error message={errorMsg} />}
          {!loading && !errorMsg && <MovieList movieList={movieList} />}
        </div>
        <div className="box">
          <WatchedMovieBox />
        </div>
      </main>
    </>
  );
}

export default App;
