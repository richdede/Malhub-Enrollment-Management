import React from "react";
const logo = "Malhub-logo.png";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="User">
      <nav className="bar">
        <div className="logo">
          {" "}
          <a href="/">
            <img src={logo} alt="logo" style={{ maxWidth: "150px" }} />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <div className="dropdown">
            <li>Training</li>
            <div className="dropdown_menu">
              <ul className="dropdown_links">
                <li>
                  <a href="/">Onsite Programme</a>
                </li>
                <li>
                  <a href="/">Virtual Programme</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <li>Services</li>
            <div className="dropdown_menu">
              <ul className="dropdown_links">
                <li>
                  <a href="workspace">WorkSpace</a>
                </li>
                <li>
                  <a href="/">Incubation</a>
                </li>
                <li>
                  <a href="/">Business Support and Consultation</a>
                </li>
                <li>
                  <a href="/">Partnership and Collaboration</a>
                </li>
              </ul>
            </div>
          </div>
          <li>
            <a href="About">About</a>
          </li>
        </ul>
        <div className="RegLog">
          <Link to="Login">
            <button className="Login ">Login</button>
          </Link>
          <Link to="Register">
            <button className="Reg">Register</button>
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default User;
