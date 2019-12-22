import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-light mt-2 border-bottom">
      <a className="navbar-brand text-dark ml-5" href="/">BOOK SEARCH
      </a>
      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item active">
          <a class="nav-link mt-2 text-dark" href="/">
            Search
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mt-2 text-dark" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
