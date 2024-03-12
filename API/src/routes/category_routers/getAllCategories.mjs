import express from "express"; // Importing express for router creation
import { Category } from "../../db/sequelize.mjs"; // Importing Category model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getAllCategoriesRouter = express(); // Creating a new instance of express router

// Endpoint for getting all categories
getAllCategoriesRouter.get("/", auth, (req, res) => {
    // Get all categories
    Category.findAll()
        .then((category) => {
            // Returning success message along with all categories
            const message = `La liste des catégories a bien été récupérée`;
            res.json(success(message, category))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La liste de catégories n'a pas pu être récupérée. Merci de réessayer dans quelques instants.`
            res.status(500).json({message, data: error})
        })
})

export { getAllCategoriesRouter } // Exporting the router for use in other files
