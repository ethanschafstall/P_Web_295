import express from "express";
import { Publisher } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { ValidationError, Op } from "sequelize";

const getAllPublishersRouter = express();

getAllPublishersRouter.get("/", (req, res) => {
    if(req.query.name) {
        return Publisher.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
        .then((publisher) => {
            const message = `Il y a ${publisher.length} livres qui correspondent au terme de la recherche`;
            res.json(success(message, publisher))
        })
    }
    Publisher.findAll()
        .then((publisher) => {
            const message = `La liste des éditeurs a bien été récupéré`;
            res.json(success(message, publisher))
        })
        .catch((error) => {
            const message = `La liste des éditeurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllPublishersRouter }