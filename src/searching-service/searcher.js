const Connection = require('../../database/knexConnection');
const BookFactory = require('../book/book-factory');

class Searcher {

    /**
     *
     * @param {Connection} connection
     * @param {BookFactory} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    /**
     *
     * @param condition
     * @return Book[]
     */
    search(condition) {
        let factory  = this.factory;
        let sqlQuery = this.connection
            .select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publishers.name',
                'publishers.address', 'publishers.phone')
            .from('books')
            .leftJoin('publishers', function () {
                this.on('publisher_id', '=', 'publishers.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(results => results.map(element => factory.makeFromDB(element)));
    }
}

module.exports = Searcher;
