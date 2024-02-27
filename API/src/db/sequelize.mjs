import { Sequelize, DataTypes} from "sequelize";
import { bookModel, reviewModel, userModel, wroteModel, publisherModel, categoryModel } from "../models/t_books.mjs";

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

const importBooks = () => {
    t_books.map((book) => {
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

const importPublishers = () => {
    publishers.map((publisher) => {
        Publisher.create({
            id: publisher.id_publisher,
            name: publisher.pubName,
        }).then((publish) => console.log(publish.toJSON()));
    });
};

const importCategories = () => {
    categories.map((category) => {
        Category.create({
            id: category.id_publisher,
            name: category.pubName,
        }).then((category) => console.log(category.toJSON()));
    });
};

const importUsers = () => {
    // TODO FOR LUCAS
};

const importWrote = () => {
    // TODO FOR LUCAS
};

export { sequelize, initDb, Book, Review, Publisher, Category, User, Wrote};