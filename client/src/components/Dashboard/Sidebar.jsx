// import Contents from '../Contents'
// import { useEffect, useState } from "react";
// const logo = "Malhub-logo.png";
// const dashboardLogo = "dashboards.png";
// const courseLogo = "homework.png";
// const workspaceLogo = "workplace.png";
// const paymentLogo = "transaction-history.png";
import React from 'react'
import Sides from '../Sides'
// import Contents from '../Contents'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from "react";
// const logo = "Malhub-logo.png";
// const dashboardLogo = "dashboards.png";
// const courseLogo = "homework.png";
// const workspaceLogo = "workplace.png";
// const paymentLogo = "transaction-history.png";
// import Welcome from "../components/Dashboard/Welcome";
// import Welcome from './Welcome'


const Sidebar = () => {
  return (

    <div className='sidebars'>
      <Sides />
      <Outlet />
      {/* <Welcome/> */}

    </div>
  )
}

export default Sidebar;