// import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../components/shaerItem/Navbar';
import Footer from '../components/shaerItem/Footer';

export default function MainLayouts() {
  return (
    <>

    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
      
    </>
  )
}
