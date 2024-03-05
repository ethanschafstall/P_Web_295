import express from "express";
import { Author } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getAllAuthorsRouter = express();

getAllAuthorsRouter.get("/", (req, res) => {
    Author.findAll({})
        .then((author) => {
            const message = `La liste des auteurs a bien été récupéré`;
            res.json(success(message, author))
        })
        .catch((error) => {
            const message = `La liste de auteurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllAuthorsRouter }