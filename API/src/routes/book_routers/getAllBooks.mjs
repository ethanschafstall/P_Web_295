import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getAllBooksRouter = express(); // Creating a new instance of express router

// Endpoint for getting all books
getAllBooksRouter.get("/", (req, res) => {
    // Get all books
    Book.findAll()
        .then((book) => {
            // Returning success message along with all books
            const message = `La liste des livres a bien été récupéré`;
            res.json(success(message, book))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La liste de livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllBooksRouter } // Exporting the router for use in other files
