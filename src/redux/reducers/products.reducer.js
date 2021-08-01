import * as types from "../constants/products.constant";

const initialState = {
    products: [],
    loading: false,
    cartList: [],
    selectedProduct: null,
};

const productsReducer = (state = initialState, action) => {
    console.log("hihi", action)
    const { type, payload } = action;

    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case types.GET_PRODUCTS_SUCCESS:
            return { ...state, products: payload.products, loading: false };
        case types.GET_PRODUCTS_FAILURE:
            return { ...state, loading: false };

        case types.GET_PRODUCT_DETAIL_REQUEST:
            return { ...state, loading: true };
        case types.GET_PRODUCT_DETAIL_SUCCESS:
            return { ...state, selectedProduct: payload.product, loading: false };
        case types.GET_PRODUCT_DETAIL_FAILURE:
            return { ...state, loading: false };

        // case types.POST_CART_PRODUCTS_REQUEST:
        //     return { ...state, loading: true };
        // case types.POST_CART_PRODUCTS_SUCCESS:
        //     return { ...state, selectedBook: payload, loading: false };
        // case types.POST_CART_PRODUCTS_FAILURE:
        //     return { ...state, loading: false };
        default:
            return state;
    }
};

export default productsReducer;