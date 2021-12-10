import { combineReducers } from "redux";
import { booksListReducer } from "./booksListReducer";
import { bookCardReducer } from "./bookCardReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    booksList: booksListReducer,
    bookCard: bookCardReducer
});