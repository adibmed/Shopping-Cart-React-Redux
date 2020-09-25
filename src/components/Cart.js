import React from "react";
import "./Cart.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Cart({basketProps}) {
  console.log("basketProps 👉 ", basketProps);
  return (
    <div className="cart">
      <h1>I am a Cart</h1>
    </div>
  );
}

export default connect(mapStateToProps, { mapStateToProps })(Cart);
