import React from "react";
import { NavLink } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import "./Navbar.css";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <aside>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="nav-text ">
            <NavLink to="/" exact>
              <FiIcons.FiUser />
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-text ">
            <NavLink to="projects">
              <FiIcons.FiFolder />
              <span>Projects</span>
            </NavLink>
          </li>
          <li className="nav-text ">
            <NavLink to="skills">
              <FiIcons.FiFolder />
              <span>Skills</span>
            </NavLink>
          </li>
          <li className="nav-text ">
            <NavLink to="contact">
              <FiIcons.FiMail />
              <span>Contact</span>
            </NavLink>
          </li>
          <DarkMode />
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
