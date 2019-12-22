import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center jumbotron-fluid">
      <h1 className="jumbo display-4 py-auto"> BOOK FINDER</h1>
      <span className="googleName py-2 px-3">
        powerd by{" "}
        <a
          className="google"
          href="https://developers.google.com/books"
          target="_blank"
        >
          Google Books API
        </a>
      </span>
    </div>
  );
}

export default Jumbotron;
