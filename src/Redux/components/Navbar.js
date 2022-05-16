import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar blue darken-3">
        <div className="nav-wrapper blue darken-3">
          <a href="#" className="brand-logo center">
            Logo
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
