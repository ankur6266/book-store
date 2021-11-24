import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
 
// cart
import { CartContext } from "./cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [carts, setCarts] = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand logo" href="/">
          EBook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/services">
              Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/library">
                Library
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav float-end">
            
            <li className="nav-item">
              <NavLink className="nav-link position-relative" exact to="/cart"> 
              <FontAwesomeIcon icon={faShoppingCart} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carts.length}
                  <span className="visually-hidden">cart items</span>
                </span>
              </NavLink>
            </li>


            <li className="nav-item  mx-2">
              <NavLink className="nav-link" exact to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
