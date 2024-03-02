import { Sequelize, DataTypes} from "sequelize";
import { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel } from "../models/t_books.mjs";
import { books, reviews, publishers, categories, users, wrote } from "../db/mock-data.mjs";

/**
 * Establishes a connection to the MySQL database using Sequelize.
 * @param {string} "db_books" - The name of the database to connect to.
 * @param {string} "root" - The username for database authentication.
 * @param {string} "root" - The password for database authentication.
 * @param {object} options - Additional options for configuring the connection.
 * @param {string} options.host - The hostname of the database server.
 * @param {number} options.port - The port number of the database server.
 * @param {string} options.dialect - The dialect of the database (e.g., "mysql").
 * @param {boolean} options.logging - Whether to log SQL queries and errors.
 */
const sequelize = new Sequelize(
    "db_books",
    "root",
    "root",
    {
        host: "localhost",
        port: 6033,
        dialect: "mysql",
        logging: false,
    }
);

const Book = bookModel(sequelize, DataTypes);
const Review = reviewModel(sequelize, DataTypes);
const Publisher = publisherModel(sequelize, DataTypes);
const Category = categoryModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);
const Wrote = wroteModel(sequelize, DataTypes);

/**
 * Initializes the database by synchronizing Sequelize models with the database schema.
 * This function forces the synchronization by dropping existing tables.
 * After synchronization, it imports initial data into the tables.
 * @returns {Promise} A promise that resolves when the synchronization and data import are complete.
 */
let initDb = () => {
    return sequelize
    .sync({force: true})
    .then((_) => {
        importBooks();
        importReviews();
        importPublishers();
        importCategories();
        importUsers();
        importWrote();
        console.log("La base de données db_books a bien été synchronisée");
    });
};

/**
 * Imports books from a predefined array into the database.
 * Maps over each book in the array and creates a new record in the Book table.
 * @returns {void}
 */
const importBooks = () => {
    books.map((book) => {
        Book.create({
            id: book.id_book,
            title: book.booTitle,
            pageCount: book.booPageCount,
            extract: book.booExtract,
            summary: book.booSummary,
            avgRating: book.booAvgRating,
            coverImage: book.booCoverImage,
            pushlishDate: book.booPushlishDate
        }).then((book) => console.log(book.toJSON()));
    });
};

/**
 * Imports reviews from a predefined array into the database.
 * Maps over each review in the array and creates a new record in the Review table.
 * @returns {void}
 */
const importReviews = () => {
    reviews.map((review) => {
        Review.create({
            fkBook: review.fk_book,
            fkUser: review.fk_user,
            date: review.revDate,
            comment: review.revComment,
            rating: review.revRating,
        }).then((review) => console.log(review.toJSON()));
    });
};

/**
 * Imports publishers from a predefined array into the database.
 * Maps over each publisher in the array and creates a new record in the Publisher table.
 * @returns {void}
 */
const importPublishers = () => {
    publishers.map((publisher) => {
        Publisher.create({
            id: publisher.id_publisher,
            name: publisher.pubName,
        }).then((publish) => console.log(publish.toJSON()));
    });
};

/**
 * Imports categories from a predefined array into the database.
 * Maps over each category in the array and creates a new record in the Category table.
 * @returns {void}
 */
const importCategories = () => {
    categories.map((category) => {
        Category.create({
            id: category.id_publisher,
            name: category.pubName,
        }).then((category) => console.log(category.toJSON()));
    });
};

/**
 * Imports Users from a predefined array into the database.
 * Maps over each user in the array and creates a new record in the User table.
 * @returns {void}
 */
const importUsers = () => {
    users.map((user) => {
        User.create({
            id: user.id_user,
            pseudo: user.usePseudo,
            password: user.usePassword,
            joinDate: user.useJoinDate,
            bookCount: user.useBookCount,
            reviewCount: user.useReviewCount
        }).then((user) => console.log(user.toJSON()));
    });
};

/**
 * Imports relationship data between users and reviews into the database.
 * This function creates records in the "Wrote" table, which serves as an association table between users and reviews.
 * It maps over each relationship data and creates a new record in the "Wrote" table.
 * @returns {void}
 */
const importWrote = () => {
    wrote.map((wrote) => {
        Wrote.create({
            fk_book: wrote.fk_book,
            fk_author: wrote.fk_author
        }).then((wrote) => console.log(wrote.toJSON()));
    });
};

export { sequelize, initDb, Book, Review, Publisher, Category, User, Wrote};