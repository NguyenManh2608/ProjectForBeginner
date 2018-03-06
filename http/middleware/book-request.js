const Book        = require('../../src/book/book');
const connection  = require('../../database/knexConnection');
const BookFactory = require('../../src/book/book-factory');

let factory = new BookFactory();

module.exports = function (req, res, next) {
    let book = new Book(req.body.title, req.body.author);
    book.setPrice(req.body.price);
    book.setId(req.params.id);
    //create publisher
    connection.select()
        .from('publishers')
        .where({id : req.body.publisher_id})
        .then(results => {
            return factory.makeFromRequest(results[0]);
        }).then(function (publisher) {
        book.setPublisher(publisher);
        req.book = book;
        next();
    });
};