import Card from "./Card";

const App = ()=>{

  let person = {
    name:"ajay",
    age:36,
    Address:"delhi"
  }

  return (
    <div>
      <Card person={person}/>
    </div>
  )
}

export default App;