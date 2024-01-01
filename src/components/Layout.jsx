import React from 'react'
import {Navbar} from './index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='min-h-screen   bg-slate-100 dark:bg-slate-900'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout