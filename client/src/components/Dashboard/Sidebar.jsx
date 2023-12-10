import React from 'react'
import Sides from '../Sides'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'



const Sidebar = () => {
  return (

    <div className='sidebars'>

      <Sides />
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default Sidebar;