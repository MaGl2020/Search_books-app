import {FETCH_BOOKS,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    FETCH_NEW_BOOKS,
    FETCH_NEW_BOOKS_SUCCESS,
    FETCH_NEW_BOOKS_ERROR} from '../constants/constants';

const initialState = {
    books: null,
    booksCount: 0,
    currentNumberPage: 1,
    isLoading: false,
    defaultOptionsSearch: {
        pageNumber: 1,
        maxResults: 10,
        orderBy: 'relevance',
        categories: 'all'
    },
    error: null
};

export const booksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
        case FETCH_NEW_BOOKS: {
            return {...state, isLoading: true}
        }
        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                defaultOptionSearch: action.options,
                booksCount: action.booksCount,
                books: action.books,
                currentNumberPage: 1
            }
        }
        case FETCH_NEW_BOOKS_SUCCESS: {
            return {
               ...state,
               isLoading: false,
               books: action.books,
               currentNumberPage: action.pageNumber 
            }
        }
        case FETCH_BOOKS_ERROR:
        case FETCH_NEW_BOOKS_ERROR: {
            return {
                ...state,
                isLoading: false,
                books: null
            }
        }
        default: 
            return state;
    }
};

