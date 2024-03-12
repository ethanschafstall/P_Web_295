import express from "express"; // Importing express for router creation
import { Publisher } from "../../db/sequelize.mjs"; // Importing Publisher model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize
import { auth } from "../../auth/auth.mjs";

const getAllPublishersRouter = express(); // Creating a new instance of express router

// Endpoint for getting all publishers
getAllPublishersRouter.get("/", auth,(req, res) => {
    // If a search query is provided
    if(req.query.name) {
        // Finding publishers with names similar to the search query
        return Publisher.findAll({
            where: { name: { [Op.like]: `%${req.query.name}&`}}
        })
        .then((publisher) => {
            // Returning success message along with the found publishers
            const message = `Il y a ${publisher.length} livres qui correspondent au terme de la recherche`;
            res.json(success(message, publisher))
        })
    }
    // If no search query is provided, get all publishers
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
