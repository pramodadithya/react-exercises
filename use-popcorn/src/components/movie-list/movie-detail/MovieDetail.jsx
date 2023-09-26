import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../error-message/ErrorMessage";
import StarRating from "../../star-rating/StarRating";

const API_KEY = "<ADD YOUR API KEY>";
const API_URL = "http://www.omdbapi.com/";

export default function MovieDetail({ selectedMovieId, onMovieClose }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState(0);

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

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    imdbRating,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  return (
    <div className="movie-details">
      {loading && <Loading />}
      {!loading && errorMsg && <ErrorMessage />}
      {!loading && !errorMsg && movie && (
        <>
          <header>
            <button className="btn-back" onClick={onMovieClose}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="movie-details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating maxStars={10} size={24} onSetRating={setUserRating} />
              {userRating > 0 && (
                <button className="btn-add">Add to List</button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed By {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
