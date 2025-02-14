import React from 'react'
import Sidebar from './nav/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './nav/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  )
}

export default Layout