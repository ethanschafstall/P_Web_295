import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getBookRouter = express(); // Creating a new instance of express router

// Endpoint for getting a specific book by ID
getBookRouter.get("/:id", auth,(req, res) => {
    // Finding the book by its primary key (ID)
    Book.findByPk(req.params.id)
        .then((book) => {
            // If the book doesn't exist, return 404 error
            if(book === null){
                const message = `Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            // If the book exists, return success message along with the book data
            const message = `Le livre dont l'id vaut ${book.id_book} a bien été récupéré`
            res.json(success(message, book))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `Le livre n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getBookRouter } // Exporting the router for use in other files
