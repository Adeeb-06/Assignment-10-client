import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomeLayout() {
  return (
    <div>
       <nav>
        <Navbar/>
       </nav>
       <main>
        <Outlet></Outlet>
       </main>
       <footer>
        <Footer/>
       </footer>
    </div>
  )
}

export default HomeLayout