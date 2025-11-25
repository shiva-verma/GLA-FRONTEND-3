import React from 'react'
import StudentList from './Components/StudentList'
import './card.css'

const App = () => {
  const students = [
    {name:"Amit", grade:"A"},
    {name:"Sumit", grade:"B"},
    {name:"Priya", grade:"A"}
    ] 


  return (
    <div>
      <StudentList students = {students}/>
    </div>
  )
}

export default App