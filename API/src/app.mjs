import express from "express";

import { books } from "./db/mock-books.mjs";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.json(books)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})