import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Card'

const App = () => {

  let products = ["jeans", "Mobile", "Laptop", "Bag"]

  return (
    <div>
      <Navbar/>
      {products.map((product)=>{
        return <Card data={product}/>
      })}
      <Footer/>
    </div>
  )
}

export default App

// sum(7, 8)