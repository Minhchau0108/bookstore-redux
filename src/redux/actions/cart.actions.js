import * as types from '../constants/cart.constants';

const cartActions = {
  addBook: (book) => ({type: types.ADD_PRODUCT_TO_CART, payload: book}),
  removeBook: (id) => ({type: types.REMOVE_PRODUCT_FROM_CART, payload: id})
}
export default cartActions;