
const clickMe = () => {
    alert("Welcome to Story Explorer!");
};


// Create cards dynamically
const addCards = (items) => {

    items.forEach(item => {

        let itemToAppend =
            '<div class="col s12 m4">' +

                '<div class="card medium">' +

                    '<div class="card-image waves-effect waves-block waves-light">' +

                        '<img class="activator" src="' +
                        item.image +
                        '" alt="' +
                        item.title +
                        '">' +

                    '</div>' +

                    '<div class="card-content">' +

                        '<span class="card-title activator grey-text text-darken-4">' +
                        item.title +
                        '<i class="material-icons right">more_vert</i>' +
                        '</span>' +

                        '<p>' +
                        '<a href="#">' +
                        item.link +
                        '</a>' +
                        '</p>' +

                    '</div>' +

                    '<div class="card-reveal">' +

                        '<span class="card-title grey-text text-darken-4">' +
                        item.title +
                        '<i class="material-icons right">close</i>' +
                        '</span>' +

                        '<p>' +
                        item.description +
                        '</p>' +

                    '</div>' +

                '</div>' +

            '</div>';

        $("#card-section").append(itemToAppend);

    });
};


// Get books from REST API
const getBooks = () => {

    $.get("/api/books", (response) => {

        console.log("Books received from API:", response);

        addCards(response);

    }).fail(() => {

        console.log("Unable to retrieve books.");

    });

};


// When page is ready
$(document).ready(function () {

    // Initialise Materialize image
    $('.materialboxed').materialbox();

    // Button click
    $('#clickMeButton').click(() => {
        clickMe();
    });

    // Get books from REST API
    getBooks();

});