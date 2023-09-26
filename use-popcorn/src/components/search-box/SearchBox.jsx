import React from "react";
import "./SearchBox.css";

export default function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="search"
      placeholder="Search for a movie..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
