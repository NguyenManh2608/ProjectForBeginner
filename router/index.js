const express = require('express');
const router = express.Router();
const check = require('../http/middleware/index');
const IdSearchCondition = require('../src/searching-service/id-search-condition');
const BookControllerViews = require('../http/controller/books-controller');

let bookControllerViews = new BookControllerViews();

router.get('/', check.searchCondition, bookControllerViews.bookviews);

router.get('/detail/:id', function (request, response, next) {
    request.condition = new IdSearchCondition(request.params.id);
    next();
}, bookControllerViews.detail);

router.get('/book',check.searchCondition,bookControllerViews.search);

router.get('/search-advance', check.searchCondition, bookControllerViews.search);

router.get('/search-basic', check.searchCondition, bookControllerViews.search);

module.exports = router;
