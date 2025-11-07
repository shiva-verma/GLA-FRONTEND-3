import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import Card from "./Components/Card.jsx"

function App() {

  let products = ["bag", "laptop", "Mobile", "Jeans"]

  return (
    <>
      <Navbar/>
      {products.map(()=>{
        return <Card  data={products}/>
      })}
      <Footer/>
    </>
  )
}



export default App
