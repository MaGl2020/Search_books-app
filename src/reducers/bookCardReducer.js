import {FETCH_BOOK_CARD,
        FETCH_BOOK_CARD_SUCCESS,
        FETCH_BOOK__CARD_ERROR } from "../constants/constants";

const initialState = {
    isLoading: false,
    book: null
};

export const bookCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOK_CARD: {
            return {...state, isLoading: true}
        }
        case FETCH_BOOK_CARD_SUCCESS: {
            return {...state, isLoading: false, book: action.book}
        }
        case FETCH_BOOK__CARD_ERROR: {
            return {...state, isLoading: false}
        }
        default:
            return state;
    }
};