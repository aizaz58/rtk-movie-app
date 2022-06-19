import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import "./layout.scss"
const LayOut = () => {
  return (
    <div >
        <Header/>
        <div className="container">
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default LayOut