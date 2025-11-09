import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomeLayout() {
  return (
    <div>
       <nav>
        <Navbar/>
       </nav>
       <main>
        <Outlet></Outlet>
       </main>
    </div>
  )
}

export default HomeLayout