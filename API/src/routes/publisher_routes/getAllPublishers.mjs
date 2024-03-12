import express from "express"; // Importing express for router creation
import { Publisher } from "../../db/sequelize.mjs"; // Importing Publisher model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getAllPublishersRouter = express(); // Creating a new instance of express router

// Endpoint for getting all publishers
getAllPublishersRouter.get("/", auth,(req, res) => {
    // Get all publishers
    Publisher.findAll()
        .then((publisher) => {
            // Returning success message along with all publishers
            const message = `La liste des éditeurs a bien été récupéré`;
            res.json(success(message, publisher))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La liste des éditeurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllPublishersRouter } // Exporting the router for use in other files
