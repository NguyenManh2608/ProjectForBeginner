$(document).ready( function () {

    function renderBook(books) {
        let template = $('#book-template').html();
        let resultHTML = books.map(function (book) {
            return template.replace(':bookName:', book.title)
                .replace(":bookAuthor:", book.author)
                .replace(":bookPublisher:", book.publisher.name)
                .replace(":bookPrice:", book.price)
                .replace(":publisherPhone:", book.publisher.phone)
                .replace(":id:", book.id);
        }).join('');
        $('#book-list').html(resultHTML);
    }

    $.ajax('/books').then(renderBook);

    $(document).on("click", "#edit", function () {
       $.ajax('/book/detail/:id').then(renderBook);
        renderEdit();
    });

    function renderEdit() {
        let template = $('#book-edit').html();
        $('#all').html(template);
    }

    $('#search').submit(function (e) {
       e.preventDefault();
    });

    $('#input-search').keyup(function () {
        let $this = $(this);
        $.get('/search-basic', {
            keyword: $this.val(),
        }).then(renderBook);
    });

    $('#search-advance').change(() => {
        $.get('/search-advance', {
            title       : $("#title").val(),
            author      : $('#author').val(),
            publisher_id: $("#publisher").val()
        }).then(renderBook);
    });

    $("#edit").click(() => {
        $.ajax('book/:id',{
            method: "put",
            data: {
                title: $("#title").val() ,
                author: $("#author").val() ,
                publisher: $("#publisher").val() ,
                price: $("#price").val()
            }
        });
    })
});

