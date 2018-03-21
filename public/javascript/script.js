$(document).ready( function () {

    function renderBooks(url, method, data) {
        return $.ajax({
            url     : url,
            method  : method,
            data    : data
        });
    }

    function listBook(books) {
        let template = $('#book-template').html();
        let resultHTML = books.map(function (book) {
            return template.replace(':bookName:', book.title).replace(':bookAuthor:', book.publisher);
        }).join('');
        $('#book-list').html(resultHTML);
    }

    $("#get-all").click(()=>{
        renderBooks("/books","GET").then(listBook);
    });

    $("#get").click(() => {
        renderBooks("/title", "GET",{
            title: $("#title").val()
        }).then(listBook)
    });

    $("#edit").click(() => {
        renderBooks("/edit", "put", {
            id          : $("#id").val(),
            title       : $("#title").val(),
            author      : $("#author").val(),
            publisher_id: $("#publisher").val(),
            price       : $('#price').val()
        })
    });

    $("#add").click(() => {
        renderBooks('/save', 'post', {
            title       : $("#title").val(),
            author      : $("#author").val(),
            publisher_id: $("#publisher").val(),
            price       : $('#price').val()
        })
    });

    $("#delete").click(() => {
        renderBooks('/delete', 'delete', {
                id: $("#id").val()
        })
    });

    $('#search').change(() => {
        $.get('/search-basic', {
            keyword: $('#search').val(),
        }).then(listBook);
    });

    $('#search-advance').change(() => {
        $.get('/search-advance', {
            title       : $("#title").val(),
            author      : $('#author').val(),
            publisher_id: $("#publisher").val()
        }).then(listBook);
    });
});

