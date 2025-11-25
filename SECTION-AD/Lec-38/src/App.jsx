import React from 'react'
import Contact from "./Page/Contact"
import About from "./Page/About"
import Home from "./Page/Home"
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App