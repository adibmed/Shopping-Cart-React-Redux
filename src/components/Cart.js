import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Cart({ basketProps }) {
  console.log("basketProps 👉 ", basketProps);

  let productInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item.title);
  });

  return (
    <div className="cart">
     <div className="cart__header">
       <h1>You Cart</h1>
       <h1>Tatal: 1299.99 USD</h1>
     </div>
      {basketProps.products.map((product) => (
        <CartProduct
          key={product.id}
          image={product.image}
          title={product.title}
          caption={product.caption}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, { mapStateToProps })(Cart);
