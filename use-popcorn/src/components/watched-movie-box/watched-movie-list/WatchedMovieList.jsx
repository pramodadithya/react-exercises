import React from "react";
import "./WatchedMovieList.css";
import WatchedMovie from "./watched-movie/WatchedMovie";

export default function WatchedMovieList({
  watchedMovieList,
  onWatchedMovieDelete,
}) {
  if (watchedMovieList) {
    return (
      <ul>
        {watchedMovieList.map((watchedMovie) => (
          <WatchedMovie
            watchedMovie={watchedMovie}
            key={watchedMovie.imdbID}
            onWatchedMovieDelete={onWatchedMovieDelete}
          />
        ))}
      </ul>
    );
  }
  return <p>No movies rated yet</p>;
}
