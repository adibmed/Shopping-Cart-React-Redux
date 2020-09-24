import React, { useState } from "react";

import Navbar from "./Navbar";
function Home() {

    const [basketNumber, setBasketNumbers] = useState(0);

    const addToCart = () => {
       setBasketNumbers(basketNumber + 1);
    }
  return (
    <div className="app">

      <Navbar />
      <header>
          <h1>Chart items({basketNumber})</h1>
      <div className="list">
      <div className="product">
          <h1>I am a fucking product</h1>
          <button onClick={addToCart}>add to cart</button>
        </div>
        <div className="product">
          <h1>I am a fucking product</h1>
          <button onClick={addToCart}>add to cart</button>
        </div>
        <div className="product">
          <h1>I am a fucking product</h1>
          <button onClick={addToCart}>add to cart</button>
        </div>
        <div className="product">
          <h1>I am a fucking product</h1>
          <button onClick={addToCart}>add to cart</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default Home;
