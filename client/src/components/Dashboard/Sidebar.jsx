import React from 'react'
import Sides from '../Sides'
import Contents from '../Contents'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebars'>
      <Sides />
      <Outlet />
    </div>
  )
}

export default Sidebar