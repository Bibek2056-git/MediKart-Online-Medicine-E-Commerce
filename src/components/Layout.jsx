import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return  <>
    <Nav />
    <main>
      <Outlet />
    </main>
  </>
}

export default Layout