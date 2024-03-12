import express from "express"; // Importing express for router creation
import { Author } from "../../db/sequelize.mjs"; // Importing Author model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize

const getAllAuthorsRouter = express(); // Creating a new instance of express router

// Endpoint for getting all authors
getAllAuthorsRouter.get("/", (req, res) => {
    // If a search query is provided
    if(req.query.name) {
        // Finding authors with names similar to the search query
        return Author.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
    }
    // If no search query is provided, get all authors
    Author.findAll({})
        .then((author) => {
            // Returning success message along with all authors
            const message = `La liste des auteurs a bien été récupéré`;
            res.json(success(message, author))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La liste de auteurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllAuthorsRouter } // Exporting the router for use in other files
