import { useEffect, useState } from "react";
import Todo from "./Todo";

//react hooks
// useState()  ---- to manage local data / state
// useEffect() --- to manage effect on changes
// useNavigate() --- to redirect from one page to another

const App = () => {

  let [count , setCount] = useState(0);

  let [arr, setArr] = useState([]);

  function handleIncrement(){
    setCount(count+1);
    
  } 

  function handleDecrement(){
    setCount(count-1);
  } 

  return (
    <>
      {/* <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>  */}
      <Todo/>
    </>
  )
}

export default App