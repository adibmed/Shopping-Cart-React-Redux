import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar"> 
        <h1 className="navbar__title">Title</h1>
        <div className="navbar__menu">
          <h2>Home</h2> 
          <h2>Contact</h2>
        </div>
        <h1 className="navbar__cart">
          Cart(0)
        </h1> 
    </div>
  );
}

export default Navbar;
