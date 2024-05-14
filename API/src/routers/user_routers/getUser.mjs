import express from "express"; // Importing express for router creation
import { User } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import jwt from "jsonwebtoken"; // Importing jwt for token verification
import { privateKey } from "../../auth/private_key.mjs";


const getUserRouter = express(); // Creating a new instance of express router

getUserRouter.get("/:id", auth, (req, res) => {
    const authorizationHeader = String(req.headers['cookie'])
    let tokenCookie = ''

    const allCookies = authorizationHeader.split(';')

    allCookies.forEach((cookie) => {
      if(cookie.startsWith(' token')){
        tokenCookie = cookie
      }
    })
    const token = tokenCookie.split('=')[1]
    // Finding the book by its primary key (ID)
    User.findByPk(req.params.id)
        .then((user) => {
            // If the book doesn't exist, return 404 error
            if(user === null){
                const message = `L'utilisateur demandé n'existe pas. Merci de réessayer avec un autre identifiant.`
                return res.status(404).json({ message })
            }
            console.log(token)
            jwt.verify(token, privateKey, (error, decodedToken) => {
                if (error) {
                    // If token verification fails, return 401 Unauthorized status
                    const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
                    return res.status(401).json({ message });
                }
                // Extracting user ID from the decoded token
                const userId = decodedToken.userId;
                console.log(userId)
                console.log(req.params.id)
                // Checking if the user ID in the request body matches the one in the token
                if (req.params.id && req.params.id !== userId) {
                    // If user ID in the request body doesn't match the one in the token, return 401 Unauthorized status
                    const message = `L'identifiant de l'utilisateur est invalide`;
                    res.status(401).json({ message });
                } else {
                    // If everything is fine, proceed to the next middleware
                    next();
                } 
            });

            // If the book exists, return success message along with the book data
            const message = `L'utilisateur dont l'id vaut ${user.id_user} a bien été récupéré`
            res.json(success(message, user))
        })
        .catch((error) => {
            // If an error occurs during the process, return a generic error message
            const message = `L'utilisateur n'a pas pu être récupéré. Merci de réessayer dans quelques instants`;
            res.status(500).json({message, data: error})
        })
})

export { getUserRouter } // Exporting the router for use in other files
