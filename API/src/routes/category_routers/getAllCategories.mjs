import express from "express";
import { Category } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";
import { ValidationError, Op } from "sequelize";

const getAllCategoriesRouter = express();

getAllCategoriesRouter.get("/", auth, (req, res) => {
    if(req.query.name) {
        return Category.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
        .then((category) => {
            const message = `Il y a ${category.length} livres qui correspondent au terme de la recherche`;
            res.json(success(message, category))
        })
    }
    Category.findAll({})
        .then((category) => {
            const message = `La liste des catégories a bien été récupéré`;
            res.json(success(message, category))
        })
        .catch((error) => {
            const message = `La liste de catégories n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllCategoriesRouter }