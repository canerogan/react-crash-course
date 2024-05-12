import "./Counter.css";
import React, { useState } from "react";

function NewCart_Arrays() {
  const [arr, setArr] = useState([]);

  function addMinus() {
    setArr((prevArr) => [ ...prevArr, "-" ]);
  }

  function addPlus() {
    setArr((prevArr) => [ ...prevArr, "+" ]);
    
  }
  function reset() {
    setArr([]);
    
  }

  return (
    <div>
      <button onClick={addMinus}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addPlus}>+</button>
      <p>{arr.toString()}</p>
      
    </div>
  );
}

export default NewCart_Arrays;
