import express from "express"; // Importing express for router creation
import { Book, Review } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getReviewsByBookRouter = express(); // Creating a new instance of express router

// Route to get reviews by book ID
getReviewsByBookRouter.get("/:id/reviews", auth, (req, res) => {
    // Check if the book ID parameter exists in the request
    if(req.params.id) {
        // Find a record in the "Book" table where the book ID matches
        return Book.findOne({
            where: { id_book: req.params.id },
        }).then((book) => {
            // If no record is found for the book ID, return a 404 error
            if (book === null) {
                const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            // Find all reviews associated with the book ID
            Review.findAll({
                where: { fk_book: book.id_book },
            }).then((reviews) => {
                // If reviews are found, return them along with a success message
                if(reviews.length !=0){
                    const message = `Voici tout les reviews du livre "${book.booTitle}"`;
                    res.json(success(message, reviews));
                }
            });
        }).catch((error) => {
            // If there's an error in fetching data, return a 500 error
            const message = "La liste des reviews n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        })        
    }
});


export { getReviewsByBookRouter }; // Exporting the router for use in other files
