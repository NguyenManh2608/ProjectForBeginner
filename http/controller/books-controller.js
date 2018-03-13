class BookControllerViews {

    constructor() {

    }
    bookviews(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(books => {response.render('home.njk', { books : books})
            })
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(books => {response.render('detail.njk', {books: books[0]})
            })
            .catch(next)
    }

    search(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(books => {
                response.status(200).render('home.njk', {books : books})
            })
            .catch(next)
    };
}

module.exports = BookControllerViews;