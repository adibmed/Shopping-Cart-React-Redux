import React from 'react'

function Home() {
    return (
        <div className="app">
      <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shop</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <h1>Cart <span>0</span></h1>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    )
}

export default Home
