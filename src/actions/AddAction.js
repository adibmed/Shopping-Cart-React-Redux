import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (product) => {
  return (dispatch) => {
    console.log("Add Product>>>", product);
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: product,
    });
  };
};
