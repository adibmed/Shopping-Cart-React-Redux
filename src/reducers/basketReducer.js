import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartTotal: 0,
  products: [],
};

export default (state = initialState, action) => {
  console.log("producsts 👉 ", state.products);
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        ...state,
        products: [...state.products, action.payload],
        basketNumbers: state.basketNumbers + 1,
        cartTotal:
          state.cartTotal + state.products[action.payload.title]?.price,
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
