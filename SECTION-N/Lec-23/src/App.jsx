import Card from "./Components/Card"
import Dashboard from "./Components/Dashboard"

const App = () =>{

  let persons = [
    {
    name:"abcde",
    age:25,
    Address:"DELHI"
    },
    {
    name:"Amit",
    age:28,
    Address:"Banglore"
    },
    {
    name:"Nitish",
    age:23,
    Address:"Hydrabad"
    },
    {
    name:"pawan",
    age:21,
    Address:"Pune"
    },
    {
    name:"Nitish",
    age:23,
    Address:"Hydrabad"
    },
    {
    name:"pawan",
    age:21,
    Address:"Pune"
    }

]

  return (
    <div>
      {persons.map((person)=>{
          return <Card person ={person} />
      })}
      <Dashboard/>
    </div>
  )
}

export default App;