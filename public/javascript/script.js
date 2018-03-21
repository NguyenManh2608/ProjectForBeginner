$(document).ready( function () {

    function renderBook(books) {
        let template = $('#book-template').html();
        let resultHTML = books.map(function (book) {
            return template.replace(':bookName:', book.title).replace(':bookAuthor:', book.author);
        }).join('');
        $('#book-list').html(resultHTML);
    }

    $("#get-all").click(()=>{
        $.ajax("/books","GET").then(renderBook);
    });

    $("#get").click(() => {
        $.ajax("/title", "GET",{
            title: $("#title").val()
        }).then(renderBook)
    });

    $("#edit").click(() => {
        $.ajax("/edit", "put", {
            id          : $("#id").val(),
            title       : $("#title").val(),
            author      : $("#author").val(),
            publisher_id: $("#publisher").val(),
            price       : $('#price').val()
        })
    });

    $("#add").click(() => {
        $.ajax('/save', 'post', {
            title       : $("#title").val(),
            author      : $("#author").val(),
            publisher_id: $("#publisher").val(),
            price       : $('#price').val()
        })
    });

    $("#delete").click(() => {
        $.ajax('/delete', 'delete', {
                id: $("#id").val()
        })
    });

    $('#search').change(() => {
        $.get('/search-basic', {
            keyword: $('#search').val(),
        }).then(renderBook);
    });

    $('#search-advance').change(() => {
        $.get('/search-advance', {
            title       : $("#title").val(),
            author      : $('#author').val(),
            publisher_id: $("#publisher").val()
        }).then(renderBook);
    });
});

