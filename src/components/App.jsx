import React, { useState } from "react";

function App() {
  const [state,setCount] = useState(1);
  function increase() {
    // count++7
    // state++
    setCount(state+1)
  }
  function decrease() {
    // count++7
    // state++
    setCount(state-1)
  }

  // console.log(count);
  return (
    <div className="container">
      {/* <h1>{count}</h1> */}
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
