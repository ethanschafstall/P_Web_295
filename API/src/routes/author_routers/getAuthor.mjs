import express from "express"; // Importing express for router creation
import { Author } from "../../db/sequelize.mjs"; // Importing Author model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function

const getAuthorRouter = express();

getAuthorRouter.get("/:id", (req, res) => {
    Author.findByPk(req.params.id)
        .then((author) => {
            if(author === null){
                const message = `L'auteur demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            const message = `L'auteur dont l'id vaut ${author.id_author} a bien été récupéré`
            res.json(success(message, author))
        })
        .catch((error) => {
            const message = `L'auteur n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getAuthorRouter }