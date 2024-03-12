import express from "express"; // Importing express for router creation
import { Book, Review } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize

const getReviewsByBookRouter = express(); // Creating a new instance of express router

getReviewsByBookRouter.get("/:id/reviews", auth, (req, res) => {
    if(req.params.id) {
        return Book.findOne({
            where: { id_book: { [Op.eq]: req.params.id } },
            
        }).then((book) => {
            if (book === null) {
                const message = "Le livre demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            Review.findAll({
                where: { fk_book: { [Op.eq]: book.id_book } },
            }).then((reviews) => {
                if(reviews.length !=0){
                    const message = `Voici tout les reviews du livre "${book.booTitle}"`;
                    res.json(success(message, reviews));
                }
            });
        }).catch((error) => {
            const message = "La liste des reviews n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        })        
    }
});

export { getReviewsByBookRouter }; // Exporting the router for use in other files
