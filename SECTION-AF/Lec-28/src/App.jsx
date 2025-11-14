import { useState } from "react";

//useState  hook--- state management
//useEffect hook --- > to manage any effect on changes
//useNavigate hook --- > redirect from one page to another
const App = () => {
  // let count  = 0;

  let [count, setCount] = useState(1000);

  function handleIncrement(){
      setCount(count+1);
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

export default App