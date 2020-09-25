import React from "react";
import Product from "./Product";
import "./Home.css";
import { connect } from "react-redux";
import { addBasket } from "../actions/AddAction";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__containerRow">
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/3/optimized/10713533_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"
            title="Aviator Nation"
            caption="Rainbow-Stripe Hoodie"
            price="189.00"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/11056102_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"
            title="ALTERNATIVE"
            caption="Washed Terry Tie-Dye Boyfriend Sweatshirt"
            price="54.00"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/11082729_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"
            title="Velvet by Graham & Spencer"
            caption="Tami Mock Neck Sweatshirt"
            price="139.00"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/10629635_fpx.tif?op_sharpen=1&wid=700&fit=fit,1&$filtersm$&fmt=webp"
            title="Cotton Citizen"
            caption="Milan Cropped Sweatshirt"
            price="195.00"
            props={props}
          />
        </div>
        <div className="home__containerRow">
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/11080021_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&$filtersm$&fmt=webp"
            title="AQUA"
            caption="Star Print Hoodie - 100% Exclusive"
            price="58.00"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/1/optimized/11074291_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&$filtersm$&fmt=webp"
            title="Sundry"
            caption="High/Low Tie Dyed Sweatshirt"
            price="132.00"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/10812825_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&$filtersm$&fmt=webp"
            title="Maje"
            caption="Terrasse Neoprene Hooded Sweatshirt"
            price="112.50"
            props={props}
          />
          <Product
            image="https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/10629670_fpx.tif?op_sharpen=1&wid=500&fit=fit,1&$filtersm$&fmt=webp"
            title="
          Cotton Citizen"
            caption="Brooklyn Sweatpants"
            p
            props={props}
            rice="225.00"
          />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
