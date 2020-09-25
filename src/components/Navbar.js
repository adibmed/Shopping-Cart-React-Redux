import React, { useEffect } from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

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
      <Link to="/" className="navbar__title">
        Title
      </Link>
      <div className="navbar__menu">
        <h2>Home</h2>
        <h2>Contact</h2>
      </div>
      <Link to="/cart" className="navbar__cart">
        Cart({props.basketProps.basketNumbers})
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, { getNumbers })(Navbar);
