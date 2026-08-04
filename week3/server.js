const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from public folder
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myprojectDB");

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// Book Schema
const BookSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});

// Book Model
const Book = mongoose.model("Book", BookSchema);

// GET REST endpoint
app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find({});

        res.json({
            statusCode: 200,
            data: books,
            message: "Success"
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: err.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log("App listening to: " + port);
});
