import express from "express";
import { Publisher } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getPublisherRouter = express();

getPublisherRouter.get("/:id", (req, res) => {
    Publisher.findByPk(req.params.id)
        .then((publisher) => {
            if(publisher === null){
                const message = `L'éditeur demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            const message = `L'éditeur dont l'id vaut ${publisher.id_publisher} a bien été récupéré`
            res.json(success(message, publisher))
        })
        .catch((error) => {
            const message = `L'éditeur n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getPublisherRouter }