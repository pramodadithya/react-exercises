import { useEffect, useState } from "react";
import { debounce } from "../utils/utils";

const API_KEY = "<ADD YOUR API KEY>";
const API_URL = "http://www.omdbapi.com/";

export function useMovies(searchQuery) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movieList, setMovieList] = useState([]);

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
  }, [searchQuery]);
  return {
    loading,
    errorMsg,
    movieList,
  };
}

export function useMovieDetail(selectedMovieId) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      setErrorMsg("");
      try {
        const response = await fetch(
          API_URL + `?apikey=${API_KEY}&i=${selectedMovieId}`
        );
        if (!response.ok) {
          throw new Error("Error while fetching movie details");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error(data.Error);
        }
        setMovie(data);
      } catch (e) {
        setErrorMsg(e.message);
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [selectedMovieId]);

  return {
    loading,
    errorMsg,
    movie,
  };
}
