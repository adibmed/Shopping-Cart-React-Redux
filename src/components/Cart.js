import React from "react";
import "./Cart.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Cart({basketProps}) {
  console.log("basketProps 👉 ", basketProps);

  let productInCart = [];

  Object.keys(basketProps.products).forEach(function(item){
      console.log(item.title)
  })

  return (
    <div className="cart">
    <h1>Cart</h1>{
    basketProps.products.map((product)=>(
      <h1>{product.title}</h1>
    ))}
    </div>
  );
}

export default connect(mapStateToProps, { mapStateToProps })(Cart);
