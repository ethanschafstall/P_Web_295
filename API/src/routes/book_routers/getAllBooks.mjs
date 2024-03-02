import express from "express";
import { books } from "../../db/mock-data.mjs";
import { success } from "../helper.mjs";

const getAllBooksRouter = express();

getAllBooksRouter.get("/", (req, res) => {
    const message = `La liste des produits a bien été récupéré`;
    res.json(success(message, books))    
})

export { getAllBooksRouter }