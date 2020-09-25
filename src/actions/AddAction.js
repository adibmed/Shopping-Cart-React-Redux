import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = () => {
  return (dispatch) => {
    console.log("Add Product");
    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
