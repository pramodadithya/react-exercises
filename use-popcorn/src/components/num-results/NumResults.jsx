import React from "react";
import "./NumResults.css";

export default function NumResults({ numResults }) {
  return (
    <div className="num-results">
      Found <strong>{numResults}</strong> results
    </div>
  );
}
