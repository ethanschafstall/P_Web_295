import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const getAllBooksByDateRouter = express(); // Creating a new instance of express router
                
/**
 * @swagger
 * /api/authors:
 *   get:
 *     tags: [Author]
 *     security:
 *       - bearerAuth: []
 *     summary: Search for all the books by date.
 *     description: Search for all the books by date.
 *     responses:
 *       200:
 *         description: Gives all the authors.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: La liste des livres a bien été récupéré  
 *                     id_book:
 *                       type: integer
 *                       description: L'ID du livre.
 *                       example: 1
 *                     booTitle :
 *                       type: string
 *                       description: Le titre du livre.
 *                       example: L'art de la guerre 
 *                     booPageCount:
 *                       type: integer
 *                       description: Le nom de l'auteur.
 *                       example: 600
 *                     booExtract:
 *                       type: string
 *                       description: Un extrait du livre.
 *                       example: Il était une fois un informaticien qui vivait sous un bureau.
 *                     booSummary:
 *                       type: string
 *                       description: Un résumé du livre.
 *                       example: C'est l'histoire d'un informaticien.
 *                     booAvgRating:
 *                       type: float
 *                       description: La note moyenne du livre.
 *                       example: 4.5
 *                     booCoverImage:
 *                       type: string
 *                       description: Un lien pour l'image de couverture du livre.
 *                       example: https://th.bing.com/th/id/R.f999471f51eab473baa6fe5cf40a7f32?rik=CACwXQt6ldAzHQ&pid=ImgRaw&r=0
 *                     booPublishDate:
 *                       type: date
 *                       description: La date de publication du livre.
 *                       example: 11/11/2023
 *                     fk_user:
 *                       type: integer
 *                       description: id de l'user qui a publié.
 *                       example: 1
 *                     fk_publisher:
 *                       type: integer
 *                       description: id de l'éditeur qui a publié.
 *                       example: 1
 *                     fk_category:
 *                       type: integer
 *                       description: id de l'categorie à qui il appartient.
 *                       example: 1
 *       401:
 *         description: Pas de jeton d'authentification.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example:  Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.
 *       500:
 *         description: erreur du serveur.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example:  La liste des auteurs n'a pas pu être récupérée. Merci de réessayer dans quelques instants.
 */
 
// Endpoint for getting all books
getAllBooksByDateRouter.get("/", auth, (req, res) => {
    // Get all books
    Book.findAll({
        order: [
            ['booPublishDate', 'DESC']
        ]
    })
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

export { getAllBooksByDateRouter } // Exporting the router for use in other files
