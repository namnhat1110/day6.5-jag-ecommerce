import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import cartsReducer from "./carts.reducer";
import authReducer from "./auth.reducer"


export default combineReducers({
    productsReducer: productsReducer,
    cartsReducer: cartsReducer,
    authReducer: authReducer
});