import {googleBooks} from '../api/api';
import {FETCH_BOOKS,
        FETCH_BOOKS_SUCCESS,
        FETCH_BOOKS_ERROR,
        FETCH_NEW_BOOKS,
        FETCH_NEW_BOOKS_SUCCESS,
        FETCH_NEW_BOOKS_ERROR} from '../constants/constants';
import {getError} from '../actions/appActions';

export const BooksAction = {
    fetchBooks: () => ({type: FETCH_BOOKS}),
    fetchBooksSuccess: (optios, books, booksCount) => ({
        type: FETCH_BOOKS_SUCCESS, optios, books, booksCount}),
    fetchBooksError: () => ({type: FETCH_BOOKS_ERROR}),
    fetchNewBooks: () => ({type: FETCH_NEW_BOOKS}),
    fetchNewBooksSuccess: (pageNumber, books) => ({
        type: FETCH_NEW_BOOKS_SUCCESS, pageNumber, books}),
    fetchNewBooksError: () => ({type: FETCH_NEW_BOOKS_ERROR})
};

export const fetchBooksList = options => async dispatch => {
    dispatch(BooksAction.fetchBooks());

    try {
        const response = await googleBooks.getBooksList(options);
        
        if (response.totalItems > 0) {
            dispatch(BooksAction.fetchBooksSuccess(options, response.totalItems, response.items));
        } else {
            dispatch(BooksAction.fetchBooksSuccess(null, 0, null));
        }
    } catch (error) {
        dispatch(BooksAction.fetchBooksError());
        dispatch(getError(error));
    }
};

export const fetchNewBooksList = pageNumber => async (dispatch, getState) => {
    dispatch(BooksAction.fetchNewBooks());

    try {
        const options = getState().books.defaultOptionsSearch;
        const response = await googleBooks.getBooksList({...options, pageNumber});

        dispatch(BooksAction.fetchNewBooksSuccess(pageNumber, response.items));
    } catch (error) {
        dispatch(BooksAction.fetchNewBooksError());
        dispatch(getError(error));
    }
};




