import React from "react";
import "./Product.css";

function Poroduct({ id, image, title, caption, price, props }) {
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
              id: id,
              image: image,
              title: title,
              caption: caption,
              price: price,
              quantity: 1,
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
