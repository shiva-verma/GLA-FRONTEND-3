//hooks --- useState(), useEffect(), useNavigate()
import { useState } from "react";

const Counter = () => {
    let title = "Counter"
    // let count = 0;
    // let arr = useState(0);

    // let count = arr[0];
    // let fun = arr[1];

    // let person = {
    //     name:"shiv",
    //     age:25,
    //     address:"DELHI"
    // }

    // let [person, setPerson] = useState({
    //     name:"shiv",
    //     age:25,
    //     address:"DELHI"
    // })

    let [count, setCount] = useState(0)


    function handleIncrement(){
            setCount((prev)=> prev + 1);
            setCount((prev)=> prev + 1);
            setCount((prev)=> prev + 1);
            setCount((prev)=> prev + 1);

    }
    function handleDecrement(){
            setCount(count-1);
    }
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={handleIncrement}>+</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter