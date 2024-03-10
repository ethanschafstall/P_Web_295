import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const deleteBookRouter = express(); // Creating a new instance of express router

// Endpoint for deleting a specific book by ID
deleteBookRouter.delete("/:id", auth,(req, res) => {
    // Finding the book by its primary key (ID)
    Book.findByPk(req.params.id)
        .then((deletedBook) => {
            // If the book doesn't exist, return 404 error
            if (deletedBook === null) {
                const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            // If the book exists, delete it
            return Book.destroy({
                where: { id: deletedBook.id },
            })
            .then((_) => {
                // Return success message upon successful deletion
                const message = `Le livre ${deletedBook.name} a bien été supprimé !`;
                res.json(success(message, deletedBook));
            });
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = "Le livre n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error})
        });
});
    
export { deleteBookRouter } // Exporting the router for use in other files
