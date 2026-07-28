const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Book data
const books = [
    {
        title: "War and Peace",
        image: "images/book1.jpg",
        link: "About War and Peace",
        description: "A timeless novel about love, war, family and the search for meaning during the Napoleonic Wars."
    },
    {
        title: "The Alchemist",
        image: "images/book2.jpg",
        link: "About The Alchemist",
        description: "A young shepherd follows his dreams on a journey of self-discovery, courage and finding his true purpose"
    },
    {
        title: "The Hobbit",
        image: "images/book3.jpg",
        link: "About The Hobbit",
        description: "A fantasy adventure following Bilbo Baggins on an unexpected journey."
    }
];

// GET REST endpoint
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Start server
app.listen(port, () => {
    console.log("App listening to: " + port);
});