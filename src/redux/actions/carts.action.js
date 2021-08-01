import * as types from "../constants/carts.constant";
import api from "../../apiService";
import { toast } from "react-toastify";

const getCart = () => async (dispatch) => {
    dispatch({ type: types.GET_CART_PRODUCTS_REQUEST, payload: null });

    try {
        let url = `${process.env.REACT_APP_BACKEND_API}api/users/cart`
        const data = await api.get(url);
        console.log("hahaha", data)
        dispatch({ type: types.GET_CART_PRODUCTS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: types.GET_CART_PRODUCTS_FAILURE, payload: null });
    }
};

const addToCart = (product) => async (dispatch) => {
    dispatch({ type: types.POST_CART_PRODUCTS_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}api/users/cart`
        const data = await api.post(url);
        console.log("hahaha", data)
        toast.success(`Add ${product.name} to cart success`);
    } catch (error) {
        dispatch({ type: types.POST_CART_PRODUCTS_FAILURE, payload: null });
        toast.error(`Add ${product.name} to cart fail \n ${error.message}`);
    }
};

const removeFromCart = (productId) => async (dispatch) => {
    dispatch({ type: types.DELETE_CART_PRODUCTS_REQUEST, payload: null });
    try {
        await api.delete(`/cart/${productId}`);
        dispatch({ type: types.DELETE_CART_PRODUCTS_SUCCESS, payload: null });
        toast.success(`remove from cart success`);
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: types.DELETE_CART_PRODUCTS_FAILURE, payload: null });
        toast.error(`remove from cart fail \n ${error.message}`);
    }
};

const cartActions = {
    getCart,
    addToCart,
    removeFromCart,
};
export default cartActions;