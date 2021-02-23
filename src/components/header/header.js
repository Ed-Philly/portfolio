import React, { useState } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState({ active: "" });

  const [toggle, setToggle] = useState(false);
  const toggleDropdown = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header-container">
      <div className="app-logo-text">
        <div>
          <AccountBoxIcon style={{ fontSize: "2vw", color: "orange" }} />
        </div>{" "}
        <Link to="./">Ed Edokpayi</Link>
      </div>

      <nav className="nav-links-container">
        <Link
          to="/contact"
          className={`nav-links ${
            activeLink.active === "contact" ? "contact" : ""
          }`}
          onClick={() => setActiveLink({ active: "contact" })}
        >
          Contact me
        </Link>

        <Link
          to="projects"
          className={`nav-links ${
            activeLink.active === "project" ? "project" : ""
          }`}
          onClick={() => setActiveLink({ active: "project" })}
        >
          My projects
        </Link>
      </nav>

      <div className="menu-icon-wrapper">
        <MenuIcon style={{ fontSize: "3rem" }} onClick={toggleDropdown} />
      </div>

      {toggle && (
        <nav className="header-dropdown-container">
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/contact" onClick={toggleDropdown}>
                {" "}
                Contact
              </Link>
            </li>
            <li className="dropdown-item">
              <Link to="/projects" onClick={toggleDropdown}>
                {" "}
                My project
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
