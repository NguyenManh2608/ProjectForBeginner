const express = require('express');
const check = require('../../http/middleware/index');
const BookController = require('../../http/controller/book/book-controller');

const router = express.Router();

let bookController = new BookController();

router.get('/', (req, res) => {
   res.render('index.njk');
});

router.get('/books', check.searchCondition, bookController.search);

router.get('/book/:id',check.searchCondition, bookController.detail);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

router.post('/post',check.searchCondition,bookController.add);

router.put('/put/:id', check.searchCondition, bookController.edit);

module.exports = router;
