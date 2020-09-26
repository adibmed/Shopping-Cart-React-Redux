import React from "react";
import "./CartProduct.css";

function CartProduct({ id, image, title, caption, props}) {
  return (
    <div className="cartProduct">
      <img src={image} alt="" />
      <div className="cartProduct__details">
        <h1>{title}</h1>
        <h2>{caption}</h2>
      </div>
      <div className="cartProduct__right">
        <button onClick={props.removeProduct(id)}>remove</button>
      </div>
    </div>
  );
}

export default CartProduct;
