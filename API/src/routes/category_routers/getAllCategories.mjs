import express from "express";
import { Category } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";

const getAllCategoriesRouter = express();

getAllCategoriesRouter.get("/", (req, res) => {
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