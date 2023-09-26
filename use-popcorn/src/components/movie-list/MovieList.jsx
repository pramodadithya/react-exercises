import React from "react";
import "./MovieList.css";
import Movie from "./movie/Movie";

export default function MovieList({ movieList }) {
  return (
    <ul className="movie-list">
      {movieList.map((movie) => (
        <Movie {...movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
