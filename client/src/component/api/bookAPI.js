import {ADD_BOOK, DELETE_BOOK, LOAD_BOOK} from "../actions";
import axios                              from "axios";

export const bookAPI = store => next => action => {
    if (action.type === ADD_BOOK) {
        axios.post('/create', {
            title: action.title,
            author: action.author,
            publisher_id: action.publisher_id,
            price: action.price
        }).then(data => next({
            type: ADD_BOOK,
            book: data
        }))
    } else if (action.type === LOAD_BOOK) {
        axios.get("/books").then(res => next({
            type: LOAD_BOOK,
            books: res.data
        }))
    } else if(action.type === DELETE_BOOK) {
        axios.put('./delete/:id').then(res => next({
            type: LOAD_BOOK,
            books: res.data
        }))
    } else next(action);
};