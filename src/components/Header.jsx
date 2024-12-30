// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => (
  <nav className="navbar navbar-expand navbar-light bg-light ps-4">
    <div className="container-fluid  d-flex justify-content-md-around">
      <Link className="navbar-brand logo" to="/">E-Shop</Link>
      
      <div className="  me-5 " id="navbarNav">
        <ul className="navbar-nav ms-auto  w-100 d-flex  justify-content-end">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              {/* Cart <span className="badge bg-primary">{cartCount}</span> */}

              <button type="button" class=" position-relative border-0 bg-transparent">
              <i class="fa-solid fa-cart-shopping text-white"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
