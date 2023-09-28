import React from "react";
import "./WatchedMovieBox.css";
import WatchedMovieList from "./watched-movie-list/WatchedMovieList";
import WatchedMovieSummary from "./watched-movie-summary/WatchedMovieSummary";

export default function WatchedMovieBox({
  watchedMovieList,
  onWatchedMovieDelete,
}) {
  return (
    <div className="watched-movie-box">
      <WatchedMovieSummary watchedMovieList={watchedMovieList} />
      <WatchedMovieList
        watchedMovieList={watchedMovieList}
        onWatchedMovieDelete={onWatchedMovieDelete}
      />
    </div>
  );
}
