import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import { removeProduct } from "../actions/RemoveAction";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Cart(props) {
  console.log("basketProps 👉 ", props);

  // let productInCart = [];

  // Object.keys(props.basketProps.products).forEach(function (item) {
  //   console.log(item.title);
  // });

  return (
    <div className="cart">
      <div className="cart__header">
        <h1>You Cart</h1>
        <h1>Tatal: 1299.99 USD</h1>
      </div>
      {props.basketProps.products.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          caption={product.caption}
          price={product.price}
          props={props}
        />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, { removeProduct })(
  Cart
);
