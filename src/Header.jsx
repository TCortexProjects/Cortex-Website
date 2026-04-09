import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {
  return (
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <img
          src={logo}
          alt="Logo"
          width="200"
          height="50px"
          className="me-2"
        />
      </NavLink>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
             Services
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About 
          </NavLink>
        </li>
        
      </ul>
    </header>
  );
}







