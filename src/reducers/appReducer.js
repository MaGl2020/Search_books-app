import { SET_ERROR } from "../constants/constants";

const initialState = {
    error: null
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR: {
            return {...state, error: action.value}
        }
        default:
            return state;
    }
};