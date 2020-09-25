import React from "react";
import Product from './components/Poroduct';


import Navbar from "./components/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__container">
        <div className="home__containerRow">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
