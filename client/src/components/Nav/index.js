import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-dark">
      <a className="navbar-brand text-white ml-5 my-3" href="/">
        <i className="fas fa-book-open mx-2"></i>
        BOOK FINDER
      </a>
      <ul className="navbar-nav ml-auto mr-5 my-3">
        <li className="nav-item active">
          <a
            className="btn bg-warning nav-link text-white mx-2 py-1 px-4 border rounded-pill"
            href="/"
          >
            <i className="fas fa-search mr-1"></i> Search
          </a>
        </li>
        <li className="nav-item ">
          <a
            className="btn bg-secondary nav-link text-white mx-2 py-1 px-4 border rounded-pill"
            href="/saved"
          >
            {" "}
            <i className="far fa-eye mr-2"></i>
            View Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
