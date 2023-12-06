<<<<<<< HEAD
import React from 'react'
import Sides from '../Sides'
import Contents from '../Contents'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'
=======
import { useEffect, useState } from "react";
const logo = "Malhub-logo.png";
const dashboardLogo = "dashboards.png";
const courseLogo = "homework.png";
const workspaceLogo = "workplace.png";
const paymentLogo = "transaction-history.png";
>>>>>>> origin/master

const Sidebar = () => {
  return (
<<<<<<< HEAD
    <div className='sidebars'>
      <Sides />
      <Outlet />
    </div>
  )
}

export default Sidebar
=======
    <>
      <div className="container">
        <nav className="sidebar">
          <img src={logo} alt="logo" style={{ maxWidth: "30%" }} />
          {/* <p>welcome </p> */}

          <ul className="dashboardUl">
            <li className="dashboardLI">
              <img src={dashboardLogo} alt="logo" className="logo" />
              dashbord
            </li>
            <li className="dashboardLI">
              <img src={courseLogo} alt="logo" className="logo" />
              courses
            </li>
            <li className="dashboardLI">
              <img src={workspaceLogo} alt="logo" className="logo" />
              workspaces
            </li>
            <li className="dashboardLI">
              {" "}
              <img src={paymentLogo} alt="logo" className="logo" />
              payment history
            </li>
          </ul>
        </nav>
        <div>
          <h1>My Dashboard</h1>
          {user && <p>welcome {user} </p>}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
>>>>>>> origin/master
