const BookFactory = require('../../src/book/book-factory');

let bookFactory   = new BookFactory();

module.exports = function (req, res, next) {
    bookFactory.make(req.body)
    .then( book => {
            book.setId(req.body.id);
            req.book = book;
            next();
        });
};