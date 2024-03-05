import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success} from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";

const getBookRouter = express();

getBookRouter.get("/:id", auth, (req, res) => {
    Book.findByPk(req.params.id)
        .then((book) => {
            if(book === null){
                const message = `Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            const message = `Le livre dont l'id vaut ${book.id_book} a bien été récupéré`
            res.json(success(message, book))
        })
        .catch((error) => {
            const message = `Le livre n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getBookRouter }