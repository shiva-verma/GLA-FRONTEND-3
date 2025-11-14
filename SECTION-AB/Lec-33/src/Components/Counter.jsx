import React, { useState } from 'react'

//useState hook  -- manage state in react
//useEffect hook -- > manage any effect in react
//useNavigate hook --> to redirect from one page to another 

//hook ---> predefined javascript function in react which has some specific task to do
const Counter = () => {

    let [count, setCount] = useState(0)

    function handleIncrement(){
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    function handleDecrement(){
        setCount(count-1);
    }

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter