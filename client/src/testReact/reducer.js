import {ADD_BOOK, LOAD_BOOK} from "./actions";

export function bookToReducer(state = [], action) {
    if(action.type === LOAD_BOOK) {
        return [...action.books];
    }

    if(action.type === ADD_BOOK) {
        return [...state, {
            title    : action.title,
            author   : action.author,
            publisher_id: action.publisher_id,
            price    : action.price
        }]
    }
    return state;
}