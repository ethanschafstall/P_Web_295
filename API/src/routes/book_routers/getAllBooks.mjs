import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";
import { ValidationError, Op } from "sequelize";

const getAllBooksRouter = express();

getAllBooksRouter.get("/", auth, (req, res) => {
    if(req.query.name) {
        return Book.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
        .then((book) => {
            const message = `Il y a ${book.length} livres qui correspondent au terme de la recherche`;
            res.json(success(message, book))
        })
    }
    Book.findAll()
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