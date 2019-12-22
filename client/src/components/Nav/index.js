import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-dark mt-2">
      <a className="navbar-brand text-white ml-5 my-2" href="/">BOOK FINDER
      </a>
      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item active">
          <a class="nav-link text-light my-2" href="/">
            Search
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light my-2" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
