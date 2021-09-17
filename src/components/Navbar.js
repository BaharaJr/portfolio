import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" href="/" bg-light>
        GLORIA
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
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link
              smooth={true}
              to="home"
              offset={-110}
              className="nav-link"
             delay={0}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about" offset={-10} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-50} className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth={true}
              to="experience"
              offset={-50}
              className="nav-link"
            >
              Experiences
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="contacts" offset={70} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
