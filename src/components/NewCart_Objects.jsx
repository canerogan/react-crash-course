import "./Counter.css";
import React, { useState } from "react";

function NewCart_Objects() {
  const [cart, setCart] = useState({
    item: "apple",
    quantity: 0,
  });

  function addApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity + 1
    }))
  }

  function removeApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity - 1
    }))


  }
  
  return (
    <div>
      <button onClick={removeApple}>-</button>

      <p>
        {cart.quantity}
        {cart.item}
      </p>

      <button onClick={addApple}>+</button>
    </div>
  );
}

export default NewCart_Objects;
