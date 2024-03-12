import express from "express"; // Importing express for router creation
import { Book, Review } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import { ValidationError } from "sequelize";

const createReviewRouter = express(); // Creating a new instance of express router

// Endpoint for creating a new book
createReviewRouter.post("/:id/reviews", auth,(req, res) => {
    // Finding the book by its primary key (ID)
    Book.findByPk(req.params.id)
    .then((book) => {
        // If the book doesn't exist, return 404 error
        if (book === null) {
            const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
            return res.status(404).json({ message });
        }
    })
    .then((_) => {
    // Creating a new Review with the provided data
    Review.create(req.body)
    .then((createdReview) => {
        // Return success message upon successful creation
        res.json(success(`Le review a bien été créé !`, createdReview));
    })
    .catch((error) => {
        // If the error is a validation error, return a 400 status code with the error message
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        // If any other error occurs during the process, return a generic error message
        const message = "Le review n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
        res.status(500).json({ message, data: error });
    });
    })
});

export { createReviewRouter }; // Exporting the router for use in other files
