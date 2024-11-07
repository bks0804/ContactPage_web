import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div
        class="container-fluid"
        style={{
          height: "80px",

          alignItems: "center",
        }}
      >
        <div className="brand-logo">
          <img src={logo} alt="loading" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "95px" }}
          >
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ padding: "10px 23px" }}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
