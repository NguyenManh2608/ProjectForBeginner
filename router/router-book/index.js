const express = require('express');
const check = require('../../http/middleware/index');
const BookController = require('../../http/controller/book/book-controller');
const TitleSearchCondition = require('../../src/searching-service/title-search-condition');

const router = express.Router();

let bookController = new BookController();

router.get('/', (req, res) => {
   res.render('home.njk');
});
router.get("/title", function (req, res, next) {
   req.condition = new TitleSearchCondition(req.query.title);
   next();
}, bookController.search);

router.get('/books', check.searchCondition, bookController.search);

router.get('/book', check.searchCondition, bookController.detail);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

router.get('/save', check.searchCondition, bookController.renderEdit);

router.post('/create', check.bookRequest, bookController.add);

router.post('/detail/:id', check.bookRequest, bookController.edit);

router.get('/delete/:id', bookController.remove);

router.get('/detail/:id',check.searchCondition, bookController.renderEdit);

module.exports = router;
