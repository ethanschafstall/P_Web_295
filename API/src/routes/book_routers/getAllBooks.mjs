import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getAllBooksRouter = express();

getAllBooksRouter.get("/", (req, res) => {
    Book.findAll({})
        .then((book) => {
            const message = `La liste des produits a bien été récupéré`;
            res.json(success(message, book))
        })
        .catch((error) => {
            const message = `La liste de produits n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllBooksRouter }