import { ADD_PRODUCT_BASKET } from "./type";

export const addBasket = () => {
  return (dispatch) => {
    console.log("Add PRODUCT");

    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
