import React from "react";
import "./ErrorMessage.css";

export default function Error({ message }) {
  return <div className="error">⛔ {message}</div>;
}
