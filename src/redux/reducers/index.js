import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
	book: bookReducer,
	cart: cartReducer
});