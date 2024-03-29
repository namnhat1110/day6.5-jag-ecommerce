import { toast } from "react-toastify";
import * as types from "../constants/products.constant";
import api from "../../apiService";

const getProducts = (pageNum, limit, query) => async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}api/products?page=${pageNum}&limit=${limit}`;
        if (query) url += `&q=${query}`;

        const data = await api.get(url);
        console.log("hahaha", data)
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: data.data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error });
    }
};


const getProductDetail = (productId) => async (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_DETAIL_REQUEST, payload: null });
    try {

        let url = `${process.env.REACT_APP_BACKEND_API}api/products/${productId}`

        const data = await api.get(url);
        console.log("hahaha", data)

        dispatch({ type: types.GET_PRODUCT_DETAIL_SUCCESS, payload: data.data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_PRODUCT_DETAIL_FAILURE, payload: error });
    }
};

// const postBookToList = (bookId) => async (dispatch) => {
//     dispatch({ type: types.POST_BOOK_TO_LIST_REQUEST, payload: null });
//     try {

//         //   //without axios
//         let url = `${process.env.REACT_APP_BACKEND_API}/favorites`
//         const res = await fetch(url);
//         console.log("response", res)
//         const data = await res.json();
//         console.log("hehe", data)
//         //   //---------------
//         //with axios
//         // const data = await api.get(url);
//         // console.log("hahaha", data)
//         //---------------
//         dispatch({ type: types.POST_BOOK_TO_LIST_SUCCESS, payload: data });
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({ type: types.POST_BOOK_TO_LIST_FAILURE, payload: error });
//     }
// };

const productsActions = { getProducts, getProductDetail };
export default productsActions;