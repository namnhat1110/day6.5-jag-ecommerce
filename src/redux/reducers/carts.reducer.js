import * as types from "../constants/carts.constant";
const initialState = {
    products: [],
    loading: false,
};

const cartsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(action);
    switch (type) {
        case types.GET_CART_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case types.GET_CART_PRODUCTS_SUCCESS:
            return { ...state, products: payload.products, loading: false };
        case types.GET_CART_PRODUCTS_FAILURE:
            return { ...state, loading: false };

        case types.POST_CART_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case types.POST_CART_PRODUCTS_SUCCESS:
            return { ...state, selectedProduct: payload.product, loading: false };
        case types.POST_CART_PRODUCTS_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default cartsReducer;