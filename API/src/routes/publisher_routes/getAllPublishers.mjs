import express from "express";
import { Publisher } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getAllPublishersRouter = express();

getAllPublishersRouter.get("/", (req, res) => {
    Publisher.findAll({})
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