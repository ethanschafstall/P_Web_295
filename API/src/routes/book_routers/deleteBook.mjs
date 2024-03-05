import express from "express";
import { Book } from "../../db/sequelize.mjs";
import { success } from "../helper.mjs";
import { auth } from "../../auth/auth.mjs";

/**
 * Router for handling DELETE requests to delete a book by its ID.
 * Requires authentication middleware to ensure authorized access.
 * If the book with the specified ID exists, it is deleted from the database.
 * Responds with appropriate status codes and messages based on the outcome of the operation.
 * @param {string} "/:id" - The route parameter representing the ID of the book to delete.
 * @param {function} auth - Authentication middleware function to ensure authorized access.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
const deleteBookRouter = express();

deleteBookRouter.delete("/:id", (req, res) => {
    Book.findByPk(req.params.id)
    .then((deletedBook) => {
        if (deletedBook === null) {
            const message =
            "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
        return Book.destroy({
            where: { id: deletedBook.id },
        })
        .then((_) => {
            const message = `Le livre ${deletedBook.name} a bien été supprimé !`;
            res.json(success(message, deletedBook));
        });
    })
    .catch((error) => {
        const message =
        "Le livre n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error})
    });
});
    
export { deleteBookRouter }