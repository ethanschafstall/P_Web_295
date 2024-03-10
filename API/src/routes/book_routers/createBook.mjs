import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const createBookRouter = express(); // Creating a new instance of express router

// Endpoint for creating a new book
createBookRouter.post("/", auth,(req, res) => {
    // Creating a new book with the provided data
    Book.create(req.body)
        .then((createdBook) => {
            // Return success message upon successful creation
            res.json(success(`Le produit "${createdBook.booTitle}" a bien été créé !`, createdBook));
        })
        .catch((error) => {
            // If the error is a validation error, return a 400 status code with the error message
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            // If any other error occurs during the process, return a generic error message
            const message = "Le produit n'a pas pu être ajouté. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

export { createBookRouter }; // Exporting the router for use in other files
