import './Layout.scss'
import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='App'>
        <SideBar/>
        <div className='page'>
          
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout