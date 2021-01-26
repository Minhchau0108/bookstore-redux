import { toast } from 'react-toastify';
import * as types from '../constants/cart.constants';
const initialState = {
    cart: []
};
const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
      case types.ADD_PRODUCT_TO_CART:
        const index = state.cart.findIndex(b => b.id === payload.id);
        if(index ===  -1){
          toast.success("The book has been added to cart");
          return {...state, cart: state.cart.concat(payload)};
        }
        else{
          toast.error("Can not add a book to the cart twice");
          return {...state};
        }

      case types.REMOVE_PRODUCT_FROM_CART:
        return {...state, cart: state.cart.filter(b => b.id !== payload)}

      default:
        return state;
    }
  };
  
  export default cartReducer;