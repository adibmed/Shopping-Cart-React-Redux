import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Router path="/" component={Home} />
          <Router path="/cart" component={Cart} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
