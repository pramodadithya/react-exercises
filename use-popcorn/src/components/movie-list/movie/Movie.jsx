import React from "react";
import "./Movie.css";

export default function Movie({
  Title: title,
  Poster: poster,
  Year: year,
  imdbID,
}) {
  return (
    <li className="movie">
      <img src={poster} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>🗓 {year}</p>
      </div>
    </li>
  );
}
