import React from "react";
import "./Product.css";

function Poroduct({ image, title, caption, price, props }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h1 className="product__title">{title}</h1>
        <h2 className="product__caption">{caption}</h2>
        <h2 className="product__price">USD {price}</h2>
        <button
          onClick={() =>
            props.addBasket({
              image: image,
              title: title,
              caption: caption,
              price: price,
            })
          }
          className="product__button"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Poroduct;
