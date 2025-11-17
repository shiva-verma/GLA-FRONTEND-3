import React from 'react'
import Card from './Card'

const App = () => {

  let persons = [
    {
    name:"Abcde",
    age:25,
    address:"delhi"
    },
    {
    name:"Amit",
    age:29,
    address:"banglore"
    },
    {
    name:"Abcde",
    age:25,
    address:"delhi"
    },
    {
    name:"Amit",
    age:29,
    address:"banglore"
    }
]

  // let discount = ["25%", "50%", "100%"]

  return (
    <div>
      {persons.map((person)=>{
        return <Card data = {person}/>
      })}
      
    </div>
     
  )
}

export default App
