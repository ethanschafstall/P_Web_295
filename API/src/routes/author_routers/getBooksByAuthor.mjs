import express from "express"; // Importing express for router creation
import { Book, Wrote, Author } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize

const getBooksByAuthor = express(); // Creating a new instance of express router

// Route to get books by author ID
getBooksByAuthor.get("/:id/books", auth, (req, res) => {
    // Check if the author ID parameter exists in the request
    if(req.params.id) {
        // Find a record in the "Wrote" table where the author ID matches
        return Wrote.findOne({
            where: { fk_author: { [Op.eq]: req.params.id } }
        }).then((wrote) => {
            // If no record is found for the author ID, return a 404 error
            if (wrote === null) {
                const message = "L'auteur demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            // Find all books associated with the author ID
            Book.findAll({
                where: { id_book: { [Op.eq]: wrote.fk_book } },
            }).then((books) => {
                // Find the author record based on the author ID
                Author.findOne({
                    where: { id_author: { [Op.eq]: req.params.id } }
                }).then((author) => {
                    // If books are found, return them along with a success message
                    if(books.length !=0){
                        const message = `Voici tout les livres de l'auteur "${author.autFirstName}"`;
                        res.json(success(message, books));
                    }
                });
            });
        }).catch((error) => {
            // If there's an error in fetching data, return a 500 error
            const message = "La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        })        
    }
});


export { getBooksByAuthor }; // Exporting the router for use in other files