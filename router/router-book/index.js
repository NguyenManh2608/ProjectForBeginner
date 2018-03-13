const express = require('express');
const check = require('../../http/middleware/index');
const BookController = require('../../http/controller/book/book-controller');
const router = express.Router();

let bookController = new BookController();

router.get('/', check.searchCondition, bookController.bookviews);

router.get('/detail/:id',check.searchCondition, bookController.detail);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

router.get('/post',check.searchCondition,bookController.save);

router.get('/put/:id', check.searchCondition, bookController.save);

module.exports = router;
