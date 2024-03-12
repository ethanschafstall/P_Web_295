import express from "express"; // Importing express for router creation
import { Book, Category } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function

const getBooksByCategoryRouter = express(); // Creating a new instance of express router

// Route to get books by category ID
getBooksByCategoryRouter.get("/:id/books", (req, res) => {
    // Check if the category ID parameter exists in the request
    if(req.params.id) {
        // Find a record in the "Category" table where the category ID matches
        return Category.findOne({
            where: { id_category: req.params.id },
        }).then((category) => {
            // If no record is found for the category ID, return a 404 error
            if (category === null) {
                const message = "Le catégorie demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            // Find all books associated with the category ID
            Book.findAll({
                where: { fk_category: category.id_category },
            }).then((books) => {
                // If books are found, return them along with a success message
                if(books.length !=0){
                    const message = `Voici tout les livres ayant comme catégorie ${req.params.id}`;
                    res.json(success(message, books));
                }
            });
        }).catch((error) => {
            // If there's an error in fetching data, return a 500 error
            const message = "La liste des catégories n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        })        
    }
});

export { getBooksByCategoryRouter }; // Exporting the router for use in other files