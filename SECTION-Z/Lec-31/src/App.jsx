import { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {

  // let persons = [{
  //   name:"Amit",
  //   age:27,
  //   address:"Delhi"
  // }, {
  //   name:"Sumit",
  //   age:22,
  //   address:"Banglore"
  // }, {
  //   name:"piyush",
  //   age:30,
  //   address:"Hydrabad"
  // }]

  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  async function fetchProduct(){
    let response = await fetch("https://dummyjson.com/products")
    let productData = await response.json()
    setProducts(productData.products);
  }

  async function fetchImages(){
    let response = await fetch("https://picsum.photos/v2/list")
    let imageData = await response.json()
    setImages(imageData);
  }

  useEffect(()=>{
    fetchProduct();
    fetchImages();
  }, [])


  return (
    <div>
      {products.map((product)=>{
        return <Card product={product}/>
      })}
    </div>
  )
}

export default App;
