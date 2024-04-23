import { Sequelize, DataTypes } from "sequelize";
import { books, reviews, publishers, categories, users, wrotes, authors } from "../db/mock-data.mjs";
import bcrypt from "bcrypt"
import { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel, authorModel, categorizeModel } from "../models/db_books.mjs";

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
        define: {
            timestamps: false,
          },
    }
);

const Publisher = publisherModel(sequelize, DataTypes);
const Book = bookModel(sequelize, DataTypes);
const Review = reviewModel(sequelize, DataTypes);
const Category = categoryModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);
const Wrote = wroteModel(sequelize, DataTypes);
const Author = authorModel(sequelize, DataTypes);
const Categorize = categorizeModel(sequelize, DataTypes);

/**
 * UNUSED
 * Initializes associations between different tables/entities in the database schema.
 * This function establishes relationships such as "belongsTo" and "hasMany" 
 * among various entities, enabling efficient querying and data retrieval.
 * 
 * Associations defined:
 * - Association between t_wrotes and t_books
 * - Association between t_authors and t_wrotes
 * - Association between t_books and t_users
 * - Association between t_users and t_reviews
 * - Association between t_books and t_reviews
 * - Association between t_publishers and t_books
 * - Association between t_books and t_categories
 * 
 * @returns {void}
 */


// REMOVED FROM API UNTILL PROPER FIX IS FOUND
const initAssociations = () => {
    // Association between t_publishers and t_books

    Publisher.hasMany(Book,{
        foreignKey: {
            name: 'fk_publisher'}
    });  
    // Association between t_authors and t_wrotes

    Author.hasMany(Wrote,{
        foreignKey: {
            name: 'fk_author'}
    });
    // Association between t_books and t_categories

    Category.hasMany(Book,{
        foreignKey: {
            name: 'fk_category'}
    });   
    // Association between t_wrotes and t_books

    Book.hasMany(Wrote,{
        foreignKey: {
            name: 'fk_book'}
    });
    // Association between t_books and t_users

    User.hasMany(Book,{
        foreignKey: {
            name: 'fk_user'}
    });
    // Association between t_users and t_reviews
    
    User.hasMany(Review,{
    }); 
    // // // Association between t_books and t_reviews

    Book.hasMany(Review,{
        foreignKey: {
            name: 'fk_book'}
    }); 

}

// initAssociations();


/**
 * Initializes the database by synchronizing Sequelize models with the database schema.
 * This function forces the synchronization by dropping existing tables.
 * After synchronization, it imports initial data into the tables.
 * @returns {Promise} A promise that resolves when the synchronization and data import are complete.
 */
let initDb = () => {
    return sequelize
        .sync({ force: true })
        .then((_) => {
            importPublishers();
            importAuthors();
            importCategories();
            importUsers();
            importBooks();
            importWrote();
            importReviews();
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
            id_book: book.id_book,
            booTitle: book.booTitle,
            booPageCount: book.booPageCount,
            booExcerpt: book.booExcerpt,
            booSummary: book.booSummary,
            booAvgRating: book.booAvgRating,
            booCoverImage: book.booCoverImage,
            booPublishDate: book.booPublishDate,
            fk_user: book.fk_user,
            fk_publisher: book.fk_publisher,
            fk_category: book.fk_category,
        })
        .then((book) => console.log(book.toJSON()));
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
            fk_book: review.fk_book,
            fk_user: review.fk_user,
            revDate: review.revDate,
            revComment: review.revComment,
            revRating: review.revRating,
        })
        .then((review) => console.log(review.toJSON()));
    });
};

/**
 * Imports relationship data between users and reviews into the database.
 * This function creates records in the "Wrote" table, which serves as an association table between users and reviews.
 * It maps over each relationship data and creates a new record in the "Wrote" table.
 * @returns {void}
 */
const importWrote = () => {
    wrotes.map((wrote) => {
        Wrote.create({
            fk_book: wrote.fk_book,
            fk_author: wrote.fk_author
        })
        //.then((wrote) => console.log(wrote.toJSON()));
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
            id_publisher: publisher.id_publisher,
            pubName: publisher.pubName,
        })
        //.then((publish) => console.log(publish.toJSON()));
    });
};

/**
 * Imports authors from a predefined array into the database.
 * Maps over each author in the array and creates a new record in the Author table.
 * @returns {void}
 */
const importAuthors = () => {
    authors.map((author) => {
        Author.create({
            id_author: author.id_author,
            autFirstName: author.autFirstName,
            autLastName: author.autLastName
        })
        //.then((publish) => console.log(publish.toJSON()));
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
            id_category: category.id_category,
            catName: category.catName,
        })
        //.then((category) => console.log(category.toJSON()));
    });
};

/**
 * Imports Users from a predefined array into the database.
 * Maps over each user in the array and creates a new record in the User table.
 * @returns {void}
 */
const importUsers = () => {
    users.map((user) => {
        bcrypt
            .hash(user.usePassword, 10)
            .then((hash) => 
                User.create({
                    id_user: user.id_user,
                    usePseudo: user.usePseudo,
                    usePassword: hash,
                    useJoinDate: user.useJoinDate,
                    useBookCount: user.useBookCount,
                    useReviewCount: user.useReviewCount
                })
            )
            .then((user) => console.log(user.toJSON()))
    })
};

export { sequelize, initDb, Book, Review, Publisher, Category, User, Wrote, Author, Categorize };