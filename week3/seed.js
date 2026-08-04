const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myprojectDB");

const BookSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

const Book = mongoose.model("Book", BookSchema);

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
        description: "A young shepherd follows his dreams on a journey of self-discovery, courage and finding his true purpose."
    },
    {
        title: "The Hobbit",
        image: "images/book3.jpg",
        link: "About The Hobbit",
        description: "A fantasy adventure following Bilbo Baggins on an unexpected journey."
    }
];

async function seedDatabase() {
    try {
        await Book.deleteMany({});
        await Book.insertMany(books);

        console.log("Books successfully added to MongoDB");

        await mongoose.connection.close();
    } catch (error) {
        console.error("Error adding books:", error);
    }
}

seedDatabase();
