import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const PropertiesLayout = () => {
  return (
   <div>
    <nav>
        <Navbar/>
    </nav>
    <main>
        <Outlet/>
    </main>
   </div>
  )
}

export default PropertiesLayout