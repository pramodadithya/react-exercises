import React, { useEffect, useRef } from "react";
import "./SearchBox.css";

export default function SearchBox({ searchQuery, setSearchQuery }) {
  const searchInput = useRef();

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === searchInput.current) return;
      if (e.code === "Enter") {
        searchInput.current.focus();
        setSearchQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);

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
