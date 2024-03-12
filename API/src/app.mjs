import express from "express";
import { success } from "./routes/helper.mjs";

import { initDb } from "./db/sequelize.mjs";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.mjs";

// Used to fix the request body not being parsed properly.
import bodyParser from "body-parser";



/**
 * Importing the book routers
 */
import { getAllBooksRouter } from "./routes/book_routers/getAllBooks.mjs"
import { getBookRouter } from "./routes/book_routers/getBook.mjs"
import { deleteBookRouter } from "./routes/book_routers/deleteBook.mjs"
import { createBookRouter } from "./routes/book_routers/createBook.mjs"
import { updateBookRouter } from "./routes/book_routers/updateBook.mjs"

/**
 * Importing the review routers
 */
import { getAllReviewsRouter } from "./routes/review_routers/getAllReviews.mjs";
import { getReviewsByBookRouter} from "./routes/review_routers/getReviewsByBook.mjs"
import { createReviewRouter } from "./routes/review_routers/createReview.mjs";
/**
 * Importing the login router
 */
import { loginRouter } from "./routes/login_routers/login.mjs";

/**
 * Importing the categories router
 */
import { getAllCategoriesRouter } from "./routes/category_routers/getAllCategories.mjs";
import { getCategoryRouter } from "./routes/category_routers/getCategory.mjs";
import { getBooksByCategoryRouter } from "./routes/category_routers/getBooksByCategory.mjs";

/**
 * Importing the authors router
 */
import { getAllAuthorsRouter } from "./routes/author_routers/getAllAuthors.mjs";
import { getAuthorRouter } from "./routes/author_routers/getAuthor.mjs";


/**
 * Importing the publishers routes
 */
import { getAllPublishersRouter } from "./routes/publisher_routes/getAllPublishers.mjs";
import { getPublisherRouter } from "./routes/publisher_routes/getPublisher.mjs";

/**
 * Importing the users routes
 */
import { getBooksByUserRouter } from "./routes/user_routers/getBooksByUser.mjs";

const app = express();
app.use(bodyParser.json());
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
 * Mounts routers for the books of the API 
 */
app.use("/api/books", getAllBooksRouter)
app.use("/api/books", getBookRouter)
app.use("/api/books", deleteBookRouter)
app.use("/api/books", createBookRouter)
app.use("/api/books", updateBookRouter)

/**
 * Mounts routers for the reviews of the API 
 */
app.use("/api/books", getReviewsByBookRouter)
app.use("/api/reviews", getAllReviewsRouter)
app.use("/api/books", createReviewRouter)

/**
 * Mounts routers for the categories of the API 
 */
app.use("/api/categories", getAllCategoriesRouter)
app.use("/api/categories", getCategoryRouter)
app.use("/api/categories", getBooksByCategoryRouter)
/**
 * Mounts routers for the authors of the API 
 */
app.use("/api/authors", getAllAuthorsRouter)
app.use("/api/authors", getAuthorRouter)

/**
 *  Mounts routers for the publishers of the API
 */
app.use("/api/publishers", getAllPublishersRouter)
app.use("/api/publishers", getPublisherRouter)
/**
 * Mounts routers for the login of the API 
 */
app.use("/api/login", loginRouter)

/**
 * Mounts routers for the reviews of the API 
 */
app.use("/api/users", getBooksByUserRouter)


/**
 * This route is for the unfindable routes that the user gives and it gives an 404 error
 */
app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL."
    res.status(404).json(message)
})