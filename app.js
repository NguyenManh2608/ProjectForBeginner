const path           = require('path');
const bodyParser     = require('body-parser');
const express        = require('express');
const knex           = require('./database/knexConnection');
const index          = require('./router/router-book');
const BookRepository = require('./src/book/book-repository');
const BookFactory    = require('./src/book/book-factory');
const Searcher       = require('./src/searching-service/searcher');
const PublisherProvider = require('./src/publisher/publisher-provider');
const nunjucks       = require('nunjucks');

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('views', (__dirname+'/views'));
app.use(express.static('public'));
app.set('books.repo', new BookRepository(knex));
app.set('books.searcher', new Searcher(knex, new BookFactory()));
app.set('publisher.provider', new PublisherProvider(knex));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(index);
// app.use(router);

app.listen(8080, () => {
    console.log('sever running port 8080');
});
