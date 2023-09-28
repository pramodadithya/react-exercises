import React from "react";
import "./WatchedMovieSummary.css";

export default function WatchedMovieSummary({ watchedMovieList }) {
  if (watchedMovieList && watchedMovieList.length > 0) {
    const numberOfMovies = watchedMovieList.length;
    const averageIMDBRating =
      watchedMovieList.reduce((acc, movie) => {
        return acc + movie.imdbRating;
      }, 0) / numberOfMovies;

    const averageUserRating =
      watchedMovieList.reduce((acc, movie) => {
        return acc + movie.userRating;
      }, 0) / numberOfMovies;
    const averageRuntime =
      watchedMovieList.reduce((acc, movie) => {
        return acc + movie.runtime;
      }, 0) / numberOfMovies;
    return (
      <div className="watched-movies-summary">
        <h2>Movies you watched</h2>
        <div className="summary-stats">
          <span className="summary-stat">🎞️ {numberOfMovies}</span>
          <span className="summary-stat">
            ⭐ {averageIMDBRating.toFixed(2)}
          </span>
          <span className="summary-stat">
            🌟 {averageUserRating.toFixed(2)}
          </span>
          <span className="summary-stat">⌛ {averageRuntime}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="watched-movies-summary">
      <p className="message"> ℹ️ Rate movies to see summary</p>
    </div>
  );
}
