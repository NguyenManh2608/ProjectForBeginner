class BookController {


    search(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then( books => response.json(books))
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(books => response.json(books))
            .catch(next)
    }

    add(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(books => {
            response.render('save.njk', {book: books[0]});
        })
    .catch(next)
    }

    edit(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book)
            .then(() => {
                response.json({message:"Success"})
            })
            .catch(next)
    }

    renderEdit(request, response, next) {
        let booksPromise = request.app.get('books.searcher').search(request.condition);
        let publishersPromise = request.app.get('publisher.provider').provideAll();
        Promise.all([booksPromise, publishersPromise]).then( value => {
            response.render('save.njk', {book: value[0][0], publishers: value[1]})
        }).catch(next)

    }

    remove(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(() => {
            response.redirect('/');
        }).catch(next);
    }
}

module.exports = BookController;