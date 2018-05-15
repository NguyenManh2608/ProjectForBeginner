import {ADD_BOOK, CHECK_VALUE, DELETE_BOOK, LOAD_BOOK, SEARCH_ADVANCE} from "./actions";
import axios from "axios";
export const bookAPI = () => next => action => {
    if (action.type === ADD_BOOK) {
        axios.post('/book/create', {
            title       : action.title,
            author      : action.author,
            publisher_id: action.publisher_id,
            price       : action.price
        }).then(res => {
            next({
                type : ADD_BOOK,
                book : res.data
            })
        })
    }

    else if(action.type === LOAD_BOOK) {
        axios.get("/books").then(res => {
            res.data.map(data => data.check = false);
            next({
                type : LOAD_BOOK,
                books: res.data
            })
        })
    }

    else if(action.type === DELETE_BOOK) {
        action.books.map(book => {
            if(book.check === true) {
                axios.post('/remove/'+ book.id).then();
            }
            return 0;
        });

        next({
            type: DELETE_BOOK,
            books:action.books
        })
    }

    else if(action.type === CHECK_VALUE) {
        next({
            type  : CHECK_VALUE,
            id    : action.id,
            check : action.check
        })
    }

    else if (action.type === SEARCH_ADVANCE) {
        action.books.map(book =>{
            if(book.keyword) {
                axios.get('/search' + action.keyword).then(res =>
                next({
                    type: SEARCH_ADVANCE,
                    data : res.data
                }))
            }
            return 0;
        })
    }

    else next(action);
};