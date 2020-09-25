import { GET_NUMBERS_BASKET } from "./types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Add Product");
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};
