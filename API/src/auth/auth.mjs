import jwt from "jsonwebtoken";
import { privateKey } from "./private_key.mjs";

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