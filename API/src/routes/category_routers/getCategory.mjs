import express from "express";
import { Category } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getCategoryRouter = express();

getCategoryRouter.get("/:id", (req, res) => {
    Category.findByPk(req.params.id)
        .then((category) => {
            if(category === null){
                const message = `a catégorie demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            const message = `Le catégorie dont l'id vaut ${category.id_category} a bien été récupéré`
            res.json(success(message, category))
        })
        .catch((error) => {
            const message = `Le catégorie n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getCategoryRouter }