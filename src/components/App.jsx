import React, { useState } from "react";

function App() {
  const state = useState(123);
  function increase() {
    // count++
  }
  // console.log(count);
  return (
    <div className="container">
      {/* <h1>{count}</h1> */}
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
