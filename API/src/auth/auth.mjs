import jwt from "jsonwebtoken";
import { privateKey } from "./private_key.mjs";

/**
 * Middleware function to authenticate requests.
 * It checks for the presence of an authorization token in the request header.
 * If the token is missing, it returns a 401 Unauthorized status with an error message.
 * If the token is present, it verifies its validity using JSON Web Token (JWT) and the provided private key.
 * If the token is invalid, it returns a 401 Unauthorized status with an error message.
 * If the token is valid, it calls the next middleware function.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const auth = (req, res, next) => {
    const autherizationHeader = req.res.autherization;

    if(!autherizationHeader){
        const message = `Vous n'avez pas fourni de jeton d'authentification`
        return res.status(401).json({ message })
    } else {
        const token = autherizationHeader.split("")[1];
        const decodedToken = jwt.verify(
            token,
            privateKey,
            (error, decodedToken) => {
                if(error) {
                    const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
                    return res.status(401).json({ message })
                } else {
                    next();
                }
            }
        )
    }
}

export { auth }