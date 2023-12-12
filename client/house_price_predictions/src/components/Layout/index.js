import React from 'react'
import './index.scss'
import Sidebar from '../SideBar/index.js'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Sidebar />

      <Outlet />
    </div>
  )
}

export default Layout
