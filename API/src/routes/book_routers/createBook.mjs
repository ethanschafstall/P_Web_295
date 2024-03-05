import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";

const createBookRouter = express() 

createBookRouter.post("/:id", (req, res) => {
    Book.create(req.body)
    .then((createdBook) => {
        // Définir un message pour le consommateur de l'API REST
        // Retourner la réponse HTTP en json avec le msg et le produit créé
        res.json(success(`Le produit ${createdBook.name} a bien été créé !`, createdBook));
    })
    .catch((error) => {
        if (error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error});
        }
        const message =
        "Le produit n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
})


export { createBookRouter };