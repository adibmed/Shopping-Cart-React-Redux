import React, { useEffect } from "react";
import "./Navbar.css";
import { connect } from "react-redux";

import { getNumbers } from "../actions/getAction";

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

function Navbar(props) {
  console.log("NAVBAR>>>", props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className="navbar">
      <h1 className="navbar__title">Title</h1>
      <div className="navbar__menu">
        <h2>Home</h2>
        <h2>Contact</h2>
      </div>
      <h1 className="navbar__cart">Cart({props.basketProps.basketNumbers})</h1>
    </div>
  );
}

export default connect(mapStateToProps, { getNumbers })(Navbar);
