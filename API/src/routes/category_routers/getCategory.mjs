import express from "express"; // Importing express for router creation
import { Category } from "../../db/sequelize.mjs"; // Importing Category model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getCategoryRouter = express(); // Creating a new instance of express router

// Endpoint for getting a specific category by ID
getCategoryRouter.get("/:id", auth, (req, res) => {
    // Finding the category by its primary key (ID)
    Category.findByPk(req.params.id)
        .then((category) => {
            // If the category doesn't exist, return 404 error
            if(category === null){
                const message = `La catégorie demandée n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            // If the category exists, return success message along with the category data
            const message = `La catégorie dont l'id vaut ${category.id_category} a bien été récupérée`
            res.json(success(message, category))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `La catégorie n'a pas pu être récupérée. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getCategoryRouter } // Exporting the router for use in other files
