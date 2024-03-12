import express from "express"; // Importing express for router creation
import { Review } from "../../db/sequelize.mjs"; // Importing Author model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getAllReviewsRouter = express(); // Creating a new instance of express router

// Endpoint for getting all authors
getAllReviewsRouter.get("/", auth,(req, res) => {
    // If a search query is provided
    if(req.params.name) {
        // Finding authors with names similar to the search query
        return Review.findAll({
            where: { name: { [Op.eq]: req.params.name }}
        })
    }
    // If no search query is provided, get all authors
    Review.findAll({})
        .then((reviews) => {
            // Returning success message along with all authors
            const message = `La liste des reviews a bien été récupéré`;
            res.json(success(message, reviews))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La liste de reviews n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllReviewsRouter } // Exporting the router for use in other files