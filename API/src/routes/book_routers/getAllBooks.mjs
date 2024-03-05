import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success,failure } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";

const getAllBooksRouter = express();

getAllBooksRouter.get("/", auth, (req, res) => {
    Book.findAll({})
        .then((book) => {
            const message = `La liste des livres a bien été récupéré`;
            res.json(success(message, book))
        })
        .catch((error) => {
            const message = `La liste de livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllBooksRouter }