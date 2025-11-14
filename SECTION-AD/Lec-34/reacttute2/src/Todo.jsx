import React, { useState } from 'react'
const Todo = () => {
    let [todoList, setTodoList] = useState([])
    let [inputValue, setInputValue] = useState("");
    function handleChange(e){
        setInputValue(e.target.value);
    }
    function handleClick(){
        setTodoList([...todoList, inputValue]);
    }
    console.log(todoList);
  return (
    <div>
        <h1>TO-DO APP</h1>
        <input 
        type="text" 
        placeholder='Enter your task'
        value={inputValue}
        onChange={(e) => handleChange(e)}
        />
        <button onClick={handleClick}>Add</button>
        {todoList.map((item, i)=>{
            return <li key={i}>{item}</li>
        })}
    </div>
  )
}

export default Todo