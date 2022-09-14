import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            NewsCube
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/general">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/general">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
