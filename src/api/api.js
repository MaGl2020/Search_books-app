import axios from 'axios';
import { GOOGLE_KEY } from '../constants/constants';

const instanse = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
});

export const googleBooks = {
    getBooksList({searchTerms, pageNumber = 1, maxResults = 10, orderBy = 'relevance', categories = 'all'}) {
        const startIndex = (pageNumber - 1) * maxResults;

        const params = {
            ...GOOGLE_KEY,
            startIndex,
            orderBy,
            maxResults
        }
        return instanse.get(`?q=${searchTerms}${categories !== "all" ? `+subject:${categories}` : ""}`, {params})
                       .then(response => response.data)
    },
    getPageBook(bookId) {
        return instance.get(`${bookId}`, {params: GOOGLE_KEY})
                       .then(response => response.data)
    }
};

