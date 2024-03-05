import express from "express";
import { Author } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { ValidationError, Op } from "sequelize";

const getAllAuthorsRouter = express();

getAllAuthorsRouter.get("/", (req, res) => {
    if(req.query.name) {
        return Author.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
        .then((author) => {
            const message = `Il y a ${author.length} livres qui correspondent au terme de la recherche`;
            res.json(success(message, author))
        })
    }
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