import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import Loading from "../../loading/Loading";
import ErrorMessage from "../../error-message/ErrorMessage";
import StarRating from "../../star-rating/StarRating";
import { useMovieDetail } from "../../../hooks/useMovies";

export default function MovieDetail({
  selectedMovieId,
  watchedList,
  onMovieClose,
  onAddMovie,
}) {
  const watchedMovie = watchedList?.find(
    (movie) => movie.imdbID === selectedMovieId
  );

  const [userRating, setUserRating] = useState(0);

  const { loading, errorMsg, movie } = useMovieDetail(selectedMovieId);

  const {
    imdbID,
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

  useEffect(() => {
    function callback(e) {
      if (e.code === "Escape") {
        onMovieClose();
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  useEffect(() => {
    if (!title) {
      return;
    }
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  function handleMovieAdd() {
    const newMovie = {
      imdbID,
      title,
      year,
      poster,
      plot,
      userRating,
      imdbRating: +imdbRating,
      released,
      runtime: +runtime.split(" ").at(0),
      actors,
      director,
      genre,
    };
    onAddMovie(newMovie);
    onMovieClose();
  }

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
              {watchedMovie ? (
                <p>You already rated this movie {watchedMovie.userRating} ⭐</p>
              ) : (
                <>
                  <StarRating
                    maxStars={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleMovieAdd}>
                      Add to List
                    </button>
                  )}
                </>
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
