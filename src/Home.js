import React from "react";

import Navbar from "./Navbar";
function Home() {
  return (
    <div className="app">
      <Navbar />
      <header>
        <h1>Chart items(0)</h1>
        <div className="list">
          <div className="product">
            <h1>I am a fucking product</h1>
            <button>add to cart</button>
          </div>
          <div className="product">
            <h1>I am a fucking product</h1>
            <button>add to cart</button>
          </div>
          <div className="product">
            <h1>I am a fucking product</h1>
            <button>add to cart</button>
          </div>
          <div className="product">
            <h1>I am a fucking product</h1>
            <button>add to cart</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
