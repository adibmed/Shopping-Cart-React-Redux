import React from "react";
import "./CartProduct.css";

function CartProduct({ image, title, caption, price }) {
  return (
    <div className="cartProduct">
      <img src={image} alt="" />
      <div className="cartProduct__details">
        <h1>{title}</h1>
        <h2>{caption}</h2>
      </div>
      <div className="cartProduct__right">
        <button>remove</button>
      </div>
    </div>
  );
}

export default CartProduct;
