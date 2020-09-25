import {REMOVE_PRODUCT_BASKET} from './types';

export const removeProduct = (product) => {
    return (dispatch) => { 
      dispatch({
        type: REMOVE_PRODUCT_BASKET,
        payload: product,
      });
    };
  };
  