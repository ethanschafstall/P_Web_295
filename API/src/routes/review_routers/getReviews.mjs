import express from "express"; // Importing express for router creation
import { Book, Review } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getBookReviewsRouter = express(); // Creating a new instance of express router

getBookReviewsRouter.get("/:id/reviews", auth, (req, res) => {
    const bookId = req.params.id;

    // Finding the book by its ID
    Book.findByPk(bookId)
        .then((book) => {
            console.log(book);
            if (!book) {
                // If the book with the provided ID is not found, return an error message
                const message = `Aucun livre trouvé avec l'ID ${bookId}.`;
                res.json(success(message));
            } else {
                // If the book is found, find its reviews
                return Review.findAll({
                    where: { id_book}
                })
                .then((reviews) => {
                    // Returning success message along with the found reviews
                    const message = `Les avis pour le livre "${book.name}" ont été récupérés avec succès.`;
                    res.json(success(message));
                })
            }
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `Les avis pour le livre avec l'ID ${bookId} n'ont pas pu être récupérés. Merci de réessayer dans quelques instants.`;
            res.json(success(message));
        });
});

export { getBookReviewsRouter }; // Exporting the router for use in other files
