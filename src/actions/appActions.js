import { SET_ERROR } from "../constants/constants";

export const setError = (value) => ({type: SET_ERROR, value});

export const getError = (error) => dispatch => {
    dispatch(setError(error.message))
};