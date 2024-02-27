import express from "express";
import { books } from "./db/mock-books.mjs";
import { success } from "./routes/helper.mjs";
import { initDb } from "./db/sequelize.mjs";

const app = express();
const port = 3000;

initDb();

app.get("/", (req,res) => {
    
    res.json(success())
})

app.get("/api/", (req,res) => {
    res.redirect(`http://localhost:${port}/`)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

// Finding all books 
import { allBooksRouter } from "./routes/getAllBooks.mjs"
app.use("/api/books", allBooksRouter)

// Finding books by ID
import { bookByIdRouter } from "./routes/getBookById.mjs"
app.use("/api/books", bookByIdRouter)