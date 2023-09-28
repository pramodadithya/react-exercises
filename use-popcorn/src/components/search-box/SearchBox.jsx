import React, { useEffect, useRef } from "react";
import "./SearchBox.css";
import { useKey } from "../../hooks/useKey";

export default function SearchBox({ searchQuery, setSearchQuery }) {
  const searchInput = useRef();

  useKey("Enter", () => {
    if (document.activeElement === searchInput.current) return;
    searchInput.current.focus();
    setSearchQuery("");
  });

  return (
    <input
      className="search"
      placeholder="Search for a movie..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      ref={searchInput}
    />
  );
}
