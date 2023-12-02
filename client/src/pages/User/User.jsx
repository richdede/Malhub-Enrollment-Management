import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
const logo = "Malhub-logo.png";

const User = () => {
  return (
    <div className="User">
      <nav className="bar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "150px" }} />
          </Link>
        </div>
        <ul className="links">
          <a href="/Home" className="links">
            <li>Home</li>
          </a>
          <div className="dropdown">
            <li>Tech Skills</li>
            <div className="dropdown_menu">
              <ul className="dropdown_links">
                <li>Onsite Programme</li>
                <li>Virtual Programme</li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <li>Services</li>
            <div className="dropdown_menu">
              <ul className="dropdown_links">
                <li>Co-Working Space</li>
                <li>Incubation</li>
                <li>Business Support and Consultation</li>
                <li>Partnership and Collaboration</li>
              </ul>
            </div>
          </div>
          <a href="/About" className="links">
            <li>About</li>
          </a>
        </ul>
        <div className="RegLog">
          <Link to="/Login">
            <button className="Login">Login</button>
          </Link>
          <Link to="/Register">
            <button className="Reg">Register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default User;
