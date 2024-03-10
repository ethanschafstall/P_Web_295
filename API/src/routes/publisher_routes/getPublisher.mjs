import express from "express"; // Importing express for router creation
import { Publisher } from "../../db/sequelize.mjs"; // Importing Publisher model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs";

const getPublisherRouter = express(); // Creating a new instance of express router

// Endpoint for getting a specific publisher by ID
getPublisherRouter.get("/:id", auth,(req, res) => {
    // Finding the publisher by its primary key (ID)
    Publisher.findByPk(req.params.id)
        .then((publisher) => {
            // If the publisher doesn't exist, return 404 error
            if(publisher === null){
                const message = `L'éditeur demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            // If the publisher exists, return success message along with the publisher data
            const message = `L'éditeur dont l'id vaut ${publisher.id_publisher} a bien été récupéré`
            res.json(success(message, publisher))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `L'éditeur n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getPublisherRouter } // Exporting the router for use in other files
