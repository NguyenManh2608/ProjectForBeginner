class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(results => {
            response.status(201).send({books: results.map(results)});
        }).catch( (err) => {
            next(err);
        });
    }

    removeBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then( () => {
            response.status(200).json({message:'Success'});
        }).catch( (err) => {
            next(err);
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message:'Success'});
        });
    }

    search(request, response, next) {
        request.app.get('books.searcher').search(request.condition)
            .then(result => {
                response.status(200).send(result.toJson());
            })
            .catch(next)
    };


}

module.exports = BookController;