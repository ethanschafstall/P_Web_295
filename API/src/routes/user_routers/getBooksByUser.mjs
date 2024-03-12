import express from "express"; // Importing express for router creation
import { Book, User } from "../../db/sequelize.mjs"; // Importing Book and Review models from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import { Op } from "sequelize"; // Importing ValidationError and Op from sequelize

const getBooksByUserRouter = express(); // Creating a new instance of express router

getBooksByUserRouter.get("/:id/books", auth, (req, res) => {
    if(req.params.id) {
        return User.findOne({
            where: { id_user: { [Op.eq]: req.params.id } },
        }).then((user) => {
            if (user === null) {
                const message = "L'utilisateur demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
                return res.status(404).json({ message });
            }
            Book.findAll({
                where: { fk_user: { [Op.eq]: user.id_user } },
            }).then((books) => {
                if(books.length !=0){
                    const message = `Voici tout les livres de l'utilisateur "${user.usePseudo}"`;
                    res.json(success(message, books));
                }
            });
        }).catch((error) => {
            const message = "La liste des livres n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
            res.status(500).json({ message, data: error });
        })        
    }
});

export { getBooksByUserRouter }; // Exporting the router for use in other files