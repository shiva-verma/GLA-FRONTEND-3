import React from 'react'
import Home from "./Page/Home"
import About from "./Page/About"
import Contact from "./Page/Contact"
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App