import express from "express"; // Importing express for router creation
import { Book } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware

const updateBookRouter = express(); // Creating a new instance of express router

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     tags: [Book]
 *     security:
 *       - bearerAuth: []
 *     summary: Mettre à jour un livre.
 *     description: Mettre à jour un livre.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID du livre
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: mettre à jour un livre.
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
 *                       example:Le livre l'art de la guerre dont l'id vaut 1 a été mis à jour avec succès !
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
 *       404:
 *         description: Aucune catégorie trouvé avec l'ID spécifié.
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
 *                       example: Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.
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
 *                       example:  Le livre n'a pas pu être mis à jour. Merci de réessayer dans quelques instants
 */

// Endpoint for updating a specific book by ID
updateBookRouter.put("/:id", auth,(req, res) => {
    const bookId = req.params.id; // Extracting book ID from request parameters
    // Updating the book with the provided data
    Book.update(req.body, { where: { id_book: bookId } })
        .then((_) => {
            // Finding the updated book by its primary key (ID)
            return Book.findByPk(bookId)
                .then((updatedBook) => {
                    // If the updated book doesn't exist, return 404 error
                    if (updatedBook === null) {
                        const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                        return res.status(404).json({ message });
                    }
                    // If the book is updated successfully, return success message along with the updated book data
                    const message = `Le livre ${updatedBook.booTitle} dont l'id vaut ${updatedBook.id_book} a été mis à jour avec succès !`;
                    res.json(success(message, updatedBook));
                });
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = "Le livre n'a pas pu être mis à jour. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        });
});

export { updateBookRouter }; // Exporting the router for use in other files
