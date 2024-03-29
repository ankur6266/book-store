import { BrowserRouter as Router, Link } from "react-router-dom";
import "./header.css";


 function Header1({totalItems}){

const styleCartHead = {
  color: "#000000",
  background: "rgba(8, 178, 196)"
}

  return (
    <header style = {styleCartHead}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" id="header-logo" href="#">
            BOOKISH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">=</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 ms-lg-5">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <Link to='/webD'>Web Dev</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to='/history'>History</Link>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    <Link to='/novel'>Novel</Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <Link to='/poetry'>Poetry</Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/cart" >
              <span className="material-icons"> shopping_cart </span>
              <span className="badge bg-danger">{totalItems}</span>
              </a>
            </li>
              <li className="nav-item leftHead">
                <Link to="/signup" className="nav-link" href="#">
                  SIGN UP
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/login" className="nav-link">
                  LOG IN
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header1;
