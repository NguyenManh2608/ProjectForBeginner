export const ADD_BOOK       = 'ADD_BOOK';
export const LOAD_BOOK      = 'LOAD_BOOK';
export const LOAD_PUBLISHER = 'LOAD_PUBLISHER';
export const GET_PUBLISHER  = 'GET_PUBLISHER';
export const DELETE_BOOK    = 'DELETE_BOOK';
export const CHECK_VALUE    = 'CHECK_VALUE';
export const SEARCH_ADVANCE = 'SEARCH_ADVANCE';

export function addBook(title, author, publisher_id, price) {
    return {
        type        : ADD_BOOK,
        title       : title,
        author      : author,
        publisher_id: publisher_id,
        price       : price
    }
}

export function loadBook() {
    return {
        type: LOAD_BOOK
    }
}

export function getPublishers() {
    return {
        type: GET_PUBLISHER
    }
}

export function deleteBook(books) {
    return {
        type: DELETE_BOOK,
        books:books
    }
}

export function checkValue(id, check) {
    return {
        type    : CHECK_VALUE,
        id      : id,
        check   : check
    }
}

export function searchAdvance(keyword) {
    return {
        type: SEARCH_ADVANCE,
        keyword : keyword

    }
}