import express from "express"; // Importing express for router creation
import { User } from "../../db/sequelize.mjs"; // Importing Book model from sequelize
import { success } from "../helper.mjs"; // Importing success helper function
import { auth } from "../../auth/auth.mjs"; // Importing auth middleware
import jwt from "jsonwebtoken"; // Importing jwt for token verification
import { privateKey } from "../../auth/private_key.mjs";

const getUserIdRouter = express(); // Creating a new instance of express router

getUserIdRouter.get("/", auth, (req, res, next) => {
  const authorizationHeader = String(req.headers["cookie"]);
  let tokenCookie = "";

  const allCookies = authorizationHeader.split(";");

  allCookies.forEach((cookie) => {
    if (cookie.startsWith(" token")) {
      tokenCookie = cookie;
    }
  });
  const token = tokenCookie.split("=")[1];
  // Finding the book by its primary key (ID)

  jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      // If token verification fails, return 401 Unauthorized status
      const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource`;
      return res.status(401).json({ message });
    }
    // Extracting user ID from the decoded token
    const userId = String(decodedToken.userId);

    // If everything is fine, proceed to the next middleware
    res.status(200).json({ id: userId });
  });
});

export { getUserIdRouter }; // Exporting the router for use in other files
