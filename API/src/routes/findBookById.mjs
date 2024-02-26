import express from "express";

import { books } from "../db/mock-books.mjs";

import { success,failure } from "./helper.mjs";

const bookByIdRouter = express();

bookByIdRouter.get("/products/", (req, res) => {
    const bookId = req.params.id;
    if (bookId == null){
        const message = `Le produit n'a pas pu être récupéré`;
        const error = `Aucun produit avec l'id ${req.params.id} a été trouvé`;
        res.status(404).json(failure(message, error))
    }
    const book = books.find((book) => books.id == bookId)
    const message = `Le produit dont l'id vaut ${bookId} a bien été récupéré`;
    res.json(success(message, books))
})

export { bookByIdRouter }