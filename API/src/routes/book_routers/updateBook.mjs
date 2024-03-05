import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";

const updateBookRouter = express() 

updateBookRouter.post("/:id", auth, (req, res) => {
    const bookId = req.params.id;
    Book.update(req.body, { where: { id: bookId } })
    .then((_) => {
        return Product.findByPk(bookId)
        .then((updatedBook) => {
            if (updatedBook === null) {
                const message =
                "Le produit demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                // A noter ici le return pour interrompre l'exécution du code
                return res.status(404).json({ message });
            }
            // Définir un message pour l'utilisateur de l'API REST
            const message = `Le produit ${updatedBook.booTitle} dont l'id vaut ${updatedProduct.id_book} a été mis à jour avec avec succès !`;
            // Retourner la réponse HTTP en json avec le msg et le produit créé
            res.json(success(message, updatedProduct));
        });
    })
    .catch((error) => {
        const message =
        "Le produit n'a pas pu être mis à jour. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
});


export { updateBookRouter };