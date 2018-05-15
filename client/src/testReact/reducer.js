import {ADD_BOOK, CHECK_VALUE, DELETE_BOOK, LOAD_BOOK, SEARCH_ADVANCE} from "./actions";

export function bookToReducer(state = [], action) {
    if(action.type === LOAD_BOOK) {
        return [...action.books];
    }

    if(action.type === ADD_BOOK) {
        return [...state, {...action.book}]
    }

    if(action.type === DELETE_BOOK) {
        return action.books.filter(book => !book.check)
    }

    if(action.type === CHECK_VALUE) {
        let newBooks = [...state];
        newBooks[action.id].check= action.check;
        return newBooks;
    }

    if (action.type === SEARCH_ADVANCE) {
        return [...action.books];
    }

    return state;
}
