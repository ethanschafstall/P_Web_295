import express from "express";
import { books } from "./db/mock-data.mjs";
import { success } from "./routes/helper.mjs";

import { initDb } from "./db/sequelize.mjs";


import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.mjs";

/**
 * Importing the book routers
 */
import { getAllBooksRouter } from "./routes/book_routers/getAllBooks.mjs"
import { getBookRouter } from "./routes/book_routers/getBook.mjs"
import { deleteBookRouter } from "./routes/book_routers/deleteBook.mjs"
import { updateBookRouter } from "./routes/book_routers/updateBook.mjs"

const app = express();
const port = 3000;

initDb();

/**
 * Handles GET requests to the root endpoint ("/").
 * Responds with a JSON object indicating a successful response.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
app.get("/", (req,res) => {
    
    res.json(success())
})

/**
 * Redirects requests to the root URL.
 * @param {string} path - The path of the incoming request.
 * @param {Object} reqBody - The request body object.
 * @param {Object} resBody - The response body object.
 */
app.get("/api/", (req,res) => {
    res.redirect(`http://localhost:${port}/`)
})

/**
 * Starts the server and listens for incoming connections on the specified port.
 * Once the server is running, logs the URL where it's accessible.
 * @param {number} port - The port number on which the server should listen.
 */
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

/**
 * Mounts Swagger UI middleware at the specified route.
 * This middleware serves the Swagger UI interface, allowing users to interact with API documentation.
 * @param {string} "/api-docs" - The route where the Swagger UI will be accessible.
 * @param {function} swaggerUi.serve - Middleware function that serves Swagger UI assets.
 * @param {function} swaggerUi.setup(swaggerSpec, options) - Middleware function that sets up Swagger UI with provided Swagger specification and options.
 * @param {object} swaggerSpec - The Swagger specification object describing the API.
 * @param {object} { explorer: true } - Options object passed to customize Swagger UI behavior (e.g., enabling the explorer).
 */
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, { explorer: true })
);

/**
 * Mounts routers for handling book-related API endpoints under the "/api/books" route.
 * Two different routers are mounted under the same route: `getAllBooksRouter` and `getBookRouter`.
 * Requests to "/api/books" will be processed by these routers based on their defined routes.
 */
app.use("/api/books", getAllBooksRouter)
app.use("/api/books", getBookRouter)
app.use("/api/books", deleteBookRouter)
app.use("/api/books", updateBookRouter)