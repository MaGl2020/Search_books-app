import {googleBooks} from '../api/api';
import {FETCH_BOOK_CARD,
        FETCH_BOOK_CARD_SUCCESS,
        FETCH_BOOK__CARD_ERROR} from '../constants/constants';
import {getError} from './appActions';
      
export const CardAction = {
    fetchBookCard: () => ({type: FETCH_BOOK_CARD}),
    fetchBookCardSuccess: (book) => ({type: FETCH_BOOK_CARD_SUCCESS, book}),
    fetchBookCardError: () => ({type: FETCH_BOOK__CARD_ERROR})
};

export const fetchCard = bookId => async dispatch => {
    dispatch(CardAction.fetchBookCard());

    try {
        const response = await googleBooks.getBookCard(bookId);
        dispatch(CardAction.fetchBookCardSuccess(response));
    } catch (error) {
        dispatch(CardAction.fetchBookCardError());
        dispatch(getError(error));
    }
};
        