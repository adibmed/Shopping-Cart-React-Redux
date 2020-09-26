import {REMOVE_PRODUCT_BASKET} from './types';

export const removeProduct = (id) => {
    console.log('Product to remove >>>>> ', id)
    return (dispatch) => { 
      dispatch({
        type: REMOVE_PRODUCT_BASKET,
        payload: id,
      });
    };
  };
  