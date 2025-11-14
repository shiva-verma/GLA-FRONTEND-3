import React, { useState } from 'react'

//useState hook
const Counter = () => {

    let title = "Counter"
    // let count = 0;

    // let person = {
    //     name:"",
    //     age:"",
    //     salary:""
    // }

    let [count, setCount] = useState(0);

    let [person, setPerson] = useState({
        name:"",
        age:"",
        salary:""
    })

    function handleIncrement(){
        setCount((prev)=> prev + 1);
        setCount((count)=> count + 1);
        setCount((count)=> count + 1);
        setCount((count)=> count + 1);
    }

    function handleDecrement(){
        setCount(count-1);
    }

  return (
    <div>
        <h1>{title}</h1>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter