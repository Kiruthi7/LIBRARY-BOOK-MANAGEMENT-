Folder Structure:
 backend/
  ├─ server.js
  ├─ routes/
  │   └─ books.js
  ├─ models/
  │   └─ Book.js
  └─ package.json

package.json
 {
  "name": "library-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "body-parser": "^1.20.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

server.js
 const express = require("express");
 const cors = require("cors");
 const bodyParser = require("body-parser");
 const booksRoutes = require("./routes/books");

 const app = express();
 const PORT = process.env.PORT || 5000;

 // Middleware
 app.use(cors());
 app.use(bodyParser.json());

 // Routes
 app.use("/api/books", booksRoutes);

 // Start server
 app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
 });

module.exports
  const { v4: uuidv4 } = require("uuid");

// In-memory "database" for simplicity
 let books = [
   { id: uuidv4(), title: "Book One", author: "Author One", year: 2020 },
   { id: uuidv4(), title: "Book Two", author: "Author Two", year: 2021 }
 ];

  module.exports = books;

 router.post
  const express = require("express");
  const router = express.Router();
  const { v4: uuidv4 } = require("uuid");
  let books = require("../models/Book");

  // Get all books
  router.get("/", (req, res) => {
    res.json(books);
  });

  // Get book by ID
  router.get("/:id", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
   res.json(book);
 });

 // Add a new book
 router.post("/", (req, res) => {
   const { title, author, year } = req.body;
   const newBook = { id: uuidv4(), title, author, year };
   books.push(newBook);
   res.status(201).json(newBook);
 });

 // Update book
 router.put("/:id", (req, res) => {
   const bookIndex = books.findIndex(b => b.id === req.params.id);
   if (bookIndex === -1) return res.status(404).json({ message: "Book not found" });

   const { title, author, year } = req.body;
   books[bookIndex] = { ...books[bookIndex], title, author, year };
   res.json(books[bookIndex]);
 });

 // Delete book
 router.delete("/:id", (req, res) => {
   books = books.filter(b => b.id !== req.params.id);
 v res.json({ message: "Book deleted" });
 });

 module.exports = router;




