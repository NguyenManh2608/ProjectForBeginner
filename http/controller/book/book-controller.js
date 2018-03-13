class BookControllerApi {

    constructor() {

    }

    bookviews(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(books => {response.render('home.njk', {books : books})
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

    save(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(books => {
            response.status(201).render('save.njk',{books: books});
        }).catch( (err) => {
            next(err);
        });
    }

    save(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(books => {
            response.render('save.njk', {books: books})
        })
        .catch(next);
    }

}

module.exports = BookControllerApi;