import React from 'react'
import{Outlet} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ImageSlider from './components/Carousel';
import Middle from './Middle';
import Card from './components/Card';





// outlet ka use hum karte hain jab humain uper aur niche ki cheezo ko same rakhna hota h  

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>      
      <ImageSlider/>
      <Card/>
      <Middle/>
      <Footer/>
    </>
  )
}

export default Layout
