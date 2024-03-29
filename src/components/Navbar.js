import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary mx-2 rounded"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toogleMode("primary");
                }}
              ></div>
              <div
                className="bg-danger mx-2 rounded"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toogleMode("danger");
                }}
              ></div>
              <div
                className="bg-success mx-2 rounded"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toogleMode("success");
                }}
              ></div>
              <div
                className="bg-warning mx-2 rounded"
                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                onClick={() => {
                  props.toogleMode("warning");
                }}
              ></div>
              <div
                className="bg-dark mx-2 rounded"
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                  border: "1px solid white",
                }}
                onClick={() => {
                  props.toogleMode("dark");
                }}
              ></div>
            </div>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button> */}
              <div
                className={`form-check form-switch mx-3 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input py-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label mx-3"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Stranger",
};
