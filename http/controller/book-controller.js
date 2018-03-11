class BookController {

    constructor() {

    }

    createBook(request, response, next) {
        // console.log(request.book);
        let repo = request.app.get('books.repo');
        repo.add(request.book).then( () => {
            response.status(201).send({message: "Success!"});
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
            .then((results) => response.status(200).render('index.ejs',{data:results.map(result => result.toJson())}))
            .catch(next)
    }

    //use render to upload data to home.ejs
}

module.exports = BookController;