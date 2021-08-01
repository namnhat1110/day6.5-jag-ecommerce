import { toast } from "react-toastify";
import * as types from "../constants/auth.constant";
import api from "../../apiService";

const loginRequest = (user) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST, payload: null });
    try {
        const data = `${process.env.REACT_APP_BACKEND_API}api/auth/login`;

        dispatch({ type: types.LOGIN_SUCCESS, payload: data });
        toast.success(`Welcome ${user.name}`);

    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE, payload: error });
    }
};

const registerRequest = (user) => async (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST, payload: null });
    try {

        let url = `${process.env.REACT_APP_BACKEND_API}api/auth/register`;

        const data = await api.post(url);
        console.log("hahaha", data)

        dispatch({ type: types.REGISTER_SUCCESS, payload: data });
        toast.success(`Register successfully`);
    } catch (error) {
        dispatch({ type: types.REGISTER_FAILURE, payload: error });
        toast.error(error.message);
    }
};





const authActions = { registerRequest, loginRequest };
export default authActions;