$(function () {
    $("#button1").click(function () {
        makeRequest();
    });
});

async function makeRequest() {
    $.get("https://localhost:44397/api/books").then(function (books) {
        console.log(books);
    });

    var books = await $.get("https://localhost:44397/api/books");
    console.log(books);
}