import { Sequelize, DataTypes} from "sequelize";
import { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel } from "../models/t_books.mjs";
import { books, reviews, publishers, categories, users, wrote } from "../db/mock-books.mjs";

const Book = bookModel(sequelize, DataTypes);
const Review = reviewModel(sequelize, DataTypes);
const Publisher = publisherModel(sequelize, DataTypes);
const Category = categoryModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);
const Wrote = wroteModel(sequelize, DataTypes);

/**
 * Sequelize instance used for coverting data formats, and general CRUD fuctions
 * @param { string } database - The database name to use with instance
 * @param { string } username - Username to connect to database
 * @param { string } password - Password to connect to database
 * @param { Options } options - Additional options (host info, type of sql dialect, logging)
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

/**
 * Initializes the database by connecting to it. Dropping all existing tables (force: true) which resets the database schema. Imports all the data
 * @returns { Sequelize } The result of the database synchronization
 */
let initDb = () => {
    return sequelize
    .sync({ force: true})
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
 * Imports book data by converting from json into mysql format and inserting them into the database
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
 * Imports reviews data by converting from json into mysql format and inserting them into the database
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
 * Imports publisher data by converting from json into mysql format and inserting them into the database
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
 * Imports category data by converting from json into mysql format and inserting them into the database
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
 * Imports user data by converting from json into mysql format and inserting them into the database
 */
const importUsers = () => {
    // TODO FOR LUCAS
};

/**
 * Imports wrote (intermediate table between users reviews & users) data by converting from json into mysql format and inserting them into the database
 */
const importWrote = () => {
    // TODO FOR LUCAS
};

export { sequelize, initDb, Book, Review, Publisher, Category, User, Wrote};