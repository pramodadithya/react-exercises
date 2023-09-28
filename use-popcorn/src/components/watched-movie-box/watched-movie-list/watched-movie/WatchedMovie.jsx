import React from "react";
import "./WatchedMovie.css";

export default function WatchedMovie({ watchedMovie, onWatchedMovieDelete }) {
  const { poster, title, imdbRating, userRating, runtime, imdbID } =
    watchedMovie;
  console.log(watchedMovie);
  return (
    <li className="watched-movie-item">
      <img src={poster} alt={title} />
      <h4>{title}</h4>
      <div className="watched-movie-info">
        <p>⭐ {imdbRating}</p>
        <p>🌟 {userRating}</p>
        <p>⌛ {runtime}</p>
        <button
          className="btn-delete"
          onClick={() => {
            onWatchedMovieDelete(imdbID);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
}
