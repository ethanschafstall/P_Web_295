import express from "express";

import { books } from "../db/mock-books.mjs";

import { success } from "./helper.mjs";

const allBooksRouter = express();

allBooksRouter.get("/products/", (req, res) => {
    const message = `La liste des produits a bien été récupéré`;
    res.json(success(message, books))    
})

export { allBooksRouter }